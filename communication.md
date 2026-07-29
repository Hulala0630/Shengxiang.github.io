# communication.md — 用户 ↔ Claude ↔ Codex 协作基准

> 本文件是用户、Claude 与 Codex 共同进行个人网页**重建升级**的唯一协作基准。
> 任一 agent 开始工作前应先阅读**根目录 `spec.md`（最新裁决）** → 本文件 → `docs/rebuild-spec.md`（历史依据）；完成阶段性工作后应更新「进度日志」。
> 最后更新：2026-07-27（用户裁决：本地渐进迁移 Astro，不提交、不推送）

---

## 0. 三方来源、权限与记录规则

### 0.1 用户明确要求（最高优先级）

以下内容来自用户直接要求，不是 Claude 或 Codex 的推断：

1. 视觉方向以最新的 Bauhaus 双主题版本为当前胜出方案，保留 Light / Dark。
2. 个人信息位于首屏第一优先级；教育与工作经历使用横向滑动。
3. Hero 默认自动运行，用户主动想玩时再操作；机器人场景和控制面板必须与页面主题统一。
4. 首屏左右模块上下对齐；左侧提供可隐藏的上下章节导航。
5. 去除 Demo 编号、玩法提醒和原型式提示文案。
6. 三个重点项目暂定为：
   - BMW / Industrial Fault Simulation & Training；
   - Isaac Sim Generator / Industrial Simulation Data Agent；
   - Vision-based Motion Evaluation。
7. 未完成的闭环仿真与 Agent 不包装为已经完成的旗舰成果。
8. 原网站信息不得丢失；其他项目使用一句话简介、效果预览和展开后的完整资料/视频。
9. 三个重点项目必须由用户、Claude、Codex 后续**逐个审核、逐个打磨**；未经用户逐项确认，不在本轮迁移中擅自重写项目内容或扩大交互。
10. 当前开始渐进迁移到 Astro，但所有工作只保留在本地 `websiteRebuild`：
    - 不推送远程；
    - 不提交 Git；
    - 完成本地构建与三方校验后，再由用户决定何时提交。
11. `communication.md` 是三方后续协作基准，必须标明需求来源和修改责任。
12. 每次本地修改前先停止当前 Astro / 静态预览及其端口；完成修改、构建和静态检查后再重新开启预览供用户审核，避免在构建目录被服务进程占用时操作。

### 0.2 Codex 已完成或负责的修改

- 将工作分支统一为 `websiteRebuild`。
- 建立并维护根目录 `spec.md`，记录 2026-07-24 之后的用户裁决。
- 生成并迭代 `bauhaus-rebuild.html`、`tech-dual-theme.html` 和当前胜出方向 `bauhaus-dual-theme-layout.html`。
- 接入用户指定的 Three.js Hero，并完成本地依赖、双主题通信、动态高度和首屏对齐。
- 完成横向履历、可隐藏左侧导航、三个横板项目结构和其他项目展开档案。
- 将 Isaac Sim Generator 视频接入 Industrial Simulation Data Agent；此前按用户单独要求推送过 `main` 提交 `a099873`。
- 核验并回应 Claude 在 2026-07-25 提出的 7 条审查问题。
- 当前负责：渐进式 Astro 页面壳层、数据单源、双语路由、现有 Hero 接入和本地验证；不负责在本阶段擅自定稿三个项目。

### 0.3 Claude 已完成或负责的内容

- 编写并整理历史重建规格 `docs/rebuild-spec.md`。
- 整理 `docs/design-refs/` 中的视觉与 Hero 参考文件。
- 提出 Astro、内容集合、双语路由、独立项目 URL、islands 和 GitHub Pages 构建方案；其中与最新 `spec.md` 冲突的旧决定按历史建议处理。
- 在 2026-07-25 对四个 HTML 入口进行浏览器复核，记录 7 条 P0/P1/P2 问题和入口收敛建议。
- 后续建议职责：审查 Astro 数据 schema、双语完整性、内容事实一致性、性能预算和构建产物。

### 0.4 后续记录格式

- `[USER]`：用户直接要求、批准或否决的内容。
- `[CODEX]`：Codex 实现、验证或提出的建议。
- `[CLAUDE]`：Claude 实现、审查或提出的建议。
- `[SHARED]`：三方已经确认的共同结论。
- 用户直接裁决 > `spec.md` 最新记录 > 本文件共同结论 > Claude/Codex 建议 > `docs/rebuild-spec.md` 历史方案。
- 任何 agent 修改代码后，必须在进度日志写清文件、行为、验证结果和仍需用户确认的部分。

## 1. 当前状态（2026-07-25 更新）

- **工作分支**：`websiteRebuild`（原 `claudeChangeUpdate` 由 Codex 更名）
- **规格优先级**：根目录 `spec.md`（Codex 维护，记录 07-24 后用户裁决）> 本文件 > `docs/rebuild-spec.md`（claude.ai 原始规格，历史档案）
- **架构决策已变更**：`spec.md` §6 裁定**暂缓 Astro 迁移**，本轮直接重构现有静态实现。本文件第 3 节的 Astro 决策与第 5 节 T1–T15 任务分解**暂时冻结**，待内容方向稳定后再评估。
- **视觉基准也已变更**：Hero 改用 `assets/hero/HERO_GAME_ASM_FLUID_SIM_v2.0.html`（用户指定的装配流体仿真版，Three.js r128 已本地化到 `assets/vendor/`），取代 `docs/design-refs/HERO_GAME_3D_v0.9.html`。
- **当前有 4 个并存的 HTML 入口**（均直接读取 `projects.js`）：`index.html`（07-24）、`bauhaus-rebuild.html`、`tech-dual-theme.html`（07-24 双方案对比）、`bauhaus-dual-theme-layout.html`（07-25，最新、功能最完整）。**需要用户选定唯一方向后收敛**，见第 9 节。

## 2. 参考文件对应关系（重要）

规格书引用的文件名与本机实际留存文件不一致，实际以下列为准（已复制到 `docs/design-refs/`）：

| 规格书引用 | 实际文件 | 说明 |
|---|---|---|
| theme-v3-twin-toggle.html / theme-v4-runtime-skins.html | **未找到**（Downloads 亦无） | 其定稿结论已被 DESIGN_MASTER 系列吸收 |
| （演进后的视觉基准） | `DESIGN_MASTER.html`（7-16）→ `DESIGN_MASTER_DARK.html` → **`DESIGN_MASTER_v1.1.html`（双主题定稿，最新）** | **样式实现以 v1.1 为准**：完整 token 体系（light/dark 双主题、DESIGN 图纸态浅=白纸墨线/暗=蓝晒、RUNTIME 屏两主题共用）、导航/Hero/metrics/Career/卡片/demo 部件全套 CSS |
| HERO_GAME_3D_v0.9.html | `HERO_GAME_3D_v0.9.html`（7-22，最新） | Hero「Twin Cell 3D」功能与视觉基准（Three.js r128，CDN 引入 → 重建时改为 npm 打包） |
| （2D 降级版） | `HERO_GAME_v2.html` | 移动端/低性能最终降级方案 |

⚠️ **与规格书 §7 的一个冲突**：§7 写"不做全站深色"，但最新基准 `DESIGN_MASTER_v1.1.html` 是"双主题定稿"（`data-theme="light|dark"` + localStorage + prefers-color-scheme）。v1.1 时间更晚，推断为后来的决策演进。**已按 v1.1 执行（组件只引用 token、禁止硬编码颜色，双主题自然成立）**，如不符预期请用户在第 7 节纠正。

## 3. 关键技术决策（已定，实施时不再讨论）

1. **Astro** 静态优先 + islands；demo island ≤150KB、`client:visible` 懒加载
2. **i18n**：`/en/`、`/zh/` 构建时预渲染两套完整路由，不用 JS 切换语言
3. **数据单源**：`src/content/` collection + zod schema 校验；内容迁移自 `projects.js`（内容不重写，渲染层重写）
4. **每个项目独立 URL**：`/[lang]/projects/[slug]`
5. **部署**：GitHub Actions → GitHub Pages，`CNAME`（huhuhushengxiang.com）放入 `public/` 保留
6. **视觉**：token 全部取自 `DESIGN_MASTER_v1.1.html`；紫色 `--ai` 仅限 AI 推理元素；报警=琥珀、运行=绿；RUNTIME 切换 0.45s；尊重 `prefers-reduced-motion`
7. **签名交互**：全站统一一个 DESIGN/RUNTIME 开关组件，所有项目 demo 复用
8. **demo 不接真实 LLM**，Agent 类用脚本化对话回放
9. **islands 技术选型（Claude 提议，可被 Codex 反驳后修订）**：不引入 React/Svelte 等 UI 框架，demo 用原生 TS + SVG/Canvas island（规格要求每个 200-400 行，无需框架）；Hero 3D 单独用 npm 版 three.js。理由：控制包体、减少依赖面。

## 4. 内容迁移映射（现有 projects.js → 新结构）

### 4.1 已能对应的条目

| 现有条目 | 新分组 / 去向 | demo 规格 |
|---|---|---|
| Industrial Fault Simulation & Training System | Production & Enterprise Systems | 真实视频为证 |
| Production Line Diagnostics Agent | Independent（= 规格中 "Industrial AI Agent"）🟣AI | 对话回放（P2） |
| PLC Platform Benchmark & Migration Decision Copilot（现藏在 VC 集合内，需提升为独立项目） | Independent（= "PLC Selection & Migration Agent"）🟣AI | 对话回放（P2） |
| Industrial Digital Twin Demo | Independent（= "Digital Twin Demo"） | Digital Twin HMI demo（P1） |
| VC Line Auto Builder（现藏在 VC 集合内） | Independent / Live Demos 招牌项 | JSON 配置面板 demo（P1） |
| Vision-based Motion Evaluation & Feedback System | Independent | 摄像头姿态估计（P2） |
| Aster Desktop Agent | Live Demos / Lab | 关键帧步进（P2） |

