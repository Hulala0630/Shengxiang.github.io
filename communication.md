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

### 8.17 [USER + CODEX] 重点项目 01：最终信息层级与公开归属收尾（2026-07-29）

#### [USER] 最终裁决

- 上一轮不应删除“项目重点”，需要完整恢复。
- 折叠卡的成果只保留 1000+ 培训用户、200+ 故障场景和 25% 能力提升；五国五厂和新一代电池生产只在展开详情中讲述。
- 项目类别需要明确标注 `BMW Group`，完成本轮打磨后，重点项目 01 视为阶段性完成。

#### [CODEX] 实现与公开边界

- 恢复项目重点列表，保留站点识别、标准故障继承、多层故障注入、仿真 / PLCSim / OPC UA HMI 接口和场景化验证五项工程信息。
- 新增独立 `cardResult` 字段：折叠状态只显示 1000+ / 200+ / 25% 的量化结果；展开状态继续显示德国、匈牙利、墨西哥、中国、美国五座工厂与新一代电池生产场景。
- 项目类别改为 `BMW Group · 企业系统 / BMW Group · Enterprise System`。
- 品牌归属本身按用户确认公开展示；页面仍不披露内部站点名称、系统地址、生产参数、专有接口实现或未获授权的商业细节。五国五厂、指标和电池生产信息是否受雇佣合同或 NDA 约束，仍应由用户依据可公开材料和合同最终确认。
- 本轮为已完成里程碑后的信息层级与措辞打磨，按照提交策略不单独创建新提交，留待下一个“小成果”一并提交。

### 8.18 [USER + CODEX] 重点项目 02：YAML 与三维场景双向建模原型（2026-07-29）

#### [USER] 本轮目标

- 第二个重点项目需要从静态示意升级为一个简单但能说明工程逻辑的 Three.js 交互原型。
- 用户修改 YAML 后，参数应直接反映到三维建模；直接拖动三维对象时，新位姿应反向写回 YAML。
- 准备四种错误场景，每种错误都应改变相应的简单三维部件，不追求高精度素材，而是突出“文档参数 ↔ 3D 建模”的关系。
- 输出区只承担 USD、Metadata 和相机预览的示意作用，不伪装为真实导出。
- 原“项目与视频”入口改为“项目详情”；详情表达和布局参考第一个重点项目，视频保持原比例、缩小展示，并保留原生全屏和显式放大入口。

#### [CODEX] 实现结果

- 新增独立原型 `assets/demos/isaac-yaml-builder.html`，使用仓库本地 Three.js 运行，不引入新的网络依赖；三维场景以输送线、工业机器人、电池模组、传感器、相机支架和辅助工位构成可辨识的简化产线。
- YAML 编辑器覆盖场景编号、输送线长度、机器人 / 相机 / 工件 X-Z 位姿、相机高度与故障类型；输入修改在短延迟后重建场景并同步当前故障状态。
- 机器人、相机和工件支持直接拖动；拖动后的 X-Z 坐标立即回写 YAML。拖动空白区域用于环绕观察，滚轮用于缩放，使配置编辑和三维操作形成真正双向闭环。
- 四类确定性缺陷分别为箱体偏移、模组缺失、传感器错位和部件误放；场景对象、报警环和 YAML `fault` 字段共享同一状态，另提供恢复正常场景。
- USD Stage、Metadata JSON 与 Camera Preview 保留为明确标注的示意按钮，只反馈“从当前统一场景状态准备输出”，不宣称浏览器已经执行 Isaac Sim 导出。
- 第二项目折叠层增加成果摘要和四步交互路径；展开层改为“项目详情”，以概述和三项证据指标开场，再呈现问题、方案、结果、重点、结构和技术。自然语言 Scene Agent 与闭环 Agent 被明确保留为后续方向，不混入当前已完成能力。
- 视频缩为详情区域内的 16:9 证据卡，保留浏览器原生播放控制，并新增显式“放大 / 全屏”按钮。
- 本次“小成果”提交同时收录 8.17 已完成但按规则暂缓提交的重点项目 01 最终信息层级打磨。

#### [CODEX] 本地验证

- 内容校验、Astro 静态构建与差异格式检查通过，中英文页面均生成。
- 浏览器实测 `missing_module` 与 `sensor_shift` 两种故障切换会同步更新 YAML 和激活状态；手动把 `robot_x`、`box_x` 与 `fault` 写入 YAML 后，三维对象和故障状态同步变化。
- 浏览器直接拖动三维相机后，YAML 中 `camera_x / camera_z` 从 `1.95 / 1.45` 更新为 `1.91 / 2.25`，确认 3D → YAML 反向映射真实执行。
- 项目详情可正常展开；三项指标、完整叙述、技术标签与缩小后的 16:9 视频卡均存在，视频继续提供原生全屏能力。
- 页面日志中仅出现此前已经确认的浏览器检查层 `MutationObserver.observe(non-Node)` 注入错误，以及开发服务器重启间隙的一次 Astro 工具栏模块加载记录；仓库源码没有 `MutationObserver` 调用，项目交互本身无新增运行时错误。

### 8.19 [USER + CODEX] 重点项目 02：应用闭环定位与详情结构打磨（2026-07-29）

#### [USER] 本轮判断

- 项目概述不应把系统缩小成单一“生成器”，而应体现为一个配置驱动的工业仿真框架或完整应用闭环。
- 原有 ASCII 结构表达应替换为类似项目 01 的系统拓扑，并移动到项目详情最底部。
- 视频需要进入半宽内容区域，与两列正文形成更均衡的版面，同时保留原始 16:9 比例和全屏能力。
- Three.js 中的工业机器人轮廓不清晰，需要参考 KUKA 一类六轴工业机器人的关节、臂段和末端执行器特征。
- 项目类别需以 `S.Hu · 个人项目 / S.Hu · Personal Project` 明确个人署名。

#### [CODEX] 本轮调整

- 将折叠简介与详情概述统一提升为“配置驱动的工业仿真应用框架”：以 YAML 作为可追踪场景契约，通过双向三维编辑维护统一状态，并在同一闭环中连接资产装配、缺陷复现与数据准备。
- 项目 02 不再渲染 `projects.js` 中的 ASCII 结构；详情底部改为蓝色项目主题的“应用闭环拓扑”，依次表达场景契约、场景编排、Isaac Sim 运行层与输出适配层，并向下连接文档 ↔ 三维、场景验证和数据接口。
- 视频移入详情左侧叙述列，宽度占据一半内容区，与右侧项目重点和技术证据保持视觉平衡；保留 16:9、原生控制和显式全屏入口。
- Three.js 机器人改为高对比橙色关节机器人轮廓，增加旋转底座、肩部配重、两段机械臂、肘腕关节与双指末端执行器；仍保留整体拖动与 YAML 位姿回写能力。
- 项目栏类别改为 `S.Hu · 个人项目`，英文同步为 `S.Hu · Personal Project`。

#### [CODEX] 提交边界

- 本轮属于重点项目 02 已完成交互能力上的叙事、布局和视觉打磨，不单独创建提交；相关变更保留在工作区，等待下一个可验收“小成果”一并提交。

### 8.20 [USER + CODEX] 重点项目 02：项目能力主线与应用闭环文案（2026-08-03）

#### [USER] 文案重点

- 项目叙事需要围绕六项能力展开：结构化文档描述场景、数字孪生场景自动生成、缺陷与错误模拟、意图识别配置场景、按需输出结构树 / 报告 / 场景截图，以及框架的可复用性和可扩展性。
- 问题与背景需要同时强调数字孪生场景的建模、变体维护和重复投入问题。
- 方案不使用协作过程中的完成度解释；结果与影响聚焦项目本身，不强调后续工作。
- “重点”不仅罗列功能，还需要表达统一场景数据源、文档即场景契约、参数化异常和模块化扩展等设计理念。
- 应用闭环说明需要直接解释数据如何流动，并修复在仍有横向空间时提前换行以及底部贴线的问题。

