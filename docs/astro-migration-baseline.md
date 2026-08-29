# Astro migration baseline

> [USER] 2026-07-27：开始渐进式 Astro 迁移；三个重点项目保留为后续逐项审核任务；本地完成并校验前不提交、不推送。

## Canonical visual reference

- `bauhaus-dual-theme-layout.html`
- SHA-256: `8016B9A721DFA033186E8C0263976FFAC40AAAEC7C437886AA4422AE5B9A9504`

## Canonical project data reference

- `projects.js`
- SHA-256: `967866A8DD43052D4C57DBFEC4018928279EFE656FA4FE98561A52B97B040807`

## Canonical Hero reference

- `assets/hero/HERO_GAME_ASM_FLUID_SIM_v2.0.html`
- SHA-256: `631C443860278133A589CD18C9E6C569A6C0DD1C73A72742A2B717D2CA97F0E0`

## Migration rule

- 上述三个文件在迁移阶段保留为只读对照，不删除、不覆盖。
- Astro 第一阶段只迁移页面壳层、双语路由、数据渲染和 Hero iframe 接入。
- 三个重点项目的文案、事实、交互和最终视觉不在本阶段定稿。
- 若 Astro 版本与基准发生有意差异，必须记录在 `communication.md` 并由用户审核。
