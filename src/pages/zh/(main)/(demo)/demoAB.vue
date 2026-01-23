
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">智慧安保</span>
        <span class="demo_body_left_subtitle">包括AI智眼、指挥调度、安保行业应用等三个版本</span>
        <div class="demo_body_left_items">
          <client-only>
            <n-popover trigger="hover" arrow-point-to-center placement="right">
              <template #trigger>
                <div class="demo_download">
                  <img src="/img/demo/download/android.png" />
                  <span>Android 移动端</span>
                </div>
              </template>
              <template #default>
                <div class="demo_download demo_download_cov">
                  <div class="demo_download_code">
                    <img src="/img/logo_googn.jpg" />
                    <span>扫码下载</span>
                  </div>
                </div>
              </template>
            </n-popover>
          </client-only>
          <client-only>
            <n-popover trigger="hover" arrow-point-to-center placement="right">
              <template #trigger>
                <div class="demo_download">
                  <img src="/img/demo/download/iphone.png" />
                  <span>IOS 移动端</span>
                </div>
              </template>
              <template #default>
                <div class="demo_download demo_download_cov">
                  <div class="demo_download_code">
                    <img src="/img/logo_googn.jpg" />
                    <span>扫码体验</span>
                  </div>
                </div>
              </template>
            </n-popover>
          </client-only>
          <client-only>
            <div class="demo_download" @click="goDetail">
              <img src="/img/demo/download/glht.png" />
              <span>PC管理后台</span>
            </div>
          </client-only>
        </div>
        <div class="demo_body_pdf">
          <!-- <a href="http://prod.oort.oortcloudsmart.com:32610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0" target="_blank">
            <div class="demo_body_pdf_item">
              <img src="/img/demo/pdf_download.png" />
              <span>资料下载</span>
              <n-icon :component="IosArrowForward" />
            </div>
          </a> -->
          <div class="demo_body_pdf_item">
            <img src="/img/demo/pdf_download.png" />
            <span>资料下载</span>
            <n-icon :component="IosArrowForward" />
          </div>
        </div>
      </div>
      <div class="demo_body_right">
        <img src="/img/demo/im/img_ab.png" />
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_jbjs">
        <div class="demo_bottom_title size">
          基本介绍
        </div>
        <div class="demo_bottom_subtitle line_height">
          智慧安保是助力智慧城市与平安中国建设的多终端（Android/iOS/PC）数字化方案，通过智能巡查、闭环事件处理、AI 智眼主动安全事件闭环、指挥调度、数据化考核五大模块，以技术重构安保全流程，实现巡查提效、应急升级、监测扩面、协同优化与团队精管，让安保工作更智能高效。
        </div>
      </div>
      <div class="demo_bottom_jbjs">
        <div class="demo_bottom_title size" style="color: #027AFF;">
          系统优势
        </div>
        <div class="demo_bottom_subtitle line_height" style="color: #027AFF;">
          AI 智眼无人值守，减轻保安员工作量。AI主动安全触发事件后可根据自定义流程通知相关工作人员处理。通知方式优先级从高到低包括电话通知、视频通知、熄屏亮屏通知、顶部消息栏通知、短信、邮件等通知。AI事件算法可自定义训练。
        </div>
      </div>
      <div class="demo_bottom_box">
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ai.png" alt="" />
          <div class="demo_bottom_title">
            AI主动安全事件闭环流程处理
          </div>
          <div class="demo_bottom_subtitle">
            智能化核心模块，依托 AI 摄像机主动监测场景异常，识别后自动上报并派发处置任务，全程记录事件轨迹，适配大面积区域，助力应急救援等场景，助力提升安防全面性与精准性
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/zhdd.png" alt="" />
          <div class="demo_bottom_title">
            指挥调度
          </div>
          <div class="demo_bottom_subtitle">
            构建 “一屏统览” 指挥模式：可在同一界面查看人员、车辆、摄像机等设备实时位置，支持消息发送、音视频调度人员，同时能查看轨迹、实时调取监控视频，助力优化处置流程、提升应急能力
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/xcpc.png" alt="" />
          <div class="demo_bottom_title">
            巡查拍传事件闭环处理
          </div>
          <div class="demo_bottom_subtitle">
            核心基础模块，实现巡查全周期管控。支持自定义巡查方案（路线、点位、巡查结果），巡查人员通过终端接收任务、上传现场数据及异常上报；系统记录轨迹、预警漏巡/迟巡等违规情况，生成统计报表，提升巡查规范性与实效性
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/zdjr.png" alt="" />
          <div class="demo_bottom_title">
            支持多种终端接入
          </div>
          <div class="demo_bottom_subtitle">
            终端覆盖移动端、PC 端、执法记录仪、电子工牌、电子车牌、车载等终端，可同步对接信息（如定位、状态、告警），实现前后端数据互通与协同指挥，助力安保人员高效作业，提升团队协作效率
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/yysp.png" alt="" />
          <div class="demo_bottom_title">
            行业化应用适配
          </div>
          <div class="demo_bottom_subtitle">
            行业化适配覆盖园区、金融、医院、校园、景区、交通枢纽等场景的专属安防应用，按需匹配人员管控、风险预警、应急联动等功能，助力各场景高效安防
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { IosArrowForward } from '@vicons/ionicons4'
import { NPopover, NIcon } from 'naive-ui'

definePageMeta({
  layout: 'demo',
  title: '智慧安保',
  subTitle: '演示环境',
  logo: '/img/demo/menu/ab.png'
})

const goDetail = () => {
  window.open('http://oort.oortcloudsmart.com:21410/bus/apaas-web/JZControlPlat/index.html', '_blank')
}

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 60px;
  // min-height: 1080px;
  background-image: url("/img/demo/im/ab_bg.png");
  background-size: 100% 100%;
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
    display: flex;
    justify-content: flex-end;
    img {
      width: 820px;
      height: 468px;
    }
  }
}

.demo_bottom {
  margin: 20px auto;
  margin-bottom: 0;
  width: 85%;
  &_jbjs {
    width: 60%;
    margin-bottom: 40px;
  }
  &_box {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
  }
  &_item {
    box-sizing: border-box;
    width: 295px;
    height: 350px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 16px;
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
      background-image: url("/img/demo/im/im_div_bg.png");
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
</style>