#### [CODEX] 文案与版式调整

- 将项目主线整理为“场景意图 → 结构化描述 → 数字孪生自动构建 → 缺陷 / 错误模拟 → 按需输出”，并同步到折叠简介、详情概述、操作路径和底部拓扑。
- 问题背景补充数字孪生变体、错误场景和输出资料依赖人工重复制作的问题；方案完整说明意图映射、YAML 场景契约、USD Stage / 场景树自动构建、三维回写、参数化异常和模块化输出适配器。
- 结果与影响改为框架复用价值：同一份结构化描述服务于建模、缺陷复现和多种工程输出，资产、意图规则、故障模型和输出适配器可以独立扩展并迁移到不同站点与项目。
- 项目重点改为六条理念型表达，突出文档即场景契约、统一场景真源、正常 / 异常共享定义和模块扩展点，不再使用开发或协作过程用语。
- 应用闭环说明改为完整的数据流描述，并释放说明区域的剩余宽度；拓扑底部改用内部留白与父级边界分隔，避免内容直接贴住横线。

#### [CODEX] 提交边界

- 本轮属于重点项目 02 的专业文案与局部版式打磨，不单独提交；继续与 8.19 的相关改动一起保留，等待下一个“小成果”。

### 8.21 [USER + CODEX] 重点项目系统拓扑模板化（2026-08-03）

#### [USER] 本轮要求

- 缩短项目 02 展开层的项目概述，避免在概述中重复后续详情。
- 放大 YAML ↔ 三维交互原型中的关键文字，提高配置、状态、缺陷选择和输出区域的可读性。
- 项目 02 的“配置驱动的应用闭环”必须与上方概述形成清晰分区，并参考项目 01 的系统拓扑形式。
- 将项目 01 的拓扑形式固定为可复用模板，为项目 03 后续接入保留一致结构。

#### [CODEX] 实现与模板约束

- 项目 02 概述压缩为一条闭环主线：结构化文档描述场景、生成数字孪生，并以统一状态驱动缺陷模拟和按需输出；完整背景、方案、结果与重点仍保留在详情中。
- 将交互原型的标题、说明、YAML 编辑器、同步状态、缺陷按钮、三维提示和输出反馈统一放大 1–2 px，在不改变控制台密度与交互逻辑的前提下提升阅读性。
- 新增共享 `ProjectArchitecture.astro`：项目只需提供标题、概述、主流程和输出分支，组件会按主流程节点数量生成统一拓扑。项目 01 与项目 02 已切换到同一组件，项目主题色继续由所属项目继承。
- 移除项目 02 独立的无分隔拓扑特例，统一恢复项目 01 模板的顶部边界、标题区、流程节点与输出分支，因此“配置驱动的应用闭环”与上方项目概述不再粘连。

#### [CODEX] 验证与提交边界

- 内容校验、Astro 生产构建、差异格式检查通过；中英文、明暗主题、项目详情展开、共享拓扑分隔及 iframe 字体尺寸完成浏览器复核。
- 共享拓扑组件属于后续项目可直接复用的新站点能力，达到“小成果”提交门槛；本轮与 8.19、8.20 的项目 02 相关打磨合并为一个本地里程碑提交，不推送远程。

### 8.22 [USER + CODEX] 重点项目 02：叙事收敛与视频双控制（2026-08-04）

#### [USER] 本轮要求

- 项目 02 的文字表达需要更接近项目 01：减少抽象概念，用直接、具体、按工程过程展开的语言说明问题、方案和结果。
- 视频的“放大”和“全屏”必须分开；放大只改变页面内观看尺寸，全屏才调用浏览器原生全屏。
- 完成本轮后转入重点项目 03。

#### [CODEX] 实现结果

- 重写项目 02 的折叠简介、概述、问题、方案、结果和六项重点，以“人工重复建模的问题—配置驱动的完整流程—跨站点复用结果”组织叙述；保留结构化文档、意图识别、数字孪生生成、缺陷模拟、动态回写、按需输出与模块扩展能力。
- 视频标题栏拆分为“放大 / 缩小”和“全屏”两个按钮。放大将原视频卡移入带背景遮罩的页内大尺寸观看层，不触发 Fullscreen API；缩小、点击遮罩或按 Escape 都会把同一个视频元素恢复到原位置。
- “全屏”按钮独立调用视频元素的原生 `requestFullscreen()`，不改变页内放大状态。中英文按钮标签和明暗主题样式同步。

#### [CODEX] 验证与提交边界

- 内容校验、Astro 构建与差异格式检查通过；浏览器确认页内放大时 `fullscreenElement` 仍为空，视频宽度扩大至视口的 88%，缩小后元素、滚动锁定与遮罩均恢复。
- 本轮关闭了一个错误合并的视频观看路径，形成可独立验收的双控制能力，因此创建本地里程碑提交；未推送远程。

### 8.23 [USER + CODEX] 重点项目 03：TUM 人因工程动作评估交互（2026-08-04）

#### [USER] 项目事实与本轮目标

- 该项目是慕尼黑工业大学人因工程项目，重点项目栏需要以 `TUM` 明确归属。
- 从资深运动员与教学视频的骨架序列中建立气功动作评分体系，使用角度、速度、加速度、角速度与角加速度的相对相关关系，而不是统一绝对阈值。
- 通过 20 余名被试验证并迭代评分反馈，帮助被试优化气功运动表现；评分、分析和可视化流程应能迁移到其他运动。
- 眼动追踪用于识别教学视频中的兴趣区域，并进一步形成教学视频拍摄指导规范。
- HTML 原型需要呈现正面 / 侧面二维运动骨架、颈肩肘腕胯膝六组关节、五类运动学指标、动态综合分数、待关注关节和可选择的数据图表；拖拽人物先保留，但不应取代评分主线。

#### [CODEX] 实现结果

- 复核前两次中断前的工作：项目 02 的直接工程叙事以及“页内放大 / 原生全屏”双控制已经进入本地提交 `a1ca1ac`；本轮接续的是已落盘但尚未完成的项目 03 草稿，没有覆盖前两项成果。
- 项目 03 类别改为 `TUM · 人因工程项目 / TUM · Human Factors Project`，折叠层增加 20+ 被试、6 组关节和 5 类运动学指标三项证据，并以“样本—关节—指标—反馈”给出四步操作路径。
- 新增 `assets/demos/motion-evaluation-demo.html`：
  - 良好与待改进两种动作样本共享同一动作周期；
  - 正面与侧面骨架、参考虚线、当前骨架和关节状态同步播放；
  - 六组关节与五类指标可独立选择，时序图、实时数值、关节分数和综合分数同步更新；
  - 关键关节可拖动，位移会直接改变对应关节和综合评分；拖拽因此是可选校正工具，而不是独立玩法；
  - 原型支持中英文、明暗主题、时间轴、播放暂停、姿态复位和父页面动态高度。
- 详情使用项目 01 固定下来的共同模板：概述与三项量化证据开场，完整说明问题、方案、结果、重点和技术，底部以“参考体系—骨架与特征—相对评分—动态反馈”拓扑连接个体训练、跨运动复用与教学视频规范。
- 项目文案避免第一人称和协作调试用语，把研究任务、评分方法、验证过程与影响按工程事实直接表达。

#### [CODEX] 验证与边界

- `npm run check:content`、`npm run build` 和 `git diff --check` 通过，中英文静态页面均成功生成；独立原型由本地资源同步，不依赖外部模型或网络服务。
- 中文亮色浏览器实测确认项目三卡片、TUM 署名、三项结果与双列原型完整显示；从“良好表现”切换到“待改进表现”后，综合分数由 92 变为 69，异常关节、红色曲线与六组关节分数同步变化。
- 原型表达的是基于项目方法的确定性演示数据，不宣称页面正在处理真实被试数据、真实骨架模型或实时眼动设备流；眼动研究结果在详情与拓扑中呈现，不伪装为当前浏览器实时能力。
- 浏览器完成关键评分闭环后，一次附加的自动详情点击被安全策略拦截；没有绕过限制，详情结构、双语字段和主题消息契约由构建产物与源码继续校验。

