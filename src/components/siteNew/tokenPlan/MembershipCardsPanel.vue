<template>
  <div class="card-pane">
    <div v-if="loading && !cards.length" class="card-empty">
      正在加载会员卡商品…
    </div>
    <div v-else-if="error && !cards.length" class="card-empty">
      <p>会员卡商品加载失败，请稍后重试。</p>
      <button type="button" class="btn ghost" @click="reload">
        刷新
      </button>
    </div>
    <div v-else-if="!cards.length" class="card-empty">
      暂未上架会员卡商品，请稍后再试。
    </div>
    <template v-else>
      <div class="cards-grid">
        <div
          v-for="p in cards"
          :key="p.key"
          class="card-item"
          :class="{ disabled: !p.purchasable }"
        >
          <div class="head">
            <h4>{{ p.title || '会员卡' }}</h4>
            <p v-if="p.subtitle" class="sub">
              {{ p.subtitle }}
            </p>
          </div>
          <div class="price">
            <b>{{ fmtCNY(p.unitPrice) }}</b><span>/ 张</span>
          </div>
          <ul>
            <li><img class="check" src="@/assets/img/tokenPlan/check-double.png" alt="" />兑换后含 {{ fmtCredits(p.unitCredits) }} Credits</li>
            <li><img class="check" src="@/assets/img/tokenPlan/check-double.png" alt="" />兑换后生效 {{ p.durationValue || 1 }} 个月订阅</li>
            <li><img class="check" src="@/assets/img/tokenPlan/check-double.png" alt="" />有效期 90 天 · 每张限兑一次</li>
          </ul>
          <template v-if="p.purchasable">
            <div class="qty-row">
              <span>购买张数</span>
              <div class="stepper">
                <button type="button" :disabled="p.qty <= 1" @click="step(p, -1)">
                  −
                </button>
                <input type="number" :value="p.qty" min="1" max="99" @change="(e) => onQtyInput(p, e)" />
                <button type="button" :disabled="p.qty >= 99" @click="step(p, 1)">
                  +
                </button>
              </div>
            </div>
            <div class="summary">
              <div class="line">
                <span>张数</span><span>{{ p.qty }} 张</span>
              </div>
              <div class="line">
                <span>合计 Credits</span><span>{{ fmtCredits(p.unitCredits * p.qty) }} Credits</span>
              </div>
              <div class="line total">
                <span>合计应付</span><b>{{ fmtCNY(Math.round(p.unitPrice * p.qty * 100) / 100) }}</b>
              </div>
            </div>
            <button type="button" class="btn primary" @click="buy(p)">
              购买会员卡
            </button>
          </template>
          <button v-else type="button" class="btn primary" disabled>
            暂不可购买
          </button>
        </div>
      </div>
      <div class="rules">
        <h4>会员卡规则</h4>
        <ul>
          <li v-for="(item, i) in ruleItems" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useWritable } from '@/utils/tokenPlan/useWritable.js'
import { fmtCNY, fmtCredits } from '@/utils/tokenPlan/format.js'
import { tr } from '@/utils/tokenPlan/i18n.js'
import { startCardPurchase } from '@/utils/tokenPlan/subscription.js'
import {
  cardPlans,
  cardPlansLoading,
  cardPlansError,
  fetchCardPlans
} from '@/utils/tokenPlan/membershipCardStore.js'

const props = defineProps({
  active: { type: Boolean, default: false }
})

const plans = useWritable(cardPlans)
const loading = useWritable(cardPlansLoading)
const error = useWritable(cardPlansError)
const qtyMap = ref({})
let loadedOnce = false

watch(() => props.active, (v) => {
  if (v && !loadedOnce) {
    loadedOnce = true
    fetchCardPlans()
  }
}, { immediate: true })

function keyOf(p) {
  return p && p.id == null ? p.title : p.id
}
function clamp(v) {
  const q = parseInt(v, 10)
  if (!isFinite(q) || q < 1) return 1
  return q > 99 ? 99 : q
}

const cards = computed(() => {
  return (plans.value || []).map(p => ({
    ...p,
    key: keyOf(p),
    qty: clamp(qtyMap.value[keyOf(p)] || 1)
  }))
})

const ruleItems = computed(() => tr('card.rules.items') || [])

function step(p, delta) {
  qtyMap.value = { ...qtyMap.value, [p.key]: clamp(p.qty + delta) }
}
function onQtyInput(p, e) {
  const next = clamp(e.target.value)
  qtyMap.value = { ...qtyMap.value, [p.key]: next }
  e.target.value = next
}
function buy(p) {
  startCardPurchase(p.raw, p.qty)
}
function reload() {
  fetchCardPlans(true)
}
</script>

<style scoped lang="scss">
.card-empty {
  text-align: center;
  padding: 48px 20px;
  color: #64748b;
  p { margin-bottom: 12px; }
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
.card-item {
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #f8fafc;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  &.disabled { opacity: 0.65; }
  .head h4 { margin: 0 0 6px; font-size: 17px; color: #0f172a; }
  .sub { margin: 0; font-size: 13px; color: #64748b; }
  .price {
    margin: 14px 0 12px;
    display: flex;
    align-items: baseline;
    gap: 6px;
    b { font-size: 32px; color: #0f172a; }
    span { color: #94a3b8; font-size: 13px; }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 16px;
    display: grid;
    gap: 10px;
    flex: 1;
    li {
      display: flex;
      gap: 8px;
      font-size: 13.5px;
      color: #475569;
    }
  }
  .check { width: 24px; height: 24px; flex: none; object-fit: contain; }
}
.qty-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 13px;
  color: #64748b;
}
.stepper {
  display: inline-flex;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
  button, input { border: none; background: #fff; height: 32px; }
  button { width: 32px; cursor: pointer; &:disabled { opacity: 0.4; } }
  input { width: 48px; text-align: center; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; }
}
.summary {
  margin-bottom: 14px;
  .line {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #64748b;
    padding: 4px 0;
    &.total b { color: #2278FF; font-size: 16px; }
  }
}
.btn {
  width: 100%;
  height: 42px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  &.primary {
    border: none;
    background: #2278FF;
    color: #fff;
    &:disabled { opacity: 0.55; cursor: not-allowed; }
  }
  &.ghost {
    width: auto;
    padding: 0 16px;
    border: 1px solid #cbd5e1;
    background: #fff;
    color: #334155;
  }
}
.rules {
  margin-top: 28px;
  padding: 18px 20px;
  border-radius: 12px;
  background: #f1f5f9;
  h4 { margin: 0 0 10px; font-size: 15px; }
  ul { margin: 0; padding-left: 18px; color: #64748b; font-size: 13px; line-height: 1.7; }
}
</style>
