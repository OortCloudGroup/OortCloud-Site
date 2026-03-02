<template>
  <div class="home_page vls">
    <div class="platTopOut">
      <div class="platTop w1380">
        <div class="VLStream">
          指挥调度
        </div>
        <div class="plat_cent">
          指挥调度，警情、警力、现场、调度、过程可视
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
          <div class="seeMore u1">
            更多详情
          </div>
        </div>
      </div>
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/指挥调度.mp4" controls autoplay muted />
    </div>

    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('sceneSection')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='sceneSection'}">应用场景</span>
        <span class="line" :class="{activeLine:activeSection==='sceneSection'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('advantageSection')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='advantageSection'}">产品优势</span>
        <span class="line" :class="{activeLine:activeSection==='advantageSection'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('serviceSection')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='serviceSection'}">产品服务</span>
        <span class="line" :class="{activeLine:activeSection==='serviceSection'}" />
      </div>
    </div>

    <div id="sceneSection" ref="sceneSection" class="proTitleBox scene w1380">
      <div class="subTitle" style="padding-top: 0;">
        应用场景
      </div>
      <div class="panel">
        <n-tabs type="line" trigger="click" animated :bar-width="150" @before-leave="onBeforeLeave">
          <n-tab-pane v-for="(item, index) in list" :key="index" :name="item.t" :tab="item.t">
            <div class="pane">
              <div class="pane_left">
                <span class="pane_left_title">{{ item.c }}</span>
                <span class="pane_left_intro">{{ item.d }}</span>
                <n-button v-if="item.site" type="info">
                  了解详情
                </n-button>
              </div>
              <div class="pane_right">
                <Image :src="item.i" />
              </div>
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>

    <div id="advantageSection" ref="advantageSection" class="proTitleBox w1380">
      <div class="subTitle">
        产品优势
      </div>
      <div class="flexRowAC proLBox">
        <div v-for="(item,i) in proL" :key="i" class="proL_tab">
          <img class="proL_img" :src="item.i" alt="" />
          <div class="proL_tab">
            {{ item.t }}
          </div>
          <div class="proL_d">
            {{ item.d }}
          </div>
        </div>
      </div>
    </div>

    <div id="serviceSection" ref="serviceSection">
      <div class="proTitleBox w1380 flexRowAC subTitle">
        产品服务
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            指挥中心操作台
          </div>
          <div class="cl_d">
            分体式键盘，解锁多种形态，平板笔记本二合一助你快速进入状态，连接蓝牙键盘，还原笔记本办公体验，随时随地高效输出。
          </div>
        </div>
        <img class="dispatch_c1" src="@/assets/software/command_center_console.png" alt="" />
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            便携式打印机
          </div>
          <div class="cl_d">
            充分满足多种使用需求，性价比更高，耐摔防水耐用性强更省心，摆脱传统式数据线连接随身携带更方便。
          </div>
        </div>
        <img class="dispatch_c2" src="@/assets/software/dispatch_c2.png" alt="" />
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t" style="white-space: nowrap;">
            执法记录仪/便携摄像头
          </div>
          <div class="cl_d">
            持久续航3000mA大容量，满足整天录制需求，采用专业级影像传感器，记录画面更细腻，IP66防护等级，高空防摔。
          </div>
        </div>
        <img class="dispatch_c3" src="@/assets/software/dispatch_c3.png" alt="" />
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            位置服务系统
          </div>
          <div class="cl_d">
            采用GNSS、Wi-Fi、基站等多种混合定位模式进行定位，赋予您的应用程序快速、精准地获取用户位置信息的能力。
          </div>
        </div>
        <img class="dispatch_c4" src="@/assets/software/dispatch_c4.png" alt="" />
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            位置服务终端
          </div>
          <div class="cl_d">
            融合4G无线通信技术，高灵敏度GPS+BDS双星定位，支持WIFI室内外定位，AGPS快速辅助定位跟踪同步授时，快速搜星且定位精准。
          </div>
        </div>
        <img class="dispatch_c5" src="@/assets/software/dispatch_c5.png" alt="" />
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            融合通信一张图<br />可视化指挥调度
          </div>
          <div class="cl_d">
            通过融合应急指挥调度一张图管控端侧资源,形成云计算、一张图、应用端APP落地方案。
          </div>
        </div>
        <img class="dispatch_c6" src="@/assets/software/dispatch_c6.png" alt="" />
      </div>
      <div class="w1380 CloudBox">
        <div>
          <div class="cl_t">
            单兵作战终端 多端协同
          </div>
          <div class="cl_d cl_t_d">
            支持移动端、PC端、执法记录仪端及车载终端协同，提供实时高效的多端联动与指挥管理能力，适用于多场景任务调度。
          </div>
        </div>
        <img class="cl_t_img" src="@/assets/software/zhdd_cpys_ddxt.png" alt="" />
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
            OpenGBS可视化国标(GB28181)指挥调度平台V1.0技术白皮书.pdf
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
import { NTabs, NTabPane, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'
import dispatch_bg1 from '@/assets/software/dispatch_bg1.png'
import dispatch_bg2 from '@/assets/software/dispatch_bg2.png'
import dispatch_bg3 from '@/assets/software/dispatch_bg3.png'
import dispatch_bg4 from '@/assets/software/dispatch_bg4.png'
import dispatch_pro1 from '@/assets/software/dispatch_pro1.png'
import dispatch_pro2 from '@/assets/software/dispatch_pro2.png'
import dispatch_pro3 from '@/assets/software/dispatch_pro3.png'

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/OpenGBS可视化国标(GB28181)指挥调度平台V1.0技术白皮书.pdf'
  link.download = 'OpenGBS可视化国标(GB28181)指挥调度平台V1.0技术白皮书.pdf'
  link.click()
}
definePageMeta({
  layout: 'site-new'
})
// let isAct = ref(0)
let list = ref([])
list.value = [
  {
    t: '公安',
    i: dispatch_bg1,
    c: '公安解决方案',
    d: '打造全警钟、全平台、资源整合、系统集成、信息共享，实现接警、指挥、调度为一体的公安指挥中心，从而更有效的提高治安预防、控制、制止的反应能力。'
  }, {
    t: '应急',
    i: dispatch_bg2,
    c: '应急综合管理',
    d: '平台满足国家应急管理标准体系,以"平时战时结合"、可视化应急"\n' +
      '为设计理念,建立基于应急一张图的可视化指挥调度平台,实现日常协\n' +
      '同办公管理、预测预警、动态辅助决策、指挥调度、模拟演练培训、应\n' +
      '急大数据决策分析等功能,为应急救援提供辅助决策支挂 '
  }, {
    t: '消防',
    i: dispatch_bg3,
    c: '消防指挥中心',
    d: '建设智能化消防指挥中心,确保消防信息通信快速、准确、畅通,提高\n' +
      '消防救援行动中快速反应能力,平台提供消防指挥中心警情受理、调度\n' +
      '指挥、信息传递、指挥决策等功能'
  }, {
    t: '群防群治',
    i: dispatch_bg4,
    c: '群防群治综合管理',
    d: '方案重心是维护社会稳定、化解基层矛盾、防控违法犯罪,应对大规模\n' +
      '公共危机和安保活动。有效完善党委负责、改府负责、社会协调、公众 \n' +
      '参与、法制保障的社会治理体制,打造共治共建共享的社会治理格局'
  }
]