### 8.24 [USER + CODEX] 重点项目 03：统计可视化与项目贡献边界（2026-08-04）

#### [USER] 补充事实与能力重点

- 数据可视化是项目的重要能力，需要覆盖箱型图、平均数、中位数等统计指标，并说明参与者增加后评价依据会逐步稳定、评判精度会提高。
- 研究使用 RStudio、MATLAB 等工具，重点不止是动态骨架反馈，还包括群体数据处理、统计分析和可扩展评价框架。
- 计算机视觉部分由合作企业提供；项目贡献应准确落在实验与研究设计、理念、数据处理、相对评分和可迁移评价框架，而不是把 CV 识别能力归为个人实现。
- 在保留关节拖动实验的基础上，继续按项目 01 的详情与拓扑模板完成项目 03。

#### [CODEX] 实现结果

- 原型增加“动作诊断 / 群体统计”双视图。动作诊断加入“绝对阈值 / 个体相对”基准比较；待改进样本中拖动高亮关节会形成 WHAT-IF 局部修正，并实时改变关节与综合分数，不覆盖原始序列。
- 群体统计工作台以明确标注的合成演示数据提供 8–24 名被试范围、六组关节和五类运动学指标选择，并实现三种联动视图：六关节箱型分布、平均数 / 中位数比较、样本量—95% 置信区间半宽的评判精度曲线。
- 统计摘要同步计算并展示平均数、中位数、四分位距和 95% 置信区间；样本量从 8 增至 24 时，手腕角速度演示的区间半宽从 7.2 收窄到 4.1，模型稳定度指示由 65% 提升到 80%。该数值只用于解释方法，不冒充真实实验结果。
- 原型底部把研究管线明确拆为：合作方骨架数据输入 → MATLAB / RStudio 数据处理 → 个体相对评价框架 → 动态与群体可视化。
- 重写项目卡、概述、背景、方案、结果、重点和技术标签：明确合作企业提供 CV 骨架序列，项目工作从实验设计和评分标准开始，贯穿运动学数据处理、统计验证、可视化和跨运动复用。
- 项目 03 接入项目 01 固定的共享拓扑模板，以“实验与标准设计—骨架数据处理—相对评分与统计验证—动态与群体可视化”连接个体 / 群体证据、可复用框架与教学视频规范。

#### [CODEX] 验证与提交边界

- `npm run check:content` 与 `npm run build` 通过；中文亮色下完成双视图、样本滑杆、指标 / 关节选择、三类统计图和评分基准实测，英文暗色下确认标题、图表与主题契约正常。
- 浏览器确认群体视图默认显示箱型图；切换肩部、加速度和均值 / 中位数后，选中关节、图表标题及元信息同步更新；返回动作视图切换绝对阈值时综合分数从 92 变为 83。
- 本轮新增完整的群体统计工作台，并完成项目贡献边界校正，构成可独立验收的“小成果”；创建本地里程碑提交，不推送远程。

### 8.25 [USER + CODEX] 重点项目 03：动作相位诊断闭环（2026-08-05）

#### [USER] 本轮要求

- 二维骨架下方存在由左右栏高度差造成的大面积空白，同意将其转化为动作诊断内容，而不是继续留空或填入重复说明。

#### [CODEX] 实现结果

- 将左侧运动视图改为连续证据平面：主骨架下方新增“动作相位诊断”，原诊断结论移动到相位分析之后，消除固定高度 SVG 与右侧分析面板之间的无意义空白。
- 把一个动作周期拆为准备、抬臂、展开、回收和稳定五个关键阶段；每个阶段显示所选关节的阶段分数，并可点击跳转到对应时间点，同时暂停播放，方便逐段检查。
- 新增当前轨迹与参考轨迹的五阶段对比图，游标与主动画同步；切换动作样本、关节或运动学指标时，轨迹、最大偏差阶段、阶段分数和预计修正分数共同更新。
- 待改进样本默认识别“展开”为手腕最大偏差阶段，综合分数为 69、预计修正后关节分数为 77；点击“03 · 展开”后时间轴跳转到 44% / 3.5 秒，形成可验证的阶段诊断闭环。
- 更新 iframe 版本为 `motion-3`，确保主页面不继续使用旧缓存。

#### [CODEX] 验证与提交边界

- 内容校验、Astro 生产构建与差异格式检查通过；中文亮色下完成阶段点击、待改进样本和关节 / 指标联动验证，英文暗色下确认五阶段标签与主题正常。
- 本轮不是单纯填补间距，而是增加“识别阶段—跳转检查—比较轨迹—读取修正预期”的完整交互能力，达到“小成果”提交门槛；创建本地里程碑提交，不推送远程。

### 8.26 [USER + CODEX] 小项目封面系统接入（2026-08-09）

#### [USER] 本轮要求

- 检查 `assets/images` 中的新封面，按项目名称把最新版本接入“小项目 / 其他项目”卡片。
- 项目封面统一为 3:1，并在网页显示中保持清晰；完成后打开本地 Astro 页面供检查。

#### [CODEX] 实现结果

- 核对全部封面名称、修改时间与画面：为九个小项目建立一一对应的 `cover` 数据；多版本素材使用 Aster `v3` 和生产调度 `v2`，不覆盖或删除用户保留的旧版本。
- 折叠卡片由视频悬停预览改为静态项目封面，展开详情中的原视频与完整项目信息保持不变，形成“封面识别项目—展开查看证据”的清晰层级。
- 封面容器使用原生 `aspect-ratio: 3 / 1`；图片以 1536×512 原图（导航项目为 2172×724）输出，不做低分辨率放大，采用异步解码与延迟加载，并保留响应式布局。
- 扩展项目数据类型以支持封面字段；没有封面的未来项目仍可回退到原视频或技术标签预览。

#### [CODEX] 验证与提交边界

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 浏览器逐项确认九张图片全部加载成功：自然尺寸均为 3:1，桌面端实测渲染尺寸约 380×127，实际比例均为 3.00，无破图。
- 中文亮色与英文暗色均完成验证；展开“VC Line Auto Builder”后，卡片封面仍保留，详情视频源正常加载，既有展开交互未被破坏。
- 本轮形成完整的“小项目封面系统”小成果，与此前尚未提交的项目 03 紧凑布局、文案校正和视频光标修复一并创建本地里程碑提交；不推送远程。

### 8.27 [USER + CODEX] 小项目展开层参照重点项目优化（2026-08-10）

#### [USER] 本轮要求

- 参考重点项目的展开布局与表达方式，简单改善缩略项目展开后的信息组织；不要求复制成完全相同的模板。

#### [CODEX] 实现结果

- 保留小项目较轻的阅读密度，只提取重点项目的证据顺序：先显示项目概述，再以“项目叙事 / 工程证据”双栏组织背景、方案、结果、功能、交互与技术。
- 视频与系统结构移动到详情底部的证据区；二者同时存在时并列呈现，只有一个时自动占满宽度，没有媒体时不再生成空白占位。
- 展开层保持单一连续内容平面，以分隔线和项目类型色建立层级，没有重新引入此前被否决的 CASE FILE 嵌套页面效果。
- 移动端把概述、双栏内容和底部证据区依次收为单列，并把证据栏的竖向分隔切换为横向分隔。

#### [CODEX] 验证与提交边界

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 中文亮色桌面实测确认概述、双栏正文和底部视频连续展开、无横向溢出；英文暗色确认标题体系、六组内容标签与视频证据正常。
- 390px 宽度下确认概述、正文和证据区均切换为单列，左侧分隔归零并启用顶部横线；九个项目均不再包含无媒体占位。
- 控制台中的 Astro 开发工具动态模块加载失败和 MutationObserver 报错在仓库源码中均无对应调用，属于开发工具 / 浏览器注入，不作为页面实现错误处理。
- 本轮属于既有信息架构的视觉与表达打磨，不创建单独提交；改动保留到下一个达到“小成果”门槛的本地里程碑，不推送远程。