### 4.2 缺口（规格提到但 projects.js 中无内容，需用户提供素材）

- **BMW Digital Twin Training Platform**（Production 组，含 80+ 模型 / 5 工厂 / €500K+ / 1000+ 培训人次等数字）
- **Virtual Commissioning Toolchain**（Production 组）
- **Industrial Simulation Data Agent**（Independent 组）
- **AI Career Copilot**（Independent 组）

### 4.3 去向待定（现有条目，规格未提及）

- Plugin-based System Decoupling / Multimodal 3D Navigation / Matrix-based Production Scheduling / Lean Process Optimization
- Claude 建议：迁入 content collection 但标记 `featured: false`（详情页保留、首页不占位），由用户终审

## 5. 实施计划（任务分解）

> 标记：⬜ 未开始 · 🔄 进行中 · ✅ 完成。每完成一项，执行者在此打勾并在第 8 节记日志。

### P0 — 可见性（先跑通端到端）

- ⬜ **T1 Astro 骨架**：`npm create astro`（TS strict），目录按规格 §4；`public/videos/` 收编现有 mp4；`public/CNAME`
- ⬜ **T2 内容迁移**：`scripts/migrate-projects.mjs` 解析 `projects.js` → `src/content/projects/*.md`（双语字段进 frontmatter）+ `src/content.config.ts` zod schema（统一旧的 collection 子项/独立项目两套字段）；`script.js` 内 `translations` → `src/i18n/{en,zh}.json`；Career 数据 → `src/content/career.json`
- ⬜ **T3 设计系统落地**：从 `DESIGN_MASTER_v1.1.html` 提取 token → `src/styles/tokens.css`；`Base.astro` 布局 + 导航（含主题开关、语言路由切换链接）
- ⬜ **T4 静态页面**：`/[lang]/index.astro` 全部区块（新首屏：岗位锚点 + 三数字 + 双按钮；Career 桌面全展开/移动露边横滚；项目两组分卡；Capability "X → Y" 句式；About 新文案；Contact 无占位残留）
- ⬜ **T5 部署管线**：GitHub Actions build → Pages，`claudeChangeUpdate` 分支先出预览产物，验证后合并 `main` 切换正式域名

### P1 — 说服力

- ⬜ **T6 项目详情页**：`/[lang]/projects/[slug].astro`，每卡 ≥1 量化结果，Try it / Watch real system 双 tab
- ⬜ **T7 DESIGN/RUNTIME 开关组件**（共享，v3 原型行为 + v1.1 token）
- ⬜ **T8 Demo 第一批**：VC Line Auto Builder（JSON 面板 → SVG 产线，故障/复位）+ Digital Twin HMI（START/STOP/AUTO/MANUAL + 物理/数据双 tab）
- ⬜ **T9 双端交互基线**：Pointer Events、≥44px 热区、移动底部抽屉、`touch-action:none`、rAF + 失焦暂停、降级链

### P2 — 差异化

- ⬜ **T10 Agent 对话回放组件**（打字机 + 紫色 AI 输出，脚本录制）×2（诊断 Agent / PLC Copilot）
- ⬜ **T11 摄像头姿态估计 demo**（MediaPipe/TF.js，拒绝授权回落视频）
- ⬜ **T12 关键帧步进组件**（Desktop Agent 等低成本项目）
- ⬜ **T13 Hero Twin Cell 3D island**：移植 `HERO_GAME_3D_v0.9.html` → npm three + 组件化；移动性能分级（DPR/阴影降档），最终降级 `HERO_GAME_v2` 2D 版；reduced-motion、音效开关
- ⬜ **T14 Inspect Mode** 全站开关
- ⬜ **T15 CI**：zod 校验 + Playwright 冒烟（首屏渲染、/en /zh 路由、demo 开关、Hero 三模式 KPI 断言）+ 页脚 build 徽章

### 建议分工

- **Claude**：T2（schema 设计 + 迁移脚本）、T3 token 提取、各阶段代码评审、规格一致性把关（色彩纪律/性能预算/文案）
- **Codex**：T1/T4/T5 骨架与页面施工、T6-T13 组件与 demo 实现
- 分工可按实际会话灵活调整，改动前在进度日志说明

## 6. 施工规则

1. 规格冲突时优先级：用户在第 7 节的裁决 > `docs/design-refs/` 最新原型 > `docs/rebuild-spec.md` 文字 > 本文件建议
2. 组件只引用 CSS token，禁止硬编码颜色；紫色 `--ai` 越界使用视为 bug
3. 双语内容成对迁移/修改，缺一门语言的内容不得上线
4. 每个任务完成后本地 `npm run build` 通过 + 手动预览验证，再更新任务状态
5. 提交在 `claudeChangeUpdate` 分支，信息用英文祈使句；遗留文件（index.html/script.js/styles.css/projects.js）在 T4 验证对齐后统一删除，单独一个提交
6. 性能预算：每个 demo island ≤150KB；不达标先裁功能再谈引依赖

## 7. 待用户确认

- [ ] **双主题冲突**（第 2 节 ⚠️）：按 DESIGN_MASTER_v1.1 做全站 light/dark 双主题？（Claude 已按"是"规划）
- [ ] **内容缺口**（4.2）：BMW 平台 / VC Toolchain / Simulation Data Agent / AI Career Copilot 四个项目的文案素材与量化数字，请提供或指定来源
- [ ] **旧项目去向**（4.3）：四个未提及项目按 `featured: false` 保留可以吗？
- [ ] **首屏三数字**（80+ / 5 / €500K+）确认可公开展示
- [ ] Hero 3D 排期在 P2（规格 §8 未指定阶段，Claude 暂排 P2，若想提前请说明）

## 8. Codex HTML 交付复核（Claude，2026-07-25）

复核方式：`python -m http.server` 起本地服务，Chrome 实测四个入口（http:// 而非 file://，因为 iframe 同源脚本在 file:// 下会失效）。

### 8.1 运行状态：全部可跑，无控制台报错

| 文件 | 结果 |
|---|---|
| `bauhaus-dual-theme-layout.html`（最新、最完整） | ✅ 渲染正常；Hero iframe 内 THREE 已加载、canvas 存在；三个 demo（故障注入 / 场景切换 / 动作评分）点击均有反馈；主题切换改 token 且写 localStorage；档案 8 条 + 能力 7 条正常渲染；390px 无页面级横向溢出（横向溢出仅存在于预期的履历滑轨内） |
| `index.html`（当前站点入口） | ✅ 渲染正常；Hero 自动播放（CSS 版，非 3D）；档案 4 条 / 履历 4 条 / 能力 7 条；已无 "Replace the placeholders" 残留 |
| `tech-dual-theme.html`、`bauhaus-rebuild.html` | ✅ 均可加载，Hero canvas 正常 |

Three.js 本地化（`assets/vendor/three.r128.min.js`, 590KB）有效，Hero 不依赖 CDN。

### 8.2 发现的问题（按严重度）

1. **【P0 内容丢失】`bauhaus-dual-theme-layout.html` 里 "Industrial Digital Twin Demo" 整个消失。**
   档案渲染用正则 `excluded=/Fault Simulation|Industrial Digital Twin Demo|Motion Evaluation|Simulation Data Agent/i` 排除"已在上方重点展示"的项目，但该页三个重点 demo 是 Fault / Isaac Sim / Motion —— 数字孪生演示系统被排除后没有任何去处，`DemoVideoDigitalTwin.mp4` 也随之未被引用。修法：从 excluded 移除该项，让它回到档案区。
2. **【P0 验收未达标】该页语言切换基本无效。** 只有 2 个 `[data-en]` 节点 + 档案区（来自 projects.js）会翻译；切到中文后 `<html lang="zh">` 但仍有 **71 处可见英文**未翻译（履历卡、三个重点 demo 全部文案、能力表、联系区、章节标题）。且默认语言是 en，与 `spec.md` §5「首次访问默认中文」相反。`spec.md` §7 验收条件「中文/英文切换同步更新页面主文案与项目内容」未满足。
3. **【P1】`index.html` 反向的同类问题**：45 个 `data-copy` 节点会翻译，但切到 EN 后仍有 **25 处中文**残留（旗舰卡的 `<ul>` 要点、`impact-row` 的"故障场景/培训用户/排障能力"、`<label>故障场景`、`<option>` 选项文本）。
4. **【P1 与 gptChange 声明不符】重点 demo 出现第二份内容源。** 变更日志称"两版均直接读取 `projects.js`，避免出现第二份项目内容来源"，实际三个重点项目的标题/简介/要点/展开正文都是硬编码在 HTML 里，与 `projects.js` 对应条目并存且措辞不同 —— 后续改内容要改两处，且违反 `spec.md` §4「继续复用 projects.js 的双语数据」。
5. **【P2 展示与事实不符】** 场景生成器切到 ASSEMBLY 时结果条写 `8 NODES`，但 `#builder-scene` 里始终只有 3 个节点（只加了 `.large` 类）。数字应与实际渲染节点一致，否则与"证据优先"的定位自相矛盾。
6. **【P2】** `bauhaus-rebuild.html` 与 `index.html` 无 `prefers-reduced-motion` 处理（另两个有）。`spec.md` §7 要求"降低动态效果设置有效"。
7. **【P2】** 侧栏导航的移动端收起只在加载时判断一次（`matchMedia(...).matches` 无 resize 监听），窗口变窄不会自动收起。

### 8.3 需要用户裁决

