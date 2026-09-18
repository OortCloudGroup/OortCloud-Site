/* ==========================================================================
   zh 字典 · 支付弹窗与购买流程（#pay-modal + subscription.js）
   --------------------------------------------------------------------------
   - 弹窗结构文案（账单视图 / 成功视图 / 过期视图）
   - 支付方式元信息（订阅下单 / 加量包充值两套提示）
   - 运行态状态文案（创建订单 / 等待支付 / 轮询 / 倒计时）
   - 占位符语法：{name}
   ========================================================================== */
export default {
  /* ---------- 弹窗骨架 ---------- */
  modal: {
    ariaLabel: '订阅支付',
    closeAria: '关闭',
    titleSubscribe: '确认订阅',
    titlePack: '确认购买',
    titleCard: '购买会员卡',
    titleEnterprise: '确认企业订阅',
    titleEnterpriseAddon: '追加企业席位',
    titleEnterprisePack: '购买共享资源包',
    dash: '—',
    rowPlan: '套餐',
    rowDesc: '说明',
    rowAmount: '应付金额',
    qtyLabel: '购买数量',
    qtyInputAria: '购买数量',
    cardQtyLabel: '购买张数',
    cardQtyInputAria: '会员卡购买张数',
    enterpriseQtyLabel: '购买席位',
    enterpriseQtyInputAria: '企业订阅购买席位数',
    enterpriseAddonQtyLabel: '追加席位',
    enterpriseAddonQtyInputAria: '企业订阅追加席位数',
    enterprisePackQtyLabel: '购买数量',
    enterprisePackQtyInputAria: '企业共享资源包购买数量',
    stepPrevAria: '上一档',
    stepNextAria: '下一档',
    methodLabel: '支付方式',
    fine: '请在二维码有效期内完成扫码支付；如需更换支付方式，点击上方按钮即可切换。'
  },

  /* ---------- 支付方式 ---------- */
  methods: {
    wechat: '微信',
    alipay: '支付宝',
    disabledTitle: '该套餐暂不支持此支付方式'
  },

  /* ---------- 二维码区 ---------- */
  qr: {
    tipWechat: '请使用微信「扫一扫」完成支付',
    tipAlipay: '请使用支付宝「扫一扫」完成支付',
    tipWechatTopup: '请使用微信「扫一扫」完成充值支付',
    tipAlipayTopup: '请使用支付宝「扫一扫」完成充值支付',
    tipWechatCard: '请使用微信「扫一扫」完成会员卡支付',
    tipAlipayCard: '请使用支付宝「扫一扫」完成会员卡支付',
    tipWechatEnterprise: '请使用微信「扫一扫」完成企业订阅支付',
    tipAlipayEnterprise: '请使用支付宝「扫一扫」完成企业订阅支付',
    tipWechatEnterpriseAddon: '请使用微信「扫一扫」完成追加席位支付',
    tipAlipayEnterpriseAddon: '请使用支付宝「扫一扫」完成追加席位支付',
    tipWechatEnterprisePack: '请使用微信「扫一扫」完成共享资源包支付',
    tipAlipayEnterprisePack: '请使用支付宝「扫一扫」完成共享资源包支付',
    loading: '正在生成收款码…',
    imgAlt: '支付二维码',
    fallbackDesc: '二维码组件加载失败，请复制支付链接到浏览器打开：',
    copyLink: '复制支付链接',
    openLink: '在新窗口打开支付链接',
    linkCopied: '支付链接已复制'
  },

  /* ---------- 状态文案 ---------- */
  status: {
    syncingPack: '正在同步加量包配置…',
    syncingPlan: '正在同步套餐信息…',
    creating: '正在创建订单…',
    waiting: '等待支付…',
    countdown: '二维码剩余有效时间 {t}',
    pollAuthExpired: '登录已过期，请关闭弹窗重新登录后再试',
    pollFailed: '订单状态查询失败；若已完成支付请耐心等待到账，否则请重新下单'
  },

  /* ---------- 加量包数量区 ---------- */
  pack: {
    /* 单价行：¥200 / 包 · 5,000 Credits / 包 · 1 元 = 25 Credits */
    unitLine: '{price} / 包 · {credits} Credits / 包 · 1 元 = {rate} Credits',
    /* 说明文案：{credits} Credits · 进入公共钱包 · 无独立到期时间 */
    desc: '{credits} Credits · 进入公共钱包 · 无独立到期时间',
    descFallback: 'Credits 加量包 · 进入公共钱包 · 无独立到期时间',
    /* 本地兜底标题（接口失败时） */
    title: 'Credit Pack · 加量包'
  },

  /* ---------- 会员卡数量区 ----------
     契约：金额由后端按 price_amount_cny × quantity 计算，前端不试算。 */
  card: {
    /* 单价行：¥59 / 张 · 2,000 Credits / 张 */
    unitLine: '{price} / 张 · {credits} Credits / 张',
    /* 说明文案：合计 {credits} Credits · 生成后 90 天内有效 · 每张限兑一次 */
    desc: '合计 {credits} Credits · 生成后 90 天内有效 · 每张限兑一次',
    descFallback: '会员卡 · 生成后 90 天内有效 · 每张限兑一次',
    /* 本地兜底标题（商品缺 title 时） */
    title: '会员卡'
  },

  enterprise: {
    unitLine: '{price} / 席位 · {credits} Credits / 席位 / 周期',
    desc: '{seats} 个席位 · 共享额度合计 {credits} Credits'
  },

  enterpriseAddon: {
    unitLine: '按当前订阅剩余有效期折算金额与 Credits',
    desc: '追加 {seats} 个席位 · 付款后立即生效 · 原到期时间不变'
  },

  enterprisePack: {
    unitLine: '{price} / 包 · {credits} Credits / 包',
    desc: '合计 {credits} Credits · 追加到当前企业共享额度池'
  },

  /* ---------- 套餐描述（订阅卡片 / 弹窗说明，来自服务端字段拼装） ---------- */
  planDesc: {
    unlimited: '不限额度',
    creditsSuffix: ' Credits',
    /* 兜底套餐描述后缀（后端不可达时，FALLBACK_PLANS 使用） */
    seatsSuffix: ' / 月 · {seats} 个云端智能体席位',
    resetPrefix: '额度',
    reset: {
      never: '永不过期',
      daily: '每日重置',
      weekly: '每周重置',
      monthly: '每月重置',
      custom: '自定义周期重置'
    },
    validityPrefix: '有效期',
    unit: {
      year: '年',
      month: '月',
      day: '日',
      hour: '小时',
      custom: '自定义'
    }
  },

  /* ---------- 错误提示（弹窗内） ---------- */
  errors: {
    incompletePlan: '订单信息不完整，请关闭后重新选择套餐',
    noMethod: '当前未启用可用的扫码支付方式，请稍后再试',
    qrMissing: '下单失败：服务端未返回支付二维码或订单号',
    createFailed: '创建订单失败，请稍后重试',
    planIdMissing: '未获取到有效的套餐编号（套餐服务暂不可达），请稍后重试'
  },

  /* ---------- 成功视图 ---------- */
  success: {
    orb: '🚀',
    title: '支付成功！',
    msgSubscribe: '套餐权益已发放，感谢订阅 OortCodex。',
    msgPack: '本次充值获得 {credits} Credits，已计入公共钱包。',
    msgCard: '已生成 {count} 张会员卡，可在「账户中心 → 我的会员卡」查看兑换码。',
    msgEnterprise: '企业订阅权益与共享额度已发放。',
    msgEnterpriseAddon: '已追加 {seats} 个企业席位及对应共享 Credits。',
    msgEnterprisePack: '共享资源包已到账，获得 {credits} Credits。',
    done: '开始探索',
    manageEnterprise: '管理企业订阅'
  },

  /* ---------- 过期视图 ---------- */
  expired: {
    orb: '⏰',
    title: '订单未支付',
    msgQr: '二维码已过期，请重新下单。',
    msgOrder: '订单已失效，请重新下单。',
    retry: '重新下单'
  },

  /* ---------- 流程 toast（订阅 / 购买入口） ---------- */
  flow: {
    modalNotReady: '支付组件未就绪，请刷新页面后重试',
    authMissing: '登录组件未加载，请刷新页面',
    needLogin: '请先完成登录，登录后将自动继续',
    openModalFailed: '打开支付弹窗失败，请刷新页面后重试',
    planNotFound: '未找到「{selector}」对应的套餐，请稍后重试',
    noPurchasable: '暂未获取到可购买的套餐，请稍后重试',
    noPending: '未找到待支付的套餐，请选择套餐',
    authExpired: '登录已过期，请重新登录',
    paySuccessSub: '支付成功，套餐已生效',
    paySuccessPack: '支付成功，Credits 已到账',
    paySuccessPackCredits: '支付成功，{credits} Credits 已到账',
    paySuccessCard: '支付成功，已生成 {count} 张会员卡',
    paySuccessEnterprise: '支付成功，企业订阅已生效',
    paySuccessEnterpriseAddon: '支付成功，企业席位已追加',
    paySuccessEnterprisePack: '支付成功，企业共享资源包已到账'
  },

  /* ---------- 定价页当前订阅置灰 ---------- */
  current: {
    btnCurrent: '当前订阅',
    btnSubscribe: '立即订阅'
  }
}
