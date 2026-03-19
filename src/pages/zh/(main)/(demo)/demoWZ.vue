<template>
  <div class="page_container">
    <div class="demo_box">
      <div class="demo_body">
        <div class="demo_body_left">
          <span class="demo_body_left_title">智慧武装</span>
          <span class="demo_body_left_subtitle">聚焦传统武装工作信息化痛点，以 AI、AR、物联网为核心驱动，重构基层武装八项核心工作流程，搭建标准化数据体系，实现 “一网、一链、一库、一图”，精准掌握辖区战略实况，提升武装工作正规化水平与国防动员能力。</span>
          <div class="demo_body_pdf">
            <div class="demo_body_pdf_item" @click="downloadPDF">
              <img src="/img/demo/pdf_download.png" />
              <span>资料下载</span>
              <n-icon :component="IosArrowForward" />
            </div>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="middle_left">
          <img src="/img/demo/im/wz_img.png" alt="" />
        </div>
        <div class="middle_right">
          <div class="right1">
            <img src="/img/demo/download/wz_icon1.png" alt="" class="icon" />
            <div class="fontSize">
              全面提升基层武装建设现代化水平，让基层力量成为国防巩固的坚实支撑
            </div>
          </div>
          <div class="right2">
            <img src="/img/demo/download/wz_icon2.png" alt="" class="icon" />
            <div class="fontSize">
              特色党建、网格数据智慧国防动员、靶向精准征兵、民兵管理、双拥共建等重点基础工作，真正做到了武装工作问题导向，目标导向，工作落实量化直观，效果运用实用管用
            </div>
          </div>
          <div class="right3">
            <div class="right3_1">
              <img src="/img/demo/download/wz_icon3.png" alt="" class="icon" />
              <div class="fontSize">
                军地一张网、数据一条链、资源一个库、态势一幅图
              </div>
            </div>
            <div class="right3_2">
              <img src="/img/demo/download/wz_icon4.png" alt="" class="icon" />
              <div class="fontSize">
                实现对突发事件及时发现、快速反应、及时处置
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-switch">
      <div class="tab-item" :class="{active: activeTab === 'item1'}" @click="goToTab('item1')">
        智慧武装系统
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item2'}" @click="goToTab('item2')">
        AI自助机
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item3'}" @click="goToTab('item3')">
        AI宣传员
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item4'}" @click="goToTab('item4')">
        AI报靶器
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item5'}" @click="goToTab('item5')">
        AI库管员
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item6'}" @click="goToTab('item6')">
        视频智慧调度
      </div>
      <div class="tab-item" :class="{active: activeTab === 'item7'}" @click="goToTab('item7')">
        安全服务一体机
      </div>
    </div>
    <!-- 关键修改：给每个item增加唯一的id，方便后续通过id获取DOM -->
    <div v-if="activeTab === 'item1'" id="tab-item1" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            面向武装工作管理与指挥的综合性可视化平台，它以 “一屏统揽、全域感知、高效协同” 为核心设计理念，将武装工作的组织架构、业务流程、动态数据与地理信息深度融合，为武装部门提供从日常管理到应急指挥的全场景数字化支撑。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/wz_img1.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item2'" id="tab-item2" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            自助服务机具有高效率、24小时服务、AI语音识别和自动寻边等特点，能够快速满足用户打印需求，提供全天候服务，通过语音输入简化操作，并自动匹配打印边界，确保打印准确、操作简便。
          </div>
        </div>
      </div>
      <div class="right">
        <video
          src="/documents/zzj.mp4"
          controls
          playsinline
          autoplay
          class="videos"
        >
          你的浏览器不支持 HTML5 视频播放，请升级浏览器
        </video>
      </div>
    </div>
    <div v-if="activeTab === 'item3'" id="tab-item3" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            虚拟人终端 + 数字员工，打造智能对外服务窗口！<br />
            轻松承接指引接待、政策咨询等工作，更有专属后台支持知识库实时更新，让服务响应更精准、更高效。
          </div>
        </div>
      </div>
      <div class="right">
        <video
          src="/documents/xcy.mp4"
          controls
          playsinline
          autoplay
          class="videos"
        >
          你的浏览器不支持 HTML5 视频播放，请升级浏览器
        </video>
      </div>
    </div>
    <div v-if="activeTab === 'item4'" id="tab-item4" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            AI射击报靶器采用光代弹原理，模拟92、95型枪械后坐力，是实弹打靶的有效补充。系统架构稳定，对场地无特殊要求，支持多种射击姿势和报靶方式，满足训练需求。<br />
            在此基础上，系统集成了AI摄像机智能识别技术，能够对靶面进行精准环数识别。AI摄像机通过捕捉激光打靶的光点位置，自动计算环数，并将结果与弹孔密集度等其他数据相结合，进行综合分析。AI摄像头的引入，进一步提高了打靶环数统计的准确性和效率，帮助射手更加直观地了解训练效果，实现更精细化的射击训练。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/wz_img4.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item5'" id="tab-item5" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            配合无人值守物资仓库建设，打造器材出入库操作终端，实现仓库无人值守管理；物料无需传统打标编码，只需放置识别区，摄像机即可对物料实物进行多张抓拍并实时识别，自动完成出入库流程，全程无需人工值守。
          </div>
        </div>
      </div>
      <div class="right">
        <video
          src="/documents/kgy.mp4"
          controls
          playsinline
          autoplay
          class="videos"
        >
          你的浏览器不支持 HTML5 视频播放，请升级浏览器
        </video>
      </div>
    </div>
    <div v-if="activeTab === 'item6'" id="tab-item6" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            深度适配全系列会议终端，无需复杂配置，极简操作即可快速启动高清视频通信。无论是会议室固定终端、桌面办公终端，还是移动便携终端，均能实现无缝对接，轻松打破设备壁垒。操作层面简化至核心步骤，一键发起呼叫、一键加入会议，无需专业技术人员值守，普通员工也能快速上手，大幅降低使用门槛。通信质量上，依托先进的智能调度算法，自动优化网络带宽分配，保障1080P全高清视频画面稳定流畅，搭配高清音频采集与降噪技术，还原面对面沟通的真实体验。适用于企业跨地域协作、远程项目研讨、应急指挥调度等多元场景，为高效远程沟通提供坚实保障。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/wz_img6.png" alt="" />
      </div>
    </div>
    <div v-if="activeTab === 'item7'" id="tab-item7" class="item">
      <div class="left">
        <div class="left_top">
          <div class="point" />
          <div class="demo_bottom_subtitle size24">
            采用物理隔离部署模式保障系统安全，集高性能服务器功能与专业防火墙功能于一体。可满足业务数据处理、应用运行需求，同时具备入侵检测、访问控制、异常流量拦截等防护能力，一机实现安全与效率兼顾，适配政企、涉密机构等高安全需求场景。
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/img/demo/download/wz_img7.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { IosArrowForward } from '@vicons/ionicons4'
import { NIcon } from 'naive-ui'

