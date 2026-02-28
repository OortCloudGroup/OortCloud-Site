<template>
  <div class="home_page vls">
    <div class="platTop w1380 flexRowAC">
      <div>
        <div class="VLStream">
          私有云
        </div>
        <div class="plat_cent">
          通过基础设施云化、软件与硬件解耦、数据与业务解耦、应用与平台解耦,
          构建开放技术架构和业务生态
        </div>
        <div class="flexRowAC useBox">
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
      <img class="VLStream_top" src="@/assets/img/privateImg.png" alt="" />
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/私有云.mp4" controls autoplay muted />
    </div>
    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">概述</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">IaaS</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section3')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section3'}">PaaS</span>
        <span class="line" :class="{activeLine:activeSection==='section3'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section4')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section4'}">SaaS</span>
        <span class="line" :class="{activeLine:activeSection==='section4'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section5')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section5'}">跨网支撑</span>
        <span class="line" :class="{activeLine:activeSection==='section5'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section6')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section6'}">运营运维</span>
        <span class="line" :class="{activeLine:activeSection==='section6'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section7')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section7'}">上云实践</span>
        <span class="line" :class="{activeLine:activeSection==='section7'}" />
      </div>
    </div>
    <!-- 概述 -->
    <div id="section1" ref="section1">
      <div class="w1380 privateBox">
        <div class="title_l title_l_box">
          私有云优势
        </div>
        <div class="item_box">
          <div class="title_m blue">
            什么是私有云
            <span class="title_m yellow">?</span>
          </div>
          <div class="content">
            私有云，是指企业自己使用的云，它所有的服务不是供别人使用，而是供自己内部人员或分支机构使用。私有云的部署比较适合于有众多分支机构的大型企业或政府部门。随着这些大型企业数据中心的集中化，私有云将会成为他们部署IT系统的主流模式
          </div>
          <div class="imgBox">
            <div class="img_item">
              <img src="@/assets/img/private_img1.png" alt="" />
              <p>
                能对数据、安全<br />
                性提供有效控制
              </p>
            </div>
            <div class="img_item">
              <img src="@/assets/img/private_img2.png" alt="" />
              <p>
                提供更高的服务<br />
                质量
              </p>
            </div>
            <div class="img_item">
              <img src="@/assets/img/private_img3.png" alt="" />
              <p>
                充分利用现有硬<br />
                件、软件资源
              </p>
            </div>
            <div class="img_item">
              <img src="@/assets/img/private_img4.png" alt="" />
              <p>
                不影响现有IT管<br />
                理的流程
              </p>
            </div>
            <div class="img_item">
              <img src="@/assets/img/private_img5.png" alt="" />
              <p>
                部署方式灵活
              </p>
            </div>
          </div>
        </div>
        <div class="item_box">
          <div class="title_m">
            性能指标
          </div>
          <div class="imgBox2">
            <img src="@/assets/img/Performance_img1.png" alt="" />
            <img src="@/assets/img/Performance_img2.png" alt="" />
            <img src="@/assets/img/Performance_img3.png" alt="" />
            <img src="@/assets/img/Performance_img4.png" alt="" />
            <img src="@/assets/img/Performance_img5.png" alt="" />
            <img src="@/assets/img/Performance_img6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- laaS -->
    <div id="section2" ref="section2">
      <div class="w1380 privateBox">
        <div class="title_l ">
          基础云能力 IaaS
        </div>
        <div class="content contentBox">
          提供强大的计算、存储、网络等基础设施，确保平台稳定可靠运行
        </div>
        <!-- <div class="detail">
          查看详情
        </div> -->
      </div>
      <div class="w1380 privateBox">
        <div class="proTitleBox w1380 flexRowAC">
          <img class="privateCloud_c1" src="@/assets/software/privateCloud_c1.png" alt="" />
        </div>
      </div>
    </div>
    <!-- PaaS -->
    <div id="section3" ref="section3">
      <div class="w1380 privateBox">
        <div class="title_l_plus title_l_box">
          PaaS
        </div>
        <div class="flexRowAC w1380 colMenu">
          <div class="left-menu">
            <div
              v-for="(item, index) in paasItems"
              :key="index"
              class="menu-item"
              :class="{ active: activeIndexPass === index }"
              @click="selectMenu(index)"
            >
              <div class="menu-content-wrapper">
                <div class="line" />
                <div class="text-content">
                  <div class="menu-text">
                    {{ item.title }}
                  </div>
                  <div v-show="activeIndexPass === index" class="content-detail">
                    <p>{{ currentPaas.description }}</p>
                    <!-- <div class="detail">
                      查看详情
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div>
              <img class="content-image" :src="currentPaas.image" :alt="currentPaas.title" />
            </div>
          </div>
        </div>
      </div>
      <div class="w1380 privateBox paasBox">
        <div class="topList">
          <div class="top_item ">
            <img src="@/assets/img/privateCloud_img1.png" alt="" />
            <span>弹性+分布式优势</span>
          </div>
          <div class="top_item ">
            <img src="@/assets/img/privateCloud_img2.png" alt="" />
            <span>API 网关技术实现原理</span>
          </div>
          <div class="top_item ">
            <img src="@/assets/img/privateCloud_img3.png" alt="" />
            <span>微服务Spring Cloud治理</span>
          </div>
          <div class="top_item ">
            <img src="@/assets/img/privateCloud_img4.png" alt="" />
            <span>DevOps 产品特点</span>
          </div>
        </div>
        <div class="mainContent">
          <div class="paas">
            PaaS
          </div>
          <div class="paasList">
            <div class="paas_item">
              <img src="@/assets/img/privateCloud_img5.png" alt="" />
              <div class="title">
                容器云
              </div>
              <div class="contents">
                封装负载的环境构建（一次封装）
              </div>
              <div class="contents">
                屏蔽异构基础设施的复杂性（到处运行）
              </div>
              <div class="contents">
                提高资源使用效率
              </div>
              <div class="contents">
                基础设施到应用的自动化运维
              </div>
              <div class="contents">
                多租户管理，弹性伸缩
              </div>
            </div>
            <div class="paas_item">
              <img src="@/assets/img/privateCloud_img6.png" alt="" />
              <div class="title">
                DevOps
              </div>
              <div class="contents">
                快速响应业务端需求变更
              </div>
              <div class="contents">
                自动化: 持续集成，持续发布等功能提高交付质量及可靠性
              </div>
              <div class="contents">
                标准化: 减少运维出错率
              </div>
              <div class="contents">
                规模化: 支撑大规模高密度发布流程
              </div>
            </div>
            <div class="paas_item">
              <img src="@/assets/img/privateCloud_img7.png" alt="" />
              <div class="title">
                微服务架构
              </div>
              <div class="contents">
                开发人员更聚焦特定业务
              </div>
              <div class="contents">
                不同业务组件的错误隔离
              </div>
              <div class="contents">
                混合技术栈
              </div>
              <div class="contents">
                独立部署，细粒度伸缩
              </div>
              <div class="contents">
                服务目录，能力沉淀
              </div>
              <div class="contents">
                应用市场，能力输出
              </div>
            </div>
            <div class="paas_item">
              <img src="@/assets/img/privateCloud_img8.png" alt="" />
              <div class="title">
                云原生
              </div>
              <div class="contents">
                开发人员更聚焦特定业务
              </div>
              <div class="contents">
                不同业务组件的错误隔离
              </div>
              <div class="contents">
                混合技术栈
              </div>
              <div class="contents">
                独立部署，细粒度伸缩
              </div>
              <div class="contents">
                服务目录，能力沉淀
              </div>
              <div class="contents">
                应用市场，能力输出
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SaaS -->
    <div id="section4" ref="section4">
      <div class="w1380 privateBox">
        <div class="title_l_plus title_l_box">
          SaaS
        </div>
        <div class="flexRow w1380 colMenu">
          <div class="left-menu">
            <div
              v-for="(item, index) in saasItems"
              :key="index"
              class="menu-item"
              :class="{ active: activeIndexSass === index }"
              @click="selectSassMenu(index)"
            >
              <div class="menu-content-wrapper">
                <div class="line" />
                <div class="text-content">
                  <div class="menu-text">
                    {{ item.title }}
                  </div>
                  <div v-show="activeIndexSass === index" class="content-detail">
                    <p>{{ currentSaas.description }}</p>
                    <!-- <div class="detail">
                      查看详情
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div>
              <img class="content-image" :src="currentSaas.image" :alt="currentSaas.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 跨网支撑 -->
    <div id="section5" ref="section5">
      <div class="w1380 privateBox">
        <div class="title_l_plus title_l_box">
          跨网支撑
        </div>
        <div class="flexRow w1380 colMenu">
          <div class="left-menu">
            <div
              v-for="(item, index) in crossItems"
              :key="index"
              class="menu-item"
              :class="{ active: activeIndexCross === index }"
              @click="selectCrossMenu(index)"
            >
              <div class="menu-content-wrapper">
                <div class="line" />
                <div class="text-content">
                  <div class="menu-text">
                    {{ item.title }}
                  </div>
                  <div v-show="activeIndexCross === index" class="content-detail">
                    <p>{{ currentCross.description }}</p>
                    <!-- <div class="detail">
                      查看详情
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div>
              <img :src="currentCross.image" :alt="currentCross.title" class="content-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 运营运维 -->
    <div id="section6" ref="section6">
      <div class="w1380 privateBox">
        <div class="title_l_plus title_l_box">
          运营运维
        </div>
        <div class="flexRow w1380 colMenu">
          <div class="left-menu">
            <div
              v-for="(item, index) in operationItems"
              :key="index"
              class="menu-item"
              :class="{ active: activeIndexoperation === index }"
              @click="selectoperationMenu(index)"
            >
              <div class="menu-content-wrapper">
                <div class="line" />
                <div class="text-content">
                  <div class="menu-text">
                    {{ item.title }}
                  </div>
                  <div v-show="activeIndexoperation === index" class="content-detail">
                    <p>{{ currentoperation.description }}</p>
                    <!-- <div class="detail">
                      查看详情
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div>
              <img :src="currentoperation.image" :alt="currentoperation.title" class="content-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 上云实践 -->
    <div id="section7" ref="section7">
      <div class="w1380 privateBox">
        <div class="title_l_plus title_l_box">
          上云实践
        </div>
        <div class="flexRow w1380 colMenu">
          <div class="left-menu">
            <div
              v-for="(item, index) in practiceItems"
              :key="index"
              class="menu-item"
              :class="{ active: activeIndexpractice === index }"
              @click="selectpracticeMenu(index)"
            >
              <div class="menu-content-wrapper">
                <div class="line" />
                <div class="text-content">
                  <div class="menu-text">
                    {{ item.title }}
                  </div>
                  <div v-show="activeIndexpractice === index" class="content-detail">
                    <p>{{ currentpractice.description }}</p>
                    <!-- <div class="detail">
                      查看详情
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div>
              <img :src="currentpractice.image" :alt="currentpractice.title" class="content-image" />
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
            私有云@1x.pdf
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'
import paasImg1 from '@/assets/img/paas_img1.png'
import paasImg2 from '@/assets/img/paas_img2.png'
import paasImg3 from '@/assets/img/paas_img3.png'
import paasImg4 from '@/assets/img/paas_img4.png'
import paasImg5 from '@/assets/img/paas_img5.png'
import paasImg6 from '@/assets/img/paas_img6.png'
import saasImg1 from '@/assets/img/saas_img1.png'
import saasImg2 from '@/assets/img/saas_img2.png'
import saasImg3 from '@/assets/img/saas_img3.png'
import crossImg1 from '@/assets/img/cross_img1.png'
import crossImg2 from '@/assets/img/cross_img2.png'
import operationImg1 from '@/assets/img/operation_img1.png'
import operationImg2 from '@/assets/img/operation_img2.png'
import operationImg3 from '@/assets/img/operation_img3.png'
import operationImg4 from '@/assets/img/operation_img4.png'
import operationImg5 from '@/assets/img/operation_img5.png'
import practiceImg1 from '@/assets/img/practice_img1.png'
import practiceImg2 from '@/assets/img/practice_img2.png'
import practiceImg3 from '@/assets/img/practice_img3.png'
import practiceImg4 from '@/assets/img/practice_img4.png'

