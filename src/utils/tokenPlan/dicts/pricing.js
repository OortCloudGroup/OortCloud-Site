/* ==========================================================================
   zh 字典 · 定价页（pricing.html）
   ========================================================================== */
export default {
  hero: {
    title: '定价',
    sub: '两款产品，统一套餐。价格不含适用税费（含增值税及销售税）。',
    notice: 'OortCodex 1.0 发布：新用户免费领取 800 Credits →'
  },

  unifiedBadge: {
    tag: '统一套餐 · 一次订阅两款产品通用'
  },

  /* ---------- 分段切换（个人订阅 / 会员卡 同一位置，点击切换） ---------- */
  tabs: {
    kicker: '定价方案',
    aria: '定价方案切换',
    sub: '个人订阅',
    card: '会员卡',
    ent: '企业订阅'
  },

  /* ---------- 分区标题（随分段切换联动） ---------- */
  sections: {
    subscription: {
      kicker: '个人订阅',
      title: '个人订阅',
      sub: '按月订阅，Credits 每月刷新；一次订阅，两款产品通用。'
    },
    enterprise: {
      kicker: '企业订阅',
      title: '企业订阅',
      sub: '面向团队与组织的统一套餐，按 Credits 计量；支持在线购买，也可联系销售定制专属方案。'
    }
  },

  plans: {
    free: {
      title: 'Free',
      price: '¥0',
      per: '/月',
      tag: '免费适用于轻度使用',
      features: [
        '2 周试用，含 300 Credits',
        '限量代码补全与下一步编辑',
        '自带 API Key（BYOK）',
        'OortCodex 与 DSH 均可体验'
      ],
      btn: '免费下载'
    },
    pro: {
      title: 'Pro',
      price: '¥20',
      per: '/月',
      tag: '个人开发者的主力选择',
      flag: '最受欢迎',
      features: [
        'Free 套餐全部功能，外加',
        '{credits} Credits / 月（两款产品通用）',
        '1 个云端智能体席位（DSH）',
        '更高的对话与 Agent 请求额度',
        'Quest 模式与 Repo Wiki'
      ],
      btn: '立即订阅'
    },
    proPlus: {
      title: 'Pro+',
      price: '¥60',
      per: '/月',
      tag: '高强度开发与小型团队',
      features: [
        'Pro 套餐全部功能，并且',
        '{credits} Credits / 月（两款产品通用）',
        '3 个云端智能体席位（DSH）',
        'SSO · 角色 / 分组 · 成本中心',
        '新功能优先体验'
      ],
      btn: '立即订阅'
    },
    ultra: {
      title: 'Ultra',
      price: '¥200',
      per: '/月',
      tag: '专业团队与极客',
      features: [
        'Pro+ 套餐全部功能，并且',
        '{credits} Credits / 月（两款产品通用）',
        '10 个云端智能体席位（DSH）',
        '操作审计 · 企业私有市场',
        '抢先体验最新功能'
      ],
      btn: '立即订阅'
    },
    currentBadge: '当前订阅',
    upgradeOnly: '仅可升级',
    upgradeHint: '当前仅支持升级至更高等级套餐',
    loading: '正在查询可升级套餐…',
    loadFailed: '可升级套餐加载失败，请重试',
    retry: '重试',
    noUpgrades: '当前已是最高等级套餐',
    currentPlanLine: '当前套餐：{plan}'
  },

  creditPack: {
    title: 'Credit Pack · 加量包',
    sub: '追加 Credits，适用于 Pro / Pro+ / Ultra 订阅用户 · 两款产品通用',
    /* {price} {credits} 由服务端配置刷新 */
    rate: '{price}/ {credits} Credits · 进入公共钱包 · 无独立到期时间',
    qtyLabel: '购买数量',
    minusAria: '减少',
    plusAria: '增加',
    qtyAria: '购买数量',
    lineCredits: 'Credits 总量',
    linePacks: '数量',
    lineTotal: '总计',
    /* {q} 数量；{unit} 单包 Credits */
    packsValue: '{q} pack × {unit} Credits',
    packsValuePlural: '{q} packs × {unit} Credits',
    creditsValue: '{n} Credits',
    buy: '自选购买'
  },

  /* ---------- 企业订阅面板 ---------- */
  ent: {
    loading: '正在加载企业套餐…',
    loadFailed: '企业套餐加载失败，请重试',
    retry: '重试',
    buy: '立即购买',
    currentBadge: '当前订阅',
    unlimitedCredits: 'Credits 不限',
    creditsLine: '{credits} Credits / 席位 / 周期',
    pricePerSeat: '/ 席位',
    seatQuantity: '购买席位',
    minSeats: '最低购买 {seats} 个席位',
    totalPrice: '最低应付 {price}',
    noPaymentMethod: '暂无可用支付方式',
    validityLine: '有效期 {d} {unit}',
    durationUnit: { year: '年', month: '个月', day: '天', hour: '小时' },
    resourcePack: {
      sectionTitle: '资源包',
      loading: '正在加载共享资源包…',
      loadFailed: '企业资源包配置加载失败，请重试',
      badge: '适用于团队版 / 企业版',
      validity: '追加到当前企业共享额度池，到期时间不变',
      buy: '前往购买'
    },
    contactDesc: '需要私有化部署、专属区域或更高用量？我们提供企业定制方案。'
  },

  entPurchase: {
    metaTitle: '企业订阅购买 — OortCodex',
    metaDesc: '查看企业订阅套餐详情，选择席位并实时计算应付金额。',
    kicker: '企业订阅',
    title: '确认套餐与席位',
    sub: '选择团队所需席位，价格与共享 Credits 将实时更新。',
    back: '返回企业套餐',
    notFoundTitle: '未找到该企业套餐',
    notFoundDesc: '套餐可能已下架或链接无效，请返回企业订阅页面重新选择。',
    orderTitle: '购买信息',
    decreaseSeats: '减少席位',
    increaseSeats: '增加席位',
    unitPrice: '席位单价',
    seats: '购买席位',
    totalCredits: '共享 Credits',
    total: '应付总额',
    checkout: '立即支付',
    notice: '最终金额及权益以后端创建订单时的计算结果为准。'
  },

  taxNote: 'OortCodex 与 DSH For OortCloud Work 共用统一套餐，用量以 Credits 计量。价格不含适用税费（含增值税及适用销售税）。',

  enterprise: {
    title: '🌌 企业定制 · 原 DSH 星系版',
    desc: '无限智能体席位与 Credits 池 · 私有化部署 / 专属 OortCloud 区域 · 企业私有市场与操作审计 · SLA 保障与专属客户成功经理',
    btn: '联系销售'
  },

  compare: {
    title: '统一套餐功能对比',
    perMonth: '/月',
    groups: {
      usage: '用量与额度',
      coding: 'AI 编码（OortCodex）',
      governance: '团队治理与合规（DSH）',
      support: '支持'
    },
    rows: {
      monthlyCredits: '月度 Credits（两款产品通用）',
      seats: '云端智能体席位（DSH）',
      autonomous: '7×24 自主执行（最长 26h/任务）',
      completion: '代码补全与预测',
      chatAgent: '对话与 Agent · 多智能体专家模式',
      questWiki: 'Quest 模式（Spec 驱动）· Repo Wiki',
      dashboard: '统一账户与用量看板',
      sso: 'SSO · 角色 / 分组 · 成本中心',
      audit: '操作审计 · 企业私有市场',
      privateDeploy: '私有化部署 / 专属区域',
      supportLevel: '支持等级'
    },
    vals: {
      trial300: '300（试用）',
      limited: '限量试用',
      enterprise: '企业定制 · {link}',
      enterpriseLinkText: '联系销售',
      community: '社区',
      standard: '标准支持',
      priority: '优先支持',
      dedicated: '专属客户成功'
    }
  },

  faq: {
    kicker: '// FAQ',
    title: '常见问题',
    sub: '关于套餐与计费的常见疑问。',
    items: [
      {
        q: 'Pro 试用如何运作？',
        a: [
          '新用户首次登录 OortCodex 客户端（需最新版本；不支持虚拟机）即可获得一次性免费 2 周（14 天）Pro 试用，含 300 Credits 与全部 Pro 专属功能。',
          '试用到期后账户自动降级为 Free 套餐，未使用的试用 Credits 将被清空。若在到期前升级付费套餐，剩余试用 Credits 将自动转为 Credit Pack，保留原到期时间，分文不浪费。'
        ]
      },
      {
        q: 'Credits 用完了怎么办？',
        a: ['你可以随时升级到更高套餐，或购买 Credit Pack 加量包。若留在 Free 套餐，仍可使用基础模型（受每日/每月限额约束）。']
      },
      {
        q: '每月没用完的 Credits 会结转吗？',
        a: ['月度 Credits 在每个计费周期开始时刷新，上一周期未使用的 Credits 将过期，不会结转。Credit Pack 加量包则自购买起 1 个月内有效。']
      },
      {
        q: '支持哪些支付方式？',
        a: ['目前支持支付宝与微信扫码支付。在定价页选择套餐后，通过统一认证登录即可生成支付二维码，扫码完成支付后套餐权益自动发放。']
      },
      {
        q: '如何申请退款？',
        a: ['订阅后 24 小时内且未使用任何 Credits，可申请全额退款；过往计费周期的付款不可退款。请将账户与账单信息发送至 refund@oortcodex.com，退款将在 5–10 天内处理。']
      },
      {
        q: '两款产品的套餐如何通用？',
        a: [
          'OortCodex 与 DSH For OortCloud Work 使用统一定价套餐：一次订阅，Credits 与云端智能体席位在两款产品间通用，无需分别购买。',
          '需要私有化部署、专属 OortCloud 区域或更大规模席位？请联系销售获取企业定制方案。'
        ]
      }
    ]
  },

  cta: {
    title: '还有疑问？我们来聊',
    sub: '销售与工程团队随时在线，为你匹配最合适的套餐。',
    contact: '联系销售',
    backHome: '返回首页'
  }
}
