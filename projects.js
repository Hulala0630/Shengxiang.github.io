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
          en: "Production Line Auto Builder",
          zh: "产线自动生成器"
        },
        cover: "assets/images/production-line-auto-modeler-cover.png",
        description: {
          en: "A Unity-based tool that rapidly generates industrial production-line scenes from structured JSON, with component inspection and basic fault simulation.",
          zh: "基于 Unity 与 JSON 结构化文本快速生成工业产线场景，支持组件信息查看与基础故障模拟。"
        },
        overview: {
          en: "Manually assembling industrial scenes and organizing their components can be time-consuming, making it difficult to quickly validate different production-line structures. This project explores a structured approach to scene generation while keeping component identities and functions clear and traceable.",
          zh: "工业场景的手动搭建与组件整理较为耗时，也难以快速验证不同产线结构。该项目尝试通过统一的结构化描述生成场景，同时让产线组件及其功能信息保持清晰、可追踪。"
        },
        keyFeatures: {
          en: [
            "JSON-driven production-line modeling.",
            "Automatic Line / Station / Device hierarchy generation.",
            "Conveyor, Sensor, RobotBase, and other component types.",
            "Consistent structured naming for generated components.",
            "Simple and complex scene layouts.",
            "Conveyor blockage triggering and recovery."
          ],
          zh: [
            "基于 JSON 的配置驱动建模。",
            "自动生成 Line / Station / Device 层级结构。",
            "支持 Conveyor、Sensor、RobotBase 等组件类型。",
            "按统一规则生成结构化组件名称。",
            "支持 simple / complex 两种场景布局。",
            "支持传送带阻塞故障的触发与恢复。"
          ]
        },
        interaction: {
          en: [
            "Navigate the scene using WASD and the mouse.",
            "Hover over components to inspect information such as name, type, and function.",
            "Switch between simple and complex layouts.",
            "Trigger and reset a conveyor blockage."
          ],
          zh: [
            "使用 WASD 与鼠标控制场景视角。",
            "指针悬浮在组件上时显示名称、类型和功能等信息。",
            "切换简单与复杂场景布局。",
            "触发并恢复传送带阻塞故障。"
          ]
        },
        systemIdea: {
          en: "The system reads JSON configuration to automatically generate a Line / Station / Device hierarchy in Unity and names components according to consistent rules. The same data structure can produce simple or complex scenes while preserving layout, component relationships, and functional information.",
          zh: "系统读取 JSON 配置，在 Unity 中自动生成 Line / Station / Device 层级结构，并按照统一规则为组件命名。相同的数据结构可用于生成简单或复杂场景，使产线布局、组件关系与功能信息保持一致。"
        },
        note: {
          en: "The resulting prototype validates a configuration-to-scene workflow for rapid production-line modeling and interactive representation. It focuses on fast modeling and system communication rather than full industrial simulation fidelity.",
          zh: "完成了一个结构化文本驱动的产线快速建模原型，验证了从配置到场景结构与交互展示的生成流程。该项目侧重快速建模和系统表达，不代表完整的工业仿真系统。"
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
          en: "Aster Desktop Assistant",
          zh: "Aster 桌面助手"
        },
        cover: "assets/images/aster-desktop-assistant-cover-v3.png",
        description: {
          en: "A personal desktop assistant that keeps track of long- and short-term goals, follows topics of interest, and delivers relevant news and information.",
          zh: "一个能够记录长期与短期目标、关注个人兴趣，并持续筛选和推送相关新闻与信息的桌面私人助理。"
        },
        overview: {
          en: "In the fast-moving AI era, useful information is easily buried in constant updates. People often need to repeatedly search for news, remember unfinished plans, and reconnect scattered information with their personal goals. Aster brings these needs together in a desktop companion that stays close at hand.",
          zh: "在快节奏的 AI 时代，有价值的信息很容易被持续更新的内容淹没。人们往往需要反复搜索新闻、记住尚未完成的计划，再把零散信息与个人目标重新联系起来。Aster 将这些需求集中到一个随时可用的桌面助手中。"
        },
        keyFeatures: {
          en: [
            "Keep long-term goals visible and easy to revisit.",
            "Turn short-term plans into reminders and next actions.",
            "Follow personal interests and preferred topics.",
            "Collect and filter relevant AI news and updates.",
            "Deliver personalized information directly on the desktop.",
            "Support natural text and voice conversations.",
            "Remember useful context across conversations."
          ],
          zh: [
            "记录长期目标，并在需要时随时回顾。",
            "将短期计划转化为提醒和下一步行动。",
            "持续关注个人兴趣与偏好主题。",
            "收集并筛选相关的 AI 新闻与动态。",
            "将个性化信息直接推送到桌面。",
            "支持自然的文字与语音交流。",
            "在不同对话之间保留有用信息。"
          ]
        },
        interaction: {
          en: [
            "Hover to quickly preview the assistant.",
            "Click to open conversations, goals, reminders, and news.",
            "Drag Aster to a comfortable position on the desktop.",
            "Use voice or text to record plans and interests.",
            "Receive reminders and relevant updates through desktop notifications."
          ],
          zh: [
            "悬停即可快速预览助手。",
            "点击查看对话、目标、提醒与兴趣新闻。",
            "拖拽 Aster，将它放在桌面上的合适位置。",
            "通过语音或文字记录计划与兴趣。",
            "通过桌面通知接收提醒和相关动态。"
          ]
        },
        systemIdea: {
          en: "Instead of waiting for the user to repeatedly search and reorganize information, Aster connects goals, reminders, interests, and news in one continuous personal context. It helps turn incoming information into something relevant, timely, and easier to act on.",
          zh: "Aster 不再让用户反复搜索和整理信息，而是把目标、提醒、兴趣与新闻放进同一份持续更新的个人上下文中，让收到的信息更相关、更及时，也更容易转化为行动。"
        },
        note: {
          en: "Aster brings conversations, goals, reminders, and selected news into one desktop experience, reducing the effort needed to follow important information and keep daily actions connected to longer-term direction.",
          zh: "Aster 将对话、目标、提醒与筛选后的新闻集中在桌面端，减少追踪重要信息所需的精力，也让每天的行动能够持续连接到更长期的方向。"
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
            "Keeps personal goals, interests, and conversation context available across sessions.",
            "Stores personal information locally for a more private experience.",
            "Accepts voice input even when online speech services are unavailable.",
            "Displays responses as they are generated for a smoother conversation.",
            "Lives directly on the desktop instead of requiring a browser tab."
          ],
          zh: [
            "在不同使用阶段持续保留个人目标、兴趣和对话信息。",
            "个人信息优先保存在本地，使用起来更加安心。",
            "没有在线语音服务时，也可以使用语音输入。",
            "回答生成时即时显示，让对话更加流畅。",
            "直接驻留在桌面，不需要一直打开浏览器页面。"
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
          en: "PLC Selection Decision Assistant",
          zh: "PLC 选型智能决策助手"
        },
        cover: "assets/images/plc-selection-migration-assistant-cover.png",
        description: {
          en: "An AI-assisted decision workspace that helps engineers compare PLC platforms by combining objective evidence with project experience and preferences.",
          zh: "一个面向工程设备选型的 AI 决策工作台，帮助工程师结合客观比较、项目经验与实际偏好选择合适的 PLC 平台。"
        },
        overview: {
          en: "Equipment selection in engineering rarely depends on a single specification. Engineers must balance performance, cost, existing systems, team experience, future maintenance, and project risk. This project explores how AI can support that decision process by organizing requirements, comparing candidate PLC platforms, and explaining the trade-offs between objective results and practical preferences.",
          zh: "工程领域的设备选型很少由单一参数决定。工程师需要同时权衡性能、成本、现有系统、团队经验、后续维护与项目风险。该项目探索 AI 如何参与决策端：整理项目需求、比较候选 PLC 平台，并解释客观结果与实际偏好之间的取舍。"
        },
        keyFeatures: {
          en: [
            "Collect project goals, constraints, existing systems, and team experience in one place.",
            "Compare candidate PLC platforms using the same set of requirements.",
            "Combine objective scores with project-specific priorities and preferences.",
            "Use AI to explain differences, risks, and recommended choices.",
            "Highlight missing information and suggest the next decision steps.",
            "Turn the completed analysis into an editable selection report."
          ],
          zh: [
            "集中整理项目目标、约束、现有系统与团队经验。",
            "使用同一组需求比较多个候选 PLC 平台。",
            "将客观评分与项目偏好、实际经验结合起来。",
            "利用 AI 解释平台差异、潜在风险与选择建议。",
            "提示仍缺少的信息，并给出下一步决策建议。",
            "将完整分析整理为可继续编辑的选型报告。"
          ]
        },
        interaction: {
          en: [
            "Create a selection project, enter its goals, scale, existing platform, constraints, and team experience, then add reference materials and candidate PLC platforms.",
            "Set the comparison criteria and project priorities, then run the platform analysis.",
            "Review the objective comparison together with AI explanations, risks, missing information, and recommended next steps.",
            "Adjust the decision when needed, edit the generated report, and export the final selection recommendation."
          ],
          zh: [
            "创建选型项目，填写目标、规模、现有平台、限制条件与团队经验，并加入参考资料和候选 PLC 平台。",
            "设置比较标准与项目侧重点，然后运行平台分析。",
            "结合客观比较与 AI 解释，查看平台差异、风险、缺失信息和下一步建议。",
            "根据需要调整选择，编辑自动整理的报告，并导出最终选型建议。"
          ]
        },
        systemIdea: {
          en: "The decision method separates evidence from judgment without forcing one to replace the other. Objective comparison provides a stable baseline, project priorities reflect real engineering conditions, and AI connects both sides by explaining trade-offs, questioning incomplete assumptions, and organizing the reasoning into a reviewable recommendation.",
          zh: "这套决策方法把客观依据与主观判断分开处理，但不让两者相互替代：客观比较提供稳定基线，项目偏好反映真实工程条件，AI 则负责连接两者，解释取舍、提示不完整的判断，并将决策过程整理成可复核的建议。"
        },
        technicalHighlights: {
          en: [
            "FastAPI service with SQLite-based local project persistence.",
            "Deterministic weighted scoring keeps platform comparisons repeatable and traceable.",
            "Subjective preferences are modeled separately from objective platform data.",
            "AI analysis is isolated from the scoring engine, preventing generated advice from changing source results.",
            "Readiness and confidence indicators expose missing inputs before a recommendation is finalized.",
            "Structured project, comparison, analysis, and report data remain connected throughout the workflow.",
            "Report output supports Markdown, browser PDF, and locally generated PowerPoint files."
          ],
          zh: [
            "使用 FastAPI 服务与 SQLite 在本地持续保存项目数据。",
            "确定性的加权评分使平台比较可以重复计算并追溯依据。",
            "主观偏好与客观平台数据分开建模，避免相互覆盖。",
            "AI 分析与评分引擎相互隔离，生成的建议不会改变原始结果。",
            "通过准备度与置信度提示，在形成建议前暴露缺失信息。",
            "项目、比较、分析与报告采用相互关联的结构化数据。",
            "报告支持 Markdown、浏览器 PDF 与本地 PowerPoint 输出。"
          ]
        },
        structureStyle: "horizontal",
        structure: {
          en: "Project Input  →  Comparison Criteria  →  Objective + Subjective Evaluation  →  AI Explanation  →  Risk & Gap Review  →  Selection Report",
          zh: "项目输入  →  比较标准  →  主客观评估  →  AI 解释  →  风险与缺口检查  →  选型报告"
        },
        note: {
          en: "The assistant turns an experience-heavy selection discussion into a transparent decision record. Engineers can see why a platform ranks higher, where personal preferences influence the result, which information is still missing, and how the final recommendation was formed.",
          zh: "该助手将高度依赖经验的选型讨论转化为透明的决策记录。工程师可以看到某个平台为何更合适、个人偏好如何影响结果、当前还缺少哪些信息，以及最终建议是如何形成的。"
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
      en: "Production Line Status & Fault Diagnosis Agent",
      zh: "产线状态分析与故障诊断 Agent"
    },
    cover: "assets/images/production-line-fault-analysis-diagnosis-cover.png",
    pitch: {
      en: "An industrial AI assistant that helps interpret production-line conditions, route diagnostic tasks, and explain likely fault causes.",
      zh: "一个辅助判断产线状态、分配诊断路径并分析潜在故障原因的工业 AI 助手。"
    },
    summary: {
      en: "A technical exploration of how an Agent can combine production status, alarms, operating context, and specialized tools to support repeatable and explainable fault diagnosis in industrial environments.",
      zh: "这是一次面向工业故障诊断的 Agent 技术探索：将产线状态、报警信息、运行背景与专用工具连接起来，形成可重复、可解释的故障分析过程。"
    },
    problem: {
      en: "Fault diagnosis in industrial environments requires engineers to connect alarms, equipment status, production context, and past observations under time pressure. AI can help organize these clues, route each question to the right source, compare possible causes, and keep the diagnostic path visible instead of reducing the task to a one-off answer.",
      zh: "工业环境中的故障判断，往往要求工程师在有限时间内关联报警、设备状态、生产背景与历史观察。AI 的优势在于整理这些线索、将不同问题路由到合适的信息来源、比较可能原因，并持续呈现诊断路径，而不是只给出一次性的答案。"
    },
    solution: {
      en: "The solution explores an Agent workflow that plans the diagnosis, calls the appropriate industrial tools, reviews the collected evidence, and revises the route when information is incomplete. Memory keeps multi-turn context connected, while a visible execution record allows each conclusion and recommendation to be reviewed.",
      zh: "方案探索了一套 Agent 工作方式：先规划诊断步骤，再调用合适的工业工具收集信息，对证据进行复核，并在信息不足时调整诊断路线。记忆机制负责连接多轮上下文，可见的执行记录则让每项判断和建议都能被复核。"
    },
    keyFeatures: {
      en: [
        "Understand fault descriptions together with current production-line conditions.",
        "Collect equipment status, alarms, and relevant operating information.",
        "Send each diagnostic question to the most suitable information source or tool.",
        "Compare symptoms with possible fault causes and supporting evidence.",
        "Keep previous questions and observations connected during the diagnosis.",
        "Present likely causes, supporting clues, and recommended next actions."
      ],
      zh: [
        "结合当前产线状态理解故障描述。",
        "收集设备状态、报警与相关运行信息。",
        "将不同诊断问题交给最合适的信息来源或工具。",
        "对照故障现象、可能原因与支持证据。",
        "在诊断过程中持续关联之前的问题和观察。",
        "给出可能原因、判断依据与下一步建议。"
      ]
    },
    technicalHighlights: {
      en: [
        "Plan–Execute–Review/Replan workflow replaces one-shot model responses with staged diagnosis.",
        "Planner, Executor, Reviewer, and Orchestrator modules keep responsibilities separated.",
        "Function calling routes diagnostic tasks across multiple industrial tools.",
        "Structured semantic interfaces unify system state, alarms, and production context.",
        "Short-term, summary, and structured memory preserve continuity across diagnostic turns.",
        "Context continuation and coreference handling support follow-up questions without losing the fault context.",
        "Execution traces connect plans, tool calls, observations, reviews, and route revisions.",
        "Conveyor jams, sensor obstruction, and alarm-trigger logic provide repeatable manufacturing cases."
      ],
      zh: [
        "使用 Plan–Execute–Review/Replan 工作流，以分阶段诊断替代单次模型回答。",
        "Planner、Executor、Reviewer 与 Orchestrator 模块保持职责分离。",
        "通过 Function Calling 将诊断任务路由到多个工业工具。",
        "使用结构化语义接口统一表达系统状态、报警与生产背景。",
        "短期记忆、摘要记忆与结构化记忆保持多轮诊断的连续性。",
        "上下文延续与指代处理支持在不丢失故障背景的情况下继续追问。",
        "执行记录关联计划、工具调用、观察、复核与路线调整。",
        "传送带堵塞、传感器遮挡与报警触发逻辑构成可重复的制造场景。"
      ]
    },
    structureStyle: "agent-architecture",
    architecture: {
      input: {
        en: "Fault Query + Production Context",
        zh: "故障请求 + 生产背景"
      },
      orchestrator: {
        en: "Orchestrator",
        zh: "Orchestrator"
      },
      planner: {
        en: "Planner",
        zh: "Planner"
      },
      executor: {
        en: "Executor",
        zh: "Executor"
      },
      reviewer: {
        en: "Reviewer",
        zh: "Reviewer"
      },
      replan: {
        en: "Review + Replan Loop",
        zh: "复核 + 重规划回路"
      },
      tools: {
        en: "Industrial Semantic Tools",
        zh: "工业语义工具"
      },
      memory: {
        en: "Context Memory Layer",
        zh: "上下文记忆层"
      },
      output: {
        en: "Execution Trace + Diagnosis Output",
        zh: "执行记录 + 诊断输出"
      }
    },
    structure: {
      en: "Fault input and production context enter an Orchestrator, which coordinates Planner, Executor and Reviewer modules. A review and replanning loop works with industrial semantic tools and context memory before producing a traceable diagnosis output.",
      zh: "故障请求与生产背景进入 Orchestrator，由其协调 Planner、Executor 与 Reviewer；复核与重规划回路结合工业语义工具和上下文记忆，最终形成可追踪的诊断输出。"
    },
    result: {
      en: "The project shows how an industrial Agent can move beyond conversation and support a complete diagnostic path: organizing evidence, routing tools, comparing causes, preserving context, and making every recommendation reviewable. It provides a practical foundation for exploring explainable AI assistance in manufacturing fault analysis.",
      zh: "该项目说明工业 Agent 可以超越简单对话，支持一条完整的诊断路径：整理证据、路由工具、比较原因、保持上下文，并让每项建议都可复核。它为探索制造故障分析中的可解释 AI 辅助方式提供了实践基础。"
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
      en: "Synchronize PLC-controlled equipment states with Unity through OPC UA and REST, presenting the industrial control process as a complete digital chain that reproduces a production digital-twin workflow.",
      zh: "通过 OPC UA 与 REST 将 PLC 控制的设备状态同步到 Unity，让工业控制过程以完整连贯的数字形式呈现，复现生产数字孪生链路。"
    },
    summary: {
      en: "A compact industrial digital-twin system that connects PLC logic simulation, industrial communication, application services, and a Unity scene so equipment and logic state changes can be observed and understood across the complete data path.",
      zh: "这是一个简单的工业数字孪生系统，将 PLC 逻辑仿真、工业通信、应用服务与 Unity 场景连接起来，使设备与逻辑状态变化能够沿完整数据链路被观察和理解。"
    },
    problem: {
      en: "Control logic, communication services, and 3D visualization in industrial digitalization are often understood separately. Engineers have difficulty seeing how a PLC signal becomes an application state, how equipment changes pass through each software layer, and whether the digital scene remains consistent with control behavior.",
      zh: "工业系统数字化中的控制逻辑、通信服务与三维可视化经常被分开理解。工程人员很难直观看到一个 PLC 信号如何转化为应用状态、设备变化如何穿过各个软件层，以及数字场景是否始终与控制行为保持一致。"
    },
    solution: {
      en: "The system exposes the inputs and outputs of simulated PLC states through OPC UA, organizes equipment data through a REST service, and maps it to corresponding objects and behaviors in Unity. Unity interactions can change interface variables, which are transmitted through OPC UA to a PLC simulated with C# scripts for logic processing. The results return as Unity object behaviors, keeping the entire path clear and traceable.",
      zh: "系统通过 OPC UA 提供 PLC 仿真状态的输入输出，由 REST 服务整理设备数据，再将其映射到 Unity 中对应的对象与行为。Unity 交互可改变接口变量，经 OPC UA 与 C# 脚本模拟的 PLC 完成数据传输与逻辑运算，再将结果返回为 Unity 对象行为，使整个链路清晰可追溯。"
    },
    keyFeatures: {
      en: [
        "Simulate equipment and control states to verify that the logic behaves correctly.",
        "Transfer selected PLC data through a standard industrial connection.",
        "Organize equipment information for use by software applications.",
        "Reflect machine states and process changes in a Unity scene.",
        "Observe the same state across control, service, and visualization layers."
      ],
      zh: [
        "模拟设备与控制状态，验证逻辑正确性。",
        "通过标准工业连接传递所需的 PLC 数据。",
        "将设备信息整理为软件应用可以直接使用的内容。",
        "在 Unity 场景中同步呈现设备状态与过程变化。",
        "从控制、服务到可视化层观察同一份状态。"
      ]
    },
    technicalHighlights: {
      en: [
        "OPC UA exposes simulated PLC variables through a standardized industrial data model.",
        "The REST layer separates industrial protocol handling from application-facing data access.",
        "A shared state mapping connects PLC variables, service data, and Unity object behavior.",
        "Unity components translate equipment states into visible motion, status, and process changes.",
        "Layered responsibilities make signal paths easier to inspect and integration issues easier to locate.",
        "The complete PLC → OPC UA → REST → Unity path provides a reusable reference for digital-twin integration."
      ],
      zh: [
        "OPC UA 通过标准化工业数据模型提供 PLC 仿真变量。",
        "REST 服务层将工业协议处理与面向应用的数据访问分离。",
        "统一状态映射连接 PLC 变量、服务数据与 Unity 对象行为。",
        "Unity 组件将设备状态转换为可见的运动、状态与过程变化。",
        "清晰的分层职责使信号路径更容易检查，也便于定位集成问题。",
        "完整的 PLC → OPC UA → REST → Unity 链路可作为数字孪生集成的复用参考。"
      ]
    },
    structureStyle: "horizontal",
    structure: {
      en: "Control path: PLC Logic Simulation → OPC UA Data Layer → REST Application Service → Unity State Mapping → Digital Twin Interface\nInteraction path: Digital Twin Interface → Unity Interaction Variables → REST Application Service → OPC UA Data Layer → PLC Logic Simulation → State Feedback",
      zh: "控制链路：PLC 逻辑仿真 → OPC UA 数据层 → REST 应用服务 → Unity 状态映射 → 数字孪生界面\n交互链路：数字孪生界面 → Unity 交互变量 → REST 应用服务 → OPC UA 数据层 → PLC 逻辑仿真 → 状态反馈"
    },
    result: {
      en: "The system organizes the complete path from industrial control logic to a visual digital scene as one coherent model, providing a compact reproduction of the framework used in current digital-twin systems.",
      zh: "该系统将工业控制逻辑到可视化数字场景的完整路径组织成一个连贯模型，简单复现了现行数字孪生的框架结构。"
    },
    technologies: ["PLC", "OPC UA", "REST API", "Unity", "C#", "Digital Twin", "Simulation"],
    video: {
      type: "embed",
      url: "assets/videos/DemoVideoDigitalTwin.mp4"
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
      en: "Digital Twin Communication Plugin Integration",
      zh: "数字孪生通信插件集成"
    },
    cover: "assets/images/plugin-system-decoupling-cover.png",
    projectType: {
      en: "BMW Group · Enterprise Project",
      zh: "企业项目 · BMW Group"
    },
    technicalType: {
      en: "Technical Project",
      zh: "技术项目"
    },
    pitch: {
      en: "Integrate external-system communication into a digital-twin environment through a plugin, reducing additional software dependencies and improving model reuse across projects.",
      zh: "通过插件将外部系统通信能力集成到数字孪生环境中，减少额外软件依赖，并提升模型在不同项目中的复用能力。"
    },
    summary: {
      en: "A digital-twin integration project that packages external-system communication as a reusable plugin within the simulation environment, reducing additional dependencies while preserving the required system-integration capability.",
      zh: "这是一个数字孪生系统集成项目，通过可复用插件在仿真环境中封装外部系统通信能力，在保留系统集成能力的同时减少额外依赖。"
    },
    problem: {
      en: "The existing digital-twin workflow relied on additional software for communication with external systems. This increased configuration and maintenance effort, added cost, and made digital models harder to reuse across projects.",
      zh: "原有数字孪生工作流需要依赖额外软件与外部系统通信，增加了配置、维护与成本负担，也限制了数字模型在不同项目中的复用效率。"
    },
    solution: {
      en: "The work covered analysis of the existing communication requirement, plugin-architecture design, development, and integration into the digital simulation environment. Encapsulating the required communication capability in the plugin reduced coupling between digital-twin models and the external implementation, supporting reuse across production-line projects and digital models.",
      zh: "项目工作覆盖现有通信需求分析、插件架构设计、开发与数字仿真环境集成。通过插件封装所需的通信能力，降低数字孪生模型与外部实现之间的耦合，并支持该能力在不同产线项目与数字模型中复用。"
    },
    keyFeatures: {
      en: [
        "Package external-system communication as a plugin for the digital-twin environment.",
        "Separate communication integration from project-specific digital-model logic.",
        "Reuse the communication capability across production-line projects and digital models.",
        "Deliver IT/OT integration with fewer additional software dependencies."
      ],
      zh: [
        "将外部系统通信能力封装为数字孪生环境中的插件。",
        "把通信集成与项目特定的数字模型逻辑分离。",
        "在不同产线项目与数字模型中复用通信能力。",
        "以更少的额外软件依赖完成 IT/OT 系统集成。"
      ]
    },
    technicalHighlights: {
      en: [
        "Analyzed the existing communication requirement and designed the plugin architecture.",
        "Developed and integrated the communication plugin within the digital simulation software.",
        "Reduced coupling between digital-twin models and the external communication implementation.",
        "Designed the integration for reuse across different models and production-line projects."
      ],
      zh: [
        "分析现有通信需求并完成插件架构设计。",
        "开发通信插件并完成与数字仿真软件的集成。",
        "降低数字孪生模型与外部通信实现之间的耦合。",
        "面向不同模型与产线项目设计可复用的集成方式。"
      ]
    },
    result: {
      en: "The solution reduced reliance on additional software and its associated costs, while improving reuse across multiple production-line projects and related digital-twin models.",
      zh: "方案减少了额外软件依赖及相关成本，并提升了通信能力在多个产线项目与相关数字孪生模型中的复用效率。"
    },
    technologies: ["Plugin Architecture", "System Integration", "Industrial Communication", "IT/OT Integration"]
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
      en: "TUM · Personal Project",
      zh: "个人项目 · TUM"
    },
    technicalType: {
      en: "Extended Technical Project",
      zh: "技术延展项目"
    },
    pitch: {
      en: "Use multimodal cues to guide users through complex spaces and toward their destination.",
      zh: "多模态线索引导用户穿越复杂空间，寻找目标。"
    },
    summary: {
      en: "A 3D navigation and interaction system that combines visual, auditory, and environmental interaction cues to improve immersion and perceptual quality in complex scenes.",
      zh: "这是一个结合视觉、听觉和环境交互线索的三维导航与交互系统，提升用户在复杂场景中的沉浸体验和感知质感。"
    },
    problem: {
      en: "Traditional navigation in 3D scenes often relies on map-based prompts. This increases cognitive load and can disrupt the experience in scenes designed for immersion.",
      zh: "传统三维场景中的导航方式往往依赖地图侧的提示，这会增加认知负担，对于需要沉浸体验的场景会破坏体验感。"
    },
    solution: {
      en: "The navigation system combines scene interaction with changing streetlight intensity, footstep echoes, and firefly cues, helping users move progressively closer to the target.",
      zh: "导航系统结合场景交互，让路灯光强变化、脚步回音与萤火虫引导用户，帮助用户逐步接近目标。"
    },
    keyFeatures: {
      en: [
        "Guide users with light, sound, and environmental changes instead of arrows alone.",
        "Adapt the guidance to the user's current position and target location.",
        "Use a human-factors evaluation framework to verify whether guidance reduces workload and improves spatial understanding."
      ],
      zh: [
        "使用光线、声音和环境变化引导用户，而不只依赖箭头。",
        "根据用户当前位置与目标位置调整引导方式。",
        "人因学评估体系验证引导方式是否降低操作负担并改善空间理解。"
      ]
    },
    technicalHighlights: {
      en: [
        "Navigation state combines current position, predicted position, and target point.",
        "A dynamic triangular navigation region controls when environmental feedback is activated.",
        "Streetlight intensity, footstep echo, and firefly guidance form complementary visual and auditory channels.",
        "User evaluation and NASA-TLX analysis measure satisfaction and cognitive load."
      ],
      zh: [
        "导航状态结合用户当前位置、预测位置与目标点。",
        "动态三角导航区域控制环境反馈的触发时机。",
        "路灯光强、脚步回音与萤火虫引导构成互补的视觉和听觉通道。",
        "通过用户评价与 NASA-TLX 分析衡量满意度和认知负担。"
      ]
    },
    structureStyle: "horizontal",
    structure: {
      en: "Algorithm: Actual User Position + Target Point + Environmental Trigger Point → Triangle Area Evaluation → Determine Interaction Trigger Direction\nInteraction: User Movement Direction + Next Action → Select Environmental Node → Light / Sound / Environmental Feedback",
      zh: "算法部分：用户实际位置 + 目标点 + 环境触发点 → 三角形面积判断 → 确定交互触发方向\n交互部分：用户移动方向 + 下一步行为 → 选择环境节点 → 光线 / 声音 / 环境反馈"
    },
    result: {
      en: "The project improved user satisfaction by 30%, reduced cognitive load, and demonstrated that multimodal guidance can outperform conventional map guidance in specific scenarios.",
      zh: "该项目将用户满意度提升了 30%，降低了认知负担，并验证了多模态引导对比传统地图指引在特定场景的更优表现。"
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
      en: "ZF Group · Enterprise Project",
      zh: "企业项目 · ZF Group"
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
      en: "A scheduling model based on weighted matrix logic that automatically generates production plans for customized product requirements.",
      zh: "这是一个基于加权矩阵逻辑的调度模型，针对客制化产品需求完成生产计划的自动排班。"
    },
    problem: {
      en: "Production planning had to manage the conflict between standardized throughput and customized order requirements, but existing planning methods lacked a structured optimization model.",
      zh: "生产计划需要同时兼顾标准化吞吐效率和客制化订单要求，但现有排产方式缺乏结构化的优化模型。"
    },
    solution: {
      en: "To resolve the conflict between the remaining workload of different orders and limited working hours, the model converts the production state into a remaining-workload matrix and a working-time distribution matrix. Weights then adjust the priority of customized demand before the model generates the corresponding production schedule.",
      zh: "面对不同订单剩余工作量与有限工时之间的冲突，模型将生产状态转化为剩余工作量矩阵与工时分布矩阵，再通过权重调整客制化需求的优先级，最终生成对应的生产调度结果。"
    },
    keyFeatures: {
      en: [
        "Represent the remaining work for each production task.",
        "Describe how available working time can be distributed.",
        "Adjust priorities when customized orders require different treatment.",
        "Generate a scheduling result from the combined production conditions."
      ],
      zh: [
        "表示每项生产任务尚未完成的工作量。",
        "描述可用工时应当如何分配。",
        "在客制化订单出现时调整生产优先级。",
        "根据组合后的生产条件生成调度结果。"
      ]
    },
    technicalHighlights: {
      en: [
        "A remaining-workload matrix represents the current production state.",
        "A workload-distribution matrix models available capacity allocation.",
        "A configurable weight strategy converts customization constraints into scheduling priorities.",
        "MATLAB provides the calculation environment for the initial scheduling model."
      ],
      zh: [
        "使用剩余工作量矩阵表示当前生产状态。",
        "使用工时分布矩阵建模可分配产能。",
        "可调整的权重策略将客制化约束转化为调度优先级。",
        "通过 MATLAB 实现初始调度模型与计算过程。"
      ]
    },
    result: {
      en: "The model provides a structured method for balancing efficiency and customization, validating an approach that turns scheduling decisions from experience-based judgment into computable logic.",
      zh: "该模型为效率与客制化之间的平衡提供了结构化方法，验证了调度决策从经验判断转化为可计算逻辑的方案。"
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
      en: "Esquel Group · Enterprise Project",
      zh: "企业项目 · 溢达集团"
    },
    technicalType: {
      en: "Extended Technical Project",
      zh: "技术延展项目"
    },
    pitch: {
      en: "Optimize lean production for a button manufacturing line.",
      zh: "纽扣产线的精益生产方案优化。"
    },
    summary: {
      en: "A process optimization project that uses value stream mapping to identify bottlenecks and non-value-added steps in button manufacturing, then applies established industrial-engineering methods to improve process layout and production efficiency.",
      zh: "这是一个流程优化项目，通过价值流图分析识别纽扣制造流程中的瓶颈和非增值步骤，并使用经典工业工程方法优化流程布局，提高生产效率。"
    },
    problem: {
      en: "The button manufacturing process contained workflow waste, and actual production efficiency diverged from the overall capacity plan. Industrial-engineering methods were needed to identify bottlenecks and improve efficiency.",
      zh: "纽扣生产制造过程中存在流程浪费，实际生产效率与整体产能计划出现偏差，需要结合工业工程方法识别瓶颈并提高生产效率。"
    },
    solution: {
      en: "VSM was used to map the production process and locate problem points and bottlenecks. Video analysis and standard work-cell analysis then informed an optimization proposal for equipment layout and workflow.",
      zh: "通过 VSM 梳理生产流程并定位问题节点与瓶颈，结合视频分析与标准工作单元分析，形成设备布局与工作流程的优化方案。"
    },
    keyFeatures: {
      en: [
        "Map the complete production process with VSM and identify bottlenecks.",
        "Break down the actual production process through video analysis.",
        "Use standard work-cell analysis to examine specific operations.",
        "Optimize equipment layout and workflow based on the findings."
      ],
      zh: [
        "通过 VSM 梳理完整生产流程并识别瓶颈。",
        "通过视频分析拆解实际生产过程。",
        "使用标准工作单元分析具体作业环节。",
        "根据分析结果优化设备布局与工作流程。"
      ]
    },
    technicalHighlights: {
      en: [
        "Value stream mapping identifies bottlenecks and waste across the end-to-end production process.",
        "Video analysis reveals additional efficiency issues in actual operations.",
        "Standard work-cell analysis breaks down and compares specific production activities.",
        "The findings are translated into equipment-layout and workflow optimization proposals."
      ],
      zh: [
        "使用价值流图定位端到端生产流程中的瓶颈与浪费。",
        "结合视频分析进一步识别实际作业过程中的效率问题。",
        "使用标准工作单元分析拆解并比较具体生产作业。",
        "将分析结果转化为设备布局与工作流程优化方案。"
      ]
    },
    result: {
      en: "The optimization proposal improved production efficiency, shifted the original bottleneck away from the critical production stage, and improved the capacity performance of the overall process.",
      zh: "优化方案提升了生产效率，并将原有瓶颈从关键生产节点转移，改善了整体流程的产能表现。"
    },
    technologies: ["Lean", "Value Stream Mapping", "Video Analysis", "Standard Work", "Process Analysis", "Industrial Engineering"]
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
