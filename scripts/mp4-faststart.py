"""Move the `moov` atom in front of `mdat` so browsers can read MP4 metadata
without downloading the whole file (equivalent to `ffmpeg -movflags +faststart`).

Usage:  python scripts/mp4-faststart.py <file.mp4> [more.mp4 ...]

The file is rewritten in place only after the rebuilt copy has been re-parsed
and its chunk offsets validated. Files that already have `moov` before `mdat`
are left untouched.
"""

import os
import shutil
import struct
import sys
import tempfile

CONTAINERS = {b"moov", b"trak", b"mdia", b"minf", b"stbl", b"edts", b"udta"}


def read_atoms(data, start=0, end=None):
    """Yield (type, atom_start, header_size, atom_size) at one nesting level."""
    end = len(data) if end is None else end
    pos = start
    while pos + 8 <= end:
        size = struct.unpack(">I", data[pos : pos + 4])[0]
        atom_type = bytes(data[pos + 4 : pos + 8])
        header = 8
        if size == 1:
            size = struct.unpack(">Q", data[pos + 8 : pos + 16])[0]
            header = 16
        elif size == 0:
            size = end - pos
        if size < header:
            raise ValueError(f"corrupt atom {atom_type!r} at {pos}")
        yield atom_type, pos, header, size
        pos += size


def find_offset_tables(data, start, end, found):
    """Collect (kind, table_start, entry_count) for every stco/co64 under moov."""
    for atom_type, pos, header, size in read_atoms(data, start, end):
        if atom_type in (b"stco", b"co64"):
            body = pos + header
            count = struct.unpack(">I", data[body + 4 : body + 8])[0]
            found.append((atom_type, body + 8, count))
        elif atom_type in CONTAINERS:
            find_offset_tables(data, pos + header, pos + size, found)


def shift_offsets(moov, shift):
    """Return a copy of the moov atom with every chunk offset moved by `shift`."""
    buffer = bytearray(moov)
    tables = []
    # moov itself is the outermost atom of this buffer
    _, pos, header, size = next(iter(read_atoms(buffer)))
    find_offset_tables(buffer, pos + header, pos + size, tables)
    if not tables:
        raise ValueError("no stco/co64 table found inside moov")
    moved = 0
    for kind, table_start, count in tables:
        width = 4 if kind == b"stco" else 8
        fmt = ">I" if width == 4 else ">Q"
        for index in range(count):
            at = table_start + index * width
            value = struct.unpack(fmt, buffer[at : at + width])[0] + shift
            if width == 4 and value > 0xFFFFFFFF:
                raise ValueError("offset overflows 32-bit stco; needs co64 rewrite")
            buffer[at : at + width] = struct.pack(fmt, value)
            moved += 1
    return bytes(buffer), moved


def faststart(path):
    data = open(path, "rb").read()
    top = list(read_atoms(data))
    order = [atom_type.decode("latin1") for atom_type, *_ in top]
    if "moov" not in order or "mdat" not in order:
        return f"skip (no moov/mdat): {order}"
    if order.index("moov") < order.index("mdat"):
        return f"already faststart: {order}"

    moov_slice = next((p, s) for t, p, _, s in top if t == b"moov")
    moov = data[moov_slice[0] : moov_slice[0] + moov_slice[1]]
    rest = [
        data[p : p + s] for t, p, _, s in top if t != b"moov" and t != b"free"
    ]
    # everything after ftyp shifts forward by the size of the relocated moov
    patched, moved = shift_offsets(moov, len(moov))

    head, tail = [], []
    for chunk, (atom_type, *_rest) in zip(rest, [t for t in top if t[0] not in (b"moov", b"free")]):
        (head if atom_type == b"ftyp" else tail).append(chunk)

    out = b"".join(head) + patched + b"".join(tail)

    # validate: re-parse and confirm the first chunk offset lands inside mdat
    check = list(read_atoms(out))
    check_order = [t.decode("latin1") for t, *_ in check]
    if check_order.index("moov") > check_order.index("mdat"):
        raise ValueError("rebuild failed: moov still after mdat")
    mdat_pos, mdat_size = next((p, s) for t, p, _, s in check if t == b"mdat")
    tables = []
    _, mpos, mheader, msize = next(
        (t, p, h, s) for t, p, h, s in check if t == b"moov"
    )
    find_offset_tables(out, mpos + mheader, mpos + msize, tables)
    for kind, table_start, count in tables:
        width = 4 if kind == b"stco" else 8
        fmt = ">I" if width == 4 else ">Q"
        for index in (0, count - 1):
            value = struct.unpack(
                fmt, out[table_start + index * width : table_start + index * width + width]
            )[0]
            if not (mdat_pos < value < mdat_pos + mdat_size):
                raise ValueError(
                    f"offset {value} outside mdat [{mdat_pos},{mdat_pos + mdat_size})"
                )

    handle, temporary = tempfile.mkstemp(dir=os.path.dirname(path) or ".", suffix=".tmp")
    with os.fdopen(handle, "wb") as file:
        file.write(out)
    shutil.move(temporary, path)
    return (
        f"faststart applied: {check_order}, {moved} chunk offsets shifted "
        f"by {len(moov)} bytes"
    )


if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    for target in sys.argv[1:]:
        print(f"{os.path.basename(target):<34} {faststart(target)}")
