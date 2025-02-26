<template>
  <div class="home_page buyPage">
    <div class="platTop w1380">
      <div class="VLStream">
        选择应用
      </div>
      <el-input v-model="value" class="bottom_pro_address" placeholder="订阅邮箱，请输入您的邮箱" />
    </div>
    <div class="flexRowAC buyAppsOut">
      <div v-for="(item,i) in appsList" :key="i" class="buyAppsList">
        <el-checkbox
          v-model="checkAll"
          class="elCheckbox_all"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
        >
          <div class="buyAppsOut_t flexRowAC">
            <img class="buyAppsOut_t_img" src="@/assets/software/price_c1.png" alt="" />
            {{ item.t }}
          </div>
        </el-checkbox>
        <el-checkbox-group
          v-model="checkedCities"
          class="priceIconBox"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="(itd,index) in item.child"
            :key="index"
            :label="itd.t"
            :value="itd"
          >
            <div class="flexRowAC priceIconIt">
              <img class="priceImg" src="@/assets/software/price_c1.png" alt="" />
              <div class="priceTi">
                {{ itd.t }}
              </div>
            </div>
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="buyApps">
        <div class="buyApps_t">
          已选择 {{ checkedCities.length }} Apps
        </div>
        <div v-for="(item,i) in checkedCities" :key="i">
          <div class="buyAppsOut_t flexRowAC t">
            <img class="buyAppsOut_t_img" src="@/assets/software/price_c1.png" alt="" />
            {{ item.t }}
          </div>
        </div>
        <div :class="{opa: !checkedCities.length}" class="buyBtn flexRowAC" @click="buyClick()">
          立即购买
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import price_c1 from '@/assets/software/price_c1.png'

definePageMeta({
  layout: 'site-new'
})

let value = ref('')
let appsList = ref([])
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref([])
appsList.value = [
  {
    t: '个人效率工具',
    img: price_c1,
    child: [
      { t: '云盘', img: '' },
      { t: '云相册', img: '' },
      { t: '云文档', img: '' },
      { t: '云清单', img: '' },
      { t: '云备忘录', img: '' },
      { t: '电子邮件', img: '' }
    ]
  }
]

const handleCheckAllChange = (val) => {
  checkedCities.value = val ? appsList.value[0]?.child : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === appsList.value[0]?.child.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < appsList.value[0]?.child.length
}

// 立即购买<NuxtLink to="http://oort.oortcloudsmart.com:23410/bus/apaas-web/console_manage/index.html"
const buyClick = () => {
  if (!checkedCities.value.length) return false
  window.open('http://oort.oortcloudsmart.com:23410/bus/apaas-web/console_manage/index.html', '_blank')
}
</script>

<style scoped lang="scss">
.buyPage {
  position: relative;
  background-color: #f7f7f7;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.buyAppsOut {
  padding: 0 160px 100px;
  align-items: flex-start;

  .buyAppsList {
    flex: 1;
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
    width: 24px;
    height: 24px;
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
  padding: 110px 0;

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
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

// 个人效率工具
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
    }
  }

  .el-checkbox__input{
    position: absolute;
    right: 20px;
  }
}
</style>