### 8.28 [USER + CODEX] 小项目视频证据统一（2026-08-10）

#### [USER] 本轮要求

- 小项目展开后的视频也参考标杆项目形式，与刚完成的详情布局保持一致。

#### [CODEX] 实现结果

- 五个包含视频的小项目复用重点项目已经验证的视频卡：标题栏、视频比例和控制层级保持一致。
- 每段视频同时提供“放大 / 缩小”页内灯箱与浏览器原生“全屏”入口；两种操作明确分开，不把放大伪装为全屏。
- 视频卡仍位于底部证据区；与结构同时存在时继续按证据双栏排布，没有改变概述与正文层级。

#### [CODEX] 验证与提交边界

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 中文亮色实测确认小项目展开后各出现一个放大按钮和一个全屏按钮；页内放大时灯箱、背景遮罩与页面滚动锁定同步启用，缩小后全部恢复。
- 英文页面确认五张视频卡均显示 `Expand` 与 `Fullscreen`，无横向溢出；原生全屏保留为用户主动点击的浏览器能力。
- 本轮继续属于小项目展示打磨，不单独创建提交；与 8.27 一并留待下一个“小成果”里程碑，不推送远程。

### 8.29 [USER + CODEX] 小项目视频列内归位（2026-08-11）

#### [USER] 澄清

- “参考标杆项目的视频形式”不仅指放大与全屏控件，也指视频应作为双栏中一列的内容，而不是在双栏下方独立占据底部区域。

#### [CODEX] 修正

- 将五个小项目视频从底部证据区移入左侧“项目叙事”列，排列在背景、方案与结果之后；右侧继续显示功能、交互与技术。
- 保留已经统一的项目实录标题栏、页内放大 / 缩小和原生全屏控件。
- 系统结构不与视频争夺列宽，仍在双栏之后独立呈现；没有结构的项目不生成底部区域。

#### [CODEX] 验证与提交边界

- 内容校验、生产构建与差异格式检查通过。
- 桌面端实测视频位于约 633px 的左侧叙事列内，视频宽度约 601px，右侧证据列保持独立，无横向溢出；390px 下视频随正文列收为约 310px。
- 本轮是对 8.28 布局理解的精确修正，仍属于打磨，不单独提交、不推送远程。

### 8.30 [USER + CODEX] 产线自动生成器文本重建（2026-08-16）

#### [USER] 内容裁决

- 从缩略项目逐项重建文本，第一项为原“产线自动建模 Demo”。
- 标题不再包含 Demo，改为“产线自动生成器”；内容突出 Unity、结构化文本、简单 / 复杂场景、结构化组件命名、悬浮信息与传送带阻塞模拟。
- 保持现有项目详情结构不变。

#### [CODEX] 实现与边界

- 仅改写该项目现有的标题、概述、背景、方案、结果、核心功能与交互字段，并同步英文版本。
- 将原“点击设备显示信息”修正为与实际描述一致的“指针悬浮查看组件名称、类型与功能”。
- 保留封面、视频、技术标签、双栏排版与展开结构；项目继续明确定位为快速建模原型，而非完整工业仿真系统。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；本地中英文页面确认新标题、悬浮说明和原视频路径均已生效，旧标题不再出现。
- 本轮属于逐项文案打磨，不单独创建提交，也不推送远程。

### 8.31 [USER + CODEX] Aster 桌面助手文本重建（2026-08-16）

#### [USER] 内容裁决

- Aster 应定位为快节奏 AI 时代的桌面私人助理，突出对长期目标、短期目标和兴趣新闻的捕捉、筛选与推送。
- 文案需要通俗易懂，不保留工程师视角、调试阶段、vibe coding 或原型说明。

#### [CODEX] 实现与边界

- 项目更名为“Aster 桌面助手 / Aster Desktop Assistant”，围绕信息过载、目标持续跟进、兴趣主题与个性化桌面推送重写中英文内容。
- 在原有字段内同步重写概述、背景、功能、交互、方案、结果和技术亮点；工程实现被转换为用户可理解的体验收益。
- 保留现有封面、视频、技术标签和项目详情结构，不改动其他项目。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；Aster 数据范围内确认不再含 vibe coding、原型或调试字样，长期目标、兴趣新闻推送、封面和视频均保留。
- 本轮属于逐项文案打磨，不单独创建提交，也不推送远程。

### 8.32 [USER + CODEX] PLC 选型智能决策助手文本重建（2026-08-16）

#### [USER] 内容裁决

- 项目从工程领域 AI 应用场景切入，说明决策端如何帮助工程师完成设备选型，并突出主客观结合的决策方法。
- 核心功能减少专业术语，技术亮点保留专业深度；交互部分合并连续步骤。
- 不保留双方讨论、调试过程、当前版本或开发阶段语言。

#### [CODEX] 实现与边界

- 项目更名为“PLC 选型智能决策助手 / PLC Selection Decision Assistant”。
- 背景围绕性能、成本、既有系统、团队经验、维护与风险的综合权衡；方案明确分离客观比较、项目偏好和 AI 解释层。
- 核心功能压缩为六条普通语言，交互合并为四个连续阶段；技术亮点集中说明确定性评分、主客观分离、AI 与评分隔离、数据关联和报告输出。
- 清除 vibe coding、Demo、原型、当前版本、`.env` 与 API Key 等开发阶段叙述；保留现有结构图、封面、视频、技术标签和页面布局。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；PLC 文本范围内确认不再含上述开发阶段措辞，原视频与系统结构数据均保留。
- 本轮属于逐项文案打磨，不单独创建提交，也不推送远程。

### 8.33 [USER + CODEX] PLC 缩略项目移除结构区（2026-08-16）

#### [USER] 纠正

- PLC 项目属于缩略项目，不需要重点项目式的系统结构部分。

#### [CODEX] 修正

- 移除 PLC 项目的中英文 `structure` 数据，使页面不再生成底部系统结构区。
- 保留概述、双栏正文、视频、功能、交互、技术亮点与技术标签；其他项目不受影响。
- 此条覆盖 8.32 中“保留现有结构图”的旧判断；历史记录保留用于说明裁决变化。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；数据范围确认结构字段已移除，视频、交互与技术亮点仍完整存在。
- 本轮属于局部内容打磨，不单独创建提交，也不推送远程。

### 8.34 [USER + CODEX] PLC 横向 plaintext 结构模块（2026-08-16）

#### [USER] 最终判断

- PLC 缩略项目可以保留结构信息，但应使用轻量的 plaintext 模块横向表达。
- 结构模块用于平衡展开后的内容分布，不采用重点项目式复杂拓扑。

#### [CODEX] 实现

- 恢复 PLC 的中英文结构数据，压缩为“项目输入 → 比较标准 → 主客观评估 → AI 解释 → 风险与缺口检查 → 选型报告”。
- 为该项目增加独立的横向结构样式标记：桌面端居中横向排列，窄屏允许自然换行并左对齐。
- plaintext 模块占满双栏下方宽度，使概述、正文 / 视频与底部流程形成更均衡的纵向节奏；其他已有 ASCII 结构项目继续使用原样式。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；构建确认横向标记、双语流程文本和限定样式均已生成。
- 此条覆盖 8.33 的“完全移除结构区”判断；本轮属于局部打磨，不单独创建提交，也不推送远程。

### 8.35 [USER + CODEX] 产线状态分析与故障诊断 Agent 文本重建（2026-08-16）

#### [USER] 内容裁决

- 背景突出 AI 在工业环境中辅助故障判断、故障路由与故障分析的优势。
- 方案说明这是对 Agent 技术路线的探索；延续前一项目标准：功能通俗、技术亮点突出、交互步骤合并、结构横向表达，并清除调试或开发阶段话术。

