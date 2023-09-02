/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">XOA数字化办公</span>
        <span class="demo_body_left_subtitle">新一代OA数字化办公生产力工具</span>
        <div class="demo_body_left_items">
          <n-popover trigger="hover" arrow-point-to-center placement="right">
            <template #trigger>
              <div class="demo_download">
                <img src="/img/demo/download/android.png"/>
                <span>Android 移动端</span>
              </div>
            </template>
            <template #default>
              <div class="demo_download demo_download_cov">
                <div class="demo_download_code">
                  <img src="/img/logo_googn.jpg"/>
                  <span>扫码下载</span>
                </div>
              </div>
            </template>
          </n-popover>
          <n-popover trigger="hover" arrow-point-to-center placement="right">
            <template #trigger>
              <div class="demo_download">
                <img src="/img/demo/download/iphone.png"/>
                <span>IOS 移动端</span>
              </div>
            </template>
            <template #default>
              <div class="demo_download demo_download_cov">
                <div class="demo_download_code">
                  <img src="/img/logo_googn.jpg"/>
                  <span>扫码下载</span>
                </div>
              </div>
            </template>
          </n-popover>
          <n-popover trigger="hover" arrow-point-to-center placement="right">
            <template #trigger>
              <div class="demo_download">
                <img src="/img/demo/download/wxmini.png"/>
                <span>微信小程序</span>
              </div>
            </template>
            <template #default>
              <div class="demo_download demo_download_cov">
                <div class="demo_download_code">
                  <img src="/img/logo_googn.jpg"/>
                  <span>扫码体验</span>
                </div>
              </div>
            </template>
          </n-popover>
          <a href="http://oort.oortcloudsmart.com:31310/oort/oortcloud-policefront/console_manage/index.html#/" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/xoa/xoa_zm.png"/>
              <span>桌面端</span>
            </div>
          </a>
          <a href="" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/xoa/xoa_ql.png"/>
              <span>银河麒麟</span>
            </div>
          </a>
          <a href="" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/xoa/xoa_uos.png"/>
              <span>统信UOS</span>
            </div>
          </a>
        </div>
        <div class="demo_body_pdf">
          <div class="demo_body_pdf_item" @click="showModal=true">
            <img src="/img/demo/sp.png"/>
            <span>观看视频</span>
            <n-icon  :component="IosArrowForward" />
          </div>
          <a href="http://oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0" target="_blank">
            <div class="demo_body_pdf_item">
              <img src="/img/demo/pdf_download.png"/>
              <span>资料下载</span>
              <n-icon  :component="IosArrowForward" />
            </div>
          </a>
        </div>
      </div>
      <div class="demo_body_right">
        <img src="/img/demo/xoa/xoa_right.png"/>
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_title">基础功能</div>
      <div class="demo_bottom_group">
        <div>
          <img src="/img/demo/xoa/xoa_d1.png"/>
          <span>统一通讯</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d2.png"/>
          <span>电子邮箱</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d3.png"/>
          <span>公告通知</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d4.png"/>
          <span>考勤打卡</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d5.png"/>
          <span>行政办公</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d6.png"/>
          <span>任务协同</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d7.png"/>
          <span>数据安全</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d8.png"/>
          <span>零成本运维</span>
        </div>
      </div>
    </div>
    <n-modal v-model:show="showModal" title="观看视频" preset="dialog" :showIcon="false" style="width: 924px">
      <iframe height=486 width=864 allowfullscreen :src="videoUrl" frameborder="0">
      </iframe>
    </n-modal>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "demo",
  title: "XOA数字化办公",
  subTitle: "演示环境",
  logo: "/img/demo/xoa/xoa_logo.png"
})

useSeoMeta({
  title: 'XOA数字化办公',
  ogTitle: 'XOA数字化办公-演示环境',
  description: '新一代OA数字化办公生产力工具',
  ogDescription: '新一代OA数字化办公生产力工具',
  ogImage: '/img/demo/xoa/xoa_logo.png',
})

import {  IosArrowForward } from '@vicons/ionicons4'
import { NPopover, NIcon, NModal } from 'naive-ui'

const showModal = ref(false)
const videoUrl = ref('https://v.qq.com/txp/iframe/player.html?vid=h3155cunx94')


</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  min-height: 1080px;
  background-image: url("/img/demo/xoa/xoa_bg.png");
  background-size: 100% 100%;
}

.demo_body {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
  min-height: 650px;
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
      flex-wrap: wrap;
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
      width: 160px;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-size: 100% 100%;
      img {
        width: 120px;
        height: 120px;
      }
      span {
        font-size: 20px;
        color: #1B396C;
        letter-spacing: 0;
        font-weight: 400;
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
  background: #FBFBFB;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 105px;
    height: 105px;
    margin: 10px 0px;
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
