<template>
  <div class="email-app">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span>✨</span>
            <span>智能电子邮件系统</span>
          </div>
          <h1>让邮件沟通<br /><span>更高效更安全</span></h1>
          <p>企业级邮件解决方案，智能分类、病毒防护、垃圾拦截。支持多域名、<br />无限存储，为企业提供安全可靠的邮件服务，提升沟通效率。</p>
        </div>
      </div>
    </section>

    <div class="w1380">
      <video class="wBImg" src="/documents/电子邮件.mp4" controls autoplay muted />
    </div>

    <!-- 核心功能 -->
    <section id="features" class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>核心功能特点</h2>
          <p>全方位的邮件管理解决方案</p>
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

    <!-- 邮件安全 -->
    <section id="security" class="security-section">
      <div class="security-container">
        <div class="section-header">
          <h2>企业级安全防护</h2>
          <p>多重安全机制，保障邮件通信安全</p>
        </div>
        <div class="security-grid">
          <div v-for="(security, index) in securityList" :key="index" class="security-card">
            <div class="security-icon">
              {{ security.icon }}
            </div>
            <div class="security-content">
              <h3>{{ security.title }}</h3>
              <p>{{ security.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// 核心功能列表
const featuresList = reactive([
  { icon: '🤖', title: '智能分类', desc: 'AI驱动的智能邮件分类系统，自动识别邮件类型，智能归档，让收件箱井井有条。' },
  { icon: '🔒', title: '端到端加密', desc: '采用银行级SSL加密技术，确保邮件传输和存储安全，保护企业机密信息。' },
  { icon: '🛡️', title: '垃圾拦截', desc: '强大的垃圾邮件过滤系统，精准识别拦截垃圾邮件、钓鱼邮件，保护邮箱安全。' },
  { icon: '📅', title: '日程管理', desc: '内置日历功能，支持日程安排、会议邀请、提醒通知，工作安排更高效。' },
  { icon: '📱', title: '多端同步', desc: '支持电脑、手机、平板等多设备访问，数据实时同步，随时随地处理邮件。' },
  { icon: '🌐', title: '多域名支持', desc: '支持企业自定义域名，提升品牌形象，支持无限用户账号创建。' }
])

// 安全防护列表
const securityList = reactive([
  { icon: '🦠', title: '病毒防护', desc: '实时病毒扫描引擎，自动检测并拦截邮件中的病毒、木马等恶意程序，确保系统安全。' },
  { icon: '🎣', title: '钓鱼防护', desc: '智能识别钓鱼邮件，通过多维度分析邮件来源和内容，有效防范网络诈骗。' },
  { icon: '🔐', title: '数据加密', desc: '采用AES-256加密技术，对邮件内容和附件进行加密存储，防止数据泄露。' },
  { icon: '⚡', title: '异地备份', desc: '多地数据备份机制，确保数据永不丢失，支持一键恢复，保障业务连续性。' }
])
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
  color: #1e293b;
  background-color: #fff;
}

/* Hero Section - 邮箱界面展示 */
.hero {
  background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
  padding: 80px 30px;
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
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -120px;
  left: -120px;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 60px;
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
  color: #3b82f6;
  padding: 10px 22px;
  border-radius: 28px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 28px;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1e293b;
  font-weight: 800;
}

.hero h1 span {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
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

.btn-primary-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
}

.btn-primary-blue:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.35);
}

.btn-white {
  background: white;
  color: #3b82f6;
  border: 2px solid #dbeafe;
}

.btn-white:hover {
  border-color: #3b82f6;
}

.hero-visual {
  background: white;
  border-radius: 20px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.email-interface {
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 500px;
}

.email-sidebar {
  background: #f8fafc;
  padding: 25px 20px;
  border-right: 1px solid #e2e8f0;
}

.compose-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
}

.compose-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.sidebar-menu {
  list-style: none;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  border-radius: 10px;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 5px;
  font-size: 14px;
}

.sidebar-item:hover, .sidebar-item.active {
  background: #dbeafe;
  color: #3b82f6;
}

.sidebar-item .badge {
  margin-left: auto;
  background: #ef4444;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}

.email-main {
  display: flex;
  flex-direction: column;
}

.email-toolbar {
  padding: 20px 25px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.email-search {
  flex: 1;
  padding: 10px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s;
  max-width: 400px;
}

.email-search:focus {
  border-color: #3b82f6;
}

.email-list {
  flex: 1;
  padding: 0;
  list-style: none;
}

.email-item {
  display: flex;
  gap: 15px;
  padding: 18px 25px;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: all 0.3s;
}

.email-item:hover {
  background: #f8fafc;
}

.email-avatar {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.email-content {
  flex: 1;
  min-width: 0;
}

.email-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.email-sender {
  font-weight: 700;
  color: #1e293b;
  font-size: 15px;
}

.email-time {
  font-size: 12px;
  color: #9ca3af;
}

.email-subject {
  font-weight: 600;
  color: #334155;
  margin-bottom: 4px;
  font-size: 14px;
}

.email-preview {
  font-size: 13px;
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.email-item.unread .email-sender,
.email-item.unread .email-subject {
  color: #3b82f6;
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
}

.feature-card:hover {
  background: white;
  border-color: #3b82f6;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.12);
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
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
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
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
}

.feature-card:nth-child(6) .feature-icon {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
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

/* 邮件安全 */
.security-section {
  padding: 100px 30px;
  background: linear-gradient(180deg, #fafafa 0%, #fff 100%);
}

.security-container {
  max-width: 1200px;
  margin: 0 auto;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.security-card {
  background: white;
  border-radius: 20px;
  padding: 45px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  display: flex;
  gap: 25px;
  align-items: flex-start;
}

.security-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.security-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  flex-shrink: 0;
}

.security-card:nth-child(1) .security-icon {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.security-card:nth-child(2) .security-icon {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
}

.security-card:nth-child(3) .security-icon {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.security-card:nth-child(4) .security-icon {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.security-content h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #1e293b;
  font-weight: 700;
}

.security-content p {
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
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
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
  color: #6366f1;
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

  .email-interface {
    grid-template-columns: 180px 1fr;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .security-grid {
    grid-template-columns: 1fr;
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
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .email-interface {
    grid-template-columns: 1fr;
  }

  .email-sidebar {
    display: none;
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
.w1380 {
  width: 1380px;
  margin: 0 auto;
  margin-top: 100px;
  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}
</style>
