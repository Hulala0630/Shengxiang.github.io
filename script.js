const copy = {
  zh: {
    navProjects:"代表成果",navBuilding:"正在构建",navArchive:"项目档案",navAbout:"关于",heroKicker:"INDUSTRIAL AI × DIGITAL TWIN",
    heroTitle:"把工业知识变成<br><em>可运行的系统</em>",heroLead:"我连接自动化、仿真、软件与 AI，将复杂的物理过程转化为可建模、可测试、可监视的数字系统。",
    metricModels:"数字孪生模型",metricPlants:"国际工厂",metricFlagships:"系统方向",explore:"查看代表成果",takeControl:"进入交互",
    stageState:"系统状态",stageOutput:"本周期产出",stageHint:"当前动作",flagshipTitle:"先用已经完成的工作建立可信度",
    flagshipIntro:"生产项目、完整原型与研究项目分别标注；成果、边界和证据不混在一起。",enterpriseSystem:"企业级系统",
    faultTitle:"BMW 工业错误仿真培训平台",faultDesc:"把难以复现、成本高昂的真实故障，转化为可控、可重复训练的数字场景。",
    delivered:"已交付",complete:"完整原型",research:"完成研究项目",prototype:"原型开发中",inDevelopment:"开发中",
    twinSystem:"个人技术项目",twinTitle:"工业数字孪生演示系统",twinDesc:"将 PLC 仿真、OPC UA、REST 服务和 Unity 可视化连接成一条可读、可验证的数据链路。",
    motionSystem:"视觉与数据评估",motionTitle:"基于视觉的人体动作评估与反馈",motionDesc:"把约 30 fps 的骨架数据转化为关节角度、变化率和加速度指标，并与专家动作进行对比。",
    modelTitle:"Unity 数字孪生 + Isaac Sim 自动建模",modelDesc:"通过结构化配置生成产线、设备层级、USD 场景与合成数据输出。",
    agentTitle:"Industrial Diagnostics Agent",agentDesc:"让 Agent 调用工程工具，对模型状态和故障执行可追踪推理。",
    buildingTitle:"正在构建，不包装成已经完成",buildingIntro:"这里展示方向、当前完成度和下一步。页面里的交互是概念化预览，不代表完整生产系统。",
    archiveTitle:"企业项目与个人实验，按需展开",archiveIntro:"默认只保留关键信息；视频、系统结构与完整技术说明在展开后显示。",
    enterpriseTab:"企业项目",personalTab:"个人项目",profileTitle:"跨越自动化、仿真、软件与 AI，交付复杂系统。",
    profileText:"我的工作从物理过程出发：先把边界、状态与接口说清楚，再用软件和仿真提前验证，最后让 AI 在可靠的数据与工具之上工作。",
    evidenceTitle:"经历与能力不是装饰，而是项目证据的上下文",evidenceIntro:"恢复原网站中的教育、职业路径和完整能力范围。"
  },
  en: {
    navProjects:"Proven work",navBuilding:"Building now",navArchive:"Project archive",navAbout:"About",heroKicker:"INDUSTRIAL AI × DIGITAL TWIN",
    heroTitle:"Turning industrial knowledge into<br><em>working systems</em>",heroLead:"I connect automation, simulation, software and AI to make complex physical processes modelable, testable and observable.",
    metricModels:"Digital twin models",metricPlants:"International plants",metricFlagships:"System directions",explore:"Explore proven work",takeControl:"Take control",
    stageState:"System state",stageOutput:"Cycle output",stageHint:"Current action",flagshipTitle:"Credibility starts with work that is already complete",
    flagshipIntro:"Production delivery, complete prototypes and research projects are labeled separately—evidence and ambition are not mixed.",enterpriseSystem:"Enterprise system",
    faultTitle:"BMW industrial fault simulation & training",faultDesc:"Turn rare, costly real-world faults into controlled, repeatable digital training scenarios.",
    delivered:"Delivered",complete:"Complete prototype",research:"Completed research",prototype:"Prototype in progress",inDevelopment:"In development",
    twinSystem:"Independent technical project",twinTitle:"Industrial Digital Twin Demo",twinDesc:"Connect PLC simulation, OPC UA, REST services and Unity visualization into one readable and testable data path.",
    motionSystem:"Vision & data evaluation",motionTitle:"Vision-based Motion Evaluation & Feedback",motionDesc:"Turn skeleton data at roughly 30 fps into joint angles, rate-of-change and acceleration metrics compared with expert motion.",
    modelTitle:"Unity digital twin + Isaac Sim auto modeling",modelDesc:"Generate lines, equipment hierarchies, USD scenes and synthetic data from structured configurations.",
    agentTitle:"Industrial Diagnostics Agent",agentDesc:"Let an agent use engineering tools and reason transparently over model state and faults.",
    buildingTitle:"Building in public, without presenting it as finished",buildingIntro:"This section shows direction, current progress and next steps. Its interactions are concept previews, not complete production systems.",
    archiveTitle:"Enterprise work and personal experiments, on demand",archiveIntro:"Only the essentials stay visible. Expand for video, architecture and full technical detail.",
    enterpriseTab:"Enterprise",personalTab:"Personal",profileTitle:"Delivering complex systems across automation, simulation, software and AI.",
    profileText:"My work starts with the physical process: clarify boundaries, states and interfaces; validate early with software and simulation; then let AI work on reliable data and tools.",
    evidenceTitle:"Experience and capability give project evidence its context",evidenceIntro:"Restoring the education, career path and full capability map from the original site."
  }
};

