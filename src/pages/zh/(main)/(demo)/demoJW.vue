
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">智慧检务</span>
        <span class="demo_body_left_subtitle">智慧检务是一体化云架构平台，含移动检务（干警移动办公办案）与阳光检务（群众监督办事）两大核心，支持多终端、离线应用，简化流程、公开透明，推动 “互联网 + 检务” 高效革新。</span>
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
        <!-- <img src="/img/demo/im/img_ab.png" /> -->
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_title size">
        移动检务平台
      </div>
      <div class="demo_bottom_box">
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydjw1.png" alt="" />
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydjw2.png" alt="" />
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydjw3.png" alt="" />
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydjw4.png" alt="" />
        </div>
      </div>
      <div class="demo_bottom_title rectangle">
        移动阅卷
      </div>
      <div class="demo_bottom_box">
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydyj1.png" alt="" class="img2" />
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydyj2.png" alt="" class="img2" />
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ydyj3.png" alt="" class="img2" />
        </div>
      </div>
      <div class="demo_bottom_title size">
        阳光检务平台
      </div>
      <div class="demo_bottom_box2">
        <div class="demo_bottom_item2">
          <img src="/img/demo/download/ygjw1.png" alt="" class="img2" />
        </div>
        <div class="demo_bottom_item2">
          <img src="/img/demo/download/ygjw2.png" alt="" class="img2" />
        </div>
        <div class="demo_bottom_item2">
          <img src="/img/demo/download/ygjw3.png" alt="" class="img2" />
        </div>
      </div>
      <div class="demo_bottom_title rectangle">
        文书送达
      </div>
      <div class="demo_bottom_box2">
        <div class="demo_bottom_item2">
          <img src="/img/demo/download/wssd1.png" alt="" class="img2" />
        </div>
        <div class="demo_bottom_item2">
          <img src="/img/demo/download/wssd2.png" alt="" class="img2" />
        </div>
        <div class="demo_bottom_item2">
          <img src="/img/demo/download/wssd3.png" alt="" class="img2" />
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
  title: '智慧检务',
  subTitle: '演示环境',
  logo: '/img/demo/menu/jcy.png'
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
}

.demo_body {
  padding: 0 143px;
  width: 85%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
  height: 550px;
  background-image: url("/img/demo/im/jw_bg.png");
  background-size: 100% 100%;
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
  margin: 30px auto;
  margin-bottom: 0;
  width: 85%;
  &_jbjs {
    width: 60%;
    margin-bottom: 40px;
  }
  &_box {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
  }
  &_box2 {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &_item2{
    img{
      height: 490px;
      width: auto;
      margin-right: 40px;
    }
  }
  &_item {
    img{
      height: 490px;
      width: auto;
    }
    .img2{
      height: 640px;
      width: auto;
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

.size{
  font-size: 28px;
}

.rectangle{
  position: relative;
  padding-left: 10px;
  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background-color: #027AFF;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
