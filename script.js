// Bilingual content model for static UI copy and domain data.
const translations = {
  en: {
    pageTitle: "This is Shengxiang Hu",
    skipLink: "Skip to content",
    brandSubtitle: "Problem Solving Through Systems Thinking",
    navHome: "Home",
    navDomains: "Capabilities",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "Personal Portfolio",
    heroTitle: "Systems Thinking for Simulation, Software, Digitalization and AI-driven Systems",
    heroDescription:
      "I work on technical problems across control logic, simulation, data exchange, and AI- driven systems.My focus is turning complex engineering and reasoning systems into structured, testable, and explainable workflows that can be reliably delivered and evolved.",
    heroPrimaryAction: "Explore Projects",
    heroSecondaryAction: "Read Profile",
    panelBadge: "Method",
    projectsEyebrow: "Selected Projects",
    projectsTitle: "Project Case Studies",
    projectsIntro:
      "Each project is framed around the problem, the system response, and the technical decisions that made the solution work.",
    domainsEyebrow: "Capability Areas",
    domainsTitle: "Capability Areas",
    domainsIntro:
      "These are the technical lenses I use to frame engineering work, structure delivery, and evaluate system behavior before it becomes expensive to change.",
    aboutEyebrow: "Profile",
    aboutTitle: "About",
    aboutLead: "My work focuses on structuring complex technical problems across engineering systems and AI applications.",
    aboutParagraphOne:
      "I am particularly interested in systems where physical processes, software abstractions, and AI reasoning need to be integrated into one coherent operating model.This includes designing explicit workflows, interfaces, and reasoning paths that allow both machines and humans to understand system behavior.",
    aboutParagraphTwo:
      "Across simulation, system integration, and AI-driven applications, I focus on reducing uncertainty: making system behavior visible earlier, structuring decision processes, and enabling explainable and iterative reasoning in both engineering and intelligent systems.",
    contactEyebrow: "Contact",
    contactTitle: "Get In Touch",
    contactIntro:
      "You can find me here.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    contactGithubLabel: "GitHub",
    footerText: "Personal portfolio.",
    footerAction: "Back to top",
    focusItems: [
      "Reduce ambiguity by turning system behavior and reasoning into explicit workflows.",
      "Design interfaces that allow both physical systems and AI agents to be tested earlier.",
      "Use architecture and workflow design as tools for problem solving, not just documentation.",
      "Build systems that support explainability, iteration, and structured decision-making."
    ],
    projectLabels: {
      collectionTag: "Collection",
      demoTag: "Demo",
      media: "Media",
      images: "Images",
      demoVideo: "Demo Video",
      pitch: "One-line pitch",
      problem: "Problem",
      solution: "Solution",
      highlights: "Technical Highlights",
      result: "Result",
      systemView: "System View",
      tech: "Tech",
      overview: "Overview",
      keyFeatures: "Key Features",
      interaction: "Interaction",
      systemIdea: "System Idea",
      note: "Note",
      expand: "Open",
      collapse: "Close"
    },
    domains: [
      {
        mark: "ST",
        title: "System Architecture & Problem Structuring",
        summary: "Turn ambiguous requirements into structured systems and explicit validation paths.",
        description:
          "Framing ambiguous engineering work as connected systems with explicit boundaries, interfaces, and validation paths.",
        topics: ["System Thinking", "Interface Design", "Fault Modeling", "Workflow Structuring", "Validation Path Design"],
        value: "Helps teams reason about boundaries, reduce implementation ambiguity, and align on what must be tested."
      },
      {
        mark: "SI",
        title: "Simulation & Digital Twin",
        summary: "Use mirrored software environments to validate system behavior before physical deployment.",
        description:
          "Using simulation environments and mirrored software views to validate machine behavior before physical systems are available.",
        topics: ["Simulation", "Digital Twin", "Unity", "PLCSim", "3D Visualization", "Scenario-based Validation"],
        value: "Makes sequences, states, and abnormal scenarios visible early enough to change them cheaply."
      },
      {
        mark: "AI",
        title: "AI Systems & Agent Engineering",
        summary: "Design workflow-based AI systems that integrate reasoning, tools, and structured context.",
        description:
          "Designing AI-driven systems that go beyond single LLM calls, focusing on structured reasoning workflows, tool orchestration, and context-aware decision processes. This includes building agent architectures, memory systems, and explainable execution pipelines.",
        topics: [
          "LLM Application",
          "Agent Architecture",
          "Plan–Execute–Review",
          "Tool Calling",
          "Context Engineering",
          "Memory Systems",
          "Execution Trace",
          "Explainable AI"
        ],
        value:
          "Enables AI systems to operate as structured, explainable, and iterative decision systems rather than black-box responses."
      },
      {
        mark: "DI",
        title: "Industrial Communication & Integration",
        summary: "Connect controllers, services, and applications through stable data exchange layers.",
        description:
          "Designing robust data exchange paths between controllers, middleware, APIs, and application-facing services.",
        topics: ["OPC UA", "REST API", "State Synchronization", "Integration Logic", "Backend Bridge Layer"],
        value: "Creates interpretable integration paths so data flow remains testable, maintainable, and scalable."
      },
      {
        mark: "SW",
        title: "Software & Tooling",
        summary: "Build modular tools that support engineering delivery rather than adding more process overhead.",
        description:
          "Building modular tools and software components that make engineering workflows easier to maintain, extend, and reuse.",
        topics: ["C#", ".NET", "Plugin Architecture", "Modular Design", "Engineering Tool Development"],
        value: "Improves reuse and maintainability while keeping technical workflows closer to the engineers who use them."
      },
      {
        mark: "DA",
        title: "Data, Analysis & Computation",
        summary: "Use models, metrics, and analysis pipelines to turn system behavior into measurable signals.",
        description:
          "Applying structured models, feature extraction, and computational methods to evaluate behavior and support technical decisions.",
        topics: ["MATLAB", "Matrix Modeling", "Feature Engineering", "Motion Analysis", "Scoring Model", "Process Analysis"],
        value: "Supports decisions with computable structures instead of relying only on intuition or manual interpretation."
      },
      {
        mark: "UX",
        title: "User-centered Technical Design",
        summary: "Translate complex systems into interfaces, guidance, and feedback that users can act on.",
        description:
          "Turning technical systems into interfaces, evaluations, and guidance structures that users can understand and act on.",
        topics: ["UX Evaluation", "NASA-TLX", "Technical Communication", "Feedback Design", "Interactive Guidance"],
        value: "Improves adoption and decision quality by making system behavior legible to the people operating around it."
      }
    ]
  },
  zh: {
    pageTitle: "这里是胡生翔",
    skipLink: "跳转到正文",
    brandSubtitle: "通过系统思维解决复杂问题",
    navHome: "首页",
    navDomains: "能力方向",
    navProjects: "项目",
    navAbout: "关于",
    navContact: "联系",
    heroEyebrow: "工程系统作品集",
    heroTitle: "面向仿真、软件、数字化与AI驱动的系统思维",
    heroDescription:
      "我关注控制逻辑、仿真、数据交换以及AI驱动系统之间的技术问题。核心工作不是堆叠工具，而是把复杂的工程系统与推理系统整理成可验证、可解释、可演化的结构化流程。",
    heroPrimaryAction: "查看项目",
    heroSecondaryAction: "阅读简介",
    panelBadge: "方法",
    projectsEyebrow: "代表项目",
    projectsTitle: "项目案例",
    projectsIntro:
      "每个项目都围绕问题、系统性应对方式以及关键技术决策展开，而不是简单罗列职责。",
    domainsEyebrow: "能力范围",
    domainsTitle: "能力领域",
    domainsIntro:
      "这是我理解工程问题、组织系统结构以及在交付前验证复杂行为的主要技术视角。",
    aboutEyebrow: "简介",
    aboutTitle: "关于我",
    aboutLead: "我专注于工程系统与AI应用中的复杂问题结构化，而不仅仅是某一具体岗位能力。",
    aboutParagraphOne:
      "我尤其关注那些需要将物理过程、软件抽象以及AI推理能力整合到同一系统中的问题。这通常意味着构建清晰的工作流、接口以及推理路径，使系统行为对人和机器都可理解。",
    aboutParagraphTwo:
      "无论是在仿真、系统集成还是AI驱动应用中，我的核心目标都是降低不确定性：更早暴露系统行为，结构化决策过程，并让工程系统与智能系统都具备可解释与可迭代的能力。",
    contactEyebrow: "联系",
    contactTitle: "联系方式",
    contactIntro:
      "您可以通过以下方式与我联系。",
    contactEmailLabel: "邮箱",
    contactLinkedinLabel: "领英",
    contactGithubLabel: "GitHub",
    footerText: "个人作品集。",
    footerAction: "返回顶部",
    focusItems: [
      "通过结构化系统行为与推理流程，降低沟通与实现中的歧义。",
      "设计可同时支持物理系统与AI Agent验证的接口与流程。",
      "把架构与工作流设计作为解决问题的核心工具，而非事后文档。",
      "构建支持可解释性、迭代优化与结构化决策的系统。"
    ],
    projectLabels: {
      collectionTag: "集合",
      demoTag: "Demo",
      media: "媒体",
      images: "图片",
      demoVideo: "演示视频",
      pitch: "一句话概述",
      problem: "问题",
      solution: "方案",
      highlights: "技术亮点",
      result: "结果",
      systemView: "系统结构",
      tech: "技术",
      overview: "概览",
      keyFeatures: "主要特性",
      interaction: "交互方式",
      systemIdea: "系统思路",
      note: "说明",
      expand: "展开",
      collapse: "收起"
    },
    domains: [
      {
        mark: "ST",
        title: "系统架构与问题结构化",
        summary: "把模糊需求整理成清晰的系统边界、接口关系和验证路径。",
        description:
          "将模糊的工程问题组织为清晰的系统边界、接口关系和验证路径，使团队能够围绕结构本身协同推进。",
        topics: ["系统思维", "接口设计", "故障建模", "流程结构化", "验证路径设计"],
        value: "帮助团队围绕系统边界进行推理，降低实现歧义，并更明确地组织验证工作。"
      },
      {
        mark: "SI",
        title: "仿真与数字孪生",
        summary: "在物理系统到位之前，用镜像化的软件环境提前验证系统行为。",
        description:
          "通过仿真环境与数字孪生表达，在实机到位前验证控制逻辑、状态变化与场景行为。",
        topics: ["Simulation", "Digital Twin", "Unity", "PLCSim", "3D Visualization", "Scenario-based Validation"],
        value: "让顺序逻辑、状态变化和异常场景更早可见，也让修改成本更低。"
      },
      {
        mark: "AI",
        title: "AI系统与Agent工程",
        summary: "构建基于工作流的AI系统，将推理、工具调用与上下文整合为可控结构。",
        description:
          "设计超越单次大模型调用的AI系统，重点在于结构化推理流程、工具编排与上下文驱动的决策机制，包括Agent架构、记忆系统以及可解释执行流程的构建。",
        topics: [
          "LLM应用",
          "Agent架构",
          "Plan–Execute–Review",
          "工具调用",
          "上下文工程",
          "记忆系统",
          "执行路径",
          "可解释AI"
        ],
        value:
          "使AI系统从黑盒响应转变为可解释、可迭代、可结构化的决策系统。"
      },
      {
        mark: "DI",
        title: "工业通信与系统集成",
        summary: "在控制器、服务层和应用层之间建立稳定、可解释的数据交换机制。",
        description:
          "为控制系统、中间服务、API 与应用层之间建立稳定、可解释的数据流与同步机制。",
        topics: ["OPC UA", "REST API", "状态同步", "集成逻辑", "后端桥接层"],
        value: "让数据路径更清晰、可测试、可维护，也更适合后续扩展。"
      },
      {
        mark: "SW",
        title: "软件与工程工具",
        summary: "用模块化的软件工具支持工程交付，而不是增加额外流程负担。",
        description:
          "构建模块化的软件工具和工程能力组件，让系统更易于维护、扩展与复用。",
        topics: ["C#", ".NET", "Plugin Architecture", "模块化设计", "工程工具开发"],
        value: "提升复用性和可维护性，同时让技术流程更贴近工程团队的实际使用方式。"
      },
      {
        mark: "DA",
        title: "数据分析与计算建模",
        summary: "通过模型、指标与分析流程，把系统行为转化为可衡量的技术信号。",
        description:
          "利用结构化模型、特征提取与计算方法分析系统行为，并支撑更可计算的技术决策。",
        topics: ["MATLAB", "矩阵建模", "特征工程", "动作分析", "评分模型", "流程分析"],
        value: "使决策更依赖可计算结构，而不是仅凭经验判断或手工解释。"
      },
      {
        mark: "UX",
        title: "面向用户的技术设计",
        summary: "把复杂系统转换为用户能理解、评估并采取行动的交互与反馈结构。",
        description:
          "把复杂技术系统转化为用户可理解、可评估、可操作的交互与反馈结构。",
        topics: ["UX Evaluation", "NASA-TLX", "技术表达", "反馈设计", "交互式引导"],
        value: "提升系统可用性和沟通质量，让技术行为真正能够被使用者理解和执行。"
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
  const language = currentLanguage;
  const classificationTags = [
    project.projectType?.[language],
    project.technicalType?.[language]
  ]
    .filter(Boolean)
    .map((tag) => `<span class="project-class-tag">${tag}</span>`)
    .join("");
  const videoSection = createProjectVideoSection(project, language);
  const resultSection = `
    <section class="project-block">
      <h4>${labels.result}</h4>
      <p>${project.result[language]}</p>
    </section>
  `;

  article.className = "project-item";
  article.innerHTML = `
    <button class="project-summary-bar" type="button" aria-expanded="false" aria-controls="${panelId}">
      <div class="project-header-block">
        <div class="project-title-row">
          <h3>${project.title[language]}</h3>
        </div>
        <div class="project-meta-row">
          <div class="project-tag-group">${classificationTags}</div>
          <span class="project-pitch">${project.pitch[language]}</span>
        </div>
        <p class="project-summary">${project.summary[language]}</p>
      </div>
      <span class="toggle-indicator">+</span>
    </button>

    <div class="project-body" id="${panelId}">
      <div class="project-body-inner">
        <div class="project-columns">
          <section class="project-block pitch-block">
            <h4>${labels.pitch}</h4>
            <p>${project.pitch[language]}</p>
          </section>

          <section class="project-block problem">
            <h4>${labels.problem}</h4>
            <p>${project.problem[language]}</p>
          </section>

          <section class="project-block solution">
            <h4>${labels.solution}</h4>
            <p>${project.solution[language]}</p>
          </section>

          <section class="project-block">
            <h4>${labels.highlights}</h4>
            <ul>${project.highlights[language].map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>
        </div>

        <aside class="diagram-panel">
          <section class="project-block">
            <h4>${labels.systemView}</h4>
            <pre class="diagram-box">${project.structure[language]}</pre>
          </section>

          ${videoSection}

          <section class="project-block">
            <h4>${labels.tech}</h4>
            <ul class="tag-list">${project.technologies.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>

          ${resultSection}
        </aside>
      </div>
    </div>
  `;

  const button = article.querySelector(".project-summary-bar");
  const body = article.querySelector(".project-body");
  const bodyInner = article.querySelector(".project-body-inner");

  button.addEventListener("click", () => {
    const isExpanded = article.classList.toggle("expanded");
    button.setAttribute("aria-expanded", String(isExpanded));
    setProjectBodyHeight(body, isExpanded);
  });

  observeExpandableContent(bodyInner);

  return article;
}

function createCollectionItem(project, labels, index) {
  const article = document.createElement("article");
  const panelId = `collection-panel-${index}`;
  const language = currentLanguage;

  article.className = "project-item collection-card";
  article.innerHTML = `
    <button class="project-summary-bar collection-summary-bar" type="button" aria-expanded="false" aria-controls="${panelId}">
      <div class="project-header-block">
        <div class="project-title-row">
          <h3>${project.title[language]}</h3>
        </div>
        <div class="project-meta-row">
          <div class="project-tag-group">
            <span class="project-class-tag collection-header-tag">${labels.collectionTag}</span>
          </div>
        </div>
        <p class="project-summary">${project.summary[language]}</p>
      </div>
      <span class="toggle-indicator">+</span>
    </button>

    <div class="project-body" id="${panelId}">
      <div class="collection-body-inner">
        <div class="collection-list">
          ${project.items.map((item, itemIndex) => createCollectionDemoMarkup(item, labels, language, index, itemIndex)).join("")}
        </div>
      </div>
    </div>
  `;

  const button = article.querySelector(".collection-summary-bar");
  const body = article.querySelector(".project-body");
  const bodyInner = article.querySelector(".collection-body-inner");

  button.addEventListener("click", () => {
    const isExpanded = article.classList.toggle("expanded");
    button.setAttribute("aria-expanded", String(isExpanded));
    setProjectBodyHeight(body, isExpanded);
  });

  observeExpandableContent(bodyInner);

  article.querySelectorAll(".collection-item").forEach((collectionItem) => {
    const itemButton = collectionItem.querySelector(".collection-item-summary");
    const itemBody = collectionItem.querySelector(".collection-item-body");
    const itemBodyInner = collectionItem.querySelector(".collection-item-body-inner");

    itemButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const isExpanded = collectionItem.classList.toggle("expanded");
      itemButton.setAttribute("aria-expanded", String(isExpanded));
      setCollectionItemBodyHeight(itemBody, isExpanded);
    });

    observeExpandableContent(itemBodyInner, () => {
      if (collectionItem.classList.contains("expanded")) {
        itemBody.style.maxHeight = `${itemBody.scrollHeight}px`;
        refreshExpandableHeights(collectionItem);
      }
    });
  });

  return article;
}

function createCollectionDemoMarkup(item, labels, language, projectIndex, itemIndex) {
  const panelId = `collection-item-panel-${projectIndex}-${itemIndex}`;
  const mediaSection = createCollectionVideoMarkup(item, labels, language);

  return `
    <article class="collection-item">
      <button class="collection-item-summary" type="button" aria-expanded="false" aria-controls="${panelId}">
        <div class="collection-item-heading">
          <div class="collection-item-topline">
            <span class="collection-item-tag">${labels.demoTag}</span>
            <h4>${item.title[language]}</h4>
          </div>
          <p>${item.description[language]}</p>
        </div>
        <span class="collection-item-toggle">+</span>
      </button>

      <div class="collection-item-body" id="${panelId}">
        <div class="collection-item-body-inner">
          <section class="project-block collection-demo-block">
            <h4>${labels.overview}</h4>
            <p>${item.overview[language]}</p>
          </section>

          <section class="project-block collection-demo-block">
            <h4>${labels.keyFeatures}</h4>
            <ul>${item.keyFeatures[language].map((feature) => `<li>${feature}</li>`).join("")}</ul>
          </section>

          ${mediaSection}
        </div>
      </div>
    </article>
  `;
}

function createCollectionMediaMarkup(item, labels, language) {
  const hasVideo = Boolean(item.video?.url);
  const hasImages = Array.isArray(item.images) && item.images.length > 0;

  if (!hasVideo && !hasImages) {
    return "";
  }

  const modules = [];

  if (hasVideo) {
    const videoUrl = item.video.url;
    const isEmbed = item.video.type === "embed";
    const isMp4 = /\.mp4($|\?)/i.test(videoUrl);
    const title = labels.demoVideo;
    let mediaMarkup = `
      <div class="project-video-placeholder">
        <span class="project-video-placeholder-title">${title}</span>
        <span>${language === "zh" ? "替换为可用的视频链接后即可显示演示。" : "Replace with a valid video URL to display the demo."}</span>
      </div>
    `;

    if (isMp4) {
      mediaMarkup = `
        <video class="project-video-frame" controls preload="metadata">
          <source src="${videoUrl}" type="video/mp4">
        </video>
      `;
    } else if (isEmbed) {
      mediaMarkup = `
        <iframe
          class="project-video-frame"
          src="${videoUrl}"
          title="${title}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      `;
    }

    modules.push(`
      <section class="project-block media-block">
        <h4>${title}</h4>
        <div class="project-video-shell">
          ${mediaMarkup}
        </div>
      </section>
    `);
  }

  if (hasImages) {
    modules.push(`
      <section class="project-block">
        <h4>${labels.images}</h4>
        <div class="collection-image-grid">
          ${item.images
            .map(
              (image) => `
                <figure class="collection-image-card">
                  <img src="${image.src}" alt="${image.alt?.[language] || item.title[language]}">
                  ${image.caption ? `<figcaption>${image.caption[language]}</figcaption>` : ""}
                </figure>
              `
            )
            .join("")}
        </div>
      </section>
    `);
  }

  return modules.join("");
}

function createCollectionVideoMarkup(item, labels, language) {
  if (!item.video?.url) {
    return "";
  }

  const videoUrl = item.video.url;
  const isEmbed = item.video.type === "embed";
  const isMp4 = /\.mp4($|\?)/i.test(videoUrl);
  const title = labels.demoVideo;
  let mediaMarkup = `
    <div class="project-video-placeholder">
      <span class="project-video-placeholder-title">${title}</span>
      <span>${language === "zh" ? "替换为可用的视频链接后即可显示演示。" : "Replace with a valid video URL to display the demo."}</span>
    </div>
  `;

  if (isMp4) {
    mediaMarkup = `
      <video class="project-video-frame" controls preload="metadata">
        <source src="${videoUrl}" type="video/mp4">
      </video>
    `;
  } else if (isEmbed) {
    mediaMarkup = `
      <iframe
        class="project-video-frame"
        src="${videoUrl}"
        title="${title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    `;
  }

  return `
    <section class="project-block media-block collection-demo-block">
      <h4>${title}</h4>
      <div class="project-video-shell">
        ${mediaMarkup}
      </div>
    </section>
  `;
}

function createProjectVideoSection(project, language) {
  if (!project.video || !project.video.url) {
    return "";
  }

  const videoTitle = language === "zh" ? "演示视频" : "Demo Video";
  const demoTitle = language === "zh" ? "交互演示" : "Interactive Demo";
  const demoComingSoon = language === "zh" ? "交互演示（即将支持）" : "Interactive Demo (Coming Soon)";
  const videoUrl = project.video.url;
  const isEmbed = project.video.type === "embed";
  const isMp4 = /\.mp4($|\?)/i.test(videoUrl);
  const isHttpsMedia = /^https:\/\//i.test(videoUrl);
  const isPlaceholder = /PLACEHOLDER/i.test(videoUrl);

  let mediaMarkup = "";

  if (isPlaceholder || (!isMp4 && !isEmbed) || (!isMp4 && !isHttpsMedia)) {
    mediaMarkup = `
      <div class="project-video-placeholder">
        <span class="project-video-placeholder-title">${videoTitle}</span>
        <span>${language === "zh" ? "替换为 HTTPS 视频链接后即可显示嵌入演示。" : "Replace with an HTTPS video URL to display the embedded demo."}</span>
      </div>
    `;
  } else if (isMp4) {
    mediaMarkup = `
      <video class="project-video-frame" controls preload="metadata">
        <source src="${videoUrl}" type="video/mp4">
      </video>
    `;
  } else if (isEmbed) {
    mediaMarkup = `
      <iframe
        class="project-video-frame"
        src="${videoUrl}"
        title="${videoTitle}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    `;
  }

  const demoMarkup = project.demo
    ? `
      <div class="project-demo-note">
        <span class="project-demo-label">${demoTitle}</span>
        <span>${language === "zh" ? "交互演示（即将支持）" : project.demo.note || demoComingSoon}</span>
      </div>
    `
    : "";

  return `
    <section class="project-block media-block">
      <h4>${videoTitle}</h4>
      <div class="project-video-shell">
        ${mediaMarkup}
      </div>
      ${demoMarkup}
    </section>
  `;
}

function renderProjects(language) {
  const { projectLabels } = translations[language];
  projectsList.innerHTML = "";

  projectsData.forEach((project, index) => {
    if (project.type === "collection") {
      projectsList.appendChild(createCollectionItem(project, projectLabels, index));
      return;
    }

    projectsList.appendChild(createProjectItem(project, projectLabels, index));
  });
}

function refreshExpandableHeights(node) {
  let current = node.parentElement;

  while (current) {
    if (current.classList?.contains("project-body")) {
      const owner = current.parentElement;

      if (owner?.classList.contains("expanded")) {
        current.style.maxHeight = `${current.scrollHeight}px`;
      }
    }

    current = current.parentElement;
  }
}

function setProjectBodyHeight(body, isExpanded) {
  if (!isExpanded) {
    body.style.maxHeight = "0px";
    return;
  }

  requestAnimationFrame(() => {
    body.style.maxHeight = `${body.scrollHeight}px`;
  });
}

function setCollectionItemBodyHeight(body, isExpanded) {
  if (!isExpanded) {
    body.style.maxHeight = "0px";
    refreshExpandableHeights(body);
    return;
  }

  requestAnimationFrame(() => {
    body.style.maxHeight = `${body.scrollHeight}px`;
    refreshExpandableHeights(body);
  });
}

function observeExpandableContent(node, onResize) {
  if (!node || typeof ResizeObserver === "undefined") {
    return;
  }

  const observer = new ResizeObserver(() => {
    if (typeof onResize === "function") {
      onResize();
      return;
    }

    refreshExpandableHeights(node);
  });

  observer.observe(node);
}

function renderDomains(language) {
  const { domains } = translations[language];
  domainsGrid.innerHTML = "";

  domains.forEach((domain, index) => {
    const article = document.createElement("article");
    const panelId = `domain-panel-${index}`;
    article.className = "domain-card";
    article.innerHTML = `
      <button class="domain-summary-bar" type="button" aria-expanded="false" aria-controls="${panelId}">
        <div class="domain-summary-block">
          <div class="domain-heading-row">
            <span class="domain-mark">${domain.mark}</span>
            <div class="domain-heading-copy">
              <h3>${domain.title}</h3>
              <p class="domain-summary">${domain.summary}</p>
            </div>
          </div>
        </div>
        <span class="domain-toggle-indicator">+</span>
      </button>
      <div class="domain-body" id="${panelId}">
        <div class="domain-body-inner">
          <p class="domain-description">${domain.description}</p>
          <ul class="domain-topics">
            ${domain.topics.map((topic) => `<li>${topic}</li>`).join("")}
          </ul>
          ${domain.value ? `<p class="domain-value">${domain.value}</p>` : ""}
        </div>
      </div>
    `;

    const button = article.querySelector(".domain-summary-bar");
    const body = article.querySelector(".domain-body");

    button.addEventListener("click", () => {
      const isExpanded = article.classList.toggle("expanded");
      button.setAttribute("aria-expanded", String(isExpanded));
      body.style.maxHeight = isExpanded ? `${body.scrollHeight}px` : "0px";
    });

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
