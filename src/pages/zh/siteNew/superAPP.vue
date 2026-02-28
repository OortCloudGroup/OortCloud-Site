<template>
  <div class="home_page vls">
    <div class="platTopOut flexRowAC w1380">
      <div class="platTop">
        <img class="VLStream_top" src="@/assets/software/ALLINONE.png" alt="" />
        <div class="VLStream flexRowAC">
          超级APP
          <img class="VLStream_img" src="@/assets/software/WorkUP.png" alt="" />
        </div>
        <div class="plat_cent">
          集成即时通讯、邮件、音视频会议、数据共享、流程审批、在线社交、健康管理等功能，
          贯通企业办公场景，提升效率，让工作更高效美好。
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
          <div class="seeMore u1">
            更多详情
          </div>
        </div>
      </div>
      <img class="platTopOutImg" src="@/assets/software/workApp.png" alt="" />
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/workup.mp4" controls autoplay muted />
    </div>
    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">概述</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">超级APP底座</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section3')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section3'}">平台应用</span>
        <span class="line" :class="{activeLine:activeSection==='section3'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section4')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section4'}">开放平台</span>
        <span class="line" :class="{activeLine:activeSection==='section4'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section5')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section5'}">运营运维</span>
        <span class="line" :class="{activeLine:activeSection==='section5'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section6')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section6'}">最佳实践</span>
        <span class="line" :class="{activeLine:activeSection==='section6'}" />
      </div>
    </div>
    <!-- 概述 -->
    <div id="section1" ref="section1">
      <div class="w1380 privateBox">
        <div class="item_list">
          <div class="item">
            <img src="@/assets/img/overview_img1.png" alt="" />
            <div class="overview_title">
              统一用户
            </div>
            <div class="overview_content">
              基于用户组织架构，提供组织架构、<br />
              用户、设备、标签管理等功能，实现<br />
              全网应用系统用户统一管理和分发，<br />
              保持组织用户的鲜活
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/overview_img2.png" alt="" />
            <div class="overview_title">
              统一认证
            </div>
            <div class="overview_content">
              提供用户身份的认证鉴权功能，实现<br />
              对接与PKi、TF卡的硬认证，支持与<br />
              声纹、人脸识别认证功能的扩展
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/overview_img3.png" alt="" />
            <div class="overview_title">
              统一授权
            </div>
            <div class="overview_content">
              提供全网内应用系统的统一角色授<br />
              权，实现用户的一键授权、<br />
              按岗、按责自动授权
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/overview_img4.png" alt="" />
            <div class="overview_title">
              API网关
            </div>
            <div class="overview_content">
              通过对服务的统一管理，汇聚形成集<br />
              中的服务集市及管理控制台。服务运<br />
              行支撑主要通过移服务总线解决应用<br />
              服务的集成共享问题
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/overview_img5.png" alt="" />
            <div class="overview_title">
              开发平台
            </div>
            <div class="overview_content">
              提供移动应用开发框架、原生交互能<br />
              力、插件资源支撑、标准UI框架调试<br />
              工具、开发者门户等内容
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/overview_img6.png" alt="" />
            <div class="overview_title">
              交付平台
            </div>
            <div class="overview_content">
              交付平台(镜像仓库，EKS服务，持<br />
              续交付)
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/overview_img7.png" alt="" />
            <div class="overview_title">
              流程中心
            </div>
            <div class="overview_content">
              工作流服务
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/overview_img8.png" alt="" />
            <div class="overview_title">
              统一用户
            </div>
            <div class="overview_content">
              提供端到端消息推送，支持web端和<br />
              APP端的统一管理。功能包括实时、<br />
              定时、离线、标签消息推送及透传，<br />
              简化业务系统集成
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 超级APP底座 -->
    <div id="section2" ref="section2">
      <div class="w1380 privateBox">
        <div class="title_l_plus title_l_box">
          PaaS
        </div>
        <div class="flexRowAC w1380 colMenu">
          <div class="left-menu">
            <div
              v-for="(item, index) in superItems"
              :key="index"
              class="menu-item"
              :class="{ active: activeIndexSuper === index }"
              @click="selectMenu(index)"
            >
              <div class="menu-content-wrapper">
                <div class="line" />
                <div class="text-content">
                  <div class="menu-text">
                    {{ item.title }}
                  </div>
                  <div v-show="activeIndexSuper === index" class="content-detail">
                    <p>{{ currentSuper.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div>
              <img :src="currentSuper.image" :alt="currentSuper.title" class="content-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 平台应用 -->
    <div id="section3" ref="section3">
      <div class="w1380 privateBox">
        <div class="title_l_plus title_l_box">
          平台应用
        </div>
        <div class="flexRow w1380 colMenu">
          <div class="right-content">
            <div>
              <img :src="currentApp.image" :alt="currentApp.title" class="content-image" />
            </div>
          </div>
          <div class="left-menu">
            <div
              v-for="(item, index) in appItems"
              :key="index"
              class="menu-item"
              :class="{ active: activeIndexApp === index }"
              @click="selectAppMenu(index)"
            >
              <div class="menu-content-wrapper">
                <div class="line" />
                <div class="text-content">
                  <div class="menu-text">
                    {{ item.title }}
                  </div>
                  <div v-show="activeIndexApp === index" class="content-detail">
                    <p>{{ currentApp.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 开放平台 -->
    <div id="section4" ref="section4">
      <div class="w1380">
        <div style="text-align: center;">
          <div class="openPlatform_title">
            <span class="blue">WorkUP </span>
            <span>超级APP </span>
            <span>开放平台</span>
          </div>
          <div class="cl_d">
            将强大的第三方能力集成到您的产品中帮助您为客户创造更多价值
          </div>
          <!-- 探索更多领域 -->
          <div class="openPlatform_item">
            <div class="openPlatform_item_title">
              探索更多应用领域
            </div>
            <div class="item_list">
              <div class="item">
                <img src="@/assets/img/open_img1.png" alt="" />
                <div class="overview_title">
                  创建企业自建应用
                </div>
                <div class="overview_content">
                  满足企业内部需求，快速搭建<br />
                  业务应用，为企业提供一站式<br />
                  办公能力
                </div>
              </div>
              <div class="item">
                <img src="@/assets/img/open_img2.png" alt="" />
                <div class="overview_title">
                  开发第三方应用
                </div>
                <div class="overview_content">
                  为行业客户提供更专业的定制化<br />
                  方案
                </div>
              </div>
              <div class="item">
                <img src="@/assets/img/open_img3.png" alt="" />
                <div class="overview_title">
                  深度定制
                </div>
                <div class="overview_content">
                  集成开放平台文档、云空间、审<br />
                  批、会议室等飞书功能，拓展您<br />
                  的应用边界
                </div>
              </div>
              <div class="item">
                <img src="@/assets/img/open_img4.png" alt="" />
                <div class="overview_title">
                  成为供应商
                </div>
                <div class="overview_content">
                  成为供应商，打下属于你的天地
                </div>
              </div>
            </div>
          </div>
          <!-- 个性化 -->
          <div class="openPlatform_item">
            <div class="openPlatform_item_title">
              个性化
            </div>
            <div class="personalBox">
              <div class="personal_list">
                <div class="personal_item">
                  <div class="overview_title">
                    开放平台
                  </div>
                  <div class="overview_content">
                    提供API、多终端SDK，企业可根据需求<br />
                    基于开放平台进行二次开发
                  </div>
                </div>
                <div class="personal_item">
                  <div class="overview_title">
                    私有化部署
                  </div>
                  <div class="overview_content">
                    支持本地化存储数据，以及多节点存<br />
                    储。既满足企业对数据完全可控的要<br />
                    求，又保证了较快的文件访问速度。
                  </div>
                </div>
                <div class="personal_item">
                  <div class="overview_title">
                    定制服务
                  </div>
                  <div class="overview_content">
                    支持与企业内部现有的统一身份认证系<br />
                    统对接，保持原有帐号体系；同时通过<br />
                    APP定制、LOGO定制等帮助用户打造专<br />
                    属的平台。
                  </div>
                </div>
              </div>
              <img src="@/assets/img/open_img5.png" alt="" />
            </div>
          </div>
          <!-- 常用工具 -->
          <div class="openPlatform_item">
            <div class="openPlatform_item_title">
              常用工具
            </div>
            <div class="tool_list">
              <div class="tool_item flexRow" style="align-items: center; text-align: left;">
                <img src="@/assets/img/open_img6.png" alt="" />
                <div>
                  <div class="overview_title" style="margin: 0 0 8px 0;">
                    小程序开发工具
                  </div>
                  <div class="overview_content">
                    流畅的开发者工具，让开发者方便地调试小程序 、查看<br />
                    编辑代码、发布和预览小程序，提高开发效率。
                  </div>
                </div>
              </div>
              <div class="tool_item flexRow" style="align-items: center; text-align: left;">
                <img src="@/assets/img/open_img7.png" alt="" />
                <div>
                  <div class="overview_title" style="margin: 0 0 8px 0;">
                    H5-JS-SDK
                  </div>
                  <div class="overview_content">
                    使用 H5-JS-SDK，调用原生页面，提升应用体验。
                  </div>
                </div>
              </div>
              <div class="tool_item flexRow" style="align-items: center; text-align: left;">
                <img src="@/assets/img/open_img8.png" alt="" />
                <div>
                  <div class="overview_title" style="margin: 0 0 8px 0;">
                    套件 API
                  </div>
                  <div class="overview_content">
                    WorkUP 有丰富的 API，包括日历 API、审批 API 和文档<br />
                    API ，助力你打造高效的办公体验。
                  </div>
                </div>
              </div>
              <div class="tool_item flexRow" style="align-items: center; text-align: left;">
                <img src="@/assets/img/open_img9.png" alt="" />
                <div>
                  <div class="overview_title" style="margin: 0 0 8px 0;">
                    应用目录
                  </div>
                  <div class="overview_content">
                    获得 ISV 资质后，你可以上架应用至应用目录供其他企业<br />
                    选用。WorkUP 将帮你获取来自全球的企业用户和收入。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 运营运维 -->
    <div id="section5" ref="section5">
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            移动应用数字化运营
          </div>
          <div class="cl_d">
            提供开发、发布、监测、认证等全流程支持，提升应用管理效率。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/img/superApp_img2.png" alt="" />
      </div>
    </div>
    <!-- 最佳实践 -->
    <div id="section6" ref="section6">
      <div class="w1380 CloudBox">
        <div class="openPlatform_title" style="text-align: center;">
          最佳实践
        </div>
        <div class="practice_list">
          <div class="practice_item">
            <img src="@/assets/img/superApp_img3.png" alt="" />
            <div class="overview_title">
              智慧政府一网协同
            </div>
            <div class="overview_content">
              即时通讯、私有云部署的移动安全办<br />
              公云平台、门户与应用仓库、移动应<br />
              用开发支撑平台、安全管控MDM等
            </div>
          </div>
          <div class="practice_item">
            <img src="@/assets/img/superApp_img3.png" alt="" />
            <div class="overview_title">
              智慧政府一网协同
            </div>
            <div class="overview_content">
              即时通讯、私有云部署的移动安全办<br />
              公云平台、门户与应用仓库、移动应<br />
              用开发支撑平台、安全管控MDM等
            </div>
          </div>
          <div class="practice_item">
            <img src="@/assets/img/superApp_img3.png" alt="" />
            <div class="overview_title">
              智慧政府一网协同
            </div>
            <div class="overview_content">
              即时通讯、私有云部署的移动安全办<br />
              公云平台、门户与应用仓库、移动应<br />
              用开发支撑平台、安全管控MDM等
            </div>
          </div>
          <div class="practice_item">
            <img src="@/assets/img/superApp_img3.png" alt="" />
            <div class="overview_title">
              智慧政府一网协同
            </div>
            <div class="overview_content">
              即时通讯、私有云部署的移动安全办<br />
              公云平台、门户与应用仓库、移动应<br />
              用开发支撑平台、安全管控MDM等
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRow" style="justify-content: flex-start">
      <div class="oort_logo">
        <img src="@/assets/img/oortLogo.png" alt="" />
      </div>
      <div>
        OortCloud AI Studio
        <div class="proTitleBox_c_t">
          OortCloud AI 原生 IDE，智能编码，一触即发
        </div>
        <div class="proTitleBox_c_t1" @click="viewPath('/zh/siteNew/oortVS')">
          查看详情
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRowAC">
      <div class="item_first">
        <div class="titleSize">
          支持多种方式创建项目
        </div>
        <div class="contentSize">
          支持从模板创建项目以及从 Git 导入项目，满足不同项目开发需求
        </div>
      </div>
      <div class="item_second">
        <div class="titleSize">
          开箱即用的开发
          <br />
          环境
        </div>
        <div class="contentSize">
          无需配置开发环境，选择模板立即
          <br />
          开始开发
        </div>
      </div>
      <div class="item_third">
        <div class="titleSize">
          快速稳定
        </div>
        <div class="contentSize">
          秒级创建多区域、多集群的部署，
          <br />
          提供稳定、低延迟的保证
        </div>
      </div>
    </div>
    <!-- 成功案例 -->
    <div class="productBox w1380">
      <div class="proT">
        成功案例
      </div>
      <div class="productImg p5Out flexRowAC" style="justify-content: space-between;">
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
      <div class="productImg product1">
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
    <!--资料下载-->
    <div class="productBox w1380">
      <div class="proT">
        资料下载
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class="product2Out_it flexRowAC">
          <div class="pro2o_l flexRowAC">
            <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />
            超级APP@1x.pdf
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'
import superapp_img1 from '@/assets/software/superAPP_c1.png'
import superapp_img2 from '@/assets/software/superAPP_c2.png'
import superapp_img3 from '@/assets/software/superAPP_c3.png'
import superapp_img4 from '@/assets/software/superAPP_c4.png'
import superapp_img5 from '@/assets/software/portalApp_c1.png'
import app_img1 from '@/assets/software/superAPP_c8.png'
import app_img2 from '@/assets/software/superAPP_c7.png'
definePageMeta({
  layout: 'site-new'
})

const activeSection = ref('section1')
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)
const section6 = ref(null)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const viewportHeight = window.innerHeight
    const offset = viewportHeight * 0.15
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}
// 超级APP底座
const superItems = ref([
  {
    title: '全面适配 形态多样',
    description: '不论是私有云、行业云、混合云都能安装部署，支持国产化适配、 鲲鹏云部署，一切目标只为满足您的实际业务。 ',
    image: superapp_img1
  },
  {
    title: '云交付 自主可控',
    description: '通信信息自主掌控，采用三端加密和五维防护，确保数据私有，防止破解、泄露、监听与窥视。',
    image: superapp_img2
  },
  {
    title: '功能丰富 多端可控',
    description: '支持移动端、双系统、华为Pad、PC端、国产化操作系统等多种办公终端等多端同步。',
    image: superapp_img3
  },
  {
    title: '安全设计 隐私保护',
    description: '采用三端加密与五维防护，提供消息保护、禁转、密聊等隐私功能，确保数据全生命周期加密，保障隐私安全。',
    image: superapp_img4
  },
  {
    title: '扩展能力强 广泛适用',
    description: '安全通讯服务内置应用市场和开发平台，支持开发者通过接口或SDK打造个性化应用，兼容VUE、H5、MUI、uni-app、移动端与PC多端开发。',
    image: superapp_img5
  }
])
const activeIndexSuper = ref(0)
const currentSuper = computed(() => {
  return superItems.value[activeIndexSuper.value]
})
function selectMenu(index) {
  activeIndexSuper.value = index
}
// 平台应用
const appItems = ref([
  {
    title: '云课堂',
    description: '基于移动互联网的培训管理和学习交互平台',
    image: app_img1
  },
  {
    title: '短视频',
    description: '工作方法，工作技巧，小发明，小创造，以“抖音”小视频的形式发布到动态圈。',
    image: app_img2
  }
])
const activeIndexApp = ref(0)
const currentApp = computed(() => {
  return appItems.value[activeIndexApp.value]
})
function selectAppMenu(index) {
  activeIndexApp.value = index
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

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/超级APP@1x.pdf'
  link.download = '超级APP@1x.pdf'
  link.click()
}

const router = useRouter()
const viewPath = (path) => {
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
}

let scrollListener = null

onMounted(() => {
  // 页面加载完成后监听滚动
  scrollListener = () => {
    updateActiveSection()
  }
  window.addEventListener('scroll', scrollListener)
  // 初始化时执行一次，确保默认激活项正确
  updateActiveSection()
})

onUnmounted(() => {
  // 组件销毁时移除监听，防止内存泄漏
  window.removeEventListener('scroll', scrollListener)
})

// 核心：更新激活的标签项
const updateActiveSection = () => {
  const sections = [
    { id: 'section1', ref: section1 },
    { id: 'section2', ref: section2 },
    { id: 'section3', ref: section3 },
    { id: 'section4', ref: section4 },
    { id: 'section5', ref: section5 },
    { id: 'section6', ref: section6 }
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
  padding-bottom: 110px;

  .platTopOutImg{
    flex-shrink: 0;
    width: 400px;
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

  .VLStream_top {
    height: 30px;
    width: auto;
  }

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
    padding: 8px 0;
    position: relative;

    .VLStream_img {
      margin-left: 30px;
      width: auto;
      height: 76px;
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
  padding: 0 0 110px;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-top: 30px;
  padding-bottom: 130px;
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

.k8sMana_c1 {
  width: 800px;
  height: 600px;
}

.tabSwitch{
  position: sticky;
  top: 82px;
  background-color: #fff;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  border-bottom: 0.5px solid #DFDFDF;
  padding-top: 10px;
  margin-bottom: 130px;
  .tabItem{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 28px;
      letter-spacing: 2.67px;
      text-align: left;
      margin-bottom: 10px;
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

.item_list{
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 130px;
  .item{
    text-align: center;
    width: 330px;
    height: 316px;
    border-radius: 24px;
    padding-top: 40px;
    margin-bottom: 30px;
    box-shadow: 0px 18px 48px 0px rgba(0, 73, 182, 0.08);
  }
}
.overview_title{
  font-size: 24px;
  font-weight: bold;
  color: #3D3D3D;
  margin: 20px 0;
}
.overview_content{
  font-family: OPPOSans;
  font-size: 18px;
  font-weight: normal;
  color: #3D3D3D;
}

.privateBox{
  padding-bottom: 130px;

  .title_l_box{
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .title_l_plus{
    font-size: 80px;
    font-family: OPPOSans;
    font-weight: normal;
    color: #3D3D3D;
    margin-bottom: 60px;
  }
  .title_l{
    font-size: 50px;
    font-weight: bold;
    color: #3D3D3D;
    margin-bottom: 20px;
  }
  .title_m{
    font-size: 42px;
    font-weight: bold;
    color: #3D3D3D;
    margin-bottom: 20px;
  }
  .blue{
    color: #4480FF;
  }
  .yellow{
    color: #FFB82A;
  }
  .content {
    color: #041A40;
    font-size: 20px;
    font-weight: normal;
  }
  .item_box{
    margin-bottom: 60px;
  }
  .imgBox{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 60px 0;

    .img_item{
      text-align: center;
      width: 256px;
      height: 215px;
      border-radius: 24px;
      padding: 40px 0;
      background-color: #E2E3E5;

      img{
        width: 88px;
        height: 88px;
        margin-bottom: 10px;
      }
      p{
        font-size: 28px;
        font-weight: 500;
        color: #333333;
      }
    }
  }
  .imgBox2{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    img{
      width: 440px;
      height: 255px;
    }
  }
  .proTitleBox{
    img{
      width: 1380px;
      height: 640px;
    }
  }
}

.colMenu{
  justify-content: space-between;
  // margin-bottom: 160px;
}

.left-menu {
  width: 470px;
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
        font-size: 50px;
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

.content-image{
  width: 800px;
  height: 500px;
}

.flexRow{
  display: flex;
}
.openPlatform_title{
  padding-top: 30px;
  margin-bottom: 20px;
  font-size: 58px;
  font-weight: bold;
  color: #3D3D3D;
}
.blue{
  color: #2E63FF;
}
.openPlatform_item_title{
  font-size: 32px;
  font-weight: bold;
  color: #3D3D3D;
  margin-top: 80px;
  margin-bottom: 40px;
}
.personal_item{
  width: 319px;
  margin-bottom: 40px;
}
.personalBox{
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;
  img{
    width: 472px;
    height: 482px;
  }
}
.tool_list{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 130px;
}
.tool_item{
  width: 670px;
  height: 156px;
  border-radius: 24px;
  box-shadow: 0px 18px 48px 0px rgba(0, 73, 182, 0.08);
  img{
    width: 80px;
    height: 80px;
    margin: 0 20px
  }
}
.practice_list{
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.practice_item{
  text-align: center;
  width: 330px;
  height: 326px;
  padding-top: 40px;
  border-radius: 24px;
  box-shadow: 0px 18px 48px 0px rgba(0, 73, 182, 0.08);
}
.oort_logo{
  img{
    width: 67px;
    height: 80px;
    margin-right: 16px;
  }
}
.proTitleBox_c_t {
  color: #717781;
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  padding: 30px 0;
}

.proTitleBox_c_t1 {
  cursor: pointer;
  color: #2278FF;
  font-weight: normal;
  font-size: 20px;
}
.item_first{
  width: 703px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/cjxm.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.item_second{
  width: 338px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kfhj.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.item_third{
  width: 338px;
  height: 568px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kswd.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.titleSize{
  font-size: 40px;
  font-weight: bold;
  line-height: 60px;
  margin-top: 40px;
}
.contentSize{
  font-size: 20px;
  font-weight: normal;
  color: #717781;
  line-height: 30px;
  margin-top: 24px;
}
.proTitleBox {
  justify-content: center;
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
  padding-bottom: 100px;
}
</style>
