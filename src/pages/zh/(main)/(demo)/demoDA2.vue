
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">智慧档案</span>
        <span class="demo_body_left_subtitle">档案管馆内、立档单位档案管理、互联网利用全流程管理系统</span>
        <div class="demo_body_left_items">
          <client-only>
            <div class="demo_download" @click="goToDemoDA">
              <img src="/img/demo/download/glht.png" />
              <span>档案平台</span>
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
        <img src="/img/demo/im/img_da.png" />
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_jbjs">
        <div class="demo_bottom_title size">
          基本介绍
        </div>
        <div class="demo_bottom_subtitle line_height">
          集文件档案管理与业务处理于一体的自动化软件，可实现文件档案采集、整理、利用等工作，对目录和电子原文两层对象进行管理；同时依托计算机辅助开展档案统计、鉴定、销毁、借阅、催还及参考资料编研等业务。
        </div>
        <div class="seeMore" @click="seeMore">
          查看更多 <img src="/img/demo/download/seeMore.png" alt="" />
        </div>
      </div>
      <div class="demo_bottom_box">
        <div class="demo_bottom_item">
          <img src="/img/demo/download/lxzdy.png" alt="" />
          <div class="demo_bottom_title">
            类型自定义
          </div>
          <div class="demo_bottom_subtitle">
            类型无限级自定义
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/txhzl.png" alt="" />
          <div class="demo_bottom_title">
            图形化著录表单自定义
          </div>
          <div class="demo_bottom_subtitle">
            著录界面、检索界面、浏览界面、补充著录界面
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/bbscgs.png" alt="" />
          <div class="demo_bottom_title">
            报表输出格式自定义
          </div>
          <div class="demo_bottom_subtitle">
            随意发挥创作灵感
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/dzwj.png" alt="" />
          <div class="demo_bottom_title">
            电子文件原文管理
          </div>
          <div class="demo_bottom_subtitle">
            便捷利用海量电子文件
          </div>
        </div>
        <div class="demo_bottom_item">
          <img src="/img/demo/download/ywsp.png" alt="" />
          <div class="demo_bottom_title">
            业务审批流程自定义
          </div>
          <div class="demo_bottom_subtitle">
            电子借阅、采集移交、销毁、开放、数据共享审批
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { IosArrowForward } from '@vicons/ionicons4'
import { NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'

// 创建router实例
const router = useRouter()

// 定义跳转方法
const goToDemoDA = () => {
  // 路由跳转（无页面刷新）
  const targetUrl = router.resolve('/zh/demoDA').href
  // 2. 新窗口打开
  window.open(targetUrl, '_blank')
}

const seeMore = () => {
  window.open('https://www.oortcloudsmart.com/zh/product_projectSolution/', '_blank')
}

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/档案宝画册.pdf'
  link.download = '档案宝画册.pdf'
  link.click()
}

definePageMeta({
  layout: 'demo',
  title: '智慧档案',
  subTitle: '演示环境',
  logo: '/img/demo/menu/da.png'
})

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 60px;
  // min-height: 1080px;
  background-image: url("/img/demo/im/da_bg.png");
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
      width: 602px;
      height: 520px;
    }
  }
}

.demo_bottom {
  margin: 20px auto;
  margin-bottom: 0;
  width: 85%;
  &_jbjs {
    width: 54%;
    margin-bottom: 30px;
  }
  &_box {
    display: flex;
    justify-content: space-between;
  }
  &_item {
    box-sizing: border-box;
    width: 288px;
    height: 275px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    img{
      width: 288px;
      height: 158px;
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
    margin: 10px 8px;
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
  margin: 0;
}
.size{
  font-size: 28px;
}
.seeMore{
  margin-top: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: #2278FF;
  img{
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
}
</style>
