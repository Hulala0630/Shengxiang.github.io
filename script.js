// Bilingual content model for static UI copy and domain data.
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
  const language = currentLanguage;
  const classificationTags = [
    project.projectType?.[language],
    project.technicalType?.[language]
  ]
    .filter(Boolean)
    .map((tag) => `<span class="project-class-tag">${tag}</span>`)
    .join("");

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

          <section class="project-block">
            <h4>${labels.result}</h4>
            <p>${project.result[language]}</p>
          </section>
        </div>

        <aside class="diagram-panel">
          <section class="project-block">
            <h4>${labels.pitch}</h4>
            <p>${project.pitch[language]}</p>
          </section>

          <section class="project-block">
            <h4>${labels.systemView}</h4>
            <pre class="diagram-box">${project.structure[language]}</pre>
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
  const { projectLabels } = translations[language];
  projectsList.innerHTML = "";

  projectsData.forEach((project, index) => {
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
