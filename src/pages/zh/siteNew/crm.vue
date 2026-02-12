<template>
  <div class="crm-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span>💎</span>
            <span>智能CRM系统</span>
          </div>
          <h1>让客户管理<br /><span>更高效更智能</span></h1>
          <p>全方位客户关系管理解决方案，从线索到成交，全程数字化追踪。智能分析、精准营销、<br />高效协同，助力企业提升客户满意度与业绩增长。</p>
        </div>
      </div>
    </section>

    <!-- 客户管理流程 -->
    <section id="process" class="process-section">
      <div class="section-container">
        <div class="section-header">
          <h2>完整的客户管理流程</h2>
          <p>从线索获取到成交维护，全程数字化管理</p>
        </div>
        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step">
            <div class="step-icon">
              {{ step.icon }}
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能特点 -->
    <section id="features" class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>强大功能，全面覆盖</h2>
          <p>满足企业客户管理的各种需求</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in featuresList" :key="index" class="feature-card">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户数据看板 -->
    <section id="dashboard" class="dashboard-section">
      <div class="dashboard-container">
        <div class="section-header">
          <h2>实时数据看板</h2>
          <p>关键指标一目了然，掌握业务动态</p>
        </div>
        <div class="dashboard-grid">
          <div v-for="(dash, index) in dashboardData" :key="index" class="dash-card">
            <div class="dash-icon">
              {{ dash.icon }}
            </div>
            <div class="dash-value">
              {{ dash.value }}
            </div>
            <div class="dash-label">
              {{ dash.label }}
            </div>
            <div class="dash-trend">
              {{ dash.trend }}
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

// 流程步骤数据
const processSteps = ref([
  {
    icon: '🎯',
    title: '线索获取',
    desc: '多渠道收集潜在客户信息，自动录入系统，建立完整的客户画像'
  },
  {
    icon: '🔍',
    title: '客户分析',
    desc: '智能分析客户需求与意向，精准评分，优先跟进高价值客户'
  },
  {
    icon: '📞',
    title: '跟进转化',
    desc: '系统提醒跟进任务，记录沟通历史，促进客户快速转化成交'
  },
  {
    icon: '💼',
    title: '成交签约',
    desc: '在线合同签署，订单自动生成，财务流程无缝衔接'
  }
])

// 功能特点数据
const featuresList = ref([
  {
    icon: '🎯',
    title: '客户画像',
    desc: '360度全方位客户信息管理，建立详细客户档案，精准刻画客户特征，提升营销针对性。'
  },
  {
    icon: '📊',
    title: '销售漏斗',
    desc: '可视化的销售漏斗管理，实时监控销售进度，快速发现并解决销售过程中的问题。'
  },
  {
    icon: '📧',
    title: '邮件营销',
    desc: '支持邮件群发、自动跟进、打开率追踪等功能，提高营销效率，降低获客成本。'
  },
  {
    icon: '⏰',
    title: '智能提醒',
    desc: '系统自动提醒重要事项，包括跟进提醒、合同到期、生日关怀等，不错过任何机会。'
  },
  {
    icon: '📈',
    title: '数据分析',
    desc: '多维度的销售数据分析，生成可视化报表，为管理决策提供数据支持。'
  },
  {
    icon: '🔐',
    title: '权限管理',
    desc: '灵活的权限配置，不同角色拥有相应的数据查看和操作权限，保障数据安全。'
  }
])

// 数据看板数据
const dashboardData = ref([
  {
    icon: '👥',
    value: '12,580',
    label: '客户总数',
    trend: '↑ 较上月增长 23%'
  },
  {
    icon: '💰',
    value: '¥2.8亿',
    label: '年度销售额',
    trend: '↑ 较去年同期增长 45%'
  },
  {
    icon: '✅',
    value: '856',
    label: '本月成交',
    trend: '↑ 较上月增长 18%'
  },
  {
    icon: '📊',
    value: '92%',
    label: '客户满意度',
    trend: '↑ 较上季度提升 5%'
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
  background-color: #fff;
}

/* Hero Section - 分栏布局 */
.hero {
  background: linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%);
  padding: 100px 30px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
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
  color: #6366f1;
  padding: 10px 22px;
  border-radius: 28px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 28px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.1);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1e293b;
  font-weight: 800;
}

.hero h1 span {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
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
  cursor: pointer;
  display: inline-block;
}

.btn-primary-purple {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.25);
}

.btn-primary-purple:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(99, 102, 241, 0.35);
}

.btn-white {
  background: white;
  color: #6366f1;
  border: 2px solid #e0e7ff;
}

.btn-white:hover {
  border-color: #6366f1;
}

.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.crm-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.crm-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.crm-card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f1f5f9;
}

.customer-avatar {
  width: 55px;
  height: 55px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.customer-info h4 {
  font-size: 18px;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 5px;
}

.customer-info p {
  font-size: 13px;
  color: #64748b;
}

.crm-card-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.crm-stat-item {
  text-align: center;
  padding: 15px;
  background: #f8fafc;
  border-radius: 12px;
}

.crm-stat-value {
  font-size: 22px;
  font-weight: 800;
  color: #6366f1;
  margin-bottom: 3px;
}

.crm-stat-label {
  font-size: 12px;
  color: #64748b;
}

.crm-card-actions {
  display: flex;
  gap: 10px;
}

.crm-btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.crm-btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
}

.crm-btn-secondary {
  background: #f1f5f9;
  color: #475569;
}

.crm-activity {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #f1f5f9;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  color: #64748b;
}

.activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
}

/* 客户管理流程 */
.process-section {
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

.process-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 30px;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 45px;
  left: 12%;
  right: 12%;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
}

.process-step {
  text-align: center;
  flex: 1;
  position: relative;
}

.step-icon {
  width: 90px;
  height: 90px;
  background: white;
  border: 3px solid #6366f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0 auto 25px;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.process-step h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #1e293b;
  font-weight: 700;
}

.process-step p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
}

/* 功能特点 */
.features-section {
  padding: 100px 30px;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px 35px;
  border-radius: 18px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  border: 2px solid transparent;
}

.feature-card:hover {
  border-color: #6366f1;
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.12);
  transform: translateY(-5px);
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
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
}

.feature-card:nth-child(2) .feature-icon {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.feature-card:nth-child(3) .feature-icon {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
}

.feature-card:nth-child(4) .feature-icon {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.feature-card:nth-child(5) .feature-icon {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
}

.feature-card:nth-child(6) .feature-icon {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
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

/* 客户数据看板 */
.dashboard-section {
  padding: 100px 30px;
  background: white;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.dash-card {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  padding: 35px 30px;
  border-radius: 18px;
  color: white;
  transition: all 0.3s;
}

.dash-card:nth-child(2) {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
}

.dash-card:nth-child(3) {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.dash-card:nth-child(4) {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
}

.dash-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.dash-icon {
  font-size: 32px;
  margin-bottom: 15px;
  opacity: 0.9;
}

.dash-value {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 8px;
}

.dash-label {
  font-size: 15px;
  opacity: 0.9;
}

.dash-trend {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 14px;
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

.stat-item {
  text-align: center;
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 70%;
  background: rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 52px;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
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
  cursor: pointer;
}

.footer-links a:hover {
  color: #8b5cf6;
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

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item:not(:last-child)::after {
    display: none;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    flex-wrap: wrap;
  }

  .process-steps::before {
    display: none;
  }

  .process-step {
    flex: 1 1 calc(50% - 30px);
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .process-step {
    flex: 1 1 100%;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