const activeSection = ref('section1')
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)
const section6 = ref(null)
const section7 = ref(null)

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
// paas
const paasItems = ref([
  {
    title: '服务目录',
    description: '集中管理平台内各类服务，用户可以方便地查看、选择和使用',
    image: paasImg1
  },
  {
    title: '基础服务',
    description: '提供基础的数据存储、网络、安全等核心服务，支撑云端应用的稳定运行',
    image: paasImg2
  },
  {
    title: '服务总线',
    description: '基于OpenSergo统一微服务治理警务服务总线软件',
    image: paasImg3
  },
  {
    title: '业务中台',
    description: '通过模块化的中台服务，提供高效的数据、技术和组织支撑，促进业务快速开发与灵活部署。',
    image: paasImg4
  },
  {
    title: '开放服务集成',
    description: '通过模块化的中台服务，提供高效的数据、技术和组织支撑，促进业务快速开发与灵活部署。',
    image: paasImg5
  },
  {
    title: '虚拟化',
    description: '容器和虚拟机集成管理具备高可用性、弹性伸缩和资源优化能力，构建稳定可靠的云原生运行环境。',
    image: paasImg6
  }
])
const activeIndexPass = ref(0)
const currentPaas = computed(() => {
  return paasItems.value[activeIndexPass.value]
})
function selectMenu(index) {
  activeIndexPass.value = index
}
// sass
const saasItems = ref([
  {
    title: '应用市场',
    description: '提供丰富的应用资源，企业可根据需求选择和部署适合的云应用 ',
    image: saasImg1
  },
  {
    title: '应用开放集成',
    description: '提供开发工具和资源，简化应用开发流程，助力企业快速创新',
    image: saasImg2
  },
  {
    title: '门户与应用仓库能力',
    description: '快速打造数字化超级APP',
    image: saasImg3
  }
])
const activeIndexSass = ref(0)
const currentSaas = computed(() => {
  return saasItems.value[activeIndexSass.value]
})
function selectSassMenu(index) {
  activeIndexSass.value = index
}

