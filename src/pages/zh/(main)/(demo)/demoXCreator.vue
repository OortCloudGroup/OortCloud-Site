/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">XCreator敏捷发布平台</span>
        <span class="demo_body_left_subtitle">全媒体矩阵信息发布平台</span>
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
          <a href="" target="_blank">
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
        <img src="/img/demo/xc/xc_right.png" />
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_intro">
        <span>平台介绍</span>
        <span>XCreator敏捷发布平台基于顶层设计构建技术统一，功能统一，结构统一，资源向上归集、面向多服务对象、多渠道、多层级、多部门的网站集群平台，由多个构建在同一数据体系上的门户网站群构成。目前，该产品已在20+ 门户网站项目中落地，并在客户信创环境中稳定运行，帮助客户实现安全可靠的集约化管理。未来，品高软件将坚持以相关政府文件为总体指导，并积极运用大数据、云计算、人工智能等技术进行创新驱动，为政府行业用户统筹管理网站提供有力支撑。</span>
      </div>
      <div class="demo_bottom_group">
        <div>
          <img src="/img/demo/xc/xc_d1.png" />
          <span>基础资源层面</span>
          <span>云平台统一提供资源<br />节约建设成本</span>
        </div>
        <div>
          <img src="/img/demo/xc/xc_d2.png" />
          <span>数据层面</span>
          <span>门户网站信息高度整合</span>
        </div>
        <div>
          <img src="/img/demo/xc/xc_d3.png" />
          <span>业务层面</span>
          <span>站群大后台信息统一监管</span>
        </div>
        <div>
          <img src="/img/demo/xc/xc_d4.png" />
          <span>信息安全方面</span>
          <span>完善的信息安全体系<br />集中防护<br />保障信息安全</span>
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
  title: 'XCreator敏捷发布平台',
  subTitle: '演示环境',
  logo: '/img/demo/xc/xc_logo.png'
})

useSeoMeta({
  title: 'XCreator敏捷发布平台',
  ogTitle: 'XCreator敏捷发布平台-演示环境',
  description: 'XCreator敏捷发布平台基于顶层设计构建技术统一，功能统一，结构统一，资源向上归集、面向多服务对象、多渠道、多层级、多部门的网站集群平台，由多个构建在同一数据体系上的门户网站群构成。目前，该产品已在20+ 门户网站项目中落地，并在客户信创环境中稳定运行，帮助客户实现安全可靠的集约化管理。未来，品高软件将坚持以相关政府文件为总体指导，并积极运用大数据、云计算、人工智能等技术进行创新驱动，为政府行业用户统筹管理网站提供有力支撑。',
  ogDescription: 'XCreator敏捷发布平台基于顶层设计构建技术统一，功能统一，结构统一，资源向上归集、面向多服务对象、多渠道、多层级、多部门的网站集群平台，由多个构建在同一数据体系上的门户网站群构成。目前，该产品已在20+ 门户网站项目中落地，并在客户信创环境中稳定运行，帮助客户实现安全可靠的集约化管理。未来，品高软件将坚持以相关政府文件为总体指导，并积极运用大数据、云计算、人工智能等技术进行创新驱动，为政府行业用户统筹管理网站提供有力支撑。',
  ogImage: '/img/demo/xc/xc_logo.png'
})

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  min-height: 1080px;
  background-image: url("/img/demo/xc/xc_bg.png");
  background-size: 100% 100%;
}

.demo_body {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
  height: 560px;
  &_left {
    width: 800px;
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
  flex-direction: row;
  &_intro{
    background: #FFFFFF;
    border-radius: 4px;
    width:650px;
    height: 243px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    span:nth-of-type(1) {
      font-size: 28px;
      color: #1B396C;
      letter-spacing: 0;
      font-weight: 700;
      height: 68px;
    }
    span:nth-of-type(2) {
      font-size: 18px;
      color: #717781;
      letter-spacing: 0;
      line-height: 28px;
      font-weight: 400;
    }
  }
  &_group {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-left: 20px;
    div {
      width: 180px;
      height: 283px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #FFFFFF;
      border-radius: 4px;
      align-items: center;
      background-size: 100% 100%;
      img {
        width: 120px;
        height: 120px;
      }
      span:nth-of-type(1) {
        font-size: 20px;
        color: #1B396C;
        letter-spacing: 0;
        text-align: center;
        font-weight: 700;
        margin: 16px 0px;
      }
      span:nth-of-type(2) {
        width: 90%;
        height: 80px;
        font-size: 16px;
        color: #717781;
        letter-spacing: 0;
        text-align: center;
        font-weight: 400;
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
  background: #FFFFFF;
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