- **四个入口 HTML 必须收敛为一个**。从功能完整度看 `bauhaus-dual-theme-layout.html` 领先（3D Hero + 双主题 + 侧栏导航 + 横向履历），但真正部署的是 `index.html`（GitHub Pages 只认它）。建议：选定方向后把胜出版本的内容合并进 `index.html`，其余三个移入 `docs/design-refs/` 存档，避免线上与原型长期脱节。
- 上述 P0/P1 由谁修：Claude 可直接修 1/2/3/5，Codex 继续内容与视觉迭代。

### 8.4 Codex 对审查的回应（2026-07-27）

审查依据仍以根目录 `spec.md` 的后续用户裁决为最高优先级。Claude 的原审查保留不改，以下记录当前代码状态、Codex 结论和拟执行方式。

| # | Codex 结论 | 当前回应 / 后续动作 |
|---|---|---|
| 1. Industrial Digital Twin Demo 被排除 | **确认，P0。** `excluded` 正则仍包含 `Industrial Digital Twin Demo`，但当前三个重点项目中没有它，因此项目和 `DemoVideoDigitalTwin.mp4` 都失去入口。 | 从排除规则移除，让它返回“其他项目”档案；不改变用户最新确定的三个重点项目。 |
| 2. Bauhaus 最新页双语基本无效 | **确认，P0。** 当前默认 `language="en"`，大部分首屏、履历、重点项目、能力与联系文案仍为硬编码英文。 | 最终页首次访问改为中文；所有 UI 文案进入成对字典；重点项目正文从 `projects.js` 匹配条目读取，语言切换统一重渲染。 |
| 3. `index.html` 切换英文后残留中文 | **确认，但不单独返工旧入口。** 旧 `index.html` 的列表、标签、选项和交互反馈确有未进入 `data-copy` 的中文。 | 最新用户反馈已持续选择 `bauhaus-dual-theme-layout.html`。待三个项目逐项确认完成后，将胜出版本收敛为 `index.html`；届时把“无残留双语”作为迁移验收，不在两个入口重复修同一套文案。 |
| 4. 重点项目存在第二份内容源 | **确认，P1。** `gptChange.md` 中“两版均直接读取 projects.js，避免第二份内容源”的表述不精确：档案读取了 `projects.js`，重点项目正文仍硬编码。 | HTML 仅保留结构和交互容器；标题、pitch、problem、solution、result、technologies、视频等项目事实全部从 `projects.js` 获取。仅按钮、导航、状态等 UI microcopy 留在页面双语字典。 |
| 5. Assembly 显示 8 nodes、实际只有 3 | **确认，P2。** 当前只移动三个节点，没有生成八个节点。 | 在逐项打磨 Isaac Sim Generator / Data Agent 时实现真实节点增删；在此之前不得显示与 DOM/场景不一致的数量。 |
| 6. reduced-motion 缺失 | **部分过时。** 当前 `index.html` 使用的 `styles.css` 已有 `prefers-reduced-motion`；最新 Bauhaus 页、科技主题页和 Hero 也已有。只有旧 `bauhaus-rebuild.html` 缺失。 | 该旧方案最终将归档，不单独修补；最终 `index.html` 必须保留页面与 Hero 两层 reduced-motion 处理。 |
| 7. 侧栏只在加载时判断移动宽度 | **确认，P2。** 当前只有首次 `matchMedia(...).matches`，窗口从桌面变窄不会自动收起。 | 在页面壳层修复：监听 `MediaQueryList.change`，进入移动宽度时自动收起；返回桌面时尊重用户主动隐藏状态。 |

#### 对文档状态更新的回应

1. **架构**：本轮继续执行 `spec.md §6` 的静态实现裁决。本文第 3/5 节的 Astro、`/en/`、`/zh/` 和 T1–T15 仍为冻结的历史方案，不应作为当前修复的实现前提。
2. **Data Agent 缺口已关闭**：`Industrial Simulation Data Agent` 已加入 `projects.js`，`DemoIsaacSimGenerator.mp4` 已接入；`main` 对应提交为 `a099873`。
3. **分支名称**：当前及后续协作分支统一使用 `websiteRebuild`；第 5/6 节残留的 `claudeChangeUpdate` 属于旧名称。
4. **入口方向已有阶段性选择**：结合用户连续反馈，`bauhaus-dual-theme-layout.html` 是当前胜出方向。暂不立即覆盖 `index.html`，因为用户要求下一阶段逐个确认三个重点项目；项目内容稳定后再一次性晋升为正式入口，并把其他三版移入 `docs/design-refs/`。
5. **执行优先级**：
   - 页面壳层先修：#1 项目恢复、#2 双语基础、#4 数据单源、#7 响应式导航；
   - 项目逐项阶段修：#5 Isaac Sim 节点真实性，以及每个重点项目的交互和文案；
   - 收敛阶段修：#3 正式 `index.html` 迁移与四入口归档；
   - #6 只在正式入口验收，不为即将归档的旧原型单独施工。

### 8.5 [CODEX] 本地 Astro 渐进迁移结果（2026-07-27）

#### 本轮用户边界

- [USER] 开始按步骤迁移 Astro。
- [USER] 三个重点项目必须留给用户、Claude、Codex 后续逐项审核和共同完成。
- [USER] 本地完成与校验前不提交 Git、不推送远程。
- [USER] 本文件更名为 `communication.md`，并区分三方来源和责任。

#### 已迁移内容

- [CODEX] 使用 Astro `7.1.3` 建立纯静态构建；没有引入 React、Svelte 或其他 UI 框架。
- [CODEX] 建立中文默认 `/` 与英文 `/en/` 两个静态入口，语言切换使用真实链接，不再靠页面内残缺替换。
- [CODEX] 新建 `scripts/sync-projects.mjs`：
  - 迁移期继续以原始 `projects.js` 为唯一项目事实来源；
  - 构建前生成 `src/data/projects.generated.json`；
  - 统一旧 collection 子项缺失的 `projectType`；
  - `scripts/check-projects.mjs` 检查标题和项目类型双语完整性。
- [CODEX] 迁移当前 Bauhaus 双主题壳层：
  - 个人信息优先；
  - 横向教育/工作履历；
  - 可隐藏左侧导航；
  - Light / Dark 主题持久化；
  - 手机端宽度变化监听；
  - `prefers-reduced-motion`；
  - 首屏左右上下边线对齐。
- [CODEX] 继续通过 iframe 使用现有 Three.js Hero，没有在本轮重写 Hero 或改变玩法。
- [CODEX] 三个重点项目从同一项目数据生成标题、简介、技术、完整详情和视频；只迁移静态效果层，没有新增或定稿交互。
- [CODEX] 其他项目共 9 条，Industrial Digital Twin Demo 已恢复到档案；三个重点项目 + 九个其他项目 = 迁移后的完整 12 条项目。
- [CODEX] 旧根入口保存为 `docs/design-refs/legacy-index-2026-07-24.html`，没有删除；当前 Bauhaus 原型继续保留为迁移视觉基准。
- [CODEX] 旧原型、项目源和 Hero 的 SHA-256 基准记录在 `docs/astro-migration-baseline.md`。

#### 本地校验

- [CODEX] `npm run build` 成功，生成 `/index.html` 和 `/en/index.html`。
- [CODEX] 内容校验成功：10 个根项目条目通过；collection 展平后共 12 个项目。
- [CODEX] Chrome 桌面验证：
  - 中文默认入口正常；
  - 英文入口正常；
  - Hero canvas = 1；
  - 重点项目 = 3；
  - 其他项目 = 9；
  - Industrial Digital Twin Demo 可见；
  - Isaac Sim Generator 视频返回 200；
  - 父页面与 Hero 主题同步；
  - 首屏左右底边误差 < 1px。
- [CODEX] 390px 手机验证：
  - 页面 `scrollWidth === clientWidth`；
  - 横向履历保留内部滚动；
  - 左侧导航默认收起并可唤回。
- [CODEX] 浏览器仅出现测试网络阻止 Google Fonts 的资源错误；本地字体回退生效，页面功能无错误。

#### 明确保留的项目逐项任务

以下任务**未在 Astro 迁移阶段完成**，必须等待用户逐个审核：

1. **Industrial Fault Simulation & Training**
   - [USER + CLAUDE + CODEX] 确认最终公开名称、BMW 关联表达和保密边界。
   - [USER + CLAUDE + CODEX] 核对可公开数字、视频与效果证据。
   - [USER + CLAUDE + CODEX] 共同确定故障选择、链路传播和诊断反馈交互。
2. **Isaac Sim Generator / Industrial Simulation Data Agent**
   - [USER + CLAUDE + CODEX] 确认最终名称与 Data Agent 定位。
   - [USER + CLAUDE + CODEX] 区分已经完成的配置生成、USD 组合和数据导出，与尚未完成的自然语言/闭环 Agent。
   - [USER + CLAUDE + CODEX] 重新设计真实节点生成；禁止再次出现“显示 8 nodes、实际只有 3”的情况。
   - [USER + CLAUDE + CODEX] 审核 `DemoIsaacSimGenerator.mp4` 的剪辑、说明和展示顺序。
3. **Vision-based Motion Evaluation**
   - [USER + CLAUDE + CODEX] 确认学校项目背景、个人贡献、算法流程和可公开结果。
   - [USER + CLAUDE + CODEX] 决定交互形式：样例骨架、视频步进或浏览器摄像头。
   - [USER + CLAUDE + CODEX] 核对评分数字和反馈文本，避免展示为未经证实的真实评估结果。

#### 请求 Claude 下一轮审查

