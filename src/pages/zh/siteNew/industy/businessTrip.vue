<template>
  <div class="travel-management">
    <section class="hero">
      <div class="hero-content">
        <h1>出差旅行</h1>
        <p>一站式差旅解决方案，从出差申请、行程规划到费用报销，全流程智能化管理，让每一次出行都高效便捷。</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 服务类型 -->
      <section id="services" class="services">
        <h2 class="section-title">
          服务类型
        </h2>
        <div class="service-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card">
            <div class="service-icon">
              {{ service.icon }}
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 出差流程 -->
      <section id="process" class="process">
        <h2 class="section-title">
          出差流程
        </h2>
        <div class="process-container">
          <div class="process-line" />
          <div class="process-steps">
            <div v-for="(step, index) in processSteps" :key="index" class="process-step">
              <div class="step-circle">
                {{ index + 1 }}
              </div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 热门目的地 -->
      <section id="destinations" class="destinations">
        <h2 class="section-title">
          热门目的地
        </h2>
        <div class="destination-grid">
          <div v-for="(dest, index) in destinations" :key="index" class="destination-card">
            <div class="destination-image">
              {{ dest.icon }}
            </div>
            <div class="destination-content">
              <h4>{{ dest.title }}</h4>
              <p>{{ dest.desc }}</p>
              <div class="destination-tags">
                <span v-for="(tag, tagIndex) in dest.tags" :key="tagIndex" class="destination-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 费用管理 -->
      <section id="expense" class="expense">
        <h3>费用管理</h3>
        <div class="expense-grid">
          <div v-for="(item, index) in expenseItems" :key="index" class="expense-item">
            <div class="expense-icon">
              {{ item.icon }}
            </div>
            <div class="expense-name">
              {{ item.title }}
            </div>
            <div class="expense-desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </section>

      <!-- 特色功能 -->
      <section id="features" class="features">
        <h2 class="section-title">
          特色功能
        </h2>
        <div class="feature-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-item">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <div class="feature-content">
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})
const services = [
  { icon: '✈️', title: '机票预订', desc: '全球航班实时查询，智能比价，快速预订，支持改签退票，让您的行程更加灵活。' },
  { icon: '🏨', title: '酒店住宿', desc: '精选优质酒店，覆盖全球主要城市，企业协议价，快速入住，享受舒适体验。' },
  { icon: '🚗', title: '用车服务', desc: '接送机、商务用车、自驾租赁，多种用车方案，满足不同出行需求。' },
  { icon: '🚄', title: '火车票', desc: '全国高铁动车票实时预订，支持抢票、改签、退票，出行更方便。' },
  { icon: '💳', title: '费用报销', desc: '智能化费用管理，电子发票自动识别，审批流程简化，报销更加快捷。' },
  { icon: '📋', title: '行程管理', desc: '完整行程规划，实时提醒，一键分享，让出差安排井井有条。' }
]

const processSteps = [
  { title: '出差申请', desc: '提交申请 · 审批流程' },
  { title: '行程预订', desc: '选择服务 · 确认订单' },
  { title: '出行执行', desc: '按计划出行 · 实时跟踪' },
  { title: '费用报销', desc: '提交票据 · 审批报销' }
]

const destinations = [
  {
    icon: '🗼',
    title: '北京',
    desc: '中国的首都，历史文化名城，现代化国际大都市',
    tags: ['故宫', '长城', '天安门']
  },
  {
    icon: '🌆',
    title: '上海',
    desc: '国际化大都市，金融中心，现代都市风光',
    tags: ['外滩', '东方明珠', '南京路']
  },
  {
    icon: '🏙️',
    title: '深圳',
    desc: '创新之都，科技前沿，充满活力的年轻城市',
    tags: ['科技园', '大梅沙', '世界之窗']
  },
  {
    icon: '🌸',
    title: '杭州',
    desc: '人间天堂，西湖美景，电子商务之都',
    tags: ['西湖', '灵隐寺', '千岛湖']
  }
]

const expenseItems = [
  { icon: '💰', title: '预算控制', desc: '设置出差预算，实时监控费用支出，有效控制成本' },
  { icon: '🧾', title: '票据管理', desc: '电子票据自动归档，支持OCR识别，快速录入系统' },
  { icon: '⚡', title: '快速报销', desc: '简化报销流程，缩短审批周期，提升员工满意度' }
]