definePageMeta({
  layout: 'demo',
  title: '智慧武装',
  subTitle: '演示环境',
  logo: '/img/demo/menu/wz.png'
})

const activeTab = ref('item1')
const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/智慧武装.pdf'
  link.download = '智慧武装.pdf'
  link.click()
}

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
}
.demo_box{
  background-image: url("/img/demo/im/ga_bg.png");
  background-size: 100% 100%;
  padding-bottom: 100px;
}
.demo_body {
  margin: 0 auto;
  width: 85%;
  flex-direction: row;
  padding-top: 63px;
  height: 350px;
  &_left {
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
      color: #717781;
      line-height: 42px;
      letter-spacing: 0;
      font-weight: 400;
      margin:10px 0;
    }
    &_items {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
  &_right {
    flex: 1;
    position: relative;
    .img1 {
      position: absolute;
      width: 600px;
      height: 450px;
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
    margin: 10px 0;
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
  line-height: 36px;
}

.tab-switch {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 120px 0 120px;
  border-bottom: 1px solid #dcdddf;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
}

.tab-item {
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  color: #666666;
  // margin-right: 110px;
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
  justify-content: space-between;
  .left{
    width: 680px;
    padding-top: 130px;
    .left_top{
      display: flex;
      .point{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #4480FF;
        flex-shrink: 0;
        margin-top: 24px;
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
    padding-top: 110px;
    img{
      width: 684px;
      height: 460px;
    }
    .videos{
      width: 684px;
      height: 460px;
      border-radius: 10px;
    }
  }
}
.middle{
  width: 85%;
  margin: 0 auto;
  height: 535px;
  display: flex;
  justify-content: space-between;
  .middle_left{
    img{
      width: 900px;
      height: 535px;
    }
  }
  .middle_right{
    width: 640px;
    .right1, .right2{
      box-sizing: border-box;
      padding: 20px 12px;
      background-color: #fff;
      border-radius: 10px;
    }
    .icon{
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
    }
    .fontSize{
      font-size: 18px;
      font-weight: normal;
      line-height: 24px;
      color: #717781;
    }
    .right1{
      height: 140px;
    }
    .right2{
      margin: 20px 0;
      height: 190px;
    }
    .right3{
      height: 165px;
      display: flex;
      justify-content: space-between;
      .right3_1, .right3_2{
        width: 300px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 20px 12px;
        border-radius: 10px;
      }
    }
  }
}
</style>
