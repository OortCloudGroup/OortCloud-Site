/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">反诈中心推广统计平台</span>
        <span class="demo_body_left_subtitle">落实公安部交管局“一盔一带”行动计划，助力文明城市迎检工作</span>
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
          <a href="https://fztest.myoumuamua.com/fzmanage/#/" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/fz/pcm.png"/>
              <span>PC管理后台</span>
            </div>
          </a>
        </div>

        <div class="demo_body_pdf">
          <div class="demo_body_pdf_item">
<!--            <img src=""/>-->
<!--            <span>资料下载</span>-->
          </div>
          d调度的
        </div>
      </div>
      <div class="demo_body_right">
        <img src="/img/demo/fz/fz_right.png"/>
      </div>
    </div>
    <div class="demo_bottom">
      <img src="/img/demo/fz/fz_content.png"/>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "demo",
  title: "反诈中心推广统计平台",
  subTitle: "演示环境",
  logo: "/img/demo/menu/fz.png"
})

import { NPopover } from 'naive-ui'

</script>

<style lang="scss" scoped>

  .page_container {
    width: 100%;
    margin: 0 auto;
    height: 1080px;
    background-image: url("/img/demo/fz/fz_bg.png");
    background-size: 100% 100%;
  }

  .demo_body {
    margin: 0 auto;
    width: 87%;
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
        gap: 8px;
      }
    }
    &_right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 80%;
      }
    }
  }

  .demo_bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 606px;
      width: auto;
    }
  }

  .demo_download  {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 30px;
      height: 35px;
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
        width: 240px;
        height: 240px;
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
    height: 40px;
    display: flex
  }


  //.demo_download:hover {
  //  .demo_download_code {
  //    display: flex;
  //  }
  //}



</style>
