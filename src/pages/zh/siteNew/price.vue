<template>
  <div class="token-plan-page">
    <div class="hero">
      <div class="hero-title">
        <img class="hero-logo" src="@/assets/img/tokenPlan/logo.png" alt="" />
        <span class="hero-name">OortCloud Token Plan</span>
        <span class="hero-sub">欢迎订阅</span>
      </div>
      <p class="hero-desc">
        欢迎使用 OortCloud！订阅 OortCloud Token Plan，20元/月起，Qwen, DeepSeek, Kimi, GLM等顶级模型尝鲜，更有<span class="hero-hl">OortCodex</span>和<span class="hero-hl">DSH For OortCloud Work</span>以及<span class="hero-hl">VLStream数据分析生态</span>共享额度，高效开启AI生产力。<br />
        开始使用，登录你的 OortCloud 账户。获得强大模型、高质量的工程、成本分析等。
      </p>
    </div>

    <div class="segmented-wrap">
      <div class="segmented" role="tablist" aria-label="定价方案切换">
        <button
          type="button"
          role="tab"
          :class="{ active: priceTab === 'sub' }"
          @click="setTab('sub')"
        >
          个人订阅
        </button>
        <button
          type="button"
          role="tab"
          :class="{ active: priceTab === 'ent' }"
          @click="setTab('ent')"
        >
          企业订阅
        </button>
        <button
          type="button"
          role="tab"
          :class="{ active: priceTab === 'card' }"
          @click="setTab('card')"
        >
          会员卡
        </button>
      </div>
      <button class="redeem-entry" type="button" @click="membershipRedeemOpen = true">
        使用会员卡 <span aria-hidden="true">🎁</span>
      </button>
    </div>

    <!-- 个人订阅 -->
    <div v-show="priceTab === 'sub'" class="pane">
      <div v-if="upgrade.status === 'loading'" class="plans-state">
        正在查询可升级套餐…
      </div>
      <div v-else-if="upgrade.status === 'error'" class="plans-state error">
        <span>可升级套餐加载失败，请重试</span>
        <button type="button" class="btn ghost sm" @click="refreshUpgradeOptions">
          重试
        </button>
      </div>
      <template v-else>
        <div class="plans">
          <!-- Free -->
          <div class="plan" :class="{ current: upgrade.status === 'ready' && !!upgrade.currentPlan }">
            <h4>Free</h4>
            <div class="price">
              <b>¥0</b><span>/月</span>
            </div>
            <div class="tag">
              {{ planCopy.free.tag }}
            </div>
            <ul>
              <li v-for="(f, i) in freeFeatures" :key="i">
                <img class="feat-check" src="@/assets/img/tokenPlan/check-double.png" alt="" /><span>{{ f }}</span>
              </li>
            </ul>
            <a
              v-if="!(upgrade.status === 'ready' && upgrade.currentPlan)"
              class="btn ghost"
              :href="DOWNLOAD_URL"
              download
            >免费下载</a>
            <button v-else type="button" class="btn ghost" disabled>
              仅可升级
            </button>
            <p v-if="upgrade.status === 'ready' && upgrade.currentPlan" class="plan-upgrade-tip">
              当前仅支持升级至更高等级套餐
            </p>
          </div>

          <!-- Pro / Pro+ / Ultra -->
          <div
            v-for="card in visiblePlanCards"
            :key="(card.option && card.option.id) || card.key"
            class="plan"
            :class="{
              featured: card.key === 'pro' && !card.disabled,
              current: card.disabled
            }"
          >
            <span v-if="card.key === 'pro' && !card.disabled" class="flag">最受欢迎</span>
            <div v-if="card.key === 'pro' && !card.disabled" class="plan-deco-wrap" aria-hidden="true">
              <img
                class="plan-deco"
                src="@/assets/img/tokenPlan/popular-deco.png"
                alt=""
              />
            </div>
            <h4>{{ (card.option && card.option.title) || planCopy[card.key].title }}</h4>
            <div class="price">
              <b>{{ optionPrice(card.option, card.key) }}</b>
              <span>/月</span>
            </div>
            <div class="tag">
              {{ (card.option && card.option.subtitle) || planCopy[card.key].tag }}
            </div>
            <ul>
              <li v-for="(f, i) in planFeatures(card.key, card.option)" :key="i">
                <img class="feat-check" src="@/assets/img/tokenPlan/check-double.png" alt="" /><span>{{ f }}</span>
              </li>
            </ul>
            <button
              type="button"
              class="btn primary"
              :disabled="card.disabled"
              @click="subscribe(card)"
            >
              {{ card.disabled ? (card.current ? '当前订阅' : '仅可升级') : '立即订阅' }}
            </button>
            <p v-if="card.disabled" class="plan-upgrade-tip">
              当前仅支持升级至更高等级套餐
            </p>
          </div>
        </div>
      </template>

      <!-- Credit Pack -->
      <div id="credit-pack" class="credit-pack">
        <h4>Credit Pack · 加量包</h4>
        <div class="cp-sub">
          追加 Credits，适用于 Pro / Pro+ / Ultra 订阅用户 · 两款产品通用
        </div>
        <div class="cp-rate">
          <b>¥{{ fmtNum(unitPrice) }}</b>
          <span>/ {{ fmtNum(unitCredits) }} Credits · 进入公共钱包 · 无独立到期时间</span>
        </div>
        <div class="stepper-row">
          <span class="qty-label">购买数量</span>
          <div class="stepper">
            <button type="button" :disabled="qty <= MIN" @click="step(-1)">
              −
            </button>
            <input v-model.number="qty" type="number" :min="MIN" :max="MAX" @change="onQtyInput" />
            <button type="button" :disabled="qty >= MAX" @click="step(1)">
              +
            </button>
          </div>
        </div>
        <div class="cp-summary">
          <div class="cp-line">
            <span>Credits 总量</span><span>{{ fmtNum(totalCredits) }} Credits</span>
          </div>
          <div class="cp-line">
            <span>数量</span>
            <span>{{ qty }} pack{{ qty > 1 ? 's' : '' }} × {{ fmtNum(unitCredits) }} Credits</span>
          </div>
          <div class="cp-line total">
            <span>总计</span><b>¥{{ fmtNum(total) }}</b>
          </div>
        </div>
        <button type="button" class="btn primary lg" @click="buyPack">
          自选购买
        </button>
      </div>

      <p class="tax-note">
        *在已选套餐基础上，灵活补充额外资源与功能，满足阶段性扩容或个性化需求，无需更换主套餐。
      </p>

      <div class="enterprise-band">
        <div>
          <h4>{{ tr('pricing.enterprise.title') }}</h4>
          <p>{{ tr('pricing.enterprise.desc') }}</p>
        </div>
        <a class="btn primary slim" :href="SALES_MAIL">{{ tr('pricing.enterprise.btn') }}</a>
      </div>

      <div class="compare-head">
        <div class="compare-pill">
          版本功能对比
        </div>
        <h2>为你的业务需求找到正确的<br />订阅套餐</h2>
        <div class="compare-link">
          <img src="@/assets/img/tokenPlan/daochu.png" alt="" />导出PDF文件查看 &gt;
        </div>
      </div>

      <div id="compare" class="compare-card">
        <div
          v-for="(group, gIdx) in compareGroups"
          :key="gIdx"
          class="compare-group"
        >
          <div class="group-title">
            {{ group.name }}
          </div>
          <table class="compare-table">
            <thead>
              <tr>
                <th>功能项</th>
                <th v-for="col in compareCols" :key="col.key" :class="{ hot: col.key === 'pro' }">
                  <div class="col-name">
                    {{ col.title }}
                  </div>
                  <div class="col-price">
                    {{ col.price }}/月
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rIdx) in group.rows" :key="rIdx">
                <td>{{ row.label }}</td>
                <template v-if="row.spanAll">
                  <td colspan="4" class="span-all">
                    {{ row.cells[0].text }}
                  </td>
                </template>
                <template v-else>
                  <td
                    v-for="(cell, cIdx) in row.cells"
                    :key="cIdx"
                    :class="{ hot: compareCols[cIdx] && compareCols[cIdx].key === 'pro' }"
                  >
                    <img v-if="cell.type === 'yes'" class="yes" src="@/assets/img/tokenPlan/check-square.png" alt="" />
                    <span v-else-if="cell.type === 'no'" class="no">—</span>
                    <span v-else>{{ cell.text }}</span>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 企业订阅 -->
    <div v-show="priceTab === 'ent'" class="pane">
      <EnterprisePlansPanel :active="priceTab === 'ent'" />
    </div>

    <!-- 会员卡 -->
    <div v-show="priceTab === 'card'" class="pane">
      <MembershipCardsPanel :active="priceTab === 'card'" />
    </div>

    <section class="faq-section">
      <h2 class="faq-title">
        有疑问<span class="qmark">？</span>
      </h2>
      <div class="faq-bar">
        <p>
          如果页面上没有找到你的问题，请联系我们
          <a :href="SALES_MAIL">客户经理</a>
        </p>
        <button type="button" class="expand-all" @click="toggleAllFaq">
          {{ allFaqOpen ? '全部收起' : '全部展开' }}
        </button>
      </div>
      <div class="faq-list">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="faq-item"
          :class="{ open: openFaq.has(i) }"
        >
          <button type="button" class="faq-q" @click="toggleFaq(i)">
            <span class="faq-no">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="faq-text">{{ item.q }}</span>
            <img
              class="faq-pm"
              :src="openFaq.has(i) ? faqExpandIcon : faqCollapseIcon"
              alt=""
            />
          </button>
          <div v-show="openFaq.has(i)" class="faq-a">
            <p v-for="(para, pIdx) in item.a" :key="pIdx">
              {{ para }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <h2>{{ tr('pricing.cta.title') }}</h2>
      <p>{{ tr('pricing.cta.sub') }}</p>
      <div class="cta-actions">
        <a class="btn primary slim" :href="SALES_MAIL">{{ tr('pricing.cta.contact') }}</a>
        <a class="btn ghost slim" href="/zh/siteNew/">{{ tr('pricing.cta.backHome') }}</a>
      </div>
    </section>

    <TokenPlanPayModal />
    <MembershipRedeemModal
      :open="membershipRedeemOpen"
      @close="membershipRedeemOpen = false"
      @buy="goBuyMembershipCard"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import faqCollapseIcon from '@/assets/img/tokenPlan/faq-collapse.png'
import faqExpandIcon from '@/assets/img/tokenPlan/faq-expand.png'
import TokenPlanPayModal from '@/components/siteNew/tokenPlan/TokenPlanPayModal.vue'
import MembershipCardsPanel from '@/components/siteNew/tokenPlan/MembershipCardsPanel.vue'
import EnterprisePlansPanel from '@/components/siteNew/tokenPlan/EnterprisePlansPanel.vue'
import MembershipRedeemModal from '@/components/siteNew/tokenPlan/MembershipRedeemModal.vue'
import { useWritable } from '@/utils/tokenPlan/useWritable.js'
import { tr } from '@/utils/tokenPlan/i18n.js'
import {
  creditsRate,
  packInfo,
  upgradeOptions,
  refreshUpgradeOptions,
  startSubscribe,
  startPackPurchase,
  initSubscription
} from '@/utils/tokenPlan/subscription.js'

definePageMeta({
  layout: 'site-new'
})

const DOWNLOAD_URL =
  'https://gitcode.com/OortCloudGroup/OortStudio/releases/download/v1.0.12/OortCloud%20AI%20Studio.exe'
const SALES_MAIL = 'mailto:sales@oortcodex.com'

const TAB_BY_HASH = {
  '#personal-subscription': 'sub',
  '#enterprise-subscription': 'ent',
  '#membership-card': 'card'
}
const HASH_BY_TAB = {
  sub: '#personal-subscription',
  ent: '#enterprise-subscription',
  card: '#membership-card'
}

const priceTab = ref('sub')
const membershipRedeemOpen = ref(false)
const pack = useWritable(packInfo)
const rateStore = useWritable(creditsRate)
const upgrade = useWritable(upgradeOptions)

const PLAN_PRICE = { free: 0, pro: 20, proPlus: 60, ultra: 200 }
const PLAN_TITLE = { free: null, pro: 'Pro', proPlus: 'Pro+', ultra: 'Ultra' }
const PAID_PLAN_KEYS = ['pro', 'proPlus', 'ultra']

const planCopy = {
  free: { title: 'Free', price: '¥0', tag: '免费适用于轻度使用' },
  pro: { title: 'Pro', price: '¥20', tag: '个人开发者的主力选择' },
  proPlus: { title: 'Pro+', price: '¥60', tag: '高强度开发与小型团队' },
  ultra: { title: 'Ultra', price: '¥200', tag: '专业团队与极客' }
}
// plan feature lists come from pricing dict via tr()

const freeFeatures = computed(() => tr('pricing.plans.free.features') || [])

const unitPrice = computed(() => {
  const n = Number(pack.value?.unitPrice)
  return n > 0 ? n : 20
})
const unitCredits = computed(() => {
  const n = Number(pack.value?.unitCredits)
  return n > 0 ? n : 2000
})
const rate = computed(() => {
  const n = Number(rateStore.value)
  return n > 0 && isFinite(n) ? n : 25
})

const MIN = 1
const MAX = 50
const qty = ref(1)
const totalCredits = computed(() => qty.value * unitCredits.value)
const total = computed(() => Math.round(qty.value * unitPrice.value * 100) / 100)

function fmtNum(n) {
  return Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 })
}
function creditsForPrice(price) {
  return Math.round(Number(price) * rate.value * 1000000) / 1000000
}
function planCredits(key) {
  return fmtNum(creditsForPrice(PLAN_PRICE[key]))
}
function planFeatures(key, option) {
  const apiCredits = Number(option && option.total_credits)
  const credits = isFinite(apiCredits) && apiCredits > 0 ? fmtNum(apiCredits) : planCredits(key)
  const feats = tr('pricing.plans.' + key + '.features') || []
  return feats.map(f => (typeof f === 'string' ? f.replace(/\{credits\}/g, credits) : f))
}
function optionKey(option, index) {
  const level = Number(option && option.level)
  if (level === 1) return 'pro'
  if (level === 2) return 'proPlus'
  if (level >= 3) return 'ultra'
  const title = String((option && option.title) || '').trim().toLowerCase().replace(/\s+/g, '')
  if (title === 'pro+' || title === 'proplus') return 'proPlus'
  if (title === 'ultra') return 'ultra'
  return PAID_PLAN_KEYS[Math.min(index, PAID_PLAN_KEYS.length - 1)]
}
function optionPrice(option, key) {
  if (!option) return planCopy[key].price
  const amount = option.price_amount_cny != null ? option.price_amount_cny : option.price_amount
  const n = Number(amount)
  return '¥' + (isFinite(n) ? n.toLocaleString('en-US', { maximumFractionDigits: 2 }) : '0')
}

