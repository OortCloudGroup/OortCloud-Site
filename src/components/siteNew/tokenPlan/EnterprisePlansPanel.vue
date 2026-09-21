<template>
  <div class="ent-pane">
    <div v-if="loading && !plans.length" class="ent-empty">
      正在加载企业套餐…
    </div>
    <div v-else-if="error && !plans.length" class="ent-empty">
      <p>企业套餐加载失败，请重试</p>
      <button type="button" class="btn ghost" @click="reloadPlans">
        重试
      </button>
    </div>
    <div v-else-if="!plans.length" class="ent-empty">
      <h4>企业定制</h4>
      <p>无限智能体席位与 Credits 池 · 私有化部署 / 专属 OortCloud 区域 · SLA 保障与专属客户成功经理</p>
      <a class="btn primary" href="mailto:sales@oortcodex.com">联系销售</a>
    </div>
    <template v-else>
      <div class="ent-grid">
        <div
          v-for="p in plans"
          :key="p.key"
          class="ent-item"
          :class="{ featured: isFeatured(p) }"
        >
          <span v-if="isFeatured(p)" class="flag">最受欢迎</span>
          <div v-if="isFeatured(p)" class="plan-deco-wrap" aria-hidden="true">
            <img
              class="plan-deco"
              src="@/assets/img/tokenPlan/popular-deco.png"
              alt=""
            />
          </div>
          <div class="head">
            <h4>{{ p.title }}</h4>
            <p v-if="p.subtitle" class="sub">
              {{ p.subtitle }}
            </p>
          </div>
          <div class="price">
            <b>{{ p.priceText }}</b>
            <span>/ 席位{{ durationText(p) ? ' · ' + durationText(p) : '' }}</span>
          </div>
          <ul>
            <li><img class="check" src="@/assets/img/tokenPlan/check-double.png" alt="" />{{ creditsLine(p) }}</li>
            <li><img class="check" src="@/assets/img/tokenPlan/check-double.png" alt="" />最低购买 {{ p.minQty }} 个席位</li>
            <li v-for="(f, i) in p.feats" :key="i">
              <img class="check" src="@/assets/img/tokenPlan/check-double.png" alt="" />{{ f }}
            </li>
          </ul>
          <button
            v-if="!p.paymentMethods.length"
            type="button"
            class="btn primary"
            disabled
          >
            暂无可用支付方式
          </button>
          <button
            v-else
            type="button"
            class="btn primary"
            @click="buy(p)"
          >
            立即购买
          </button>
        </div>
      </div>
      <div class="ent-contact">
        <p>需要私有化部署、专属区域或更高用量？我们提供企业定制方案。</p>
        <a class="btn ghost" href="mailto:sales@oortcodex.com">联系销售</a>
      </div>
    </template>

    <section class="resource-section">
      <h3>资源包</h3>
      <div v-if="packLoading && !pack" class="resource-card muted">
        正在加载共享资源包…
      </div>
      <div v-else-if="packError && !pack" class="resource-card muted">
        <span>企业资源包配置加载失败，请重试</span>
        <button type="button" class="btn ghost" @click="reloadPack">
          重试
        </button>
      </div>
      <div v-else-if="pack && pack.enabled" class="resource-card">
        <div class="main">
          <div class="head">
            <h4>{{ pack.title }}</h4>
            <span class="tag">适用于团队版 / 企业版</span>
          </div>
          <div class="price">
            <b>{{ fmtCNY(pack.unitPrice) }}</b>
            <span>/ {{ fmtCredits(pack.unitCredits) }} Credits</span>
          </div>
          <p>追加到当前企业共享额度池，到期时间不变</p>
        </div>
        <button type="button" class="btn primary" @click="buyPack">
          前往购买
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useWritable } from '@/utils/tokenPlan/useWritable.js'
import { fmtCNY, fmtCredits } from '@/utils/tokenPlan/format.js'
import { tr } from '@/utils/tokenPlan/i18n.js'
import {
  entPlans,
  entPlansLoading,
  entPlansError,
  entResourcePack,
  entResourcePackLoading,
  entResourcePackError,
  fetchEnterprisePlans,
  fetchEnterpriseResourcePack,
  startEnterprisePurchase,
  startEnterpriseResourcePackPurchase
} from '@/utils/tokenPlan/enterpriseSubscriptionStore.js'

const props = defineProps({
  active: { type: Boolean, default: false }
})

const entList = useWritable(entPlans)
const loading = useWritable(entPlansLoading)
const error = useWritable(entPlansError)
const pack = useWritable(entResourcePack)
const packLoading = useWritable(entResourcePackLoading)
const packError = useWritable(entResourcePackError)