let language = "zh";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const bilingual = (value) => value?.[language] || value?.en || value?.zh || "";

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  document.title = next === "zh" ? "胡生翔｜工业 AI 与数字孪生" : "Hu Shengxiang | Industrial AI & Digital Twin";
  $$("[data-copy]").forEach((node) => {
    const value = copy[next][node.dataset.copy];
    if (value) node.innerHTML = value;
  });
  $("#language-toggle").textContent = next === "zh" ? "EN" : "中文";
  renderArchive(activeFilter);
  renderEvidence();
}

$("#language-toggle").addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));
$("#year").textContent = new Date().getFullYear();

const stage = $("#twin-stage");
const playHero = $("#play-hero");
let heroInteractive = false;
let cycle = 1;
const stagePhrases = ["PROCESS SIMULATION", "VALIDATE SIGNALS", "SYNC DIGITAL TWIN", "CHECK QUALITY"];
setInterval(() => {
  if (heroInteractive || stage.classList.contains("is-fault")) return;
  cycle += 1;
  $("#stage-cycle").textContent = `CYCLE ${String(cycle).padStart(3, "0")}`;
  $("#stage-output").textContent = String(23 + (cycle % 4));
  $("#stage-hint").textContent = stagePhrases[cycle % stagePhrases.length];
}, 2200);

function enterHero() {
  heroInteractive = true;
  $("#stage-mode").textContent = "MANUAL CONTROL";
  $("#stage-controls").hidden = false;
  $("#hero-fault").disabled = false;
  playHero.textContent = language === "zh" ? "控制已启用" : "Control enabled";
}
playHero.addEventListener("click", enterHero);
$("#hero-fault").addEventListener("click", () => setHeroFault(true));
function setHeroFault(fault) {
  stage.classList.toggle("is-fault", fault);
  $("#stage-state").textContent = fault ? "FAULT / STN-04" : "RUNNING";
  $("#stage-hint").textContent = fault ? "CONVEYOR BLOCKED" : "SYSTEM RESET";
}
$("#stage-controls").addEventListener("click", (event) => {
  const action = event.target.dataset.heroAction;
  if (action === "fault") setHeroFault(true);
  if (action === "reset") setHeroFault(false);
  if (action === "exit") {
    setHeroFault(false); heroInteractive = false;
    $("#stage-mode").textContent = "AUTOPILOT";
    $("#stage-controls").hidden = true;
    $("#hero-fault").disabled = true;
    playHero.textContent = copy[language].takeControl;
  }
});

