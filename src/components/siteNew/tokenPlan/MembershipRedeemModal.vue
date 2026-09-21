<template>
  <div v-if="open" class="mask" role="presentation" @keydown="onKeydown">
    <button class="backdrop" type="button" aria-label="关闭" @click="emitClose" />
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="member-redeem-title">
      <header>
        <h2 id="member-redeem-title">
          使用会员卡
        </h2>
        <button class="close" type="button" aria-label="关闭" @click="emitClose">
          ×
        </button>
      </header>
      <div class="body">
        <div class="ticket" aria-hidden="true">
          <span>兑换卡</span>
          <i />
        </div>
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
  display: grid;
  place-items: center;
  padding: 24px;
}
.backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: rgba(15, 23, 42, 0.45);
  cursor: pointer;
}
.modal {
  position: relative;
  z-index: 1;
  width: min(520px, 100%);
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.18);
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    border-bottom: 1px solid #e2e8f0;
    h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #0f172a;
    }
  }
  .close {
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    font-size: 24px;
    font-weight: 300;
    color: #0f172a;
    cursor: pointer;
    line-height: 1;
  }
}
.body {
  padding: 16px 18px 20px;
  label {
    display: block;
    margin-bottom: 6px;
    font-size: 12px;
    color: #64748b;
    em {
      color: #ef4444;
      font-style: normal;
    }
  }
  input {
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    padding: 0 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: #f8fafc;
    color: #0f172a;
    font-size: 12px;
    letter-spacing: 0.08em;
    &:focus {
      border-color: #2278FF;
      outline: none;
    }
  }
}
.ticket {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 140px;
  overflow: hidden;
  margin-bottom: 16px;
  padding: 18px;
  border-radius: 10px;
  color: #d6e6ff;
  background: #1a4f9c;
  font-size: 22px;
  font-weight: 600;
  box-sizing: border-box;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: rgba(34, 120, 255, 0.18);
  }
  &::before {
    left: 0;
    right: 0;
    top: 54%;
    height: 6px;
  }
  &::after {
    top: 0;
    bottom: 0;
    right: 15%;
    width: 6px;
  }
  i {
    position: absolute;
    top: 18px;
    right: calc(15% - 28px);
    width: 60px;
    height: 60px;
    border: 6px solid #7eb3ff;
    border-radius: 50%;
    box-shadow: 0 0 0 8px rgba(34, 120, 255, 0.15);
  }
  span {
    position: relative;
    z-index: 1;
  }
}
.notice {
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 8px;
  background: #f8fafc;
  strong {
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    color: #0f172a;
  }
  ul {
    margin: 0;
    padding-left: 16px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.7;
  }
  li { list-style: disc; }
  .warn { color: #e4a72c; }
}
.error {
  margin: 10px 0 0;
  color: #ef4444;
  font-size: 12px;
}
.submit {
  width: 100%;
  height: 38px;
  margin-top: 14px;
  border: none;
  border-radius: 24px;
  background: #2278FF;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
.buy-tip {
  margin: 12px 0 0;
  text-align: center;
  font-size: 12px;
  color: #94a3b8;
  button {
    margin-left: 6px;
    border: none;
    background: transparent;
    color: #2278FF;
    font-weight: 600;
    cursor: pointer;
  }
}
@media (max-width: 760px) {
  .mask { padding: 12px; }
  .modal { max-height: calc(100vh - 24px); }
  .ticket { height: 110px; }
}
</style>
