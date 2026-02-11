<template>
  <div class="sales-page">
    <section class="banner">
      <div class="banner-content">
        <div class="banner-text">
          <span class="tag">🚀 智能销售管理系统</span>
          <h1>驱动销售增长<br />赋能业务发展</h1>
          <p>全方位的销售管理解决方案，帮助您优化销售流程、提升团队效率、实现业绩增长。从线索管理到成交分析，让每一个销售机会都不被遗漏。</p>
        </div>
        <div class="banner-visual">
          <div class="dashboard">
            <div class="dashboard-header">
              <div>
                <h4 style="margin-bottom: 5px;">
                  本月销售额
                </h4>
                <span>销售数据总览</span>
              </div>
              <div>
                <span>↑ 32.5%</span>
              </div>
            </div>
            <div class="dashboard-stats">
              <div class="stat-card">
                <h4>总成交额</h4>
                <div class="value">
                  ¥ 2.8M
                </div>
                <div class="trend up">
                  ↑ 28%
                </div>
              </div>
              <div class="stat-card">
                <h4>新增客户</h4>
                <div class="value">
                  156
                </div>
                <div class="trend up">
                  ↑ 42%
                </div>
              </div>
              <div class="stat-card">
                <h4>成交订单</h4>
                <div class="value">
                  89
                </div>
                <div class="trend up">
                  ↑ 35%
                </div>
              </div>
              <div class="stat-card">
                <h4>转化率</h4>
                <div class="value">
                  57%
                </div>
                <div class="trend up">
                  ↑ 15%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="advantages" class="advantages">
      <div class="section-header">
        <h2>核心功能特点</h2>
        <p>我们专注于为企业提供高效、智能的销售管理解决方案，帮助您在激烈的市场竞争中脱颖而出</p>
      </div>
      <div class="advantages-grid">
        <div v-for="(item, index) in advantageList" :key="index" class="advantage-card">
          <div class="advantage-icon">
            {{ item.icon }}
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 功能展示 -->
    <section id="features" class="features">
      <div class="section-header">
        <h2>强大功能，助力销售</h2>
        <p>丰富的功能模块，覆盖销售全流程，让销售管理变得简单高效</p>
      </div>
      <div class="feature-tabs">
        <div
          v-for="tab in featureTabs"
          :key="tab.key"
          class="feature-tab"
          :class="{ active: activeTab === tab.key }"
          @click="switchTab(tab.key)"
        >
          {{ tab.name }}
        </div>
      </div>
      <div class="feature-content">
        <div class="feature-visual">
          📈
        </div>
        <div class="feature-text">
          <h3>{{ activeFeature.title }}</h3>
          <p>{{ activeFeature.desc }}</p>
          <ul class="feature-list">
            <li v-for="(item, index) in activeFeature.list" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})
// 核心优势列表
const advantageList = reactive([
  { icon: '🎯', title: '精准线索管理', desc: '智能分配线索，自动跟进提醒，确保每一个销售机会都能得到及时处理，提高转化率' },
  { icon: '📊', title: '实时数据分析', desc: '多维度销售数据可视化，实时掌握销售动态，为决策提供强有力的数据支持' },
  { icon: '🤝', title: '团队协同办公', desc: '支持多人协作，信息实时共享，让销售团队高效配合，提升整体业绩' },
  { icon: '🔔', title: '智能提醒系统', desc: '自动化的任务提醒和跟进通知，确保重要事项不被遗漏，让销售更加高效' },
  { icon: '📱', title: '移动端支持', desc: '随时随地访问系统，支持手机、平板等多端设备，让销售工作不受地域限制' },
  { icon: '🔒', title: '数据安全保障', desc: '企业级安全防护，数据加密存储，严格的权限管理，确保客户信息安全' },
  { icon: '⚡', title: '快速部署上线', desc: '云端SaaS模式，无需复杂配置，快速部署使用，让您的销售团队即刻开始工作' },
  { icon: '🎨', title: '个性化定制', desc: '支持自定义字段、工作流程和报表，满足不同企业的个性化需求' }
])

// 功能标签数据
const featureTabs = reactive([
  { key: 'clue', name: '线索管理' },
  { key: 'customer', name: '客户管理' },
  { key: 'opportunity', name: '销售机会' },
  { key: 'contract', name: '合同管理' },
  { key: 'report', name: '报表分析' }
])

