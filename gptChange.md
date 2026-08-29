# Codex Change Log

## 2026-07-24 — Homepage rebuild

### 完成内容

- 将工作分支从 `claudeChangeUpdate` 更名为 `websiteRebuild`。
- 阅读并保留 Claude 交付的协作文档（现已更名为 `communication.md`）、`docs/rebuild-spec.md` 与五份设计原型。
- 根据用户最新设想，重写首页信息架构与视觉层级。
- 新 Hero 默认自动模拟数字孪生单元；只有用户点击后才进入可玩状态。
- 为三个旗舰方向加入独立轻量交互：
  1. BMW 错误仿真培训：故障场景选择、注入与链路反馈。
  2. Unity + Isaac Sim 自动建模：配置预设与场景结构联动。
  3. Digital Twin Builder / Industrial Agent：脚本化 Plan–Tool–Review 诊断轨迹。
- 将原有项目数据重新组织为企业项目与个人项目两个折叠栏目。
- 展开项继续展示现有完整介绍、技术亮点、结果和本地视频。
- 保留中文/英文切换，并为移动端和 `prefers-reduced-motion` 做适配。
- 新增根目录 `spec.md`，记录用户、Claude、Codex 最新共识与验收标准。

### 对 Claude 旧方案的调整

- 暂缓 Astro/content collection 迁移。当前内容方向仍在迭代，先用无构建依赖的静态实现验证叙事和交互。
- 不再把全部项目都提升为独立交互页；首页交互预算集中在三个旗舰系统。
- Hero 交互从“访客进入即玩”调整为“默认自动演示，用户主动接管”。
- 原 `docs/rebuild-spec.md` 继续作为历史设计依据，但最新冲突以根目录 `spec.md` 为准。

### 保留与注意事项

- `projects.js` 中用户此前新增的 Industrial Simulation Data Agent 内容已保留。
- 旗舰项目文字目前使用用户提供的方向与已有项目资料；BMW 相关公开数字和视频仍应在正式发布前由用户确认。
- 当前 Agent 交互是本地脚本演示，不调用 LLM 或外部服务。

### 建议下一步

1. 用户与 Claude 共同复核三项旗舰项目的准确命名、数据与保密边界。
2. 为 BMW 项目补充经授权的截图或视频 poster。
3. 为自动建模项目补一张 Unity/Isaac Sim 输出对比图。
4. 内容确认后再决定是否迁移到 Astro 并建立独立项目 URL。

## 2026-07-24 — Evidence-first revision

- 根据用户反馈取消“未完成项目 = 旗舰成果”的表达。
- 首页拆分为 Proven Work 与 Building Now。
- Proven Work 使用：BMW 故障培训、工业数字孪生 Demo、运动数据评估。
- 自动建模与 Industrial Agent 明确标为开发中，交互标注为概念预览或脚本轨迹。
- 参考 Prasad 作品集后，吸收其清晰定位、Problem/Architecture/Impact、职业经历和技能上下文优势。
- 恢复 Career、教育背景与七类能力范围。
- 项目档案现在渲染 `projects.js` 中所有可用字段，避免第一版的信息损失。

## 2026-07-24 — Two visual directions

- 接收并复用用户指定的装配流体仿真 Hero v2.0。
- 将 Three.js r128 本地化，Hero 不再依赖 CDN 才能运行。
- 新增 `bauhaus-rebuild.html`：
  - 延续原网站的包豪斯/编辑式语言。
  - 个人信息、教育与职业路径前置。
  - Proven Work、Building Now、Archive、Capabilities 依次展开。
- 新增 `tech-dual-theme.html`：
  - 使用完整 Light / Dark token 切换。
  - 主题选择通过 localStorage 保存。
  - 保留运行绿、报警琥珀和 AI 紫的稳定语义。
- 两版均直接读取 `projects.js`，避免出现第二份项目内容来源。
- 两版通过桌面和 390px 移动端检查，Hero Canvas 与基础交互均正常。

## 2026-07-24 — Bauhaus dual-theme layout validation

- 根据用户手绘布局新增 `bauhaus-dual-theme-layout.html`。
- 首屏采用左侧个人信息/滚动履历、右侧完整 3D Hero 的组合。
- 包豪斯视觉增加完整 Light / Dark 双主题，但不改变红蓝黄的构成逻辑。
- 重点 Demo 仅保留：
  - Industrial Fault Simulation & Training。
  - Unity + Isaac Sim Automatic Modeling。
  - Vision-based Motion Evaluation。
- 三个 Demo 分别实现故障注入、场景配置切换与动作评分交互。
- 其他项目改为后置折叠档案，能力与联系方式位于页面最后。
- 已验证 Hero Canvas、三个 Demo、主题持久化和 390px 移动端布局。

## 2026-07-25 — Bauhaus validation 02

- `main` 分支新增并推送 Industrial Simulation Data Agent 项目及 Isaac Sim Generator 视频。
- `websiteRebuild` 中将教育和工作经历改为原生横向吸附滑动，并加入左右箭头与进度下划线。
- Hero 增加 Bauhaus 嵌入模式：
  - 去除原 HTML 的外边距和底部空占位；
  - 与父页面同步 light / dark 主题；
  - 操作面板使用包豪斯语义色和统一边框系统；
  - 高度随内部内容自动回传。
- 三个旗舰项目从三列小卡改为三条横向案例板，每条包含简介、交互、结果和展开详情。
- Isaac Sim Generator 明确归入 Data Agent，不创建重复项目，并在旗舰详情内接入新视频。
- 项目归档改为“一句话 + 效果预览 + 展开详情/视频”的信息密度。

## 2026-07-25 — Navigation and prototype-copy cleanup

- 首屏左右模块实现上下边线精确对齐。
- Hero 高度通过扩展 3D viewport 适配左栏，不再用空白补齐。
- 增加可隐藏的左侧纵向导航、上下章节按钮和当前章节高亮。
- 手机端默认收起左侧导航，并保留边缘唤回按钮。
- 删除页面中的 Demo 编号、Demo 导航措辞和未操作前的结果提示。
- 删除 Hero 中拖拽、比较步骤和快捷键提醒，保留状态信息与控制本身。
- 三个项目内容暂不继续扩写，等待后续逐项确认。

## 2026-07-27 — Local Astro migration phase 1

- 根据用户裁决开始本地渐进迁移 Astro，不提交、不推送。
- 将 `claudework.md` 更名为 `communication.md`，明确 `[USER]`、`[CODEX]`、`[CLAUDE]`、`[SHARED]` 来源和责任。
- 使用哈希冻结当前 Bauhaus 原型、`projects.js` 和 Hero 作为迁移对照。
- 建立 Astro 7.1.3 静态项目、中文 `/`、英文 `/en/` 与本地构建。
- 构建前从 `projects.js` 自动同步项目数据并执行双语结构校验。
- 迁移 Bauhaus 双主题壳层、个人信息、横向履历、响应式侧栏、能力与联系方式。
- 保持现有 Three.js Hero 为 iframe，暂不组件化或修改玩法。
- 三个重点项目只迁移事实数据和静态效果，不新增交互；完整打磨留给三方逐项审核。
- 恢复 Industrial Digital Twin Demo；Astro 页面现为 3 个重点项目 + 9 个其他项目。
- 旧 `index.html` 移入 `docs/design-refs/legacy-index-2026-07-24.html` 保存。
- 本地构建、中文/英文、主题、Hero、视频、桌面和 390px 移动端验证通过。