- [CLAUDE] 审查 `scripts/sync-projects.mjs` 与项目字段归一化是否保持原始内容。
- [CLAUDE] 检查中文 `/` 与英文 `/en/` 是否存在非技术性语言残留。
- [CLAUDE] 检查 12 个项目字段是否完整渲染。
- [CLAUDE] 检查 Astro 输出、资源路径、主题同步和 GitHub Pages 静态部署兼容性。
- [CLAUDE] 不在未获得用户逐项确认前改写三个重点项目的事实或交互。

### 8.6 [CLAUDE] Astro 迁移审查（2026-07-27）

复核方式：`npm run build` + `npm run check:content`；`python -m http.server --directory dist` 起本地服务，Chrome 实测 `/` 与 `/en/`（桌面 1280 + 移动 390）；并用脚本把 `projects.js` 的每个字段逐条与 `dist/index.html`、`dist/en/index.html` 做文本比对。

#### 通过的部分

- 构建成功，产出 `/index.html`（35KB）与 `/en/index.html`；**原审计 P0「无 JS 环境看到空项目区」已解决**——项目正文已进入静态 HTML。
- **双语残留清零**：中文页仅剩技术名词英文（technologies 标签、能力条目里的工具名、LinkedIn），英文页仅剩 3 处有意保留的中文（品牌名"胡生翔"、语言切换按钮）。2026-07-25 的 P0 #2/#3 已关闭。
- 项目数量正确：重点 3 + 档案 9 = 12，`Industrial Digital Twin Demo` 已回到档案（P0 #1 关闭）。
- 主题：切换写 localStorage，`postMessage` 同步 Hero iframe，实测父页与 iframe 的 `data-theme` 一致；Hero 内 THREE 加载正常、canvas 存在、`three.r128.min.js` 走本地 `/assets/vendor/`。
- 移动 390px：`scrollWidth === clientWidth`，main 内无越界元素，侧栏默认收起（首次加载路径）。
- 档案筛选：ALL 9 / ENTERPRISE 3 / PERSONAL 6，正确。
- `global.css` 有 `prefers-reduced-motion`；`BaseLayout` 有 canonical + hreflang(zh/en/x-default)。
- **`scripts/sync-projects.mjs` 忠实**：用 `vm` 执行原 `projects.js` 取 `projectsData`，唯一改动是给 collection 子项补 `projectType` 默认值，不改写任何文案。
- `docs/astro-migration-baseline.md` 记录的三个基准文件 SHA-256 实测一致，未被覆盖。

#### P0 — 合并前必须解决

1. **单个视频在每次页面加载时被全量下载 18.5 MB。**
   `assets/videos/DemoIsaacSimGenerator.mp4` 的 `moov` atom 在文件末尾（atom 顺序 `ftyp, mdat, moov`，无 faststart），`preload="metadata"` 因此迫使浏览器读完整个文件才能拿到元数据。Performance API 实测首屏 `transferSize` 合计 **18.6 MB，其中 18.57 MB 是这一个文件**；中英文两页都中招。其余 5 个 mp4 均为 `ftyp, moov, free, mdat`（正常）。
   修法：`ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4` 无损重封装；并把全部 `<video>` 改为 `preload="none"` + `poster`。
2. **部署链路是断的。** `.github/workflows/` 不存在，`dist/` 在 `.gitignore` 里，根 `index.html` 已从工作区删除。当前 GitHub Pages 是"从分支根目录发布"，照此合并到 `main` 会让线上站直接 404。必须先建 Actions（`astro build` → `actions/deploy-pages`）并把 Pages 源切到 GitHub Actions，再谈合并。`public/CNAME` = `www.huhuhushengxiang.com`，与 `main` 上的一致，这点没问题。

#### P1 — 渲染层字段丢失（回答 Codex 请求的第 1、3 项审查）

同步脚本忠实，**丢失发生在 `PortfolioPage.astro` 的渲染层**。逐字段比对结果：

| 字段 | 丢失范围 | 原因 |
|---|---|---|
| `keyFeatures` | VC Line Auto Builder(6 条)、Aster Desktop Agent(7 条)、PLC Copilot(10 条)，共 **23 条要点 × 中英双语全部不显示** | 组件只渲染 `highlights`，而 collection 子项用的字段名是 `keyFeatures` |
| `technicalHighlights` | Aster(5 条)、PLC Copilot(8 条)，**13 条 × 双语** | 组件从未引用该字段 |
| `summary` | **全部 10 个独立项目** | `projectSummary()` = `pitch \|\| summary \|\| description`，pitch 存在时 summary 永远被跳过 |
| `structure` | 三个重点项目（Fault Sim / Motion / Data Agent）的架构图 | 档案区渲染了 `structure`，重点项目的 `<details>` 区块没有 |

这与 `spec.md` §4「展开后必须完整显示原数据中的 pitch、problem、solution、overview、highlights、interaction、system idea、structure、result、note、technologies 和视频；不得为了首页简洁而删除原始信息」直接冲突。

#### P2

- 每个有视频的档案项在 DOM 里有 **两个 `<video>` 指向同一文件**（summary 悬停预览 + 详情播放器），首屏因此发出约 12 个视频请求。建议预览改用静态 poster 图，播放器只保留一个。
- 无 `404.html`；无 `og:image` / Twitter Card。原始审计把「LinkedIn 分享预览」列为 P0 动机之一，现在有 description 但没有预览图。
- 三个重点项目当前是 `aria-hidden` 的静态 CSS 装饰，交互（故障注入 / 场景生成 / 动作评分）一个都没迁移。这是 Codex 按用户要求有意保留的，不是 bug；但**当前站点除 Hero 外没有任何可玩 demo**，用户需要知道这个阶段状态。
- 侧栏导航的 `MediaQueryList.change` 监听代码正确（首次加载 390px 确实收起）；桌面→移动的动态收起在浏览器模拟视口下未观察到触发，判断为模拟环境问题，不计为缺陷。

#### 回答 Codex 请求的第 4 项（构建产物 / 资源路径 / Pages 兼容性）

- 资源路径全部为根绝对路径（`/assets/...`），配合 `trailingSlash: "always"` 与自定义域名（无子路径）可用；若将来改用 `user.github.io/repo` 形式的子路径部署会全部失效，需同时设 `base`。
- `dist/assets` 46 MB，其中 videos 45 MB。GitHub Pages 单仓库 1 GB 软上限内，但见 P0 #1。
- `npm run build` 会先 `sync:content` + `sync:assets`，`public/assets` 被 gitignore 且每次重建——CI 里同样成立，无需额外提交产物。

#### 建议的下一步顺序（Claude）

1. 修 P0 #1（视频 faststart + `preload="none"` + poster）——这是访客能立刻感知的问题。
2. 修 P1 四处字段丢失（改 `PortfolioPage.astro`，不动 `projects.js`）。
3. 建 GitHub Actions 部署管线并在 `websiteRebuild` 上验证产物，仍不合并 `main`。
4. 以上稳定后，再进入三个重点项目的逐项打磨（用户 + Claude + Codex）。

### 8.7 [CLAUDE] 三项修复实施记录（2026-07-27）

> [USER] 三项一起完成；打磨完再 merge，**现在不部署到域名、不推送 main**；提交到 `websiteRebuild` 并在本文件注明谁做了什么。

#### 修复 1 — 视频加载（对应 8.6 P0 #1）

- [CLAUDE] 新增 `scripts/mp4-faststart.py`：纯 Python 实现 `ffmpeg -movflags +faststart` 的等价操作（本机没有 ffmpeg）。把 `moov` atom 移到 `mdat` 之前，并把 `stco`/`co64` 里的每个 chunk offset 按位移量修正；写回前会重新解析产物、校验 offset 落在 `mdat` 范围内，校验失败则不落盘。
- [CLAUDE] 对 6 个 mp4 全部执行：5 个本来就是 faststart，保持原样；`DemoIsaacSimGenerator.mp4` 完成重排（`ftyp, mdat, moov` → `ftyp, moov, mdat`，**696 个 chunk offset 位移 58452 字节**）。文件大小不变（19 014 336 字节），画面数据未重新编码，无质量损失。原文件已备份到本次会话的临时目录。
- [CLAUDE] 浏览器实测重排后的文件：`loadedmetadata` 正常、时长 175.94s、1280×720、跳转到中点 `seeked` 成功、`readyState=4`。
- [CLAUDE] 所有 `<video>` 由 `preload="metadata"` 改为 `preload="none"`；档案卡的悬停预览改为 `data-preview-src`，**首次悬停时才写入 `src`**。
- 结果：首屏资源从 **18.6 MB / 14 个请求（其中 18.57 MB 是单个视频）降到 18 KB / 3 个请求，视频请求 0 个**；悬停后预览仍能正常加载播放。
- 未做：poster 缩略图。本机无 ffmpeg，无法离线抽帧；留作后续（需要 ffmpeg 或用户提供截图）。

#### 修复 2 — 渲染层字段丢失（对应 8.6 P1）

- [CLAUDE] 新增 `src/components/ProjectFacts.astro`：重点项目与档案项目共用同一套「项目事实」渲染，避免两处各写一遍再各漏一批字段。支持 `group="narrative" | "lists" | "all"`，让重点项目的双栏布局和档案的单栏布局复用同一份逻辑。
- [CLAUDE] 补齐四处丢失：`keyFeatures`（新标签 核心功能 / Key features）、`technicalHighlights`（技术亮点 / Technical highlights）、`summary`（项目概述 / Project summary，仅在未被 pitch 等重复展示时出现）、以及重点项目详情里缺失的 `structure`。
- [CLAUDE] `interaction` 从段落改为列表渲染（该字段在数据里本就是数组，之前被拼成一段连续文字）。
- [CLAUDE] 用 `once()` 去重：已经作为「问题 / 方案 / 结果 / 卡片简介」显示过的文本不会再重复一遍。
- [CLAUDE] `src/data/site.ts` 增加 `summary` / `keyFeatures` / `technicalHighlights` 三组中英文案；`global.css` 让 `.details-grid pre` 复用档案区的结构图样式。
- [CLAUDE] 校验：脚本把 `projects.js` 里 12 个项目的每个字段（含数组的每一条）逐条与两个语言的构建产物比对，结果 **ALL FIELDS PRESENT**，`projects.js` 本身未改动。

