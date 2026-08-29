import { cp, mkdir, rm } from "node:fs/promises";

const sourceUrl = new URL("../assets/", import.meta.url);
const targetUrl = new URL("../public/assets/", import.meta.url);

await rm(targetUrl, { recursive: true, force: true });
await mkdir(targetUrl, { recursive: true });
await cp(sourceUrl, targetUrl, { recursive: true });
await cp(
  new URL("../node_modules/animejs/dist/bundles/anime.umd.min.js", import.meta.url),
  new URL("../public/assets/vendor/anime.umd.min.js", import.meta.url)
);
console.log("Synced public assets from the canonical assets directory.");
