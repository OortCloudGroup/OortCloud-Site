
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">智慧街道</span>
        <span class="demo_body_left_subtitle">智慧街道网格员巡查事件处理闭环系统</span>
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
        <img src="/img/demo/im/img_jd.png" />
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_jbjs">
        <div class="demo_bottom_title">
          基本介绍
        </div>
        <div class="demo_bottom_subtitle line_height">
          街道网格任务管理闭环系统，依托网络巡逻任务采集
          ，结合巡查事件自动派发功能，对各小分格下的社区任务开展 “AI + 督导” 全流程任务闭环管理；同时集成指挥调度一键视频能力，实现网格人员 “看得见、呼得通” 的视频调度管理，以此精准把控精细化标准落实情况与各项工作推进成效。
        </div>
      </div>
      <div class="demo_bottom_item">
        <img src="/img/demo/download/znsj.png" alt="" />
        <div class="demo_bottom_title">
          智能手机
        </div>
        <div class="demo_bottom_title">
          （APP/小程序）
        </div>
        <div class="demo_bottom_subtitle">
          支持统一派发定制手机。以及网格工作人员的通用手机。
        </div>
      </div>
      <div class="demo_bottom_item">
        <img src="/img/demo/download/zfjly.png" alt="" />
        <div class="demo_bottom_title">
          执法记录仪
        </div>
        <div class="demo_bottom_title">
          便携式工作终端
        </div>
        <div class="demo_bottom_subtitle">
          巡查事件支持一键拍传，同步触发任务自动派单。
        </div>
      </div>
      <div class="demo_bottom_item">
        <img src="/img/demo/download/wrzssbg.png" alt="" />
        <div class="demo_bottom_title">
          无人值守设备柜
        </div>
        <div class="demo_bottom_subtitle">
          无人值守设备智能充电，实现数据自动采集、整理及上传，自带离线数据管理系统。
        </div>
      </div>
      <div class="demo_bottom_item">
        <img src="/img/demo/download/wxjqr.png" alt="" />
        <div class="demo_bottom_title">
          微信机器人
        </div>
        <div class="demo_bottom_subtitle">
          支持通过微信机器人自动推送任务，提醒处理任务闭环。
        </div>
      </div>
      <div class="demo_bottom_item">
        <img src="/img/demo/download/dzgp.png" alt="" />
        <div class="demo_bottom_title">
          电子工牌/车牌
        </div>
        <div class="demo_bottom_subtitle">
          融合 4G 通信、GPS+BDS 双星定位，支持渣土车、搅拌车等多类型车辆及环卫工人、巡线人员智能化管理，具备人车自动打卡与轨迹追踪功能。
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
  title: '智慧街道',
  subTitle: '演示环境',
  logo: '/img/demo/menu/jd.png'
})

const goDetail = () => {
  window.open('http://oort.oortcloudsmart.com:23410/bus/apaas-web/nyStreeManage/index.html', '_blank')
}
</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 60px;
  // min-height: 1080px;
  background-image: url("/img/demo/im/jd_bg.png");
  background-size: 100% 100%;
}

.demo_body {
  margin: 0 auto;
  width: 85%;
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
      margin-top: 0;
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
    justify-content: center;
    img {
      width: auto;
      height: 468px;
    }
  }
}

.demo_bottom {
  display: flex;
  justify-content: space-between;
  margin: 100px auto;
  margin-bottom: 0;
  width: 85%;
  &_jbjs {
    width: 372px;
    height: 256px;
    background-color: #fff;
    padding: 24px;
    border-radius: 10px;
  }
  &_item {
    width: 190px;
    height: 280px;
    padding: 12px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    img{
      width: 98px;
      height: 98px;
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
    line-height: normal;
    font-weight: 400;
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
  line-height: 28px;
}
</style>
