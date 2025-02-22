<template>
  <div class="home_page vls">
    <div class="w1380 CloudBox c1 flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          街道网格治理
          <br />
          闭环
        </div>
        <div class="cl_d">
          工作任务闭环、精细化管理、指挥调度一键视频“看得见、呼得通”
        </div>
        <div class="flexRowAC useBox">
          <div class="seeMore">
            立即试用
          </div>
          <div class="seeMore u1">
            安排演示
          </div>
        </div>
      </div>
      <img class="approval_c1 c1" src="@/assets/street/overview2.png" alt="" />
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          工作任务闭环、
          <br />
          精细化管理
        </div>
      </div>
      <img class="approval_c1" src="@/assets/street/overview1.png" alt="" />
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          指挥调度
          <br />
          一键视频
          <br />
          “看得见、呼得通”
        </div>
      </div>
      <img class="approval_c1" src="@/assets/street/overview3.png" alt="" />
    </div>
    <div class="platTop w1380">
      <div class="VLStream">
        需求一一<span class="v_sub">满足</span>。
      </div>
      <div class="VLStream v1">
        随你成长而扩展
      </div>
      <div class="flexRowAC appBox">
        <div v-for="(item,i) in apps" :key="i" class="appItem flexRowAC">
          <img class="appImg" :src="item.img" alt="" />
          <div class="appT">
            <div class="appT1">
              {{ item.t }}
            </div>
            <div class="appT2">
              {{ item.d }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productBox use_t w1380">
      <div class="proT" style="padding-bottom: 20px;">
        全球 <span style="color: #2278FF;">1.200万</span> 用户
      </div>
      <div class="use_t_t">
        与 OortCloud 携手增长业务
      </div>
      <img class="use_t_img" src="@/assets/software/home2.png" alt="" />
    </div>
    <div class="platTop w1380">
      <div class="VLStream v2">
        <span class="v2_sub">释放</span> 您的无限增潜能
      </div>
      <div class="pcIt_tbtn">
        立即使用
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        资料下载
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class="product2Out_it flexRowAC">
          <div class="pro2o_l flexRowAC">
            <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />
            【主打胶片】门户与应用仓库使用汇报V2.0.pdf
          </div>
          <div class="pro2o_2">
            下载
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'
import ybwl from '@/assets/navheader/ybwl.png'
import ykt from '@/assets/navheader/ykt.png'
import dzyj from '@/assets/navheader/dzyj.png'
import jstx from '@/assets/navheader/dzyj.png'
import wqd from '@/assets/navheader/wqd.png'

definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})
let p5Arr = ref([])
let apps = ref([])
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]

apps.value = [
  { img: ykt, t: '通知公告', d: '智能审批管办一体 助力企业效能提升' },
  { img: ybwl, t: '备忘录', d: '智能审批管办一体 助力企业效能提升' },
  { img: ykt, t: '云课堂', d: '智能审批管办一体 助力企业效能提升' },
  { img: dzyj, t: '安全邮箱', d: '智能审批管办一体 助力企业效能提升' },
  { img: product5_1, t: '智能审批', d: '智能审批管办一体 助力企业效能提升' },
  { img: product5_1, t: '随手拍', d: '智能审批管办一体 助力企业效能提升' },
  { img: product5_1, t: '会议助手', d: '智能审批管办一体 助力企业效能提升' },
  { img: wqd, t: '微问卷', d: '智能审批管办一体 助力企业效能提升' },
  { img: jstx, t: '即时通讯', d: '智能审批管办一体 助力企业效能提升' }
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
  margin: 0 auto;
}

// 查看更多
//.seeMore {
//  display: inline-block;
//  padding: 24px 50px;
//  color: #fff;
//  border: 1px solid #2278FF;
//  border-radius: 8px;
//  background: #2278FF;
//  box-shadow: 0px 4px 10px 0px #FF5E1033;
//  font-weight: bold;
//  font-size: 18px;
//}

.platTop {
  text-align: center;
  padding: 0 0 110px ;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #2278FF;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream {
    text-align: left;
    color: #333333;
    font-weight: bold;
    font-size: 58px;
    padding: 8px 0;
    position: relative;

    .VLStream_img {
      width: 222px;
      height: 222px;
      position: absolute;
      right: 336px;
      top: -50px;
    }

    &.v1{
      font-weight: 400;
      font-size: 32px;
      color: #717781;
    }

    &.v2 {
      text-align: center;

      > .v2_sub {
        color: #2278FF;
      }
    }

    .v_sub {
      color: #2278FF;
    }
  }

  .plat_a {
    color: #333333;
    font-weight: bold;
    font-size: 58px;
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
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
}

.WebRTC {
  gap: 24px;
  padding-bottom: 80px;
  animation: scroll 35s linear infinite;

  .webItem {
    width: auto;
    height: 120px;
    border-radius: 16px;
    background: #E8F7FC;
    color: #5C6C00;
    gap: 14px;
    flex-wrap: nowrap;
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
  padding: 70px 0 110px;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;
  &.c1{
    padding-top: 100px;
  }
  .cl_t {
    letter-spacing: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 54px;
  }

  .cl_d {
    padding-bottom: 60px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    width: 500px;
  }

  .CloudR {
    width: 700px;
    height: auto;

    .CloudRImg {
      width: 100%;
      height: 100%;
    }
  }

  .CloudR2 {
    width: 700px;
    height: 700px;
  }
}

.ipcBox.CloudBox {
  padding-bottom: 120px;
  justify-content: space-between;
  align-items: flex-start;

  .CloudL {
    width: 450px;
    text-align: right;
    padding-top: 60px;
  }
}

.ipcView.CloudBox {
  .CloudR {
    height: 460px;
  }
}

.use_t.productBox {
  padding-bottom: 0;

  .use_t_t {
    color: #3D3D3D;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    padding-bottom: 80px;
  }

  .use_t_img {
    width: 100%;
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

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

.proTitleBox {
  justify-content: center;
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
  padding-bottom: 100px;
}

.approval_bg {
  width: 100%;
  height: auto;
}

.approval_c1 {
  width: 734px;
  height: auto;

  &.c1 {
    width: 450px;
  }
}

.approval_c2 {
  width: 702px;
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

.approval_c6 {
  width: 602px;
  height: auto;
}

.pcIt_tbtn {
  width: 168px;
  margin: 0 auto;
  margin-top: 16px;
  border-radius: 10px;
  height: 72px;
  line-height: 72px;
  color: #fff;
  background-color: #2278FF;
  border: 1px solid #fff;
}

.useBox {
  justify-content: flex-start;
  gap: 20px;

  .seeMore {
    padding: 24px 50px;
    color: #fff;
    border: 1px solid #2278FF;
    border-radius: 8px;
    background: #2278FF;
    font-weight: bold;
    font-size: 18px;
  }

  .u1 {
    color: #333;
    background-color: #F4F4F4;
    border: 1px solid #F4F4F4;
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

.appBox {
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;

  .appItem {
    width: 30%;
    background: #F9FAFB;
    padding: 16px;
    border-radius: 16px 16px 16px 16px;
  }

  .appImg {
    width: 58px;
    height: 58px;
  }

  .appT{
    text-align: left;
    padding-left: 12px;
  }

  .appT1 {
    font-weight: 700;
    font-size: 20px;
    color: #3D3D3D;
  }

  .appT2 {
    font-weight: 700;
    font-size: 16px;
    color: #97A3B6;
  }
}
</style>
