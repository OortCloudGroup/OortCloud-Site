<template>
  <div
    v-if="pay"
    class="modal-root"
    :class="{ open: pay.open }"
    role="dialog"
    aria-modal="true"
    aria-label="订阅支付"
  >
    <div class="modal-backdrop" @click="closePayModal" />
    <div class="modal">
      <button class="modal__close" type="button" aria-label="关闭" @click="closePayModal">
        ×
      </button>

      <section v-show="pay.view === 'bill'">
        <h3>{{ modalTitle }}</h3>
        <div class="pay-bill-layout">
          <div class="pay-bill-info">
            <div class="m-summary">
              <div class="row">
                <span>套餐</span><span>{{ pay.plan?.title || '—' }}</span>
              </div>
              <div class="row">
                <span>说明</span>
                <span class="desc">{{ pay.descText || '—' }}</span>
              </div>
              <div class="row big">
                <span>应付金额</span><b>{{ pay.amountText || '—' }}</b>
              </div>
            </div>

            <div v-if="showQty" class="field">
              <label>{{ qtyLabel }}</label>
              <div class="pay-qty-controls">
                <div class="stepper">
                  <button type="button" :disabled="controlsLocked" @click="stepQty(-1)">
                    −
                  </button>
                  <input
                    type="number"
                    :value="pay.qty"
                    :min="qtyMin"
                    :max="pay.qtyMax"
                    :disabled="controlsLocked"
                    @change="onQtyChange"
                  />
                  <button type="button" :disabled="controlsLocked" @click="stepQty(1)">
                    +
                  </button>
                </div>
                <span class="pay-qty-unit">{{ pay.unitLine }}</span>
              </div>
            </div>

            <div class="field">
              <label>支付方式</label>
              <div class="pay-methods">
                <button
                  type="button"
                  :class="{ 'is-selected': pay.selectedMethod === 'wechat_direct' }"
                  :disabled="controlsLocked || !isMethodEnabled(pay.plan, 'wechat_direct')"
                  @click="switchToMethod('wechat_direct')"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#2AAE67" aria-hidden="true">
                    <path d="M9.4 4.2C5.3 4.2 2 6.9 2 10.2c0 1.9 1.1 3.6 2.8 4.7l-.7 2.2 2.5-1.3c.6.2 1.3.3 2 .3h.4a5 5 0 0 1-.2-1.4c0-3.2 3-5.8 6.8-5.8h.3c-.7-2.7-3.6-4.7-6.5-4.7zM7 8.1c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm4.8 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
                    <path d="M22 14.6c0-2.8-2.7-5-6-5s-6 2.2-6 5 2.7 5 6 5c.6 0 1.2-.1 1.7-.2l2.1 1.1-.6-1.9c1.7-.9 2.8-2.4 2.8-4zm-8.1-.9c-.4 0-.8-.3-.8-.8 0-.4.4-.8.8-.8s.8.4.8.8-.4.8-.8.8zm4.2 0c-.4 0-.8-.3-.8-.8 0-.4.4-.8.8-.8s.8.4.8.8-.4.8-.8.8z" />
                  </svg>
                  微信
                </button>
                <button
                  type="button"
                  :class="{ 'is-selected': pay.selectedMethod === 'alipay_direct' }"
                  :disabled="controlsLocked || !isMethodEnabled(pay.plan, 'alipay_direct')"
                  @click="switchToMethod('alipay_direct')"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <rect x="1.5" y="1.5" width="21" height="21" rx="5" fill="#1677FF" />
                    <text x="12" y="16.2" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">支</text>
                  </svg>
                  支付宝
                </button>
              </div>
            </div>
          </div>

          <div class="pay-bill-qr">
            <p class="m-sub">
              {{ pay.qrTip || '请使用微信「扫一扫」完成支付' }}
            </p>
            <div class="qr-box">
              <div v-if="pay.qrLoading" class="qr-loading">
                正在生成收款码…
              </div>
              <QrcodeVue v-else-if="pay.qrText" :value="pay.qrText" :size="180" level="M" />
            </div>
            <div class="pay-status">
              {{ pay.statusText }}
            </div>
            <div v-if="pay.remainMs > 0" class="pay-countdown">
              二维码剩余有效时间 {{ fmtCountdown(pay.remainMs) }}
            </div>
          </div>
        </div>
        <div v-if="pay.errorText" class="form-error">
          {{ pay.errorText }}
        </div>
        <p class="fine">
          请在二维码有效期内完成扫码支付；如需更换支付方式，点击上方按钮即可切换。
        </p>
      </section>

      <section v-show="pay.view === 'success'">
        <div class="pay-result">
          <div class="orb">
            🚀
          </div>
          <h3>支付成功！</h3>
          <p>{{ pay.successMsg }}</p>
          <button class="btn-primary" type="button" @click="closePayModal">
            开始探索
          </button>
        </div>
      </section>

      <section v-show="pay.view === 'expired'">
        <div class="pay-result">
          <div class="orb orb--warn">
            ⏰
          </div>
          <h3>订单未支付</h3>
          <p>{{ pay.expiredMsg }}</p>
          <button class="btn-primary" type="button" @click="retryOrder">
            重新下单
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { useWritable } from '@/utils/tokenPlan/useWritable.js'
import { fmtCountdown } from '@/utils/tokenPlan/format.js'
import {
  pay as payStore,
  closePayModal,
  switchToMethod,
  retryOrder,
  stepPackQty,
  applyPackTierChange,
  stepCardQty,
  applyCardQtyChange,
  stepEnterpriseQty,
  applyEnterpriseQtyChange,
  stepEnterprisePackQty,
  applyEnterprisePackQtyChange,
  isMethodEnabled
} from '@/utils/tokenPlan/subscription.js'

