<template>
  <div class="finance-page">
    <!-- Hero区域 -->
    <section class="hero">
      <div class="hero-wrapper">
        <div class="hero-info">
          <span class="label">💰 智能财务管理平台</span>
          <h1>数字化财务 智慧化决策</h1>
          <p>一体化财务管理系统，从会计核算到财务分析，全流程数字化。让财务管理更精准，让决策更有依据。</p>
        </div>
      </div>
    </section>

    <!-- 核心功能 -->
    <section id="features" class="features">
      <div class="section-title">
        <h2>核心功能模块</h2>
        <p>从会计核算到财务分析，全流程覆盖企业财务管理的各个环节</p>
      </div>
      <div class="features-wrapper">
        <div v-for="(feature, index) in coreFeatures" :key="index" class="feature-block">
          <div class="feature-graphic">
            {{ feature.icon }}
          </div>
          <div class="feature-detail">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <ul class="feature-list">
              <li v-for="(point, i) in feature.points" :key="i">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 解决方案 -->
    <section id="solutions" class="solutions">
      <div class="section-title">
        <h2>行业解决方案</h2>
        <p>针对不同行业特点，提供专业的财务管理解决方案</p>
      </div>
      <div class="solutions-grid">
        <div v-for="(solution, index) in industrySolutions" :key="index" class="solution-card">
          <div class="solution-icon">
            {{ solution.icon }}
          </div>
          <h3>{{ solution.title }}</h3>
          <p>{{ solution.description }}</p>
          <ul class="solution-points">
            <li v-for="(point, i) in solution.points" :key="i">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 行业应用 -->
    <section id="industries" class="industries">
      <div class="section-title">
        <h2>应用场景</h2>
        <p>覆盖各行各业，满足不同企业的财务管理需求</p>
      </div>
      <div class="industries-wrapper">
        <div class="industry-grid">
          <div v-for="(industry, index) in industryCards" :key="index" class="industry-card">
            <h4>{{ industry.title }}</h4>
            <p>{{ industry.description }}</p>
            <div class="industry-tags">
              <span v-for="(tag, i) in industry.tags" :key="i" class="industry-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})

// 核心功能数据
const coreFeatures = reactive([
  {
    icon: '📊',
    title: '会计核算',
    description: '支持多币种、多账套的会计核算系统，自动生成凭证、账簿、报表，符合会计准则，确保账务准确合规。',
    points: ['多账套管理', '智能凭证生成', '自动结账', '账簿自动生成', '报表一键导出']
  },
  {
    icon: '💳',
    title: '应收应付',
    description: '全面的应收应付管理，支持发票管理、对账核销、账龄分析，帮助企业优化资金流转，降低财务风险。',
    points: ['发票管理', '对账核销', '账龄分析', '自动提醒', '资金预测']
  },
  {
    icon: '📈',
    title: '财务分析',
    description: '智能化的财务分析工具，提供多维度数据可视化，自动生成分析报告，为管理层决策提供有力支持。',
    points: ['利润分析', '成本分析', '现金流分析', '预算对比', '趋势预测']
  }
])

// 行业解决方案数据
const industrySolutions = reactive([
  {
    icon: '🏢',
    title: '企业财务',
    description: '面向大中型企业的全流程财务管理，支持集团化管控、多组织协同，满足复杂的财务核算需求。',
    points: ['集团管控', '多组织协同', '合并报表', '预算管理']
  },
  {
    icon: '🛒',
    title: '电商财务',
    description: '专为电商企业设计，支持多平台订单自动对账、佣金结算、仓储成本核算，提升财务处理效率。',
    points: ['多平台对账', '佣金结算', '仓储核算', '退款管理']
  },
  {
    icon: '🏗️',
    title: '项目财务',
    description: '面向项目型企业的财务管理，支持项目成本核算、进度跟踪、盈利分析，实现精细化项目管理。',
    points: ['项目核算', '成本控制', '进度跟踪', '盈利分析']
  },
  {
    icon: '🏥',
    title: '医疗财务',
    description: '专为医疗机构设计，支持医保结算、药品管理、医疗收入核算，符合医疗行业财务规范。',
    points: ['医保结算', '药品管理', '收入核算', '成本分摊']
  },
  {
    icon: '🏭',
    title: '制造财务',
    description: '面向制造企业的财务管理，支持生产成本核算、库存管理、销售分析，助力制造业数字化转型。',
    points: ['成本核算', '库存管理', '销售分析', '生产统计']
  },
  {
    icon: '🎓',
    title: '教育财务',
    description: '专为教育机构设计，支持学费管理、教师薪资、校园采购，满足教育行业特殊财务需求。',
    points: ['学费管理', '薪资核算', '采购管理', '资产追踪']
  }
])

