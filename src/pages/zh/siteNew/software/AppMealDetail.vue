<template>
  <el-dialog
    v-model="visible"
    title="套餐详情"
    width="60%"
    class="app-detail-dialog"
    append-to-body
    destroy-on-close
    :close-on-click-modal="true"
    :show-close="true"
  >
    <div class="package-detail-modal">
      <!-- 头部区域 -->
      <div class="modal-header">
        <div class="header-left">
          <h1 class="header-title">
            {{ detail.name }}
          </h1>
          <p class="header-desc">
            {{ detail.remark }}
          </p>
        </div>
      </div>

      <div class="price-bar">
        <div class="price-left">
          <p class="price-label">
            套餐价格
          </p>
          <div class="price-content">
            <span class="price">{{ detail.price_desc }}</span>
            <button class="subscribe-btn">
              订阅套餐
            </button>
          </div>
        </div>
        <div class="price-right">
          <div class="function-item">
            <p class="item-label">
              支持功能
            </p>
            <p class="item-value">
              {{ detail.capability_items.length }} 项权益
            </p>
          </div>
          <div class="function-item">
            <p class="item-label">
              适用版本
            </p>
            <p class="item-value">
              {{ detail.app_version }}
            </p>
          </div>
        </div>
      </div>

      <div class="benefits-section">
        <div class="benefits-header">
          <h2 class="benefits-title">
            你将获得
          </h2>
          <p class="benefits-desc">
            面向购买用户展示，只保留真正关心的权益内容。
          </p>
        </div>

        <div class="benefits-grid">
          <div v-for="(value,index) in detail.capability_items" :key="index" class="benefit-card">
            <div class="benefit-top">
              <h3 class="card-title">
                {{ value.name }}
              </h3>
              <p class="card-desc">
                {{ value.description }}
              </p>
            </div>
            <div class="card-note">
              <p class="note-label">
                权益说明
              </p>
              <p class="note-text">
                {{ value.grant_desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  detail: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<style scoped lang="scss">
.dialog-content{
  min-height: 400px;
  h2{
    padding-left: 16px;
    color: #333;
    margin-bottom: 5px;
    font-size: 24px;
  }
  p{
    padding-left: 16px;
    color: #666;
    margin-bottom: 20px;
    font-size: 16px;

  }
}

.meal-content{
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .content-left{
    color: #fff;
    font-weight: normal;
    span{
      font-size: 24px;
      font-weight: bold;
    }
  }
  .content-right{
    .item1{
      background-color: #666;
      span{
        font-size: 14px;
        color: #fff;
      }
    }
  }
}

:deep(.el-popper.is-dark) {
  max-width: 400px !important;
  padding: 6px 10px !important;
}
.package-detail-modal {
  background: #ffffff;
  border-radius: 12px;
  margin: 0 auto;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.modal-header {
  padding: 24px 32px;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}
.header-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0 0 8px;
}
.header-title {
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin: 0 0 8px;
}
.header-desc {
  font-size: 16px;
  color: #666;
  margin: 0;
}
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.price-bar {
  background: #1a2035;
  color: #fff;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price-left .price-label {
  font-size: 14px;
  color: #ccc;
  margin: 0 0 8px;
}
.price-content {
  display: flex;
  align-items: center;
  gap: 16px;
}
.price {
  font-size: 36px;
  font-weight: 700;
}
.subscribe-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}
.price-right {
  display: flex;
  gap: 24px;
}
.function-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 20px;
  border-radius: 8px;
}
.item-label {
  font-size: 14px;
  color: #ccc;
  margin: 0 0 4px;
}
.item-value {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.benefits-section {
  padding: 32px;
}
.benefits-header {
  margin-bottom: 24px;
}
.benefits-title {
  font-size: 28px;
  font-weight: 600;
  color: #111;
  margin: 0 0 8px;
}
.benefits-desc {
  font-size: 14px;
  color: #666;
  margin: 0;
}
.benefits-count {
  text-align: right;
  font-size: 14px;
  color: #666;
  background: #f5f7fa;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  float: right;
  margin-bottom: 24px;
}
.benefits-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}
.benefit-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 520px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #111;
  margin: 0 0 8px;
}
.card-desc {
  font-size: 14px;
  color: #666;
  margin: 0 0 24px;
}
.card-value {
  display: flex;
  align-items: baseline;
  gap: 8px;
  background: #ecfdf5;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}
.value-num {
  font-size: 28px;
  font-weight: 700;
  color: #059669;
}
.value-unit {
  font-size: 16px;
  color: #059669;
}
.card-note {
  background: #f9fafb;
  padding: 16px;
  border-radius: 8px;
}
.note-label {
  font-size: 12px;
  color: #999;
  margin: 0 0 8px;
}
.note-text {
  font-size: 14px;
  color: #333;
  margin: 0;
}

</style>

<style lang="scss">
.app-detail-dialog {
  padding: 16px 0 !important;
}

.app-detail-dialog .el-dialog__header {
  padding: 0 16px 16px 32px !important;
  .el-dialog__title{
    font-size: 14px;
    color: #666;
  }
}

</style>
