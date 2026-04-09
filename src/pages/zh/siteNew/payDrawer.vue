<template>
  <div class="whole-page">
    <div class="title">
      支付订单
    </div>
    <div class="payment-container">
      <!-- 左侧：选择付款方式 -->
      <div class="payment-left">
        <div class="section-title">
          <img src="@/assets/img/pay-icon.png" alt="" />
          <span class="title-main">选择付款方式</span>
          <span class="title-sub">选择最适合您的支付方式</span>
        </div>

        <!-- 第三方平台支付 -->
        <div class="payment-group">
          <p class="group-title">
            第三方平台支付
          </p>
          <div class="payment-methods">
            <div
              v-for="method in thirdPartyMethods"
              :key="method.id"
              class="method-item"
              :class="{ active: selectedMethod === method.id }"
              @click="selectedMethod = method.id"
            >
              <div class="method-icon">
                <img :src="method.img" alt="" />
              </div>
              <div class="method-info">
                <span class="method-name">{{ method.name }}</span>
                <span class="method-code">{{ method.code }}</span>
              </div>
              <el-icon v-if="selectedMethod === method.id" class="check-icon" :size="16">
                <Check />
              </el-icon>
            </div>
          </div>
        </div>

        <!-- 更多选择 -->
        <div class="payment-group more-group">
          <p class="group-title">
            更多选择
          </p>
          <div class="more-options">
            <el-radio v-model="moreSelected" label="cloud">
              云闪付
            </el-radio>
            <el-radio v-model="moreSelected" label="alipay">
              支付宝
            </el-radio>
          </div>
        </div>
      </div>

      <!-- 右侧：订单信息 & 二维码 -->
      <div class="payment-right">
        <div class="title-main">
          支付订单
        </div>
        <div class="qrcode-box">
          <!-- 这里用占位图，实际项目替换为真实二维码 -->
          <!-- <img :src="qrDataUrl" alt="支付二维码" class="qrcode-img" /> -->
          <qrcode-vue :value="payCode" :size="200" level="H" />
        </div>
        <div class="order-info">
          <p class="amount-title">
            实付金额
          </p>
          <p class="amount-value">
            ¥ {{ (payAmount / 100).toFixed(2) }}
          </p>
          <p class="order-no">
            订单号: {{ orderNo }}
          </p>
        </div>
        <div class="order-detail">
          <div class="detail-item">
            <div>商户名称</div>
            <div>奥尔特云（深圳）智慧科技有限公司</div>
          </div>
          <div class="detail-item">
            <div>订单信息</div>
            <div>应用购买</div>
          </div>
          <div class="detail-item">
            <div>应付金额</div>
            <div style="color: #FF285E;">
              ¥ {{ (payAmount / 100).toFixed(2) }}
            </div>
          </div>
          <!-- <div class="detail-item">
            <div>优惠金额</div>
            <div style="color: #FF285E;">
              ¥ -21.00
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { Check } from '@element-plus/icons-vue'
import QrcodeVue from 'qrcode.vue'
import { useRouter } from 'vue-router'
import wx from '@/assets/img/wx.png'
import zfb from '@/assets/img/zfb.png'
import { createBill, orderDetail } from '@/api'

const router = useRouter()
const props = defineProps({
  orderData: {
    type: Object,
    required: true
  }
})

// 选中的支付方式
const selectedMethod = ref('alipay')
const moreSelected = ref('cloud')
const payCode = ref('')
const payAmount = ref(0)
const orderNo = ref('')

// 轮询定时器
let pollTimer:any = null

const thirdPartyMethods = ref([
  {
    id: 'wxpay',
    name: '微信支付',
    code: 'wxpay',
    img: wx,
    color: '#07c160'
  },
  {
    id: 'alipay',
    name: '支付宝支付',
    code: 'alipay',
    img: zfb,
    color: '#1677ff'
  }
])

// 创建支付单
const createBillFn = async() => {
  try {
    const data = {
      order_no: props.orderData?.order_info.order_no,
      pay_channel: 2,
      period_no: 0,
      trade_type: 'PRECREATE'
    }
    const res = await createBill(data)
    if (res.code === 200) {
      payCode.value = res.data.params.qr_code
      payAmount.value = res.data.pay_amount
      orderNo.value = res.data.order_no
    }
  } catch (err) {
    console.log('创建支付单失败：', err)
  }
}

