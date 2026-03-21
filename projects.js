const projectsData = [
  {
    title: {
      en: "Industrial Fault Simulation & Training System",
      zh: "工业故障仿真与培训系统"
    },
    projectType: {
      en: "Industry Project",
      zh: "企业项目"
    },
    technicalType: {
      en: "Technical Project",
      zh: "技术项目"
    },
    pitch: {
      en: "Turn unpredictable industrial failures into controllable digital training scenarios.",
      zh: "把不可控的工业故障转化为可控、可复现的数字化训练场景。"
    },
    summary: {
      en: "A multi-layer training system for simulating industrial faults through software, allowing troubleshooting capabilities to be trained without relying on real equipment or accidental site failures.",
      zh: "这是一个面向工业故障排除训练的多层级仿真系统，通过纯软件方式模拟异常场景，使培训不再依赖真实设备或现场偶发故障。"
    },
    problem: {
      en: "Industrial troubleshooting training was expensive, risky, and difficult to scale because it depended on real hardware and non-reproducible failures.",
      zh: "工业故障排除培训长期依赖真实硬件和不可稳定复现的故障，导致培训成本高、风险大，也难以规模化。"
    },
    solution: {
      en: "I designed a multi-layer fault injection system that could trigger abnormal conditions through PLC variables, simulation object properties, and HMI interactions, making fault scenarios testable and reusable.",
      zh: "我设计了一套多层级故障注入系统，通过 PLC 变量、仿真对象属性和 HMI 交互层主动触发异常状态，使故障场景变得可测试、可复用。"
    },
    highlights: {
      en: [
        "Injected faults across signal level, simulation object level, and HMI interaction level.",
        "Used an interface layer to bridge simulation runtime, PLCSim, and OPC UA-based HMI control.",
        "Built scenario-based fault logic so training could move from passive troubleshooting to deliberate validation."
      ],
      zh: [
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
    result: {
      en: "The system enabled 200+ fault scenarios, supported 1000+ training users, and improved troubleshooting capability by 25% through scalable digital training.",
      zh: "该系统支持 200+ 故障场景，覆盖 1000+ 培训用户，并通过可规模化的数字训练将故障排除能力提升了 25%。"
    },
    technologies: ["C#", ".NET", "PLCSim", "OPC UA", "Fault Injection", "Simulation", "HMI"]
  },

  {
    title: {
      en: "Plugin-based System Decoupling",
      zh: "基于插件的系统解耦"
    },
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
      en: "Personal Project",
      zh: "个人项目"
    },
    technicalType: {
      en: "Technical Project",
      zh: "技术项目"
    },
    pitch: {
      en: "Turn human motion into measurable metrics and corrective feedback.",
      zh: "把人体动作转化为可量化的指标与可执行的纠正反馈。"
    },
    summary: {
      en: "A skeleton-based motion analysis system that compares user movement against expert references, computes multi-dimensional scores, and generates joint-level improvement feedback.",
      zh: "这是一个基于骨架数据的人体动作分析系统，通过将用户动作与专业标准动作对比，生成多维评分，并输出关节级的改进反馈。"
    },
    problem: {
      en: "Traditional motion evaluation relied heavily on expert observation, making it difficult to standardize, scale, and give precise feedback on where a user should improve.",
      zh: "传统动作评估高度依赖专业人员观察，难以标准化、规模化，也很难准确指出用户应当在哪个关节或动作阶段改进。"
    },
    solution: {
      en: "I built a vision-based evaluation pipeline using supplier-provided skeleton models to extract motion features, compare them against expert reference actions, and translate the results into multi-dimensional scoring and intuitive user feedback.",
      zh: "我构建了一条基于视觉的人体动作评估流程，利用供应商提供的骨架模型提取动作特征，再与专业标准动作进行对比，并将结果转化为多维评分与直观反馈。"
    },
    highlights: {
      en: [
        "Processed skeleton-based motion data at around 30 fps.",
        "Designed custom metrics including joint angles, angle change rate, and joint acceleration.",
        "Compared user motion against expert reference actions to build a scoring framework.",
        "Generated multi-dimensional feedback for shoulder, elbow, wrist, waist, knee, and ankle.",
        "Used backend charts for analysis and red / yellow / green indicators for user-facing feedback."
      ],
      zh: [
        "以约 30 fps 处理基于骨架的人体动作数据。",
        "设计了包含关节角度、角度变化速率和关节加速度在内的自定义指标。",
        "通过用户动作与专业标准动作对比建立评分框架。",
        "针对肩、肘、腕、腰、膝、踝等关键部位生成多维反馈。",
        "后台通过图表分析，面向用户则采用红 / 黄 / 绿颜色提示。"
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
      en: "The system established a quantifiable motion evaluation framework and enabled actionable feedback at joint level instead of generic coaching advice.",
      zh: "该系统建立了可量化的人体动作评估框架，使反馈能够精确到关节层级，而不再停留在笼统的训练建议。"
    },
    technologies: ["Computer Vision", "Skeleton Model", "Motion Analysis", "Feature Engineering", "Scoring Model", "Feedback Design"]
  },

  {
    title: {
      en: "Multimodal 3D Navigation System",
      zh: "多模态三维导航系统"
    },
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
  }
];
