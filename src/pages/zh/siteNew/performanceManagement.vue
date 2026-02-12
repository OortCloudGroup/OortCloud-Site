<template>
  <div class="performance-app">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <span>🎯</span>
              <span>智能绩效管理系统</span>
            </div>
            <h1>让绩效管理<br /><span>更科学更透明</span></h1>
            <p>基于OKR、KPI等多种评估模型，实现全员绩效数字化管理。智能评分、数据分析、<br />实时反馈，激发团队潜能，提升组织效能。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能特点 -->
    <section id="features" class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>核心功能特点</h2>
          <p>全方位的绩效管理解决方案，助力企业数字化转型</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in featureList" :key="index" class="feature-card">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 绩效评估模型 -->
    <section id="models" class="models-section">
      <div class="models-container">
        <div class="section-header">
          <h2>灵活的评估模型</h2>
          <p>支持多种主流评估方法，满足不同企业的管理需求</p>
        </div>
        <div class="models-grid">
          <div v-for="(model, index) in modelList" :key="index" class="model-card">
            <div class="model-header">
              <div class="model-icon">
                {{ model.icon }}
              </div>
              <h3>{{ model.title }}</h3>
            </div>
            <p>{{ model.desc }}</p>
            <ul class="model-features">
              <li v-for="(item, i) in model.features" :key="i">
                {{ item }}
              </li>
            </ul>
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
// 核心功能列表
const featureList = ref([
  {
    icon: '🎯',
    title: 'OKR目标管理',
    desc: '支持目标与关键结果管理，帮助企业聚焦战略目标，实现上下对齐，提升团队执行力。'
  },
  {
    icon: '📈',
    title: 'KPI指标追踪',
    desc: '自定义关键绩效指标，实时追踪完成情况，数据可视化展示，让绩效评估更客观。'
  },
  {
    icon: '⭐',
    title: '360度评估',
    desc: '支持多维度评估体系，包括自评、上级评价、同事互评、下属评价，全面客观反映员工表现。'
  },
  {
    icon: '🤝',
    title: '实时反馈',
    desc: '支持随时随地的即时反馈机制，促进沟通与成长，让员工及时了解自己的表现和改进方向。'
  },
  {
    icon: '📊',
    title: '智能分析',
    desc: 'AI驱动的数据分析，自动生成绩效报告，发现人才潜力，优化人才配置，辅助管理决策。'
  },
  {
    icon: '🔒',
    title: '权限管理',
    desc: '灵活的权限配置体系，确保数据安全与隐私保护，不同角色拥有相应的查看与操作权限。'
  }
])

// 评估模型列表
const modelList = ref([
  {
    icon: '🎯',
    title: 'OKR模型',
    desc: '目标与关键结果管理法，强调目标设定与结果导向，适合快速成长型企业，帮助团队聚焦核心目标，实现高效协作。',
    features: [
      '目标对齐，上下一致',
      '关键结果可量化',
      '季度跟踪与复盘',
      '透明公开的进度'
    ]
  },
  {
    icon: '📊',
    title: 'KPI模型',
    desc: '关键绩效指标管理法，以数据为核心，通过量化指标评估员工表现，适合传统企业及需要精确管控的组织。',
    features: [
      '量化指标，客观公正',
      '权重配置，灵活调整',
      '实时数据追踪',
      '自动评分计算'
    ]
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
  background-color: #f8fafc;
}

/* Hero Section - 仪表盘式布局 */
.hero {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  padding: 80px 30px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -150px;
  left: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-content {
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;
}

.hero-text {
  padding-right: 20px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  color: #059669;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 28px;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.1);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.2;
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

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 35px;
}

.hero-stat-item {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.hero-stat-number {
  font-size: 32px;
  font-weight: 800;
  color: #059669;
  margin-bottom: 5px;
}

.hero-stat-label {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
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

.hero-dashboard {
  background: white;
  border-radius: 24px;
  padding: 35px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f1f5f9;
}

.dashboard-title h3 {
  font-size: 22px;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 5px;
}

.dashboard-title p {
  font-size: 14px;
  color: #64748b;
}

.dashboard-actions {
  display: flex;
  gap: 10px;
}

.dashboard-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.dashboard-btn-primary {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
}

.dashboard-btn-secondary {
  background: #f1f5f9;
  color: #475569;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.dashboard-card {
  background: #f8fafc;
  padding: 25px;
  border-radius: 16px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
}

.card-trend {
  font-size: 13px;
  font-weight: 600;
}

.card-trend.up {
  color: #059669;
}

.card-trend.down {
  color: #ef4444;
}

.score-display {
  display: flex;
  align-items: center;
  gap: 15px;
}

.score-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: conic-gradient(#059669 0deg 288deg, #e2e8f0 288deg 360deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.score-inner {
  width: 55px;
  height: 55px;
  background: #f8fafc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: #059669;
}

.score-info h4 {
  font-size: 24px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 5px;
}

.score-info p {
  font-size: 13px;
  color: #64748b;
}

.progress-section {
  margin-top: 20px;
}

.progress-item {
  margin-bottom: 15px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #475569;
  margin-bottom: 8px;
}

.progress-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s;
}

.progress-fill.green {
  background: linear-gradient(90deg, #059669, #10b981);
}

.progress-fill.blue {
  background: linear-gradient(90deg, #3b82f6, #6366f1);
}

.progress-fill.orange {
  background: linear-gradient(90deg, #f97316, #fbbf24);
}

/* 核心功能 */
.features-section {
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: #fafafa;
  padding: 40px 35px;
  border-radius: 18px;
  transition: all 0.3s;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #059669, #10b981);
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover {
  background: white;
  border-color: #059669;
  box-shadow: 0 15px 40px rgba(5, 150, 105, 0.12);
  transform: translateY(-5px);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 25px;
}

.feature-card:nth-child(1) .feature-icon {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
}

.feature-card:nth-child(2) .feature-icon {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.feature-card:nth-child(3) .feature-icon {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.feature-card:nth-child(4) .feature-icon {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.feature-card:nth-child(5) .feature-icon {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
}

.feature-card:nth-child(6) .feature-icon {
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1e293b;
  font-weight: 700;
}

.feature-card p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.7;
}

/* 绩效评估模型 */
.models-section {
  padding: 100px 30px;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
}

.models-container {
  max-width: 1200px;
  margin: 0 auto;
}

.models-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.model-card {
  background: white;
  border-radius: 20px;
  padding: 45px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.model-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.model-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.model-icon {
  width: 65px;
  height: 65px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.model-card:nth-child(1) .model-icon {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
}

.model-card:nth-child(2) .model-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
}

.model-header h3 {
  font-size: 26px;
  color: #1e293b;
  font-weight: 700;
}

.model-card p {
  color: #64748b;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.model-features {
  list-style: none;
}

.model-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  font-size: 15px;
  color: #475569;
}

.model-features li::before {
  content: '✓';
  color: #059669;
  font-weight: 700;
  font-size: 18px;
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
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-text {
    padding-right: 0;
    text-align: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .models-grid {
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

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
