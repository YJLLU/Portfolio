const PROJECTS = {
  "project-1": {
    id: "project-1",
    tag: "诊断设备",
    category: "diagnostic",
    title: "便携式心电图仪",
    summary: "家用 12 导联 ECG · 一键测量 · 云端报告",
    thumb: "images/project-1.jpg",
    role: "Lead Industrial Designer",
    year: "2024",
    client: "Confidential MedTech",
    overview:
      "面向家庭慢病管理场景，重新设计电极佩戴流程与机身握持形态，让非专业用户也能可靠完成 12 导联测量。",
    challenge:
      "现有家用 ECG 电极佩戴步骤多、失败率高，老年用户常因贴附错误导致测量无效。",
    approach: [
      "访谈心内科医生与 12 名居家患者，绘制佩戴旅程图",
      "设计磁吸电极仓与分步引导 UI，降低认知负荷",
      "迭代 3 轮外观模型，验证握持与桌面摆放稳定性",
    ],
    outcome:
      "Formative 测试显示首次测量成功率从 71% 提升至 94%；外壳耐醇擦拭 PC/ABS 满足家用消毒要求。",
    gallery: [
      { src: "images/project-1.jpg", caption: "产品主视图" },
      { src: "images/project-1-sketch.jpg", caption: "早期概念草图" },
      { src: "images/project-1-ui.jpg", caption: "引导界面" },
    ],
  },
  "project-2": {
    id: "project-2",
    tag: "监护设备",
    category: "monitoring",
    title: "模块化床旁监护仪",
    summary: "ICU 场景 · 可堆叠模块 · 防误触界面",
    thumb: "images/project-2.jpg",
    role: "Senior Designer",
    year: "2023",
    client: "Hospital Equipment OEM",
    overview:
      "为 ICU 护士站设计可扩展监护模块系统，通过物理与视觉编码降低换床与堆叠误接风险。",
    challenge:
      "多床位轮换时，模块接口相似、线缆杂乱，护士夜间操作易接错通道。",
    approach: [
      "跟台观察 8 小时 ICU 换班流程",
      "定义色块 + 触觉定位的模块识别系统",
      "大触控区与手套模式 UI 原型测试",
    ],
    outcome:
      "误接率下降 40%；通过 formative 可用性测试，支持注册文档中的使用场景说明。",
    gallery: [
      { src: "images/project-2.jpg", caption: "模块化堆叠形态" },
      { src: "images/project-2-detail.jpg", caption: "接口与色标系统" },
    ],
  },
  "project-3": {
    id: "project-3",
    tag: "可穿戴",
    category: "wearable",
    title: "连续血糖监测贴片",
    summary: "14 天佩戴 · 防水 IPX7 · 低剖面造型",
    thumb: "images/project-3.jpg",
    role: "Industrial Designer",
    year: "2024",
    client: "Diabetes Care Startup",
    overview:
      "优化 CGM 贴片形态与 CMF，提升长期佩戴舒适度，降低患者对「医疗设备感」的心理负担。",
    challenge:
      "传感器仓凸起易勾挂衣物；电子仓与胶贴区域视觉混淆，影响用户信任感。",
    approach: [
      "佩戴舒适度问卷与 7 天日记研究",
      "降低边缘高度、优化圆角与亲肤分区",
      "APP 佩戴倒计时与更换提醒联动",
    ],
    outcome:
      "14 天脱落率降低 18%；IPX7 结构通过可靠性验证。",
    gallery: [
      { src: "images/project-3.jpg", caption: "贴片佩戴状态" },
      { src: "images/project-3-exploded.jpg", caption: "结构爆炸图" },
    ],
  },
  "project-4": {
    id: "project-4",
    tag: "诊断设备",
    category: "diagnostic",
    title: "无线手持超声探头",
    summary: "急诊科 POC · 人体工学握把 · 消毒友好材质",
    thumb: "images/project-4.jpg",
    role: "Lead Designer",
    year: "2022",
    client: "Imaging Device Co.",
    overview:
      "针对急诊单手操作与快速消毒需求，重新定义探头握持形态与外壳工艺。",
    challenge:
      "传统探头沟槽难清洁；长时间扫描时手腕疲劳明显。",
    approach: [
      "急诊科影子观察与握持压力测试",
      "18° 倾角握把 + 拇指热区按键布局",
      "无沟槽外壳与快拆电池仓结构",
    ],
    outcome:
      "消毒流程时间缩短 25%；握持疲劳评分显著下降。",
    gallery: [
      { src: "images/project-4.jpg", caption: "手持使用场景" },
      { src: "images/project-4-cmf.jpg", caption: "CMF 与材质" },
    ],
  },
  "project-5": {
    id: "project-5",
    tag: "监护设备",
    category: "monitoring",
    title: "智能输液泵",
    summary: "剂量安全联锁 · 大按钮触控 · 夜间模式 UI",
    thumb: "images/project-5.jpg",
    role: "UX + Industrial Design",
    year: "2023",
    client: "Infusion Systems Ltd.",
    overview:
      "与临床团队共创剂量确认交互，降低误触与配药错误风险。",
    challenge:
      "夜间低光环境下屏幕可读性差；剂量确认步骤繁琐。",
    approach: [
      "护士焦点小组与任务分析",
      "双重物理确认键 + 高对比度夜间 UI",
      "机身色带区分药物通道",
    ],
    outcome:
      "符合 IEC 62366 可读性建议；formative 测试零严重使用错误。",
    gallery: [
      { src: "images/project-5.jpg", caption: "整机造型" },
      { src: "images/project-5-ui.jpg", caption: "夜间模式界面" },
    ],
  },
  "project-6": {
    id: "project-6",
    tag: "可穿戴 / 家用",
    category: "wearable",
    title: "家用便携式呼吸机",
    summary: "静音结构 · 旅行收纳 · 简化设置向导",
    thumb: "images/project-6.jpg",
    role: "Industrial Designer",
    year: "2024",
    client: "Sleep Health Brand",
    overview:
      "将传统 CPAP 形态转化为家居友好的产品体验，降低首次使用门槛。",
    challenge:
      "设备噪音与「医疗设备」外观影响卧室使用意愿；设置步骤过多。",
    approach: [
      "用户居家访谈与竞品拆解",
      "圆柱家居化造型与气流降噪结构",
      "4 步设置向导与旅行收纳盒设计",
    ],
    outcome:
      "运行噪音 26 dB；首次设置步骤从 12 步减至 4 步。",
    gallery: [
      { src: "images/project-6.jpg", caption: "卧室场景" },
      { src: "images/project-6-case.jpg", caption: "旅行收纳盒" },
    ],
  },
};