// 跨网支撑
const crossItems = ref([
  {
    title: '跨网支撑能力',
    description: '保障跨网络数据安全传输，支持内容审查、权限管理与全流程审计，提升数据交换合规性。 ',
    image: crossImg1
  },
  {
    title: '跨网请求痕迹查询',
    description: '每一个节点都可以显示请求痕迹，快速排除故障。',
    image: crossImg2
  }
])
const activeIndexCross = ref(0)
const currentCross = computed(() => {
  return crossItems.value[activeIndexCross.value]
})
function selectCrossMenu(index) {
  activeIndexCross.value = index
}

// 运营运维
const operationItems = ref([
  {
    title: '应用运营体系',
    description: '支持全生命周期应用管理，包括开发、发布、运营和评估，推动个性化需求的快速迭代和持续优化。',
    image: operationImg1
  },
  {
    title: '多租户管理',
    description: '实现资源共享与数据隔离，提供高效、安全的独立租户服务，降低运维成本。',
    image: operationImg2
  },
  {
    title: '移动应用数字化运营',
    description: '提供开发、发布、监测、认证等全流程支持，提升应用管理效率。',
    image: operationImg3
  },
  {
    title: '应用开发支撑体系',
    description: '通过设计规范与能力接入标准，统一用户体验，避免重复建设。',
    image: operationImg4
  },
  {
    title: '应用使用绩效评估体系',
    description: '实现平台应用的使用绩效管理，使用效能评估等工作，形成新型绩效考核机制。',
    image: operationImg5
  }
])
const activeIndexoperation = ref(0)
const currentoperation = computed(() => {
  return operationItems.value[activeIndexoperation.value]
})
function selectoperationMenu(index) {
  activeIndexoperation.value = index
}

