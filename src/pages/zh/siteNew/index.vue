<template>
  <div class="home_page vls">
    <div class="platTop w1380">
      <div class="VLStream flexRowAC">
        超级APP
        <br />
        应用大全
      </div>
      <div class="second_title">
        个人和企业面向场景智能化的超级效率战略能力
        <br />
        -- 奥尔特云新一代 新质生产力平台
      </div>
      <div class="plat_d">
        简单、高效、又<span style="color: #2278FF;">实惠</span>!
      </div>
      <div class="flexRowAC useBox">
        <nuxt-link class="seeMore" to="/zh/siteNew/industy/buy">
          立即使用-完全免费
        </nuxt-link>
        <div class="seeMore u1">
          安排演示
        </div>
      </div>
    </div>
    <div class="productBox w1380" style="padding-bottom: 10px;">
      <div class="proT" style="margin-top: 60px;">
        应用程序
      </div>
      <div class="flexRowAC appBox">
        <div v-for="(item, i) in appList" :key="i" class="appItem flexRowAC">
          <img class="appItemImg" :src="item.img" alt="" />
          {{ item['t'] }}
          <div class="appItem_s">
            {{ item['dec'] }}
          </div>
        </div>
      </div>
      <div class="flexRowAC useBox">
        <div class="seeMore flexRowAC">
          查看所有应用程序
          <img class="lineImg" src="@/assets/software/price_icon.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/演示视频.mp4" controls autoplay muted />
    </div> -->
    <div class="productBox w1380" style="padding-bottom: 0px;">
      <div class="proT" style="padding-bottom: 40px;">
        想象一下，<span class="vlsUs vlsUs2">海量商业应用程序</span> 尽在您的指尖
      </div>
    </div>
    <div class="proTitleBox w1380 plan">
      <div class="plan_t">
        有什么需要改进吗?我们有相应的应用程序来满足您的需求。
        <br />
        免去复杂流程，不收取额外费用，只需一键安装，即可立即使用。
      </div>
      <div class="plan_t">
        每个应用程序都是一个简化流程的利器，为更多人赋予力量!
        <br />
        尽情想象，当每个人都能拥有方便工作的合适工具，并实现完美整合时，将会带来何等影响!
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT" style="padding-bottom: 0px;">
        提升您的 <span style="color: #2278FF;">工作品质</span>
      </div>
      <div class="w1380 webBottomImg2">
        <video class="wBImg" src="/documents/superAPP.mp4" controls autoplay muted />
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        促进生产力的程序
      </div>
      <div class="w1380 webBottomImg">
        <img class="wBImg" src="@/assets/software/home.png" alt="" />
      </div>
      <div class="proT_d">
        <span class="vlsUs vlsUs3">体验真正极速 </span>，告别繁琐数据录入，智能 AI助手，用户界面更快90 亳秒内搞定全部操作--比眨眼还快。
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        集技术之大成的平台
      </div>
      <div class="w1380 webBottomImg">
        <img class="wBImg" src="@/assets/software/home1.png" alt="" />
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        企业<span style="color: #2278FF;">软件</span> 应该如此!
      </div>
      <div class="softBox flexRowAC">
        <div class="softIt flexRowAC">
          <div class="softIt_t">
            开源
          </div>
          <div class="softIt_d d1">
            系统技术的背后是一个由超过
            50多名开发者组成的全球社群。我们以开源精神为纽带，共同拥有一个愿景:“创造变革，赋能员工，将公司带入新境界”。
          </div>
          <div class="softIt_d">
            OortCloud 提供两个版本服务:
          </div>
          <div class="softIt_d">
            <span class="softIt_d_dot">社群版: </span>开放源码，100%免费
          </div>
          <div class="softIt_d">
            <span class="softIt_d_dot">企业版: </span>额外应用程序、基础设施及专业服务。
          </div>
          <div class="softIt_btn flexRowAC">
            版本对比
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg1.png" alt="" />
        </div>
        <div class="softIt it1 flexRowAC">
          <div class="softIt_t">
            没有供应商锁定束缚
          </div>
          <div class="softIt_d d1">
            无专有数据格式，只有
            PostgreSQL，数据完全属于您！没有软件束缚，您可以拥有源代码、GitHub访问权限，自由选择在我们的基础设施上托管，或者自行搭建在本地。
          </div>
          <div class="softIt_btn flexRowAC">
            <img class="softIt_btn_img" src="@/assets/VLimg2.0/GitHub.png" alt="" />
            在GitHub关注我们
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg2.png" alt="" />
        </div>
        <div class="softIt it2 flexRowAC">
          <div class="softIt_t">
            贴心定制化，释放无限想象力
          </div>
          <div class="softIt_d d1">
            使用 Oort Cloud Studio 自动执行操作、设计自定义屏幕、自定义报告或 web 钩子。
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg3.png" alt="" />
        </div>
        <div class="softIt it3 flexRowAC">
          <div class="softIt_t">
            合理定价
          </div>
          <div class="softIt_d d1">
            没有基于使用量的定价，没有追加销售额外功能，没有长期合约束缚，没有托管限制，更没有意外费用...每个用户只有一次性单一价格，所有服务全包。
          </div>
          <div class="softIt_btn flexRowAC">
            查看定价
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg4.png" alt="" />
        </div>
        <div class="softIt it4 flexRowAC">
          <div class="softIt_t">
            200多款社区应用程序
          </div>
          <div class="softIt_d d1">
            基于其开源开发模式，OortCloud 拥有强大的商业应用程序商店。试想一下，无论何种业务需求，都能轻松获取相应的应用程序。
          </div>
          <div class="softIt_btn flexRowAC">
            浏览社群应用程序
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg5.png" alt="" />
        </div>
        <div class="softIt it5 flexRowAC">
          <div class="softIt_t">
            绝不是说说玩而已
          </div>
          <div class="softIt_d d1">
            "大多数软件可能只达到您期望的70%功能和效果。然而，OortCloud
            远远超出预期，将彻底改变市场格局，带来翻天浏览社群应用程序覆地的变革。"- 匿名同行。
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg6.png" alt="" />
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
    <div class="productBox w1380">
      <div class="proT">
        <span style="color: #2278FF;">释放</span> 您的无限增潜能
      </div>
      <div class="flexRowAC useBox">
        <nuxt-link class="seeMore" to="/zh/siteNew/industy/buy">
          现在开始-免费
        </nuxt-link>
        <img class="useImg" src="@/assets/software/icon_sfqn.png" />
      </div>
    </div>
  </div>