#### [CODEX] 实现

- 项目更名为“产线状态分析与故障诊断 Agent / Production Line Status & Fault Diagnosis Agent”。
- 背景围绕报警、设备状态、生产背景和历史观察的关联；方案以规划、工具调用、证据复核、路线调整、记忆与可追踪记录构成 Agent 技术探索。
- 将原十条混合亮点拆分为六条通俗核心功能与八条技术亮点；新增四阶段合并交互流程。
- 结构改为横向 plaintext：“故障描述 → 诊断规划 → 工具路由 → 状态与报警证据 → 原因复核 → 处理建议与追踪”，复用已验证的响应式样式。
- 清除一次性 Demo、原型与调试阶段叙述，保留封面、视频、技术标签和现有缩略项目布局。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；项目数据范围确认功能、技术、交互和横向结构字段完整，开发阶段措辞已清除，原视频路径保留。
- 本轮属于逐项文案打磨，不单独创建提交，也不推送远程。

### 8.36 [USER + CODEX] 故障诊断 Agent 结构纠正（2026-08-16）

#### [USER] 纠正

- 结构部分不是简单业务流程，而应表达智能体的工作与设计结构，并参考原结构中的模块关系。
- 仍使用 plaintext，但模块需要均匀分布；当前项目的交互不是重点，应省略交互模块。

#### [CODEX] 修正

- 删除该项目的中英文 `interaction` 字段，使右侧内容聚焦核心功能与技术亮点。
- 将六阶段流程条替换为等宽 plaintext 架构：故障请求与生产背景进入 Orchestrator，分发至 Planner / Executor / Reviewer，Reviewer 可触发 Replan；下接工业语义工具、上下文记忆层，最终汇入执行记录与诊断输出。
- 新增独立 `plaintext-architecture` 展示模式，通过固定等宽字符间距让三个核心模块与两个支撑模块横向均匀分布；窄屏在模块内部横向查看，不挤压整页。
- PLC 继续使用原有单行横向流程样式，不受本次纠正影响。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；数据检查确认交互字段已删除，架构所需七组模块关系与原视频路径均完整保留。
- 此条覆盖 8.35 中“横向六阶段流程 + 四阶段交互”的旧判断；本轮属于局部打磨，不单独创建提交，也不推送远程。

### 8.37 [USER + CODEX] Agent 结构稳定显示与数字孪生文本重建（2026-08-23）

#### [USER] 请求与截图判断

- 故障诊断 Agent 的 plaintext 结构仍出现连接线错位与显示混乱，需要调整为稳定、正常的模块结构。
- 同时重写“工业数字孪生演示系统”，沿用本轮缩略项目的内容语气与结构标准。

#### [CODEX] Agent 结构修正

- 根因是原图依赖中文字体宽度、空格、框线字符和三角符号共同对齐；不同字体回退后字符宽度不一致，因此布局会错位。
- 将字符画替换为语义化 Agent 架构模块：输入、Orchestrator、Planner / Executor / Reviewer、复核与重规划回路、工业语义工具 / 上下文记忆、执行记录与诊断输出。
- 模块文字继续保持等宽 plaintext 风格，但位置和连接线改由 CSS Grid 与边框控制；三个核心模块和两个支撑模块使用等分列，不再依赖空格对齐。
- 移动端允许节点文字换行，连接关系仍保持在容器内，不产生整页横向溢出。

#### [CODEX] 工业数字孪生演示系统重建

- 按“背景—方案—核心功能—技术亮点—结构—结果”重写完整中英文文本，移除第一人称和未来 WebGL 等开发阶段说明。
- 背景聚焦控制逻辑、通信服务与三维可视化被割裂理解的问题；方案明确 PLC 仿真、OPC UA、REST 与 Unity 的状态传递职责。
- 核心功能使用五条通俗表达；技术亮点用六条说明标准数据模型、协议与应用分层、统一状态映射、Unity 行为映射和完整复用链路。
- 结构使用横向 plaintext：PLC 逻辑仿真 → OPC UA 数据层 → REST 应用服务 → Unity 状态映射 → 数字孪生界面。
- 保留原封面、视频与技术标签；本轮仍属于连续的小项目内容与展示打磨，不单独提交，也不推送远程。

#### [CODEX] 验证

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 本地 Edge 实际展开故障诊断 Agent：确认 9 个结构节点均已生成，中文节点文字正常，字符画框线已完全移除；页面文档宽度未超过视口宽度。
- 中文与英文静态输出均确认数字孪生新背景、技术亮点、横向结构和原视频路径存在；临时截图与无界面浏览器资料已在验证后删除。

### 8.38 [USER + CODEX] 剩余缩略项目结构统一（2026-08-23）

#### [USER] 请求

- 将剩余项目按当前已经确认的缩略项目要求统一结构，先形成稳定骨架，后续再逐项微调事实与文案。

#### [CODEX] 统一结果

- 完成四项剩余项目：基于插件的系统解耦、多模态三维导航、基于矩阵的生产调度、精益流程优化。
- 四项均统一为“概述—问题 / 背景—方案—结果 / 影响—核心功能—技术亮点—结构—技术标签”；未凭空新增交互模块。
- 将原本混合在 `highlights` 中的内容拆分为面向普通访客的 `keyFeatures` 与面向专业读者的 `technicalHighlights`，旧字段不再残留。
- 四项旧式纵向字符图全部改为响应式横向 plaintext：
  - 插件解耦：原始 RFC 路径与本地插件重构路径并列；
  - 三维导航：位置关系 → 动态导航区 → 多模态线索 → 反馈；
  - 矩阵调度：两组矩阵 → 权重策略 → 调度计算 → 优先级输出；
  - 精益优化：当前流程 → 活动分类 → 瓶颈 / 浪费分析 → 未来状态方案。
- 只清除了明显的第一人称与“原型阶段”措辞，项目事实、技术栈和既有量化结果保持不变，供用户后续逐项微调。

#### [CODEX] 验证与边界

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 同步后的四项数据均确认包含核心功能、技术亮点和 `horizontal` 结构样式，不再包含旧 `highlights`，也没有新增交互字段。
- 本轮完成缩略项目内容骨架统一，达到可独立复核的小成果门槛，作为本地里程碑提交；具体事实与语气仍按用户计划留待逐项审核，不推送远程。

### 8.39 [USER + CODEX] 五项缩略项目文本定稿同步（2026-08-29）

#### [USER] 请求

- 提供工业数字孪生演示系统、数字孪生 IT 通信插件集成、多模态三维导航系统、基于矩阵的生产调度模型和精益流程优化的完整定稿文本。
- 要求按给定内容直接更新项目；原文没有结构信息时不强行补充结构。

#### [CODEX] 更新结果

- 按定稿逐项同步中英文标题、项目类型、缩略简介、概述、背景、方案、结果、核心功能、技术亮点与技术标签。
- “基于插件的系统解耦”正式更名为“数字孪生 IT 通信插件集成”，并明确 BMW Group 企业项目归属、Telegram 通信链路、C# 插件方案及 10 条产线 / 20 个模块的应用结果。
- 工业数字孪生项目保留控制链路与交互链路两行横向 plaintext；多模态三维导航保留算法与交互两行横向 plaintext。
- 数字孪生 IT 通信插件集成、矩阵调度和精益流程优化没有用户提供的结构信息，因此移除上一轮为统一骨架附加的结构字段。
- 保留既有封面、视频与页面布局，不引入工程调试或开发阶段措辞。

#### [CODEX] 验证

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 核对中英文静态输出：五项新标题与正文均已同步，两项指定结构正常输出，其余三项不再显示结构模块。

### 8.40 [USER + CODEX] 非项目页面文案与能力表达重建（2026-08-29）

#### [USER] 请求

