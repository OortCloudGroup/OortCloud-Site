<template>
  <div class="kiosk-page">
    <!-- Hero区域 -->
    <section class="hero-section">
      <div class="hero-wrapper">
        <div class="hero-text">
          <span class="tag">🖥️ 智能自助机系统</span>
          <h1>自助服务 智慧便捷</h1>
          <p>基于AI和物联网技术的智能自助机系统，提供自助查询、缴费、办理等多种服务，降低人工成本，提升服务效率，打造7×24小时智慧服务新模式。</p>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="features" class="features">
      <div class="section-heading">
        <h2>核心优势</h2>
        <p>领先的技术优势，打造真正智能便捷的自助服务体验</p>
      </div>
      <div class="features-wrapper">
        <div v-for="feature in features" :key="feature.id" class="feature-box">
          <div class="feature-icon">
            {{ feature.icon }}
          </div>
          <div class="feature-body">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-badges">
              <span v-for="badge in feature.badges" :key="badge" class="feature-badge">{{ badge }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section id="products" class="products">
      <div class="section-heading">
        <h2>产品展示</h2>
        <p>多样化的产品型号，满足不同场景的自助服务需求</p>
      </div>
      <div class="products-wrapper">
        <div class="product-grid">
          <div v-for="product in products" :key="product.id" class="product-card">
            <div class="product-icon">
              {{ product.icon }}
            </div>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <ul class="product-features">
              <li v-for="feature in product.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术特点 -->
    <section class="technology">
      <div class="section-heading" style="color: white;">
        <h2>技术特点</h2>
        <p style="color: rgba(255,255,255,0.9);">
          先进的技术架构，保障系统稳定可靠
        </p>
      </div>
      <div class="tech-wrapper">
        <div class="tech-grid">
          <div v-for="tech in technologies" :key="tech.id" class="tech-card">
            <div class="tech-icon">
              {{ tech.icon }}
            </div>
            <h4>{{ tech.title }}</h4>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能演示 -->
    <section id="demo" class="demo">
      <div class="section-heading">
        <h2>功能演示</h2>
        <p>简单四步，轻松完成自助服务</p>
      </div>
      <div class="demo-wrapper">
        <div class="demo-steps">
          <div v-for="step in demoSteps" :key="step.id" class="demo-step">
            <div class="step-circle">
              {{ step.number }}
            </div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'site-new'
})
// 核心优势数据
const features = ref([
  {
    id: 1,
    icon: '🤖',
    title: 'AI智能交互',
    description: '基于人工智能的智能语音交互系统，支持语音识别、语义理解，提供自然流畅的人机对话体验。',
    badges: ['语音识别', '语义理解', '自然对话']
  },
  {
    id: 2,
    icon: '💳',
    title: '多支付方式',
    description: '支持微信、支付宝、银行卡等多种支付方式，扫码、刷卡、刷脸都能完成支付，满足不同用户需求。',
    badges: ['扫码支付', '银行卡', '刷脸支付']
  },
  {
    id: 3,
    icon: '🔐',
    title: '多重身份验证',
    description: '支持人脸识别、身份证、二维码等多种身份验证方式，确保操作安全可靠，防止身份冒用。',
    badges: ['人脸识别', '身份证', '二维码']
  },
  {
    id: 4,
    icon: '📊',
    title: '数据分析统计',
    description: '自动收集使用数据，分析用户行为，生成统计报表，为服务优化提供数据支持。',
    badges: ['数据收集', '行为分析', '统计报表']
  }
])

// 产品数据
const products = ref([
  {
    id: 1,
    icon: '🏦',
    title: '金融自助机',
    description: '专为银行等金融机构设计，支持存取款、转账、查询等金融服务，提升银行服务效率。',
    features: ['存取款功能', '转账汇款', '账户查询', '密码键盘']
  },
  {
    id: 2,
    icon: '🏥',
    title: '医疗自助机',
    description: '专为医院设计，支持挂号、缴费、打印报告等功能，缓解排队压力，改善就医体验。',
    features: ['自助挂号', '缴费支付', '报告打印', '医院导航']
  },
  {
    id: 3,
    icon: '🎫',
    title: '票务自助机',
    description: '专为交通枢纽设计，支持购票、取票、改签等功能，减少人工窗口，提升通行效率。',
    features: ['购票功能', '取票服务', '改签退票', '班次查询']
  },
  {
    id: 4,
    icon: '🏢',
    title: '政务自助机',
    description: '专为政务大厅设计，支持证明打印、信息查询、业务办理等功能，提升政务服务效率。',
    features: ['证明打印', '信息查询', '业务办理', '进度查询']
  },
  {
    id: 5,
    icon: '📚',
    title: '图书自助机',
    description: '专为图书馆设计，支持借书、还书、续借等功能，实现图书馆自助化管理。',
    features: ['借书功能', '还书服务', '图书续借', '查询检索']
  },
  {
    id: 6,
    icon: '🏪',
    title: '零售自助机',
    description: '专为零售场景设计，支持商品选购、自助结账等功能，打造无人零售新体验。',
    features: ['商品选购', '自助结账', '会员积分', '优惠活动']
  }
])