// 上云实践
const practiceItems = ref([
  {
    title: '新应用微服务设计',
    description: '支持全生命周期应用管理，包括开发、发布、运营和评估，推动个性化需求的快速迭代和持续优化。',
    image: practiceImg1
  },
  {
    title: '微服务引擎适配',
    description: '支持全生命周期应用管理，包括开发、发布、运营和评估，推动个性化需求的快速迭代和持续优化。',
    image: practiceImg2
  },
  {
    title: '应用容器化改造',
    description: '应用容器化改造是将应用容器化，实现PaaS无差异调度，存储数据外部化。',
    image: practiceImg3
  },
  {
    title: '应用可视化快速部署',
    description: '应用容器化改造是将应用容器化，实现PaaS无差异调度，存储数据外部化。',
    image: practiceImg4
  }
])
const activeIndexpractice = ref(0)
const currentpractice = computed(() => {
  return practiceItems.value[activeIndexpractice.value]
})
function selectpracticeMenu(index) {
  activeIndexpractice.value = index
}
const handleScroll = () => {
  const sections = [
    { id: 'section1', ref: section1 },
    { id: 'section2', ref: section2 },
    { id: 'section3', ref: section3 },
    { id: 'section4', ref: section4 },
    { id: 'section5', ref: section5 },
    { id: 'section6', ref: section6 },
    { id: 'section7', ref: section7 }
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
const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/私有云@1x.pdf'
  link.download = '私有云@1x.pdf'
  link.click()
}

definePageMeta({
  layout: 'site-new'
})
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

const router = useRouter()
const viewPath = (path) => {
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
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
    justify-content: flex-start;
    gap: 20px;

    .seeMore {
      padding: 24px 40px;
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

.tabSwitch{
  position: sticky;
  top: 82px;
  background-color: #fff;
  z-index: 9;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 160px;
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

.privateBox{
  padding-bottom: 120px;

  .title_l_box{
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

.detail{
  margin-top: 40px;
  font-size: 24px;
  font-weight: normal;
  color: #2E63FF;
}

.colMenu{
  justify-content: space-between;
  // margin-bottom: 160px;
}

.flexRow{
  display: flex;

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
.paasBox{
  background-color: #EBF0FA;
  padding: 40px;
  border-radius: 24px;
  margin-bottom: 160px;
}
.topList{
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}
.top_item{
  padding: 14px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 152px;
  span{
    font-size: 24px;
    font-weight: normal;
    margin-left: 8px;
  }
  img{
    width: 40px;
    height: 40px;
  }
}
.mainContent{
  .paas{
    text-align: center;
    line-height: 88px;
    background-color: #2E63FF;
    border-radius: 12px;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
  }
  .paasList{
    display: flex;
    justify-content: space-between;
    .paas_item{
      width: 280px;
      height: 470px;
      padding: 20px;
      background-color: #fff;
      border-radius: 12px;
      img{
        width: 68px;
        height: 68px;
      }
      .title{
        font-size: 32px;
        font-weight: bold;
        margin-top: 20px;
      }
      .contents{
        font-size: 18px;
        font-weight: normal;
        margin-top: 20px;
      }
    }
  }
}
</style>
