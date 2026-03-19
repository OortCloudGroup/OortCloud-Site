
<template>
  <div class="page_container">
    <div class="demo_box">
      <div class="demo_body">
        <div class="demo_body_left">
          <span class="demo_body_left_title">智慧公安</span>
          <span class="demo_body_left_subtitle">智慧无限，警务常新</span>
          <div class="demo_body_left_items">
            <client-only>
              <div class="demo_download" @click="goDetail">
                <img src="/img/demo/download/glht.png" />
                <span>三网演示环境</span>
              </div>
            </client-only>
          </div>
          <div class="demo_body_pdf">
            <!-- <a href="http://oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0" target="_blank">
            <div class="demo_body_pdf_item">
              <img src="/img/demo/pdf_download.png" />
              <span>资料下载</span>
              <n-icon :component="IosArrowForward" />
            </div>
          </a> -->
            <div class="demo_body_pdf_item" @click="downloadPDF">
              <img src="/img/demo/pdf_download.png" />
              <span>资料下载</span>
              <n-icon :component="IosArrowForward" />
            </div>
          </div>
        </div>
        <div class="demo_body_right">
          <img src="/img/demo/im/ga_img.png" class="img1" />
        </div>
      </div>
      <div class="demo_bottom">
        <div class="demo_bottom_jbjs">
          <div class="demo_bottom_title size">
            基本介绍
          </div>
          <div class="demo_bottom_subtitle line_height">
            智慧公安围绕全域智能安防与实战效能提升，通过情指行平台五级联动、无人机高空赋能、立体化治安防控、移动警务线上闭环、融合通信与 AI 支撑、视频门禁重点巡查等系统协同，全面推动公安工作智能化发展。
          </div>
        </div>
      </div>
    </div>
    <div class="tab-switch">
      <div class="tab-item" :class="{active: activeTab === 'item1'}" @click="goToTab('item1')">
        移动警务
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item2'}" @click="goToTab('item2')">
        情指行平台
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item3'}" @click="goToTab('item3')">
        警用无人机管理平台
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item4'}" @click="goToTab('item4')">
        治安防控体系
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item5'}" @click="goToTab('item5')">
        警务协同
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item6'}" @click="goToTab('item6')">
        融合通信
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item7'}" @click="goToTab('item7')">
        场景化实战智能体
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item8'}" @click="goToTab('item8')">
        视频门禁视频巡查
      </div>
    </div>
    <div v-if="activeTab === 'item1'" id="tab-item1" class="item h700" style="align-items: center;">
      <div class="left">
        <div class="left_top" style="display: block;">
          <div class="terminal">
            <img class="terminalImg" src="@/assets/software/mobilePoliceC1.png" alt="" />
            <div class="terminalT">
              移动警务应用介绍
            </div>
            <div class="terminalD">
              主要包括首页(手机端信息门户和应用市场)、警务微信、通信录、问吧、云课堂、首长点评、动态圈、移动办公审批、督办、新闻推送、社区警务、民生警务、智慧视频、云上警政、治安采集等机关应用与基层民警实战实用。
            </div>
            <div class="seeMore" @click="goMore">
              查看更多 <img src="/img/demo/download/seeMore.png" alt="" />
            </div>
          </div>
          <div class="terminal cloud">
            <img class="terminalImg" src="@/assets/software/mobilePoliceC2.png" alt="" />
            <div class="terminalT">
              新一代移动警务应用支撑平台介绍
            </div>
            <div class="terminalD">
              新一代移动警务应用支撑平台是建立在基础云(laaS/laaS+/iPaaS)之上的，进一步为各业务系统建设统一的移动应用软件开发管理中心平台。遵循统一规划、统一标准、统一管理、统一门户、统一监控、统一运营六个统一。为业务应用与业务微服务的建设提供开发与治理支撑,进行统一管控，避免重复建设,达到集约、节约的目的。主要包括功能：服务总线、统一门户(应用市场)、服务化能力开发框架、基础服务中心、业务服务集成、后端管控平台等能力。
            </div>
            <NuxtLink to="/zh/siteNew/policeBus" target="blank">
              <div class="seeMore">
                查看更多 <img src="/img/demo/download/seeMore.png" alt="" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img1.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item2'" id="tab-item2" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            建设情指行一体化实战平台，深化推进情指勤舆一体化实战化运行机制改革，提升合成作战水平，建设新型警务运行模式，进一步提升警务运行质效和实战能力。《公安信息化建设“十四五”规划（2021-2025年）情指勤舆一体化实战平台建设任务书》建设情指行一体化实战平台，构建部、省、市三级情报指挥平台，打造部、省、市、县、所“纵向贯通、横向关联”的五级联动应用建设，深化推进“情指勤舆”一体化实战化运行机制改革，突出服务实战导向，提升合成作战水平，完善实战运转模式，着力打造形成“风险防控全面精准、决策指挥高效顺畅、警务数据融合共享、警种优势合成作战、网上网下同步应对”的新型警务运行模式，进一步提升警务运行质效和实战能力。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img2.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item3'" id="tab-item3" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            <span style="font-weight: 700;">管、战、用、督</span>
            <br />
            凭借机动、灵活以及高空视角的优势，警用无人机在日常巡逻勤务、警卫安保、侦查破案过程中扮演着“空中奇兵”的角色，对其设备及任务管控承担着至关重要的作用。高空治安巡逻：巡查指定区域，进行实时视频传输，特别是针对区域监控死角、盲区等。大型活动安保：对大型活动现场进行监管，可以通过搭载设备进行安保任务及人群疏散工作。应急处突防爆：应对突发安全类事件进行辅助处理，比如空中侦察、取证和空地联合抓捕。交通管理：应对交通类案件进行辅助执法取证和重点部位的交通巡视。无人机反制：对民用无人机违规飞行等行为进行空中干预和追捕。相关应用和管理单位：警保、特巡警（警航）、视频侦察等
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img3.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item4'" id="tab-item4" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            根据《全国公安机关社会治安防控体系建设指南》、《全国公安机关社会治安防控体系行动计划》、《社会治安防控体系实战业务应用系统技术规范》和《社会治安防控体系建设示范城市评测办法（征求意见稿）》等文件的建设要求，结合公安局工作实际，坚持科技引领、创新驱动，进一步完善应用支撑体系，提升基础设施对治安防控应用的支撑能力，填补治安防控应用空白，解决治安防控应用烟囱式发展问题，将社会治安防控体系建设提档升级，建设立体化信息化的社会治安防控系统，实现预警防范智能化、打击处置精准化、警务工作合成化、管理服务人性化的目标，推动公安工作跨越式发展，力争进入全国示范城市序列。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img4.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item5'" id="tab-item5" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            警务协同系统是以警情、案件为核心,运用 警务通 或 公安网PC端 快速组建各类协同任务群组,实现 案件协同、警情协同、指挥协同、应急协同 等警务协同工作。<br />
            警务协同系统把随机化、碎片化的警情、案件任务转化复刻到线上,并优化工作机制绑定成为硬性任务,大幅提升工作质效。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img5.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item6'" id="tab-item6" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            融合通信平台是面向现代警务打造的一体化技术支撑底座，它通过终端融合实现各类警务设备统一安全接入与通信，通过网络融合打破多类网络壁垒、实现资源互通，通过通信融合将语音、视频、数据等能力封装为基础服务总线，再通过分层解耦的能力共享机制向各业务系统开放通信、定位等能力，最终将通信与装备能力深度融入指挥调度、侦查办案等全业务场景，为现代移动警务提供强力科技支撑，全面提升警务工作的实战效能与智能化水平。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img6.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item7'" id="tab-item7" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            可面对面，表情生动的回答用户用户问题，辅助业务办理。利用人工智能代替人工打电话，解决政务重复性问询、宣贯、回访等工作。利用人工智能替代人工接听电话，解决各类咨询问题。利用人工智能回复各类文本信息，可接入公众号、app等。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img7.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item8'" id="tab-item8" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            公共安全一直是全社会关注的敏感焦点，每发生一起事件，均会引起大范围的重大影响。公共安全体系经过多年建设已经取得巨大进步，但仍然频频出现安全问题，亟需创新手段进行预防预警。重点部位包括学校、加油站、医院等地点。采用N+1+1+1的总体框架， N个报警监控设施、1个安保平台、1个安保APP/小程序、1项运营服务。如学校门卫值班室应设置一键式紧急报警装置，并与属地接警中心联网。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/ga_img8.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { IosArrowForward } from '@vicons/ionicons4'
import { NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'demo',
  title: '智慧公安',
  subTitle: '演示环境',
  logo: '/img/demo/menu/ga.png'
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/智慧公安.pdf'
  link.download = '智慧公安.pdf'
  link.click()
}

const router = useRouter()
const goDetail = () => {
  router.push({
    path: '/zh/demoIndex'
  })
}
const goMore = () => {
  window.open('https://myoumuamua.com/platformApp.html', '_blank')
}
const activeTab = ref('item1')

const goToTab = (tabKey: string) => {
  activeTab.value = tabKey

  // 2. 等待DOM渲染完成（v-if对应的节点被创建）
  nextTick(() => {
    const target = document.getElementById(`tab-${tabKey}`)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  // min-height: 1080px;
}
.demo_box{
  background-image: url("/img/demo/im/ga_bg.png");
  background-size: 100% 100%;
  padding-bottom: 30px;
}
.demo_body {
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
  height: 550px;
  &_left {
    width: 850px;
    display: flex;
    flex-direction: column;
    &_title {
      font-size: 68px;
      color: #1B396C;
      letter-spacing: 0;
      font-weight: 700;
    }
    &_subtitle {
      font-size: 28px;
      color: #1B396C;
      letter-spacing: 0;
      font-weight: 400;
      margin:16px 0;
    }
    &_items {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
  &_right {
    flex: 1;
    // display: flex;
    // justify-content: flex-end;
    position: relative;
    .img1 {
      position: absolute;
      width: 800px;
      height: 593px;
      right: 0;
      bottom: 0;
    }
    .img2 {
      position: absolute;
      width: 166px;
      height: 320px;
      right: 0;
      bottom: -20px;
    }
  }
}

.demo_bottom {
  margin: 20px auto;
  margin-bottom: 0;
  width: 85%;
  &_jbjs {
    width: 50%;
    margin-bottom: 40px;
  }
  &_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 40px;
  }
  &_item {
    box-sizing: border-box;
    width: 365px;
    height: 290px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 80px;
    margin-bottom: 50px;
    img{
      width: 100px;
      height: 100px;
      margin-bottom: 17px;
    }
  }
  &_title {
    font-size: 20px;
    color: #1B396C;
    letter-spacing: 0;
    font-weight: 700;
  }
  &_subtitle {
    font-size: 16px;
    color: #717781;
    letter-spacing: 0;
    line-height: 22px;
    font-weight: 400;
    // margin: 10px 0;
  }
  &_group {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    div {
      width: 275px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      // background-image: url("/img/demo/im/im_div_bg.png");
      background-size: 100% 100%;
      span {
        font-size: 18px;
        color: #051261;
        letter-spacing: 1px;
        text-align: center;
        font-weight: 500;
      }
    }
  }
}

.demo_download  {
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 88px;
    height: 88px;
  }
  span {
    font-size: 16px;
    color: #7789A8;
    letter-spacing: 0;
    font-weight: 400;
    margin-top: 20px;
  }
  &_qrcode {
    margin: 0px!important;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  &_code {
    display: flex;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-shadow: #999999;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 260px;
      height: 260px;
    }
    span {
      margin: 10px 0px;
      font-size: 16px;
      color: #999999;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
}

.demo_download_cov {
  width: 300px;
  height: 300px;
}

.demo_body_pdf {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &_item {
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
      margin: 0 4px;
    }
    span {
      font-size: 20px;
      color: #1B396C;
      letter-spacing: 0;
      text-align: right;
      font-weight: 400;
    }
  }
}

.line_height{
  line-height: 30px;
  font-size: 20px;
}
.size{
  font-size: 28px;
}

.size24{
  font-size: 24px;
  line-height: 46px;
}

.tab-switch {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  // margin: 0 0 50px 0;
  padding: 20px 120px 0 120px; // 调整 padding，包含上下内边距
  border-bottom: 1px solid #dcdddf;
  // 核心 sticky 定位
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff; // 防止透明导致下方内容穿透
}

.tab-item {
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  color: #666666;
  // margin-right: 63px;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
  padding-bottom: 20px;
}

.tab-item.active {
  color: #333333;
  border-bottom-color: #2278ff;
  font-weight: 700;
}
.item{
  width: 80%;
  margin: 0 auto;
  display: flex;
  height: 550px;
  padding-top: 110px;
  justify-content: space-between;
  .left{
    width: 680px;
    .left_top{
      display: flex;
      .point{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #4480FF;
        flex-shrink: 0;
        margin-top: 17px;
        margin-right: 10px;
      }
    }
    .left_bottom{
      margin-top: 50px;
      cursor: pointer;
      font-size: 20px;
      color: #3D3D3D;
      display: flex;
      align-items: center;
      img{
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
    }

  }
  .right{
    img{
      width: 684px;
      height: 460px;
    }
  }

}

.terminal {
  border-radius: 24px;
  background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
  border: 1px solid #001F5019;
  margin-bottom: 20px;
  width: 100%;
  padding: 20px;

  .terminalImg {
    width: 62px;
    height: 62px;
  }

  .terminalT {
    padding-top: 16px;
    color: #333333;
    font-weight: bold;
    font-size: 28px;
  }

  .terminalD {
    padding-top: 16px;
    color: #717781;
    font-size: 18px;
  }
}
.seeMore{
  margin-top: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: #2278FF;
  img{
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
}
.h700{
  height: 700px;
}
</style>
