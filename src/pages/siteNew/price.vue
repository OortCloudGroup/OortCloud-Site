<template>
  <div class="home_page vls">
    <div class="platTop w1380">
      <div class="VLStream">
        超值<span style="color: #2278FF;">低价</span> <span class="vlsUs">不是做梦!</span>
      </div>
    </div>
    <div class="platTop priceTBox w1380 flexRowAC">
      <div class="price_tabs flexRowAC">
        <div class="pt_btn " :class="{act:isAct===0}" @click="isAct=0">
          年缴
        </div>
        <div class="pt_btn" :class="{act:isAct===1}" @click="isAct=1">
          月缴
        </div>
      </div>
      <div class="price_cont flexRowAC">
        <div class="p_c_it" :class="{p2:isActp===0}" @click="isActp=0">
          <div class="pcIt_t">
            <span class="p_c_it_s">单个</span>&nbsp;应用程序免费
          </div>
          <div class="pcIt_m">
            ￥0 <span>/月</span>
          </div>
          <div class="pcIt_l flexRowAC">
            <span class="line" /><img class="lineImg" src="@/assets/software/price_icon.png" alt="" /><span class="line" />
          </div>
          <div class="pcIt_t1_out">
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />仅限 一个应用程序，不限制用户数
            </div>
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />OortCloud 在线
            </div>
          </div>
          <div class="pcIt_tbtn">
            立即使用
          </div>
        </div>
        <div class="p_c_it" :class="{p2:isActp===1}" @click="isActp=1">
          <div class="pcIt_t">
            标准
          </div>
          <div class="pcIt_m">
            ￥13.5 <span>/每用户/月</span>
          </div>
          <div class="pcIt_l flexRowAC">
            <span class="line" /><img class="lineImg" src="@/assets/software/price_icon.png" alt="" /><span class="line" />
          </div>
          <div class="pcIt_t1_out">
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />所有应用程序
            </div>
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />OortCloud 在线
            </div>
          </div>
          <div class="pcIt_tbtn btn1">
            立即购买
          </div>
          <div class="pcIt_tbtn btn2">
            免费试用
          </div>
        </div>
        <div class="p_c_it" :class="{p2:isActp===2}" @click="isActp=2">
          <div class="pcIt_t">
            单个&nbsp;应用程序免费
          </div>
          <div class="pcIt_m">
            ￥20.6 <span>/每用户/月</span>
          </div>
          <div class="pcIt_l flexRowAC">
            <span class="line" /><img class="lineImg" src="@/assets/software/price_icon.png" alt="" /><span class="line" />
          </div>
          <div class="pcIt_t1_out">
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />所有应用程序
            </div>
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />OortCloud 云端版 / 0ortCloud.sh / 离线版
            </div>
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />OortCloud 定制
            </div>
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />多公司
            </div>
            <div class="pcIt_t1 flexRowAC">
              <span class="pcIt_t1_dot" />外部API
            </div>
          </div>
          <div class="pcIt_tbtn">
            立即购买
          </div>
          <div class="pcIt_tbtn btn3">
            免费试用
          </div>
        </div>
      </div>
    </div>
    <div class="platTop w1380">
      <div class="VLStream us1">
        <span class="vlsUs us1s"><span>标准</span> 和 <span>定制</span> 服务计划，</span> 均为单一费用涵盖所有 OortCloud 应用程序
      </div>
    </div>
    <div class="proTitleBox priceIconBox w1380 flexRowAC" style="justify-content: space-between">
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c1.png" alt="" />
        <div class="priceTi">
          个人效率工具
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c2.png" alt="" />
        <div class="priceTi">
          培训学习
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c3.png" alt="" />
        <div class="priceTi">
          指挥调度
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c4.png" alt="" />
        <div class="priceTi">
          行政智慧后勤
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c5.png" alt="" />
        <div class="priceTi">
          生产力工具
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c6.png" alt="" />
        <div class="priceTi">
          业务管理
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c7.png" alt="" />
        <div class="priceTi">
          队伍建设
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c8.png" alt="" />
        <div class="priceTi">
          IOT
        </div>
      </div>
    </div>
    <div class="proTitleBox lineBox w1380 flexRowAC">
      <div class="line" />
      还有更多
      <img class="lineImg" src="@/assets/software/price_icon.png" alt="" />
      <div class="line" />
    </div>
    <div class="proTitleBox w1380 plan">
      <div class="plan_t">
        所有计划享有 <span style="color: #2278FF;font-weight: bold; ">无限技术支持</span>、托管以及系统维护。
        <br />
        无任何隐藏费用，功能和数据使用无限制：享受真正的透明定价！
      </div>
      <div class="plan_t">
        (*)折扣有效期为12个月，适用于订购的初始用户。
        <br />
        (**)不包括OortCloud.sh的托管费用。
      </div>
      <div class="flexRowAC useBox" style="justify-content: center">
        <div class="seeMore">
          安排演示
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRowAC" style="justify-content: flex-start;padding: 0;">
      <div>
        有疑问<span style="color: #FFB53B">?</span>
        <div class="pri_why">
          如果此页面上没有符合您的问题的答案，请联系我们 <span style="color: #2278FF">客户经理</span>
        </div>
      </div>
    </div>
    <div class="advantBox w1380">
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num1.png" alt="" />
        我真的可以用统一的价格访间上百的应用程序和模块吗?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num2.png" alt="" />
        订阅中包含的内容有什么
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num3.png" alt="" />
        什么是自丰托管/0ortCoud.sh?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num4.png" alt="" />
        单一应用程序免费计划是香支持多公司或使用定制应用程序
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num5.png" alt="" />
        为什么在单一应用程序免费计划中，我有多个应用程序?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num6.png" alt="" />
        我在哪里可以找到实施服务，花费是多少?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num7.png" alt="" />
        标准计划和定制计划的区别是什么?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num8.png" alt="" />
        标准计划和定制计划的区别是什么?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num9.png" alt="" />
        我是否可以从托管计划(0ortCloud Online)切换到OortCloud 企业版或反向切换?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num10.png" alt="" />
        什么是外部API?
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

