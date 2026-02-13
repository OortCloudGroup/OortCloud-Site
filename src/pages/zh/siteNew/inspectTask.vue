<template>
  <div class="patrol-task-app">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-label">🚀 智能巡查管理系统</span>
          <h1>数字化巡查任务<br /><span class="highlight">让安全管理更高效</span></h1>
          <p>融合GPS定位、二维码扫描、AI智能识别技术，实现巡查任务智能分配、实时追踪、<br />数据统计，让每一次巡查都精准有效，保障企业安全运营。</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特性</h2>
          <p>全方位智能巡查管理，让安全管理更高效、更精准、更便捷</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-box">
            <div class="feature-icon-wrapper">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section id="workflow" class="workflow">
      <div class="workflow-container">
        <div class="workflow-header">
          <h2>巡查工作流程</h2>
          <p>简单高效的工作流程，让巡查管理井然有序</p>
        </div>
        <div class="workflow-steps">
          <div v-for="(step, index) in workflowSteps" :key="index" class="workflow-step">
            <div class="workflow-number">
              {{ index + 1 }}
            </div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
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
// 功能特性数据
const features = ref([
  {
    icon: '📋',
    title: '任务管理',
    desc: '灵活配置巡查任务，支持定时任务、临时任务，自动分配给巡查人员，确保巡查无遗漏。'
  },
  {
    icon: '📍',
    title: 'GPS定位',
    desc: '实时追踪巡查人员位置，记录巡查轨迹，确保巡查到位，杜绝虚假巡查。'
  },
  {
    icon: '📱',
    title: '扫码签到',
    desc: '二维码快速签到，拍照留证，确保巡查人员真实到达指定巡查点。'
  },
  {
    icon: '📷',
    title: '拍照上传',
    desc: '现场拍照记录问题，支持视频录制，实时上传至系统，便于后续处理。'
  },
  {
    icon: '🤖',
    title: 'AI识别',
    desc: '智能识别安全隐患，自动报警提醒，辅助巡查人员快速发现问题。'
  },
  {
    icon: '📊',
    title: '数据统计',
    desc: '自动生成巡查报告，多维度数据分析，为安全管理决策提供数据支撑。'
  },
  {
    icon: '🔔',
    title: '智能提醒',
    desc: '任务到期自动提醒，异常情况实时报警，确保重要事项及时处理。'
  },
  {
    icon: '📤',
    title: '离线模式',
    desc: '支持离线巡查，网络恢复后自动同步数据，保障巡查工作不受网络影响。'
  }
])