- 按逐项审阅后的中文稿更新网站非项目内容，包括个人定位、上海地点、当前身份、教育与工作经历、项目区框架、能力范围、联系信息与页脚。
- 重点项目区需要表达“体验有趣且有价值的项目”；能力区不能只罗列关键词，需要说明能力的实际含义与涉及内容。
- 更新后直接查看网页效果，并关注移动端支持。

#### [CODEX] 更新结果

- 重写中英文页面基础信息、导航、个人介绍、经历、项目区标题与介绍、联系卡和页脚，项目自身数据保持不变。
- 重点项目标题采用“体验三个有趣，也有实际价值的项目。”，介绍连接企业实践、个人探索与研究工作。
- 能力卡从单行关键词扩展为“能力解释—涉及内容—对应项目”三层，并同步完成七项能力的中英文表达。
- 经历时间支持双语显示，使“当前方向 / CURRENT DIRECTION”可以分别呈现；移动端继续使用既有单列响应式结构。

#### [CODEX] 验证

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 桌面中文、390px 中文与英文页面均确认新文案正常生成，七张能力卡完整显示，无页面级横向溢出。
- 明暗主题切换正常，移动端个人信息、重点项目、归档正文与能力区均切换为单列；能力卡内部没有内容越界。

### 8.41 [USER + CODEX] 技能点与联系模块拆分（2026-08-29）

#### [USER] 请求

- 重点项目标题和介绍表达过于直接、僵硬，需要改成更自然的项目叙事。
- 将技能点与联系拆成两个独立模块；“对应项目”改为“关联项目”；能力区副标题去掉“回到具体项目查看”的说明。

#### [CODEX] 更新结果

- 重点项目标题改为“三个项目，三种把想法带进实际场景的方式。”，介绍转为说明项目来源与寻找解法的过程，不再直接评价项目是否有趣或有价值。
- 技能点成为独立的 04 模块，联系成为独立的 05 模块；侧边章节导航同步增加第五个入口，章节定位逻辑同步扩展。
- 能力说明收敛为实际工作、研究与个人探索的来源关系，七处项目标签统一改为“关联项目”。
- 联系模块使用独立标题、介绍和双栏联系卡，移动端收为单列；中英文同步更新。

#### [CODEX] 验证

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 桌面与 390px 页面确认五个导航入口、04 / 05 独立模块和七个“关联项目”标签正常显示，无页面级横向溢出。
- 英文页面同步显示 `04 / SKILLS` 与 `05 / CONTACT`，移动端技能卡和联系卡均收为单列。

### 8.42 [USER + CODEX] 重点项目标题与联系入口校正（2026-08-29）

#### [USER] 校正

- 重点项目副标题保持用户原稿不变，主标题只使用“体验三个有趣场景”，并去掉句号。
- 第五模块改为“保持联系 / 联系方式”，去掉模块副标题，突出邮件与 LinkedIn 跳转入口。

#### [CODEX] 调整与验证

- 恢复用户原写的重点项目副标题，仅替换主标题；英文同步采用无句号标题。
- 第五模块显示“05 / 保持联系”和“联系方式”，标题区不再渲染副标题。
- 邮件和 LinkedIn 改为独立的大尺寸整块链接，强化地址与跳转动作；桌面和 390px 均无溢出。
- `npm run check:content`、`npm run build` 与 `git diff --check` 通过；本轮属于连续文案与视觉打磨，不单独提交。

### 8.43 [USER + CODEX] 大标题标点统一与阶段合并（2026-08-29）

#### [USER] 请求

- 所有页面模块大标题均不使用句号；完成后提交并合并，移动端细节留待手机实际体验后继续调整。

#### [CODEX] 处理

- 核对四个页面模块标题及中英文版本，移除“更多项目与实践 / More projects and practical work”末尾句号；其余重点项目、技能点和联系方式标题已符合无句号规则。
- 将 8.42 的重点项目标题、副标题恢复、联系模块文案与大尺寸跳转入口一起纳入本轮提交。
- 完成内容、构建、桌面与移动宽度检查后，将 `websiteRebuild` 本地合并至 `main`；不推送远程。

#### [CODEX] 推送与部署修复

- 经用户明确授权，将本地 `main` 推送至 GitHub；首次部署在全新 runner 中因项目生成数据尚未同步而在内容校验步骤失败。
- 调整 GitHub Actions 顺序，在双语内容校验前先从 `projects.js` 同步生成项目数据，确保本地和部署环境使用同一条内容准备链路。

### 8.44 [USER + CODEX] 手机端媒体与交互完整性修复（2026-08-29）

#### [USER] 问题

- Hero 模拟侧信息面板在手机端过大且不能收起，遮挡机器人模拟蓝图。
- Isaac Sim 看不到结构化文档区域，动作评估看不到下方曲线图。
- 缩略项目封面和视频不可见，视频全屏按钮无效。

#### [CODEX] 修复

- Hero 模拟信息面板增加展开 / 收起控制；手机端默认收为 158px 状态条，展开后宽度约 190px，减少对三维蓝图的遮挡。
- 交互 iframe 的移动端高度上限与实际内容分离：Isaac Sim 允许扩展至 1800px，动作评估允许扩展至 2800px，由内部内容高度消息决定最终尺寸。
- 缩略项目封面改为随列表直接加载，避免移动 Safari 对折叠内容延迟加载不稳定；视频改为加载元数据并使用项目封面作为 poster。
- 视频全屏依次支持标准 Fullscreen API、iPhone Safari `webkitEnterFullscreen`，两者不可用或失败时回退到现有页内放大。
- 更新 Hero iframe 版本参数，避免线上浏览器继续使用旧面板缓存。

#### [CODEX] 验证

- `npm run check:content`、`npm run build` 与 `git diff --check` 通过。
- 375px 实测页面无横向溢出；Isaac Sim 高度 1049px、动作评估高度 1997px，完整内容不再被外层截断。
- 九张缩略封面全部完成加载；缩略项目视频显示 poster、控制条和 16:9 播放区域。
- 视频全屏按钮进入浏览器全屏视图；Hero 信息面板默认收起并可通过按钮恢复完整信息。

### 8.45 [USER + CODEX] 移动端导航与加载性能优化（2026-08-30）

#### [USER] 问题

- 手机端章节导航展开后持续遮挡正文，希望点击其他区域即可收回。
- 三个重点项目交互页面与项目封面同时加载，手机等待时间较长，滚动压力明显。

#### [CODEX] 处理

- 移动端章节导航增加点击外部关闭与选择章节后关闭规则，桌面端行为保持不变。
- 三个重点项目改为移动端按需加载：初始仅显示轻量入口，点击某个项目时只启动对应 HTML；桌面端继续自动加载全部演示。
- 为九张缩略项目封面生成 720px、约 39–61 KB 的移动端 JPEG，并通过响应式图片自动选择；桌面端继续使用原始高清 PNG。
- 移动端实测无横向溢出，封面完成解码；未点击时三个演示均无 `src` 请求，点击后仅目标演示加载；桌面宽度下三个演示仍自动运行。
- `npm run build` 通过。

### 8.46 [USER + CODEX] 移动导航与英文 Hero 回归修复（2026-08-30）

#### [USER] 问题

- 手机端章节导航关闭后仍在正文左侧保留悬浮入口，视觉上没有完整收起。
- 英文桌面页面因文本与履历高度增加，Hero 三维交互被异常拉长。

#### [CODEX] 处理

