<template>
  <div class="payment-result-container">
    <!-- 顶部状态图标与标题 -->
    <div class="result-header">
      <div class="icon-wrapper">
        <img
          src="@/assets/img/pay-picture.png"
          alt="支付结果图标"
          class="payResult"
        />
        <img v-if="orderInfo.status === 1" src="@/assets/img/success.png" alt="" class="green-dot" />
        <img v-else src="@/assets/img/fail.png" alt="" class="green-dot" />
      </div>
      <h2 class="result-title">
        {{ orderInfo.status === 1 ? '支付成功！' : '支付失败' }}
      </h2>
    </div>

    <!-- 操作按钮 -->
    <div class="btn-group">
      <button class="btn btn-primary">
        查看详情
      </button>
      <button class="btn btn-default">
        继续选购
      </button>
    </div>

    <!-- 订单信息卡片 -->
    <div class="order-info-card">
      <h3 class="card-title">
        应用购买
      </h3>

      <div class="info-row">
        <span class="label">订单金额：</span>
        <span class="amount" v-text="`${(orderInfo.pay_amount / 100).toFixed(2)}元`" />

        <span class="label mid-label">支付订单号：</span>
        <span class="value">{{ orderInfo.order_no }}</span>

        <span class="label mid-label">收款商户：</span>
        <span class="value">{{ orderInfo.seller_name }}</span>
      </div>

      <!-- 支付时间：仅在支付成功 (status === 1) 时显示 -->
      <div v-if="orderInfo.status === 1" class="info-row time-row">
        <span class="label">支付时间：</span>
        <span class="value">{{ orderInfo.updated_at }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

definePageMeta({
  layout: 'site-new'
})

const route = useRoute()
// 解析路由参数，默认空对象防止解析报错
const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))

// 可选：在控制台打印数据，方便调试
console.log('订单信息：', orderInfo)
console.log('订单信息222：', route.query.order_info)
</script>

<style scoped lang="scss">
.payment-result-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.result-header {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}

.icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  background-color: #F1F5F9;
  border-radius: 1500px;
}

.green-dot {
  position: absolute;
  bottom: 0;
  right: -10px;
  width: 60px;
  height: 60px;
}
.payResult{
  width: 180px;
  height: 180px;
}

.result-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.btn-group {
  text-align: center;
  margin-bottom: 40px;
}

.btn {
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background-color: #1890ff;
  color: white;
  border: none;
}

.btn-default {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #d9d9d9;
}

.order-info-card {
  padding: 20px 24px;
  background-color: #fafafa;
  border-radius: 8px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.info-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
  font-size: 14px;
}

.label {
  color: #666;
  margin-right: 4px;
}

.amount {
  color: #ff4d4f;
  font-weight: 500;
  margin-right: 20px;
}

.mid-label {
  margin-left: 20px;
}

.value {
  color: #333;
}

.time-row {
  margin-top: 16px;
}
</style>
