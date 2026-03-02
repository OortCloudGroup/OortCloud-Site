<template>
  <div class="home_page vls">
    <div class="platTopOut flexRowAC w1380">
      <div class="platTop">
        <div class="VLStream">
          运维管理平台
        </div>
        <div class="plat_cent">
          运营运维平台整合服务与运维管理，确保系统高效稳定运行
        </div>
        <div class="flexRowAC useBox" style="justify-content: flex-start">
          <div class="seeMore">
            立即试用
          </div>
          <div class="seeMore u3">
            立即购买
          </div>
          <div class="seeMore u1">
            安排演示
          </div>
        </div>
      </div>
      <img class="platTopOutImg" src="@/assets/software/operationsManPlatform/yypt_bg.png" alt="" />
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/运维管理.mp4" controls autoplay muted />
    </div>
    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section0')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section0'}">运营系统</span>
        <span class="line" :class="{activeLine:activeSection==='section0'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">运维系统</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
    </div>
    <!--    运营系统-->
    <div id="section0" ref="section0">
      <div class="productBox CloudBox w1380 flexJC">
        <div class="fw" style="background: #2278FF">
          <div class="fw_t">
            服务运营中心
          </div>
          <div class="fw_d">
            提供统一的服务窗口，管理员可申请、审批并开通各类服务，同时浏览公告及服务目录。
          </div>
          <img class="fw_img f_img_r" src="@/assets/software/operationsManPlatform/yypt_fwyyzx_bg.png" />
        </div>
        <div class="fw" style="background: #6292F2">
          <div class="fw_t">
            服务目录管理
          </div>
          <div class="fw_d">
            提维护统一的云服务目录，支持服务注册、分类、编排、发布和下架，确保服务信息一致性与可查性。
          </div>
          <img class="fw_img f_img_r" src="@/assets/software/operationsManPlatform/yypt_fwmlgl_bg.png" />
        </div>
      </div>
      <div class="productBox CloudBox w1380">
        <div class="fwyy">
          <div class="fwyy_t">
            服务运营流程
          </div>
          <div class="fwyy_d">
            提供完整的服务生命周期管理，包括服务申请、审批、续期和评价，满足用户服务全流程需求。
          </div>
          <img class="fwyy_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_fwyylc_bg.png" />
        </div>
      </div>
      <div class="productBox CloudBox w1380 flexJC">
        <div class="fw fw_l" style="background: #F0D32D">
          <div class="fw_t">
            服务质量管理
          </div>
          <div class="fw_d">
            定义并评估云计算服务质量水准，分析运营效能并管理服务指标和评价。
          </div>
          <img class="fwzlgl_img f_img_r" src="@/assets/software/operationsManPlatform/yypt_fwzlgl_bg.png" />
        </div>
        <div class="fw fw_r" style="background: #B73222">
          <div class="fw_t">
            运营用户管理
          </div>
          <div class="fw_d">
            提供用户、角色、租户和权限管理功能，支持用户信息快速查询，避免重复建设权限模块。
          </div>
          <img class="yyyhgl_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_yyyhgl_bg.png" />
        </div>
      </div>
      <div class="productBox CloudBox w1380 flexJC">
        <div class="fw fw_r" style="background: #6292F2">
          <div class="fw_t">
            可视化中心
          </div>
          <div class="fw_d">
            展示资源使用情况，通过图表查看IaaS、PaaS、DaaS和SaaS资源的使用状态。
          </div>
          <img class="kshzx_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_kshzx_bg.png" />
        </div>
        <div class="fw fw_l" style="background: #F9FAFB">
          <div class="fw_t" style="color: #333333">
            服务计量管理
          </div>
          <div class="fw_d" style="color: #717781">
            实现云服务计量，通过模型定义策略、收集数据并展示云服务使用报表。
          </div>
          <div class="emptyDiv" />
        </div>
      </div>
      <div class="productBox CloudBox w1380 flexJC">
        <div class="fw fwc" style="background: #B73222">
          <div class="fw_t">
            运营管理规范
          </div>
          <div class="fw_d">
            提供统一的服务发布、申请、使用等规范，确保服务操作的标准化和一致性。
          </div>
          <img class="fwzlgl_img f_img_r" src="@/assets/software/operationsManPlatform/yypt_yyglgf_bg.png" />
        </div>
        <div class="fw fwc" style="background: #2278FF">
          <div class="fw_t">
            系统支撑
          </div>
          <div class="fw_d">
            管理资源池并定义服务，支持公告管理及用户服务申请的审批流程。
          </div>
          <img class="fwzlgl_img f_img_r" src="@/assets/software/operationsManPlatform/yypt_xtzc_bg.png" />
        </div>
      </div>
    </div>
    <!--    运维系统-->
    <div id="section1" ref="section1">
      <div class="productBox CloudBox w1380 flexJC ywxt">
        <div class="fw fw_r yw_bg">
          <div class="fw_t yw_t">
            运维中心
          </div>
          <div class="fw_d yw_d">
            提供统一的运维门户，集成所有模块资源并支持权限管理和服务台功能。
          </div>
          <img class="kshzx_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_ywzx_bg.png" />
        </div>
        <div class="fw fw_l yw_bg">
          <div class="fw_t yw_t">
            配置管理
          </div>
          <div class="fw_d yw_d">
            构建统一配置管理库（CMDB），实现设备、资源及应用的配置信息统一管理与维护。
          </div>
          <img class="pzgl_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_pzgl_bg.png" />
        </div>
      </div>
      <div class="productBox CloudBox w1380 flexJC">
        <div class="fw fwc yw_bg">
          <div class="fw_t yw_t">
            采集管理
          </div>
          <div class="fw_d yw_d">
            统一采集监控、告警、日志等数据，支持多种运维对象的实时数据获取。
          </div>
          <img class="fwzlgl_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_cjgl_bg.png" />
        </div>
        <div class="fw fwc yw_bg">
          <div class="fw_t yw_t">
            视图管理
          </div>
          <div class="fw_d yw_d">
            提供数据中心、网络拓扑等视图，以直观方式呈现资源及运维数据，支持决策分析。
          </div>
          <img class="fwzlgl_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_stgl_bg.png" />
        </div>
      </div>
      <div class="productBox CloudBox w1380 flexJC">
        <div class="fw fw_l yw_bg">
          <div class="fw_t yw_t">
            日志管理
          </div>
          <div class="fw_d yw_d">
            集中采集日志数据，支持搜索、分析、审计及可视化，帮助故障定位和日志管理。
          </div>
          <img class="fwzlgl_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_rzgl_bg.png" />
        </div>
        <div class="fw fw_r yw_bg">
          <div class="fw_t yw_t">
            报表管理
          </div>
          <div class="fw_d yw_d">
            自动生成系统运行与事件报告，反映服务质量并支持运维流程的统计分析。
          </div>
          <img class="yyyhgl_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_bbgl_bg.png" />
        </div>
      </div>
      <div class="productBox CloudBox w1380">
        <div class="fwyy">
          <div class="fwyy_t yw_t">
            流程工单管理
          </div>
          <div class="fwyy_d yw_d">
            提供运维工单流转和处理功能，支持流程轨迹查询及事件和问题的集中管理。
          </div>
          <img class="fwyy_img f_img_c" src="@/assets/software/operationsManPlatform/yypt_gdlcgl_bg.png" />
        </div>
      </div>
      <div class="productBox CloudBox w1380 flexJC">
        <div class="fw fwc yw_bg">
          <div class="fw_t yw_t">
            自动化运维
          </div>
          <div class="fw_d yw_d">
            提供脚本支持自动化运维任务，如安装、巡检、配置调整和批量部署，提升效率。
          </div>
          <img class="fwzlgl_img f_img_r" src="@/assets/software/operationsManPlatform/yypt_zdhyw_bg.png" />
        </div>
        <div class="fw fwc yw_bg">
          <div class="fw_t yw_t">
            IT服务管理
          </div>
          <div class="fw_d yw_d">
            基于ITIL标准执行运维工作，构建统一的服务流程并开放调用，提升IT管理质量。
          </div>
          <img class="fwzlgl_img f_img_r" src="@/assets/software/operationsManPlatform/yypt_itfwgl_bg.png" />
        </div>
      </div>
    </div>
    <!-- 成功案例 -->
    <div class="productBox w1380">
      <div class="proT">
        成功案例
      </div>
      <div class="productImg p5Out flexRowAC">
        <div class="item img1">
          <div class="bottom">
            <p>城市风光</p>
          </div>
        </div>
        <div class="item img2">
          <div class="bottom">
            <p>专业服务</p>
          </div>
        </div>
        <div class="item img3">
          <div class="bottom">
            <p>教育机构</p>
          </div>
        </div>
        <div class="item img4">
          <div class="bottom">
            <p>精准分析</p>
          </div>
        </div>
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        现在开始体验
      </div>
      <div class="flexRowAC productItem">
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1_.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            SaaS版本
            <span class="pro1_1_s_b">14天功能全免费试用</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            7天快速迭代，问题敏捷解决
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            快速启用，精简运维
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            更低建设成本
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            私有化部署
            <span class="pro1_1_s_b">1v1 定制方案量身打造</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            1v1 专家服务，定制化解决方案
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            本地化灵活部署，私有化数据存储
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            高可用架构与完备容灾方案
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--资料下载-->
    <div class="productBox w1380">
      <div class="proT">
        资料下载
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class="product2Out_it flexRowAC">
          <div class="pro2o_l flexRowAC">
            <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />
            产品手册.pdf
          </div>
          <div class="pro2o_2" @click="downloadPDF">
            下载
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'

