const projectsData = [
  {
    type: "collection",
    title: {
      en: "Vibe Coding Demos",
      zh: "Vibe Coding Demo 集合"
    },
    summary: {
      en: "A growing collection of rapid prototypes that explore configuration-driven building, fast system composition, and engineering abstraction through small interactive demos.",
      zh: "这是一个持续扩展的快速原型集合，用小型交互 Demo 展示配置驱动建模、快速系统搭建与工程抽象能力。"
    },
    items: [
      {
        title: {
          en: "VC Line Auto Builder",
          zh: "产线自动建模 Demo"
        },
        cover: "assets/images/production-line-auto-modeler-cover.png",
        description: {
          en: "A configuration-driven Unity demo that builds industrial production lines from JSON.",
          zh: "一个基于 JSON 配置自动生成工业产线结构的 Unity Demo。"
        },
        overview: {
          en: "A Unity-based industrial line auto builder that reads JSON configuration and generates a Line / Station / Device hierarchy.",
          zh: "这是一个基于 Unity 的工业产线自动建模 Demo，读取 JSON 配置后自动生成 Line / Station / Device 层级结构。"
        },
        keyFeatures: {
          en: [
            "JSON-driven modeling.",
            "Automatic hierarchy generation.",
            "Device types: Conveyor, Sensor, RobotBase.",
            "Scene interaction with selection and UI panel.",
            "Fault simulation with conveyor jam.",
            "Layout switching between simple and complex scenes."
          ],
          zh: [
            "基于 JSON 的配置驱动建模。",
            "自动生成层级结构。",
            "支持 Conveyor、Sensor、RobotBase 等设备类型。",
            "支持场景选择交互与信息面板显示。",
            "支持传送带卡滞故障模拟。",
            "支持 simple / complex 两种布局切换。"
          ]
        },
        interaction: {
          en: [
            "Camera movement with WASD and mouse.",
            "Click a device to show its info panel.",
            "Trigger fault and reset actions.",
            "Switch between layout presets."
          ],
          zh: [
            "使用 WASD 和鼠标进行相机移动。",
            "点击设备显示信息面板。",
            "触发故障与复位操作。",
            "切换不同布局预设。"
          ]
        },
        systemIdea: {
          en: "The core idea is configuration → structure → visualization. It focuses on rapid modeling and system expression rather than full industrial simulation fidelity.",
          zh: "核心思路是 configuration → structure → visualization，重点在于快速建模与系统表达，而不是完整工业仿真精度。"
        },
        note: {
          en: "This is a rapid prototype created as a vibe coding demo, not a full industrial system.",
          zh: "这是一个面向快速验证的 vibe coding 原型 Demo，并不是完整的工业系统。"
        },
        technologies: ["Unity", "JSON", "Configuration-driven Design", "Scene Interaction", "Fault Simulation"],
        video: {
          type: "embed",
          url: "assets/videos/DemoVideoLineAutoBuilder.mp4"
        },
        images: []
      },
      {
        title: {
          en: "Aster Desktop Agent",
          zh: "Aster 桌面智能助手"
        },
        cover: "assets/images/aster-desktop-assistant-cover-v3.png",
        description: {
          en: "A lightweight desktop AI assistant that integrates local memory, offline voice input, and real-time LLM interaction.",
          zh: "一个集成本地记忆、离线语音输入与实时大模型交互的桌面智能助手。"
        },
        overview: {
          en: "Aster is a vibe-coded desktop assistant built with Electron, React, and TypeScript. Unlike browser-based AI tools, it lives directly on the desktop as an interactive companion, combining chat, reminders, local memory, and AI news aggregation.",
          zh: "Aster 是一个基于 Electron、React 和 TypeScript 构建的桌面智能助手。不同于网页端 AI 工具，它以桌面交互形式存在，将对话、提醒、本地记忆与 AI 信息整合在一个轻量系统中。"
        },
        keyFeatures: {
          en: [
            "Desktop-native assistant (not browser-based).",
            "Draggable \"pet-style\" UI interaction.",
            "Local memory storage using SQLite.",
            "Reminder system with desktop notifications.",
            "Streaming LLM responses via OpenAI API.",
            "Offline voice transcription (Whisper-based).",
            "AI news aggregation from model providers and engineering blogs."
          ],
          zh: [
            "桌面原生助手（非浏览器应用）。",
            "可拖拽的“桌面宠物式”交互。",
            "基于 SQLite 的本地记忆存储。",
            "提醒系统与桌面通知。",
            "基于 OpenAI API 的流式对话。",
            "离线语音转文本（Whisper）。",
            "AI 新闻聚合（模型厂商与技术博客）。"
          ]
        },
        interaction: {
          en: [
            "Hover to preview panel.",
            "Click to expand assistant interface.",
            "Drag to reposition the assistant.",
            "Right-click to close.",
            "Voice input via microphone button.",
            "Text input for reminders and context storage."
          ],
          zh: [
            "悬停预览界面。",
            "点击展开助手面板。",
            "拖拽调整位置。",
            "右键关闭应用。",
            "麦克风进行语音输入。",
            "文本输入用于提醒与上下文记录。"
          ]
        },
        systemIdea: {
          en: "Aster explores how lightweight agent systems can exist outside the browser, combining local state, memory, and multimodal interaction into a persistent desktop experience.",
          zh: "Aster 探索了轻量级 Agent 系统如何脱离浏览器存在，通过本地状态、记忆与多模态交互构建持续运行的桌面体验。"
        },
        note: {
          en: "This is a vibe coding prototype focused on exploring desktop agent interaction patterns rather than production-level system design.",
          zh: "该项目为 vibecoding 原型，重点在于探索桌面 Agent 的交互与系统模式，而非生产级系统实现。"
        },
        technologies: [
          "Electron",
          "React",
          "TypeScript",
          "SQLite",
          "OpenAI API",
          "Whisper",
          "Desktop Agent"
        ],
        technicalHighlights: {
          en: [
            "Local-first memory architecture using SQLite.",
            "Agent context persistence across sessions.",
            "Integration of offline voice pipeline with LLM interaction.",
            "Streaming response handling.",
            "Electron-based desktop interaction layer."
          ],
          zh: [
            "基于 SQLite 的本地优先记忆架构。",
            "跨会话的 Agent 上下文保持。",
            "离线语音输入与 LLM 推理结合。",
            "流式响应处理机制。",
            "基于 Electron 的桌面交互层。"
          ]
        },
        video: {
          type: "embed",
          url: "assets/videos/DemoDesktopPet.mp4"
        },
        images: []
      },
      {
        title: {
          en: "PLC Platform Benchmark & Migration Decision Copilot",
          zh: "PLC平台选型与迁移决策智能助手"
        },
        cover: "assets/images/plc-selection-migration-assistant-cover.png",
        description: {
          en: "A local-first decision-support workspace for PLC ecosystem selection, weighted benchmarking, migration-risk discussion, and consulting-style report drafting.",
          zh: "一个本地优先的PLC平台决策工作台，支持生态选型、加权Benchmark、迁移风险分析与咨询式报告生成。"
        },
        overview: {
          en: "This is a vibe-coded industrial decision-support application for PLC platform selection and migration planning. It helps users create decision projects, fill project intake information, register attachment metadata, set platform preferences, run deterministic benchmarks, review AI-assisted analysis, edit report sections, and export consulting-style reports.",
          zh: "这是一个面向PLC平台选型与迁移规划的 vibe coding 工业决策支持应用。系统支持创建决策项目、填写项目信息、登记附件元信息、设置平台偏好、运行确定性Benchmark、审阅AI辅助分析、编辑报告分区并导出咨询式报告。"
        },
        keyFeatures: {
          en: [
            "Project-loop workspace for PLC platform decision support.",
            "Weighted benchmark and deterministic ranking.",
            "Project readiness scoring and lifecycle status.",
            "Local SQLite persistence as the project-loop source of truth.",
            "FastAPI backend with structured API routes.",
            "AI-assisted analysis through backend-only provider boundary.",
            "Report drafting and report section rewrite suggestions.",
            "Markdown / browser PDF / local PowerPoint export.",
            "Safe product boundary: no PLC programming, no PLC code conversion, no direct PLC connection.",
            "Attachment metadata registration without file parsing in the current version."
          ],
          zh: [
            "面向PLC平台决策支持的项目闭环工作台。",
            "加权Benchmark与确定性排序。",
            "项目成熟度评分与生命周期状态管理。",
            "以本地SQLite作为项目闭环数据事实来源。",
            "基于FastAPI的结构化后端接口。",
            "通过后端Provider边界实现AI辅助分析。",
            "报告草稿与报告分区改写建议。",
            "支持Markdown / 浏览器PDF / 本地PowerPoint导出。",
            "明确产品边界：不做PLC编程、不做PLC代码转换、不直连PLC。",
            "当前版本附件仅登记元信息，不解析文件内容。"
          ]
        },
        interaction: {
          en: [
            "Create a PLC decision project.",
            "Fill intake information such as industry, goal, I/O scale, existing platform, constraints, and team experience.",
            "Register attachment metadata.",
            "Select candidate PLC platforms.",
            "Set platform preferences and weights.",
            "Run benchmark analysis.",
            "Review readiness score, missing inputs, confidence level, and next actions.",
            "Ask AI or use deterministic baseline analysis.",
            "Review report suggestions.",
            "Edit report sections.",
            "Export or finalize the consulting report."
          ],
          zh: [
            "创建PLC决策项目。",
            "填写行业、目标、I/O规模、既有平台、约束条件与团队经验等信息。",
            "登记附件元信息。",
            "选择候选PLC平台。",
            "设置平台偏好与权重。",
            "运行Benchmark分析。",
            "查看成熟度评分、缺失项、置信等级与下一步建议。",
            "使用AI辅助分析或确定性基础分析。",
            "审阅报告建议。",
            "编辑报告分区。",
            "导出或定稿咨询报告。"
          ]
        },
        systemIdea: {
          en: "This demo explores how PLC platform selection can be transformed from informal experience-based discussion into a structured decision workflow. Deterministic benchmark scoring remains the source of truth, while AI is used as an advisory layer for explanation, migration-risk discussion, and report drafting.",
          zh: "该Demo探索如何把PLC平台选型从经验式讨论转化为结构化决策流程。确定性Benchmark评分作为事实来源，AI作为解释、迁移风险讨论与报告生成的辅助层，而不是替代评分逻辑。"
        },
        technicalHighlights: {
          en: [
            "FastAPI backend with SQLite local persistence.",
            "Backend-owned readiness scoring and status lifecycle.",
            "Deterministic benchmark scoring as immutable source data.",
            "AI provider boundary with deterministic baseline / OpenAI-compatible routing.",
            "Backend-only API key handling through local .env configuration.",
            "Structured project, readiness, benchmark, and report data consumed by frontend.",
            "Report export workflow supporting Markdown, browser PDF, and local PowerPoint generation.",
            "Clear boundary between deterministic calculations and AI advisory output."
          ],
          zh: [
            "FastAPI后端与SQLite本地持久化。",
            "后端负责成熟度评分与项目状态生命周期。",
            "确定性Benchmark评分作为不可变事实数据。",
            "通过Provider边界支持确定性基础分析与OpenAI兼容AI路由。",
            "API Key仅由后端通过本地.env配置管理。",
            "前端消费结构化项目、成熟度、Benchmark与报告数据。",
            "报告导出支持Markdown、浏览器PDF与本地PowerPoint生成。",
            "明确区分确定性计算与AI顾问建议的边界。"
          ]
        },
        structure: {
          en: [
            "User Project",
            "   |",
            "   v",
            "Frontend Project Workspace",
            "   |",
            "   v",
            "FastAPI Backend",
            "   |",
            "   v",
            "SQLite Local Source of Truth",
            "   |",
            "   +--> Readiness Scoring",
            "   +--> Platform Benchmark",
            "   +--> Report Sections",
            "   +--> Attachment Metadata",
            "   |",
            "   v",
            "Intelligence Provider Boundary",
            "   |",
            "   +--> Deterministic Baseline Analysis",
            "   +--> OpenAI-compatible Provider",
            "   |",
            "   v",
            "Consulting Report Export",
            "(Markdown / PDF / PowerPoint)"
          ].join("\n"),
          zh: [
            "用户项目",
            "   |",
            "   v",
            "前端项目工作台",
            "   |",
            "   v",
            "FastAPI后端",
            "   |",
            "   v",
            "SQLite本地事实来源",
            "   |",
            "   +--> 成熟度评分",
            "   +--> 平台Benchmark",
            "   +--> 报告分区",
            "   +--> 附件元信息",
            "   |",
            "   v",
            "智能Provider边界",
            "   |",
            "   +--> 确定性基础分析",
            "   +--> OpenAI兼容Provider",
            "   |",
            "   v",
            "咨询报告导出",
            "（Markdown / PDF / PowerPoint）"
          ].join("\n")
        },
        note: {
          en: "This is a vibe coding prototype focused on PLC platform selection and migration decision support. It is not a PLC programming tool, not a PLC code converter, and does not connect to PLC hardware or control networks.",
          zh: "该项目是一个面向PLC平台选型与迁移决策支持的 vibe coding 原型。它不是PLC编程工具，不做PLC代码转换，也不直接连接PLC硬件或控制网络。"
        },
        technologies: [
          "FastAPI",
          "SQLite",
          "Python",
          "Frontend Integration",
          "OpenAI-compatible Provider",
          "Benchmarking",
          "Report Export",
          "Decision Support",
          "Industrial Automation"
        ],
        video: {
          type: "embed",
          url: "assets/videos/DemoPLCHelper.mp4"
        },
        images: []
      }
    ]
  },
  {
    title: {
      en: "Production Line Diagnostics Agent",
      zh: "产线状态分析与故障诊断Agent"
    },
    cover: "assets/images/production-line-fault-analysis-diagnosis-cover.png",
    pitch: {
      en: "A workflow-based industrial agent for production line diagnostics, tool orchestration, and closed-loop reasoning.",
      zh: "一个面向产线诊断的工作流式工业智能助手，支持工具编排、上下文推理与闭环决策。"
    },
    summary: {
      en: "An industrial agent system designed for production line status analysis and fault diagnosis. The system combines workflow-based reasoning, tool calling, context engineering, and execution trace visualization to support multi-turn diagnosis in manufacturing scenarios.",
      zh: "这是一个面向产线状态分析与故障诊断的工业智能助手系统，结合工作流式推理、多工具调用、上下文工程和执行路径可视化，支持制造场景下的多轮诊断与分析。"
    },
    problem: {
      en: "Traditional single-turn LLM interactions are weak at structured diagnosis in industrial scenarios because they lack explicit workflow control, tool grounding, memory mechanisms, and execution transparency.",
      zh: "传统的单轮 LLM 调用在工业诊断场景中能力有限，因为它缺少显式的工作流控制、工具支撑、记忆机制以及执行过程透明度。"
    },
    solution: {
      en: "I designed and implemented a workflow-based production diagnostics agent with a modular Plan–Execute–Review/Replan architecture. The system combines industrial semantic tools, structured memory, and traceable execution to support fault detection, root cause analysis, and next-step recommendations.",
      zh: "我设计并实现了一套基于工作流的产线诊断智能体，采用模块化的 Plan–Execute–Review/Replan 架构，并结合工业语义工具、结构化记忆与可追踪执行流程，以支持故障检测、原因分析和下一步操作建议。"
    },
    highlights: {
      en: [
        "Designed a multi-stage Plan–Execute–Review/Replan agent architecture instead of relying on a single LLM call.",
        "Built modular components: Planner, Executor, Reviewer, and Orchestrator.",
        "Implemented multi-tool orchestration via function calling.",
        "Abstracted manufacturing data into structured semantic interfaces: system state, alarms, and production context.",
        "Designed a full context engineering pipeline including short-term memory, summary memory, and structured memory.",
        "Enabled multi-turn reasoning with contextual continuity and coreference resolution.",
        "Logged full execution traces including planning, tool usage, execution results, and observations.",
        "Developed a Streamlit-based interactive UI with chat interaction, collapsible tool outputs, and a dedicated trace panel.",
        "Modeled real manufacturing scenarios such as conveyor jams, sensor blocking, and alarm trigger logic.",
        "Implemented closed-loop reasoning through execution validation and automatic replanning."
      ],
      zh: [
        "自主设计多阶段 Plan–Execute–Review/Replan Agent 架构，而非依赖单次 LLM 调用。",
        "构建模块化组件：Planner、Executor、Reviewer 和 Orchestrator。",
        "实现基于 function calling 的多工具调用与编排。",
        "将制造数据抽象为结构化工业语义接口：system state、alarms、production context。",
        "设计完整的 Context Engineering 机制，包括 short-term memory、summary memory 和 structured memory。",
        "支持上下文延续推理与指代解析，实现多轮诊断能力。",
        "记录完整执行路径，包括规划、工具调用、执行结果与观察信息。",
        "基于 Streamlit 开发交互式 UI，支持聊天式交互、可折叠工具输出和独立 trace 面板。",
        "建模真实工业场景，如传送带堵塞、传感器遮挡和报警触发逻辑。",
        "通过执行校验与自动重规划实现闭环推理能力。"
      ]
    },
    structure: {
      en: [
        "User Query",
        "    |",
        "   UI",
        "    |",
        "    v",
        "Orchestrator",
        "    |",
        "    v",
        "Planner -> Executor -> Reviewer",
        "    |         |           |",
        "    |         |           v",
        "    |         |       Replan",
        "    |         v",
        "    |   Tool Interfaces",
        "    |",
        "    v",
        "Memory Layer",
        "    |",
        "    v",
        "UI + Execution Trace"
      ].join("\n"),
      zh: [
        "用户请求",
        "   |",
        "   UI",
        "   |",
        "   v",
        "Orchestrator",
        "   |",
        "   v",
        "Planner -> Executor -> Reviewer",
        "   |         |           |",
        "   |         |           v",
        "   |         |        Replan",
        "   |         v",
        "   |     工业语义工具",
        "   |",
        "   v",
        "记忆层",
        "   |",
        "   v",
        "UI 与执行路径展示"
      ].join("\n")
    },
    result: {
      en: "The project demonstrates an end-to-end industrial agent system that combines workflow reasoning, tool execution, contextual memory, and execution transparency. It extends beyond chat interaction into structured diagnosis, explainability, and closed-loop decision support for manufacturing operations.",
      zh: "该项目展示了一套端到端的工业智能体系统，融合工作流式推理、工具执行、上下文记忆和执行透明性，使其不再只是简单对话，而是面向制造场景的结构化诊断、可解释分析与闭环决策支持系统。"
    },
    technologies: [
      "Python",
      "LLM Agent",
      "Function Calling",
      "Workflow Orchestration",
      "Context Engineering",
      "Memory System",
      "Explainable AI",
      "Execution Trace",
      "Streamlit",
      "Industrial Diagnostics"
    ],
    video: {
      type: "embed",
      url: "assets/videos/DemoVideoIndustrialAIAgent.mp4"
    },
    projectType: {
      en: "Personal Project",
      zh: "个人项目"
    },
    technicalType: {
      en: "Technical Project",
      zh: "技术项目"
    }
  },
  {
    title: {
      en: "Industrial Digital Twin Demo",
      zh: "工业数字孪生演示系统"
    },
    cover: "assets/images/industrial-digital-twin-demo-cover.png",
    projectType: {
      en: "Personal Project",
      zh: "个人项目"
    },
    technicalType: {
      en: "Technical Project",
      zh: "技术项目"
    },
    pitch: {
      en: "Connect PLC logic, OPC UA, REST services, and Unity into one readable industrial system.",
      zh: "把 PLC 逻辑、OPC UA、REST 服务与 Unity 可视化连接成一个可读、可验证的工业系统。"
    },
    summary: {
      en: "A digital twin demonstration project that links simulated industrial control logic to an OPC UA layer, a REST API service, and a Unity front-end to show how physical processes can be mirrored and inspected in software.",
      zh: "这是一个数字孪生演示项目，通过将工业控制逻辑仿真连接到 OPC UA 数据层、REST API 服务以及 Unity 前端，实现对物理过程的软件映射与可视化检查。"
    },
    problem: {
      en: "Industrial systems are often hard to review before deployment because control data, integration services, and visualization are discussed separately. That makes system behavior difficult to explain and validate as one coherent whole.",
      zh: "工业系统在部署前往往难以整体评审，因为控制数据、集成服务和可视化通常被分开讨论，导致系统行为难以作为一个完整对象被解释和验证。"
    },
    solution: {
      en: "I built a demonstration stack in which PLC-side simulation exposes process state through OPC UA, a REST layer organizes selected data for application use, and Unity renders the machine state as an interactive digital twin view.",
      zh: "我搭建了一套演示架构：PLC 侧仿真通过 OPC UA 暴露过程状态，REST 层负责整理和转发关键数据，Unity 则将这些状态渲染成可交互的数字孪生界面。"
    },
    highlights: {
      en: [
        "Connected PLC simulation data to software-facing interfaces through OPC UA.",
        "Used a REST service layer to separate industrial communication from front-end consumption.",
        "Mapped machine states and process changes to real-time Unity visualization logic.",
        "Designed the demo as an explainable architecture, not only as a visual scene."
      ],
      zh: [
        "通过 OPC UA 将 PLC 仿真数据连接到软件可用的数据接口。",
        "使用 REST 服务层将工业通信与前端消费逻辑解耦。",
        "把设备状态与过程变化映射到 Unity 的实时可视化逻辑中。",
        "将该项目设计为一个可解释的系统架构，而不仅仅是一个三维场景。"
      ]
    },
    structure: {
      en: [
        "PLC / Logic Simulation",
        "         |",
        "         v",
        "OPC UA Server",
        "         |",
        "         v",
        "REST API Layer",
        "         |",
        "         v",
        "Unity Digital Twin View"
      ].join("\n"),
      zh: [
        "PLC / 逻辑仿真",
        "      |",
        "      v",
        "OPC UA 服务器",
        "      |",
        "      v",
        "REST API 服务层",
        "      |",
        "      v",
        "Unity 数字孪生界面"
      ].join("\n")
    },
    result: {
      en: "The demo shows how industrial control behavior can be translated into a software-facing system model, making integration architecture easier to present, test, and discuss with both engineering and non-engineering stakeholders.",
      zh: "该演示证明了工业控制行为如何转化为面向软件的系统模型，使集成架构更容易被展示、验证，并被工程与非工程角色共同讨论。"
    },
    technologies: ["PLC", "OPC UA", "REST API", "Unity", "C#", "Digital Twin", "Simulation"],
    video: {
      type: "embed",
      url: "assets/videos/DemoVideoDigitalTwin.mp4"
    },
    demo: {
      type: "optional",
      note: "Future support for WebGL or interactive demo"
    }
  },
  {
    title: {
      en: "Industrial Fault Simulation & Training System",
      zh: "工业故障仿真与培训系统"
    },
    projectType: {
      en: "BMW Group · Enterprise System",
      zh: "BMW Group · 企业系统"
    },
    technicalType: {
      en: "Technical Project",
      zh: "技术项目"
    },
    pitch: {
      en: "Extend virtual-commissioning assets into a digital-twin training platform with automated station recognition and standardized fault inheritance.",
      zh: "复用虚拟调试资产，自动识别站点并继承标准故障库，构建覆盖设备生命周期的数字孪生培训平台。"
    },
    summary: {
      en: "A digital-twin training platform that reuses models and control logic created for virtual commissioning, then extends them into reproducible fault training and verification throughout the production-system lifecycle.",
      zh: "这是一个基于数字孪生的工业培训平台：复用虚拟调试阶段建立的模型与控制逻辑，并将其拓展为贯穿生产系统生命周期的可复现故障培训与验证能力。"
    },
    problem: {
      en: "Industrial troubleshooting training depended on real equipment and non-reproducible failures, making it expensive, risky and difficult to scale. Building a separate digital twin would add substantial modeling cost, while models already created for virtual commissioning were often underused after launch. The opportunity was to extend those assets across the production-system lifecycle, reduce duplicate engineering effort and establish a new training service.",
      zh: "工业故障排除培训长期依赖真实设备和难以稳定复现的现场故障，成本高、风险大，也难以规模化；如果为培训单独重建数字孪生，又会带来可观的建模成本。与此同时，虚拟调试阶段已经完成的模型与控制逻辑在投产后往往没有被持续利用，因此需要把既有资产拓展到生产系统全生命周期，减少重复工程投入，并形成新的培训业务。"
    },
    solution: {
      en: "The platform connects the virtual-commissioning model, PLCSim and the OPC UA-based HMI through a shared interface layer. It identifies station equipment, signal points and training objects, inherits applicable scenarios from a standardized fault catalog, and automatically generates the station-level training configuration. Multi-layer fault injection then synchronizes PLC variables, digital-twin object behavior and HMI alarms, allowing users to configure, reproduce, diagnose and verify the complete fault-and-recovery workflow without disrupting production equipment.",
      zh: "平台通过统一接口层连接虚拟调试模型、PLCSim 与基于 OPC UA 的 HMI：系统自动识别站点设备、信号点和训练对象，从标准化故障库继承适用场景并生成站点级培训配置，再通过多层级故障注入同步驱动 PLC 变量、数字孪生对象行为和 HMI 报警，使用户能够在不影响生产设备的情况下完成故障配置、复现、诊断与恢复验证的完整流程。"
    },
    highlights: {
      en: [
        "Identified station equipment, signal points and training objects to reduce manual modeling and configuration work.",
        "Inherited applicable scenarios from a standardized fault catalog to generate station-level fault libraries and training configurations.",
        "Injected faults across signal level, simulation object level, and HMI interaction level.",
        "Used an interface layer to bridge simulation runtime, PLCSim, and OPC UA-based HMI control.",
        "Built scenario-based fault logic so training could move from passive troubleshooting to deliberate validation."
      ],
      zh: [
        "自动识别站点设备、信号点和训练对象，减少手动建模与配置工作。",
        "从标准化故障列表继承适用场景，自动形成站点级故障库和训练配置。",
        "在信号层、仿真对象层和 HMI 交互层进行多层级故障注入。",
        "通过接口层连接仿真运行环境、PLCSim 和基于 OPC UA 的 HMI 控制。",
        "将故障逻辑构造成基于场景的训练机制，使测试从被动排障转向主动验证。"
      ]
    },
    structure: {
      en: [
        "Training Panel",
        "      |",
        "      v",
        "Fault Injection Engine",
        "      |",
        "      v",
        "Interface Layer",
        "  ┌───┼──────────────┐",
        "  v   v              v",
        "PLCSim Simulation   HMI via OPC UA"
      ].join("\n"),
      zh: [
        "培训面板",
        "   |",
        "   v",
        "故障注入引擎",
        "   |",
        "   v",
        "接口层",
        "┌──┼─────────────┐",
        "v  v             v",
        "PLCSim 仿真系统  OPC UA HMI"
      ].join("\n")
    },
    cardResult: {
      en: "The global rollout supported 1000+ training users, standardized 200+ reusable fault scenarios and improved troubleshooting capability by 25%.",
      zh: "全球部署覆盖 1000+ 培训用户，沉淀 200+ 可复用故障场景，并将故障排除能力提升了 25%。"
    },
    result: {
      en: "The platform was deployed across five factories in Germany, Hungary, Mexico, China and the United States, including development and training use cases for next-generation battery production. The global rollout supported 1000+ training users, standardized 200+ reusable fault scenarios and improved troubleshooting capability by 25%.",
      zh: "平台已在德国、匈牙利、墨西哥、中国和美国的五座工厂落地，并支持新一代电池生产相关的开发与培训场景。全球部署覆盖 1000+ 培训用户，沉淀 200+ 可复用故障场景，并将故障排除能力提升了 25%。"
    },
    metrics: [
      {
        value: "200+",
        label: {
          en: "reusable fault scenarios",
          zh: "可复用故障场景"
        }
      },
      {
        value: "1000+",
        label: {
          en: "training users supported",
          zh: "培训用户覆盖"
        }
      },
      {
        value: "25%",
        label: {
          en: "troubleshooting improvement",
          zh: "故障排除能力提升"
        }
      }
    ],
    technologies: ["C#", ".NET", "PLCSim", "OPC UA", "Fault Injection", "Simulation", "HMI"]
  },

  {
    title: {
      en: "Plugin-based System Decoupling",
      zh: "基于插件的系统解耦"
    },
    cover: "assets/images/plugin-system-decoupling-cover.png",
    projectType: {
      en: "Industry Project",
      zh: "企业项目"
    },
    technicalType: {
      en: "Technical Project",
      zh: "技术项目"
    },
    pitch: {
      en: "Replace costly external dependencies with a local plugin architecture.",
      zh: "用本地插件架构替代高成本的外部依赖。"
    },
    summary: {
      en: "A toolchain optimization project that removed a critical dependency on external RFC-based IT interaction by embedding the required functionality directly into the digital simulation software.",
      zh: "这是一个工具链优化项目，通过将关键功能直接嵌入数字仿真软件内部，替代原有基于 RFC 的外部 IT 系统交互依赖。"
    },
    problem: {
      en: "A key function in the workflow depended on RFC-based interaction with external IT systems, which increased cost, reduced flexibility, and created long-term dependency on external infrastructure.",
      zh: "工作流中的关键功能依赖于与外部 IT 系统的 RFC 交互，这不仅带来了较高成本，也削弱了系统灵活性，并形成长期的外部依赖。"
    },
    solution: {
      en: "I helped redesign the dependency path by replacing the external interaction with a custom plugin running inside the digital simulation software.",
      zh: "我参与重构了这一依赖路径，通过在数字仿真软件内部开发自定义插件，替代原有的外部交互方式。"
    },
    highlights: {
      en: [
        "Replaced RFC-based external dependency with embedded functional modules.",
        "Used plugin architecture to keep the new logic modular and reusable.",
        "Improved maintainability and reduced dependency on supplier-controlled infrastructure."
      ],
      zh: [
        "用嵌入式功能模块替代基于 RFC 的外部依赖。",
        "通过插件架构保持新逻辑的模块化和可复用性。",
        "降低对供应商控制基础设施的依赖，提升可维护性。"
      ]
    },
    structure: {
      en: [
        "Original Path",
        "Simulation",
        "   |",
        "   v",
        "External IT System (RFC)",
        "",
        "Refactored Path",
        "Simulation",
        "   |",
        "   v",
        "Custom Plugin",
        "   |",
        "   v",
        "Local Functional Logic"
      ].join("\n"),
      zh: [
        "原始路径",
        "仿真系统",
        "   |",
        "   v",
        "外部 IT 系统（RFC）",
        "",
        "重构后路径",
        "仿真系统",
        "   |",
        "   v",
        "自定义插件",
        "   |",
        "   v",
        "本地功能逻辑"
      ].join("\n")
    },
    result: {
      en: "The refactor significantly reduced annual cost, improved scalability across models and lines, and made the system less dependent on external IT infrastructure.",
      zh: "这次重构显著降低了年度成本，提升了跨模型和跨产线的扩展性，也让系统摆脱了对外部 IT 基础设施的强依赖。"
    },
    technologies: ["Plugin Architecture", "Simulation Software", "RFC Replacement", "System Decoupling", "Integration Logic"]
  },

  {
    title: {
      en: "Vision-based Motion Evaluation & Feedback System",
      zh: "基于视觉的人体动作评估与反馈系统"
    },
    projectType: {
      en: "TUM · Human Factors Project",
      zh: "TUM · 人因工程项目"
    },
    technicalType: {
      en: "Motion Evaluation Research",
      zh: "运动评估研究"
    },
    pitch: {
      en: "Turn abstract Qigong movement into personalized scores, statistical evidence and joint-level feedback, validated with more than 20 participants.",
      zh: "把抽象的气功动作转化为个体相对评分、统计证据与关节级反馈，并通过 20 余名被试验证。"
    },
    summary: {
      en: "A human-factors study that turns expert movement into a reusable relative-scoring framework, combining experiment design, kinematic data processing, statistical visualization and participant-specific feedback.",
      zh: "一项将资深动作转化为可复用相对评价框架的人因工程研究，覆盖实验设计、运动学数据处理、统计可视化与个体反馈。"
    },
    problem: {
      en: "Qigong quality is abstract and difficult to evaluate with one absolute target. Body proportions, mobility and movement amplitude differ between participants, while visual coaching provides little objective evidence about which joint or phase needs correction. The study therefore needed a measurable but individualized evaluation basis, a statistically defensible comparison across participants, and evidence for how teaching videos should frame the movement.",
      zh: "气功动作较为抽象，难以用单一绝对值评价。被试的身体比例、活动范围与动作幅度各不相同，单纯观察既主观，也难以定位需要修正的关节和动作阶段。因此，项目需要建立兼顾客观性与个体差异的评价依据，通过群体统计验证其稳定性，并说明教学视频应如何呈现动作。"
    },
    solution: {
      en: "The study defined the experiment, reference actions and scoring logic from experienced athletes and teaching videos. A company partner supplied the computer-vision skeleton sequences; based on the movement characteristics of Qigong, the project researched and selected joint angle, velocity, acceleration, angular velocity and angular acceleration as the evaluation dimensions, then cleaned and processed the sequences in MATLAB and RStudio. Correlations and movement patterns were used to build participant-relative scores rather than relying on raw magnitude. Dynamic joint diagnostics were combined with box plots, mean, median, quartiles and confidence intervals so individual feedback and cohort evidence could be examined together. Eye tracking added areas-of-interest evidence and practical filming guidance for teaching videos.",
      zh: "项目基于资深运动员和教学视频完成实验设计、参考动作定义与评分逻辑设计；合作企业提供计算机视觉识别与骨架序列，项目则依据气功运动的动作特征研究并筛选关节角度、速度、加速度、角速度与角加速度作为评价维度，再使用 MATLAB、RStudio 完成数据清洗与处理，并依据相关性和动作模式建立不依赖绝对幅值的个体相对评分。动态关节诊断与箱型图、平均数、中位数、四分位数和置信区间结合，使个体反馈与群体统计证据可以共同验证。配套眼动实验进一步形成兴趣区域分析与教学视频拍摄规范。"
    },
    highlights: {
      en: [
        "Defined the experiment and objective scoring criteria for an otherwise abstract movement from expert athletes and teaching videos.",
        "Kept the project boundary explicit: the company partner supplied CV skeleton sequences; study design, data processing, scoring and evaluation formed the project contribution.",
        "Used relative correlation across angle, velocity, acceleration, angular velocity and angular acceleration instead of one absolute threshold.",
        "Connected dynamic neck, shoulder, elbow, wrist, hip and knee feedback with cohort-level statistical analysis.",
        "Used box plots, mean, median, quartiles and confidence intervals to reveal variation and show greater evaluation stability as the participant sample grows.",
        "Validated the framework with more than 20 participants and used the feedback to improve Qigong performance.",
        "Combined eye-tracking areas of interest with motion analysis to define teaching-video filming guidance.",
        "Designed the data and visualization pipeline as a reusable evaluation framework for other sports."
      ],
      zh: [
        "从资深运动员与教学视频出发设计实验并提炼评分标准，使抽象动作能够被客观评价。",
        "明确项目边界：合作企业提供 CV 骨架序列，项目工作集中于实验设计、数据处理、评分体系与评价框架。",
        "使用角度、速度、加速度、角速度和角加速度的相对相关关系，而不是统一的绝对阈值。",
        "把颈、肩、肘、腕、胯与膝的动态反馈和群体统计分析连接在同一评价流程中。",
        "通过箱型图、平均数、中位数、四分位数与置信区间呈现个体差异，并展示样本增加后评判稳定性的提升。",
        "在 20 余名被试中验证评价框架，并通过反馈优化气功运动表现。",
        "结合眼动兴趣区域与动作分析，形成教学视频拍摄指导规范。",
        "数据处理、评分与可视化流程可复用于其他运动项目。"
      ]
    },
    structure: {
      en: [
        "Motion Input",
        "     |",
        "     v",
        "Skeleton Model",
        "     |",
        "     v",
        "Feature Extraction",
        "(Angle / Velocity / Acceleration)",
        "     |",
        "     v",
        "Reference Comparison",
        "(User vs Expert)",
        "     |",
        "     v",
        "Scoring + Feedback"
      ].join("\n"),
      zh: [
        "动作输入",
        "   |",
        "   v",
        "骨架模型",
        "   |",
        "   v",
        "特征提取",
        "（角度 / 速度 / 加速度）",
        "   |",
        "   v",
        "标准对比",
        "（用户 vs 专业动作）",
        "   |",
        "   v",
        "评分与反馈"
      ].join("\n")
    },
    result: {
      en: "Testing with more than 20 participants connected participant-relative joint scoring with dynamic and cohort-level evidence. Statistical views exposed variation, central tendency and uncertainty, while larger participant samples made the evaluation basis progressively more stable. The outcome was a reusable experimental and data-evaluation framework for other sports, plus evidence-based filming guidance from eye-tracking areas of interest.",
      zh: "20 余名被试的测试把个体相对关节评分与动态、群体两级证据连接起来；统计图表呈现差异、集中趋势与不确定性，参与者增加后评价依据也逐步稳定。项目最终沉淀出可迁移到其他运动的实验与数据评价框架，以及基于眼动兴趣区域形成的教学视频拍摄规范。"
    },
    cardResult: {
      en: "The study validated relative scoring across 6 joint groups with 20+ participants and integrated dynamic and cohort statistics into a reusable motion-evaluation framework.",
      zh: "项目通过 20+ 名被试验证了 6 组关节相对评分，并将动态与群体统计可视化整合为可复用的运动评价框架。"
    },
    metrics: [
      {
        value: "20+",
        label: { en: "Participants", zh: "测试被试" }
      },
      {
        value: "06",
        label: { en: "Joint groups", zh: "关键关节组" }
      },
      {
        value: "05",
        label: { en: "Kinematic metrics", zh: "运动学指标" }
      }
    ],
    technologies: ["Human Factors", "Experimental Design", "MATLAB", "RStudio", "Statistical Analysis", "Data Visualization", "Relative Scoring", "Skeleton Data", "Eye Tracking"]
  },

  {
    title: {
      en: "Multimodal 3D Navigation System",
      zh: "多模态三维导航系统"
    },
    cover: "assets/images/sound-guided-navigation-cover.png",
    projectType: {
      en: "Personal Project",
      zh: "个人项目"
    },
    technicalType: {
      en: "Extended Technical Project",
      zh: "技术延展项目"
    },
    pitch: {
      en: "Guide people through complex spaces using more than just arrows.",
      zh: "不只依赖箭头，而是用多模态线索引导用户穿越复杂空间。"
    },
    summary: {
      en: "A 3D navigation and interaction system that combines visual, auditory, and environmental cues to improve spatial understanding in complex scenes.",
      zh: "这是一个结合视觉、听觉和环境交互线索的三维导航与交互系统，用于提升用户在复杂场景中的空间理解能力。"
    },
    problem: {
      en: "Traditional navigation methods in 3D environments often relied on single-mode guidance, which increased cognitive load and made it harder for users to build spatial understanding.",
      zh: "传统三维场景中的导航方式往往依赖单一模式的提示，这会增加认知负担，也不利于用户建立稳定的空间理解。"
    },
    solution: {
      en: "I designed a multimodal navigation system that combined scene interaction, changing streetlight intensity, footstep echo, and firefly guidance to direct users toward their targets.",
      zh: "我设计了一套多模态导航系统，通过场景交互、路灯光强变化、脚步回音和萤火虫引导等方式，帮助用户逐步接近目标。"
    },
    highlights: {
      en: [
        "Built navigation logic around current position, predicted position, and target point.",
        "Defined a dynamic triangular navigation region to trigger environment-based feedback.",
        "Used light, audio, and interactive cues instead of relying solely on conventional UI directions.",
        "Validated the interaction design through user evaluation and cognitive-load analysis."
      ],
      zh: [
        "围绕用户当前位置、预测位置和目标点建立导航逻辑。",
        "通过动态三角导航区域触发环境反馈。",
        "不只依赖传统 UI 提示，而是结合光、声音和交互线索进行引导。",
        "通过用户实验和认知负担分析验证交互设计效果。"
      ]
    },
    structure: {
      en: [
        "User Position",
        "     |",
        "     v",
        "Predicted Position + Target Point",
        "     |",
        "     v",
        "Dynamic Navigation Region",
        "     |",
        "     v",
        "Light / Audio / Interactive Feedback"
      ].join("\n"),
      zh: [
        "用户位置",
        "   |",
        "   v",
        "预测位置 + 目标点",
        "   |",
        "   v",
        "动态导航区域",
        "   |",
        "   v",
        "光 / 声 / 交互反馈"
      ].join("\n")
    },
    result: {
      en: "The project improved user satisfaction by 30%, reduced cognitive load, and demonstrated how multimodal guidance could make 3D navigation more intuitive.",
      zh: "该项目将用户满意度提升了 30%，降低了认知负担，并验证了多模态引导能够让三维导航更直观。"
    },
    technologies: ["Unity", "3D Interaction", "Navigation Design", "NASA-TLX", "UX Evaluation", "Multimodal Feedback"]
  },

  {
    title: {
      en: "Matrix-based Production Scheduling Model",
      zh: "基于矩阵的生产调度模型"
    },
    cover: "assets/images/matrix-production-scheduling-model-cover-v2.png",
    projectType: {
      en: "Industry Project",
      zh: "企业项目"
    },
    technicalType: {
      en: "Extended Technical Project",
      zh: "技术延展项目"
    },
    pitch: {
      en: "Turn production conflicts into a computable scheduling model.",
      zh: "把生产冲突转化为可计算的调度模型。"
    },
    summary: {
      en: "A scheduling prototype designed to balance standardized production efficiency with customized product demand using weighted matrix logic.",
      zh: "这是一个调度原型，利用加权矩阵逻辑，在标准化生产效率与客制化产品需求之间寻找平衡。"
    },
    problem: {
      en: "Production planning had to manage the conflict between standardized throughput and customized order requirements, but existing planning methods lacked a structured optimization model.",
      zh: "生产计划需要同时兼顾标准化吞吐效率和客制化订单要求，但现有排产方式缺乏结构化的优化模型。"
    },
    solution: {
      en: "I reframed the scheduling challenge as a matrix problem by combining a remaining workload matrix with a workload distribution matrix and adjusting weights to prioritize customized demand.",
      zh: "我将这一调度挑战重构为矩阵问题，通过剩余工作量矩阵和工时分布矩阵的组合，再辅以权重调整来优先满足客制化需求。"
    },
    highlights: {
      en: [
        "Defined remaining workload matrix as the basis for current production status.",
        "Used workload distribution matrix to represent available capacity allocation.",
        "Adjusted weights to generate different scheduling priorities under customization constraints.",
        "Implemented the first calculation prototype in MATLAB."
      ],
      zh: [
        "以剩余工作量矩阵作为当前生产状态的核心表示。",
        "使用工时分布矩阵表达可分配产能。",
        "通过权重调整在客制化约束下生成不同调度优先级。",
        "在 MATLAB 中实现了第一版计算原型。"
      ]
    },
    structure: {
      en: [
        "Remaining Workload Matrix",
        "          |",
        "          v",
        "Workload Distribution Matrix",
        "          |",
        "          v",
        "Weight Adjustment Strategy",
        "          |",
        "          v",
        "Scheduling Output"
      ].join("\n"),
      zh: [
        "剩余工作量矩阵",
        "      |",
        "      v",
        "工时分布矩阵",
        "      |",
        "      v",
        "权重调整策略",
        "      |",
        "      v",
        "调度输出"
      ].join("\n")
    },
    result: {
      en: "The prototype provided a structured way to balance efficiency and customization, and demonstrated how scheduling decisions could be made computable rather than purely experience-based.",
      zh: "该原型为效率与客制化之间的平衡提供了结构化方法，也证明了调度决策可以从经验判断转化为可计算逻辑。"
    },
    technologies: ["MATLAB", "Scheduling Model", "Matrix Modeling", "Weight Strategy", "Production Planning"]
  },

  {
    title: {
      en: "Lean Process Optimization",
      zh: "精益流程优化"
    },
    cover: "assets/images/lean-production-process-optimization-cover.png",
    projectType: {
      en: "Industry Project",
      zh: "企业项目"
    },
    technicalType: {
      en: "Extended Technical Project",
      zh: "技术延展项目"
    },
    pitch: {
      en: "Reveal bottlenecks by making process flow visible end to end.",
      zh: "通过让流程全链路可见，识别真正的瓶颈所在。"
    },
    summary: {
      en: "A process optimization project that used value stream mapping to identify waste, bottlenecks, and non-value-added steps in manufacturing workflows.",
      zh: "这是一个流程优化项目，通过价值流图分析识别制造流程中的浪费、瓶颈和非增值步骤。"
    },
    problem: {
      en: "Production workflows contained hidden inefficiencies, but teams lacked a structured way to visualize process flow and distinguish value-added from non-value-added work.",
      zh: "生产流程中存在隐性低效问题，但团队缺少一套结构化方法去可视化流程全貌，并区分增值与非增值活动。"
    },
    solution: {
      en: "I applied value stream mapping to analyze the end-to-end workflow, identify bottlenecks, and propose process improvements based on lean principles.",
      zh: "我利用价值流图分析端到端流程，识别瓶颈位置，并基于精益原则提出流程改进方案。"
    },
    highlights: {
      en: [
        "Mapped the workflow end to end to make bottlenecks visible.",
        "Separated value-added and non-value-added activities.",
        "Used structured process analysis to support optimization proposals."
      ],
      zh: [
        "对端到端流程进行映射，使瓶颈位置可视化。",
        "区分增值与非增值活动。",
        "通过结构化流程分析支持优化方案设计。"
      ]
    },
    structure: {
      en: [
        "Current Workflow Mapping",
        "         |",
        "         v",
        "Bottleneck Identification",
        "         |",
        "         v",
        "Waste Analysis",
        "         |",
        "         v",
        "Optimized Process Proposal"
      ].join("\n"),
      zh: [
        "当前流程映射",
        "     |",
        "     v",
        "瓶颈识别",
        "     |",
        "     v",
        "浪费分析",
        "     |",
        "     v",
        "优化方案"
      ].join("\n")
    },
    result: {
      en: "The analysis improved process transparency and created a clearer basis for workflow optimization and resource utilization improvements.",
      zh: "该分析提升了流程透明度，也为后续流程优化与资源利用改善建立了更清晰的依据。"
    },
    technologies: ["Lean", "Value Stream Mapping", "Process Analysis", "Workflow Optimization", "Industrial Engineering"]
  },
  {
    title: {
      en: "Industrial Simulation Data Agent",
      zh: "工业仿真数据智能 Agent"
    },
    projectType: {
      en: "S.Hu · Personal Project",
      zh: "S.Hu · 个人项目"
    },
    technicalType: {
      en: "Extended Technical Project",
      zh: "技术延展项目"
    },
    pitch: {
      en: "Use structured documents to describe industrial scenes, interpret configuration intent, generate digital twins, and support defect simulation and engineering outputs in one framework.",
      zh: "使用结构化文档描述工业场景，通过意图识别自动生成数字孪生，并在同一框架中完成缺陷模拟与工程输出。"
    },
    summary: {
      en: "A configuration-driven industrial simulation framework that turns structured scene descriptions into digital twins, while supporting defect simulation, 3D parameter write-back and on-demand outputs.",
      zh: "这是一个配置驱动的工业仿真框架：以结构化文档统一描述场景，自动搭建数字孪生，同时支持缺陷模拟、三维参数回写与按需输出。"
    },
    problem: {
      en: "Industrial digital twins and simulation-data production still rely heavily on manually building USD scenes, placing assets and tuning parameters. Each scene variant or defect case often requires repeated modeling and a new set of output files, increasing engineering cost, weakening reproducibility and making scene knowledge difficult to reuse across stations and projects.",
      zh: "工业数字孪生和仿真数据生产仍高度依赖人工搭建 USD 场景、摆放资产和调节参数；当场景发生变体或需要复现缺陷时，工程师往往需要重复建模并重新整理输出资料，导致成本高、复现性不足，也难以把场景知识复用到其他站点和项目。"
    },
    solution: {
      en: "The framework connects intent interpretation, structured scene description, digital-twin construction, defect simulation and output generation in one configuration-driven workflow. Scene requirements are converted into YAML, which assembles reusable assets, materials and object relationships into a USD Stage and hierarchy. Direct 3D edits write transforms back to the document, normal and parameterized defect states share the same scene definition, and reports, hierarchy trees, metadata and scene captures are generated on demand from the synchronized state.",
      zh: "框架将意图识别、结构化描述、数字孪生构建、缺陷模拟和输出生成串联为一条配置驱动的流程：场景需求被转换为 YAML 配置，可复用资产、材质和对象关系据此自动组合为 USD Stage 与层级树；三维编辑会把位姿回写文档，参数化缺陷与正常状态共用同一场景定义，报告、结构树、Metadata 和场景截图则从同步后的状态按需生成。"
    },
    highlights: {
      en: [
        "Uses structured documents as the shared entry point for scene configuration and 3D construction.",
        "Translates scene intent into asset, parameter and relationship configurations.",
        "Builds digital twins from reusable industrial components and a modular USD asset library.",
        "Represents defects as parameterized states so normal and abnormal conditions share one scene definition.",
        "Synchronizes YAML, 3D transforms and the USD hierarchy around one scene state.",
        "Extends assets, defect rules and output modules independently, including hierarchy trees, reports and scene captures."
      ],
      zh: [
        "以结构化文档作为场景配置和三维建模的统一入口。",
        "根据场景意图生成资产、参数和对象关系配置。",
        "通过可复用工业组件和模块化 USD 资产库搭建数字孪生。",
        "以参数化状态模拟缺陷与错误，使正常与异常工况共用一套场景定义。",
        "同步 YAML、三维位姿与 USD 层级结构，保持统一的场景状态。",
        "资产、故障规则和输出模块均可独立扩展，并按需生成结构树、报告和场景截图。"
      ]
    },
    structure: {
      en: [
        "Extension Layer",
        "      |",
        "      v",
        "Scene Intent Agent",
        "      |",
        "      v",
        "Scene Configuration",
        "      |",
        "      v",
        "Scene Builder",
        "      |",
        "      v",
        "USD Stage",
        "      |",
        "      v",
        "Data Export Pipeline",
        "",
        "Core Modules:",
        "- YAML Loader",
        "- Scene Intent Agent",
        "- Scene Builder",
        "- Asset Manager",
        "- Material Manager",
        "- Screenshot Exporter",
        "- Metadata Exporter",
        "- Report Exporter"
      ].join("\n"),
      zh: [
        "Extension 交互层",
        "      |",
        "      v",
        "Scene Intent Agent",
        "      |",
        "      v",
        "Scene Configuration",
        "      |",
        "      v",
        "Scene Builder",
        "      |",
        "      v",
        "USD Stage",
        "      |",
        "      v",
        "Data Export Pipeline",
        "",
        "核心模块：",
        "- YAML Loader",
        "- Scene Intent Agent",
        "- Scene Builder",
        "- Asset Manager",
        "- Material Manager",
        "- Screenshot Exporter",
        "- Metadata Exporter",
        "- Report Exporter"
      ].join("\n")
    },
    result: {
      en: "The framework combines scene construction, defect reproduction and engineering outputs into one reusable workflow. A single structured document can continuously drive the digital twin and multiple output formats, while assets, intent rules, defect models and output modules remain independently extensible for use across stations, projects and simulation-data tasks.",
      zh: "框架将原本分散的场景搭建、缺陷复现和资料输出整合为可复用流程。同一份结构化文档可以持续驱动数字孪生与多种工程输出，资产、意图规则、故障模型和输出模块也能够独立扩展，便于迁移到不同站点、项目和仿真数据任务。"
    },
    cardResult: {
      en: "Structured YAML and 3D transforms stay synchronized across four reproducible defect cases, with USD, metadata and camera outputs generated from one scene state.",
      zh: "结构化 YAML 与三维位姿在四类可复现缺陷场景中保持双向同步，并从统一场景状态生成 USD、Metadata 与相机输出。"
    },
    metrics: [
      {
        value: "YAML ↔ 3D",
        label: {
          en: "bidirectional scene mapping",
          zh: "场景双向映射"
        }
      },
      {
        value: "04",
        label: {
          en: "reproducible defect cases",
          zh: "可复现缺陷场景"
        }
      },
      {
        value: "USD + JSON",
        label: {
          en: "shared output state",
          zh: "统一输出状态"
        }
      }
    ],
    technologies: [
      "NVIDIA Isaac Sim",
      "OpenUSD",
      "YAML",
      "Synthetic Data Generation",
      "Industrial Digital Twin",
      "AI Agent",
      "Scene Configuration",
      "USD Asset Composition"
    ],
    video: {
      type: "embed",
      url: "assets/videos/DemoIsaacSimGenerator.mp4"
    },
    images: []
  }
];
