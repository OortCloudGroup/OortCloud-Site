
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">智慧公安</span>
        <span class="demo_body_left_subtitle">构建全域智能安防体系，提升警务实战效能</span>
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
          <!-- <a href="http://oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0" target="_blank">
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
        <img src="/img/demo/im/img_ga1.png" class="img1" />
        <img src="/img/demo/im/img_ga2.png" class="img2" />
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
      <div class="demo_bottom_box">
        <div class="demo_bottom_item">
          <img src="/img/demo/download/qzxpt.png" alt="" />
          <div class="demo_bottom_title">
            情指行平台
          </div>
          <div class="demo_bottom_subtitle">
            深化 “情指勤舆” 改革，构建三级平台五级联动，打造实战警务新模式。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/wrjglpt.png" alt="" />
          <div class="demo_bottom_title">
            警用无人机管理平台
          </div>
          <div class="demo_bottom_subtitle">
            坚持 “管战用督”，以无人机赋能巡逻安保与应急处突，实现全流程、多场景、跨警种应用。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/zafktx.png" alt="" />
          <div class="demo_bottom_title">
            治安防控体系
          </div>
          <div class="demo_bottom_subtitle">
            紧扣国省市要求，坚持科技引领，破解 “烟囱” 难题，构建立体化防控体系，争创全国示范。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydjw.png" alt="" />
          <div class="demo_bottom_title">
            移动警务
          </div>
          <div class="demo_bottom_subtitle">
            以 “开放分层解耦服务” 为核，依托智慧云与专线，通过微服务架构破解孤岛，提升警务协同实战力。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/jwxt.png" alt="" />
          <div class="demo_bottom_title">
            警务协同
          </div>
          <div class="demo_bottom_subtitle">
            以警情、案件为核心，支持多终端组建协同群组，覆盖全场景警务协同。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/rhtx.png" alt="" />
          <div class="demo_bottom_title">
            融合通信
          </div>
          <div class="demo_bottom_subtitle">
            整合多通信方式，实现跨平台、警种无缝衔接，保障警务场景通信畅通，提升联动能力。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/znt.png" alt="" />
          <div class="demo_bottom_title">
            场景化实战智能体
          </div>
          <div class="demo_bottom_subtitle">
            以AI替代人工，提升警务服务效率。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/spmj.png" alt="" />
          <div class="demo_bottom_title">
            视频门禁视频巡查
          </div>
          <div class="demo_bottom_subtitle">
            聚焦公共安全预警，依托 “N+1+1+1” 框架构建立体防控体系，补强短板，提升实战能力。
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
  title: '智慧公安',
  subTitle: '演示环境',
  logo: '/img/demo/menu/ga.png'
})

const goDetail = () => {
  window.open('http://oort.oortcloudsmart.com:21410/bus/apaas-web/desktopHome/index.html', '_blank')
}

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 60px;
  // min-height: 1080px;
  background-image: url("/img/demo/im/ga_bg.png");
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
    // display: flex;
    // justify-content: flex-end;
    position: relative;
    .img1 {
      position: absolute;
      width: 560px;
      height: 505px;
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