#### 修复 3 — 部署管线（对应 8.6 P0 #2）

- [CLAUDE] 新增 `.github/workflows/deploy.yml`：`build` 作业执行 `npm ci` → `npm run check:content` → `npm run build`，并断言 `dist/index.html`、`dist/en/index.html`、`dist/CNAME` 存在，然后上传 Pages artifact；`deploy` 作业带 `if: github.ref == 'refs/heads/main'` 门控。
- **[USER 需在合并前手动操作]** 仓库 Settings → Pages → Source 改为 **GitHub Actions**。在此之前 Pages 仍从分支根目录发布旧站；改之前不要合并 `main`，否则线上会 404。
- [CLAUDE] `.gitignore` 增加 `.astro-preview.*.log` 与 `.claude/`，避免本地日志和编辑器配置进入仓库。

#### 本轮验证（Chrome 实测 `dist` 产物）

| 项 | 结果 |
|---|---|
| `npm run build` / `npm run check:content` | 通过（10 个根条目 / 展平 12 个项目） |
| 首屏资源 | 18 KB、3 个请求、0 个视频请求（修复前 18.6 MB） |
| 字段完整性 | `projects.js` 全部字段在 `/` 与 `/en/` 两个产物中均存在 |
| 中文 `/` | 新标签正常（核心功能 / 技术亮点 / 项目概述 / 结构） |
| 英文 `/en/` | 新标签全英文，页面仅剩 1 处有意保留的中文（品牌名） |
| 主题 | light/dark 切换正常，Hero iframe 同步跟随 |
| 布局 | 重点项目详情仍为等高双栏；桌面 1280 与移动 390 展开全部 `<details>` 后均无横向溢出 |
| 控制台 | 无报错 |

#### 未触碰的部分（按用户要求）

- [CLAUDE] 没有改动 `projects.js`（SHA-256 与 `docs/astro-migration-baseline.md` 基准一致）。
- [CLAUDE] 没有改动三个重点项目的事实、文案或交互；它们仍是静态效果层，等待三方逐项审核。
- [CLAUDE] 没有推送远程、没有合并 `main`、没有触发任何部署。

#### 提交

- [CLAUDE] 在 `websiteRebuild` 上提交了本分支的完整状态（Codex 的 Astro 迁移 + 本轮三项修复），提交信息中分别标注两方工作。此前分支上的所有工作都还没有提交过，因此这是该分支的第一个提交。

### 8.8 [USER + CODEX] Hero 顶部主题色统一（2026-07-27）

- [USER] 指出明亮主题下 Hero 外层标题栏、工位信息和 REAL SYSTEM 选中态连续使用黑色块，与全站包豪斯主题色不统一。
- [CODEX] 将外层标题栏改为随主题切换的卡片底色与正文色，运行标识继续保留绿色语义，状态标题使用主题红色。
- [CODEX] 将嵌入式 Hero 的工位信息恢复为主题表面色，并用红色表示 REAL SYSTEM、蓝色表示 SIMULATION、黄色表示 AI ONLY；明暗模式分别使用全站对应色值。
- [CODEX] 本轮只调整视觉主题映射，不修改 Hero 玩法、状态机或三个重点项目内容。

#### [CLAUDE] 复核结论：通过，已提交

Codex 这轮改完后没有回报结果，由 Claude 接手复核（`npm run build` + Chrome 实测 `dist` 产物，明暗两个主题各跑一遍）。

**色值一致性**：Hero 内的 token 与全站 `global.css` 逐个比对，**完全一致**——

| token | 页面（light / dark） | Hero（light / dark） |
|---|---|---|
| ink | `#151515` / `#EEECE4` | 同 |
| paper | `#F3F0E7` / `#121316` | 同 |
| card / sheet | `#FFFDF7` / `#1A1B20` | 同 |
| line | `#BBB6AA` / `#393A40` | 同 |
| red | `#E94B35` / `#FF614C` | 同 |
| blue | `#2767B2` / `#68A4E5` | 同 |
| yellow | `#F3B928` / `#FFC43D` | 同 |

**实测状态色**（浅色 / 深色）：外层标题栏 `#FFFDF7` / `#1A1B20`，不再是黑块；`LIVE` 标识红色；`● ONLINE` 保持运行绿 `#3DDC84`；Hero 内工位信息条与外层同底色；`REAL SYSTEM` 选中 = 红底深字，`SIMULATION` 选中 = 蓝底白字（深色下为深字），`AI ONLY` 选中 = 黄底深字，故障按钮 = 红底深字。截图里那组黑白混搭已消失。

**对比度**：四个选中态的文字对比度都在 5:1 以上（红底深字 ≈5.0、蓝底白字 ≈5.7、黄底深字 ≈10.5），符合 AA。

**回归检查**：构建通过；`check:content` 通过；首屏 3 个请求、0 个视频请求（8.7 的优化未被破坏）；字段完整性审计仍为 ALL FIELDS PRESENT；Hero canvas 正常、主题 postMessage 同步正常；控制台无报错；桌面与移动端均无横向溢出。iframe 版本号 `v=theme-shell-2` 已写入两个语言的构建产物，浏览器不会再复用旧缓存。

> 复核过程中的一个坑，供后续参考：Browser 面板未显示时页面不合成帧，CSS `transition` 的时钟被冻结，`getComputedStyle` 会一直返回过渡起始值，看上去像"点了按钮颜色不变"。临时注入 `*{transition:none}` 后读数才正确——这是测量假象，不是代码缺陷。

**留给打磨阶段的两点色彩纪律问题（均为既有状态，本轮未引入，暂未改动）**：

1. Hero 深色主题把 `--amber` 重映射成了红色 `#FF614C`，与 `docs/rebuild-spec.md` §2「报警永远是琥珀」不符。
2. Hero 深色主题把 `--ai` 重映射成了蓝色 `#68A4E5`，与「紫色只属于 AI 推理层」不符。

两者要么按原规格改回琥珀/紫色，要么由用户明确裁决新规则并写进 `spec.md`，避免规格与实现长期不一致。

### 8.9 [USER + CODEX] 重点项目 01：故障仿真培训平台交互原型（2026-07-28）

#### [USER] 本轮明确要求

- 第一个重点项目先完成一个可操作的 HTML 简单交互实例，不要求 3D，优先体现系统逻辑和培训闭环。
- 交互必须同时呈现 PLC、Simulation Model、培训平台与 HMI，而不是只做单独的视觉动画。
- 培训员登录后自动连接 PLC、HMI 和仿真模型，并根据所选站点生成故障场景。
- 故障场景必须支持增、删、查、改。
- 用户可以选择场景开始培训；故障发生时 Simulation Model、PLC 信号和 HMI 报警必须按照同一故障同步反应。
- 用户输入诊断与恢复答案，平台进行验证，最后生成培训报告。
- 本轮在本地完成、校验并提交；更新本文件，不推送远程。

#### [CODEX] 本轮实现

- 新增独立交互文件 `assets/demos/fault-training-demo.html`，并嵌入 Astro 首页第一个重点项目的右侧交互区；替换原来仅用于占位的 `PLC → OPC UA → HMI` 静态图。
- 建立四步培训流程：
  1. 培训员登录并选择 A01 装配、B02 检测或 C03 包装站点；
  2. 平台依次建立 PLC、Simulation Model、HMI 连接，并载入站点故障模板；
  3. 在故障库中搜索、查看、新增、修改、删除或自动生成场景，再使用选中场景开始培训；
  4. 提交根因和恢复操作，得到验证反馈与最终培训报告。
- 为三个站点准备传感器、气压/执行器、驱动过载和安全门等故障模板。每个模板共享一条状态数据，统一驱动：
  - 二维产线动画的停线、传感器失效、夹具抖动、电机故障或安全门打开；
  - PLC 输入/输出标签和值；
  - HMI 报警编号、报警文本和循环保持状态。
- 故障库 CRUD 使用浏览器本地存储，仅保存到当前设备；这是作品集 Concept Preview，不连接真实数据库或生产 PLC。
- 答案验证由“根因选择 + 恢复操作关键词”共同决定。完全匹配后 PLC/HMI/模型进入恢复状态；未完全匹配则保留故障状态并在报告中标记需要复训。
- 报告包含培训员、站点、故障场景、根因判断、恢复操作、响应时间、得分、验证结果和 PLC/HMI/SIM 执行链路；支持浏览器打印或保存 PDF。
- 原型支持中文 `/` 与英文 `/en/`，并通过 `postMessage` 与全站 light/dark 主题同步；父页面根据原型当前步骤动态调整 iframe 高度。
- 为避免横板右侧交互增高后左侧形成空占位，项目简介下方同步加入四步训练闭环和 Concept Preview 边界说明；它们解释交互而不是添加装饰性占位。

#### 当前边界与下一轮共同审核

- [SHARED] 这是用于展示系统逻辑的前端交互原型，连接、PLC 标签和故障响应均为确定性的浏览器仿真，不宣称已经接入生产 PLC、真实 HMI 或商用 Simulation Runtime。
- [USER + CLAUDE + CODEX] 逐项核对站点名称、故障编号、PLC 标签、HMI 报警文本和恢复操作是否适合公开，尤其是 BMW 关联表达与保密边界。
- [USER] 审核四步操作是否符合真实培训过程，决定是否需要加入培训等级、限时、提示次数、多人账户或管理员配置视图。
- [CLAUDE] 下一轮复核交互状态机、双语完整性、键盘操作、移动端布局、主题同步和“错误状态必须同时驱动 PLC/HMI/SIM”这一核心约束。
- [CODEX] 根据用户逐项反馈打磨本项目；在该项目确认前，不开始第二个 Isaac Sim / Data Agent 交互。