definePageMeta({
  layout: 'site-new'
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/产品文档.pdf'
  link.download = '产品文档.pdf'
  link.click()
}

let p5Arr = ref([])
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]

const activeSection = ref('section0')
const section0 = ref(null)
const section1 = ref(null)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 160
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  const sections = [
    { id: 'section0', ref: section0 },
    { id: 'section1', ref: section1 }
  ]

  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = section.ref.value
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
.platTopOut{
  justify-content: space-between;
  padding-bottom: 160px;

  .platTopOutImg{
    flex-shrink: 0;
    width: 614px;
    height: auto;
    margin-left: 100px;
  }
}

.platTop {
  text-align: left;
  padding: 110px 0;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
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

    .u3{
      border-radius: 8px;
      border: 1px solid #ED2121;
      color: #ED2121;
      font-weight: bold;
      font-size: 18px;
      background: #fff;
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

  .cl_t {
    letter-spacing: 0;
    padding-bottom: 80px;
    color: #333333;
    font-weight: bold;
    font-size: 58px;
    line-height: 82px;
  }

  .cl_t_img{
    width: 100%;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .cl_d.d1{
    color: #333;
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
  padding-bottom: 60px;

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
    height: 300px;

    .proImg {
      width: 100%;
      height: 100%;
    }

    .img1{
      background: url('@/assets/VLimg2.0/jyjg1.png');
    }
    .img2{
      background: url('@/assets/VLimg2.0/jyjg2.png');
    }
    .img3{
      background: url('@/assets/VLimg2.0/jyjg3.png');
    }
    .img4{
      background: url('@/assets/VLimg2.0/jyjg4.png');
    }
    .item{
      width: 300px;
      height: 300px;
      background-size: cover;
      position: relative;
      .bottom{
        position: absolute;
        bottom: 0;
        width: 300px;
        text-align: left;
        line-height: 88px;
        border-radius: 0 0 24px 24px;
        background: linear-gradient(180deg, rgba(255, 94, 16, 0) 0%, #3C80FF  100%);
        p{
          margin-left: 24px;
          font-size: 28px;
          font-weight: bold;
          color: #FFFFFF;
        }
      }
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

.instantMess_c1{
  width: 825px;
  height: auto;
}

.k8sMana_c1{
  width: 692px;
  height: auto;
}

.tabSwitch{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 160px;
  .tabItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 32px;
      letter-spacing: 2.67px;
      text-align: left;
      margin-bottom: 18px;
    }
    .line{
      width: 64px;
      height: 4px;
      background: transparent;
    }

    .activeTitle{
      color: #333333;
      //font-weight: bold;
    }
    .activeLine{
      background: #4480FF;
    }
  }
}

.colMenu{
  justify-content: space-between;
  margin-bottom: 160px;
}

.left-menu {
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-right: 16px;

  .menu-item {
    position: relative;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }

    &.active {
      .menu-text {
        color: #333333;
        font-size: 54px;
        line-height: 82px;
      }
    }

    .menu-content-wrapper {
      display: flex;
      gap: 16px;
      position: relative;
    }

    .line {
      position: absolute;
      left: -24px;
      top: 0;
      width: 6px;
      height: 48px;
      background-color: #E8EAED;
      transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 33px;
    }

    &.active .line {
      height: 100%;
      background-color: #2E63FF;
    }

    .text-content {
      flex: 1;
    }

    .menu-text {
      transition: all 0.3s ease;
      color: #666666;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
    }

    .content-detail {
      p {
        color: #717781;
        font-size: 20px;
        line-height: 30px;
        margin-top: 20px;
      }
    }
  }
}

.right-content {
  width: 700px;
  height: 450px;
  border-radius: 24px;
  background: #F9FAFB;
  border: 1px solid #E2E3E5;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  .content-image {
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 6px;
      transition: transform 0.3s ease;
    }
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.02);
    }
  }
}