const visiblePlanCards = computed(() => {
  const u = upgrade.value || { status: 'public' }
  if (u.status === 'ready') {
    return (u.plans || []).map((option, index) => ({
      key: optionKey(option, index),
      option,
      current: !!(u.currentPlan && String(u.currentPlan.id) === String(option.id)),
      disabled: !(u.purchasableIds || []).includes(String(option.id))
    }))
  }
  return PAID_PLAN_KEYS.map(key => ({ key, option: null, current: false, disabled: false }))
})

function clampQty(v) {
  return Math.max(MIN, Math.min(MAX, parseInt(v, 10) || MIN))
}
function step(d) {
  qty.value = clampQty(qty.value + d)
}
function onQtyInput() {
  qty.value = clampQty(qty.value)
}
function subscribe(card) {
  if (card.disabled) return
  const option = card.option
  startSubscribe(null, {
    planId: option && option.id,
    planTitle: (option && option.title) || PLAN_TITLE[card.key],
    plan: option
  })
}
function buyPack() {
  startPackPurchase(qty.value)
}

const compareCols = [
  { key: 'free', title: 'Free', price: '¥0' },
  { key: 'pro', title: 'Pro', price: '¥20' },
  { key: 'proPlus', title: 'Pro+', price: '¥60' },
  { key: 'ultra', title: 'Ultra', price: '¥200' }
]