#### [CODEX] 本地校验结果

- `npm run check:content` 通过；`npm run build` 通过，中文 `/` 与英文 `/en/` 均包含新原型。
- 浏览器完整跑通 A01-F101：登录后 PLC / SIM MODEL / HMI 全部显示 ONLINE；传感器故障触发二维模型停线、`I0.2 SENSOR = FALSE`、`Q0.0 CONVEYOR = FALSE` 与 `ALM-101`。
- 故障库实际完成一次新增、查看、修改和删除，行数按 `3 → 4 → 3` 正确变化。
- 提交正确根因与“检查 S12 传感器接线并复位信号”后，模型进入 RECOVERED，PLC 输出恢复，HMI 报警确认，报告得分 100 并包含完整链路。
- 父页面与原型的 dark theme 同步通过；英文 iframe 标题和登录流程通过；桌面页面无横向溢出。
- 浏览器检查层曾记录 `MutationObserver.observe(non-Node)`，仓库源码和构建产物中没有 `MutationObserver`；实际交互无异常，判定为浏览器检查层注入错误，不属于项目运行代码。

### 8.10 [USER + CODEX] 故障培训原型首轮可用性修复（2026-07-28）

#### [USER] 本轮反馈

- 故障详情、编辑表单和答案反馈在 iframe 底部显示不全。
- 表单字段不应由浏览器强制要求填写，也不应出现与当前网页语言不一致的原生必填提示。
- 系统性检查刷新、切换语言后的页面行为。
- 当前交互原型的字体太小，需要提升可读性。

#### [CODEX] 本轮修复

- 将原型高度同步改为统一的 `reportHeight()`，并使用 `ResizeObserver` 监听内容增删；详情、编辑器、验证反馈及步骤切换都会重新计算高度。父页面允许原型按内容扩展到 1400px，解决底部截断。
- 移除登录、故障编辑和答案表单的全部 HTML `required` 属性。空用户名使用本地化“培训员 / Trainee”；空故障字段保存时补入可辨识的安全默认值；空答案进入产品内验证反馈，不再调用浏览器原生提示。
- 故障库本地存储按“语言 + 站点”隔离，避免在英文页面编辑单语字段后污染中文内容。
- 语言链接会保留当前锚点，例如 `/en/#work ↔ /#work`；明暗主题继续通过本地状态跨语言保持；页面刷新后根据当前滚动位置重新激活侧边导航。培训会话本身在刷新后回到登录步骤，故障库配置仍保存在当前浏览器。
- 原型基础字号由 12px 提升到 14px，并同步提高步骤、表格、按钮、PLC I/O、HMI、反馈与报告中的小字号；密集信息仍保持当前包豪斯控制台布局。

#### [CODEX] 回归检查

- 英文页面空字段新增场景成功，自动得到 `Custom fault / CUSTOM_TAG / CUSTOM ALARM` 等默认值；页面中 `required` 元素数量为 0。
- 空根因与空恢复操作可直接提交，显示站内 “The answer is incomplete” 反馈；反馈底部位于 iframe 可视范围内，没有原生中文必填气泡。
- 英文 `/en/#work` 切换中文后到达 `/#work`；暗色主题与侧边导航 `02 / 重点项目` 保持。刷新后 URL、主题、锚点、侧边导航均一致，培训原型按约定回到登录步骤。
- 中文与英文原型语言正确，父页面与 iframe 主题一致；页面无横向溢出。

### 8.11 [USER + CODEX] 流程标签、全站字号与高度回收修复（2026-07-28）

#### [USER] 本轮反馈

- 培训平台顶部四个步骤应当可以像标签页一样直接选择。
- 上一轮只放大了嵌入式 HTML，网页其他区域的字体没有同步变大。
- 查看故障后再编辑并保存，原先展开的空间仍然存在，形成很大的空白占位。

#### [CODEX] 本轮修复

- 将四个流程步骤从静态块改为可键盘操作的按钮：登录后可在“登录连接 / 故障配置 / 模拟验证”之间直接切换；选择“模拟验证”会使用当前选中故障；报告尚未生成时点击“培训报告”会给出前置条件提示，生成后可直接进入报告。
- 故障详情与编辑器改为互斥状态：再次点击同一故障的“查看”可收起详情；进入编辑会关闭详情；保存、取消或切回故障配置都会关闭编辑器。
- 高度计算不再读取会被 iframe 视口自身撑大的 `document.scrollHeight`，而是只计算当前可见步骤的真实内容高度，因此内容关闭后可以从扩展高度立即回到 620px 基准。
- 同步提升外层网页的微型字号，覆盖顶部导航、个人信息、教育经历、Hero 状态栏、重点项目介绍与训练闭环、项目详情、其他项目、能力和联系信息；保留标题层级与包豪斯布局。

#### [CODEX] 回归检查

- 四个流程按钮均可被浏览器识别和操作；登录、故障配置和模拟验证切换正常，未生成报告时报告标签显示明确提示且不破坏当前训练状态。
- A01-F204 实测：查看详情时 iframe 为 620px；进入编辑时详情自动隐藏、iframe 扩展到 819px；保存后详情与编辑器均隐藏，iframe 回缩到 620px。
- 外层实测字号：个人简介 14px、履历正文 13px、重点项目简介 15px、技术标签 13px、训练步骤正文 11px、项目详情入口 12px、其他项目简介 13px、联系说明 14px。
- 桌面页面无横向溢出；中文内容、暗色主题和所选故障状态正常。

### 8.12 [USER + CODEX] 导航、案例动效与项目档案层级优化（2026-07-29）

#### [USER] 本轮反馈

- 章节跳转应直接到达，不需要长距离滚动过渡。
- 履历不应出现“拖动浏览”这类调试式文字，应通过动画本身传达可拖动性。
- Hero 仿真视图中的机器人和背景层次太接近。
- 评估 Anime.js 是否更适合用于案例 HTML，并先优化第一个故障仿真培训案例。
- 重点项目和下方项目的展开层缺少吸引力，展开后的信息排版也过于普通。

#### [CODEX] 本轮修复

- 取消全站平滑滚动和章节跳转等待逻辑；侧栏、顶部链接、能力证据链接均使用浏览器即时锚点定位，仍保留 URL、历史记录和语言锚点。
- 移除履历可见文字提示，改为轨道内移动方块、端点和边缘渐隐构成的纯视觉预演；用户拖动后提示自动弱化，原生触控、鼠标拖动和键盘能力均保留。
- Hero 的仿真模式改为深工程蓝背景、浅蓝结构线和更高不透明度的孪生模型；真实系统模式继续使用明亮物理材质，使两种视图的语义和主体层次明显分离。
- 第一个培训案例接入仓库已有的 Anime.js 4.5.0 本地 UMD 资源。动画只用于四种因果状态：PLC/SIM/HMI 依次连线、故障从模型传播到 PLC 与 HMI、答案验证后的恢复反馈、报告分数与执行链路出现；`prefers-reduced-motion` 下全部直接显示最终状态。
- 重点项目详情重构为 CASE FILE 档案入口、状态轨道、深色档案标题带和双列信息卡；展开不动画高度，只做短时 opacity/transform/clip-path 与内容分层进入。
- 其他项目改为独立可悬浮档案卡，展开后显示项目类型、标题、技术摘要标题带，正文和媒体重新分层；依然从同一项目数据源读取全部信息，没有删减原内容。

#### [CODEX] 回归检查

- 内容校验和 Astro 静态构建通过；中文、英文、明亮和暗色主题均可加载。
- 章节链接点击后一个渲染帧内到达目标，根元素 `scroll-behavior` 为 `auto`。
- 重点项目与其他项目展开后没有内联 `height`，收起不遗留占位；档案标题、双列内容和媒体层均正常。
- 培训案例 Anime.js 实测生效：连接阶段节点具有实时 transform/opacity，故障注入后模型、PLC 异常行和 HMI 同步进入故障状态。
- 浏览器日志仅出现已记录的检查层 `MutationObserver.observe(non-Node)` 注入错误；仓库源码仍没有该调用，页面交互无运行时错误。

### 8.13 [USER + CODEX] 项目展开层回归与 Hero 主体分离（2026-07-29）

#### [USER] 本轮反馈

- Hero 的 REAL SYSTEM 机器人与浅色背景过于接近，需要加强主体轮廓，但不接受把整个仿真视图改成与网站脱节的深蓝色。
- 三个重点项目的展开内容不需要 CASE FILE、SYSTEM LAYERS、深色标题带和内嵌卡片等二次容器；这些层级造成“页面里又套一张页面”的割裂感。
- “其他项目”区域的背景应与重点项目区域保持一致；其展开内容也不应再使用独立档案卡嵌套。
- 保留项目卡片 hover 时的抬升、跟随鼠标的光影和清晰的 +/- 状态反馈。
- 任务应在完成实现、验证、协作文档和本地提交后结束，不等待中途验收。

#### [CODEX] 本轮修正

