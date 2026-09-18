/* ==========================================================================
   zh 字典 · 会员卡（membership card）
   --------------------------------------------------------------------------
   - 定价页「会员卡」分区（商品卡 / 张数步进器 / 合计 / 购买按钮）
   - 账户页「我的会员卡」面板（列表 / 兑换 / 状态）
   - 机器错误码文案：键名对应 membership-card-api.md §7 的 code
     （membership_card_* → errors.*），前端只按 code 分支，不匹配中文 message
   - 占位符语法：{name}
   ========================================================================== */
export default {
  /* ---------- 定价页会员卡分区 ---------- */
  section: {
    kicker: '会员卡',
    title: '会员卡',
    sub: '一次购买、按需兑换；兑换后一个月订阅立即生效，卡片自生成起 90 天内有效。',
    loading: '正在加载会员卡商品…',
    empty: '暂未上架会员卡商品，请稍后再试。',
    loadFailed: '会员卡商品加载失败，请稍后重试。'
  },

  /* ---------- 会员卡商品卡 ---------- */
  product: {
    perCard: '/ 张',
    creditsLine: '兑换后含 {credits} Credits',
    validityLine: '有效期 {days} 天 · 每张限兑一次',
    durationLine: '兑换后生效 {months} 个月订阅',
    qtyLabel: '购买张数',
    qtyAria: '会员卡购买张数',
    minusAria: '减少一张',
    plusAria: '增加一张',
    lineQty: '张数',
    qtyValue: '{q} 张',
    lineCredits: '合计 Credits',
    creditsValue: '{n} Credits',
    lineTotal: '合计应付',
    buy: '购买会员卡',
    unavailable: '暂不可购买'
  },

  /* ---------- 规则说明 ---------- */
  rules: {
    title: '会员卡规则',
    items: [
      '一张会员卡对应一个月的订阅套餐，价格与 Credits 均取自该套餐配置。',
      '支付成功后按购买张数生成会员卡，不会立即创建订阅。',
      '会员卡自生成之日起 90 天内有效，每张只能兑换一次。',
      '会员卡绑定购买账号、不支持转让，仅购买账号可查看兑换码并兑换。',
      '当前账号存在生效中的订阅时不能兑换；兑换成功后一个月订阅立即生效。'
    ]
  },

  /* ---------- 账户页「我的会员卡」面板 ---------- */
  panel: {
    title: '我的会员卡',
    desc: '会员卡绑定当前账号，仅本人可查看兑换码并兑换。',
    loading: '正在加载会员卡…',
    loadFailed: '会员卡加载失败，请稍后重试。',
    empty: '还没有会员卡，购买后可在此查看兑换码。',
    goBuy: '去购买会员卡',
    refresh: '刷新',
    activeSubTip: '当前账号已有生效中的订阅，需到期或取消后才能兑换会员卡。',
    summary: '共 {total} 张 · 待兑换 {unused} 张'
  },

  /* ---------- 卡片列表 ---------- */
  list: {
    cols: {
      plan: '会员卡',
      key: '兑换码',
      status: '状态',
      created: '生成时间',
      expired: '有效期至',
      redeemed: '兑换时间',
      action: '操作'
    },
    status: {
      unused: '待兑换',
      redeemed: '已兑换',
      expired: '已过期'
    },
    keyHidden: '兑换码仅购买账号可见',
    show: '显示',
    hide: '隐藏',
    copy: '复制',
    copyDone: '兑换码已复制',
    copyNothing: '没有可复制的兑换码',
    redeem: '兑换',
    never: '—'
  },

  /* ---------- 兑换 ---------- */
  redeem: {
    entry: '使用会员卡',
    useTitle: '使用会员卡',
    close: '关闭',
    ticket: '兑换卡',
    title: '使用兑换码',
    desc: '输入 32 位兑换码，兑换成功后一个月订阅立即生效。',
    placeholder: '请输入会员卡兑换码',
    label: '兑换码',
    inputAria: '会员卡兑换码',
    submit: '立即兑换',
    submitting: '正在兑换…',
    confirm: '确认兑换',
    codePlaceholder: 'XXXX-XXXX-XXXX-XXXX',
    noticeTitle: '兑换须知',
    noticeItems: [
      '本商品为电子兑换码，兑换后对应会员周期立即生效。',
      '仅未订阅账号可兑换，已有订阅请在到期后兑换。',
      '兑换码购买后 90 天内有效，过期失效且无法延期或退款。',
      '每个兑换码仅限使用一次，兑换后不可撤销和转让。'
    ],
    noCard: '还没有会员卡？',
    goBuy: '去购买',
    invalidLength: '兑换码格式不正确，应为 {len} 位字符',
    done: '兑换成功，订阅已生效',
    blocked: '当前账号已有生效中的订阅，暂不能兑换'
  },

  /* ---------- 机器错误码文案（契约 §7） ---------- */
  errors: {
    invalidParams: '请求参数不正确或兑换码为空',
    paymentDisabled: '支付渠道暂未开通，请稍后再试',
    paymentFailed: '创建支付订单失败，请稍后重试',
    orderNotFound: '订单不存在或无权查看该订单',
    notFound: '兑换码不存在',
    ownerMismatch: '该会员卡仅限购买账号使用',
    redeemed: '该会员卡已经兑换',
    expired: '该会员卡已超过 90 天有效期',
    activeSubscription: '当前账号已有生效中的订阅，暂不能兑换',
    redeemFailed: '兑换失败，请稍后重试',
    generic: '会员卡操作失败，请稍后重试'
  }
}
