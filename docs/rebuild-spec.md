# huhuhushengxiang.com 重建规格书（Handoff for Claude Code / Codex）

> 来源：用户与 claude.ai 的对话结论，2026-07-22 交付给 Claude Code。
> 本文件为**规格原文存档，不在此修改**；当前实施计划与进度见仓库根目录 `communication.md`。
> 配套参考文件：theme-comparison.html（v1 配色对比）、theme-v2-integration.html（衔接方案）、
> theme-v3-twin-toggle.html（DESIGN/RUNTIME 开关原型）、theme-v4-runtime-skins.html（屏内皮肤终选）。
> **v3/v4 的 HTML/CSS/JS 是视觉基准实现，重建时应以其为样式参照。**
> （本机实际留存的最新基准文件见 `docs/design-refs/`，对应关系见 communication.md 第 2 节。）

---

## 0. 现状问题（来自对源码 Hulala0630/Shengxiang.github.io 的审计）

| # | 问题 | 严重度 |
|---|------|--------|
| 1 | 全站客户端渲染：无 JS 环境（爬虫/LinkedIn 预览/AI 工具）看到空项目区 + 裸露占位文案 "Replace the placeholders..." | P0 |
| 2 | 首屏无证据：只有姓名+方法论句，没有岗位锚点和量化数字 | P0 |
| 3 | 语言切换不持久（无 localStorage / 无独立路由） | P1 |
| 4 | Career Path / Capability Areas 依赖轮播，关键信息藏在箭头后 | P1 |
| 5 | 交互全是"浏览型"（轮播/展开），没有可玩 demo 证明工程能力 | P1 |
| 6 | 项目未区分"企业级已上产线"和"个人 Demo" | P1 |
| 7 | 定位过于哲学化（"Systems Thinking..."），招聘者需自行推导岗位 | P0（文案） |

现有资产可复用：projects.js 中 8-9 个项目的双语 problem/solution/result/technologies 数据（共 82 组翻译）、5 个 mp4 演示视频。**内容不重写，重写渲染层。**

---

## 1. 核心概念

**网站本身就是方法论的证明**——定位说"配置驱动、可测试、把不可见行为显性化"，网站就必须自身如此：

1. **DESIGN / RUNTIME 双视图**（签名交互）：每个项目 demo 默认是浅色工程图纸态（DESIGN），右上角开关切到 RUNTIME 后原地"上电"变成深色运行屏（状态灯、报警辉光、流动脉冲、实时 KPI）。切换本身隐喻虚拟调试：设计态 ↔ 运行态。
2. **单一数据源**：全站由一份 `site.config.json`（或 content collection）驱动，构建时生成页面。
3. **Inspect Mode**（二期）：全站开关，开启后每个区块旁浮现驱动它的 JSON 配置，改配置实时变——证明"配置驱动"不是口号。
4. **可测试**：schema 用 zod 校验，CI 跑校验 + Playwright 冒烟测试；页脚放 "content passes N schema checks · build #x" 徽章。

---

## 2. 视觉系统（已定稿）

### 设计语言
浅色收敛版包豪斯为"体"（工程制图气质，参照西门子/Festo 技术文档），深色只出现在 RUNTIME 屏内为"用"。不做全站深色，不用英伟达黑绿全站皮肤。

### 色彩 Token（皮肤③：绿 + 紫=AI 层，v4 终选）

```css
/* 本体（DESIGN 态 / 页面） */
--ink:   #17181A;   /* 墨黑：文字、线框 */
--paper: #F5F5F2;   /* 纸白：页面底 */
--line:  #D8D7D2;   /* 分隔线 */
--steel: #2E3D4D;   /* 深蓝灰：次级强调 */
--amber: #FF9E00;   /* 琥珀：信号/强调/报警，全站唯一装饰性强调色 */
/* RUNTIME 屏内 */
--screen: #131318;  /* 屏黑 */
--sline:  #2A2A36;  /* 屏内分隔 */
--run:    #3DDC84;  /* 运行绿：RUNNING 状态专用 */
--alarm:  #FF9E00;  /* 报警琥珀（与页面强调色同源） */
--ai:     #C3A6FF;  /* 紫：AI 推理层专属，只在 AI 输出出现时使用 */
```

**色彩纪律**：紫色只允许出现在 AI 推理相关元素（Agent 诊断条、AI 图例、Agent 类项目标识），不参与任何其它装饰。报警永远是琥珀，运行永远是绿。

