
<template>
  <div class="page_container">
    <div class="demo_body">
      <div class="demo_body_left">
        <span class="demo_body_left_title">企业自动化</span>
        <span class="demo_body_left_subtitle">Altman 助你 企业自动化</span>
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
          <a href="http://oort.oortcloudsmart.com:31310/oort/oortcloud-policefront/console_manage/index.html#/" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/xoa/xoa_zm.png" />
              <span>桌面端</span>
            </div>
          </a>
          <a href="" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/xoa/xoa_ql.png" />
              <span>银河麒麟</span>
            </div>
          </a>
          <a href="" target="_blank">
            <div class="demo_download">
              <img src="/img/demo/xoa/xoa_uos.png" />
              <span>统信UOS</span>
            </div>
          </a>
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
        <img src="/img/demo/xoa/xoa_right.png" />
      </div>
    </div>
    <div class="ai-employee-container">
      <!-- 头部 -->
      <div class="header-section">
        <h1 class="main-title">
          <span class="title-normal">基于自研大模型，为不同业务场景量身定制的 AI 数字员工，不仅是工具，更是智慧合伙人</span>
        </h1>
      </div>

      <!-- 卡片列表 -->
      <div class="cards-grid">
        <div
          v-for="item in cardList"
          :key="item.title"
          class="card"
          :class="`card-${item.color}`"
        >
          <div class="card-avatar">
            <img :src="item.avatar" alt="" />
          </div>
          <h3 class="card-title">
            {{ item.title }}
          </h3>
          <ul class="card-features">
            <li v-for="(feat, idx) in item.features" :key="idx">
              <span class="feature-icon" :class="`icon-${item.color}`">✓</span>
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="demo_bottom">
      <div class="demo_bottom_title">
        基础办公能力 稳定可靠
      </div>
      <div class="demo_bottom_group">
        <div>
          <img src="/img/demo/xoa/xoa_d1.png" />
          <span>统一通讯</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d2.png" />
          <span>电子邮箱</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d3.png" />
          <span>公告通知</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d4.png" />
          <span>考勤打卡</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d5.png" />
          <span>行政办公</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d6.png" />
          <span>任务协同</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d7.png" />
          <span>数据安全</span>
        </div>
        <div>
          <img src="/img/demo/xoa/xoa_d8.png" />
          <span>零成本运维</span>
        </div>
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
import { ref } from 'vue'

definePageMeta({
  layout: 'demo',
  title: '企业自动化',
  subTitle: '演示环境',
  logo: '/img/demo/xoa/xoa_logo.png'
})

useSeoMeta({
  title: 'XOA数字化办公',
  ogTitle: 'XOA数字化办公-演示环境',
  description: 'Altman助你企业自动化',
  ogDescription: 'Altman助你企业自动化',
  ogImage: '/img/demo/xoa/xoa_logo.png'
})

const showModal = ref(false)
const videoUrl = ref('https://v.qq.com/txp/iframe/player.html?vid=h3155cunx94')
const cardList = ref([
  {
    title: '通用',
    color: 'blue',
    avatar: '/img/demo/xoa/ty.png',
    features: ['对话基础交互', '文档、表格、PPT处理生成', '多场景适配']
  },
  {
    title: '办公',
    color: 'green',
    avatar: '/img/demo/xoa/bg.png',
    features: ['公文自动生成', '政策解读', '流程审批辅助']
  },
  {
    title: '营销',
    color: 'red',
    avatar: '/img/demo/xoa/yx.png',
    features: ['营销话术生成', '客户画像分析', '活动方案策划']
  },
  {
    title: '编程',
    color: 'yellow',
    avatar: '/img/demo/xoa/bc.png',
    features: ['代码生成与解释', 'Bug 排查', '技术文档编写']
  },
  {
    title: '运维',
    color: 'red',
    avatar: '/img/demo/xoa/yw.png',
    features: ['故障自动排查', '日志分析', '资源监控预警']
  },
  {
    title: 'HR',
    color: 'blue',
    avatar: '/img/demo/xoa/hr.png',
    features: ['简历筛选', '面试邀约', '员工绩效分析']
  },
  {
    title: '会议',
    color: 'yellow',
    avatar: '/img/demo/xoa/hy.png',
    features: ['会议纪要自动生成', '内容要点提炼', '多语言实时转写']
  },
  {
    title: '感知',
    color: 'green',
    avatar: '/img/demo/xoa/gz.png',
    features: ['多模态内容理解', '场景化感知推荐', '智能意图识别']
  },
  {
    title: '培训',
    color: 'blue',
    avatar: '/img/demo/xoa/px.png',
    features: ['个性化 AI 课程生成', '学习行为智能分析', '培训效果自动评估']
  },
  {
    title: '客服',
    color: 'green',
    avatar: '/img/demo/xoa/kf.png',
    features: ['7×24 小时智能对话交互', '客户意图精准识别与响应', '服务数据自动复盘与优化']
  }
])
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
    text-align: center;
    font-size: 40px;
    color: #333;
    letter-spacing: 0;
    font-weight: 700;
    margin-bottom: 60px;
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

.ai-employee-container {
  width: 80%;
  margin: 120px auto;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
  gap: 16px;

  .main-title {
    font-size: 40px;
    font-weight: 700;
    width: 40%;
    margin: 0;
    .title-normal { color: #333; }
    .title-highlight { color: #4080ff; }
  }

  .subtitle {
    font-size: 16px;
    color: #666;
    max-width: 500px;
    margin: 0;
  }
}

/* Flex 卡片布局 */
.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card {
  flex: 0 0 calc(25% - 18px);
  min-width: 280px;
  border-radius: 16px;
  padding: 32px 24px;
  box-sizing: border-box;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  &.card-blue { background: #e8f0fe; }
  &.card-green { background: #e8f8f0; }
  &.card-red { background: #ffeef0; }
  &.card-yellow { background: #fff8e8; }

  .card-avatar {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    margin-bottom: 24px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 20px 0;
    padding-bottom: 12px;
  }

  .card-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;

      .feature-icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #fff;
        flex-shrink: 0;
      }
      .icon-blue { background: #4080ff; }
      .icon-green { background: #36d399; }
      .icon-red { background: #f87272; }
      .icon-yellow { background: #fbbf24; }
    }
  }
}

</style>