$("#inject-fault").addEventListener("click", () => {
  const labels = {
    sensor:["检测到 PE-04 信号持续占用 → 检查遮挡与接线。","PE-04 remains occupied → inspect blockage and wiring."],
    jam:["输送带速度为 0，但驱动命令有效 → 机械卡滞已复现。","Conveyor speed is 0 while drive command is active → jam reproduced."],
    drive:["驱动电流超过阈值 → 训练场景锁定并记录响应时间。","Drive current exceeded threshold → scenario locked and response time started."]
  };
  const value = $("#fault-select").value;
  $("#fault-status").textContent = "FAULT ACTIVE";
  $("#fault-status").style.color = "var(--amber)";
  $("#fault-log").textContent = labels[value][language === "zh" ? 0 : 1];
  $$(".machine").forEach((node, i) => setTimeout(() => node.style.borderColor = "var(--amber)", i * 180));
  setTimeout(() => { $("#fault-status").textContent = "SCENARIO CAPTURED"; }, 1200);
});

const presets = {
  compact:{count:"3 NODES",code:"line:\n  stations: 1\n  robot: true\n  sensor: 2"},
  assembly:{count:"8 NODES",code:"line:\n  stations: 3\n  robots: 2\n  conveyors: 2\n  export: USD"}
};
$$(".preset").forEach((button) => button.addEventListener("click", () => {
  $$(".preset").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  const preset = presets[button.dataset.preset];
  $("#builder-count").textContent = preset.count;
  $("#config-code").textContent = preset.code;
  $("#builder-scene").classList.toggle("assembly", button.dataset.preset === "assembly");
}));

let agentRunning = false;
$("#run-agent").addEventListener("click", async () => {
  if (agentRunning) return;
  agentRunning = true;
  const log = $("#agent-log");
  log.innerHTML = `<p class="user-line">${language === "zh" ? "发现 Cell 04 节拍下降，请定位原因。" : "Cell 04 cycle time dropped. Find the cause."}</p>`;
  const steps = language === "zh" ? [
    ["ai-line","PLAN · 对比节拍、报警与传感器状态"],
    ["tool-line","TOOL · get_cycle_time() → +18.4%"],
    ["tool-line","TOOL · read_alarm_history() → PE-04 intermittent"],
    ["ai-line","REVIEW · 证据集中于工位入口传感器"],
    ["ai-line","结论 · PE-04 信号抖动造成等待；建议检查安装位置，并在复位前运行 20 周期验证。"]
  ] : [
    ["ai-line","PLAN · Compare cycle time, alarms and sensor state"],
    ["tool-line","TOOL · get_cycle_time() → +18.4%"],
    ["tool-line","TOOL · read_alarm_history() → PE-04 intermittent"],
    ["ai-line","REVIEW · Evidence converges on the station entry sensor"],
    ["ai-line","CONCLUSION · PE-04 signal bounce causes waiting; inspect mounting and validate for 20 cycles before reset."]
  ];
  for (const [className, text] of steps) {
    await new Promise((resolve) => setTimeout(resolve, 520));
    log.insertAdjacentHTML("beforeend", `<p class="${className}">${text}</p>`);
    log.scrollTop = log.scrollHeight;
  }
  agentRunning = false;
});

let twinPaused = false;
$("#pause-twin").addEventListener("click", () => {
  twinPaused = !twinPaused;
  $$(".flow-node").forEach((node) => node.classList.toggle("active", !twinPaused));
  $("#twin-link-status").textContent = twinPaused ? "DATA PAUSED" : "SYNCHRONIZED";
  $("#twin-value").textContent = twinPaused ? "HOLD · LAST VALUE" : "RUN · 36.2/h · 8.4s";
  $("#pause-twin").textContent = twinPaused ? "RESUME DATA" : "PAUSE DATA";
});