// 行业卡片数据
const industryCards = reactive([
  {
    title: '初创企业',
    description: '轻量级财务管理，快速上手，低成本运营。支持基础会计核算、费用管理、报表生成，帮助初创企业规范财务流程。',
    tags: ['快速部署', '低成本', '易上手']
  },
  {
    title: '中小企业',
    description: '全面的财务管理功能，支持多部门协作、预算管理、财务分析，助力中小企业提升财务管理水平。',
    tags: ['功能全面', '部门协作', '预算管理']
  },
  {
    title: '大型集团',
    description: '集团化财务管理，支持多组织管控、合并报表、资金集中管理，实现集团财务的一体化管理。',
    tags: ['集团管控', '合并报表', '资金管理']
  },
  {
    title: '上市公司',
    description: '符合上市公司财务规范，支持审计追溯、信息披露、合规管理，确保财务数据的准确性和合规性。',
    tags: ['审计追溯', '信息披露', '合规管理']
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
.hero {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 680px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -25%;
  right: -8%;
  width: 750px;
  height: 750px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -15%;
  left: -3%;
  width: 550px;
  height: 550px;
  background: rgba(118, 75, 162, 0.05);
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

.hero-info {
  color: #333;
  text-align: center;
  max-width: 800px;
}

.hero-info .label {
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 10px 28px;
  border-radius: 30px;
  font-size: 20px;
  margin-bottom: 32px;
  font-weight: 600;
}

.hero-info h1 {
  font-size: 58px;
  margin-bottom: 28px;
  line-height: 1.15;
  font-weight: 800;
}

.hero-info p {
  font-size: 20px;
  opacity: 0.75;
  margin-bottom: 40px;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 18px 42px;
  border-radius: 35px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: white;
  color: #667eea;
  padding: 18px 42px;
  border: 2px solid #667eea;
  border-radius: 35px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: background 0.3s, transform 0.3s;
}

.btn-secondary:hover {
  background: rgba(102, 126, 234, 0.05);
  transform: translateY(-4px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.finance-panel {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 45px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  color: #333;
}

.panel-header h4 {
  font-size: 22px;
  font-weight: 700;
}

.panel-header .period {
  font-size: 14px;
  color: #667eea;
  font-weight: 500;
}

.finance-overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin-bottom: 32px;
}

.overview-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 18px;
  padding: 25px;
  color: white;
}

.overview-item:nth-child(2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.overview-item:nth-child(3) {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.overview-item:nth-child(4) {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.overview-item h5 {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 12px;
}

.overview-item .amount {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}

.overview-item .change {
  font-size: 13px;
  opacity: 0.85;
}

.transaction-list {
  background: #f5f7fa;
  border-radius: 18px;
  padding: 25px;
  padding: 25px;
}

.transaction-list h5 {
  font-size: 16px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 600;
}

.transaction-item {
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.transaction-item:last-child {
  border-bottom: none;
}

.trans-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  font-size: 20px;
  color: white;
}

.trans-info {
  flex: 1;
}

.trans-info .name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.trans-info .date {
  font-size: 13px;
  color: #999;
}

.trans-amount {
  font-size: 18px;
  font-weight: 600;
  color: #43e97b;
}

.trans-amount.expense {
  color: #f5576c;
}

/* 核心功能 */
.features {
  padding: 130px 20px;
  background: #fff;
}

.section-title {
  text-align: center;
  max-width: 850px;
  margin: 0 auto 80px;
}

.section-title h2 {
  font-size: 48px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 700;
}

.section-title p {
  font-size: 19px;
  color: #666;
  line-height: 1.8;
}

.features-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.feature-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
  margin-bottom: 130px;
}

.feature-block:nth-child(even) {
  direction: rtl;
}

.feature-block:nth-child(even) .feature-detail {
  direction: ltr;
}

.feature-graphic {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 30px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 100px;
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.25);
}

.feature-detail h3 {
  font-size: 38px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 700;
}

.feature-detail p {
  font-size: 18px;
  color: #666;
  line-height: 1.9;
  margin-bottom: 35px;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  color: #555;
}

.feature-list li::before {
  content: '✓';
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 15px;
  flex-shrink: 0;
}

/* 解决方案 */
.solutions {
  padding: 130px 20px;
  background: #f5f7fa;
}

.solutions-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.solution-card {
  background: #fff;
  border-radius: 28px;
  padding: 45px 35px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.solution-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
}

.solution-card:hover::before {
  transform: scaleX(1);
}

.solution-icon {
  width: 95px;
  height: 95px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 45px;
}

.solution-card h3 {
  font-size: 26px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 700;
}

.solution-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 28px;
}

.solution-points {
  list-style: none;
}

.solution-points li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 15px;
  color: #777;
}

.solution-points li::before {
  content: '•';
  width: 10px;
  height: 10px;
  background: #667eea;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
}

/* 行业应用 */
.industries {
  padding: 130px 20px;
  background: #fff;
}

.industries-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.industry-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.industry-tab {
  padding: 14px 32px;
  border: 2px solid #e0e0e0;
  border-radius: 30px;
  background: #fff;
  color: #666;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.industry-tab.active,
.industry-tab:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.industry-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 28px;
  padding: 50px 40px;
  transition: transform 0.3s;
}

.industry-card:hover {
  transform: translateY(-8px);
}

.industry-card h4 {
  font-size: 28px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 700;
}

.industry-card p {
  color: #666;
  font-size: 17px;
  line-height: 1.75;
  margin-bottom: 25px;
}

.industry-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.industry-tag {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

/* 数据展示 */
.stats-section {
  padding: 130px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stats-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item h3 {
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 12px;
}

.stat-item p {
  font-size: 18px;
  opacity: 0.9;
  font-weight: 500;
}

/* 合作伙伴 */
.partners {
  padding: 100px 20px;
  background: #fff;
}

.partners-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.partners-logos {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  align-items: center;
}

.partner-logo {
  background: #f5f7fa;
  border-radius: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #667eea;
  transition: transform 0.3s;
}

.partner-logo:hover {
  transform: scale(1.05);
}

/* CTA区域 */
.cta-section {
  padding: 130px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
}

.cta-content {
  max-width: 850px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 50px;
  margin-bottom: 25px;
  color: white;
  font-weight: 700;
}

.cta-content p {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 45px;
  line-height: 1.8;
}

.cta-box {
  display: flex;
  gap: 20px;
  max-width: 650px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cta-box input {
  flex: 1;
  min-width: 280px;
  padding: 22px 35px;
  border: none;
  border-radius: 40px;
  font-size: 17px;
  outline: none;
}

.cta-box button {
  background: #fff;
  color: #667eea;
  padding: 22px 45px;
  border: none;
  border-radius: 40px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s;
}

.cta-box button:hover {
  transform: translateY(-3px);
}

.cta-box button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: white;
  padding: 80px 20px 50px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 70px;
  margin-bottom: 65px;
}

.footer-brand h3 {
  font-size: 28px;
  margin-bottom: 28px;
  font-weight: 700;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.9;
  margin-bottom: 28px;
  font-size: 15px;
}

.footer-brand .social {
  display: flex;
  gap: 18px;
}

.footer-brand .social a {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
  font-size: 20px;
}

.footer-brand .social a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-col h4 {
  font-size: 20px;
  margin-bottom: 32px;
  font-weight: 600;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 18px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 15px;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .solutions-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .partners-logos {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .feature-block {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .feature-block:nth-child(even) {
    direction: ltr;
  }

  .industry-grid {
    grid-template-columns: 1fr;
  }

  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-info h1 {
    font-size: 42px;
  }

  .solutions-grid,
  .stats-container,
  .partners-logos {
    grid-template-columns: 1fr;
  }

  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>
