<template>
  <div class="personal-center">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>个人中心<br /><span class="gradient">一站式管理您的信息</span></h1>
          <p>融合个人信息管理、账户设置、活动记录、数据统计等功能，打造全方位个人<br />中心解决方案，让信息管理更便捷，让操作更高效，让体验更顺畅。</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特色</h2>
          <p>全方位个人中心解决方案，让管理更高效</p>
        </div>
        <div class="features-grid">
          <div class="feature-box">
            <div class="feature-icon-box">
              👤
            </div>
            <h3>个人信息</h3>
            <p>基本信息管理、头像设置、联系方式维护。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🔐
            </div>
            <h3>账户安全</h3>
            <p>密码修改、手机绑定、邮箱验证、登录记录。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🔔
            </div>
            <h3>消息通知</h3>
            <p>系统消息、任务提醒、评论通知、站内信。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              📊
            </div>
            <h3>数据统计</h3>
            <p>活动统计、任务统计、时间统计、效率分析。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🎨
            </div>
            <h3>个性化设置</h3>
            <p>主题切换、界面设置、语言选择、偏好配置。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              📱
            </div>
            <h3>移动端同步</h3>
            <p>数据实时同步，多端一致体验。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              👥
            </div>
            <h3>团队管理</h3>
            <p>团队成员管理、权限设置、角色分配。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🔄
            </div>
            <h3>数据备份</h3>
            <p>数据自动备份、恢复功能、安全保障。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Functions Section -->
    <section id="functions" class="functions">
      <div class="functions-container">
        <div class="functions-header">
          <h2>常用功能</h2>
          <p>快速访问常用功能，提升工作效率</p>
        </div>
        <div class="functions-grid">
          <div class="function-item">
            <div class="function-icon">
              📝
            </div>
            <div class="function-name">
              我的任务
            </div>
            <div class="function-desc">
              查看和管理所有任务
            </div>
          </div>
          <div class="function-item">
            <div class="function-icon">
              📁
            </div>
            <div class="function-name">
              我的文件
            </div>
            <div class="function-desc">
              管理个人文档和资料
            </div>
          </div>
          <div class="function-item">
            <div class="function-icon">
              📅
            </div>
            <div class="function-name">
              日程安排
            </div>
            <div class="function-desc">
              查看和管理日程计划
            </div>
          </div>
          <div class="function-item">
            <div class="function-icon">
              💬
            </div>
            <div class="function-name">
              消息中心
            </div>
            <div class="function-desc">
              查看所有消息通知
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="stats">
      <div class="stats-container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">
              256
            </div>
            <div class="stat-label">
              总任务数
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              92%
            </div>
            <div class="stat-label">
              完成率
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              1.2K
            </div>
            <div class="stat-label">
              活动记录
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              4.8
            </div>
            <div class="stat-label">
              用户评分
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'site-new'
})

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
  background-color: #f5f3ff;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 0 35px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
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
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border-radius: 12px;
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 38px;
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
  color: #8b5cf6;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -26px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #8b5cf6, #7c3aed);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-menu a:hover::after {
  transform: scaleX(1);
}

.nav-user {
  display: flex;
  gap: 12px;
  align-items: center;
}

.nav-btn {
  padding: 10px 22px;
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
  color: #8b5cf6;
  background: #ede9fe;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

/* Hero Section */
.hero {
  padding: 150px 35px 120px;
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
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
  background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
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
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%);
  color: #8b5cf6;
  padding: 7px 18px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 700;
}

.hero-badge.violet {
  color: #7c3aed;
}

.hero h1 {
  font-size: 52px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1f2937;
  font-weight: 900;
}

.hero h1 .gradient {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 40px;
}

.hero-stat {
  background: white;
  border-radius: 16px;
  padding: 22px 18px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  text-align: center;
  transition: all 0.3s;
}

.hero-stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.15);
}

.hero-stat-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 22px;
}

.hero-stat-number {
  font-size: 26px;
  font-weight: 800;
  color: #8b5cf6;
  line-height: 1;
  margin-bottom: 6px;
}

.hero-stat-label {
  font-size: 12px;
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
}

.hero-btn-secondary {
  background: white;
  color: #4b5563;
  border: 2px solid #e5e7eb;
}

.hero-btn-secondary:hover {
  border-color: #8b5cf6;
  color: #8b5cf6;
}

.hero-visual {
  position: relative;
}

.hero-profile {
  background: white;
  border-radius: 24px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.profile-header {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  padding: 30px 22px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}

.profile-info {
  flex: 1;
}

.profile-name {
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.profile-role {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.profile-status {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.profile-body {
  padding: 25px;
  background: #fafafa;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 22px;
}

.activity-card {
  background: white;
  border-radius: 14px;
  padding: 16px;
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
}

.activity-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.activity-type {
  font-size: 14px;
  font-weight: 700;
  color: #1f2937;
}

.activity-time {
  font-size: 12px;
  color: #6b7280;
}

.activity-desc {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
}

.activity-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #8b5cf6;
}

.profile-footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.profile-stat {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  border: 1px solid #f3f4f6;
}

.profile-stat-number {
  font-size: 24px;
  font-weight: 800;
  color: #8b5cf6;
  line-height: 1;
  margin-bottom: 4px;
}

.profile-stat-label {
  font-size: 11px;
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

.feature-box {
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border-radius: 20px;
  padding: 38px 28px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.feature-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #8b5cf6, #7c3aed);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-box:hover {
  background: white;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}

.feature-box:hover::before {
  transform: scaleX(1);
}

.feature-icon-box {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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

/* Functions Section */
.functions {
  padding: 110px 35px;
  background: linear-gradient(180deg, #fafafa 0%, white 100%);
}

.functions-container {
  max-width: 1400px;
  margin: 0 auto;
}

.functions-header {
  text-align: center;
  margin-bottom: 75px;
}

.functions-header h2 {
  font-size: 42px;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 900;
}

.functions-header p {
  color: #6b7280;
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.functions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.function-item {
  background: white;
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid #f3f4f6;
  transition: all 0.4s;
  text-align: center;
}

.function-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.function-icon {
  height: 100px;
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin-bottom: 20px;
}

.function-name {
  font-size: 18px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 8px;
}

.function-desc {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.6;
}

.function-access {
  font-size: 12px;
  color: #8b5cf6;
  font-weight: 600;
  margin-bottom: 18px;
}

.function-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.function-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
}

/* Stats Section */
.stats {
  padding: 100px 35px;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
  color: #8b5cf6;
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
  color: #8b5cf6;
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
  color: #8b5cf6;
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

  .hero-stats {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .functions-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .nav-user {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .activity-grid {
    grid-template-columns: 1fr;
  }

  .functions-grid {
    grid-template-columns: 1fr;
  }

  .profile-footer {
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