// 工作流程数据
const workflowSteps = ref([
  {
    title: '任务创建',
    desc: '管理员创建巡查任务，设置巡查点、时间要求、巡查人员'
  },
  {
    title: '任务分配',
    desc: '系统自动分配任务，巡查员接收通知，查看任务详情'
  },
  {
    title: '现场巡查',
    desc: '巡查员到达现场，扫码签到，拍照记录，上传数据'
  },
  {
    title: '问题处理',
    desc: '发现问题立即上报，系统自动通知相关负责人处理'
  },
  {
    title: '数据统计',
    desc: '系统自动生成巡查报告，统计分析，持续优化管理'
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
  color: #1f2937;
  background-color: #fafafa;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 0 30px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 70px;
  display: flex;
  align-items: center;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-symbol {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.logo-text {
  color: #1f2937;
  font-size: 22px;
  font-weight: 800;
}

.logo-text span {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-menu a {
  color: #4b5563;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-menu a:hover {
  color: #f59e0b;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -28px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-menu a:hover::after {
  transform: scaleX(1);
}

.nav-right {
  display: flex;
  gap: 12px;
  align-items: center;
}

.nav-btn {
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}

.nav-btn-text {
  color: #4b5563;
}

.nav-btn-text:hover {
  color: #f59e0b;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  color: white;
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
}

/* Hero Section */
.hero {
  padding: 140px 30px 100px;
  background: linear-gradient(135deg, #fffbeb 0%, #fef2f2 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 70px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  padding-right: 20px;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(239, 68, 68, 0.15) 100%);
  color: #f59e0b;
  padding: 8px 18px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 28px;
}

.hero h1 {
  font-size: 50px;
  line-height: 1.2;
  margin-bottom: 22px;
  color: #1f2937;
  font-weight: 900;
}

.hero h1 .highlight {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 35px;
  line-height: 1.8;
}

.hero-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 40px;
}

.hero-point {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #4b5563;
}

.hero-point-icon {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 16px 36px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(245, 158, 11, 0.4);
}

.hero-btn-outline {
  background: white;
  color: #4b5563;
  border: 2px solid #e5e7eb;
}

.hero-btn-outline:hover {
  border-color: #f59e0b;
  color: #f59e0b;
}

.hero-visual {
  position: relative;
}

.hero-dashboard {
  background: white;
  border-radius: 24px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.dashboard-header {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  padding: 20px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard-title {
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dashboard-badge {
  background: rgba(255, 255, 255, 0.25);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.dashboard-body {
  padding: 25px;
  background: #fafafa;
}

.task-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 25px;
}

.task-stat {
  background: white;
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
}

.task-stat:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.task-stat-number {
  font-size: 32px;
  font-weight: 800;
  color: #f59e0b;
  line-height: 1;
  margin-bottom: 8px;
}

.task-stat-label {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.task-list {
  background: white;
  border-radius: 14px;
  padding: 20px;
  border: 1px solid #f3f4f6;
}

.task-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f3f4f6;
}

.task-list-title {
  font-size: 15px;
  font-weight: 700;
  color: #1f2937;
}

.task-list-more {
  color: #f59e0b;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.task-item:hover {
  background: #fef3c7;
}

.task-item:last-child {
  margin-bottom: 0;
}

.task-item-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.task-item-content {
  flex: 1;
}

.task-item-title {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.task-item-info {
  font-size: 12px;
  color: #6b7280;
}

.task-item-status {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.task-item-status.pending {
  background: #fef3c7;
  color: #92400e;
}

.task-item-status.progress {
  background: #dbeafe;
  color: #1e40af;
}

.task-item-status.completed {
  background: #d1fae5;
  color: #065f46;
}

/* Features Section */
.features {
  padding: 100px 30px;
  background: white;
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 70px;
}

.features-header h2 {
  font-size: 40px;
  color: #1f2937;
  margin-bottom: 15px;
  font-weight: 900;
}

.features-header p {
  color: #6b7280;
  font-size: 17px;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.feature-box {
  background: #fafafa;
  border-radius: 18px;
  padding: 35px 28px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.feature-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-box:hover {
  background: white;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  transform: translateY(-8px);
}

.feature-box:hover::before {
  transform: scaleX(1);
}

.feature-icon-wrapper {
  width: 62px;
  height: 62px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  font-size: 28px;
}

.feature-box h3 {
  font-size: 19px;
  color: #1f2937;
  margin-bottom: 12px;
  font-weight: 800;
}

.feature-box p {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.7;
}

/* Workflow Section */
.workflow {
  padding: 100px 30px;
  background: linear-gradient(180deg, #fafafa 0%, white 100%);
}

.workflow-container {
  max-width: 1400px;
  margin: 0 auto;
}

.workflow-header {
  text-align: center;
  margin-bottom: 70px;
}

.workflow-header h2 {
  font-size: 40px;
  color: #1f2937;
  margin-bottom: 15px;
  font-weight: 900;
}

.workflow-header p {
  color: #6b7280;
  font-size: 17px;
  max-width: 600px;
  margin: 0 auto;
}

.workflow-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 30px;
}

.workflow-steps::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 80px;
  right: 80px;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  z-index: 0;
}

.workflow-step {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
}

.workflow-number {
  width: 85px;
  height: 85px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 36px;
  font-weight: 900;
  color: white;
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
  transition: all 0.3s;
}

.workflow-step:hover .workflow-number {
  transform: scale(1.1);
  box-shadow: 0 15px 40px rgba(245, 158, 11, 0.4);
}

.workflow-step h4 {
  font-size: 20px;
  color: #1f2937;
  margin-bottom: 10px;
  font-weight: 800;
}

.workflow-step p {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
}

/* Stats Section */
.stats {
  padding: 90px 30px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: -200px;
  left: -200px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.stats::after {
  content: '';
  position: absolute;
  bottom: -300px;
  right: -300px;
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
}

.stat-item {
  text-align: center;
  padding: 45px 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.stat-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 54px;
  font-weight: 900;
  color: white;
  line-height: 1;
  margin-bottom: 12px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 600;
}

/* CTA Section */
.cta {
  padding: 110px 30px;
  text-align: center;
  background: white;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
}

.cta-box {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 30px;
  padding: 75px 55px;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-box h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 18px;
  font-weight: 900;
}

.cta-box p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-bottom: 45px;
}

.cta-btn {
  display: inline-block;
  background: white;
  color: #f59e0b;
  padding: 18px 52px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  font-size: 17px;
  transition: all 0.3s;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Footer */
.footer {
  background: #1f2937;
  padding: 70px 30px 30px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 55px;
  margin-bottom: 55px;
}

.footer-brand .logo {
  margin-bottom: 20px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 22px;
}

.footer-brand .footer-info {
  display: flex;
  gap: 18px;
}

.footer-info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
}

.footer-links h4 {
  color: white;
  font-size: 16px;
  margin-bottom: 22px;
  font-weight: 700;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 13px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #f59e0b;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 28px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: #f59e0b;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    padding-right: 0;
  }

  .hero-points {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .workflow-steps::before {
    display: none;
  }

  .workflow-steps {
    flex-direction: column;
    align-items: center;
  }

  .workflow-step {
    margin-bottom: 40px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .nav-right {
    display: none;
  }

  .hero h1 {
    font-size: 34px;
  }

  .hero-points {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .task-stats {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    padding: 50px 30px;
  }

  .cta-box h2 {
    font-size: 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
