<template>
  <div class="attendance-page">
    <!-- Hero区域 -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <span class="label">🚀 智能无感考勤系统</span>
          <h1>无需接触 智能识别</h1>
          <p>基于AI人脸识别技术的无感考勤系统，员工无需停留，自然通行即可完成考勤。大幅提升通行效率，改善员工体验。</p>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="advantages" class="advantages">
      <div class="section-header">
        <h2>核心优势</h2>
        <p>领先的技术优势，打造真正智能便捷的考勤体验</p>
      </div>
      <div class="advantages-wrapper">
        <div v-for="(advantage, index) in advantages" :key="index" class="advantage-card">
          <div class="advantage-icon">
            {{ advantage.icon }}
          </div>
          <div class="advantage-content">
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.desc }}</p>
            <ul class="advantage-list">
              <li v-for="(item, i) in advantage.list" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能模块 -->
    <section id="modules" class="modules">
      <div class="section-header">
        <h2>功能模块</h2>
        <p>全方位功能覆盖，满足企业考勤管理的各类需求</p>
      </div>
      <div class="modules-container">
        <div class="modules-grid">
          <div v-for="(module, index) in modules" :key="index" class="module-box">
            <div class="module-icon">
              {{ module.icon }}
            </div>
            <h3>{{ module.title }}</h3>
            <p>{{ module.desc }}</p>
            <ul class="module-features">
              <li v-for="(feature, i) in module.features" :key="i">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作流程 -->
    <section id="workflow" class="workflow">
      <div class="section-header">
        <h2>工作流程</h2>
        <p>简洁高效的工作流程，从设置到使用全流程自动化</p>
      </div>
      <div class="workflow-wrapper">
        <div class="workflow-steps">
          <div v-for="(step, index) in workflowSteps" :key="index" class="workflow-step">
            <div class="step-number">
              {{ index + 1 }}
            </div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术特点 -->
    <section class="technology">
      <div class="section-header">
        <h2>技术特点</h2>
        <p>先进的技术架构，保障系统稳定可靠运行</p>
      </div>
      <div class="tech-container">
        <div class="tech-grid">
          <div v-for="(tech, index) in technologies" :key="index" class="tech-card">
            <div class="tech-icon">
              {{ tech.icon }}
            </div>
            <div class="tech-info">
              <h4>{{ tech.title }}</h4>
              <p>{{ tech.desc }}</p>
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

// 核心优势数据
const advantages = ref([
  {
    icon: '🤖',
    title: 'AI人脸识别',
    desc: '采用深度学习算法，精准识别员工面部特征，支持多人同时识别，识别准确率高达99.9%。',
    list: ['深度学习算法', '多人同时识别', '高准确率识别', '活体检测技术']
  },
  {
    icon: '⚡',
    title: '无感通行',
    desc: '员工无需停留，自然行走即可完成考勤，每分钟可处理超过100人次，大幅提升通行效率。',
    list: ['无需停留', '快速通行', '高并发处理', '自然交互']
  },
  {
    icon: '📊',
    title: '智能分析',
    desc: '自动生成考勤报表，多维度数据分析，支持异常预警，为HR管理提供数据支持。',
    list: ['自动报表生成', '多维度分析', '异常预警', '决策支持']
  },
  {
    icon: '🔒',
    title: '安全可靠',
    desc: '企业级数据加密，严格的权限管理，确保考勤数据安全，符合隐私保护法规要求。',
    list: ['数据加密存储', '权限管理', '隐私保护', '合规认证']
  }
])

// 功能模块数据
const modules = ref([
  {
    icon: '📹',
    title: '人脸识别',
    desc: '基于AI技术的人脸识别模块，支持活体检测，防止照片、视频等作弊行为。',
    features: ['活体检测', '多人识别', '快速比对', '特征提取']
  },
  {
    icon: '📍',
    title: '定位考勤',
    desc: '支持GPS、Wi-Fi、蓝牙等多种定位方式，实现外勤人员的精准定位考勤。',
    features: ['GPS定位', 'Wi-Fi定位', '蓝牙定位', '电子围栏']
  },
  {
    icon: '📱',
    title: '移动考勤',
    desc: '支持手机APP考勤，随时随地完成打卡，方便外勤人员和远程办公员工。',
    features: ['APP打卡', '远程办公', '外勤管理', '实时同步']
  },
  {
    icon: '📅',
    title: '排班管理',
    desc: '灵活的排班系统，支持多种班次设置，自动生成排班表，简化排班工作。',
    features: ['多种班次', '自动排班', '班次调整', '排班查询']
  },
  {
    icon: '📊',
    title: '考勤报表',
    desc: '自动生成各类考勤报表，支持导出Excel，方便HR进行工资核算和绩效管理。',
    features: ['日报表', '月报表', '年报表', '自定义报表']
  },
  {
    icon: '🔔',
    title: '异常提醒',
    desc: '实时监控考勤状态，自动识别迟到、早退、旷工等异常情况，及时提醒管理者。',
    features: ['迟到提醒', '早退提醒', '旷工提醒', '异常预警']
  }
])