let loadedOnce = false
watch(() => props.active, (v) => {
  if (v && !loadedOnce) {
    loadedOnce = true
    fetchEnterprisePlans()
    fetchEnterpriseResourcePack()
  }
}, { immediate: true })

const plans = computed(() => (entList.value || []).map(p => ({
  ...p,
  key: p.id == null ? p.title : p.id
})))

function isFeatured(p) {
  return String((p && p.title) || '').includes('标准')
}

const UNIT_KEYS = { month: 1, year: 1, day: 1, hour: 1 }
function durationText(p) {
  if (!p.durationValue || !UNIT_KEYS[p.durationUnit]) return ''
  return tr('pricing.ent.validityLine', {
    d: p.durationValue,
    unit: tr('pricing.ent.durationUnit.' + p.durationUnit)
  })
}
function creditsLine(p) {
  return p.unlimited
    ? 'Credits 不限'
    : `${fmtCredits(p.creditsPerSeat)} Credits / 席位 / 周期`
}
function buy(p) {
  startEnterprisePurchase(p, p.minQty)
}
function buyPack() {
  startEnterpriseResourcePackPurchase(pack.value)
}
function reloadPlans() {
  fetchEnterprisePlans(true)
}
function reloadPack() {
  fetchEnterpriseResourcePack(true)
}
</script>

<style scoped lang="scss">
.ent-empty {
  text-align: center;
  padding: 40px 20px;
  color: #64748b;
  h4 { color: #0f172a; margin-bottom: 8px; }
  p { margin-bottom: 16px; line-height: 1.6; }
}
.ent-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 24px;
  justify-content: center;
  padding-top: 16px;
}
.ent-item {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: #F9F9F9;
  padding: 32px;
  display: flex;
  flex-direction: column;
  &.featured {
    border-color: #2278FF;
    box-shadow: 0 0 0 1px #2278FF;
  }
  .head h4 {
    margin: 0 0 12px;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    color: #333333;
  }
  .sub {
    margin: 0 0 8px;
    font-size: 16px;
    line-height: 160%;
    color: #333333;
  }
  .price {
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    flex-wrap: wrap;
    b {
      font-weight: 500;
      font-size: 32px;
      color: #333333;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      color: #666666;
    }
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
    }
  }
  .check { width: 24px; height: 24px; flex: none; object-fit: contain; }
  .btn.primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 60px;
    background: #2278FF;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    &:disabled { opacity: 0.55; cursor: not-allowed; }
  }
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
.ent-contact {
  box-sizing: border-box;
  width: 100%;
  max-width: 1008px;
  margin: 26px auto 0;
  padding: 18px 24px;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  background: #F9F9F9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  p {
    margin: 0;
    font-size: 13px;
    color: #64748b;
    line-height: 1.65;
  }
  .btn.ghost {
    flex: none;
    height: 38px;
    padding: 0 18px;
    font-size: 14px;
    border-radius: 20px;
  }
}
.resource-section {
  box-sizing: border-box;
  width: 100%;
  max-width: 1008px;
  margin: 48px auto 0;
  h3 {
    margin: 0 0 18px;
    font-size: 22px;
    font-weight: 600;
    color: #0f172a;
  }
}
.resource-card {
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #F9F9F9;
  padding: 28px 32px;
  &.muted {
    align-items: center;
    min-height: 150px;
    color: #64748b;
  }
  .main { flex: 1; min-width: 0; }
  .head {
    display: flex;
    align-items: center;
    gap: 16px;
    h4 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      color: #0f172a;
    }
  }
  .tag {
    font-size: 12px;
    color: #2278FF;
    background: rgba(34, 120, 255, 0.12);
    padding: 5px 11px;
    border-radius: 999px;
    white-space: nowrap;
  }
  .price {
    display: flex;
    align-items: baseline;
    gap: 9px;
    margin-top: 18px;
    b { font-size: 32px; font-weight: 600; color: #0f172a; }
    span { color: #94a3b8; font-size: 14px; }
  }
  p { margin: 12px 0 0; color: #94a3b8; font-size: 14px; }
  .btn.primary {
    width: auto;
    min-width: 180px;
    height: 44px;
    padding: 0 24px;
    border-radius: 32px;
    font-size: 15px;
    font-weight: 600;
    flex: none;
  }
}
.btn {
  height: 42px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  &.primary {
    width: 100%;
    border: none;
    background: #2278FF;
    color: #fff;
    &:disabled { opacity: 0.55; cursor: not-allowed; }
  }
  &.ghost {
    padding: 0 14px;
    border: 1px solid #cbd5e1;
    background: #fff;
    color: #334155;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