const router = useRouter()
const onBeforeLeave = (index) => {
  if (index === '更多') {
    router.push('/services')
    return false
  } else return true
}

let proL = ref([])
proL.value = [
  { t: '多个接口系统', i: dispatch_pro1, d: '同时提供接处警、警综、视综等13个接口子系统' },
  {
    t: '地图功能多场景适用',
    i: dispatch_pro2,
    d: '警情案件、群防群治等多场景都可以用,\n' +
      '  指挥要素的基于地图的数据可视化'
  },
  {
    t: '一体化入口',
    i: dispatch_pro3,
    d: '数据对接自定义图层,实现应用场景\n' +
      '的一体化入口、一体化作战指挥调度\n' +
      '平台'
  }
]

const activeSection = ref('sceneSection')

const sceneSection = ref(null)
const advantageSection = ref(null)
const serviceSection = ref(null)

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
    { id: 'sceneSection', ref: sceneSection },
    { id: 'advantageSection', ref: advantageSection },
    { id: 'serviceSection', ref: serviceSection }
  ]
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = section.ref.value
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      // 滚动位置在当前板块范围内，激活对应tab
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
  height: 620px;
  width: auto;
  background-image: url('@/assets/software/dispatch_bg.png');
  background-size: 100% 100%;
}

.platTop {
  text-align: left;
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
  padding: 110px 0 110px 0;
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

  .cl_t_d{
    width: 850px;
  }

  .CloudL {
    width: 520px;
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

.proTitleBox {
  justify-content: center;
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
}

.proTitleBox.scene {
  .sceneBox {
    .sceneT {
      cursor: pointer;
      color: #333333;
      font-weight: normal;
      font-size: 30px;
    }

    .scene_tab {
      width: 202px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      border-radius: 100% 100% 0px 0px;
      border: 1px solid transparent;
      background: transparent;
      color: #333;
    }

    .scene_tab.act {
      color: #2278FF;
      background: #FBFBFB;
      border: 1px solid #D8D8D8;
      border-bottom-color: #2278FF;
    }
  }

  .sceneBoBoxOut {
    justify-content: space-between;
    border-radius: 0px 10px 10px 10px;
    background: #FBFBFB;
    border: 1px solid #D8D8D8;
  }

  .sceneBoBox {
    width: 780px;
    padding: 60px;

    .sceneB_c {
      padding-bottom: 20px;
      color: #333333;
      font-weight: normal;
      font-size: 24px;
    }
  }
}

.dispatch_c1 {
  width: 590px;
  height: auto;
}

.dispatch_c2 {
  width: 630px;
  height: auto;
}

.dispatch_c3 {
  width: 670px;
  height: auto;
}

.dispatch_c4 {
  width: 430px;
  height: auto;
}

.dispatch_c5 {
  width: 640px;
  height: auto;
}

.cl_t_img{
  width: 100%;
  height: 500px;
}
.dispatch_c6 {
  width: 530px;
  height: auto;
}

.proLBox {
  justify-content: space-between;

  .proL_img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }

  .proL_tab {
    width: 290px;
    color: #10131F;
    font-weight: bold;
    font-size: 24px;
    text-align: left;
  }

  .proL_d {
    padding-top: 14px;
    color: #717781;
    font-weight: normal;
    font-size: 18px;
    text-align: left;
  }
}

.subTitle{
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
  line-height: 88px;
  text-align: center;
  padding-bottom: 60px;
  padding-top: 80px;
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
      letter-spacing: 2px;
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

.panel {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1380px;
  box-sizing: border-box;
}
.pane {
  position: relative;
  display: flex;
  &_left {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 380px;
    box-sizing: border-box;
    &_title {
      margin-bottom: 22px;
      font-size: 24px;
      color: #333333;
      font-weight: 400;
    }
    &_intro {
      margin-bottom: 38px;
      font-size: 24px;
      color: #333333;
      text-align: justify;
      font-weight: 400;
    }
    &_link {
      width: 80px;
      height: 36px;
      background: #2278FF;
      border-radius: 4px;
    }
  }
  &_right {
    position: absolute;
    top: 0;
    right: -44px;
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 380px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
a {
  color: #fff;
  text-decoration: none;
}
.n-tabs {
  margin-top: 0;
}
:deep(.n-tabs-tab-pad) {
  width: 0;
}
:deep(.n-tabs-tab) {
  width: 150px;
  display: flex;
  justify-content: center;
  font-size: 28px;
}
:deep(.n-tabs-tab--active) {
  color: #2290FF !important;
  background-image: url('/img/home/program_selected_2x.png');
  background-size: 100% 100%;
}
:deep(.n-tabs-bar) {
  display: none;
}
:deep(.n-tab-pane) {
  padding: 0;
  height: 380px;
  background: #F7F7F7;
  border: 1px solid rgba(216,216,216,1);
  border-radius: 0px 10px 10px 10px;
  box-sizing: border-box;
}
:deep(.n-tabs-tab:hover) {
  color: #2290ff !important;
}
:deep(.n-button) {
  font-size: 16px;
  width: 100px;
  height: 40px;
}
</style>