$("#evaluate-motion").addEventListener("click", async () => {
  const button = $("#evaluate-motion");
  button.disabled = true;
  $("#motion-score").textContent = "ANALYZING";
  $("#skeleton").classList.add("analyzing");
  await new Promise((resolve) => setTimeout(resolve, 900));
  $("#shoulder-value").textContent = "84 / 100";
  $("#knee-value").textContent = "71 / 100";
  $("#stability-value").textContent = "88 / 100";
  $("#motion-score").textContent = "81 / 100";
  $("#motion-feedback").textContent = language === "zh"
    ? "反馈：右膝屈曲不足；下蹲阶段保持躯干稳定。"
    : "Feedback: increase right-knee flexion; keep the trunk stable during descent.";
  $("#skeleton").classList.remove("analyzing");
  $("#skeleton").classList.add("evaluated");
  button.disabled = false;
});

const careerData = {
  zh: [
    ["2016–2021","同济大学","工业工程 本科","工业工程、流程分析与生产系统基础。"],
    ["2021–2024","慕尼黑工业大学","人因工程—系统交互 硕士","人机交互、界面设计、工程系统与数据分析。"],
    ["2023–2026","宝马集团 · 慕尼黑","数字孪生 / 虚拟调试","工业仿真、虚拟培训、系统集成与数字化交付。"],
    ["NEXT","Industrial AI Systems","当前发展方向","把仿真工具、工业数据与可解释 Agent 连接起来。"]
  ],
  en: [
    ["2016–2021","Tongji University","B.Eng. Industrial Engineering","Industrial engineering, process analysis and production systems."],
    ["2021–2024","Technical University of Munich","M.Sc. Human Factors Engineering","Human-system interaction, interface design and data analysis."],
    ["2023–2026","BMW Group · Munich","Digital Twin / Virtual Commissioning","Industrial simulation, virtual training, integration and digital delivery."],
    ["NEXT","Industrial AI Systems","Current direction","Connecting simulation tools, industrial data and explainable agents."]
  ]
};

const capabilityData = {
  zh: [
    ["ST","系统架构与问题结构化","System Thinking · Interface Design · Fault Modeling"],
    ["DT","仿真与数字孪生","Unity · PLCSim · Isaac Sim · OpenUSD"],
    ["AI","AI 系统与 Agent 工程","Plan–Execute–Review · Tool Calling · Memory"],
    ["DI","工业通信与集成","OPC UA · REST API · State Synchronization"],
    ["SW","软件与工程工具","C# · .NET · Python · Plugin Architecture"],
    ["DA","数据分析与计算建模","MATLAB · Feature Engineering · Motion Analysis"],
    ["UX","面向用户的技术设计","NASA-TLX · Feedback Design · Technical UX"]
  ],
  en: [
    ["ST","System Architecture & Problem Structuring","System Thinking · Interface Design · Fault Modeling"],
    ["DT","Simulation & Digital Twin","Unity · PLCSim · Isaac Sim · OpenUSD"],
    ["AI","AI Systems & Agent Engineering","Plan–Execute–Review · Tool Calling · Memory"],
    ["DI","Industrial Communication & Integration","OPC UA · REST API · State Synchronization"],
    ["SW","Software & Engineering Tooling","C# · .NET · Python · Plugin Architecture"],
    ["DA","Data Analysis & Computational Modeling","MATLAB · Feature Engineering · Motion Analysis"],
    ["UX","User-centered Technical Design","NASA-TLX · Feedback Design · Technical UX"]
  ]
};

function renderEvidence() {
  $("#career-grid").innerHTML = careerData[language].map(([period,title,subtitle,description], index) => `
    <article class="career-step ${index === 2 ? "current" : ""}">
      <span>${period}</span><h3>${title}</h3><b>${subtitle}</b><p>${description}</p>
    </article>`).join("");
  $("#capability-grid").innerHTML = capabilityData[language].map(([mark,title,topics]) => `
    <article class="capability-card"><span>${mark}</span><div><h3>${title}</h3><p>${topics}</p></div></article>`).join("");
}

