/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">交通微劝导系统</span>
        <span class="demo_body_left_subtitle">提升交通安全意识，落实交通宣传劝导<br />为市民群众创造一个车与车和谐、人与车和谐的道路交通环境，确保辖区交通拥有一个安全、通畅、文明、有序的道路交通环境</span>
        <div class="demo_body_left_items">
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
                  <img src="/img/demo/wqd/gh_a8e8538832c4_258.jpg" />
                  <span>扫码体验</span>
                </div>
              </div>
            </template>
          </n-popover>
          <a href="http://oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/weiquandao_manage/index.html" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/fz/pcm.png" />
              <span>PC管理后台</span>
            </div>
          </a>
        </div>
        <div class="demo_body_pdf">
          <a href="http://oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0" target="_blank">
            <div class="demo_body_pdf_item">
              <img src="/img/demo/pdf_download.png" />
              <span>资料下载</span>
              <n-icon :component="IosArrowForward" />
            </div>
          </a>
        </div>
      </div>
      <div class="demo_body_right">
        <img src="/img/demo/wqd/wqd_right.png" />
      </div>
    </div>
    <div class="demo_bottom">
      <img src="/img/demo/wqd/wqd_content.png" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { IosArrowForward } from '@vicons/ionicons4'
import { NPopover, NIcon } from 'naive-ui'

definePageMeta({
  layout: 'demo',
  title: '交通微劝导系统',
  subTitle: '演示环境',
  logo: '/img/demo/menu/wqd.png'
})

useSeoMeta({
  title: '交通微劝导系统',
  ogTitle: '交通微劝导系统-演示环境',
  description: '提升交通安全意识，落实交通宣传劝导为市民群众创造一个车与车和谐、人与车和谐的道路交通环境，确保辖区交通拥有一个安全、通畅、文明、有序的道路交通环境',
  ogDescription: '提升交通安全意识，落实交通宣传劝导为市民群众创造一个车与车和谐、人与车和谐的道路交通环境，确保辖区交通拥有一个安全、通畅、文明、有序的道路交通环境',
  ogImage: '/img/demo/menu/wqd.png'
})

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  min-height: 1080px;
  background-image: url("/img/demo/wqd/wqd_bg.png");
  background-size: 100% 100%;
}

.demo_body {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
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
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  img {
    height: 500px;
    width: auto;
  }
}

.demo_download  {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
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
