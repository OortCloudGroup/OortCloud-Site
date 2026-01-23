/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">即时通信</span>
        <span class="demo_body_left_subtitle">私有化部署的内网“微信”</span>
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
                  <img src="/img/demo/download/wxmini.png" />
                  <span>微信小程序</span>
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
        </div>
        <div class="demo_body_pdf">
          <div class="demo_body_pdf_item" @click="showModal=true">
            <img src="/img/demo/sp.png" />
            <span>观看视频</span>
            <n-icon :component="IosArrowForward" />
          </div>
          <a href="http://prod.oort.oortcloudsmart.com:32610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0" target="_blank">
            <div class="demo_body_pdf_item">
              <img src="/img/demo/pdf_download.png" />
              <span>资料下载</span>
              <n-icon :component="IosArrowForward" />
            </div>
          </a>
        </div>
      </div>
      <div class="demo_body_right">
        <img src="/img/demo/im/im_right.png" />
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_title">
        基本介绍
      </div>
      <div class="demo_bottom_subtitle">
        涵盖即时消息、电子邮件、音视频会议、资料分享、流程申请与审批、网络社交、疫情防控、健康管理等服务功能，打通企业工作编辑，助力工作效率，让工作更美好
      </div>
      <div class="demo_bottom_group">
        <div><span>全面适配 形态多样</span></div>
        <div><span>云交付 自主可控</span></div>
        <div><span>功能丰富 多端同步</span></div>
        <div><span>安全设计 隐私保护</span></div>
        <div><span>扩展能力强 广泛适用</span></div>
        <div><span>畅享 安全通讯</span></div>
        <div><span>即时通讯</span></div>
        <div><span>多端协同办公</span></div>
        <div><span>语音视频会议</span></div>
        <div><span>短视频</span></div>
        <div><span>云课堂</span></div>
      </div>
    </div>
    <n-modal v-model:show="showModal" title="观看视频" preset="dialog" :show-icon="false" style="width: 924px">
      <iframe height="486" width="864" allowfullscreen :src="videoUrl" frameborder="0" />
    </n-modal>
  </div>
</template>

<script setup lang="ts">

import { IosArrowForward } from '@vicons/ionicons4'
import { NPopover, NIcon, NModal } from 'naive-ui'

definePageMeta({
  layout: 'demo',
  title: '即时通信',
  subTitle: '演示环境',
  logo: '/img/demo/im/im_logo.png'
})

useSeoMeta({
  title: '即时通信',
  ogTitle: '即时通信-演示环境',
  description: '私有化部署的内网“微信”',
  ogDescription: '私有化部署的内网“微信”',
  ogImage: '/img/demo/im/im_logo.png'
})

const showModal = ref(false)
const videoUrl = ref('https://v.qq.com/txp/iframe/player.html?vid=h3155cunx94')

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  min-height: 1080px;
  background-image: url("/img/demo/im/im_bg.png");
  background-size: 100% 100%;
}

.demo_body {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
  height: 650px;
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
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
}

.demo_bottom {
  display: flex;
  margin: 40px auto;
  width: 80%;
  flex-direction: column;
  &_title {
    font-size: 28px;
    color: #1B396C;
    letter-spacing: 0;
    font-weight: 700;
  }
  &_subtitle {
    font-size: 20px;
    color: #717781;
    letter-spacing: 0;
    line-height: 30px;
    font-weight: 500;
    width: 33%;
    margin: 10px 0px;
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
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: #fbfbfb;;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 105px;
    height: 105px;
    margin: 20px 0px 0px 0px;
  }
  span {
    font-size: 10px;
    color: #7789A8;
    letter-spacing: 0;
    font-weight: 400;
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

</style>