const enterpriseMatcher = /Industry Project|Enterprise|企业项目|BMW|Fault Simulation/i;
function flattenProjects() {
  const result = [];
  projectsData.forEach((project) => {
    if (project.type === "collection") {
      result.push({
        ...project,
        projectType:{en:"Personal Project Collection",zh:"个人项目集合"},
        overview:project.summary,
        keyFeatures:{
          en:project.items.map((item) => item.title.en),
          zh:project.items.map((item) => item.title.zh)
        }
      });
      project.items.forEach((item) => result.push({...item, projectType:{en:"Personal Project",zh:"个人项目"}, fromCollection:true}));
    } else result.push(project);
  });
  return result;
}
const archiveProjects = flattenProjects();
let activeFilter = "enterprise";
function mediaMarkup(project) {
  const url = project.video?.url;
  if (!url || !/\.mp4$/i.test(url)) return "";
  return `<video controls preload="metadata"><source src="${url}" type="video/mp4"></video>`;
}
function textBlock(label, value) {
  const text = bilingual(value);
  return text ? `<section><h4>${label}</h4><p>${text}</p></section>` : "";
}
function listBlock(label, value) {
  const list = value?.[language];
  return Array.isArray(list) && list.length
    ? `<section><h4>${label}</h4><ul>${list.map((item) => `<li>${item}</li>`).join("")}</ul></section>`
    : "";
}
function renderArchive(filter) {
  const list = $("#archive-list");
  const filtered = archiveProjects.filter((project) => {
    const type = `${project.projectType?.en || ""} ${project.projectType?.zh || ""} ${project.title?.en || ""}`;
    return filter === "enterprise" ? enterpriseMatcher.test(type) : !enterpriseMatcher.test(type);
  });
  list.innerHTML = filtered.map((project) => {
    const summary = bilingual(project.summary) || bilingual(project.description) || bilingual(project.pitch);
    const type = bilingual(project.projectType) || (language === "zh" ? "个人项目" : "Personal project");
    const labels = language === "zh" ? {
      pitch:"一句话概述",problem:"问题",solution:"方案",overview:"概览",highlights:"技术亮点",
      technical:"补充技术细节",interaction:"交互方式",idea:"系统思路",structure:"系统结构",result:"结果",note:"说明",tech:"技术"
    } : {
      pitch:"PITCH",problem:"PROBLEM",solution:"SOLUTION",overview:"OVERVIEW",highlights:"TECHNICAL HIGHLIGHTS",
      technical:"ADDITIONAL TECHNICAL DETAIL",interaction:"INTERACTION",idea:"SYSTEM IDEA",structure:"SYSTEM VIEW",result:"OUTCOME",note:"NOTE",tech:"TECHNOLOGIES"
    };
    const structure = bilingual(project.structure);
    return `<details class="archive-card">
      <summary class="archive-summary"><span class="kind">${type}</span><div><h3>${bilingual(project.title)}</h3><p>${summary}</p></div><span class="plus">+</span></summary>
      <div class="archive-body">
        <div>
          ${textBlock(labels.pitch,project.pitch)}
          ${textBlock(labels.problem,project.problem)}
          ${textBlock(labels.solution,project.solution)}
          ${textBlock(labels.overview,project.overview)}
          ${listBlock(labels.highlights,project.highlights || project.keyFeatures)}
          ${listBlock(labels.technical,project.technicalHighlights)}
          ${listBlock(labels.interaction,project.interaction)}
          ${textBlock(labels.idea,project.systemIdea)}
        </div>
        <div>
          ${structure ? `<section><h4>${labels.structure}</h4><pre>${structure}</pre></section>` : ""}
          ${mediaMarkup(project)}
          ${textBlock(labels.result,project.result)}
          ${textBlock(labels.note,project.note)}
          ${(project.technologies || []).length ? `<section><h4>${labels.tech}</h4><ul class="tags">${project.technologies.map((x) => `<li>${x}</li>`).join("")}</ul></section>` : ""}
        </div>
      </div>
    </details>`;
  }).join("") || `<p class="archive-empty">${language === "zh" ? "该栏目内容整理中。" : "This section is being curated."}</p>`;
}
$$(".archive-tabs button").forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  $$(".archive-tabs button").forEach((item) => item.classList.toggle("active", item === button));
  renderArchive(activeFilter);
}));

setLanguage("zh");
