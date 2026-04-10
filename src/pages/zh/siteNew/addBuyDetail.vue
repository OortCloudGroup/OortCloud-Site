<template>
  <div class="Detail-page">
    <h2>购买应用</h2>
    <div class="app">
      <oort-img class="app-icon" :src="props.currentApp.icon_url" alt="" />{{ props.currentApp.app_name }}
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleTabClick">
      <el-tab-pane label="超值套餐" name="first">
        <div class="priceBox">
          <div
            v-for="item in public_list"
            :key="item.id"
            class="item"
            :class="{
              'package-included': item.in_platform_package === 1,
              'package-selected': selectedItemId === item.id && !hasIncludedPackage
            }"
          >
            <div>
              <div class="item-1 title1">
                {{ item.name }}
              </div>
              <div class="item-2 title2">
                {{ item.price_desc }}
              </div>
              <div class="item-3 title3" style="color: #666;">
                折合{{ (item.final_price / 1200).toFixed(2) }}/月
              </div>
              <div class="item-4 title3">
                {{ item.remark }}
              </div>
            </div>
            <div class="item_content">
              <div
                v-if="item.in_platform_package === 0"
                class="item-6"
                :class="{ 'disabled-btn': hasIncludedPackage }"
                @click="buyFn(item)"
              >
                {{ selectedItemId === item.id ? '已选择' : '选择套餐' }}
              </div>
              <div v-if="item.in_platform_package === 1" class="item-6">
                已包含此套餐
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="自选功能" name="second">
        <div class="package-container">
          <div class="package-list">
            <label v-for="(item, index) in packageList" :key="index" class="package-item">
              <el-checkbox
                v-model="item.checked"
                :disabled="item.disabled"
                @change="handleCheckChange"
              />
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">¥ {{ item.price }}/年</span>
            </label>
          </div>

          <div class="total-section">
            <span class="total-label">合计金额</span>
            <span class="total-price">¥ {{ totalAmount.toFixed(2) }}</span>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="btn-group">
      <el-button size="large" @click="handleCancel">
        取消
      </el-button>
      <el-button type="primary" size="large" @click="handleConfirm">
        确定
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { appMealList, capabilityList } from '@/api'
const activeName = ref('first')
const props = defineProps({
  currentApp: {
    type: Object,
    required: true
  },
  platformId: {
    type: Number
  }
})
const emit = defineEmits(['confirm-data'])
const public_list = ref([])

const selectedItemId = ref(null)

const hasIncludedPackage = computed(() => {
  return public_list.value.some(item => item.in_platform_package === 1)
})

const capabilityListFn = async() => {
  try {
    const data = ref({})
    if (props.platformId) {
      data.value = {
        app_id: props.currentApp.app_id,
        platform_package_id: props.platformId,
        app_version_id: props.currentApp.latest_version.version_id,
        package_id: selectedItemId.value
      }
    } else {
      data.value = {
        app_id: props.currentApp.app_id,
        app_version_id: props.currentApp.latest_version.version_id,
        package_id: selectedItemId.value
      }
    }
    const res = await capabilityList({ ...data.value })

    packageList.value = res.data.map(item => ({
      ...item,
      price: Number((item.annual_price / 100).toFixed(2))
    }))
  } catch (err) {
    console.error('获取应用套餐列表失败:', err)
  }
}

const getAppMealList = async() => {
  try {
    const data = ref({})
    if (props.platformId) {
      data.value = {
        app_id: props.currentApp.app_id,
        platform_package_id: props.platformId
      }
    } else {
      data.value = {
        app_id: props.currentApp.app_id
      }
    }
    const res = await appMealList({ ...data.value })
    public_list.value = res.data.list
    const includedItem = public_list.value.find(item => item.in_platform_package === 1)
    if (includedItem) {
      selectedItemId.value = includedItem.id
    } else {
      selectedItemId.value = null
    }
  } catch (err) {
    console.error('获取应用套餐列表失败:', err)
  }
}

const handleTabClick = (tab) => {
  if (tab.props.name === 'second') {
    capabilityListFn()
  }
}

// 选择套餐点击事件
const buyFn = (item) => {
  // 有已包含套餐，禁止点击
  if (hasIncludedPackage.value) return
  selectedItemId.value = item.id
  console.log('已选择套餐：', item)
}