.cl_list{
  display: flex;
  flex-direction: column;
  gap: 40px;
  .cl_list_jc{
    justify-content: space-between;
  }
  .cl_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 383px;
    height: 474px;
    border-radius: 24px;
    background: #FFFFFF;
    box-shadow: 0 0 48px 0 #07005714;
    padding: 50px 0 40px 0;
    box-sizing: border-box;
    .cl_item_img{
      width: 100px;
      height: 100px;
    }
    .cl_item_title{
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      margin: 38px 0 4px 0;
    }
    .cl_item_v{
      color: #717781;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 60px;
    }
    .cl_item_bt{
      display: flex;
      gap: 12px;
      margin-bottom: 36px;
      .cl_bt{
        width: 158px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-size: 18px;
        font-weight: bold;
      }
      .cl_item_bt1{
        background: #2278FF;
        box-shadow: 0 4px 10px 0 #2278FF33;
        color: #FFFFFF;
      }

      .cl_item_bt2{
        background: #FFFFFF;
        border: 1px solid #2278FF;
        color: #2278FF;
      }
    }
    .cl_item_b{
      display: flex;
      gap: 10px;
      align-items: center;
      .cl_item_d{
        color: #2278FF;
        font-size: 16px;
        line-height: 24px;
      }
      .cl_item_line{
        width: 1px;
        height: 18px;
        background: #CCCCCC;
      }
    }

  }
}

