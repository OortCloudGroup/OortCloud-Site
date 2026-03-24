<template>
  <div class="home_page vls">
    <!-- <NavHeader class="defalut_hea" :is-sticky="isSticky" @handle="handle" /> -->
    <div class="w1380 w1200 CloudBox flexRowAC main">
      <img src="@/public/img/about/unLogin_img8.png" alt="" class="main_img" />
      <div class="right">
        <div class="title1">
          <span style="color: #2278FF;">一站式数字化智能工具</span>，让你的工作更高效
        </div>
        <div class="title2">
          覆盖政企 / 硬件 / 软件三大场景，以 Workup 超级 APP、智能调度、私有云等六大产品矩阵，
          打造更懂你的数字化高效工具
        </div>
        <NuxtLink to="http://oort.oortcloudsmart.com:23410" target="_blank">
          <div class="button">
            探索我们的产品
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="w1380 CloudBox">
      <img src="@/public/img/about/unLogin_img7.png" alt="" class="three_market" />
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          指挥调度
        </div>
        <div class="cl_d">
          指挥调度具备实时监控、资源调配、应急指挥等核心能力，可快速响应各类突发情况，保障业务有序开展，适用于多场景管理需求。
        </div>
      </div>
      <img class="cloudMemo_img1" src="@/public/img/about/unLogin_img2.png" alt="" />
    </div>
    <div class="w1380 CloudBox ipcBox flexRowAC">
      <img class="cloudMemo_img1" src="@/public/img/about/unLogin_img1.png" alt="" />
      <div class="CloudL R">
        <div class="cl_t">
          超级APP应用大全
        </div>
        <div class="cl_d">
          Workup 超级 APP整合多元办公功能，支持任务管理、即时通讯、文件协作等，界面简洁易用，提升团队工作效率，适配多终端使用。
        </div>
      </div>
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          私有云
        </div>
        <div class="cl_d">
          私有云提供专属数据存储与管理空间，安全性高，数据隐私有保障，支持灵活扩展，满足企业个性化 IT 架构需求。
        </div>
      </div>
      <img class="cloudMemo_img1" src="@/public/img/about/unLogin_img3.png" alt="" />
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <img class="cloudMemo_img1" src="@/public/img/about/unLogin_img4.png" alt="" />
      <div class="CloudL R">
        <div class="cl_t">
          智慧档案
        </div>
        <div class="cl_d">
          一站式智能档案管理工具。支持多源采集、自动分类、秒级检索，搭配加密存储与权限管控，轻松解决档案杂乱、查找难、风险高的问题。
        </div>
      </div>
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL R">
        <div class="cl_t">
          AI集成智能算法
        </div>
        <div class="cl_d">
          AI集成智能算法，实现自动化处理、智能识别、预测分析等功能，赋能各业务环节，提升智能化水平与运营效率。
        </div>
      </div>
      <img class="cloudMemo_img1" src="@/public/img/about/unLogin_img5.png" alt="" />
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <img class="cloudMemo_img1" src="@/public/img/about/unLogin_img6.png" alt="" />
      <div class="CloudL R">
        <div class="cl_t">
          智慧协同
        </div>
        <div class="cl_d">
          智慧协同搭建跨部门、跨地域协作平台，促进信息共享与高效沟通，优化协作流程，增强团队凝聚力与战斗力。
        </div>
      </div>
    </div>
    <div class="w1380">
      <div class="app-titile">
        应用产品
      </div>
      <div class="app-list">
        <div v-for="item in list" :key="item.app_id" class="app" @click="appDetail(item.app_id)">
          <oort-img :src="item.icon_url" />
          {{ item.app_name }}
        </div>
      </div>
    </div>

    <AppDetailModal
      v-model="showModal"
      :app-id="currentAppId"
    />
  </div>
</template>

<script setup>
// import NavHeader from '@/components/siteNew/NavHeader.vue'
import { ref, onMounted } from 'vue'
import AppDetailModal from './AppDetailModal.vue'
import { appList } from '@/api'

const showModal = ref(false) // 控制弹窗显示/隐藏
const currentAppId = ref(null) // 当前选中的应用ID

const list = ref([])

onMounted(() => {
  getMealList()
})

const getMealList = async() => {
  try {
    const data = {
      page: 1,
      pagesize: 100
    }
    const res = await appList(data)
    list.value = res.data.list
  } catch (err) {
    console.error('获取应用列表失败:', err)
  }
}

const appDetail = (id) => {
  currentAppId.value = id
  showModal.value = true
}

definePageMeta({
  layout: 'demo1'
})

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
  margin: 0 auto;

  &.w1200 {
    width: 1200px;
  }
}

