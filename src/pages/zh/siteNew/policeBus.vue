<template>
  <div class="home_page vls">
    <div class="platTopOut">
      <div class="platTop w1380">
        <div class="VLStream">
          警务服务总线
        </div>
        <div class="plat_cent">
          基于OpenSergo统一微服务治理警务服务总线软件
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
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/警务服务.mp4" controls autoplay muted />
    </div>

    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section0')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section0'}">统一门户</span>
        <span class="line" :class="{activeLine:activeSection==='section0'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">服务总线</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">开发运营</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section3')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section3'}">应用市场</span>
        <span class="line" :class="{activeLine:activeSection==='section3'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section4')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section4'}">产品架构</span>
        <span class="line" :class="{activeLine:activeSection==='section4'}" />
      </div>
    </div>

    <div id="section0" ref="section0" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          统一门户
        </div>
        <div class="cl_d">
          前端提供统一门户和应用市场，实现移动应用全生命周期管理及细粒度权限控制，为用户提供查询、下载、安装和评价的一站式入口。
        </div>
      </div>
      <img class="k8sMana_c1" src="@/assets/software/k8sMana_c4.png" alt="" />
    </div>

    <div id="section1" ref="section1" class="w1380 CloudBox flexRowAC">
      <img class="k8sMana_c1" src="@/assets/software/policeBus_c0.png" alt="" />
      <div class="CloudL">
        <div class="cl_t">
          服务总线
        </div>
        <div class="cl_d">
          智慧云aPaaS应用支撑平台构建服务总线，实现资源管理、服务调度、访问控制及目录化管控，为移动应用高效运营和开放共享提供支持。
        </div>
      </div>
    </div>

    <div id="section2" ref="section2" class="w1380 ipcView dev CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          开发运营支撑
        </div>
        <div class="terminal">
          <img class="terminalImg" src="@/assets/software/policeBusC1.png" alt="" />
          <div class="terminalT">
            终端业务服务能力集成
          </div>
          <div class="terminalD">
            提供了手机地图集成、刷脸组件集成、智能感知集成、扫一扫集成等约100多项终端政务业务基础能力。
          </div>
        </div>
        <div class="terminal cloud">
          <img class="terminalImg" src="@/assets/software/policeBusC2.png" alt="" />
          <div class="terminalT">
            云端业务服务能力集成
          </div>
          <div class="terminalD">
            提供了点播服务、流媒体服务、视频发布服务、工作流、表单、工单服务、收藏服务、日程服务、发通知服务、点赞服务、分享服务、电子签名服务等共约200多项政务业务服务能力。
          </div>
        </div>
      </div>
    </div>

    <div id="section3" ref="section3" class="w1380 ipcView CloudBox flexRowAC">
      <img class="k8sMana_c1" src="@/assets/software/policeBus_c1.png" alt="" />
      <div class="CloudL">
        <div class="cl_t">
          应用市场
        </div>
        <div class="cl_d">
          配置默认基础应用,满足各行业组织日常工作需求：云盘、单聊、群聊、动态圈、短视频、公众号、新闻推送、工作助手、工作汇报、会议助手、云课堂等。
        </div>
      </div>
    </div>

    <div id="section4" ref="section4" class="productBox w1380">
      <div class="proT">
        产品架构
      </div>
      <img class="policeBus_c2" src="@/assets/software/policeBus_c2.png" alt="" />
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

    <!-- 现在开始体验 -->
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
            警务服务总线V3.0技术白皮书.pdf
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
import { ref, onMounted, onUnmounted } from 'vue'

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/警务服务总线V3.0技术白皮书.pdf'
  link.download = '警务服务总线V3.0技术白皮书.pdf'
  link.click()
}
definePageMeta({
  layout: 'site-new'
})

const activeSection = ref('section0')

const section0 = ref(null) // 统一门户
const section1 = ref(null) // 服务总线
const section2 = ref(null) // 开发运营
const section3 = ref(null) // 应用市场
const section4 = ref(null) // 产品架构

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

const handleScroll = () => {
  const sections = [
    { id: 'section0', ref: section0 },
    { id: 'section1', ref: section1 },
    { id: 'section2', ref: section2 },
    { id: 'section3', ref: section3 },
    { id: 'section4', ref: section4 }
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

.platTopOut {
  height: 880px;
  width: auto;
  background-image: url('@/assets/software/policeBus_bg.png');
  background-size: 100% 100%;
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
    text-align: left;
  }

  .CloudL {
    width: 500px;
  }
}

.ipcView.dev {
  .CloudL{
    width: 100%;
  }
  .terminal {
    margin-bottom: 20px;
    width: 100%;
    padding: 30px;
    border-radius: 24px;
    background: linear-gradient(180deg, #F7FCFE 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;

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

    .terminalD{
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

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT {
    padding-bottom: 60px;
    color: #333333;
    font-weight: bold;
    font-size: 54px;
    line-height: 82px;
  }

  .productImg {
    width: 100%;
    height: 300px;

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
}

.k8sMana_c1{
  width: 692px;
  height: auto;
}

.policeBus_c2{
  width: 1076px;
  height: 849px;
  background-size: 100% 100%;
}

.tabSwitch{
  position: sticky;
  top: 82px;
  z-index: 9;
  background-color: #fff;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 80px;
  .tabItem{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 28px;
      letter-spacing: 2.67px;
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }
    .line{
      width: 64px;
      height: 4px;
      background: transparent;
      transition: background-color 0.3s ease;
    }
    .activeTitle{
      color: #333333;
      font-weight: 500;
    }
    .activeLine{
      background: #4480FF;
    }
  }
}

</style>