// 技术特点数据
const technologies = ref([
  {
    id: 1,
    icon: '⚡',
    title: '高性能',
    description: '采用分布式架构设计，支持高并发访问，响应速度快，确保高峰期系统稳定运行。'
  },
  {
    id: 2,
    icon: '🛡️',
    title: '高安全',
    description: '多重加密技术，符合国家信息安全标准，保障用户数据和交易安全。'
  },
  {
    id: 3,
    icon: '🔌',
    title: '易集成',
    description: '开放API接口，支持与现有系统无缝对接，降低集成成本，缩短上线周期。'
  },
  {
    id: 4,
    icon: '📱',
    title: '跨平台',
    description: '支持多种终端设备，适配不同尺寸屏幕，提供一致的用户体验。'
  }
])

// 演示步骤数据
const demoSteps = ref([
  {
    id: 1,
    number: '1',
    title: '选择服务',
    description: '触摸屏幕选择需要办理的业务类型，系统智能引导操作流程。'
  },
  {
    id: 2,
    number: '2',
    title: '身份验证',
    description: '通过人脸识别、身份证或二维码完成身份验证，确保操作安全。'
  },
  {
    id: 3,
    number: '3',
    title: '业务办理',
    description: '按照系统提示完成信息填写、支付等操作，全程语音引导。'
  },
  {
    id: 4,
    number: '4',
    title: '完成取单',
    description: '业务办理完成后，打印相关凭证，支持电子凭证扫码保存。'
  }
])

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}