let p5Arr = ref([])
let isAct = ref(0)
let isActp = ref(1)
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
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
  padding: 110px 0;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream_top {
    height: 66px;
    width: auto;
  }

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
    padding: 8px 0;
    position: relative;

    .VLStream_img {
      width: 222px;
      height: 222px;
      position: absolute;
      right: 336px;
      top: -50px;
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

  .cl_t {
    letter-spacing: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 54px;
  }

  .cl_d {
    padding-bottom: 24px;
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

.ipcView.dev {
  .CloudL {
    width: 100%;
  }

  .terminal {
    border-radius: 24px;
    background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;
    margin-bottom: 20px;
    width: 100%;
    padding: 30px;

    .terminalImg {
      width: 62px;
      height: 62px;
    }

    .terminalT {
      padding-top: 30px;
      color: #333333;
      font-weight: bold;
      font-size: 28px;
    }

    .terminalD {
      padding-top: 30px;
      color: #717781;
      font-size: 18px;
    }
  }

  .cloud.terminal {
    border-radius: 24px;
    background: linear-gradient(180deg, #F9FFF7 0%, #FFFFFF 98%);
    border: 1px solid #001F5019;
  }
}

.proTitleBox {
  justify-content: center;
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
  padding-bottom: 100px;
}

.mb_h_t {
  padding-bottom: 20px;

  .VLStream_top {
    width: 445px;
    height: auto;
  }
}

.mb_h_d {
  color: #797F88;
  font-weight: normal;
  font-size: 18px;
  padding-bottom: 160px;
}

.advantBox {
  padding-bottom: 160px;

  .advantIt {
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    color: #333333;
    font-weight: normal;
    font-size: 20px;
    text-align: left;
    border: 1px solid #EEEEEE;
  }

  .advantBoxImg {
    width: 40px;
    height: 36px;
    flex-shrink: 0;
    margin-right: 20px;
  }
}

.vlsUs {
  opacity: 1;
  border-radius: 0px;
  background: linear-gradient(270deg, #2278FF0A 0%, #2278FF51 100%);
  border-left: 6px solid #2278FF;
  padding-left: 10px;
  color: #000;
}

.pri_why {
  padding: 20px 0 40px;
  color: #333333;
  font-weight: normal;
  font-size: 20px;
}

.VLStream.us1 {
  color: #333333;
  font-weight: normal;
  font-size: 32px;
  text-align: center;

  .us1s {
    padding: 20px 12px;
    >span{
      font-weight: bold;
    }
  }
}

.proTitleBox.plan {
  .plan_t {
    padding-bottom: 48px;
    color: #333333;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
}

.lineBox {
  justify-content: space-between;
  color: #2278FF;
  font-size: 20px;
  padding: 0 10px 60px;

  .line {
    width: calc(50% - 74px);
    height: 1px;
    background-color: #2278FF;
  }

  .lineImg {
    width: 24px;
    height: 24px;
    background-color: #2278FF;
    border-radius: 50%;
  }
}

.priceIconBox {
  padding-bottom: 60px;

  .priceIconIt {
    flex-direction: column;
    gap: 20px;
  }

  .priceImg {
    width: 74px;
    height: 74px;
  }

  .priceTi {
    color: #3D3D3D;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
  }
}

.priceTBox {
  padding-top: 0;
  flex-direction: column;

  .price_tabs {
    width: 300px;
    justify-content: space-between;
    gap: 16px;
    padding: 10px 16px;
    border-radius: 6px;
    background-color: #F5F9FF;

    .pt_btn {
      cursor: pointer;
      width: 132px;
      height: 52px;
      line-height: 52px;
      border-radius: 6px;

      &.act {
        color: #fff;
        background-color: #2278FF;
      }
    }
  }

  .price_cont {
    width: 100%;
    justify-content: center;
    padding-top: 20px;
    gap: 20px;

    .p_c_it {
      cursor: pointer;
      color: #333333;
      width: 384px;
      flex-shrink: 0;
      padding: 40px 20px;
      height: 680px;
      border-radius: 24px;
      background: #FFFFFF;
      border: 1px solid #E4E4E7;

      .pcIt_t1 {
        padding-bottom: 24px;
        gap: 14px;
        font-weight: normal;
        font-size: 16px;
        text-align: left;

        .pcIt_t1_dot {
          width: 12px;
          height: 12px;
          background-color: #2278FF;
          border-radius: 50%;
        }
      }

      .pcIt_t {
        text-align: left;
      }

      .pcIt_l {
        padding: 44px 0;
        gap: 8px;

        .line {
          flex: 1;
          height: 1px;
          background-color: #2278FF;
        }

        .lineImg {
          width: 20px;
          height: 20px;
          background-color: #2278FF;
          border-radius: 50%;
        }
      }

      .pcIt_t1_out {
        height: 220px;

      }

      .pcIt_m {
        padding-top: 40px;
        font-weight: bold;
        font-size: 38px;
        text-align: left;

        > span {
          font-size: 14px;
          font-weight: normal;

        }
      }

      .pcIt_tbtn {
        margin-top: 16px;
        border-radius: 24px;
        height: 72px;
        line-height: 72px;
        color: #fff;
        background-color: #2278FF;
        border: 1px solid #fff;
      }

      .pcIt_tbtn.btn3 {
        color: #2278FF;
        height: 70px;
        line-height: 70px;
        background-color: #fff;
        border: 1px solid #2278FF;
      }

      .pcIt_tbtn.btn1 {
        color: #2278FF;
        font-weight: bold;
        height: 70px;
        line-height: 70px;
        background-color: #fff;
        border: 1px solid #2278FF;
      }

      .pcIt_tbtn.btn2 {
        height: 70px;
        line-height: 70px;
        border: 1px solid #fff;
      }
    }
    .p_c_it_s{
      color: #2278FF;
    }
  }

  .p_c_it.p2 {
    color: #fff;
    border-radius: 24px;
    background: #2278FF;

    .pcIt_l > .line {
      background-color: #fff;
    }

    .p_c_it_s {
      color: #333;
    }
  }
}
</style>