- 将手机端导航重新打开入口移入顶部栏；章节列表关闭后正文区域不再残留导航控件，点击正文与选择章节仍会自动关闭。
- Hero 桌面高度基准由整个左栏改为个人信息卡，并限制在 620–820px；教育经历高度不再影响三维视口。小于 980px 时继续使用交互自身高度。
- 390px 实测导航关闭、打开及点击外部关闭均正常，无正文遮挡和横向溢出。
- 1536px 英文页面实测 iframe 高 679px，Hero 与个人信息卡底部对齐；内容校验、生产构建与差异检查通过。

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
| 2026-07-29 | Codex | [USER] 最终要求恢复项目重点、将全球部署叙事移入展开层、折叠层只保留量化结果，并标注 BMW Group；本轮后重点项目 01 阶段性完成。[CODEX] 恢复五项重点，拆分 `cardResult` 与完整 `result`，项目类别改为 BMW Group，并记录公开边界。详见 8.17；本轮为打磨，未单独提交。 |
| 2026-07-29 | Codex | [USER] 启动重点项目 02，要求用 Three.js 说明 YAML 参数与三维建模的双向关系、四类缺陷场景和示意输出，并重构项目详情与视频层级。[CODEX] 完成本地 YAML ↔ 3D 双向场景生成器、三类可拖动对象、四类确定性缺陷、输出示意、项目证据型详情和可全屏 16:9 视频卡；与 8.17 打磨一并形成新的本地“小成果”提交。详见 8.18。 |
| 2026-07-29 | Codex | [USER] 要求把项目 02 从“生成器”提升为应用闭环，结构改为底部系统拓扑，视频进入半宽区域，机器人参考工业六轴轮廓，并增加 S.Hu 个人署名。[CODEX] 重写框架定位、增加蓝色应用闭环拓扑、平衡双列视频布局、重塑橙色关节机器人并同步双语署名。详见 8.19；本轮为打磨，未单独提交。 |
| 2026-08-03 | Codex | [USER] 要求项目 02 文案突出结构化场景描述、数字孪生自动生成、缺陷模拟、意图配置、按需输出和框架复用扩展性，并修复应用闭环说明换行与贴线。[CODEX] 以“意图—文档—数字孪生—异常—输出”重写完整叙事和六条理念型重点，明确场景数据流并释放拓扑说明宽度、增加底部留白。详见 8.20；本轮为打磨，未单独提交。 |
| 2026-08-03 | Codex | [USER] 要求缩短项目 02 概述、放大交互原型文字、分开概述与应用闭环，并把项目 01 拓扑固定为项目 03 可复用模板。[CODEX] 抽取共享 `ProjectArchitecture.astro`，让项目 01/02 通过数据使用同一拓扑结构，恢复明确分隔并统一提升原型关键字号；与前两轮项目 02 打磨合并为本地“小成果”。详见 8.21。 |
| 2026-08-04 | Codex | [USER] 要求项目 02 的描述贴近项目 01 的直接工程语言，并把视频放大和原生全屏拆开。[CODEX] 收敛项目叙事，新增可还原的页内视频灯箱与独立全屏入口，结束项目 02 后进入项目 03。详见 8.22。 |
| 2026-08-04 | Codex | [USER] 要求接续中断工作并完成 TUM 人因工程动作评估项目，突出相对评分、动态数据、可视化、跨运动复用及眼动教学规范。[CODEX] 完成正侧二维骨架、好 / 待改进样本、六组关节、五类指标、动态分数与图表、关节拖动校正和共享拓扑详情；详见 8.23。 |
| 2026-08-04 | Codex | [USER] 补充统计可视化、RStudio / MATLAB、样本量稳定性及合作企业 CV 边界。[CODEX] 新增群体统计工作台、评分基准比较和 WHAT-IF 关节修正，重写项目贡献与共享拓扑叙事；详见 8.24。 |
| 2026-08-05 | Codex | [USER] 同意用动作诊断填补项目 03 骨架下方空白。[CODEX] 新增五阶段轨迹比较、阶段分数、最大偏差与修正预期，并支持点击阶段跳转主时间轴；详见 8.25。 |
| 2026-08-09 | Codex | [USER] 要求把 `assets/images` 最新封面按名称接入全部小项目，并统一为清晰的 3:1 视觉。[CODEX] 完成九项目封面映射、3:1 响应式呈现、高清加载与视频详情回归；详见 8.26。 |
| 2026-08-10 | Codex | [USER] 要求小项目展开层简单参照重点项目。[CODEX] 重组为“概述—双栏正文—底部证据”的单平面结构，移除无媒体占位并完成双语、主题与移动端回归；详见 8.27。本轮为打磨，未单独提交。 |
| 2026-08-10 | Codex | [USER] 要求小项目视频同步参考标杆项目。[CODEX] 为五个视频证据复用页内放大 / 原生全屏双控制与统一标题框；详见 8.28。本轮为打磨，未单独提交。 |
| 2026-08-11 | Codex | [USER] 澄清视频应属于双栏中的一列。[CODEX] 将五个视频移动到左侧项目叙事列，结构继续独立置底，并保留放大 / 全屏控制；详见 8.29。本轮为打磨，未单独提交。 |
| 2026-08-16 | Codex | [USER] 开始逐项重建缩略项目文本，先处理产线自动建模项目并保持详情结构不变。[CODEX] 更名为“产线自动生成器”，同步重写中英文叙事、功能与悬浮交互说明；详见 8.30。本轮为打磨，未单独提交。 |
| 2026-08-16 | Codex | [USER] 要求 Aster 体现快节奏 AI 时代的信息筛选、长期 / 短期目标和兴趣新闻推送，并清除工程与调试话术。[CODEX] 更名为“Aster 桌面助手”，按桌面私人助理体验重写完整中英文文本；详见 8.31。本轮为打磨，未单独提交。 |
| 2026-08-16 | Codex | [USER] 要求 PLC 项目突出工程设备选型、主客观结合，简化核心功能、加强技术亮点并合并交互步骤。[CODEX] 更名为“PLC 选型智能决策助手”，重写完整中英文决策叙事并清除开发阶段话术；详见 8.32。本轮为打磨，未单独提交。 |
| 2026-08-16 | Codex | [USER] 纠正 PLC 属于缩略项目，不需要系统结构部分。[CODEX] 仅移除该项目结构数据，保留双栏正文和视频等现有内容；详见 8.33。本轮为打磨，未单独提交。 |
| 2026-08-16 | Codex | [USER] 最终决定 PLC 可保留轻量横向 plaintext 结构，以平衡展开模块分布。[CODEX] 恢复六阶段横向流程条，并将新样式限定在该项目；详见 8.34。本轮为打磨，未单独提交。 |
| 2026-08-16 | Codex | [USER] 要求故障诊断 Agent 突出工业 AI 判断、路由与分析优势，并沿用功能简化、技术强化、交互合并和横向结构标准。[CODEX] 完成中英文叙事、字段重组与六阶段 plaintext 流程；详见 8.35。本轮为打磨，未单独提交。 |
| 2026-08-16 | Codex | [USER] 纠正 Agent 结构应表达设计架构而非业务流程，并要求省略非重点交互模块。[CODEX] 删除交互字段，改为模块均匀分布的 Orchestrator / Plan–Execute–Review / 工具 / 记忆 / 追踪 plaintext 架构；详见 8.36。本轮为打磨，未单独提交。 |
| 2026-08-23 | Codex | [USER] 截图指出 Agent 字符结构仍错位，并要求同步重建工业数字孪生演示系统。[CODEX] 以 CSS Grid 等距模块替换空格字符画，完成数字孪生项目完整双语重写和横向数据链结构；详见 8.37。本轮为连续打磨，未单独提交。 |
| 2026-08-23 | Codex | [USER] 要求剩余缩略项目先统一内容与结构骨架，之后再逐项微调文本。[CODEX] 完成插件解耦、三维导航、矩阵调度和精益优化的字段拆分、横向结构与双语骨架；详见 8.38。 |
| 2026-08-29 | Codex | [USER] 提供五项缩略项目完整定稿，并要求无结构信息的项目不强行补充。[CODEX] 同步中英文内容，保留数字孪生与三维导航的两行 plaintext 结构，移除其余三项附加结构；详见 8.39。 |
| 2026-08-29 | Codex | [USER] 审阅并重写非项目页面文本，要求强化个人表达、项目体验与能力解释，并查看移动端效果。[CODEX] 完成整站框架文案双语同步，将能力卡扩展为说明、涉及内容与项目证据三层，并完成桌面 / 390px / 双主题检查；详见 8.40。 |
| 2026-08-29 | Codex | [USER] 认为重点项目文案过于直接，并要求技能点与联系拆分、关联标签和副标题调整。[CODEX] 重写重点项目引导，将技能点与联系拆成 04 / 05 两个独立模块，并同步导航、双语和移动端布局；详见 8.41。 |
| 2026-08-29 | Codex | [USER] 要求恢复重点项目原副标题、使用无句号的新主标题，并强化独立联系模块的跳转入口。[CODEX] 完成精确文案校正和邮件 / LinkedIn 大尺寸入口；详见 8.42。本轮为打磨，未单独提交。 |
| 2026-08-29 | Codex | [USER] 要求统一移除模块大标题句号，并提交、合并当前成果。[CODEX] 完成中英文标题标点检查，将累计联系模块打磨提交并本地合并至 `main`；详见 8.43。 |
| 2026-08-29 | Codex | [USER] 反馈手机端 Hero 遮挡、交互内容裁切、封面和视频不可见及全屏失效。[CODEX] 完成面板收起、动态 iframe 高度、媒体加载和 iPhone 全屏兼容修复，并通过 375px 完整回归；详见 8.44。 |
### Mobile loading and bilingual interaction reliability (2026-09-02)