/* Hero区域 */
.hero-section {
  background: linear-gradient(135deg, #fff5f5 0%, #fef9e7 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -1%;
  width: 1000px;
  height: 1000px;
  background: rgba(255, 107, 107, 0.04);
  border-radius: 50%;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: -4%;
  left: 6%;
  width: 750px;
  height: 750px;
  background: rgba(254, 202, 87, 0.03);
  border-radius: 50%;
}

.hero-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-text {
  color: #333;
  text-align: center;
  max-width: 800px;
}

.hero-text .tag {
  display: inline-block;
  background: rgba(255, 107, 107, 0.12);
  color: #ff6b6b;
  padding: 18px 38px;
  border-radius: 40px;
  font-size: 20px;
  margin-bottom: 45px;
  font-weight: 600;
}

.hero-text h1 {
  font-size: 60px;
  margin-bottom: 40px;
  line-height: 1.1;
  font-weight: 800;
}

.hero-text p {
  font-size: 24px;
  opacity: 0.75;
  margin-bottom: 58px;
  line-height: 1.9;
}

.hero-buttons {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  color: white;
  padding: 24px 58px;
  border-radius: 42px;
  text-decoration: none;
  font-weight: 700;
  font-size: 21px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 60px rgba(255, 107, 107, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.75);
  color: #ff6b6b;
  padding: 24px 58px;
  border: 2px solid rgba(255, 107, 107, 0.3);
  border-radius: 42px;
  text-decoration: none;
  font-weight: 700;
  font-size: 21px;
  transition: background 0.3s, transform 0.3s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-6px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.kiosk-demo {
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(40px);
  border-radius: 42px;
  padding: 65px;
  width: 100%;
  max-width: 560px;
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.16);
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.kiosk-header {
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}

.kiosk-header h4 {
  font-size: 30px;
  margin-bottom: 16px;
  font-weight: 700;
}

.kiosk-header .status {
  font-size: 18px;
  color: #ff6b6b;
  font-weight: 500;
}

.kiosk-screen {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 25px;
  padding: 40px;
  margin-bottom: 35px;
  color: white;
}

.screen-title {
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 600;
  color: #feca57;
}

.screen-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.menu-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.menu-item:hover {
  background: rgba(255, 107, 107, 0.3);
  transform: translateY(-5px);
}

.menu-icon {
  font-size: 42px;
  margin-bottom: 15px;
}

.menu-text {
  font-size: 16px;
  font-weight: 500;
}

.kiosk-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-box {
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  border-radius: 18px;
  padding: 25px;
  text-align: center;
  color: white;
}

.stat-box .value {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.stat-box .label {
  font-size: 14px;
  opacity: 0.9;
}

/* 核心优势 */
.features {
  padding: 170px 20px;
  background: #fff;
}

.section-heading {
  text-align: center;
  max-width: 1050px;
  margin: 0 auto 120px;
}

.section-heading h2 {
  font-size: 60px;
  margin-bottom: 40px;
  color: #333;
  font-weight: 700;
}

.section-heading p {
  font-size: 23px;
  color: #666;
  line-height: 1.8;
}

.features-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
}

.feature-box {
  background: linear-gradient(135deg, #fff5f5 0%, #fef9e7 100%);
  border-radius: 38px;
  padding: 60px 50px;
  display: flex;
  gap: 45px;
  align-items: flex-start;
  transition: transform 0.4s, box-shadow 0.4s;
}

.feature-box:hover {
  transform: translateY(-18px);
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.14);
}

.feature-icon {
  width: 130px;
  height: 130px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  flex-shrink: 0;
  box-shadow: 0 25px 60px rgba(255, 107, 107, 0.3);
}

.feature-body h3 {
  font-size: 34px;
  margin-bottom: 22px;
  color: #333;
  font-weight: 700;
}

.feature-body p {
  color: #666;
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 28px;
}

.feature-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.feature-badge {
  background: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
}

/* 产品展示 */
.products {
  padding: 170px 20px;
  background: linear-gradient(135deg, #fff5f5 0%, #fef9e7 100%);
}

.products-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
}

.product-card {
  background: #fff;
  border-radius: 38px;
  padding: 60px 50px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.product-card:hover {
  transform: translateY(-20px);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.16);
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-icon {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
  font-size: 58px;
}

.product-card h3 {
  font-size: 32px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 700;
}

.product-card p {
  color: #666;
  font-size: 19px;
  line-height: 1.75;
  margin-bottom: 40px;
}

.product-features {
  list-style: none;
}

.product-features li {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  font-size: 17px;
  color: #777;
}

.product-features li::before {
  content: '✓';
  width: 28px;
  height: 28px;
  background: #ff6b6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin-right: 18px;
  flex-shrink: 0;
}

/* 应用领域 */
.applications {
  padding: 170px 20px;
  background: #fff;
}

.applications-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.app-tabs {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 90px;
  flex-wrap: wrap;
}

.app-tab {
  padding: 18px 45px;
  border: 2px solid #e0e0e0;
  border-radius: 40px;
  background: #fff;
  color: #666;
  font-size: 19px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.app-tab.active,
.app-tab:hover {
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  color: white;
  border-color: transparent;
}

.app-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.app-detail {
  background: linear-gradient(135deg, #fff5f5 0%, #fef9e7 100%);
  border-radius: 38px;
  padding: 60px 50px;
  transition: transform 0.3s;
}

.app-detail:hover {
  transform: translateY(-12px);
}

.app-detail h4 {
  font-size: 34px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 700;
}

.app-detail p {
  color: #666;
  font-size: 19px;
  line-height: 1.75;
  margin-bottom: 35px;
}

.app-items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.app-item {
  background: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
}

/* 技术特点 */
.technology {
  padding: 170px 20px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  color: white;
}

.tech-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}

.tech-card {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(25px);
  border-radius: 32px;
  padding: 55px 40px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.25);
  transition: transform 0.3s;
}

.tech-card:hover {
  transform: translateY(-15px);
  background: rgba(255, 255, 255, 0.22);
}

.tech-icon {
  font-size: 68px;
  margin-bottom: 32px;
}

.tech-card h4 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 700;
}

.tech-card p {
  font-size: 18px;
  line-height: 1.7;
  opacity: 0.9;
}

/* 功能演示 */
.demo {
  padding: 170px 20px;
  background: #fff;
}

.demo-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
  text-align: center;
}

.demo-step {
  position: relative;
}

.step-circle {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 35px;
  font-size: 56px;
  color: white;
  font-weight: 700;
  box-shadow: 0 25px 60px rgba(255, 107, 107, 0.3);
}

.demo-step h4 {
  font-size: 26px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 700;
}

.demo-step p {
  color: #666;
  font-size: 17px;
  line-height: 1.7;
}

/* 数据统计 */
.statistics {
  padding: 170px 20px;
  background: linear-gradient(135deg, #fff5f5 0%, #fef9e7 100%);
}

.stats-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  text-align: center;
}

.stat-item h3 {
  font-size: 76px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-item p {
  font-size: 21px;
  color: #666;
  font-weight: 500;
}

/* CTA区域 */
.cta {
  padding: 170px 20px;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  text-align: center;
}

.cta-content {
  max-width: 1050px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 64px;
  margin-bottom: 40px;
  color: white;
  font-weight: 700;
}

.cta p {
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 65px;
  line-height: 1.8;
}

.cta-form {
  display: flex;
  gap: 30px;
  max-width: 780px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cta-form input {
  flex: 1;
  min-width: 360px;
  padding: 30px 55px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  outline: none;
}

.cta-form button {
  background: #fff;
  color: #ff6b6b;
  padding: 30px 65px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s;
}

.cta-form button:hover {
  transform: translateY(-5px);
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: white;
  padding: 120px 20px 90px;
}

.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 95px;
  margin-bottom: 100px;
}

.footer-brand h3 {
  font-size: 36px;
  margin-bottom: 45px;
  font-weight: 700;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.9;
  margin-bottom: 45px;
  font-size: 18px;
}

.footer-brand .social {
  display: flex;
  gap: 28px;
}

.footer-brand .social a {
  width: 58px;
  height: 58px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
  font-size: 28px;
}

.footer-brand .social a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-col h4 {
  font-size: 28px;
  margin-bottom: 45px;
  font-weight: 600;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 26px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 18px;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .app-content {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-wrapper {
    grid-template-columns: 1fr;
  }

  .footer-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
  }

  .hero-text h1 {
    font-size: 52px;
  }

  .product-grid,
  .tech-grid,
  .demo-steps,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-wrapper {
    grid-template-columns: 1fr;
  }

  .screen-menu {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