const pay = useWritable(payStore)

const kind = computed(() => pay.value?.plan?.kind || 'subscribe')
const isPack = computed(() => kind.value === 'pack')
const isCard = computed(() => kind.value === 'card')
const isEnterprise = computed(() => kind.value === 'enterprise')
const isEnterpriseAddon = computed(() => kind.value === 'enterprise_seat_addon')
const isEnterprisePack = computed(() => kind.value === 'enterprise_pack')
const showQty = computed(() => isPack.value || isCard.value || isEnterprise.value || isEnterpriseAddon.value || isEnterprisePack.value)
const controlsLocked = computed(() => !!(pay.value?.creating || pay.value?.syncing))
const qtyMin = computed(() => (isEnterprise.value || isEnterpriseAddon.value) ? (pay.value?.plan?.minQty || 1) : 1)

const modalTitle = computed(() => {
  if (isEnterprisePack.value) return '购买共享资源包'
  if (isEnterpriseAddon.value) return '追加企业席位'
  if (isEnterprise.value) return '确认企业订阅'
  if (isCard.value) return '购买会员卡'
  if (isPack.value) return '确认购买'
  return '确认订阅'
})

const qtyLabel = computed(() => {
  if (isEnterprisePack.value) return '购买数量'
  if (isEnterpriseAddon.value) return '追加席位'
  if (isEnterprise.value) return '购买席位'
  if (isCard.value) return '购买张数'
  return '购买数量'
})

function stepQty(delta) {
  if (isEnterprisePack.value) stepEnterprisePackQty(delta)
  else if (isEnterprise.value || isEnterpriseAddon.value) stepEnterpriseQty(delta)
  else if (isCard.value) stepCardQty(delta)
  else stepPackQty(delta)
}

function onQtyChange(e) {
  const v = parseInt(e.target.value, 10)
  const next = isNaN(v) ? 1 : v
  if (isEnterprisePack.value) applyEnterprisePackQtyChange(next)
  else if (isEnterprise.value || isEnterpriseAddon.value) applyEnterpriseQtyChange(next)
  else if (isCard.value) applyCardQtyChange(next)
  else applyPackTierChange(next)
  e.target.value = pay.value?.qty
}
</script>

<style scoped lang="scss">
.modal-root {
  position: fixed;
  inset: 0;
  z-index: 4000;
  display: none;
  align-items: center;
  justify-content: center;
  &.open { display: flex; }
}
.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
}
.modal {
  position: relative;
  z-index: 1;
  width: min(620px, calc(100vw - 32px));
  max-height: calc(100vh - 48px);
  overflow: auto;
  background: #fff;
  border-radius: 16px;
  padding: 28px 28px 22px;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.18);
}
.modal__close {
  position: absolute;
  top: 12px;
  right: 14px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #64748b;
  cursor: pointer;
}
h3 {
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
}
.pay-bill-layout {
  display: flex;
  align-items: flex-start;
  gap: 26px;
}
.pay-bill-info {
  flex: 1 1 auto;
  min-width: 0;
}
.m-summary {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 18px;
  background: #f8fafc;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    font-size: 14px;
    color: #64748b;
    padding: 4px 0;
    > span:last-child {
      color: #334155;
      text-align: right;
    }
    .desc {
      text-align: right;
      max-width: 70%;
      color: #334155;
      line-height: 1.55;
      white-space: normal;
    }
    &.big {
      margin-top: 8px;
      padding-top: 12px;
      border-top: 1px dashed #cbd5e1;
      color: #0f172a;
      font-weight: 700;
      font-size: 16px;
      align-items: center;
      b {
        color: #2278FF;
        font-size: 22px;
        font-weight: 700;
        line-height: 1;
      }
    }
  }
}
.field {
  margin-bottom: 14px;
  label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    margin-bottom: 8px;
  }
}
.pay-qty-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.stepper {
  display: inline-flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  overflow: hidden;
  button, input {
    border: none;
    background: #fff;
    height: 36px;
  }
  button {
    width: 36px;
    cursor: pointer;
    color: #334155;
    font-size: 18px;
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
.pay-qty-unit { font-size: 12px; color: #94a3b8; }
.pay-methods {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  button {
    height: 44px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    background: #fff;
    cursor: pointer;
    font-weight: 600;
    color: #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    svg {
      width: 24px;
      height: 24px;
      flex: none;
      display: block;
    }
    &.is-selected {
      border-color: #2278FF;
      background: rgba(34, 120, 255, 0.06);
      color: #2278FF;
    }
    &:disabled { opacity: 0.45; cursor: not-allowed; }
  }
}
.pay-bill-qr {
  flex: none;
  width: 272px;
  text-align: center;
  .m-sub { font-size: 13px; color: #64748b; margin: 0 0 12px; }
}
.qr-box {
  width: 240px;
  min-height: 200px;
  margin: 0 auto 12px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
}
.qr-loading { color: #64748b; font-size: 14px; }
.pay-status { margin-top: 10px; font-size: 13px; color: #475569; }
.pay-countdown { margin-top: 4px; font-size: 12px; color: #94a3b8; }
.form-error {
  margin-top: 12px;
  color: #ef4444;
  font-size: 13px;
}
.fine {
  margin: 14px 0 0;
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;
  text-align: center;
}
.pay-result {
  text-align: center;
  padding: 24px 8px 8px;
  .orb { font-size: 40px; margin-bottom: 10px; }
  h3 { margin-bottom: 8px; }
  p { color: #64748b; margin-bottom: 18px; }
}
.btn-primary {
  min-width: 140px;
  height: 42px;
  border: none;
  border-radius: 10px;
  background: #2278FF;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
@media (max-width: 720px) {
  .pay-bill-layout { grid-template-columns: 1fr; }
}
</style>