// 功能详情数据
const featureDetails = reactive({
  clue: {
    title: '全流程线索管理',
    desc: '从线索获取到转化成交，提供完整的线索生命周期管理。支持多渠道线索导入、智能分配、自动跟进、转化追踪等功能，帮助您最大化每一个线索的价值。',
    list: [
      '多渠道线索自动导入与整合',
      '智能线索分配规则',
      '自动化跟进提醒',
      '线索转化漏斗分析',
      '线索质量评分系统'
    ]
  },
  customer: {
    title: '全方位客户管理',
    desc: '建立完整的客户档案，记录客户全生命周期信息，支持客户分类、标签管理、跟进记录等功能，深度挖掘客户价值。',
    list: [
      '360°客户视图',
      '客户标签与分类管理',
      '跟进记录自动同步',
      '客户分层运营策略',
      '客户流失预警提醒'
    ]
  },
  opportunity: {
    title: '销售机会管理',
    desc: '精细化管理销售机会，从初步接触到最终成交，全程跟踪销售进度，精准预测销售业绩。',
    list: [
      '销售漏斗可视化',
      '赢率分析与预测',
      '销售阶段自动推进',
      '竞争对手分析',
      '销售活动计划制定'
    ]
  },
  contract: {
    title: '智能合同管理',
    desc: '全流程合同管理，从模板创建、在线签署到履约跟踪，实现合同数字化管理，降低风险。',
    list: [
      '合同模板库管理',
      '电子签章集成',
      '合同审批流程',
      '履约进度跟踪',
      '合同到期提醒'
    ]
  },
  report: {
    title: '多维度报表分析',
    desc: '自定义报表模板，实时生成销售数据报表，支持多维度分析，为管理层决策提供数据支撑。',
    list: [
      '销售业绩报表',
      '团队效率分析',
      '客户价值分析',
      '线索转化分析',
      '自定义报表生成'
    ]
  }
})

// 激活的标签
const activeTab = ref('clue')
// 激活的功能详情
const activeFeature = ref(featureDetails.clue)

// 切换标签方法
const switchTab = (tabKey) => {
  activeTab.value = tabKey
  activeFeature.value = featureDetails[tabKey]
}

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
  background-color: #f8f9fc;
}

/* Banner区域 */
.banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.banner::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.banner-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.banner-text {
  color: white;
}

.banner-text .tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 25px;
  backdrop-filter: blur(10px);
}

.banner-text h1 {
  font-size: 56px;
  margin-bottom: 25px;
  line-height: 1.2;
  font-weight: 700;
}

.banner-text p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 35px;
  line-height: 1.8;
}

.banner-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: #667eea;
  padding: 15px 35px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 15px 35px;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.3s, transform 0.3s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.banner-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-visual .dashboard {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  color: white;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  color: white;
}

.stat-card h4 {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 10px;
}

.stat-card .value {
  font-size: 32px;
  font-weight: 700;
}

.stat-card .trend {
  font-size: 14px;
  opacity: 0.8;
  margin-top: 5px;
}

.trend.up {
  color: #4ade80;
}

/* 核心优势 */
.advantages {
  padding: 100px 20px;
  background: #ffffff;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #333;
}

.section-header p {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
}

.advantages-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.advantage-card {
  background: #f8f9fc;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: white;
}

.advantage-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 40px;
}

.advantage-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
}

.advantage-card p {
  color: #666;
  font-size: 15px;
  line-height: 1.7;
}

/* 功能展示 */
.features {
  padding: 100px 20px;
  background: #f8f9fc;
}

.feature-tabs {
  max-width: 1000px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.feature-tab {
  padding: 15px 30px;
  border: 2px solid #e8e8e8;
  border-radius: 30px;
  background: white;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.feature-tab.active,
.feature-tab:hover {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-color: transparent;
}

.feature-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-visual {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 80px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.feature-text h3 {
  font-size: 36px;
  margin-bottom: 25px;
  color: #333;
}

.feature-text p {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
  color: #555;
}

.feature-list li::before {
  content: '✓';
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 15px;
  flex-shrink: 0;
}

/* 客户案例 */
.cases {
  padding: 100px 20px;
  background: #ffffff;
}

.cases-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.case-card {
  background: #f8f9fc;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.case-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: white;
}

.case-content {
  padding: 30px;
}

.case-content h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
}

.case-content p {
  color: #666;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.case-result {
  display: flex;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #e8e8e8;
}

.result-item h4 {
  font-size: 24px;
  color: #f5576c;
  font-weight: 700;
}

.result-item span {
  font-size: 14px;
  color: #666;
}

/* 数据展示 */
.data-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.data-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  text-align: center;
}

.data-item h3 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 10px;
}

.data-item p {
  font-size: 18px;
  opacity: 0.9;
}

/* CTA区域 */
.cta-section {
  padding: 100px 20px;
  background: #ffffff;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #333;
}

.cta-content p {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-form {
  display: flex;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cta-form input {
  flex: 1;
  min-width: 250px;
  padding: 18px 25px;
  border: 2px solid #e8e8e8;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.cta-form input:focus {
  border-color: #f5576c;
}

.cta-form button {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 18px 40px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(245, 87, 108, 0.3);
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: white;
  padding: 60px 20px 30px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 50px;
}

.footer-brand h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 20px;
}

.footer-brand .social-icons {
  display: flex;
  gap: 15px;
}

.footer-brand .social-icons a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
}

.footer-brand .social-icons a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-column h4 {
  font-size: 18px;
  margin-bottom: 25px;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 15px;
}

.footer-column a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .data-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .banner-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .banner-buttons {
    justify-content: center;
  }

  .feature-content {
    grid-template-columns: 1fr;
  }

  .feature-visual {
    order: -1;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .banner-text h1 {
    font-size: 36px;
  }

  .advantages-grid,
  .cases-grid {
    grid-template-columns: 1fr;
  }

  .data-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
