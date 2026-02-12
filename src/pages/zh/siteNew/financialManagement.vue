<template>
  <div class="finance-app">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span>💎</span>
            <span>智能财务管理系统</span>
          </div>
          <h1>让财务管理<br /><span>更智能更高效</span></h1>
          <p>全方位企业财务管理解决方案，从账务处理到财务分析，全程数字化管理。智能记账、自动报表、<br />实时监控，助力企业提升财务管理水平，降低运营成本。</p>
        </div>
      </div>
    </section>

    <!-- 功能模块 -->
    <section id="modules" class="modules-section">
      <div class="section-container">
        <div class="section-header">
          <h2>完整的功能模块</h2>
          <p>覆盖企业财务管理的各个环节</p>
        </div>
        <div class="modules-grid">
          <div v-for="(module, index) in modules" :key="index" class="module-card">
            <div class="module-icon">
              {{ module.icon }}
            </div>
            <h3>{{ module.title }}</h3>
            <p>{{ module.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="features" class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>核心优势</h2>
          <p>为什么选择我们的财务管理系统</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-item">
            <div class="feature-icon-wrapper">
              {{ feature.icon }}
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
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
// 功能模块数据
const modules = ref([
  { icon: '📝', title: '账务处理', desc: '智能记账、凭证管理、自动对账，简化日常账务操作' },
  { icon: '📊', title: '报表管理', desc: '资产负债表、利润表、现金流量表，一键生成' },
  { icon: '💳', title: '应收应付', desc: '应收账款、应付账款管理，实时跟踪款项状态' },
  { icon: '🏦', title: '资金管理', desc: '银行账户管理、资金流水、资金预测' },
  { icon: '🧾', title: '发票管理', desc: '发票开具、查验、归档，全流程电子化管理' },
  { icon: '📦', title: '库存核算', desc: '进销存管理、成本核算、库存盘点' },
  { icon: '👥', title: '薪酬管理', desc: '工资核算、个税申报、社保公积金管理' },
  { icon: '🔒', title: '权限控制', desc: '多级权限管理，确保财务数据安全' }
])

// 核心优势数据
const features = ref([
  {
    icon: '⚡',
    title: '智能自动化',
    desc: 'AI驱动的智能记账系统，自动识别票据、自动生成凭证、自动对账，大幅减少人工操作，提升工作效率。'
  },
  {
    icon: '🔒',
    title: '安全可靠',
    desc: '银行级数据加密技术，多重安全防护机制，定期数据备份，确保财务数据安全无虞。'
  },
  {
    icon: '📊',
    title: '实时分析',
    desc: '实时财务数据监控，多维度数据分析，可视化报表展示，帮助管理者快速了解企业财务状况。'
  },
  {
    icon: '📱',
    title: '移动办公',
    desc: '支持手机APP、微信小程序，随时随地查看财务数据、审批单据，移动办公更便捷。'
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
  color: #1e293b;
  background-color: #fafafa;
}

/* Hero Section - 左右分栏布局 */
.hero {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  padding: 90px 30px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -120px;
  right: -120px;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 70px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  padding-right: 20px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  color: #059669;
  padding: 10px 22px;
  border-radius: 28px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 28px;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.1);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1e293b;
  font-weight: 800;
}

.hero h1 span {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 35px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-lg {
  padding: 16px 42px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
}

.btn-primary-green {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(5, 150, 105, 0.25);
}

.btn-primary-green:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(5, 150, 105, 0.35);
}

.btn-white {
  background: white;
  color: #059669;
  border: 2px solid #d1fae5;
}

.btn-white:hover {
  border-color: #059669;
}

.hero-visual {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.finance-card {
  background: white;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.finance-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.finance-card.large {
  grid-column: span 2;
}

.finance-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.finance-title {
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
}

.finance-icon {
  font-size: 24px;
}

.finance-value {
  font-size: 36px;
  font-weight: 800;
  color: #059669;
  margin-bottom: 8px;
}

.finance-value.expense {
  color: #ef4444;
}

.finance-value.income {
  color: #059669;
}

.finance-label {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 15px;
}

.finance-trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 8px;
}

.finance-trend.up {
  background: #ecfdf5;
  color: #059669;
}

.finance-trend.down {
  background: #fef2f2;
  color: #ef4444;
}

.finance-list {
  margin-top: 15px;
}

.finance-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
}

.finance-item:last-child {
  border-bottom: none;
}

.finance-item-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.finance-item-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.finance-item-name {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.finance-item-date {
  font-size: 12px;
  color: #64748b;
}

.finance-item-amount {
  font-size: 15px;
  font-weight: 700;
}

.finance-item-amount.income {
  color: #059669;
}

.finance-item-amount.expense {
  color: #ef4444;
}

/* 功能模块 */
.modules-section {
  padding: 100px 30px;
  background: white;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-header h2 {
  font-size: 40px;
  margin-bottom: 18px;
  color: #1e293b;
  font-weight: 700;
}

.section-header p {
  font-size: 18px;
  color: #64748b;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.module-card {
  background: #fafafa;
  padding: 35px 25px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.module-card:hover {
  background: white;
  border-color: #059669;
  box-shadow: 0 15px 40px rgba(5, 150, 105, 0.12);
  transform: translateY(-5px);
}

.module-icon {
  width: 65px;
  height: 65px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto 20px;
}

.module-card:nth-child(1) .module-icon {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
}

.module-card:nth-child(2) .module-icon {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.module-card:nth-child(3) .module-icon {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.module-card:nth-child(4) .module-icon {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.module-card:nth-child(5) .module-icon {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
}

.module-card:nth-child(6) .module-icon {
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
}

.module-card:nth-child(7) .module-icon {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
}

.module-card:nth-child(8) .module-icon {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}

.module-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #1e293b;
  font-weight: 700;
}

.module-card p {
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
}

/* 核心优势 */
.features-section {
  padding: 100px 30px;
  background: linear-gradient(180deg, #fafafa 0%, #fff 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.feature-item {
  background: white;
  border-radius: 20px;
  padding: 45px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.feature-icon-wrapper {
  width: 75px;
  height: 75px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  flex-shrink: 0;
}

.feature-item:nth-child(1) .feature-icon-wrapper {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
}

.feature-item:nth-child(2) .feature-icon-wrapper {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.feature-item:nth-child(3) .feature-icon-wrapper {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.feature-item:nth-child(4) .feature-icon-wrapper {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.feature-content h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #1e293b;
  font-weight: 700;
}

.feature-content p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.8;
}

/* 数据统计 */
.stats-section {
  padding: 90px 30px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
}

.stat-card {
  text-align: center;
  padding: 35px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 52px;
  font-weight: 800;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.7);
}

/* CTA区域 */
.cta-section {
  padding: 100px 30px;
  background: white;
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-container h2 {
  font-size: 44px;
  margin-bottom: 20px;
  color: #1e293b;
  font-weight: 800;
}

.cta-container p {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.7;
}

/* 页脚 */
.footer {
  background: #1e293b;
  color: white;
  padding: 70px 30px 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand h3 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  font-size: 14px;
  margin-bottom: 20px;
}

.footer-links h4 {
  font-size: 17px;
  margin-bottom: 25px;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 14px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #10b981;
}

.footer-bottom {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
  }

  .hero-content {
    padding-right: 0;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-visual {
    justify-content: center;
  }

  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero-visual {
    grid-template-columns: 1fr;
  }

  .finance-card.large {
    grid-column: span 1;
  }

  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