// 查询订单状态
const orderDetailFn = async() => {
  try {
    const res = await orderDetail({
      order_no: props.orderData?.order_info.order_no
    })
    if (res.code === 200) {
      const status = res.data.order_info.status
      if (status !== 0) {
        stopPolling() // 订单完成 → 停止轮询
        sessionStorage.setItem('orderInfo', JSON.stringify(res.data.order_info))
        router.push({ path: '/zh/siteNew/pay' })
      }
    }
  } catch (err) {
    console.log('获取订单详情失败：', err)
  }
}

// 停止轮询
const stopPolling = () => {
  if (pollTimer) {
    clearInterval(pollTimer)
    pollTimer = null
  }
}

// 开始轮询
const startPolling = () => {
  // 先清旧定时器
  stopPolling()

  if (!props.orderData?.order_info.order_no) return

  // 2秒轮询一次
  pollTimer = setInterval(() => {
    orderDetailFn()
  }, 2000)
}

// 监听 orderData 变化 → 自动重启定时器
watch(
  () => props.orderData,
  (newVal) => {
    // 空数据 → 停止
    if (!newVal || Object.keys(newVal).length === 0) {
      stopPolling()
      return
    }

    // 有订单 → 创建支付单 + 启动轮询
    createBillFn()
    startPolling()
  },
  { deep: true, immediate: true }
)

// 组件卸载 → 停止
onUnmounted(() => {
  stopPolling()
})
</script>

<style scoped lang="scss">
.whole-page{
  margin: 30px;
  margin-top: 0;
  height: 100%;
}
.title{
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
}
.payment-dialog {
  :deep(.el-dialog__header) {
    text-align: center;
    padding: 16px 0;
    border-bottom: 1px solid #f0f0f0;
    .el-dialog__title {
      font-size: 24px;
      font-weight: 600;
      color: #333;
    }
    .el-dialog__close {
      font-size: 24px;
    }
  }
  :deep(.el-dialog__body) {
    padding: 20px;
  }
}

.payment-container {
  display: flex;
  gap: 20px;
  height: 850px;

}

/* 左侧样式 */
.payment-left {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  .section-title {
    margin-bottom: 40px;
    position: relative;
    img{
      position: absolute;
      width: 76px;
      height: 27px;
      top: 20px;
    }

    .title-sub {
      font-size: 18px;
      color: #676D7F;
    }
  }
  .payment-group {
    margin-bottom: 40px;
    .group-title {
      font-size: 16px;
      color: #333;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .payment-methods {
      display: flex;
      gap: 12px;
      .method-item {
        box-sizing: border-box;
        width: 276px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        border: 1px solid #dcdfe6;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
        &:hover {
          border-color: #409eff;
          background: #f5faff;
        }
        &.active {
          border-color: #409eff;
          background: #f5faff;
          .check-icon {
            position: absolute;
            top: 8px;
            right: 8px;
            color: #409eff;
          }
        }
        .method-icon {
          img{
            width: 48px;
            height: 48px;
          }
        }
        .method-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          .method-name {
            font-size: 14px;
            font-weight: 500;
            color: #333;
          }
          .method-code {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
  .more-group {
    .more-options {
      display: flex;
      gap: 16px;
      :deep(.el-radio__label) {
        font-size: 14px;
        color: #666;
      }
    }
  }
}
.title-main {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

/* 右侧样式 */
.payment-right {
  width: 400px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  .order-header {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 24px;
  }
  .qrcode-box {
    display: flex;
    justify-content: center;
    margin: 60px auto;
    margin-bottom: 40px;
    .qrcode-img {
      width: 200px;
      height: 200px;
      border-radius: 8px;
    }
  }
  .order-info {
    .amount-title {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
    .amount-value {
      font-size: 38px;
      font-weight: 700;
      color: #333;
      text-align: center;
    }
    .order-no {
      font-size: 13px;
      color: #666;
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
.order-detail{
  margin-top: 50px;
}
.detail-item{
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  margin: 0 20px;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bac1d4;
}
</style>