// 工作流程数据
const workflowSteps = ref([
  { title: '设备安装', desc: '在出入口安装考勤设备，连接网络，完成基础配置' },
  { title: '员工注册', desc: '采集员工人脸信息，录入系统，建立员工档案' },
  { title: '规则设置', desc: '设置考勤规则、班次、排班表，配置考勤策略' },
  { title: '开始使用', desc: '员工自然通行，系统自动识别，完成考勤记录' },
  { title: '数据统计', desc: '自动生成报表，数据分析，异常预警，管理决策' }
])

// 技术特点
const technologies = ref([
  {
    icon: '⚙️',
    title: '分布式架构',
    desc: '采用分布式微服务架构，支持高并发访问，系统稳定性达99.99%，满足企业级应用需求。'
  },
  {
    icon: '🔐',
    title: '数据加密',
    desc: '端到端数据加密传输，本地存储加密，符合国家数据安全法规，保护企业和员工隐私。'
  },
  {
    icon: '📱',
    title: '多端适配',
    desc: '支持PC端、移动端、小程序等多端访问，数据实时同步，满足不同场景使用需求。'
  },
  {
    icon: '🧠',
    title: '智能算法',
    desc: '自主研发的人脸识别算法，不断迭代优化，适应不同光线、角度的识别场景。'
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
  background: linear-gradient(135deg, #e0f7fa 0%, #bbdefb 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -15%;
  right: -3%;
  width: 900px;
  height: 900px;
  background: rgba(0, 210, 255, 0.05);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -8%;
  left: 2%;
  width: 650px;
  height: 650px;
  background: rgba(58, 123, 213, 0.03);
  border-radius: 50%;
}

.hero-content {
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

.hero-text .label {
  display: inline-block;
  background: rgba(0, 210, 255, 0.15);
  color: #3a7bd5;
  padding: 14px 32px;
  border-radius: 35px;
  font-size: 16px;
  margin-bottom: 38px;
  font-weight: 600;
}

.hero-text h1 {
  font-size: 60px;
  margin-bottom: 32px;
  line-height: 1.1;
  font-weight: 800;
}

.hero-text p {
  font-size: 21px;
  opacity: 0.75;
  margin-bottom: 48px;
  line-height: 1.9;
}

.hero-buttons {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  color: white;
  padding: 20px 48px;
  border-radius: 38px;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 210, 255, 0.4);
}

.btn-glass {
  background: rgba(255, 255, 255, 0.6);
  color: #3a7bd5;
  padding: 20px 48px;
  border: 2px solid rgba(0, 210, 255, 0.3);
  border-radius: 38px;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  transition: background 0.3s, transform 0.3s;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-5px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.attendance-display {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(30px);
  border-radius: 35px;
  padding: 55px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.6);
}

.display-header {
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.display-header h4 {
  font-size: 26px;
  margin-bottom: 12px;
  font-weight: 700;
}

.display-header .time {
  font-size: 16px;
  color: #3a7bd5;
  font-weight: 500;
}

.attendance-info {
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  border-radius: 25px;
  padding: 35px;
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.info-status {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
}

.info-time {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 12px;
}

.info-name {
  font-size: 18px;
  opacity: 0.9;
}

.attendance-list {
  background: #f5f9fc;
  border-radius: 22px;
  padding: 28px;
}

.attendance-list h5 {
  font-size: 17px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
}

.record-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.record-item:last-child {
  border-bottom: none;
}

.record-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  font-size: 22px;
  color: white;
}

.record-detail {
  flex: 1;
}

.record-detail .name {
  font-size: 17px;
  font-weight: 500;
  color: #333;
}

.record-detail .dept {
  font-size: 13px;
  color: #999;
}

.record-time {
  font-size: 16px;
  font-weight: 600;
  color: #3a7bd5;
}

/* 核心优势 */
.advantages {
  padding: 150px 20px;
  background: #fff;
}

.section-header {
  text-align: center;
  max-width: 950px;
  margin: 0 auto 100px;
}

.section-header h2 {
  font-size: 52px;
  margin-bottom: 30px;
  color: #333;
  font-weight: 700;
}

.section-header p {
  font-size: 21px;
  color: #666;
  line-height: 1.8;
}

.advantages-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.advantage-card {
  background: linear-gradient(135deg, #f5f9fc 0%, #e8f4f8 100%);
  border-radius: 32px;
  padding: 50px 40px;
  display: flex;
  gap: 35px;
  align-items: flex-start;
  transition: transform 0.4s, box-shadow 0.4s;
}

.advantage-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
}

.advantage-icon {
  width: 110px;
  height: 110px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  flex-shrink: 0;
  box-shadow: 0 15px 40px rgba(0, 210, 255, 0.3);
}

.advantage-content h3 {
  font-size: 30px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 700;
}

.advantage-content p {
  color: #666;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 22px;
}

.advantage-list {
  list-style: none;
}

.advantage-list li {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: 16px;
  color: #777;
}

.advantage-list li::before {
  content: '✓';
  width: 24px;
  height: 24px;
  background: #00d2ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 14px;
  flex-shrink: 0;
}

/* 功能模块 */
.modules {
  padding: 150px 20px;
  background: linear-gradient(135deg, #f5f9fc 0%, #e8f4f8 100%);
}

.modules-container {
  max-width: 1400px;
  margin: 0 auto;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.module-box {
  background: #fff;
  border-radius: 32px;
  padding: 50px 40px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.module-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.module-box:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
}

.module-box:hover::before {
  transform: scaleX(1);
}

.module-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  font-size: 48px;
}

.module-box h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
}

.module-box p {
  color: #666;
  font-size: 17px;
  line-height: 1.75;
  margin-bottom: 30px;
}

.module-features {
  list-style: none;
}

.module-features li {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: 15px;
  color: #777;
}

.module-features li::before {
  content: '•';
  width: 12px;
  height: 12px;
  background: #00d2ff;
  border-radius: 50%;
  margin-right: 14px;
  flex-shrink: 0;
}

/* 工作流程 */
.workflow {
  padding: 150px 20px;
  background: #fff;
}

.workflow-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.workflow-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  gap: 40px;
}

.workflow-steps::before {
  content: '';
  position: absolute;
  top: 60px;
  left: 10%;
  right: 10%;
  height: 5px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
}

.workflow-step {
  text-align: center;
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 180px;
}

.step-number {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 48px;
  color: white;
  font-weight: 700;
  box-shadow: 0 20px 50px rgba(0, 210, 255, 0.3);
}

.workflow-step h4 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.workflow-step p {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
}

/* 应用场景 */
.scenarios {
  padding: 150px 20px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  color: white;
}

.scenarios-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.scenario-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
}

.scenario-item {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 45px 30px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s, background 0.3s;
}

.scenario-item:hover {
  transform: translateY(-12px);
  background: rgba(255, 255, 255, 0.2);
}

.scenario-icon {
  font-size: 60px;
  margin-bottom: 28px;
}

.scenario-item h4 {
  font-size: 26px;
  margin-bottom: 18px;
  font-weight: 700;
}

.scenario-item p {
  font-size: 16px;
  line-height: 1.75;
  opacity: 0.9;
}

/* 数据统计 */
.statistics {
  padding: 150px 20px;
  background: #fff;
}

.stats-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  text-align: center;
}

.stat-item h3 {
  font-size: 68px;
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-item p {
  font-size: 20px;
  color: #666;
  font-weight: 500;
}

/* 技术特点 */
.technology {
  padding: 150px 20px;
  background: #f5f9fc;
}

.tech-container {
  max-width: 1200px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 45px;
}

.tech-card {
  background: #fff;
  border-radius: 30px;
  padding: 50px 45px;
  display: flex;
  gap: 35px;
  align-items: flex-start;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s;
}

.tech-card:hover {
  transform: translateY(-8px);
}

.tech-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  flex-shrink: 0;
}

.tech-info h4 {
  font-size: 26px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.tech-info p {
  color: #666;
  font-size: 17px;
  line-height: 1.75;
}

/* CTA区域 */
.cta {
  padding: 150px 20px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  text-align: center;
}

.cta-content {
  max-width: 950px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 56px;
  margin-bottom: 30px;
  color: white;
  font-weight: 700;
}

.cta p {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 55px;
  line-height: 1.8;
}

.cta-form {
  display: flex;
  gap: 25px;
  max-width: 700px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cta-form input {
  flex: 1;
  min-width: 320px;
  padding: 26px 45px;
  border: none;
  border-radius: 45px;
  font-size: 18px;
  outline: none;
}

.cta-form button {
  background: #fff;
  color: #3a7bd5;
  padding: 26px 55px;
  border: none;
  border-radius: 45px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s;
}

.cta-form button:hover {
  transform: translateY(-3px);
}

/* 页脚 */
.footer {
  background: #0a1628;
  color: white;
  padding: 100px 20px 70px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 85px;
  margin-bottom: 80px;
}

.footer-brand h3 {
  font-size: 32px;
  margin-bottom: 35px;
  font-weight: 700;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.9;
  margin-bottom: 35px;
  font-size: 16px;
}

.footer-brand .social {
  display: flex;
  gap: 22px;
}

.footer-brand .social a {
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
  font-size: 24px;
}

.footer-brand .social a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-col h4 {
  font-size: 24px;
  margin-bottom: 38px;
  font-weight: 600;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 22px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 16px;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenario-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .advantages-wrapper {
    grid-template-columns: 1fr;
  }

  .workflow-steps::before {
    display: none;
  }

  .workflow-steps {
    flex-direction: column;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-items {
    display: none;
  }

  .hero-text h1 {
    font-size: 44px;
  }

  .modules-grid,
  .scenario-cards,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>