### 字体
- 标题：Space Grotesk（中文配 Noto Sans SC 700）
- 正文：IBM Plex Sans / Noto Sans SC
- 数据与工程标注：IBM Plex Mono
（与现站一致，保留连续性）

### 图纸语言部件（参照 v3/v4 实现）
图签栏（DWG/REV/MODE 单元格 + 开关）、24px 网格底纹、1.5px 墨线节点框、虚线物料流、图例条、节点角标 LED。RUNTIME 切换动画 0.45s，尊重 prefers-reduced-motion。

---

## 3. 信息架构与文案决策

### 首屏（10 秒建立认知，三层）
1. 岗位锚点（大标题层级）：**Industrial AI & Digital Twin Solution Engineer**
2. 方法论降为副标题：Systems thinking for industrial software, simulation, and digital delivery
3. 三个数字：**80+** Digital Twin Models · **5** International Plants · **€500K+** Engineering Cost Impact
4. 两个按钮：Explore projects / Try the live demos

### 页面顺序
Hero → Career Path（桌面全展开：同济 → TUM → BMW，Industrial Engineering → Automation & VC → Digital Twin Productization → Industrial AI Solutions；移动横滚但必须露出下一张卡边缘 + 进度指示）→ Projects（两组）→ Live Demos / Lab → About → Contact

### 项目分组（必须显式标注）
- **Production & Enterprise Systems**：BMW Digital Twin Training Platform、Industrial Fault Simulation System、Virtual Commissioning Toolchain —— 重证据：规模数字、真实视频
- **Independent AI & Simulation Products**：Industrial Simulation Data Agent、Industrial AI Agent、PLC Selection & Migration Agent、Digital Twin Demo、AI Career Copilot —— 重交互：可玩 demo，AI 类带紫色标识

### 文案修改
- About 删除 "My work is centered on technical problem solving rather than a single job title"，改为表达"跨自动化、仿真、软件与 AI 交付复杂系统"
- 删除静态 HTML 里所有占位残留（"Replace the placeholders..."）
- 每张项目卡必须带 ≥1 个量化结果（上线提前 3-4 周 / 错误解决提升 25% / 错误库 200+ / 1000+ 培训人次等）
- Capability Areas 改为 "X → Y" 交付句式：Physical Process → Testable Digital Twin；Engineering Knowledge → Reusable Tooling；Natural Language → Simulation Configuration；Industrial Data → Observable System State

---

## 4. 技术架构

```
框架        Astro（静态优先 + islands）
数据        src/content/ 集合 + site.config.json 单源，zod schema 校验
i18n        /en/ 与 /zh/ 构建时预渲染两套完整路由（不用 JS 切换，不用 localStorage）
项目页      每个项目独立 URL：/[lang]/projects/[slug]（可直接投递链接、可被逐个收录）
Islands     仅 demo 组件加载 JS，每个 ≤150KB，进入视口才初始化（client:visible）
视频        全部 poster + 点击播放，不自动播；与 demo 并列为 Try it / Watch real system 两个 tab
部署        GitHub Actions → GitHub Pages，域名 huhuhushengxiang.com 不变
CI          zod 校验 + Playwright 冒烟（首屏渲染、语言路由、demo 开关）
```

目录骨架：

```
src/
├── content/projects/*.md        # 迁移自现有 projects.js
├── content/career.json
├── i18n/{en,zh}.json
├── components/                  # Hero/CareerPath/ProjectCard 静态
│   └── demos/*.tsx|.svelte      # islands：每个 demo 一个
├── pages/[lang]/index.astro
├── pages/[lang]/projects/[slug].astro
└── layouts/Base.astro
public/videos/  public/posters/
```

---

## 5. Demo 交互规格（每项目一个，200-400 行内）

统一模式：所有 demo 复用同一个 **DESIGN/RUNTIME 开关组件**（v3 原型行为），用户学一次通用全站。