function cellText(text) {
  return { type: 'text', text }
}
function cellYes() { return { type: 'yes' } }
function cellNo() { return { type: 'no' } }

const compareGroups = computed(() => [
  {
    name: tr('pricing.compare.groups.usage'),
    rows: [
      {
        label: tr('pricing.compare.rows.monthlyCredits'),
        cells: [
          cellText(tr('pricing.compare.vals.trial300')),
          cellText(planCredits('pro')),
          cellText(planCredits('proPlus')),
          cellText(planCredits('ultra'))
        ]
      },
      {
        label: tr('pricing.compare.rows.seats'),
        cells: [cellNo(), cellText('1'), cellText('3'), cellText('10')]
      },
      {
        label: tr('pricing.compare.rows.autonomous'),
        cells: [cellNo(), cellYes(), cellYes(), cellYes()]
      }
    ]
  },
  {
    name: tr('pricing.compare.groups.coding'),
    rows: [
      {
        label: tr('pricing.compare.rows.completion'),
        cells: [cellText(tr('pricing.compare.vals.limited')), cellYes(), cellYes(), cellYes()]
      },
      {
        label: tr('pricing.compare.rows.chatAgent'),
        cells: [cellText(tr('pricing.compare.vals.limited')), cellYes(), cellYes(), cellYes()]
      },
      {
        label: tr('pricing.compare.rows.questWiki'),
        cells: [cellText(tr('pricing.compare.vals.limited')), cellYes(), cellYes(), cellYes()]
      }
    ]
  },
  {
    name: tr('pricing.compare.groups.governance'),
    rows: [
      {
        label: tr('pricing.compare.rows.dashboard'),
        cells: [cellNo(), cellYes(), cellYes(), cellYes()]
      },
      {
        label: tr('pricing.compare.rows.sso'),
        cells: [cellNo(), cellNo(), cellYes(), cellYes()]
      },
      {
        label: tr('pricing.compare.rows.audit'),
        cells: [cellNo(), cellNo(), cellNo(), cellYes()]
      },
      {
        label: tr('pricing.compare.rows.privateDeploy'),
        spanAll: true,
        cells: [
          cellText(
            tr('pricing.compare.vals.enterprise').replace(
              '{link}',
              tr('pricing.compare.vals.enterpriseLinkText')
            )
          )
        ]
      }
    ]
  },
  {
    name: tr('pricing.compare.groups.support'),
    rows: [
      {
        label: tr('pricing.compare.rows.supportLevel'),
        cells: [
          cellText(tr('pricing.compare.vals.community')),
          cellText(tr('pricing.compare.vals.standard')),
          cellText(tr('pricing.compare.vals.priority')),
          cellText(tr('pricing.compare.vals.dedicated'))
        ]
      }
    ]
  }
])

