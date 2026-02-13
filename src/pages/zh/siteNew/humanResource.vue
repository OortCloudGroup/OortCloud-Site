<template>
  <div class="hr-system">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>人力资源管理<br /><span class="gradient">重新定义人才管理</span></h1>
          <p>融合智能招聘、绩效管理、薪酬核算、培训发展等功能，打造全生命周期人力<br />资源管理平台，让HR工作更高效，让员工成长更清晰。</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特色</h2>
          <p>全方位人力资源管理解决方案，让每一个HR环节都智能化</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
            <div class="feature-icon-box">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modules Section -->
    <section id="modules" class="modules">
      <div class="modules-container">
        <div class="modules-header">
          <h2>模块中心</h2>
          <p>全面覆盖人力资源管理各个场景，满足企业不同发展阶段的需求</p>
        </div>
        <div class="modules-grid">
          <div v-for="(module, index) in modules" :key="index" class="module-card">
            <div class="module-icon">
              {{ module.icon }}
            </div>
            <h3>{{ module.title }}</h3>
            <p>{{ module.desc }}</p>
            <ul class="module-features">
              <li v-for="(item, idx) in module.features" :key="idx">
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

// 功能特色数据
const features = ref([
  { icon: '🎯', title: '智能招聘', desc: 'AI智能简历筛选，自动匹配候选人，多渠道招聘统一管理，让招聘效率提升85%。' },
  { icon: '👤', title: '员工档案', desc: '完整的员工生命周期管理，档案电子化存储，随时查询，信息准确可靠。' },
  { icon: '📅', title: '考勤管理', desc: '智能考勤打卡，自动生成考勤报表，支持多班次排班，考勤数据一目了然。' },
  { icon: '💰', title: '薪酬核算', desc: '自动计算薪资个税，支持多种薪酬方案，一键发放工资，确保准确无误。' },
  { icon: '📊', title: '绩效考核', desc: '灵活配置考核指标，360度评价体系，实时跟踪绩效，激励员工成长。' },
  { icon: '📚', title: '培训发展', desc: '在线培训课程，学习进度跟踪，培训效果评估，助力员工职业发展。' },
  { icon: '🎁', title: '福利管理', desc: '员工福利套餐配置，福利申领流程，福利使用统计，提升员工幸福感。' },
  { icon: '📈', title: '数据分析', desc: 'HR数据可视化报表，人力成本分析，离职率统计，为决策提供数据支撑。' }
])