.useBox {
  justify-content: center;
  gap: 20px;

  .seeMore {
    padding: 24px 50px;
    color: #fff;
    border: 1px solid #2278FF;
    border-radius: 8px;
    background: #2278FF;
    //box-shadow: 0px 4px 10px 0px #FF5E1033;
    font-weight: bold;
    font-size: 18px;
  }

  .u1 {
    color: #333;
    background-color: #F4F4F4;
    border: 1px solid #F4F4F4;
  }

  .red {
    color: #ED2121;
    background-color: transparent;
    border: 1px solid #ED2121;
  }

  .seeMore.u2 {
    display: flex;
    gap: 10px;
    border: 1px solid #333;
    background-color: #333;

    .u2_img {
      width: 28px;
      height: 26px;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.webBottomImg {
  padding-bottom: 160px;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-bottom: 160px;
  justify-content: space-between;
  align-items: flex-start;

  .cl_t {
    white-space: nowrap;
    padding-top: 30px;
    padding-bottom: 20px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 36px;
  }

  .cl_d {
    width: 460px;
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    padding-top: 60px;
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT {
    padding-bottom: 60px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
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
    text-align: left;
    color: #fff;
    width: auto;
    height: 510px;
    background-color: #fff;
    border-radius: 24px;
    background: linear-gradient(135deg, #0C1F40 0%, #252734 98%);
    padding: 40px;

    .pro1_1 {
      width: 46px;
      height: 48px;
      margin-bottom: 46px;
    }

    .pro1_1_s {
      padding-bottom: 50px;
      gap: 12px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;

      .pro1_1_s_b {
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 4px;
        border: 0.5px solid #FFFFFF;
        padding: 4px 10px;
      }
    }

    .pro1_2 {
      gap: 12px;
      padding-bottom: 30px;

      .pro1_2_i {
        width: 16px;
        height: 16px;
      }
    }

    .pro3 {
      padding-top: 35px;
      gap: 30px;

      .pro3_btn {
        flex: 1;
        padding: 20px 0;
        justify-content: center;
        background-color: #fff;
        border-radius: 4px;
        color: #333;
        font-weight: bold;
        font-size: 18px;
      }

      .pro3_btn.p3b {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  .product2Out {
    padding-bottom: 0;
    height: 220px;
    justify-content: center;
    background-image: url('@/assets/software/downloadBG.png');
    background-size: 100% 100%;

    .product2Out_it {
      opacity: 1;
      color: #333333;
      font-size: 16px;

      .pro2o_l {
        padding-left: 12px;
        width: 600px;
        height: 54px;
        background-color: #F0F0F0;

        .pro2o_l_l {
          width: 34px;
          height: 34px;
          margin-right: 12px;
        }
      }

      .pro2o_2 {
        cursor: pointer;
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
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
      height: 300px;
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

    .proCode {
      width: 70px;
      height: 70px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0px 0px 0px 0px;
    }
  }
}

.approval_c1 {
  width: 734px;
  height: auto;
}

.card_container {
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .card_1 {
    flex: 1;
    padding: 40px 20px;
    background: #FFFFFF;
    box-shadow: 0px 18px 48px 0px rgba(0,73,182,0.08);
    border-radius: 24px 24px 24px 24px;

    >p{
      height: 60px;
    }
    .card_1_img {
      width: 88px;
      height: 88px;
      margin-bottom: 20px;
    }

    .card_1_t{
      font-weight: 700;
      font-size: 24px;
      color: #3D3D3D;
      padding-bottom: 10px;
    }
  }

  .card_2 {
    flex: 1;
    padding: 24px;
    height: 200px;
    background: linear-gradient( 129deg, #ECF3FF 0%, #FFFFFF 100%);
    font-weight: 400;
    font-size: 20px;
    color: #3D3D3D;
    line-height: 30px;
    text-align: left;

    > p {
      width: 200px;
    }

    .card_num{
      font-weight: 400;
      font-size: 28px;
      color: #2278FF;
    }

    > .line {
      margin: 18px 0 24px;
      width: 30px;
      height: 4px;
      background: linear-gradient(270deg, rgba(34, 200, 255, 0.16) 0%, #2278FF 100%);
      border-radius: 1px 1px 1px 1px;
    }
  }
}
.productItem {
  gap: 20px;

  .productItem1 {
    flex: 1;

    &:nth-child(1) {
      background: #2278FF;

      .pro3_btn {
        color: #2278FF;
      }
    }
  }
}

.approval_c1 {
  width: 734px;
  height: auto;
}

.approval_c2 {
  width: 702px;
  height: auto;
}

.cloudMemo_img1 {
  width: 690px;
  height: auto;
}

.approval_c3 {
  width: 587px;
  height: auto;
}

.approval_c5 {
  width: 634px;
  height: auto;
}
.flexJSSta{
  justify-self: flex-start;
}
.three_market{
  width: 1380px;
  height: auto;
}
.main_img{
  width: 500px;
  height: auto;
}

.title1{
  font-family: DingTalk JinBuTi;
  font-size: 28px;
  font-weight: normal;
}
.title2{
  font-family: Microsoft YaHei;
  font-size: 16px;
  font-weight: normal;
  color: #3D3D3D;
  margin-top: 20px;
}
.main{
  height: 438px;
  align-items: center;
  .right{
    width: 550px;
    .button{
      cursor: pointer;
      margin-top: 40px;
      border-radius: 8px;
      text-align: center;
      width: 200px;
      line-height: 60px;
      background-color: #2278FF;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }
  }
}

.app-titile{
  text-align: center;
  font-size: 35px;
  margin-bottom: 50px;
}
.app-list{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 150px;
  gap: 20px;
  .app{
    cursor: pointer;
    width: 325px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    border: 1px solid #b0c6f0;
    border-radius: 8px;
    font-size: 20px;
    img{
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }

}
</style>
