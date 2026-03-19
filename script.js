// Bilingual content model for all copy and structured project data.
const translations = {
  en: {
    pageTitle: "Systems Portfolio",
    skipLink: "Skip to content",
    brandSubtitle: "Problem Solving Through Engineering Systems",
    navHome: "Home",
    navProjects: "Projects",
    navDomains: "Domains",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "Engineering Systems Portfolio",
    heroTitle: "Systems Thinking for Industrial Software, Simulation, and Digital Delivery",
    heroDescription:
      "I work on technical problems that sit between control logic, simulation, industrial data exchange, and software representation. My focus is turning complex systems into structures that can be tested, understood, and delivered with less ambiguity.",
    heroPrimaryAction: "Explore Projects",
    heroSecondaryAction: "Read Profile",
    panelBadge: "Method",
    projectsEyebrow: "Selected Projects",
    projectsTitle: "Project Case Studies",
    projectsIntro:
      "Each project is framed around the problem, the system response, and the technical decisions that made the solution work.",
    domainsEyebrow: "Capability Areas",
    domainsTitle: "Domains",
    domainsIntro:
      "These are the technical domains where I typically translate unclear requirements into structured systems and testable workflows.",
    aboutEyebrow: "Profile",
    aboutTitle: "About",
    aboutLead: "My work is centered on technical problem solving rather than a single job title.",
    aboutParagraphOne:
      "I am interested in projects where physical systems, software abstractions, and engineering constraints need to be brought into one coherent operating model. That often means turning unclear interactions into explicit flows, interfaces, and validation paths.",
    aboutParagraphTwo:
      "Across simulation, system integration, and digital tooling, I focus on reducing uncertainty: making system behavior visible earlier, separating concerns clearly, and structuring implementation so teams can reason about it.",
    contactEyebrow: "Contact",
    contactTitle: "Get In Touch",
    contactIntro:
      "Replace the placeholders below with your public contact details before publishing.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    contactGithubLabel: "GitHub",
    footerText: "Engineering systems portfolio.",
    footerAction: "Back to top",
    focusItems: [
      "Reduce ambiguity by turning system behavior into explicit flows.",
      "Design interfaces that allow software and physical logic to be tested earlier.",
      "Use architecture as a problem-solving tool, not as documentation after the fact.",
      "Build technical representations that help teams reason, debug, and align."
    ],
    projectLabels: {
      pitch: "One-line pitch",
      problem: "Problem",
      solution: "Solution",
      highlights: "Technical Highlights",
      result: "Result",
      systemView: "System View",
      tech: "Tech",
      expand: "Open",
      collapse: "Close"
    },
    projects: [
      {
        title: "Digital Twin Review Environment",
        pitch: "Turn machine logic into a shared visual model before hardware is available.",
        summary:
          "A project for making simulated equipment behavior understandable to controls, software, and non-specialist stakeholders in the same review loop.",
        problem:
          "Teams were discussing sequences and states in different abstractions: PLC logic, spreadsheet tags, and informal descriptions. That made design reviews slow and error-prone.",
        solution:
          "I structured the system so simulated signals could drive a real-time visualization layer. The goal was not just display, but shared understanding of machine behavior before physical commissioning.",
        highlights: [
          "Mapped control-state tags to visual objects and operating modes.",
          "Separated simulation data, translation logic, and front-end rendering responsibilities.",
          "Used the visualization layer as a validation surface for sequence and alarm logic."
        ],
        result:
          "The project reduced review ambiguity and made it easier to identify mismatches between expected behavior and implemented logic earlier in the lifecycle.",
        diagram: [
          "PLC Simulation",
          "     |",
          "     v",
          "Tag / State Mapping",
          "     |",
          "     v",
          "Visualization Logic",
          "     |",
          "     v",
          "Shared Design Review"
        ].join("\n"),
        technologies: ["Simulation", "Unity", "C#", "OPC UA", "State Mapping"]
      },
      {
        title: "Fault Injection Test System",
        pitch: "Create repeatable failure conditions so recovery logic can be validated with intent.",
        summary:
          "A structured testing setup for reproducing alarm, interlock, and abnormal-state scenarios without waiting for unpredictable field conditions.",
        problem:
          "Error handling logic often looked correct in nominal flows but failed under edge conditions because faults were hard to recreate consistently during commissioning.",
        solution:
          "I built a testable fault-injection path that could trigger known abnormal states through simulation, exposing diagnostic behavior to software and operator-facing views.",
        highlights: [
          "Defined reusable fault scenarios instead of one-off manual tests.",
          "Separated normal process behavior from injected abnormal-state behavior.",
          "Used exposed diagnostics to validate alarm timing, interlock response, and reset handling."
        ],
        result:
          "Testing shifted from reactive troubleshooting to deliberate validation, improving confidence in exception handling before site startup.",
        diagram: [
          "Fault Scenario Library",
          "        |",
          "        v",
          "Simulation Runtime",
          "        |",
          "        v",
          "Diagnostics / Alarm Checks",
          "        |",
          "        v",
          "Recovery Validation"
        ].join("\n"),
        technologies: ["PLC", "Diagnostics", "Test Design", "OPC UA", "Validation Logic"]
      },
      {
        title: "Engineering Training Platform",
        pitch: "Package complex control behavior into a compact system people can learn from directly.",
        summary:
          "A modular training and demonstration setup designed to explain system behavior, signal relationships, and troubleshooting patterns through a smaller but representative platform.",
        problem:
          "New team members could read documentation, but they still lacked a concrete model for how software, signals, and control responses connected in practice.",
        solution:
          "I designed a compact system that preserved the logic relationships of a larger environment while making the signal flow and behavior visible enough for guided learning and troubleshooting.",
        highlights: [
          "Abstracted a larger engineering workflow into a teachable subset.",
          "Made state transitions and operator feedback observable at each step.",
          "Used the platform as both a training tool and a demonstration of system structure."
        ],
        result:
          "The platform reduced onboarding time and improved the quality of technical conversations by giving people a shared operating model instead of isolated diagrams.",
        diagram: [
          "Training Inputs",
          "      |",
          "      v",
          "Control Logic Core",
          "      |",
          "      v",
          "Indicators / HMI",
          "      |",
          "      v",
          "Guided Troubleshooting"
        ].join("\n"),
        technologies: ["Control Logic", "HMI", "Training Design", "Signal Modeling", "Systems Integration"]
      }
    ],
    domains: [
      {
        mark: "ST",
        title: "System Thinking",
        description:
          "Breaking large technical problems into components, interfaces, and flows that teams can reason about and verify."
      },
      {
        mark: "SI",
        title: "Simulation & Validation",
        description:
          "Using simulated behavior as a way to test assumptions early instead of waiting for late-stage commissioning feedback."
      },
      {
        mark: "DI",
        title: "Data & Integration",
        description:
          "Designing clear communication paths between control systems, software services, and visualization layers."
      },
      {
        mark: "UX",
        title: "Technical Communication",
        description:
          "Building representations that make complex systems easier to review, explain, and align around."
      }
    ]
  },
  zh: {
    pageTitle: "系统工程作品集",
    skipLink: "跳转到正文",
    brandSubtitle: "通过工程系统解决复杂问题",
    navHome: "首页",
    navProjects: "项目",
    navDomains: "能力方向",
    navAbout: "关于",
    navContact: "联系",
    heroEyebrow: "工程系统作品集",
    heroTitle: "面向工业软件、仿真与数字化交付的系统思维",
    heroDescription:
      "我关注的是控制逻辑、仿真、工业数据交换与软件表达之间的技术问题。核心工作不是堆叠工具，而是把复杂系统整理成可以验证、可以解释、可以交付的清晰结构。",
    heroPrimaryAction: "查看项目",
    heroSecondaryAction: "阅读简介",
    panelBadge: "方法",
    projectsEyebrow: "代表项目",
    projectsTitle: "项目案例",
    projectsIntro:
      "每个项目都围绕问题、系统性应对方式以及关键技术决策展开，而不是简单罗列职责。",
    domainsEyebrow: "能力范围",
    domainsTitle: "能力方向",
    domainsIntro:
      "这些方向体现的是我如何把模糊需求转化为可验证、可协作、可交付的系统结构。",
    aboutEyebrow: "简介",
    aboutTitle: "关于我",
    aboutLead: "我更关注技术问题的解决方式，而不是被单一岗位名称定义。",
    aboutParagraphOne:
      "我尤其感兴趣的是那些需要把物理系统、软件抽象和工程约束放进同一运行模型中的项目。这通常意味着把模糊的交互关系整理成明确的流程、接口和验证路径。",
    aboutParagraphTwo:
      "无论是在仿真、系统集成还是数字化工具场景中，我的核心目标都是降低不确定性：更早看见系统行为，更清楚地划分责任边界，并让团队能够真正推理和讨论系统本身。",
    contactEyebrow: "联系",
    contactTitle: "联系方式",
    contactIntro:
      "正式发布前，请将下面的占位信息替换为你真实可公开的联系方式。",
    contactEmailLabel: "邮箱",
    contactLinkedinLabel: "领英",
    contactGithubLabel: "GitHub",
    footerText: "系统工程作品集。",
    footerAction: "返回顶部",
    focusItems: [
      "通过明确系统流向来降低沟通与实现中的歧义。",
      "设计能够提前验证的软件与物理逻辑接口。",
      "把架构当作解决问题的工具，而不是事后补写的文档。",
      "构建有助于团队理解、调试和对齐的技术表达方式。"
    ],
    projectLabels: {
      pitch: "一句话概述",
      problem: "问题",
      solution: "方案",
      highlights: "技术亮点",
      result: "结果",
      systemView: "系统结构",
      tech: "技术",
      expand: "展开",
      collapse: "收起"
    },
    projects: [
      {
        title: "数字孪生评审环境",
        pitch: "在实物设备到位前，把控制逻辑转化为团队可共同理解的可视化系统。",
        summary:
          "该项目的重点不是单纯做展示，而是让控制、软件与非专业相关方能够在同一个评审场景里讨论设备行为。",
        problem:
          "团队对同一套系统使用了不同抽象层表达：PLC 逻辑、标签表、口头描述彼此割裂，导致方案评审缓慢且容易出现理解偏差。",
        solution:
          "我把仿真信号、状态映射和可视化层组织成清晰的数据流，让设备行为能够被实时表达出来，从而在正式调试前就形成共同认知。",
        highlights: [
          "将控制状态标签映射到可视对象和运行模式。",
          "把仿真数据、转换逻辑与前端呈现职责拆开。",
          "把可视化界面作为顺序逻辑与报警逻辑的验证界面来使用。"
        ],
        result:
          "项目显著减少了评审阶段的歧义，也更容易在早期发现预期行为与实际实现之间的不一致。",
        diagram: [
          "PLC 仿真",
          "   |",
          "   v",
          "状态 / 标签映射",
          "   |",
          "   v",
          "可视化逻辑层",
          "   |",
          "   v",
          "共享设计评审"
        ].join("\n"),
        technologies: ["Simulation", "Unity", "C#", "OPC UA", "State Mapping"]
      },
      {
        title: "故障注入测试系统",
        pitch: "用可重复的异常场景验证恢复逻辑，而不是等待现场偶发问题。",
        summary:
          "这是一个面向报警、联锁与异常流程验证的测试系统，目标是在现场前就具备系统化的异常测试能力。",
        problem:
          "很多异常处理逻辑在正常流程下看起来没有问题，但一旦进入边界场景，由于现场难以稳定复现故障，问题往往只能被动暴露。",
        solution:
          "我建立了可控的故障注入路径，通过仿真主动触发异常状态，并将诊断信息暴露给软件界面与测试逻辑进行验证。",
        highlights: [
          "把故障测试设计成可复用场景，而不是一次性的人工操作。",
          "将正常行为与异常注入行为分离，保证测试意图清晰。",
          "利用诊断输出核对报警时序、联锁响应与复位逻辑。"
        ],
        result:
          "测试方式从被动排错转变为主动验证，使异常处理逻辑在现场启动前就具备更高可信度。",
        diagram: [
          "故障场景库",
          "    |",
          "    v",
          "仿真运行层",
          "    |",
          "    v",
          "诊断 / 报警校验",
          "    |",
          "    v",
          "恢复路径验证"
        ].join("\n"),
        technologies: ["PLC", "Diagnostics", "Test Design", "OPC UA", "Validation Logic"]
      },
      {
        title: "工程培训平台",
        pitch: "把复杂控制行为压缩成一个可直接学习和讨论的小型系统。",
        summary:
          "这是一个模块化培训与演示平台，目标是让系统逻辑、信号关系和排障思路能够在更紧凑的环境中被直接理解。",
        problem:
          "新成员即使阅读了文档，也很难建立起软件行为、信号流向和控制响应之间的整体模型，导致学习成本高、沟通效率低。",
        solution:
          "我设计了一套保留关键逻辑关系的小型平台，让更大的工程系统可以通过更易理解的形式被讲解、演示与练习。",
        highlights: [
          "将大系统抽象成便于教学的代表性子集。",
          "让状态切换与操作反馈在每一步都可观察。",
          "同时将平台作为培训工具和系统结构展示工具使用。"
        ],
        result:
          "该平台缩短了新成员的上手时间，也让技术讨论从零散概念转向围绕系统模型本身展开。",
        diagram: [
          "培训输入",
          "   |",
          "   v",
          "控制逻辑核心",
          "   |",
          "   v",
          "指示 / HMI",
          "   |",
          "   v",
          "引导式排障"
        ].join("\n"),
        technologies: ["Control Logic", "HMI", "Training Design", "Signal Modeling", "Systems Integration"]
      }
    ],
    domains: [
      {
        mark: "ST",
        title: "系统思维",
        description:
          "把大型技术问题拆解为组件、接口和流向，使团队能够围绕系统本身进行推理与验证。"
      },
      {
        mark: "SI",
        title: "仿真与验证",
        description:
          "把仿真作为前置验证手段，而不是等到后期调试时再被动发现问题。"
      },
      {
        mark: "DI",
        title: "数据与集成",
        description:
          "为控制系统、软件服务和可视化层之间设计清晰的数据交换路径。"
      },
      {
        mark: "UX",
        title: "技术表达",
        description:
          "构建让复杂系统更容易被审阅、解释和对齐的技术表达方式。"
      }
    ]
  }
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const languageToggle = document.querySelector(".language-toggle");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const focusList = document.getElementById("focus-list");
const projectsList = document.getElementById("projects-list");
const domainsGrid = document.getElementById("domains-grid");
const yearElement = document.getElementById("year");
const revealItems = document.querySelectorAll(".reveal");

let currentLanguage = "en";

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function renderFocusItems(items) {
  focusList.innerHTML = "";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    focusList.appendChild(listItem);
  });
}