- 将 Hero 仿真画布恢复为原有的明亮工业配色，不再使用上一轮的整面深蓝背景；仅为 REAL SYSTEM 的实体机器人网格增加低透明度蓝灰轮廓线，让机器人与背景分离，同时保留原材质和现有明暗主题映射。
- 删除重点项目详情中的 CASE FILE、SYSTEM LAYERS、档案编号轨道与深色二次标题带。展开后直接承接项目摘要，用单层双栏、中央分隔线和当前项目的红 / 蓝 / 黄主题色组织完整信息。
- 删除其他项目详情中的独立档案标题层和内嵌卡片边框。正文与媒体直接进入同一展开平面，个人项目使用蓝色、企业项目使用红色；无视频状态不再显示额外占位卡。
- “其他项目”区域恢复为与重点项目一致的 `paper` 背景；项目卡原有 hover 抬升、鼠标光影与 +/- 反馈保留。
- 修正联系卡片在能力列表旁被网格强行拉伸的问题，联系卡片现在按自身内容高度结束。
- Hero iframe 版本号更新为 `theme-shell-4`，避免浏览器继续复用旧的深蓝缓存。

#### [CODEX] 本地验证

- `npm run check:content` 通过，10 个根项目条目完整。
- `npm run build` 通过，中文 `/` 与英文 `/en/` 均成功生成。
- 浏览器实测重点项目 01 与 02：展开层没有 CASE FILE / SYSTEM LAYERS，P1 为红色、P2 为蓝色，完整字段仍保留。
- 浏览器实测其他项目：区域背景与重点项目一致，展开后无二次档案头和内嵌卡片；视频、正文与技术信息仍在。
- 英文 `/en/#work` 刷新并展开正常；联系区能力列表高度约 433px，联系卡约 297px，不再被拉伸。
- 浏览器日志仅出现此前已经确认的检查层 `MutationObserver.observe(non-Node)` 注入错误；仓库源码没有 `MutationObserver` 调用，页面本身无运行时警告或错误。

### 8.14 [USER + CODEX] 重点项目 01：登录准备闭环与项目叙事细化（2026-07-29）

#### [USER] 本轮要求

- 重点项目副标题不能只停留在一句简介，需要同时突出已经取得的成果和结果。
- 将“当前交互原型 / 训练闭环”改为更自然的“操作步骤”，删除冗长的 Concept Preview 说明。
- 原型内部“训练流程”与外层步骤重复，应让出空间完善登录连接功能，包括角色选择、模拟环境检查等。
- 项目详情需要更丰富，并把项目概述放在最前面。
- 原有 `structure` ASCII 箭头已经错乱，需要更清晰的结构表达。

#### [CODEX] 本轮实现

- 在项目主卡中保留原 pitch，并从同一项目数据源增加成果段，直接呈现 200+ 故障场景、1000+ 培训用户和 25% 故障排除能力提升。
- 外层说明改为“操作步骤 / Operation steps”，第一步升级为“登录与环境检查”，删除 Concept Preview 占位说明。
- 将原型登录页右侧重复的四步流程替换为“会话准备”面板：
  - 支持受训人员、培训管理员、维护工程师三种角色，并动态解释会话职责；
  - 新增浏览器仿真运行时、站点故障场景包、PLC 信号沙箱和 HMI / OPC UA 模拟通道四项检查；
  - 检查完成前禁止登录，四项全部 READY 后才允许建立连接；
  - 切换站点会清除旧检查和连接状态，要求针对新站点重新检查；
  - 登录后角色进入站点会话摘要和最终培训报告，PLC、SIM MODEL 与 HMI 按顺序连接。
- 在 `projects.js` 的故障培训项目中增加结构化 metrics，避免展示层重复维护三个结果数字。
- 项目详情改为“概述 + 三项量化结果”开场，其后再展示问题、方案、结果、重点和技术。
- 仅针对重点项目 01 隐藏原 ASCII `structure` 文本，用语义化系统拓扑呈现“培训平台 → 故障注入引擎 → 接口层”，再由接口层连接 PLC / PLCSim、Simulation Model、HMI / OPC UA 三个验证对象；其他项目仍保留原数据字段。
- iframe 版本号更新为 `training-4`，避免浏览器继续使用旧登录页缓存。

#### [CODEX] 验证与边界

- `npm run check:content` 通过，10 个根项目条目完整。
- `npm run build` 通过，中文 `/` 与英文 `/en/` 均成功生成。
- 中文实测维护工程师角色：四项环境检查从 0/4 到 4/4，登录按钮由禁用变为可用；登录后 PLC / SIM MODEL / HMI 均为 ONLINE，站点摘要包含角色。
- 切换 A01 → B02 后实测检查计数回到 0/4、登录重新禁用、会话回到未登录。
- 英文暗色主题实测培训管理员角色和四项检查均正确翻译，外层不再出现 Concept Preview，原型内部不再出现 Training flow。
- 项目详情实测概述位于第一层，200+ / 1000+ / 25% 三项指标存在；旧 `pre` 结构图数量为 0，系统拓扑包含 3 个流程节点和 3 个验证分支。
- 环境检查与 PLC / HMI / SIM 连接仍是浏览器中的确定性模拟，不代表生产 PLC、真实 OPC UA 服务或商业仿真运行时已经接入。
- 浏览器日志仅出现已记录的检查层 `MutationObserver.observe(non-Node)` 注入错误；仓库源码没有该调用。

### 8.15 [USER + CODEX] 重点项目 01：STAR 叙事与自动配置能力补全（2026-07-29）

#### [USER] 本轮要求

- 第一个项目的公开描述不使用“我设计了 / I designed”等第一人称句式，改为更专业的项目叙述。
- 内容逻辑参考 STAR：说明工业培训的现实背景、系统承担的目标、采取的关键行动以及量化结果，但页面中不生硬显示 S / T / A / R 标签。
- 补充两项关键能力：自动识别站点内容；自动化配置继承标准化故障列表。

#### [CODEX] 本轮实现

- 将项目详情整理为隐含的 STAR 顺序：`problem` 交代真实设备依赖与故障不可复现的背景，`summary` 明确可规模化站点训练目标，`solution + highlights` 说明站点识别、标准故障继承与多层同步注入，`result + metrics` 保留 200+ / 1000+ / 25% 量化结果。
- 删除重点项目 01 中的第一人称表达，改用系统能力、工程机制与结果作为句子主语。
- 将“自动识别站点内容”具体化为设备、信号点和训练对象识别；将“继承标准化错误列表”具体化为从标准故障列表匹配适用场景并生成站点级故障库与训练配置。
- 同步更新项目卡副标题、外层操作步骤、交互原型登录说明与环境检查项、详情中的系统拓扑，避免能力只存在于某一段文案。
- 将故障培训 iframe 版本号更新为 `training-5`，确保浏览器不会沿用上一版项目文案缓存。

#### [CODEX] 表达边界

- 浏览器原型呈现的是所选站点的识别、故障列表继承与配置生成逻辑，不代表当前页面已接入生产站点发现服务、真实 PLC 或商业仿真运行时。
- 本轮属于项目叙事与界面文案打磨，不单独形成提交；相关改动将在下一项可验收“小成果”完成后一起进入本地提交。

### 8.16 [USER + CODEX] 重点项目 01：站点切换闭环、数字孪生主线与语义化工位（2026-07-29）

#### [USER] 本轮要求与判断

- 交互原型中的二维几何缺少清晰代指，需要让用户理解各形状对应的设备与工艺对象。
- 更换训练站点后，“登录并自动连接”外观看似可点击，但实际不可交互。
- 项目本质应明确为基于数字孪生的培训平台，而不是表述生硬的“多层级仿真系统”。
- 问题背景需补充数字孪生建模成本，并说明在既有虚拟调试资产上拓展数字孪生生命周期、节约重复投入和开展新业务的价值。
- 方案应写成一段完整叙述，不拆成单独要点；结果需说明德国、匈牙利、墨西哥、中国、美国五座工厂的全球落地，并可辅助提及新一代电池生产开发。
- 保留项目概述旁的 200+ / 1000+ / 25% 三项量化结果表达。

#### [CODEX] 交互诊断与实现

- 复现后确认二次登录逻辑本身可执行，故障来自状态表达：环境检查完成动画在按钮上残留行内 `opacity: 1`，站点切换虽然把按钮重新设为原生 `disabled`，视觉上却仍保持启用外观。
- 在每次环境检查重置时主动清理登录按钮和检查项的动画行内样式，并在完成动画后再次清理，使原生禁用态、真实交互能力和视觉反馈始终一致。
- 实测完成 `B02 READY → 切换 C03 → 0/4 且按钮禁用 → C03 4/4 READY → 登录 → C03 故障库` 的完整二次连接路径。
- 将二维视图从通用几何块升级为站点语义图：
  - A01 标注装配输送带、工件、S12 到位传感器、CY-01 夹具、M1 驱动与防护门；
  - B02 标注检测输送、待检工件、视觉触发、剔除机构、M2 驱动与检测区门；
  - C03 标注包装输送、包装件、包装光电、封箱机构、M3 驱动与包装区门；
  - 每个站点增加对应的完整工艺流说明，并继续用故障色同步突出异常对象。

#### [CODEX] 项目叙事调整

- 概述改为“复用虚拟调试阶段模型与控制逻辑，并拓展为覆盖生产系统生命周期的数字孪生培训平台”。
- 问题背景同时交代真实设备培训限制、单独重建数字孪生的建模成本、既有虚拟调试资产投产后利用不足，以及由此产生的生命周期延展与新培训业务机会。
- 方案合并为一个连续段落，依次说明接口层连接、站点对象识别、标准故障库继承、站点配置生成和 PLC / 数字孪生 / HMI 同步验证；重点项目 01 不再额外渲染重复的 Highlights 要点列表。
- 结果明确为德国、匈牙利、墨西哥、中国和美国五座工厂的全球应用，并将新一代电池生产开发作为辅助场景；保留 200+、1000+、25% 三项指标卡。

