<template>
  <div class="home_page vls">
    <div class="productBox w1380">
      <div class="proT">
        软件下载
      </div>
      <div class="prod">
        支持 iOS、Android 和 Harmony OS等平台，提供智能监控与设备管理，保障多场景安全与高效运行。
      </div>
      <div class="productImg p5Out flexRowAC">
        <div v-for="(item,i) in p5Arr" :key="i" class="p5Item flexRowAC">
          <img v-if="item.flag" class="proCode" src="@/assets/VLimg2.0/productCode.png" alt="" />
          <img class="p5Iimg" :src="item.img" alt="" />
          <span class="p5t">{{ item.t }}</span>
          <span class="p5d">{{ item.d }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import product5_1_ from '@/assets/VLimg2.0/product5_1_.png'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'

definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '下载'
  }
})

let p5Arr = ref([])
p5Arr.value = [
  { t: '微信小程序', d: '版本号：V3.1.06', flag: false, img: product5_1_ },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]
</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 100px auto;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT {
    padding-bottom: 40px;
    color: #333333;
    font-weight: bold;
    font-size: 58px;
    line-height: 82px;
  }

  .prod {
    padding-bottom: 60px;
    color: #717781;
    font-size: 20px;
  }

  .productImg {
    width: 100%;
    height: 600px;
    padding-bottom: 60px;

    .proImg {
      width: 100%;
      height: 100%;
    }
  }

  .product1 {
    width: auto;
    height: 600px;
  }

  .product2Out {
    height: initial;
    justify-content: space-between;

    .product2Item {
      border-radius: 24px;
      background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
      border: 1px solid #001F5019;
      padding: 20px 20px 40px;
      flex-direction: column;
      align-items: flex-start;
      color: #3D3D3D;
      font-weight: bold;
      font-size: 28px;
    }

    .proImg.product2 {
      margin-bottom: 20px;
      width: 545px;
      height: 306px;
    }

    .product2Item.p2 {
      background: linear-gradient(180deg, #F7FCFE 0%, #FFFFFF 100%);
      border: 1px solid #001F5019;
    }
  }

  .product3Out.productImg {
    height: initial;
    margin-bottom: 60px;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;

    .p3Box {
      justify-content: space-between;

      .p3 {
        width: 358px;
        height: 170px;
      }
    }

    .p3_title {
      padding-top: 40px;
      text-align: left;
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .ps_desc {
      padding-top: 16px;
      padding-left: 60px;
      width: 900px;
      color: #3D3D3D;
      font-size: 20px;
      text-align: left;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        top: 26px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #333;
      }
    }
  }

  .p4Out {
    width: auto;
    height: 870px;
  }

  .p5Out {
    flex-wrap: wrap;
    gap: 40px;

    .p5Item {
      padding: 50px 0;
      flex-direction: column;
      border-radius: 40px;
      background: #FFFFFF;
      box-shadow: 0px 0px 48px 0px #07005714;
      width: 300px;
      height: 200px;
      flex-shrink: 0;
      gap: 10px;
      position: relative;
    }

    .p5Iimg {
      width: 110px;
      height: 110px;
    }

    .p5t {
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .p5d {
      color: #717781;
      font-size: 14px;
    }

    .proCode{
      width: 70px;
      height: 70px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0px 0px 0px 0px;
    }
  }
}
</style>
