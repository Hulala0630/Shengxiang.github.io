// Centralized bilingual content dictionary for all visible UI text.
const translations = {
  en: {
    pageTitle: "Industrial Automation & Digital Twin Engineer",
    skipLink: "Skip to content",
    brandSubtitle: "Industrial Systems Portfolio",
    navHome: "Home",
    navProjects: "Projects",
    navArchitecture: "Architecture",
    navDomains: "Domains",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "Industrial Automation Portfolio",
    heroTitle: "Industrial Automation & Digital Twin Engineer",
    heroDescription:
      "I build engineering systems that connect virtual commissioning, PLC simulation, OPC UA integration, and digital twin visualization into practical workflows for industrial projects.",
    heroPrimaryAction: "View Projects",
    heroSecondaryAction: "Contact",
    metricsHeading: "Engineering Focus",
    metricOne: "Control behavior simulation",
    metricTwo: "Industrial data interoperability",
    metricThree: "Digital twin visualization",
    projectsEyebrow: "Selected Work",
    projectsTitle: "Projects",
    projectsIntro:
      "Project summaries are structured to help recruiters understand the engineering challenge, the system approach, and the delivery impact.",
    architectureEyebrow: "System View",
    architectureTitle: "Architecture",
    architectureIntro:
      "A concise stack view showing how simulation data moves into software services and operator-facing visualization.",
    architectureDescription:
      "The PLC simulation produces state, alarms, and fault conditions. OPC UA exposes the data layer, integration services normalize it, and the front-end visualization turns engineering signals into an understandable digital twin.",
    domainsEyebrow: "Technical Scope",
    domainsTitle: "Engineering Domains",
    domainsIntro:
      "Core capability areas that are directly relevant to automation engineering, commissioning teams, and digital transformation programs.",
    aboutEyebrow: "Profile",
    aboutTitle: "About",
    aboutParagraphOne:
      "I work at the intersection of automation engineering, software integration, and simulation-driven delivery. My focus is on building systems that allow control logic, industrial communication, and digital representations of equipment to be tested earlier and explained more clearly.",
    aboutParagraphTwo:
      "I am particularly interested in virtual commissioning, PLC behavior modeling, OPC UA-based interoperability, and engineering tools that make complex systems easier to validate, maintain, and scale.",
    contactEyebrow: "Connect",
    contactTitle: "Contact",
    contactIntro:
      "Replace the placeholders below with your public contact details before publishing.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    contactGithubLabel: "GitHub",
    footerText: "Industrial Automation & Digital Twin Engineer.",
    footerAction: "Back to top",
    focusItems: [
      "Virtual commissioning and pre-commissioning validation",
      "PLC sequence logic, fault simulation, and alarm testing",
      "OPC UA integration between control and software layers",
      "Unity-based digital twin visualization for technical communication"
    ],
    architectureDiagram: [
      "Unity / Web Visualization",
      "          |",
      "          v",
      "Integration API Layer",
      "          |",
      "          v",
      "OPC UA Client & Data Mapping",
      "          |",
      "          v",
      "OPC UA Server / Gateway",
      "          |",
      "          v",
      "PLC Simulation / Control Logic"
    ].join("\n"),
    projectLabels: {
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      technologies: "Technologies",
      result: "Result"
    },
    projects: [
      {
        title: "Unity Digital Twin Demo",
        summary:
          "A demonstration environment for visualizing simulated machine status, operating modes, and alarm conditions in a 3D interface.",
        problem:
          "Project teams needed a clearer way to review machine behavior before physical equipment was available for commissioning.",
        solution:
          "I connected simulated control signals to a Unity-based scene so engineering stakeholders could inspect machine states in real time.",
        architecture:
          "PLC simulation publishes process states through OPC UA, a lightweight integration layer maps tags to visual states, and the Unity client renders equipment behavior.",
        technologies: ["Unity", "C#", "OPC UA", "PLC Simulation"],
        result: [
          "Improved early design reviews and technical communication.",
          "Reduced ambiguity around machine sequences and alarm behavior."
        ]
      },
      {
        title: "PLC Error Simulation System",
        summary:
          "A repeatable testing setup for generating PLC faults, signal loss, and abnormal process conditions before site commissioning.",
        problem:
          "Fault scenarios were difficult to reproduce consistently, which made alarm verification and recovery testing unreliable.",
        solution:
          "I designed a simulation workflow that injects controlled error states into the PLC logic and exposes them to supervisory software.",
        architecture:
          "A simulated PLC runtime generates predefined fault cases, OPC UA exposes diagnostic values, and test views validate alarms, interlocks, and reset behavior.",
        technologies: ["PLC", "Diagnostics", "OPC UA", "Test Automation"],
        result: [
          "Enabled structured verification of alarm handling and recovery paths.",
          "Shifted debugging effort earlier in the project lifecycle."
        ]
      },
      {
        title: "Automation Engineering Tool / Training Panel",
        summary:
          "A compact engineering demonstrator used to teach control logic structure, device interaction, and troubleshooting workflows.",
        problem:
          "New engineers and trainees needed a practical environment to understand automation architecture without depending on full production equipment.",
        solution:
          "I assembled a modular training panel with simple sequences, status visualization, and guided troubleshooting scenarios.",
        architecture:
          "The panel combines controller logic, operator-facing indicators, and documented training flows so users can connect software behavior to physical signals.",
        technologies: ["Automation", "Training Panel", "HMI", "Systems Integration"],
        result: [
          "Improved onboarding for controls-oriented engineering work.",
          "Created a reusable platform for demonstrations and technical training."
        ]
      }
    ],
    domains: [
      {
        icon: "VC",
        title: "Virtual Commissioning",
        description:
          "Testing machine sequences and interaction logic in a simulated environment before physical startup to reduce commissioning risk and schedule pressure."
      },
      {
        icon: "PS",
        title: "PLC Simulation",
        description:
          "Modeling machine states, process events, and fault conditions to validate controls behavior, interlocks, and exception handling."
      },
      {
        icon: "OU",
        title: "OPC UA Integration",
        description:
          "Designing structured communication between control systems and software services using interoperable industrial data models."
      },
      {
        icon: "AS",
        title: "Automation Software",
        description:
          "Developing tools and interfaces that support testing, visualization, diagnostics, and engineering collaboration."
      }
    ]
  },
  zh: {
    pageTitle: "工业自动化与数字孪生工程师",
    skipLink: "跳转到正文",
    brandSubtitle: "工业系统作品集",
    navHome: "首页",
    navProjects: "项目",
    navArchitecture: "架构",
    navDomains: "工程方向",
    navAbout: "关于",
    navContact: "联系",
    heroEyebrow: "工业自动化作品集",
    heroTitle: "工业自动化与数字孪生工程师",
    heroDescription:
      "我专注于将虚拟调试、PLC 仿真、OPC UA 集成与数字孪生可视化组合成可落地的工业工程流程，用于前期验证、联调和系统沟通。",
    heroPrimaryAction: "查看项目",
    heroSecondaryAction: "联系我",
    metricsHeading: "工程重点",
    metricOne: "控制逻辑与行为仿真",
    metricTwo: "工业数据互联互通",
    metricThree: "数字孪生可视化",
    projectsEyebrow: "代表项目",
    projectsTitle: "项目经历",
    projectsIntro:
      "以下项目以招聘视角重新组织，突出工程问题、系统方案以及实际交付价值。",
    architectureEyebrow: "系统视图",
    architectureTitle: "系统架构",
    architectureIntro:
      "用简洁的层级结构展示仿真数据如何进入集成服务，并最终呈现在可视化界面中。",
    architectureDescription:
      "PLC 仿真层生成设备状态、报警和故障场景；OPC UA 提供统一的数据接口；集成服务完成标签映射与数据整理；前端可视化将工程信号转化为易于理解的数字孪生界面。",
    domainsEyebrow: "技术范围",
    domainsTitle: "工程方向",
    domainsIntro:
      "这些能力方向与自动化岗位、调试团队以及工业数字化项目高度相关。",
    aboutEyebrow: "个人简介",
    aboutTitle: "关于我",
    aboutParagraphOne:
      "我的工作定位在自动化工程、软件集成与仿真驱动交付的交叉点。关注点是把控制逻辑、工业通信和设备数字化表达提前打通，让系统更早验证，也更容易向团队说明。",
    aboutParagraphTwo:
      "我尤其关注虚拟调试、PLC 行为建模、基于 OPC UA 的系统互联，以及能够提升验证效率、维护性和扩展性的工程工具。",
    contactEyebrow: "联系方式",
    contactTitle: "联系",
    contactIntro:
      "正式发布前，请将下面的占位信息替换为你真实可公开的联系方式。",
    contactEmailLabel: "邮箱",
    contactLinkedinLabel: "领英",
    contactGithubLabel: "GitHub",
    footerText: "工业自动化与数字孪生工程师。",
    footerAction: "返回顶部",
    focusItems: [
      "虚拟调试与上线前验证",
      "PLC 顺序控制、故障仿真与报警测试",
      "控制层与软件层之间的 OPC UA 集成",
      "面向沟通与验证的 Unity 数字孪生可视化"
    ],
    architectureDiagram: [
      "Unity / Web 可视化层",
      "          |",
      "          v",
      "集成 API 服务层",
      "          |",
      "          v",
      "OPC UA 客户端与数据映射",
      "          |",
      "          v",
      "OPC UA 服务器 / 网关",
      "          |",
      "          v",
      "PLC 仿真 / 控制逻辑层"
    ].join("\n"),
    projectLabels: {
      problem: "问题",
      solution: "方案",
      architecture: "架构",
      technologies: "技术栈",
      result: "成果"
    },
    projects: [
      {
        title: "Unity 数字孪生演示系统",
        summary:
          "用于展示设备运行状态、模式切换和报警信息的三维仿真界面，帮助团队在实机到位前完成方案评审。",
        problem:
          "在现场调试前，项目成员很难直观理解设备逻辑、状态切换以及异常工况的表现。",
        solution:
          "我将仿真的控制信号接入 Unity 场景，让控制、软件和项目团队可以实时查看设备状态与动作效果。",
        architecture:
          "PLC 仿真通过 OPC UA 发布过程数据，轻量集成层完成标签映射，Unity 客户端负责状态驱动和三维呈现。",
        technologies: ["Unity", "C#", "OPC UA", "PLC 仿真"],
        result: [
          "提升了方案评审和跨团队沟通效率。",
          "在实机调试前提前暴露顺序逻辑和报警理解偏差。"
        ]
      },
      {
        title: "PLC 故障仿真测试系统",
        summary:
          "面向异常工况验证的测试环境，可重复生成 PLC 故障、信号丢失和过程异常场景。",
        problem:
          "传统联调中故障场景难以稳定复现，导致报警验证和恢复流程测试缺乏一致性。",
        solution:
          "我设计了一套可控的故障注入流程，把典型异常状态写入仿真逻辑，并同步暴露给上位软件进行验证。",
        architecture:
          "仿真 PLC 运行预定义故障案例，OPC UA 统一输出诊断变量，测试界面用于核对报警、联锁和复位路径。",
        technologies: ["PLC", "故障诊断", "OPC UA", "测试自动化"],
        result: [
          "让报警处理和恢复逻辑具备结构化验证手段。",
          "把部分调试问题前移到现场前阶段解决。"
        ]
      },
      {
        title: "自动化工程培训与演示平台",
        summary:
          "一个紧凑的工程演示平台，用于讲解控制逻辑结构、设备交互方式以及基础排障流程。",
        problem:
          "新工程师和培训对象需要一个脱离正式产线、但又足够接近真实工程逻辑的学习环境。",
        solution:
          "我搭建了模块化培训平台，结合基础顺序控制、状态显示和引导式排障场景，支持教学与演示。",
        architecture:
          "平台将控制器逻辑、指示层与培训流程整合在一起，使学习者能够把软件行为和物理信号对应起来理解。",
        technologies: ["自动化", "培训平台", "HMI", "系统集成"],
        result: [
          "提升了控制方向工程师的上手效率。",
          "形成了可复用的展示与培训载体。"
        ]
      }
    ],
    domains: [
      {
        icon: "VC",
        title: "虚拟调试",
        description:
          "在实机启动前通过仿真环境验证设备节拍、交互逻辑和异常流程，降低现场调试风险与工期压力。"
      },
      {
        icon: "PS",
        title: "PLC 仿真",
        description:
          "对设备状态、工艺事件和故障工况进行建模，用于验证控制逻辑、联锁和异常处理行为。"
      },
      {
        icon: "OU",
        title: "OPC UA 集成",
        description:
          "通过标准化工业通信模型打通控制系统与软件服务，实现结构化、可扩展的数据交换。"
      },
      {
        icon: "AS",
        title: "自动化软件工具",
        description:
          "开发支持测试、可视化、诊断与工程协作的软件工具，提高工程交付效率和系统透明度。"
      }
    ]
  }
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const yearElement = document.getElementById("year");
const languageToggle = document.querySelector(".language-toggle");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const focusList = document.getElementById("focus-list");
const projectsGrid = document.getElementById("projects-grid");
const domainsGrid = document.getElementById("domains-grid");
const architectureDiagram = document.getElementById("architecture-diagram");
const revealItems = document.querySelectorAll(".reveal");

let currentLanguage = "en";

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Render list-based hero focus items from the selected language model.
function renderFocusItems(items) {
  focusList.innerHTML = "";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    focusList.appendChild(listItem);
  });
}

