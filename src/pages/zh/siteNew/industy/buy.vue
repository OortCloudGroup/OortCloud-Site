<template>
  <div class="home_page buyPage">
    <div class="platTop w1380">
      <div class="VLStream">
        选择应用
      </div>
      <el-input v-model="value" class="bottom_pro_address" placeholder="订阅邮箱，请输入您的邮箱" />
    </div>
    <div class="flexRowAC buyAppsOut">
      <div v-for="(item,i) in appsList" :key="i">
        <div class="buyAppsOut_t flexRowAC">
          <img class="buyAppsOut_t_img" src="@/assets/software/price_c1.png" alt="" />
          {{ item.t }}
        </div>
        <div class="proTitleBox priceIconBox w1380 flexRowAC">
          <div v-for="(itd,index) in item.child" :key="index" class="priceIconIt flexRowAC">
            <div class="flexRowAC">
              <img class="priceImg" src="@/assets/software/price_c1.png" alt="" />
              <div class="priceTi">
                {{ itd.t }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buyApps">
        <div class="buyApps_t">
          已选择 5 Apps
        </div>
        <div>
          购买
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
appsList.value = [
  {
    t: '个人效率工具',
    img: price_c1,
    child: [
      { t: '云盘', img: '' },
      { t: '云盘', img: '' },
      { t: '云盘', img: '' },
      { t: '云盘', img: '' },
      { t: '云盘', img: '' }
    ]
  }
]
</script>

<style scoped lang="scss">
.buyAppsOut {
  padding: 0 160px 100px;
  align-items: flex-start;

  &_t {
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
    color: #3D3D3D;
    line-height: 24px;
    gap: 8px;
  }

  &_t_img{
    width: 24px;
    height: 24px;
  }
}

.buyApps {
  margin-top: 44px;
  background-color: #fff;
  width: 200px;
  padding: 28px;
  flex-shrink: 0;

  .buyApps_t {
    font-weight: 700;
    font-size: 28px;
    color: #3D3D3D;
    line-height: 42px;
  }
}

.buyPage {
  position: relative;
}

.buyPage {
  background-color: #f7f7f7;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
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

.proTitleBox {
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
}

.priceIconBox {
  flex-wrap: wrap;
  gap: 20px;

  .priceIconIt {
    background-color: #fff;
    width: 280px;
    padding: 12px 20px;
    gap: 20px;
  }

  .priceImg {
    width: 56px;
    height: 56px;
  }

  .priceTi {
    color: #3D3D3D;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
  }
}

</style>