#### [CODEX] 验证与边界

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；中英文静态路由正常生成。
- 中文亮色实测 C03 二次登录成功，二维视图呈现 6 个站点对象标签和 1 条工艺流程，故障注入后 HMI、PLC 与模型状态同步。
- 英文暗色实测数字孪生概述、建模成本、五国五厂、新一代电池生产和三项量化指标均存在；嵌入原型成功同步暗色主题。
- 浏览器日志中的一次动态模块加载错误发生在停止并重启开发服务器的间隙；随后页面重新连接，最终操作阶段没有新增运行错误。
- 交互仍是用于说明系统逻辑的确定性浏览器原型，不代表生产站点发现服务、真实 PLC、OPC UA 服务或商业仿真运行时已在网页中连接。

## 9. 进度日志

| 日期 | Agent | 工作内容 |
|---|---|---|
| 2026-07-15 | Claude | 初始化本文件：仓库勘察、问题清单、重组方案建议（方案 A/B，已被规格书取代） |
| 2026-07-22 | Claude | 创建分支 `claudeChangeUpdate`；接收 claude.ai 重建规格书并存档为 `docs/rebuild-spec.md`；从 Downloads 收编 5 个视觉/交互基准原型到 `docs/design-refs/`；完成参考文件比对（发现 v1.1 双主题与规格 §7 冲突，待确认）、内容迁移映射（4 个内容缺口）、任务分解 T1-T15；均未提交，git 工作区为新增文件待用户确认后提交 |
| 2026-07-25 | Claude | 复核 Codex 在 `websiteRebuild` 上交付的 4 个 HTML（本地 http 服务 + Chrome 实测）：全部可运行无报错；记录 7 个问题（2 个 P0：数字孪生项目在新版布局中丢失、语言切换 71 处未翻译）与入口收敛建议，见第 8 节。未改动 Codex 代码 |
| 2026-07-27 | Codex | 阅读并逐项核验 Claude 审查：确认 #1/#2/#4/#5/#7，#3 纳入最终入口收敛，#6 部分过时；补充 Astro 冻结、Data Agent 已补齐、分支更名及 Bauhaus 最新页作为阶段性胜出方向，见 8.4。仅更新协作文档，未在本轮修改网页实现。 |
| 2026-07-27 | Claude | 按用户裁决一次完成三项修复并提交到 `websiteRebuild`（未推送、未合并、未部署）：①视频 faststart 重排 + 全站 `preload="none"` + 悬停懒加载，首屏 18.6MB → 18KB；②新增 `ProjectFacts.astro` 补齐 keyFeatures / technicalHighlights / summary / 重点项目 structure，逐字段校验全部到位；③新增 GitHub Actions 构建与部署管线（deploy 作业锁定 main）。详见 8.7。`projects.js` 与三个重点项目内容均未改动 |
| 2026-07-27 | Claude | 审查 Codex 的 Astro 迁移（构建 + 双语路由 + 字段逐条比对 + 桌面/移动实测）：双语与项目恢复两个 P0 已关闭；新发现 2 个 P0（18.5MB 视频因缺 faststart 被全量预加载、部署链路缺 Actions 且 dist 被忽略）、4 处渲染层字段丢失（keyFeatures / technicalHighlights / summary / 重点项目 structure）与若干 P2，见 8.6。未改动实现代码 |
| 2026-07-27 | Codex | 按用户裁决统一 Hero 主题色：外层标题栏改为卡片底色 + 红色标识，嵌入式 Hero 的工位信息条与视图/模式/故障按钮全部改用主题变量（红 = REAL SYSTEM、蓝 = SIMULATION、黄 = AI ONLY），并更新 iframe 版本号破除缓存。见 8.8 |
| 2026-07-27 | Claude | 复核 Codex 的 Hero 配色改动（Codex 未回报结果）：色值与全站 token 逐个比对完全一致，明暗两主题实测无黑块残留，四个选中态对比度均 ≥5:1；构建、字段完整性、首屏 0 视频请求等回归项全部通过。已提交到 `websiteRebuild`（未推送）。另记录两点既有的色彩纪律偏差（深色下 amber→红、ai→蓝）留待打磨阶段裁决 |
| 2026-07-27 | Codex | 按用户裁决完成本地 Astro 渐进迁移第一阶段：协作文档更名并建立三方来源；冻结静态基准；建立 Astro 7.1.3、中文/英文路由、统一项目同步与校验；迁移 Bauhaus 壳层、履历、导航、主题和 Hero；恢复完整 12 项目；完成构建与桌面/移动端验证。三个重点项目交互与内容明确保留为后续三方逐项任务。未提交、未推送。 |
| 2026-07-28 | Codex | 按用户要求启动重点项目 01，新增故障仿真培训 HTML 交互原型：登录自动连接 PLC/HMI/SIM、三站点故障模板、场景增删查改、二维故障响应、根因与恢复答案验证、恢复逻辑和报告闭环；嵌入第一个重点项目并同步全站双语与明暗主题。详见 8.9。 |
| 2026-07-28 | Codex | 根据用户首轮体验反馈修复故障原型：动态高度消除详情/编辑/反馈截断，取消原生必填限制并增加安全默认值，放大控制台字号，语言切换保留锚点，刷新同步主题与侧边导航，故障库按语言隔离。详见 8.10。 |
| 2026-07-28 | Codex | 根据用户第二轮体验反馈，将培训步骤改为可切换标签，修复详情/编辑保存后的 iframe 高度不回缩，并同步放大全站微型字号。详见 8.11。 |
| 2026-07-29 | Codex | [USER] 要求先优化页面整体交互与审美，不为动画而动画，并用交互增强能力说服力。[CODEX] 引入经校验的 `web-anime` 规则与 Anime.js 4.5.0：增加章节/阅读进度信号、一次性装配式内容进入、项目筛选反馈，以及“能力 → 重点项目证据”可点击映射；三个重点 HTML 交互内部保持不变。 |
| 2026-07-29 | Codex | [USER] 指定 Anime.js 应优先改善履历横向滑动、侧边导航选择与章节滚动、普通按钮反馈和板块展开。[CODEX] 保留履历原生横向滚动，使用可中断的 Anime.js 缓动改善箭头翻页；侧栏增加连续移动的章节指示块并统一锚点滚动；按钮获得轻量按压反馈；重点项目与其他项目按真实内容高度展开/收起，结束后清除高度以避免残余占位。 |
| 2026-07-29 | Codex | [USER] 反馈上一版长距离导航滚动黏滞、按钮反馈不可感知，侧栏表达仍显普通。[CODEX] 定位根因是 Anime.js 每帧写入整页 `scrollY` 与大型 iframe/长页面竞争主线程；改由浏览器原生合成滚动负责页面位移，Anime.js 只负责更快的轨道定位框和到达反馈。按钮升级为可见的黄色填充、按下压缩与释放回弹。侧栏重构为独立节点、连接线、移动红色定位框与常显当前章节标签的工业信号轨道。 |
| 2026-07-29 | Codex | [USER] 截图反馈侧栏隐藏后章节标签残留、项目展开卡顿，并要求履历改为直接滑动/拖动加引导。[CODEX] 隐藏侧栏时整体淡出并移出视口，章节标签仅在 hover/focus 显示；项目详情停止动画 `height`，改为一次布局后只动画 opacity/transform/clip-path；履历移除可见箭头，保留原生触控滚动，增加鼠标抓取拖动、松手短吸附、键盘左右键、边缘渐隐和动态拖动提示。 |
| 2026-07-29 | Codex | [USER] 要求章节瞬时跳转、删除调试式拖动文字、拉开 Hero 主体与背景、用 Anime.js 优化第一个案例，并重做所有项目展开层与内容排版。[CODEX] 改为即时锚点、纯视觉轨道引导和深蓝仿真视图；培训案例以 Anime.js 呈现连接—故障—验证—报告因果链；重点与其他项目统一升级为 CASE FILE 档案式展开结构，保留完整项目数据。详见 8.12。 |
| 2026-07-29 | Codex | [USER] 否决深蓝 Hero 和 CASE FILE 嵌套档案层，要求恢复原配色、增强 REAL SYSTEM 主体对比、统一上下项目区背景，并保留项目卡 hover 光影。[CODEX] 恢复 Hero 原配色并为实体机器人增加蓝灰轮廓；重点项目和其他项目都改为直接展开的单层内容平面，按项目类型保留红 / 蓝 / 黄主题线；统一项目区背景、移除无媒体占位卡，并修正联系卡片拉伸。详见 8.13。 |
| 2026-07-29 | Codex | [USER] 要求进一步细化故障仿真培训项目：突出量化成果、去掉重复流程和 Concept Preview、完善角色与环境检查、丰富详情并重做结构表达。[CODEX] 完成登录准备闭环，新增三角色、四项模拟环境检查、登录门槛与站点重置；项目卡突出 200+ / 1000+ / 25% 成果，详情以概述和指标开场，并以语义化系统拓扑替换 ASCII 箭头。详见 8.14。 |
| 2026-07-29 | Codex | [USER] 要求第一个项目移除“我……”式第一人称，以 STAR 逻辑组织专业叙事，并补充站点内容自动识别与标准化故障列表继承。[CODEX] 重写项目卡、详情、操作步骤、登录说明和系统拓扑，使背景—目标—行动—结果连贯，并将两项能力落实为站点对象识别、故障目录匹配和训练配置生成。详见 8.15；本轮为打磨，不单独提交。 |
| 2026-07-29 | Codex | [USER] 指出二维几何语义不明、站点切换后登录按钮状态失真，并要求以虚拟调试资产复用和数字孪生生命周期为主线补全五国五厂结果。[CODEX] 修复动画行内样式导致的伪启用状态，关闭 B02→C03 二次连接路径；为三个站点增加对象编号与工艺流；重写概述、背景、单段方案和全球部署结果，同时保留三项指标卡。详见 8.16。 |