// Project cards are generated from structured recruiter-facing content blocks.
function createProjectCard(project, labels) {
  const article = document.createElement("article");
  article.className = "project-card card";

  const resultItems = project.result.map((item) => `<li>${item}</li>`).join("");
  const technologyItems = project.technologies.map((item) => `<li>${item}</li>`).join("");

  article.innerHTML = `
    <div class="project-header">
      <h3>${project.title}</h3>
      <p class="project-summary">${project.summary}</p>
    </div>
    <div class="project-meta">
      <section class="project-block">
        <h4>${labels.problem}</h4>
        <p>${project.problem}</p>
      </section>
      <section class="project-block">
        <h4>${labels.solution}</h4>
        <p>${project.solution}</p>
      </section>
      <section class="project-block">
        <h4>${labels.architecture}</h4>
        <p>${project.architecture}</p>
      </section>
      <section class="project-block">
        <h4>${labels.technologies}</h4>
        <ul class="tag-list">${technologyItems}</ul>
      </section>
      <section class="project-block">
        <h4>${labels.result}</h4>
        <ul class="project-list">${resultItems}</ul>
      </section>
    </div>
  `;

  return article;
}

function renderProjects(language) {
  const { projects, projectLabels } = translations[language];
  projectsGrid.innerHTML = "";

  projects.forEach((project) => {
    projectsGrid.appendChild(createProjectCard(project, projectLabels));
  });
}

function renderDomains(language) {
  const { domains } = translations[language];
  domainsGrid.innerHTML = "";

  domains.forEach((domain) => {
    const article = document.createElement("article");
    article.className = "domain-card card";
    article.innerHTML = `
      <span class="domain-icon">${domain.icon}</span>
      <h3>${domain.title}</h3>
      <p>${domain.description}</p>
    `;
    domainsGrid.appendChild(article);
  });
}

// Update static labels, then re-render structured sections for the active language.
function updateStaticText(language) {
  const dictionary = translations[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", language === "zh");
  document.title = dictionary.pageTitle;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  architectureDiagram.textContent = dictionary.architectureDiagram;
  renderFocusItems(dictionary.focusItems);
  renderProjects(language);
  renderDomains(language);

  document.querySelectorAll("[data-lang-option]").forEach((node) => {
    node.classList.toggle("active", node.dataset.langOption === language);
  });
}

function setLanguage(language) {
  currentLanguage = language;
  updateStaticText(language);
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "zh" : "en";
    setLanguage(nextLanguage);
  });
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
      });
    });
  },
  {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0
  }
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

setLanguage(currentLanguage);