const faqItems = computed(() => tr('pricing.faq.items') || [])
const openFaq = ref(new Set())
const allFaqOpen = computed(() => faqItems.value.length > 0 && openFaq.value.size === faqItems.value.length)

function toggleFaq(i) {
  const next = new Set(openFaq.value)
  if (next.has(i)) next.delete(i)
  else next.add(i)
  openFaq.value = next
}
function toggleAllFaq() {
  if (allFaqOpen.value) {
    openFaq.value = new Set()
  } else {
    openFaq.value = new Set(faqItems.value.map((_, i) => i))
  }
}

function setTab(next) {
  if (priceTab.value === next) return
  priceTab.value = next
  if (typeof history !== 'undefined') {
    history.replaceState(history.state, '', HASH_BY_TAB[next])
  }
}
function syncFromHash() {
  const tab = TAB_BY_HASH[String(location.hash || '')]
  if (tab && tab !== priceTab.value) priceTab.value = tab
}
function goBuyMembershipCard() {
  membershipRedeemOpen.value = false
  setTab('card')
}

onMounted(() => {
  window.addEventListener('hashchange', syncFromHash)
  syncFromHash()
  initSubscription()
})
onUnmounted(() => {
  window.removeEventListener('hashchange', syncFromHash)
})

watch(qty, (v) => {
  if (v !== clampQty(v)) qty.value = clampQty(v)
})
</script>