</template>

<script setup>

// import homeApp_a1 from '@/assets/site/homeApp_a1.png'
// import homeApp_a2 from '@/assets/site/homeApp_a2.png'
// import homeApp_a3 from '@/assets/site/homeApp_a3.png'
// import homeApp_a4 from '@/assets/site/homeApp_a4.png'
import homeApp_a5 from '@/assets/site/homeApp_a5.png'
import homeApp_a6 from '@/assets/site/homeApp_a6.png'
import homeApp_a7 from '@/assets/site/homeApp_a7.png'
// import homeApp_d1 from '@/assets/site/homeApp_d1.png'
// import homeApp_d2 from '@/assets/site/homeApp_d2.png'
// import homeApp_d3 from '@/assets/site/homeApp_d3.png'
// import homeApp_d4 from '@/assets/site/homeApp_d4.png'
// import homeApp_d5 from '@/assets/site/homeApp_d5.png'

import homeApp_yp from '@/assets/site/homeApp_yp.png'
import homeApp_sprh from '@/assets/site/homeApp_sprh.png'
import homeApp_sphy from '@/assets/site/homeApp_sphy.png'
import homeApp_AI from '@/assets/site/homeApp_AI.png'
import homeApp_zhdd from '@/assets/site/homeApp_zhdd.png'
import homeApp_jsxt from '@/assets/site/homeApp_jsxt.png'
// import homeApp_a8 from '@/assets/site/homeApp_a8.png'
// import homeApp_a9 from '@/assets/site/homeApp_a9.png'
// import homeApp_b1 from '@/assets/site/homeApp_b1.png'
// import homeApp_c1 from '@/assets/site/homeApp_c1.png'
// import homeApp_c2 from '@/assets/site/homeApp_c2.png'
// import homeApp_c3 from '@/assets/site/homeApp_c3.png'
// import homeApp_c4 from '@/assets/site/homeApp_c4.png'
// import homeApp_c5 from '@/assets/site/homeApp_c5.png'

definePageMeta({
  layout: 'site-new'
})

