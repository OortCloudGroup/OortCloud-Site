<template>
  <div class="home_page buyPage">
    <div class="platTop w1380">
      <div class="VLStream">
        增值购买
      </div>
      <el-input
        v-model="searchValue"
        :prefix-icon="Search"
        class="bottom_pro_address"
        placeholder="输入关键字搜索应用"
      />
    </div>
    <div class="buyAppsOut">
      <div style="width: 65%;">
        <!-- 循环渲染所有应用 -->
        <el-checkbox-group
          v-model="checkedApps"
          class="priceIconBox"
        >
          <el-checkbox
            v-for="(item, itemIndex) in filteredAppList"
            :key="item.app_id || itemIndex"
            :label="item.app_id"
            :value="item"
            @change="(val) => handleAppCheck(val, item)"
          >
            <div class="flexRowAC priceIconIt">
              <oort-img class="priceImg" :src="item.icon_url" alt="" />
              <div class="priceTi">
                {{ item.app_name }}
              </div>
            </div>
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="buyApps">
        <!-- 计算所有选中项总数 -->
        <div class="buyApps_t">
          已选择 {{ checkedApps.length }} Apps
        </div>

        <!-- 显示所有选中项 -->
        <div
          v-for="(item, i) in checkedApps"
          :key="i"
        >
          <div class="buyAppsOut_t flexRowAC t">
            <oort-img class="buyAppsOut_t_img" :src="item.icon_url" alt="" />
            {{ item.app_name }}
          </div>
        </div>

        <div
          :class="{opa: !checkedApps.length}"
          class="buyBtn flexRowAC"
          @click="buyClick()"
        >
          立即购买
        </div>
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      width="80%"
      destroy-on-close
      top="5vh"
    >
      <addBuyDetail v-model="dialogVisible" :current-app="currentApp" :platform-id="props.platformId" @confirm-data="handleGetChildData" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import addBuyDetail from './addBuyDetail.vue'
import { appList, calcPrice } from '@/api'

const props = defineProps({
  platformId: {
    type: Number,
    required: true
  }
})
onMounted(() => {
  appListFn()
})

const appListRaw = ref([])
const searchValue = ref('')
const checkedApps = ref([])
const dialogVisible = ref(false)
const currentApp = ref(null)
const buyList = ref([])

const filteredAppList = computed(() => {
  if (!searchValue.value) return appListRaw.value
  return appListRaw.value.filter(item =>
    item.app_name.includes(searchValue.value)
  )
})

// 获取应用列表接口
const appListFn = async() => {
  try {
    const data = {
      page: 1,
      pagesize: 100
    }
    const res = await appList(data)
    appListRaw.value = res.data.list
  } catch (err) {
    console.error('获取应用列表失败:', err)
  }
}

const handleAppCheck = (isChecked, item) => {
  if (isChecked) {
    // 勾选 → 打开弹窗
    currentApp.value = item
    dialogVisible.value = true
  } else {
    // 取消勾选 → 根据 app_id 删除 buyList 里的数据
    buyList.value = buyList.value.filter(
      data => data.app_id !== item.app_id
    )
    console.log('取消勾选，已删除对应数据，最终buyList：', buyList.value)
  }
}

const handleGetChildData = (data) => {
  console.log('子组件传回的数据：', data)

  buyList.value = buyList.value.filter(
    item => item.app_id !== data.app_id
  )
  buyList.value.push(data)

  console.log('最终购买列表 buyList：', buyList.value)
  dialogVisible.value = false
}
// 立即购买
// const buyClick = () => {
//   if (!checkedApps.value.length) return false
//   console.log('选中的应用：', checkedApps.value)
//   // window.open('http://oort.oortcloudsmart.com:23410/bus/apaas-web/console_manage/index.html', '_blank')
// }
const buyClick = async() => {
  if (!checkedApps.value.length) {
    ElMessage.warning('请先选择应用')
    return false
  }
  const items = []

  buyList.value.forEach((item) => {
    const { app_id, app_version_id, package_id, capability_id } = item

    if (package_id) {
      items.push({
        app_id,
        app_version_id,
        package_id,
        item_type: 1,
        purchase_years: 1,
        quantity: 1
      })
    }
    if (capability_id.length !== 0) {
      capability_id.forEach((cid) => {
        items.push({
          app_id,
          app_version_id,
          capability_id: cid,
          item_type: 2,
          purchase_years: 1,
          quantity: 1
        })
      })
    }
  })
  const data = {
    currency: 'CNY',
    items
  }
  try {
    const res = await calcPrice(data)
    console.log('价格计算成功：', res)
  } catch (err) {
    console.error('价格计算失败：', err)
  }
}
</script>

<style scoped lang="scss">
.buyPage {
  position: relative;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.buyAppsOut {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;

  .buyAppsList {
    margin-bottom: 100px;
  }

  .elCheckbox_all{
    padding-bottom: 20px;
  }
}

.buyAppsOut_t {
  font-weight: 700;
  font-size: 20px;
  color: #3D3D3D;
  line-height: 24px;
  gap: 8px;

  .buyAppsOut_t_img{
    width: 32px;
    height: 32px;
  }

  &.t {
    padding-bottom: 20px;
  }
}

.buyApps {
  margin-top: 44px;
  background-color: #fff;
  width: 420px;
  padding: 28px;
  flex-shrink: 0;
  min-height: 200px;

  .buyApps_t {
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 28px;
    color: #3D3D3D;
    line-height: 42px;
  }
}

.platTop {
  text-align: center;
  padding-bottom: 50px;

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 50px;
    padding: 8px 0;
    position: relative;
  }

  :deep(.el-input) {
    height: 78px;
    box-shadow: 0px 8px 30px 0px rgba(34, 120, 255, 0.06);
    border-radius: 24px 24px 24px 24px;
    font-size: 28px;

    .el-input__wrapper {
      padding-left: 26px;
    }
  }
}

// 立即购买
.buyBtn{
  cursor: pointer;
  margin-top: 20px;
  justify-content: center;
  color: #FFFFFF;
  background: #2278FF;
  height: 72px;
  border-radius: 8px 8px 8px 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  &.opa {
    opacity: .5;
    cursor: not-allowed;
  }
}

// 应用列表样式
:deep(.priceIconBox ) {
  .el-checkbox{
    width: calc(25% - 60px);
    background-color: #fff;
    padding: 10px ;
    margin-bottom: 20px;
    height: 56px;
  }
  .priceIconIt {
    .priceImg {
      width: 56px;
      height: 56px;
      margin-right: 10px;
      object-fit: cover; // 保证图片不变形
    }
    .priceTi{
      white-space: normal
    }
  }

  .el-checkbox__input{
    position: absolute;
    right: 20px;
  }
}
</style>