| 项目 | DESIGN 态 | RUNTIME 态 | 备注 |
|------|----------|-----------|------|
| VC Line Auto Builder（招牌，第一批） | JSON 配置面板（桌面左栏/移动底部抽屉，预置 2-3 模板）→ 实时生成产线图纸 | 上电运行：流动脉冲、KPI 跳动、可触发 STN 卡滞故障 + 复位 | 纯 SVG/Canvas |
| Digital Twin HMI（第一批） | 产线结构图 | START/STOP/AUTO/MANUAL 面板 + 物理视图/数据视图双 tab（体现 OPC UA 链路） | 与 Prasad 的 HMI 区分点在双通道 |
| 故障诊断 Agent / PLC 选型 Copilot（第二批） | 系统结构图 | 脚本化对话回放：预置 3-4 问题 → 打字机输出推理 → 结构化结论；AI 输出全部紫色 | 不接真 LLM，标注"录制自真实系统" |
| 视觉动作评估（第二批） | 流程图 | 浏览器端 MediaPipe/TF.js 摄像头姿态估计"试试你的深蹲"（需授权，拒绝则回落视频） | 全站最惊艳项 |
| Desktop Agent / Sandbox 等 | — | 关键帧步进：视频拆 4-5 节点，点步骤条跳转 + 每步一句说明 | 成本最低 |

### 双端交互规则（全局）
- 输入统一用 Pointer Events；桌面加 hover 提示/键盘快捷键，移动加长按等效 hover
- 可点热区 ≥44px；小元素触摸判定半径 ×1.5
- 桌面"控制|视图"左右分栏；移动"视图在上 + 半展开底部抽屉"，操作时结果始终可见
- demo 画布 `touch-action: none` 防页面跟随滚动
- 动画用 rAF，tab 失焦暂停；降级链：交互 demo → 视频 → 截图

---

## 6. 实施优先级

**P0（第一周，解决可见性）**
1. Astro 骨架 + projects.js → content collection 迁移脚本
2. /en /zh 预渲染路由；删除全部占位残留
3. 新首屏（岗位锚点 + 三数字）
4. 部署管线（Actions → Pages，保留域名）

**P1（第二周，解决说服力）**
5. 项目两组分类 + 每项目独立页 + 量化结果上卡片
6. Career Path 桌面全展开 / 移动露边横滚
7. VC Line Auto Builder + HMI 两个 demo（含 DESIGN/RUNTIME 开关组件）

**P2（第三阶段，解决差异化）**
8. Agent 对话回放、摄像头姿态估计、关键帧步进
9. Inspect Mode 全站开关
10. CI 测试徽章 + 页脚 build 信息

---

## 7. 明确不做的事

- 不做全站深色 / 英伟达黑绿皮肤（差异化与阅读性理由，见对话审计）
- 紫色不做通用装饰色（只属于 AI 推理层）
- 不引入重型 3D（Three.js 全屏场景）到首屏；Unity WebGL 若做只放独立页
- 不复刻 Prasad 的彩蛋密度路线——本站以"一致性"取胜：一个签名交互 + 少量精 demo
- demo 不接真实 LLM API（成本/延迟不可控），用脚本回放

---

## 8. Hero 交互组件规格（追加 · 以 HERO_GAME_3D_v0.9.html 为功能与视觉基准）

- **组件**：Twin Cell 3D（Three.js r128，单 island，懒加载 client:visible）
- **玩法定稿**：三模式对照（NO AI 停机 / AI ONLY 真机试错→碰撞+废品 / AI+SIM 孪生试错→零真机碰撞）+ 点地面落障（落下回弹）+ 点障碍清除 + 点机器人问候 + RESET SCENE 全量重置
- **视图**：SIMULATION（蓝晒棱线幽灵）↔ REAL（PBR 实体），语义色跨视图守恒，生成即适配当前视图
- **机器人**：锥度圆柱肢体、无描边、执行器圆盘、面罩玻璃、弹簧关节动力学、左右臂腿交叉摆（顺拐已修）、待机呼吸、双向障碍处理（返程同逻辑）
- **手感**：行走加减速缓动、轨道镜头惯性、碰撞镜头震动、+1/SCRAP 浮字、合成音效（交付/碰撞/停机/部署/问候）
- **SIM 学习时间轴**：接近 1.5s → 碰撞定格 0.7s → 慢速跨越 2.0s → 部署展示 1.6s（总 ~5.8s，可读性优先）
- **交给实现阶段**：暗主题 token 接入、移动端性能分级（DPR/阴影降档 + 2D 版 HERO_GAME_v2 作最终降级）、reduced-motion、音效开关、组件化封装 + Playwright 冒烟（三模式各跑一遍断言 KPI 变化）