#### [USER] Request and judgment
- Remove the visually inconsistent mobile demo load gate, restore hidden interaction content, keep English interactions in English, reduce video waiting, and make the Hero load reliably.

#### [CODEX] Implementation
- Replaced the manual mobile demo gate with native lazy iframe loading and versioned locale-aware demo URLs.
- Removed mobile iframe height caps that clipped active demo screens, while retaining bounded desktop sizing.
- Deferred MP4 source attachment until the visitor interacts with a video, preserving posters without requesting video metadata during initial browsing.
- Added a visible bilingual Hero startup state and a timed reload action, then clears it when the embedded scene is ready.

#### [CODEX] Verification and boundary
- Passed content validation, production build, and diff checks.
- Verified at 390 × 844 in Chinese and English: iframe language, dynamic heights, Hero ready state, light/dark propagation, and zero hydrated project-video sources before interaction.
- The only local browser console error was Astro's development toolbar returning `504 Outdated Optimize Dep`; no matching production source request exists.

### Mobile-only progressive loading and media slimming (2026-09-05)

#### [USER] Request and judgment
- Keep desktop presentation unchanged and address mobile blank demos, incorrect panel sizing, hidden text, slow video startup, and the overly rigid Hero loading treatment.

#### [CODEX] Implementation
- Replaced mobile native iframe lazy loading with an intersection-driven queue: each demo remains a compact, informative status row until it approaches the viewport, then loads automatically and expands only after it is ready.
- Removed mobile height ceilings and corrected the fault-training document measurement so embedded content is not clipped; desktop caps remain unchanged.
- Added a mobile-only Hero lite tier at 20 fps, 0.8 pixel ratio, disabled secondary lights, and softened its loading state without changing desktop rendering.
- Generated a 480p fast-start Isaac Sim video for mobile (19.0 MB to 7.0 MB); desktop continues to select the original file. Other videos were already efficiently encoded and were left unchanged after comparison.

#### [CODEX] Verification and boundary
- At 390 × 844, confirmed zero demo iframe requests at the top of the page, automatic loading near the viewport, exact iframe/document height parity, visible bottom text, Hero readiness, and mobile video source selection.
- At 1280 × 900, confirmed loading status UI is hidden, all demos load normally, desktop height caps remain active, and the original Isaac Sim video is selected.
- Content validation, production build, and diff checks pass. The recurring local console entry is limited to Astro's development toolbar dependency optimization and is absent from production source.

### Mobile iframe intrinsic sizing correction (2026-09-05)

#### [USER] Request and judgment
- Mobile project demos still showed incorrect proportions, stretched panels, and large blank areas after loading; desktop presentation must remain unchanged.

#### [CODEX] Implementation
- Removed mobile-only `min-height: 100%` and fixed demo minimum heights inside the three embedded applications so iframe height changes can no longer stretch their content and feed a larger height back to the parent.
- Switched mobile height messages to each demo application's natural rendered height and removed the ready-state wrapper minimums; desktop minimums and height caps are unchanged.
- Bumped all three embedded demo versions so deployed phones do not reuse the faulty cached documents.

#### [CODEX] Verification and boundary
- Content validation, production build, generated-content parity, and diff checks pass.
- The configured local browser rejected localhost responsive automation under its URL safety policy, so final device rendering is intentionally left for the authorized remote phone check after push; the sizing feedback path was verified directly in all three implementations.

### Mobile demo interaction shells and verified height lifecycle (2026-09-05)

#### [USER] Request and judgment
- Preserve every function in the three flagship demos while removing mobile blank space, stretched controls/cards, scroll conflicts, eager heavy initialization, and unsafe or unstable iframe sizing. Keep the Bauhaus language and desktop content/layout unchanged; do not deploy.

#### [CODEX] Implementation
- Replaced automatic near-viewport demo loading on phones with explicit compact expand/collapse controls. Iframes stay mounted after first use so user input and view state survive collapse, while animation/WebGL loops pause offscreen.
- Reorganized the Isaac demo into Scene / Config / Output mobile views and the motion demo into Performance / Joint diagnostic / Cohort statistics views. The fault-training workflow keeps all four steps and gains a compact expandable connection summary.
- Replaced per-demo wildcard height messages with one project-identified protocol that validates origin, source, finite bounds, and expansion state; measurements are deduplicated, support growth and shrinkage, rerun after fonts/view changes, and stay independent of iframe viewport height.
- Added mobile-safe touch targets, phone-landscape behavior, safe-area spacing, Canvas resize recovery, a clear exit-camera action, and a WebGL failure/retry state.

#### [CODEX] Verification and boundary
- Production-browser workflows passed at 360, 390, 430 CSS px, 932 × 430 landscape, and 1440 × 900 desktop with no page or iframe horizontal overflow. Fault training reached a generated report; Isaac preserved YAML/defect/output state across views and collapse; motion preserved performance, joint, metric, cohort, and chart state.
- The production build, content validation, and diff checks pass. Browser automation used installed desktop Chrome with responsive viewports, not iOS Safari hardware. WebGL rendered successfully in local Chrome; the two blocked-resource console entries are external font requests denied by the sandbox, not new application errors.

### Mobile fault and motion acceptance corrections (2026-09-06)

#### [USER] Request and judgment
- Fix only the fault-training and motion-evaluation mobile regressions shown in the current local build: language-dependent stretching, blank evidence cards, missing sample labels, score/skeleton overlap, and unstable iframe height after repeated collapse.

#### [CODEX] Implementation
- Kept fault-training Chinese and English on one layout path, stabilized mobile text autosizing, made readiness rows explicitly content-sized, and versioned the iframe URL so phones cannot retain the previous static document.
- Restored the two visible motion sample labels, tightened the three mobile tabs, moved the score ring out of the skeleton overlay, and changed the three evidence cards to normal block flow with intrinsic height.
- Fixed the confirmed collapse feedback loop: collapsed iframes retain their real width, and height messages received while collapsed are no longer stored as the next expansion height.

#### [CODEX] Verification and boundary
- At 390 CSS px, fault buttons measured 44 px and all readiness rows 37.5 px in both languages and before/after the readiness check; motion tabs measured 48 px, evidence cards 80.4 / 80.4 / 79.4 px, and score/skeleton overlap measured zero.
- Three consecutive motion collapse/expand cycles returned to 1326 px each time while preserving sample, joint, and timeline state. Responsive checks at 360, 430, 844 × 390 landscape, and 1440 × 900 desktop found no page or iframe horizontal overflow and no application console errors.
- Isaac source and behavior, project copy, desktop styling, and production deployment were not changed. Validation used desktop Chrome responsive viewports, not iOS Safari hardware; sandbox-blocked Google Fonts requests remain an environment limitation.