let appList = ref([])
appList.value = [

  { t: 'AI办公', dec: 'AI 赋能办公，效率一键拉满', img: homeApp_AI },
  { t: '指挥调度', dec: '资源、现场、调度、过程全可视', img: homeApp_zhdd },
  { t: '即时协同', dec: '打破时空限制，即时协同畅无阻', img: homeApp_jsxt },

  { t: '云课堂', dec: '基于移动互联网的培训管理和学习交互平台', img: homeApp_a5 },
  { t: '智能审批', dec: '智能审批管办一体 助力企业效能提升', img: homeApp_a7 },
  { t: '安全邮箱', dec: '确保信息传输的保密性与安全性', img: homeApp_a6 },

  { t: '云盘', dec: '一键上云，文件随身，多端同步更省心', img: homeApp_yp },
  { t: '视频融合', dec: '智能融合视频流，全景视界一键掌控', img: homeApp_sprh },
  { t: '视频会议', dec: '一键开启视频会议，沟通协作无阻', img: homeApp_sphy }
]
// appList.value = [
//   { t: '通知公告', img: homeApp_a1 },
//   { t: '备忘录', img: homeApp_a2 },
//   { t: '视频会议', img: homeApp_a3 },
//   { t: '人脸识别', img: homeApp_a4 },
//   { t: '云课堂', img: homeApp_a5 },
//   //
//   { t: '安全邮箱', img: homeApp_a6 },
//   { t: '智能审批', img: homeApp_a7 },
//   { t: '随手拍', img: homeApp_a8 },
//   { t: '会议助手', img: homeApp_a9 },
//   { t: '微投票', img: homeApp_b1 },
//   //
//   { t: '微清单', img: homeApp_c1 },
//   { t: '微问卷', img: homeApp_c2 },
//   { t: '差旅标准', img: homeApp_c3 },
//   { t: '工作汇报', img: homeApp_c4 },
//   { t: '即时通讯', img: homeApp_c5 },
//   //
//   { t: '新闻播报', img: homeApp_d1 },
//   { t: '每日菜谱', img: homeApp_d2 },
//   { t: '服务缴费', img: homeApp_d3 },
//   { t: '打卡签到', img: homeApp_d4 },
//   { t: '云相册', img: homeApp_d5 }
// ]
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
  padding: 40px 0 20px;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream {
    font-family: DingTalk-JinBuTi;
    justify-content: center;
    color: #333333;
    font-weight: bold;
    font-size: 240px;
    line-height: 260px;
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

  .second_title {
    font-family: DingTalk-JinBuTi;
    justify-content: center;
    color: #1B1B1B;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0px;
    text-align: center;

  }

  .plat_d {
    color: #333333;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
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
  position: relative;
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
    margin-bottom: 50px;
  }

  .useImg{
    position: absolute;
    width: 106px;
    height: 87px;
    left: 850px;
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
  padding: 110px 0;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.webBottomImg2 {
  padding: 110px 0 0 0;
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
    color: #333333;
    font-weight: bold;
    font-size: 54px;
    line-height: 82px;
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

.k8sMana_c1 {
  width: 692px;
  height: auto;
}

.vlsUs {
  opacity: 1;
  padding-left: 10px;
  color: #333;
}

.vlsUs1{
background-image: url("@/assets/software/icon_tou_2.png");
}

.vlsUs2{
  background-image: url("@/assets/software/icon_zs_1.png");
}

.vlsUs3{
  background-image: url("@/assets/software/icon_csl_green.png");
}
.use_t {
  .use_t_t {
    color: #3D3D3D;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }

  .use_t_img {
    width: 100%;
  }
}

.proTitleBox.plan {
  padding-bottom: 60px;

  .plan_t {
    padding-bottom: 48px;
    color: #333333;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
}

.proT_d {
  margin: 0 auto;
  width: 600px;
  color: #333333;
  font-weight: normal;
  font-size: 20px;
  text-align: center;

  > .vlsUs {
    padding-left: 6px;
  }
}

.appBox {
  padding-bottom: 60px;
  flex-wrap: wrap;
  gap: 60px 0;

  .appItem {
    flex-shrink: 0;
    width: 33%;
    font-size: 32px;
    flex-direction: column;
    justify-content: center;

    .appItemImg {
      width: 100px;
      height: 100px;
      margin-bottom: 12px;
    }

    .appItem_s{
      padding-top: 10px;
      font-size: 20px;
      color: #97A3B6;
      line-height: 26px;
    }
  }
}

.lineImg {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.softBox {
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: left;
  gap: 40px;

  .softIt {
    color: #333333;
    flex-direction: column;
    align-items: flex-start;
    width: calc(50% - 104px);
    height: calc(700px - 44px);
    padding: 40px 40px 0;
    border-radius: 36px;
    background: #FCFCE8;
    border: 2.08px solid #FFD15A3D;
  }

  .softIt_t {
    padding-bottom: 40px;
    font-weight: bold;
    font-size: 32px;
    text-align: left;

  }

  .softIt_d {
    padding-bottom: 12px;
    font-weight: normal;
    font-size: 20px;
    text-align: left;

    &.d1 {
      padding-bottom: 40px;
    }

    .softIt_d_dot {
      font-weight: bold;
      position: relative;
      padding-left: 14px;

      &:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        top: 12px;
        left: 0;
        background-color: #333;
        border-radius: 50%;
      }
    }
  }

  .softIt_btn {
    margin-top: 20px;
    padding: 12px 40px;
    border-radius: 12px;
    color: #fff;
    background-color: #2278FF;

    .softIt_btn_img {
      width: 28px;
      height: 28px;
      margin-right: 8px;
    }
  }

  .softIt_img {
    margin: 0 -40px 0 auto;
    height: 278px;
    width: auto;
    border-radius: 12px;
  }
}

.softIt.it1 {
  background: #EEFCE8;
  border: 2.17px solid #975BEC28;

  .softIt_img {
    height: 385px;
  }

  .softIt_btn{
    background-color: #000;
    color: #fff;
  }
}

.softIt.it2 {
  background: #E8F7FC;
  border: 2.08px solid #1ABCFE28;

  .softIt_img {
    height: 484px;
    max-width: 100%;
  }
}

.softIt.it3 {
  background: #FCE9FF;
  border: 2.08px solid #9803AF28;

  .softIt_img {
    height: 392px;
  }
}

.softIt.it4 {
  background: #FFF4EF;
  border: 2.08px solid #FFD3C0;

  .softIt_img {
    height: 392px;
  }
}

.softIt.it5 {
  background: #2B2B2B;
  border: 2.08px solid #000000;
  color: #fff;

  .softIt_img {
    height: 458px;
  }
}
</style>
