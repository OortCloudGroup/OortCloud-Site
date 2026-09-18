<template>
  <div v-if="open" class="mask" role="presentation" @keydown="onKeydown">
    <button class="backdrop" type="button" aria-label="关闭" @click="emitClose" />
    <section class="modal" role="dialog" aria-modal="true">
      <header>
        <h2>使用会员卡</h2>
        <button class="close" type="button" aria-label="关闭" @click="emitClose">
          ×
        </button>
      </header>
      <div class="body">
        <label for="member-redeem-input"><em>*</em> 兑换码</label>
        <input
          id="member-redeem-input"
          :value="redeemKey"
          :maxlength="CARD_KEY_LEN + 7"
          autocomplete="off"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          @input="onInput"
        />
        <div class="notice">
          <strong>兑换须知</strong>
          <ul>
            <li>本商品为电子兑换码，兑换后对应会员周期立即生效。</li>
            <li>仅未订阅账号可兑换，已有订阅请在到期后兑换。</li>
            <li class="warn">
              兑换码购买后 90 天内有效，过期失效且无法延期或退款。
            </li>
            <li class="warn">
              每个兑换码仅限使用一次，兑换后不可撤销和转让。
            </li>
          </ul>
        </div>
        <p v-if="activeSub" class="error">
          当前账号已有生效中的订阅，暂不能兑换
        </p>
        <button class="submit" type="button" :disabled="!canSubmit" @click="submit">
          {{ redeemingNow ? '正在兑换…' : '确认兑换' }}
        </button>
        <p class="buy-tip">
          还没有会员卡？
          <button type="button" @click="emitBuy">
            去购买
          </button>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useWritable } from '@/utils/tokenPlan/useWritable.js'
import { CARD_KEY_LEN } from '@/utils/tokenPlan/membershipCardApi.js'
import {
  hasActiveSub,
  redeeming,
  redeemCard,
  refreshActiveSub
} from '@/utils/tokenPlan/membershipCardStore.js'

const props = defineProps({
  open: { type: Boolean, default: false }
})
const emit = defineEmits(['close', 'buy'])

const redeemKey = ref('')
const activeSub = useWritable(hasActiveSub)
const redeemingNow = useWritable(redeeming)
let checkedOpen = false

watch(() => props.open, (v) => {
  if (v && !checkedOpen) {
    checkedOpen = true
    refreshActiveSub()
  }
  if (!v) checkedOpen = false
})

const normalizedKey = computed(() =>
  redeemKey.value.trim().toUpperCase().replace(/[\s-]/g, '')
)
const canSubmit = computed(() =>
  normalizedKey.value.length === CARD_KEY_LEN && !redeemingNow.value && !activeSub.value
)

function emitClose() { emit('close') }
function emitBuy() { emit('buy') }
function onInput(e) {
  redeemKey.value = String(e.currentTarget.value || '').toUpperCase()
}
async function submit() {
  if (!canSubmit.value) return
  const result = await redeemCard(normalizedKey.value)
  if (result && result.ok) {
    redeemKey.value = ''
    emitClose()
  }
}
function onKeydown(e) {
  if (e.key === 'Escape') emitClose()
  if (e.key === 'Enter') submit()
}
</script>

<style scoped lang="scss">
.mask {
  position: fixed;
  inset: 0;
  z-index: 4100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.backdrop {
  position: absolute;
  inset: 0;
  border: none;
  background: rgba(15, 23, 42, 0.45);
  cursor: pointer;
}
.modal {
  position: relative;
  z-index: 1;
  width: min(480px, calc(100vw - 32px));
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.18);
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid #e2e8f0;
    h2 { margin: 0; font-size: 18px; }
  }
  .close {
    border: none;
    background: transparent;
    font-size: 24px;
    color: #64748b;
    cursor: pointer;
  }
}
.body {
  padding: 20px;
  label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    margin-bottom: 8px;
    em { color: #ef4444; font-style: normal; }
  }
  input {
    width: 100%;
    height: 42px;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 0 12px;
    font-size: 14px;
    margin-bottom: 14px;
    box-sizing: border-box;
  }
}
.notice {
  background: #f8fafc;
  border-radius: 10px;
  padding: 12px 14px;
  margin-bottom: 14px;
  strong { font-size: 13px; color: #334155; }
  ul {
    margin: 8px 0 0;
    padding-left: 18px;
    font-size: 12.5px;
    color: #64748b;
    line-height: 1.6;
  }
  .warn { color: #b45309; }
}
.error { color: #ef4444; font-size: 13px; margin: 0 0 12px; }
.submit {
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 10px;
  background: #2278FF;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
}
.buy-tip {
  text-align: center;
  margin: 14px 0 0;
  font-size: 13px;
  color: #64748b;
  button {
    border: none;
    background: transparent;
    color: #2278FF;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
