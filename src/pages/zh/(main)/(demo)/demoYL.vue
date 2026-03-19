
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">智慧园林</span>
        <span class="demo_body_left_subtitle">创建国家园林城市信息化评测与园林日常巡查、事件、养护等系统</span>
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
          <div class="demo_body_pdf_item" @click="downloadPDF">
            <img src="/img/demo/pdf_download.png" />
            <span>资料下载</span>
            <n-icon :component="IosArrowForward" />
          </div>
        </div>
      </div>
      <div class="demo_body_right">
        <img src="/img/demo/im/img_yl.png" />
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_jbjs">
        <div class="demo_bottom_title size">
          基本介绍
        </div>
        <div class="demo_bottom_subtitle line_height">
          智慧园林是覆盖多终端的全场景园林智能化管护方案，通过在线派巡查、工单溯事件、精管古树名木、定制绩效、专项养护、数据化测评为核心功能，以数字化工具让园林管护从人工经验转向数据驱动，助力城市绿化管理更高效精准。
        </div>
      </div>
      <div class="demo_bottom_box">
        <div class="demo_bottom_item">
          <img src="/img/demo/download/xcrw.png" alt="" />
          <div class="demo_bottom_title">
            巡查任务
          </div>
          <div class="demo_bottom_subtitle">
            在线派发园林巡查任务，推动巡查工作有序落地、覆盖园区管护全场景。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/sjgl.png" alt="" />
          <div class="demo_bottom_title">
            事件管理
          </div>
          <div class="demo_bottom_subtitle">
            巡查发现问题自动生成对应事件处置工单，事件处理全流程可追溯、可核查。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/gsmm.png" alt="" />
          <div class="demo_bottom_title">
            古树名木
          </div>
          <div class="demo_bottom_subtitle">
            对园林内古木名树的基础信息进行系统化维护，实现其位置信息在园林综合管控大屏的精准展示。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/khgl.png" alt="" />
          <div class="demo_bottom_title">
            考核管理
          </div>
          <div class="demo_bottom_subtitle">
            配套园林行业定制化绩效考核体系，帮助管理者优化团队管理、提升整体工作效率。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/yhgl.png" alt="" />
          <div class="demo_bottom_title">
            养护管理
          </div>
          <div class="demo_bottom_subtitle">
            针对园林内花草树木开展专项养护工作，支持设置即时养护任务与循环养护计划。
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ylcp.png" alt="" />
          <div class="demo_bottom_title">
            园林测评
          </div>
          <div class="demo_bottom_subtitle">
            以数据化分析+大屏可视化，全维度呈现城市绿化状态、助力精准化园林管理决策。
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
  title: '智慧园林',
  subTitle: '演示环境',
  logo: '/img/demo/menu/yl.png'
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/智慧园林.pdf'
  link.download = '智慧园林.pdf'
  link.click()
}

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
  background-image: url("/img/demo/im/yl_bg.png");
  background-size: 100% 100%;
}

.demo_body {
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-direction: row;
  padding-top: 63px;
  height: 600px;
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
      width: 560px;
      height: 505px;
    }
  }
}

.demo_bottom {
  margin: 20px auto;
  margin-bottom: 0;
  width: 85%;
  &_jbjs {
    width: 57%;
    margin-bottom: 30px;
  }
  &_box {
    display: flex;
    justify-content: space-between;
  }
  &_item {
    box-sizing: border-box;
    width: 236px;
    height: 290px;
    padding: 20px 16px;
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