.sj_list{
  display: flex;
  .sj_jc{
    justify-content: space-between;
  }
  .sj_item{
    width: 282px;
    height: 396px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 24px;
    background: #FFFFFF;
    box-shadow: 0 18px 48px 0 #0049B614;
    padding: 0 13px;
    //box-sizing: border-box;
    .sj_item_img{
      width: 72.28px;
      height: 74px;
      margin: 47px 0 37px 0;
    }
    .sj_item_t{
      color: #3D3D3D;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 30px;
    }
    .sj_item_d{
      color: #3D3D3D;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
    }
  }
}

.fw{
  display: flex;
  flex-direction: column;
  //height: 710px;
  width: 660px;
  border-radius: 24px;
  //border: 1.25px solid #00000019;
  padding-top: 40px;
  //box-sizing: border-box;
  overflow: hidden;
  justify-content: space-between;
  .fw_t{
    color: #FFFFFF;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    text-align: left;
    margin: 0 34px;
  }
  .fw_d{
    color: #FFFFFFCC;
    font-size: 32px;
    line-height: 48px;
    text-align: left;
    margin: 20px 34px 48px;
  }
  .fw_img{
    width: 564px;
    height: 410px;
  }

  .yw_t{
    color: #011A40;
  }
  .yw_d{
    color: #011A40;
  }

}

.yw_bg{
  background: #F9FAFB !important;
}

.fw_l{
  width: 560px;
  height: 600px;
}
.fw_r{
  width: 760px;
  height: 600px;
}

.fwc{
  width: 660px;
  height: 580px;
}

.fwzlgl_img{
  width: 520px;
  height: auto;
}

.yyyhgl_img{
  width: 600px;
  height: 300px;
}

.flexJC{
  display: flex;
  justify-content: space-between;
}

.kshzx_img{
  width: 550px;
  height: 300px;
}

.pzgl_img{
  width: 470px;
  height: 300px;
  align-self: center;
}

.fwyy{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 24px;
  background: #F9FAFB;
  border: 1px solid #00000019;
  padding-top: 40px;
  //height: 786px;
  .fwyy_t{
    color: #011A40;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    text-align: left;
    margin: 20px 34px;
  }
  .fwyy_d{
    color: #011A40CC;
    font-size: 32px;
    line-height: 48px;
    text-align: left;
    margin: 0 34px;
  }
  .fwyy_img{
    width: 900px;
    height: auto;
  }
}

.f_img_r{
  align-self: flex-end;
  justify-self: center;
}

.f_img_c{
  align-self: center;
  justify-self: center;
}

.emptyDiv{
  height: 300px;
}

.ywxt{
  margin-top: 100px;
}

#section1{
  margin-bottom: 158px;
}
</style>