function createProjectItem(project, labels, index) {
  const article = document.createElement("article");
  const panelId = `project-panel-${index}`;
  article.className = "project-item";
  article.innerHTML = `
    <button class="project-summary-bar" type="button" aria-expanded="false" aria-controls="${panelId}">
      <div class="project-header-block">
        <div class="project-title-row">
          <h3>${project.title}</h3>
          <span class="project-pitch">${project.pitch}</span>
        </div>
        <p class="project-summary">${project.summary}</p>
      </div>
      <span class="toggle-indicator">+</span>
    </button>

    <div class="project-body" id="${panelId}">
      <div class="project-body-inner">
        <div class="project-columns">
          <section class="project-block problem">
            <h4>${labels.problem}</h4>
            <p>${project.problem}</p>
          </section>

          <section class="project-block solution">
            <h4>${labels.solution}</h4>
            <p>${project.solution}</p>
          </section>

          <section class="project-block">
            <h4>${labels.highlights}</h4>
            <ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>

          <section class="project-block">
            <h4>${labels.result}</h4>
            <p>${project.result}</p>
          </section>
        </div>

        <aside class="diagram-panel">
          <section class="project-block">
            <h4>${labels.pitch}</h4>
            <p>${project.pitch}</p>
          </section>

          <section class="project-block">
            <h4>${labels.systemView}</h4>
            <pre class="diagram-box">${project.diagram}</pre>
          </section>

          <section class="project-block">
            <h4>${labels.tech}</h4>
            <ul class="tag-list">${project.technologies.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>
        </aside>
      </div>
    </div>
  `;

  const button = article.querySelector(".project-summary-bar");
  const body = article.querySelector(".project-body");

  button.addEventListener("click", () => {
    const isExpanded = article.classList.toggle("expanded");
    button.setAttribute("aria-expanded", String(isExpanded));
    body.style.maxHeight = isExpanded ? `${body.scrollHeight}px` : "0px";
  });

  return article;
}

function renderProjects(language) {
  const { projects, projectLabels } = translations[language];
  projectsList.innerHTML = "";

  projects.forEach((project, index) => {
    projectsList.appendChild(createProjectItem(project, projectLabels, index));
  });
}

function renderDomains(language) {
  const { domains } = translations[language];
  domainsGrid.innerHTML = "";

  domains.forEach((domain) => {
    const article = document.createElement("article");
    article.className = "domain-card";
    article.innerHTML = `
      <span class="domain-mark">${domain.mark}</span>
      <h3>${domain.title}</h3>
      <p>${domain.description}</p>
    `;
    domainsGrid.appendChild(article);
  });
}

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
