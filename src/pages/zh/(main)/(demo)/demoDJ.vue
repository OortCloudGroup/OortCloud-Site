
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">智慧党建</span>
        <span class="demo_body_left_subtitle">用数字力量，筑牢党建阵地</span>
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
    </div>
    <div class="demo_content w1520">
      <div class="introduction">
        <div class="intro-item1">
          <h2>智慧党建系统的定位</h2>
          <p>互联网的迅猛发展，对党的建设，特别是拓展党建工作空间、创新党组织活动方式，党建管理，党员学习等方面提出了新挑战新要求。为进一步利用“互联网”在发挥党建工作服务人民各项工作中的核心作用，突出破解流动党员教育及管理难题，巩固常规性党建工作阵地，打破时间、空间等方面条件的限制，将传统的工作方法与信息化管理手段有机结合起来，提升党建工作新高度。</p>
        </div>
        <div class="intro-item2">
          <h2>智慧党建系统的定位</h2>
          <p>建立完善在线教育管理服务体系。开设党员E家、党群互助、党务管理、人才互助等模块，充分利用“二维码”、“云平台”等现代科技，为动党员提供在线学习教育、参加组织生活、网上缴纳党费、接转组织关系等服务。建立流动党员支部网络化模式，打破时空界限、身份壁垒和人数限制，健全组织机构，强化组织领导，建立覆盖区、街、社区三级党组织的开放式、多层次、立体化的建工作模式，提高党建效能。</p>
        </div>
      </div>
      <div class="difficult">
        <h1 class="title-text">
          党建存在的难点
        </h1>
        <div class="difficult-img">
          <img src="@/assets/img/dj_img3.png" alt="" />
        </div>
      </div>
      <div class="system">
        <h1 class="title-text">
          系统介绍
        </h1>
        <div class="system-img">
          <img src="@/assets/img/dj_img4.png" alt="" />
          <img src="@/assets/img/dj_img5.png" alt="" />
          <img src="@/assets/img/dj_img6.png" alt="" />
        </div>
      </div>
      <div class="system">
        <h1 class="title-text">
          主要功能
        </h1>
        <div class="card-container">
          <div v-for="item in cardList" :key="item.title" class="card-item">
            <div class="card-header">
              <img :src="item.icon" alt="" />
              <span class="header-title">{{ item.title }}</span>
            </div>
            <div class="card-content">
              <div v-for="tag in item.tags" :key="tag" class="content-item">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="system">
        <h1 class="title-text">
          系统架构
        </h1>
        <div>
          <img class="system-jg" src="@/assets/img/dj_img8.png" alt="" />
        </div>
      </div>
      <!-- <div class="system-screen">
        <h1 class="title-text">
          系统架构
        </h1>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">

import { IosArrowForward } from '@vicons/ionicons4'
import { NPopover, NIcon } from 'naive-ui'

definePageMeta({
  layout: 'demo',
  title: '智慧党建',
  subTitle: '演示环境',
  logo: '/img/demo/menu/dj.png'
})

const cardList = [
  {
    title: '党务管理',
    icon: '/img/demo/im/dwgl.png',
    iconColor: '#f56c6c',
    tags: ['党员管理', '党籍管理', '党务办公', '党费管理']
  },
  {
    title: '组织生活',
    icon: '/img/demo/im/zzsh.png',
    iconColor: '#67c23a',
    tags: ['三会一课', '两学一做', '民主评议', '党员教育']
  },
  {
    title: '党员中心',
    icon: '/img/demo/im/dyzx.png',
    iconColor: '#e6a23c',
    tagType: 'warning',
    tags: ['思想汇报', '党员心愿', '学习心得', '学习积分', '活动报名', '缴纳党费']
  },
  {
    title: '党员学习',
    icon: '/img/demo/im/dyxx.png',
    iconColor: '#409eff',
    tags: ['党史学习', '党的原著学习', '在线考试', 'VR在线学习']
  },
  {
    title: '智慧办公',
    icon: '/img/demo/im/zhbg.png',
    iconColor: '#909399',
    tags: ['公文处理', '事务处理', '公告通知', '即时通讯', '工作日志', '个人邮件']
  },
  {
    title: '组工视线会议系统',
    icon: '/img/demo/im/hyxt.png',
    iconColor: '#f56c6c',
    tags: ['桌面共享', '电子白板', '多种视频分屏模式', '远程监控与调节', '数据同步', '录制与回放']
  }
]

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/智慧党建.pdf'
  link.download = '智慧党建.pdf'
  link.click()
}

const goDetail = () => {
  window.open('http://oort.oortcloudsmart.com:21410/bus/apaas-web/desktopHome/index.html', '_blank')
}
</script>

<style lang="scss" scoped>
.w1520{
  width: 1520px;
  margin: 0 auto;
}
.page_container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 60px;
  // min-height: 1080px;
  background-size: 100% 100%;
}

.demo_body {
  padding: 0 142px;
  width: 85%;
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  height: 520px;
  background-image: url("/img/demo/im/dj_bg.png");
  background-size: cover;
  &_left {
    width: 850px;
    display: flex;
    flex-direction: column;
    &_title {
      font-size: 68px;
      color: #E52B1D;
      letter-spacing: 0;
      font-weight: 700;
    }
    &_subtitle {
      font-size: 28px;
      color: #E52B1D;
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
    justify-content: flex-end;
    img {
      width: 560px;
      height: 505px;
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

.introduction{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 80px;
  .intro-item1, .intro-item2{
    width: 750px;
    height: 328px;
    box-sizing: border-box;
    padding: 40px;
    h2{
      font-size: 30px;
      font-weight: 500;
      color: #E52B1D;
      margin-bottom: 11px;
    }
    p{
      font-size: 20px;
      font-weight: normal;
      color: #825F5F;
    }
  }
  .intro-item1{
    background-image: url("@/assets/img/dj_img1.png");
    background-size: cover;
  }
  .intro-item2{
    background-image: url("@/assets/img/dj_img2.png");
    background-size: cover;
  }
}
.title-text{
  font-size: 48px;
  font-weight: bold;
  color: #E52B1D;
  margin-bottom: 36px;
}
.difficult{
  margin-bottom: 150px;
  .difficult-img{
    text-align: center;
    img{
      width: 1000px;
      height: 900px;
    }
  }
}

.system{
  margin-bottom: 150px;
  .system-img{
    display: flex;
    justify-content: space-between;
    img{
      width: 493px;
      height: 492px;
    }
  }
}

.card-container{
  color: #E52B1D;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  .card-item{
    background-image: url("@/assets/img/dj_img7.png");
    background-size: cover;
    width: 493px;
    height: 260px;
    box-sizing: border-box;
    padding: 40px 20px;
    .card-header{
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      img{
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      .header-title{
        font-weight: 700;
        font-size: 32px;
      }
    }
    .card-content{
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      .content-item{
        font-size: 20px;
        border-radius: 4px;
        padding: 9px 16px;
        background-color: #FFF3F3;
      }
    }
  }
}
.system-jg{
  width: 1520px;
  height: 1212px;
}
.system-screen{
  margin-bottom: 150px;
}
</style>