// 模块中心数据
const modules = ref([
  {
    icon: '🎯',
    title: '招聘管理',
    desc: '从职位发布到入职全流程管理，让招聘更高效',
    features: ['智能简历筛选', '多渠道招聘', '面试日程安排', '录用流程管理']
  },
  {
    icon: '👤',
    title: '人事管理',
    desc: '员工全生命周期管理，人事档案智能化',
    features: ['员工档案管理', '入职离职流程', '合同到期提醒', '员工自助服务']
  },
  {
    icon: '💰',
    title: '薪酬福利',
    desc: '精准计算薪酬，自动化发放，让发薪无忧',
    features: ['薪资自动核算', '个税智能计算', '福利配置管理', '社保公积金']
  },
  {
    icon: '📅',
    title: '考勤排班',
    desc: '智能考勤打卡，灵活排班管理',
    features: ['多方式考勤', '智能排班', '考勤报表', '假期管理']
  },
  {
    icon: '📊',
    title: '绩效管理',
    desc: '360度绩效考核，激励员工持续成长',
    features: ['KPI目标设定', '多维度评价', '绩效跟踪', '结果分析']
  },
  {
    icon: '📚',
    title: '培训发展',
    desc: '在线培训平台，助力员工能力提升',
    features: ['课程资源管理', '学习计划制定', '进度跟踪', '效果评估']
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
  color: #374151;
  background-color: #ffffff;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 0 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 72px;
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
  gap: 14px;
  text-decoration: none;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.logo-text {
  color: #1f2937;
  font-size: 24px;
  font-weight: 800;
}

.logo-text span {
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 42px;
}

.nav-menu a {
  color: #4b5563;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}

.nav-menu a:hover {
  color: #ec4899;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #ec4899, #8b5cf6);
  transition: width 0.3s;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-cta {
  display: flex;
  gap: 14px;
  align-items: center;
}

.nav-btn {
  padding: 10px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}

.nav-btn-ghost {
  color: #4b5563;
}

.nav-btn-ghost:hover {
  color: #ec4899;
  background: #fdf2f8;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.25);
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.35);
}

/* Hero Section */
.hero {
  padding: 150px 35px 120px;
  background: linear-gradient(135deg, #fdf2f8 0%, #f5f3ff 100%);
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
  background: radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%);
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
  justify-content: center;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  padding-right: 30px;
}

.hero-badges {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.hero-badge {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%);
  color: #ec4899;
  padding: 7px 18px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 700;
}

.hero-badge.purple {
  color: #8b5cf6;
}

.hero h1 {
  font-size: 54px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1f2937;
  font-weight: 900;
}

.hero h1 .gradient {
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

.hero-metric {
  background: white;
  border-radius: 16px;
  padding: 25px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  text-align: center;
  transition: all 0.3s;
}

.hero-metric:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(236, 72, 153, 0.15);
}

.hero-metric-number {
  font-size: 32px;
  font-weight: 800;
  color: #ec4899;
  line-height: 1;
  margin-bottom: 8px;
}

.hero-metric-label {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 16px 38px;
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
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(236, 72, 153, 0.4);
}

.hero-btn-secondary {
  background: white;
  color: #4b5563;
  border: 2px solid #e5e7eb;
}

.hero-btn-secondary:hover {
  border-color: #ec4899;
  color: #ec4899;
}

.hero-visual {
  position: relative;
}

.hero-dashboard {
  background: white;
  border-radius: 24px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.dashboard-header {
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  padding: 22px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard-title {
  color: white;
  font-size: 17px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dashboard-actions {
  display: flex;
  gap: 10px;
}

.dashboard-action {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.dashboard-body {
  padding: 30px;
  background: #fafafa;
}

.employee-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 25px;
}

.employee-card {
  background: white;
  border-radius: 16px;
  padding: 22px;
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 16px;
}

.employee-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.employee-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.employee-info {
  flex: 1;
}

.employee-name {
  font-size: 15px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}

.employee-role {
  font-size: 13px;
  color: #6b7280;
}

.employee-status {
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.employee-status.online {
  background: #d1fae5;
  color: #065f46;
}

.employee-status.offline {
  background: #f3f4f6;
  color: #6b7280;
}

.employee-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.employee-stat {
  background: white;
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  border: 1px solid #f3f4f6;
}

.employee-stat-number {
  font-size: 28px;
  font-weight: 800;
  color: #8b5cf6;
  line-height: 1;
  margin-bottom: 6px;
}

.employee-stat-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

/* Features Section */
.features {
  padding: 110px 35px;
  background: white;
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 75px;
}

.features-header h2 {
  font-size: 42px;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 900;
}

.features-header p {
  color: #6b7280;
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.feature-card {
  background: linear-gradient(135deg, #fdf2f8 0%, #faf5ff 100%);
  border-radius: 20px;
  padding: 38px 28px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #ec4899, #8b5cf6);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-card:hover {
  background: white;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon-box {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  font-size: 28px;
}

.feature-card h3 {
  font-size: 19px;
  color: #1f2937;
  margin-bottom: 12px;
  font-weight: 800;
}

.feature-card p {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.7;
}

/* Modules Section */
.modules {
  padding: 110px 35px;
  background: linear-gradient(180deg, #fafafa 0%, white 100%);
}

.modules-container {
  max-width: 1400px;
  margin: 0 auto;
}

.modules-header {
  text-align: center;
  margin-bottom: 75px;
}

.modules-header h2 {
  font-size: 42px;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 900;
}

.modules-header p {
  color: #6b7280;
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.module-card {
  background: white;
  border-radius: 20px;
  padding: 40px 32px;
  border: 1px solid #f3f4f6;
  transition: all 0.4s;
}

.module-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.module-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
}

.module-card h3 {
  font-size: 21px;
  color: #1f2937;
  margin-bottom: 14px;
  font-weight: 800;
}

.module-card p {
  color: #6b7280;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 22px;
}

.module-features {
  list-style: none;
}

.module-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 10px;
}

.module-features li::before {
  content: '✓';
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

/* Stats Section */
.stats {
  padding: 100px 35px;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
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
  padding: 50px 32px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.stat-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 56px;
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
  padding: 120px 35px;
  text-align: center;
  background: white;
}

.cta-container {
  max-width: 950px;
  margin: 0 auto;
}

.cta-box {
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  border-radius: 32px;
  padding: 80px 60px;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-box h2 {
  font-size: 44px;
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
  color: #ec4899;
  padding: 18px 55px;
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
  padding: 75px 35px 35px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand .logo {
  margin-bottom: 22px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 24px;
}

.footer-brand .footer-contact {
  display: flex;
  gap: 20px;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
}

.footer-links h4 {
  color: white;
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: 700;
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
  color: #ec4899;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
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
  color: #ec4899;
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

  .hero-badges {
    justify-content: center;
  }

  .hero-metrics {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .modules-grid {
    grid-template-columns: 1fr;
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

  .nav-cta {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .employee-grid {
    grid-template-columns: 1fr;
  }

  .employee-stats {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    padding: 50px 30px;
  }

  .cta-box h2 {
    font-size: 34px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
