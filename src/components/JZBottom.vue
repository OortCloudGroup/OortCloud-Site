<template>
  <div class="bottom_page">
    <div class="bottom_content">
      <!-- 顶部 Logo -->
      <div class="bottom_tips">
        <img src="@/assets/software/jz_logo.png" alt="KINGDOM" />
      </div>

      <div class="bottom_main">
        <!-- 左侧：订阅 + 导航 -->
        <div class="bottom_left">
          <!-- 订阅邮箱 -->
          <div class="subscribe_box">
            <input
              type="email"
              class="subscribe_input"
              placeholder="订阅邮箱，请输入您的邮箱"
            />
            <button class="subscribe_btn">
              订阅
            </button>
          </div>

          <!-- 导航链接 -->
          <div class="nav_links">
            <div class="nav_item" @click="viewPath('/about')">
              <img src="@/assets/software/wmdgs.png" alt="" />
              <span>我们的公司</span>
            </div>
            <div class="nav_item" @click="viewPath('/contact')">
              <img src="@/assets/software/lxwm.png" alt="" />
              <span>联系我们</span>
            </div>
            <div class="nav_item" @click="viewPath('/legal')">
              <img src="@/assets/software/flys.png" alt="" />
              <span>法律 · 隐私</span>
            </div>
            <div class="nav_item" @click="viewPath('/security')">
              <img src="@/assets/software/aq.png" alt="" />
              <span>安全</span>
            </div>
          </div>
        </div>

        <!-- 右侧：语言选择 + 公司介绍 + 社交图标 -->
        <div class="bottom_right">
          <!-- 语言选择 -->
          <div class="lang_select">
            <img src="@/assets/bottomImg/chinese.png" alt="简体中文" />
            <span>简体中文</span>
            <span class="lang_arrow">▼</span>
          </div>

          <!-- 公司介绍 -->
          <div class="company_desc">
            <p>
              致力于为企业管理提供高效智能的开源解决方案，是全球业内高速成长的软件服务商之一，
              逾七百五十万用户进行数字化升级。通过一系列全业务链覆盖、高度集成、简单易用的商业应用，
              助力企业实现信息化改革、降本增效并释放公司增长潜力。
            </p>
            <p>独特的价值在于是一款非常容易使用又完全集成的应用。</p>
          </div>

          <!-- 社交媒体图标 -->
          <div class="social_icons">
            <img src="@/assets/bottomImg/bo1.png" alt="微博" />
            <img src="@/assets/bottomImg/bo2.png" alt="微信" />
            <img src="@/assets/bottomImg/bo3.png" alt="QQ" />
            <img src="@/assets/bottomImg/bo4.png" alt="LinkedIn" />
            <img src="@/assets/bottomImg/bo5.png" alt="抖音" />
            <img src="@/assets/bottomImg/bo6.png" alt="电话" />
            <img src="@/assets/bottomImg/bo7.png" alt="头条" />
            <img src="@/assets/bottomImg/bo8.png" alt="知乎" />
          </div>
        </div>
      </div>
    </div>

    <!-- ICP 备案信息 -->
    <div class="icpBox flexRowAC">
      Website made with
      <img class="icpBox_img" src="@/assets/software/jz_logo.png" alt="" />
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        style="opacity: 1; font-size: 14px; color: #fff;"
      >粤ICP备19160414号</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const viewPath = (path) => {
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
}
</script>

<style lang="scss" scoped>
.bottom_page {
  background: #252734;
  color: #fff;
}

.bottom_content {
  width: 1210px;
  margin: 0 auto;
  padding: 50px 0;
}

.bottom_tips {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  img{
    width: 170px;
    height: 40px;
  }
}

.bottom_main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.bottom_left {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.subscribe_box {
  display: flex;
  gap: 12px;
  .subscribe_input {
    width: 400px;
    height: 48px;
    padding: 0 16px;
    border: 1px solid #444857;
    border-radius: 8px;
    background: transparent;
    color: #fff;
    font-size: 14px;
    &::placeholder {
      color: #ADB5BD;
    }
  }
  .subscribe_btn {
    height: 48px;
    padding: 0 32px;
    border: none;
    border-radius: 8px;
    background: #1677ff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #4096ff;
    }
  }
}

.nav_links {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  .nav_item {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #ADB5BD;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.2s;
    &:hover {
      color: #1677ff;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}

.bottom_right {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.lang_select {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid #444857;
  cursor: pointer;
  img {
    width: 20px;
    height: 14px;
  }
  .lang_arrow {
    font-size: 12px;
    color: #ADB5BD;
  }
}

.company_desc {
  font-size: 14px;
  line-height: 1.6;
  color: #ADB5BD;
  p {
    margin: 0 0 16px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.social_icons {
  display: flex;
  gap: 16px;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
}

.icpBox {
  color: #ADB5BD;
  font-size: 14px;
  width: 100%;
  justify-content: center;
  height: 60px;
  background: #1A1C24;
  gap: 16px;

  .icpBox_img {
    width: auto;
    height: 25px;
  }
}
</style>
