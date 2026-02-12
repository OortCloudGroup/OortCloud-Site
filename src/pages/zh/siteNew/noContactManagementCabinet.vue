<template>
  <div class="smart-cabinet-page">
    <!-- Hero区域 -->
    <section class="hero-section">
      <div class="hero-box">
        <div class="hero-content">
          <span class="badge">🗄️ 智能无人值守管理柜</span>
          <h1>智能存取 无人值守</h1>
          <p>基于物联网技术的智能管理柜系统，支持人脸识别、二维码等多种开锁方式，实现物品存取全流程无人化管理，提升管理效率，降低人力成本。</p>
        </div>
      </div>
    </section>

    <!-- 核心特性 -->
    <section id="features" class="features">
      <div class="section-title">
        <h2>核心特性</h2>
        <p>全方位智能化设计，打造真正无人值守的管理柜系统</p>
      </div>
      <div class="features-container">
        <div v-for="(feature, index) in features" :key="index" class="feature-block">
          <div class="feature-icon-box">
            {{ feature.icon }}
          </div>
          <div class="feature-text">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-tags">
              <span v-for="(tag, tagIndex) in feature.tags" :key="tagIndex" class="feature-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品系列 -->
    <section id="products" class="products">
      <div class="section-title">
        <h2>产品系列</h2>
        <p>多样化的产品型号，满足不同场景的存储需求</p>
      </div>
      <div class="products-wrapper">
        <div class="product-grid">
          <div v-for="(product, index) in products" :key="index" class="product-card">
            <div class="product-icon">
              {{ product.icon }}
            </div>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <ul class="product-specs">
              <li v-for="(spec, specIndex) in product.specs" :key="specIndex">
                {{ spec }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 优势对比 -->
    <section id="comparison" class="comparison">
      <div class="section-title">
        <h2>优势对比</h2>
        <p>智能管理柜 vs 传统储物柜</p>
      </div>
      <div class="comparison-wrapper">
        <div class="comparison-table">
          <div class="comparison-row header">
            <div class="comparison-cell">
              对比项
            </div>
            <div class="comparison-cell">
              智能管理柜
            </div>
          </div>
          <div v-for="(item, index) in comparisonList" :key="index" class="comparison-row">
            <div class="comparison-cell feature">
              {{ item.feature }}
            </div>
            <div class="comparison-cell smart">
              {{ item.smart }}
            </div>
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
// 核心特性数据
const features = ref([
  {
    icon: '🔐',
    title: '多重身份认证',
    description: '支持人脸识别、指纹、二维码、IC卡等多种身份认证方式，确保物品存取安全可靠，防止未授权访问。',
    tags: ['人脸识别', '指纹认证', '二维码', 'IC卡']
  },
  {
    icon: '🤖',
    title: '智能分配格口',
    description: '系统自动分配最优格口，支持随机分配和指定分配，优化空间利用率，提升存取效率。',
    tags: ['自动分配', '空间优化', '智能推荐']
  },
  {
    icon: '📊',
    title: '实时监控管理',
    description: '24小时实时监控格口状态，物品存取记录完整可追溯，异常情况自动报警提醒。',
    tags: ['实时监控', '记录追溯', '异常报警']
  },
  {
    icon: '☁️',
    title: '云端协同管理',
    description: '支持多设备云端协同，数据实时同步，远程管理配置，随时随地掌握管理柜运行状态。',
    tags: ['云端同步', '远程管理', '数据共享']
  }
])

// 产品系列数据
const products = ref([
  {
    icon: '🗄️',
    title: '智能文件柜',
    description: '专为文件档案设计，支持A4纸张存取，防水防尘，适合办公环境使用。',
    specs: ['24格口容量', 'A4纸张兼容', '防火防水设计', 'LED状态显示']
  },
  {
    icon: '📱',
    title: '智能手机柜',
    description: '专为手机等小型电子设备设计，带充电功能，适合学校、会议等场景。',
    specs: ['48格口容量', 'USB充电接口', '快速充电支持', '电量显示']
  },
  {
    icon: '💼',
    title: '智能储物柜',
    description: '通用型储物柜，适用于健身房、游泳馆、商场等公共场所，大容量设计。',
    specs: ['96格口容量', '大容量空间', '多种尺寸可选', '耐用材质']
  },
  {
    icon: '🔋',
    title: '智能电池柜',
    description: '专为电池等危险品存储设计，带温湿度监控和通风系统，确保存储安全。',
    specs: ['32格口容量', '温湿度监控', '通风系统', '防火防爆']
  },
  {
    icon: '🔧',
    title: '智能工具柜',
    description: '专为工具设备设计，带承重加强设计，适合工厂、车间等工业环境。',
    specs: ['64格口容量', '承重加强', '防锈材质', '耐用设计']
  },
  {
    icon: '👕',
    title: '智能衣物柜',
    description: '专为衣物存储设计，带除湿功能，适合企业更衣室、学校等场景。',
    specs: ['40格口容量', '除湿功能', '透气设计', '挂钩配置']
  }
])

// 优势对比
const comparisonList = ref([
  { feature: '身份认证', smart: '人脸识别/指纹/二维码/IC卡' },
  { feature: '管理方式', smart: '云端远程管理，自动化操作' },
  { feature: '数据记录', smart: '完整记录，可追溯，可分析' },
  { feature: '异常处理', smart: '自动报警，实时监控' },
  { feature: '空间利用率', smart: '智能分配，优化空间使用' },
  { feature: '运行时间', smart: '7×24小时不间断运行' },
  { feature: '维护成本', smart: '自动化管理，维护成本低' }
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
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -12%;
  right: -2%;
  width: 950px;
  height: 950px;
  background: rgba(17, 153, 142, 0.04);
  border-radius: 50%;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: -6%;
  left: 4%;
  width: 700px;
  height: 700px;
  background: rgba(56, 239, 125, 0.03);
  border-radius: 50%;
}

.hero-box {
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

.hero-content {
  color: #333;
  text-align: center;
  max-width: 800px;
}

.hero-content .badge {
  display: inline-block;
  background: rgba(17, 153, 142, 0.12);
  color: #11998e;
  padding: 16px 35px;
  border-radius: 38px;
  font-size: 20px;
  margin-bottom: 42px;
  font-weight: 600;
}

.hero-content h1 {
  font-size: 60px;
  margin-bottom: 35px;
  line-height: 1.1;
  font-weight: 800;
}

.hero-content p {
  font-size: 22px;
  opacity: 0.75;
  margin-bottom: 52px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.btn-main {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  padding: 22px 52px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-main:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 55px rgba(17, 153, 142, 0.4);
}

.btn-alt {
  background: rgba(255, 255, 255, 0.7);
  color: #11998e;
  padding: 22px 52px;
  border: 2px solid rgba(17, 153, 142, 0.3);
  border-radius: 40px;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  transition: background 0.3s, transform 0.3s;
}

.btn-alt:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cabinet-demo {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(35px);
  border-radius: 38px;
  padding: 60px;
  width: 100%;
  max-width: 540px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.14);
  border: 2px solid rgba(255, 255, 255, 0.7);
}

.cabinet-header {
  text-align: center;
  margin-bottom: 45px;
  color: #333;
}

.cabinet-header h4 {
  font-size: 28px;
  margin-bottom: 14px;
  font-weight: 700;
}

.cabinet-header .status {
  font-size: 17px;
  color: #11998e;
  font-weight: 500;
}

.cabinet-overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-bottom: 35px;
}

.overview-box {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 22px;
  padding: 28px;
  text-align: center;
  color: white;
}

.overview-box:nth-child(2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.overview-box:nth-child(3) {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.overview-box:nth-child(4) {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.overview-box .icon {
  font-size: 36px;
  margin-bottom: 14px;
}

.overview-box .value {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.overview-box .label {
  font-size: 14px;
  opacity: 0.9;
}

.cabinet-activity {
  background: #f1f8f4;
  border-radius: 22px;
  padding: 30px;
}

.cabinet-activity h5 {
  font-size: 18px;
  margin-bottom: 22px;
  color: #333;
  font-weight: 600;
}

.activity-row {
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.activity-row:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 24px;
  color: white;
}

.activity-info {
  flex: 1;
}

.activity-info .title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.activity-info .detail {
  font-size: 14px;
  color: #999;
}

.activity-status {
  font-size: 14px;
  font-weight: 600;
  color: #38ef7d;
}

/* 核心特性 */
.features {
  padding: 160px 20px;
  background: #fff;
}

.section-title {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 110px;
}

.section-title h2 {
  font-size: 56px;
  margin-bottom: 35px;
  color: #333;
  font-weight: 700;
}

.section-title p {
  font-size: 22px;
  color: #666;
  line-height: 1.8;
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.feature-block {
  background: linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%);
  border-radius: 35px;
  padding: 55px 45px;
  display: flex;
  gap: 40px;
  align-items: flex-start;
  transition: transform 0.4s, box-shadow 0.4s;
}

.feature-block:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
}

.feature-icon-box {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 55px;
  flex-shrink: 0;
  box-shadow: 0 20px 50px rgba(17, 153, 142, 0.3);
  color: white;
}

.feature-text h3 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
}

.feature-text p {
  color: #666;
  font-size: 19px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.feature-tag {
  background: #e8f5e9;
  color: #11998e;
  padding: 10px 22px;
  border-radius: 22px;
  font-size: 15px;
  font-weight: 500;
}

/* 产品系列 */
.products {
  padding: 160px 20px;
  background: linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%);
}

.products-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
}

.product-card {
  background: #fff;
  border-radius: 35px;
  padding: 55px 45px;
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
  height: 10px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.product-card:hover {
  transform: translateY(-18px);
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.14);
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-icon {
  width: 110px;
  height: 110px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 52px;
  color: white;
}

.product-card h3 {
  font-size: 30px;
  margin-bottom: 22px;
  color: #333;
  font-weight: 700;
}

.product-card p {
  color: #666;
  font-size: 18px;
  line-height: 1.75;
  margin-bottom: 35px;
}

.product-specs {
  list-style: none;
}

.product-specs li {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  color: #777;
}

.product-specs li::before {
  content: '✓';
  width: 26px;
  height: 26px;
  background: #11998e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 16px;
  flex-shrink: 0;
}

/* 使用场景 */
.scenarios {
  padding: 160px 20px;
  background: #fff;
}

.scenarios-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.scenario-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 80px;
  flex-wrap: wrap;
}

.scenario-tab {
  padding: 16px 40px;
  border: 2px solid #e0e0e0;
  border-radius: 35px;
  background: #fff;
  color: #666;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.scenario-tab.active,
.scenario-tab:hover {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  border-color: transparent;
}

.scenario-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.scenario-detail {
  background: linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%);
  border-radius: 35px;
  padding: 55px 45px;
  transition: transform 0.3s;
}

.scenario-detail:hover {
  transform: translateY(-10px);
}

.scenario-detail h4 {
  font-size: 32px;
  margin-bottom: 22px;
  color: #333;
  font-weight: 700;
}

.scenario-detail p {
  color: #666;
  font-size: 18px;
  line-height: 1.75;
  margin-bottom: 30px;
}

.scenario-items {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.scenario-item {
  background: rgba(17, 153, 142, 0.1);
  color: #11998e;
  padding: 10px 20px;
  border-radius: 22px;
  font-size: 15px;
  font-weight: 500;
}

/* 技术架构 */
.architecture {
  padding: 160px 20px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
}

.arch-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.arch-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
}

.arch-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 50px 35px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s;
}

.arch-card:hover {
  transform: translateY(-12px);
  background: rgba(255, 255, 255, 0.2);
}

.arch-icon {
  font-size: 60px;
  margin-bottom: 28px;
}

.arch-card h4 {
  font-size: 26px;
  margin-bottom: 18px;
  font-weight: 700;
}

.arch-card p {
  font-size: 17px;
  line-height: 1.7;
  opacity: 0.9;
}

/* 数据展示 */
.data-section {
  padding: 160px 20px;
  background: #fff;
}

.data-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 55px;
  text-align: center;
}

.data-item h3 {
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 18px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.data-item p {
  font-size: 20px;
  color: #666;
  font-weight: 500;
}

/* 优势对比 */
.comparison {
  padding: 160px 20px;
  background: linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%);
}

.comparison-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.comparison-table {
  background: #fff;
  border-radius: 35px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 35px 50px;
  border-bottom: 1px solid #f0f0f0;
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row.header {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
}

.comparison-row.header h4 {
  font-size: 28px;
  font-weight: 700;
}

.comparison-cell {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
}

.comparison-cell.feature {
  font-weight: 600;
  color: #333;
}

.comparison-cell.traditional {
  color: #999;
}

.comparison-cell.smart {
  color: #11998e;
  font-weight: 600;
}

/* CTA区域 */
.cta {
  padding: 160px 20px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  text-align: center;
}

.cta-content {
  max-width: 1000px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 60px;
  margin-bottom: 35px;
  color: white;
  font-weight: 700;
}

.cta p {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 60px;
  line-height: 1.8;
}

.cta-box {
  display: flex;
  gap: 28px;
  max-width: 750px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cta-box input {
  flex: 1;
  min-width: 340px;
  padding: 28px 50px;
  border: none;
  border-radius: 48px;
  font-size: 19px;
  outline: none;
}

.cta-box button {
  background: #fff;
  color: #11998e;
  padding: 28px 60px;
  border: none;
  border-radius: 48px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s;
}

.cta-box button:hover {
  transform: translateY(-4px);
}

/* 页脚 */
.footer {
  background: #0a1f1a;
  color: white;
  padding: 110px 20px 80px;
}

.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 90px;
  margin-bottom: 90px;
}

.footer-brand h3 {
  font-size: 34px;
  margin-bottom: 40px;
  font-weight: 700;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.9;
  margin-bottom: 40px;
  font-size: 17px;
}

.footer-brand .social-links {
  display: flex;
  gap: 25px;
}

.footer-brand .social-links a {
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
  font-size: 26px;
}

.footer-brand .social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-col h4 {
  font-size: 26px;
  margin-bottom: 42px;
  font-weight: 600;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 24px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 17px;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 55px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenario-content {
    grid-template-columns: 1fr;
  }

  .arch-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .data-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-box {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .features-container {
    grid-template-columns: 1fr;
  }

  .footer-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero-content h1 {
    font-size: 48px;
  }

  .product-grid,
  .arch-grid,
  .data-grid {
    grid-template-columns: 1fr;
  }

  .footer-wrapper {
    grid-template-columns: 1fr;
  }

  .comparison-row {
    grid-template-columns: 1fr;
    padding: 25px;
  }
}
</style>
