/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">指挥调度一张图</span>
        <span class="demo_body_left_subtitle">指挥调度，警情、警力、现场、调度、过程可视</span>
        <div class="demo_body_left_items">
          <a href="http://oort.oortcloudsmart.com:18080/onemap/main.jsp" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/onemap/onemap_jwb.png" />
              <span>警务宝演示环境</span>
            </div>
          </a>
          <a href="http://fs.oort.oortcloudsmart.com:30302/one-map/main.jsp" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/onemap/onemap_hw.png" />
              <span>华为A8展厅演示环境</span>
            </div>
          </a>
        </div>
        <div class="demo_body_pdf">
          <div class="demo_body_pdf_item" @click="showModal=true">
            <img src="/img/demo/sp.png" />
            <span>观看视频</span>
            <n-icon :component="IosArrowForward" />
          </div>
          <a href="http://oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0" target="_blank">
            <div class="demo_body_pdf_item">
              <img src="/img/demo/pdf_download.png" />
              <span>资料下载</span>
              <n-icon :component="IosArrowForward" />
            </div>
          </a>
        </div>
      </div>
      <div class="demo_body_right" />
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_tt">
        <span class="demo_bottom_tt_title">功能说明</span>
        <div class="demo_bottom_tt_body">
          <span>融合指挥融合各大通信系统、请休假、签到、勤务等系统，将系统的各种功能都在公安网内地图上应用，实现“一张图”展示，一键通话，一键视频，一键组队，是真正的“看得见、呼得通”的扁平化指挥调度。</span>
        </div>
      </div>
      <div class="demo_bottom_tt">
        <span class="demo_bottom_tt_title">独特优势</span>
        <div class="demo_bottom_group">
          <div>
            <span>自研地图引擎，解决海量上图要素显示效率问题</span>
          </div>
          <div>
            <span>自研内网定位坐标系转换服务，实现坐标与PGIS同步，图层与互联网地图服务体验同步</span>
          </div>
          <div>
            <span>自研28181视频平台，解决海量视频设备接入的问题</span>
          </div>
          <div>
            <span>有大量大规模使用的成功经验</span>
          </div>
        </div>
      </div>
    </div>
    <n-modal v-model:show="showModal" title="观看视频" preset="dialog" :show-icon="false" style="width: 924px">
      <iframe height="486" width="864" allowfullscreen :src="videoUrl" frameborder="0" />
    </n-modal>
  </div>
</template>

<script setup lang="ts">

import { IosArrowForward } from '@vicons/ionicons4'
import { NIcon, NModal } from 'naive-ui'

definePageMeta({
  layout: 'demo',
  title: '指挥调度一张图',
  subTitle: '演示环境',
  logo: '/img/demo/onemap/onemap_logo.png'
})

useSeoMeta({
  title: '指挥调度一张图',
  ogTitle: '指挥调度一张图-演示环境',
  description: '指挥调度，警情、警力、现场、调度、过程可视。融合指挥融合各大通信系统、请休假、签到、勤务等系统，将系统的各种功能都在公安网内地图上应用，实现“一张图”展示，一键通话，一键视频，一键组队，是真正的“看得见、呼得通”的扁平化指挥调度',
  ogDescription: '指挥调度，警情、警力、现场、调度、过程可视。融合指挥融合各大通信系统、请休假、签到、勤务等系统，将系统的各种功能都在公安网内地图上应用，实现“一张图”展示，一键通话，一键视频，一键组队，是真正的“看得见、呼得通”的扁平化指挥调度',
  ogImage: '/img/demo/onemap/onemap_logo.png'
})

const showModal = ref(false)
const videoUrl = ref('https://player.youku.com/embed/XNTExNzc3Mzg2NA==')

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  min-height: 1080px;
  background-image: url("/img/demo/onemap/onemap_bg.png");
  background-size: 100% 100%;
}

.demo_body {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
  height: 660px;
  &_left {
    width: 720px;
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
      flex-direction: column;
      gap: 8px;
    }
  }
  &_right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 16px;
      color: #1B396C;
      letter-spacing: 0;
      line-height: 24px;
      font-weight: 400;
    }
  }
}

.demo_bottom {
  display: flex;
  margin: 40px auto;
  width: 80%;
  flex-direction: row;
  &_tt {
    width: 50%;
    display: flex;
    flex-direction: column;
    &_title {
      font-size: 28px;
      color: #1B396C;
      letter-spacing: 0;
      font-weight: 700;
      height: 60px;
    }
    &_body {
      width: 609px;
      height: 114px;
      padding: 35px 20px;
      background: #2856A5;
      border: 1px solid rgba(52,126,255,0.5);
      span {
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
  &_group {
    flex:1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    div {
      background: #2856A5;
      border: 1px solid rgba(52,126,255,0.5);
      width: 364px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-size: 100% 100%;
      span {
        width: 88%;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
}

.demo_download  {
  width: 371px;
  height: 80px;
  display: flex;
  flex-direction: row;
  border-radius: 2px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  background: #F00000;
  margin: 12px 0px;
  img {
    width: 40px;
    height: 40px;
    margin: 0px 5px 0 26px;
  }
  span {
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 700;
  }
}

.demo_download_cov {
  width: 300px;
  height: 300px;
}

.demo_body_pdf {
  height: 40px;
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

</style>