<style scoped lang="scss">
.token-plan-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 24px 80px;
  color: #0f172a;
}
.hero {
  text-align: center;
  margin-bottom: 36px;
}
.hero-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.hero-logo {
  width: 80px;
  height: 80px;
}
.hero-name {
  font-size: 60px;
  font-weight: bold;
  background: linear-gradient(90deg, #2278ff 0%, #8851f6f7 54%, #d231eef0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: 60px;
  font-weight: bold;
  color: #3D3D3D;
}
.hero-desc {
  width: 930px;
  max-width: 100%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: normal;
  line-height: 32px;
  color: #333333;

  .hero-hl {
    color: #2278FF;
  }
}
.segmented-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
}
.segmented {
  display: inline-flex;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 130px;
  background: #fff;
  button {
    border: none;
    background: transparent;
    padding: 16px 60px;
    border-radius: 999px;
    font-size: 24px;
    line-height: 36px;
    color: #666666;
    cursor: pointer;
    transition: all 0.2s;
    &.active {
      background: #2278FF;
      color: #fff;
    }
  }
}
.redeem-entry {
  position: absolute;
  right: 0;
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover { color: #2278FF; }
}
.pane { min-height: 200px; }
.plans-state {
  text-align: center;
  padding: 48px 20px;
  color: #64748b;
  &.error {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
}
.plans {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 0 auto 41px;
  padding-top: 16px;
  justify-content: center;
}
.plan {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: #F9F9F9;
  padding: 32px;
  &.featured {
    border-color: #2278FF;
    box-shadow: 0 0 0 1px #2278FF;
  }
  &.current { opacity: 0.6; }
  h4 {
    margin: 0 0 12px;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    color: #333333;
  }
  .price {
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    b {
      font-weight: 500;
      font-size: 32px;
      color: #333333;
      }
    span {
      font-weight: 400;
      font-size: 16px;
      color: #666666
    }
  }
  .tag {
    font-size: 16px;
    line-height: 160%;
    color: #333333;
    margin-bottom: 8px;
    min-height: 36px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 22px;
    display: grid;
    gap: 0;
    flex: 1;
    li {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      font-size: 16px;
      line-height: 160%;
      color: #333333;
      img.feat-check { width: 24px; height: 24px; margin-top: 0; flex: none; object-fit: contain; }
    }
  }
}
.plan-upgrade-tip {
  margin: 10px 0 0;
  color: #94a3b8;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
}
.flag {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: #2278FF;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 5px 14px;
  border-radius: 999px;
  white-space: nowrap;
  z-index: 1;
}
.plan-deco-wrap {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 16px;
  pointer-events: none;
  z-index: 0;
}
.plan-deco {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 140px;
  height: auto;
  pointer-events: none;
  user-select: none;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 60px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  &.primary {
    width: 100%;
    border: none;
    background: #2278FF;
    color: #fff;
    &:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
  }
  &.ghost {
    width: 100%;
    border: 1px solid #cbd5e1;
    background: #fff;
    color: #334155;
    &:disabled { opacity: 0.55; cursor: not-allowed; }
  }
  &.sm {
    width: auto;
    height: 34px;
    padding: 0 14px;
  }
  &.lg {
    height: 48px;
    font-size: 15px;
  }
}
.credit-pack {
  width: 700px;
  margin: 28px auto 0;
  border-radius: 16px;
  background: #F9F9F9;
  padding: 24px 28px 20px;
  h4 {
    margin: 0 0 6px;
    font-size: 32px;
    font-weight: 500;
    color: #3D3D3D;
  }
  .cp-sub {
    font-size: 16px;
    line-height: 160%;
    color: #666666;
    margin-bottom: 16px;
  }
  .cp-rate {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
    b {
      font-weight: 500;
      font-size: 32px;
      color: #333333
    }
    span {
      font-weight: 400;
      font-size: 16px;
      color: #666666
    }
  }
}
.stepper-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 12px;
  .qty-label {
    font-size: 16px;
    font-weight: normal;
    line-height: 160%;
    color: #3D3D3D;
  }
}
.stepper {
  display: inline-flex;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  button, input {
    border: none;
    background: #fff;
    height: 36px;
  }
  button {
    width: 36px;
    cursor: pointer;
    font-size: 18px;
    color: #334155;
    &:disabled { opacity: 0.4; cursor: not-allowed; }
  }
  input {
    width: 56px;
    text-align: center;
    border-left: 1px solid #e2e8f0;
    border-right: 1px solid #e2e8f0;
    font-size: 14px;
  }
}
.cp-summary {
  margin-bottom: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e2e8f0;
  display: grid;
  gap: 8px;
  .cp-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    line-height: 22px;
    color: #64748b;
    padding: 0;
    span:last-child {
      color: #333333;
    }
    &.total {
      margin-top: 4px;
      color: #333333;
      font-size: 16px;
      b {
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
        color: #2278FF;
      }
    }
  }
}
.tax-note {
  max-width: 720px;
  margin: 28px auto 0;
  text-align: center;
  color: #666666;
  font-size: 13px;
  line-height: 1.6;
}
.btn.slim {
  width: auto;
  min-width: 120px;
  height: 44px;
  padding: 0 24px;
  font-size: 15px;
  font-weight: 600;
}
.enterprise-band {
  box-sizing: border-box;
  width: 100%;
  max-width: 980px;
  margin: 40px auto 0;
  padding: 26px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  background: #F9F9F9;
  h4 {
    margin: 0 0 6px;
    font-size: 17px;
    font-weight: 600;
    color: #0f172a;
  }
  p {
    margin: 0;
    font-size: 13.5px;
    color: #64748b;
    line-height: 1.55;
    max-width: 640px;
  }
  .btn {
    flex: none;
  }
}
.compare-head {
  text-align: center;
  margin: 56px 0 24px;
  .compare-pill {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 99px;
    border: 1px solid #2278FF;
    color: #2278FF;
    line-height: 160%;
    font-size: 18px;
    margin-bottom: 24px;
    cursor: pointer;
  }
  h2 {
    margin: 0 0 12px;
    font-size: 48px;
    font-weight: bold;
    line-height: 72px;
    color: #333333;
  }
  .compare-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: #2278FF;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    img{
      width: 24px;
      height: 24px;
    }
  }
}
.compare-card {
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: transparent;
}
.compare-group {
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  .group-title {
    padding: 16px 22px 8px;
    font-size: 15px;
    font-weight: 700;
    color: #2278FF;
  }
}
.compare-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  th, td {
    padding: 12px 16px;
    text-align: center;
    font-size: 16px;
    color: #333333;
    border-bottom: 1px solid #f1f5f9;
    word-break: break-word;
  }
  th:first-child,
  td:first-child {
    text-align: left;
    width: 28%;
  }
  th:not(:first-child),
  td:not(:first-child) {
    width: 18%;
  }
  thead th {
    background: #FAFAFA;
    font-weight: 600;
    color: #333333;
    .col-name { font-size: 16px; }
    .col-price {
      margin-top: 2px;
      font-size: 12px;
      color: #94a3b8;
      font-weight: 500;
    }
  }
  tbody tr:last-child td { border-bottom: none; }
  .hot {
    background: rgba(34, 120, 255, 0.06);
  }
  thead th.hot {
    background: rgba(34, 120, 255, 0.06);
  }
  .yes {
    width: 20px;
    height: 20px;
    object-fit: contain;
    vertical-align: middle;
  }
  .no { color: #cbd5e1; font-size: 16px; }
  .span-all {
    text-align: left !important;
    color: #64748b;
  }
}
.faq-section {
  margin-top: 64px;
}
.faq-title {
  margin: 0 0 20px;
  font-size: 58px;
  font-weight: bold;
  line-height: 88px;
  color: #333333;
  .qmark { color: #FFB233 }
}
.faq-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: normal;
    line-height: 30px;
    color: #333333;
    a {
      color: #2278FF !important;
      text-decoration: none;
    }
  }
  .expand-all {
    border: none;
    background: transparent;
    font-size: 20px;
    font-weight: normal;
    line-height: 30px;
    color: #2278FF;
    cursor: pointer;
  }
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq-item {
  border: 1px solid #E4E4E7;
  border-radius: 16px;
  &.open .faq-q { color: #0f172a; }
}
.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
}
.faq-no {
  flex: none;
  font-size: 22px;
  font-weight: 700;
  color: #2278FF;
  font-variant-numeric: tabular-nums;
  min-width: 36px;
}
.faq-text {
  flex: 1;
  font-size: 20px;
  font-weight: normal;
  line-height: 30px;
  color: #333333;
}
.faq-pm {
  flex: none;
  width: 24px;
  height: 24px;
  object-fit: contain;
}
.faq-a {
  padding: 0 4px 18px 54px;
  p {
    margin: 0 0 8px;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(51, 51, 51, 0.8);
    &:last-child { margin-bottom: 0; }
  }
}
.cta-band {
  margin-top: 48px;
  text-align: center;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #f8fafc;
  padding: 40px 24px;
  h2 {
    margin: 0 0 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p {
    margin: 0 0 20px;
    color: #64748b;
    font-size: 14px;
  }
}
.cta-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