// const packageList = ref([
//   { name: '课程存储空间 10 GB', price: 38.8, checked: false, disabled: false },
//   { name: '视频清晰度', price: 38.8, checked: false, disabled: false },
//   { name: '视频清晰度', price: 38.8, checked: false, disabled: false },
//   { name: '视频清晰度', price: 38.8, checked: false, disabled: false }
// ])

const packageList = ref([])

const totalAmount = computed(() => {
  return packageList.value
    .filter(item => item.checked)
    .reduce((sum, item) => sum + item.price, 0)
})

const handleCheckChange = () => {
  console.log('当前勾选套餐：', packageList.value.filter(item => item.checked))
}

const handleConfirm = () => {
  // 1. 组装选中的功能ID数组
  const capabilityIds = packageList.value
    .filter(item => item.checked)
    .map(item => item.capability_id)

  // 2. 按照你要求的格式组装数据
  const result = {
    app_id: props.currentApp.app_id,
    platform_package_id: props.platformId,
    app_version_id: props.currentApp.latest_version.version_id,
    package_id: selectedItemId.value,
    capability_id: capabilityIds,
    purchase_years: 1,
    quantity: 1
  }

  // 3. 把数据发送给父组件
  emit('confirm-data', result)
}

const handleCancel = () => {
  // 通知父组件关闭弹窗
  emit('update:modelValue', false)
}

watch(() => props.currentApp, (newId) => {
  if (newId) {
    getAppMealList()
  }
}, { immediate: true })
</script>

<style scoped lang="scss">
.Detail-page{
  position: relative;
  box-sizing: border-box;
  padding: 60px;
  padding-bottom: 100px;
  min-height: 900px;
  color: #333;
  h2{
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    line-height: normal;
    margin-bottom: 40px;
  }
}
.app{
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  .app-icon{
    width: 58px;
    height: 58px;
    margin-right: 10px;
  }
}

.priceBox{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.item{
  border-radius: 16px;
  color: #333;
  background-color: #E8F0FE;
  box-sizing: border-box;
  padding: 32px;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item-1{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .Popular{
      font-size: 14px;
      font-weight: 500;
      color: #333;
      background-color: #FECE02;
      padding: 5px 15px;
      margin-left: 15px;
      border-radius: 99px;
    }
  }
  .item-2{
    margin-bottom: 10px;
  }
  .item-3{
    margin-bottom: 25px;
  }
  .item-4{
    min-height: 150px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
  .item-5{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img{
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
  .item-6{
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    text-align: center;
    background-color: #2278FF;
    color: #fff;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    transition: all 0.2s;
  }
  .item-7{
    display: flex;
    justify-content: center;
    gap: 24px;
    color: #2278FF;
    margin-top: 20px;
    .meal{
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    img{
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
}
.title1{
    font-size: 20px;
    font-weight: 500;
}
.title2{
  font-size: 32px;
  font-weight: 500;
}
.title3{
  font-size: 16px;
  font-weight: 400;
}

// 已包含套餐样式
.package-included {
  box-shadow: 0 0 20px rgba(34, 120, 255, 0.3);
  border: 1px solid #2278FF;
  position: relative;
}
// 选中套餐高亮样式
.package-selected {
  border: 1px solid #2278FF;
  box-shadow: 0px 0px 24px 0px rgba(34, 120, 255, 0.4);
  background-color: #dce9ff;
}
// 禁用按钮样式
.disabled-btn {
  background-color: #90c3ff !important;
  cursor: not-allowed !important;
}

.package-container {
  max-width: 800px;
  margin-top: 30px;
}
.package-list {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 24px;
}
.package-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #ebeef5;
  cursor: pointer;
  transition: background-color 0.2s;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f5f7fa;
  }
  :deep(.el-checkbox) {
    margin-right: 12px;
  }
  .item-name {
    flex: 1;
    font-size: 16px;
    color: #303133;
  }
  .item-price {
    font-size: 16px;
    color: #606266;
  }
}
.total-section {
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
  padding: 0 4px;
  .total-label {
    font-size: 16px;
    color: #909399;
    margin-right: 8px;
  }
  .total-price {
    font-size: 32px;
    font-weight: bold;
    color: #303133;
  }
}
.btn-group {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  bottom: 20px;
  right: 60px;
  gap: 16px;
  .el-button {
    width: 200px;
    height: 48px;
    font-size: 16px;
    border-radius: 4px;
  }
}
.package-item:last-child:hover {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