const features = [
  {
    icon: '📱',
    title: '移动端支持',
    desc: '支持手机APP和小程序，随时随地管理出差，预订机票酒店，提交报销申请，让差旅管理更加便捷。'
  },
  {
    icon: '🔔',
    title: '智能提醒',
    desc: '行程变更、航班动态、酒店入住、费用超支等智能提醒，确保您不会错过任何重要信息。'
  },
  {
    icon: '📊',
    title: '数据分析',
    desc: '多维度数据分析，出差统计、费用分析、供应商评估，为企业管理决策提供数据支持。'
  },
  {
    icon: '🔒',
    title: '安全保障',
    desc: '企业级数据加密，权限分级管理，确保差旅数据安全，保护员工隐私信息。'
  }
]

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
  background-color: #f5f7fa;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 160px 20px 100px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 52px;
  margin-bottom: 25px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
}

.hero p {
  font-size: 22px;
  opacity: 0.95;
  max-width: 850px;
  margin: 0 auto 45px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.hero-btn {
  padding: 16px 45px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s;
}

.hero-btn.primary {
  background: white;
  color: #667eea;
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* 内容区域 */
.content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 30px;
}

/* 服务类型 */
.services {
  margin-bottom: 120px;
}

.section-title {
  text-align: center;
  font-size: 40px;
  margin-bottom: 70px;
  color: #333;
  position: relative;
  font-weight: 700;
}

.section-title::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 5px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.service-card {
  background: white;
  padding: 50px 35px;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 95px;
  height: 95px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 28px;
  font-size: 40px;
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.service-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.service-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
}

/* 出差流程 */
.process {
  margin-bottom: 120px;
}

.process-container {
  position: relative;
  padding: 60px 0;
}

.process-line {
  position: absolute;
  top: 50%;
  left: 100px;
  right: 100px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  z-index: 0;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.process-step {
  text-align: center;
  flex: 1;
}

.step-circle {
  width: 90px;
  height: 90px;
  background: white;
  border: 5px solid #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
  font-size: 36px;
  font-weight: bold;
  color: #667eea;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
  transition: all 0.3s;
}

.process-step:hover .step-circle {
  transform: scale(1.1);
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.process-step h4 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

.process-step p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* 热门目的地 */
.destinations {
  margin-bottom: 120px;
}

.destination-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.destination-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
}

.destination-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.destination-image {
  height: 180px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: white;
}

.destination-content {
  padding: 30px 25px;
}

.destination-content h4 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

.destination-content p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.destination-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.destination-tag {
  background: #f0f0f5;
  color: #667eea;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

/* 费用管理 */
.expense {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 90px 50px;
  border-radius: 25px;
  margin-bottom: 120px;
}

.expense h3 {
  font-size: 38px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.expense-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.expense-item {
  background: rgba(255, 255, 255, 0.95);
  padding: 45px 35px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s;
}

.expense-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.expense-icon {
  font-size: 55px;
  margin-bottom: 20px;
}

.expense-name {
  font-size: 22px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 12px;
}

.expense-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
}

/* 特色功能 */
.features {
  margin-bottom: 120px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.feature-item {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  display: flex;
  gap: 35px;
  align-items: flex-start;
}

.feature-item:hover {
  transform: translateX(10px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  flex-shrink: 0;
}

.feature-content h4 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #333;
  font-weight: 700;
}

.feature-content p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
}

/* 数据统计 */
.stats {
  background: white;
  padding: 90px 50px;
  text-align: center;
  margin-bottom: 120px;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}

.stat-item {
  position: relative;
}

.stat-number {
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(90deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 18px;
  color: #666;
  font-weight: 600;
}

/* 页脚 */
.footer {
  background: #2c3e50;
  color: white;
  padding: 70px 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 35px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 12px 28px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  transition: all 0.3s;
}

.footer-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer p {
  opacity: 0.7;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .destination-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .expense-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .nav-menu {
    display: none;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .process-line {
    display: none;
  }

  .process-steps {
    flex-direction: column;
    gap: 40px;
  }

  .destination-grid {
    grid-template-columns: 1fr;
  }

  .expense-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .feature-item {
    flex-direction: column;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
