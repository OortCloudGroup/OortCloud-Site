<template>
  <div class="workup-meet">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-tag">🚀 新一代智能会议平台</span>
          <h1>WorkUP Meet<br /><span class="highlight">重新定义团队协作</span></h1>
          <p class="hero-description">
            高清视频会议、实时协作、智能管理，让远程办公更高效。支持多人在线<br />会议、屏幕共享、实时字幕，打造无缝的协作体验。
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-header">
        <span class="features-tag">功能特色</span>
        <h2>强大的会议协作功能</h2>
        <p>为您提供全方位的视频会议解决方案，满足各种商务沟通需求</p>
      </div>
      <div class="features-grid">
        <div class="feature-box">
          <div class="feature-icon-box">
            📹
          </div>
          <h3>高清视频会议</h3>
          <p>支持4K超高清视频，画质清晰流畅，智能降噪技术让语音更清晰，还原面对面沟通体验。</p>
        </div>
        <div class="feature-box">
          <div class="feature-icon-box">
            🖥️
          </div>
          <h3>屏幕共享</h3>
          <p>一键共享桌面或应用程序，支持多屏显示，让演示讲解更直观，团队协作更高效。</p>
        </div>
        <div class="feature-box">
          <div class="feature-icon-box">
            📝
          </div>
          <h3>实时协作白板</h3>
          <p>内置智能白板工具，支持多人同时编辑、标注、绘图，激发团队创意，提升会议效率。</p>
        </div>
        <div class="feature-box">
          <div class="feature-icon-box">
            🎙️
          </div>
          <h3>实时字幕</h3>
          <p>AI智能语音识别，实时生成会议字幕，支持多语言翻译，打破语言沟通障碍。</p>
        </div>
        <div class="feature-box">
          <div class="feature-icon-box">
            📊
          </div>
          <h3>会议录制</h3>
          <p>支持全程会议录制，自动生成会议纪要，方便会后回顾和知识沉淀，不错过任何重要信息。</p>
        </div>
        <div class="feature-box">
          <div class="feature-icon-box">
            🔒
          </div>
          <h3>安全加密</h3>
          <p>端到端加密传输，多重安全防护，保障会议内容安全，让您放心进行敏感商务沟通。</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="benefits">
      <div class="benefits-container">
        <div class="benefits-grid">
          <div class="benefits-content">
            <h2>为什么选择<br /><span>WorkUP Meet</span>？</h2>
            <p>我们致力于为企业和团队提供最优质的视频会议体验，帮助您打破地域限制，实现高效协作。</p>
            <div class="benefit-item">
              <div class="benefit-number">
                01
              </div>
              <div class="benefit-text">
                <h4>简单易用</h4>
                <p>无需复杂安装，浏览器直接使用，5分钟内即可上手，降低学习成本。</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-number">
                02
              </div>
              <div class="benefit-text">
                <h4>稳定可靠</h4>
                <p>99.9%系统可用性，全球CDN加速，确保会议流畅不卡顿。</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-number">
                03
              </div>
              <div class="benefit-text">
                <h4>灵活扩展</h4>
                <p>支持1对1到千人会议，灵活的权限管理，满足不同规模团队需求。</p>
              </div>
            </div>
          </div>
          <div class="benefits-cards">
            <div class="benefit-card">
              <div class="benefit-card-icon">
                ⚡
              </div>
              <h4>极速启动</h4>
              <p>一键发起会议，秒级连接，告别等待</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-card-icon">
                🌐
              </div>
              <h4>全球覆盖</h4>
              <p>多地服务器部署，低延迟跨国会议</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-card-icon">
                📱
              </div>
              <h4>多端同步</h4>
              <p>支持PC、手机、平板，随时随地开会</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-card-icon">
                🤖
              </div>
              <h4>智能辅助</h4>
              <p>AI会议助手，自动生成会议纪要</p>
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
  color: #1a1a2e;
  background-color: #ffffff;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 15px 40px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1300px;
  margin: 0 auto;
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
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.logo-text {
  color: #1a1a2e;
  font-size: 24px;
  font-weight: 700;
}

.logo-text span {
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 45px;
}

.nav-menu a {
  color: #4a4a6a;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}

.nav-menu a:hover {
  color: #6366f1;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #d946ef);
  transition: width 0.3s;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-btns {
  display: flex;
  gap: 15px;
}

.nav-btn {
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}

.nav-btn-outline {
  color: #6366f1;
  border: 2px solid #6366f1;
}

.nav-btn-outline:hover {
  background: #6366f1;
  color: white;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  color: white;
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

/* Hero Section */
.hero {
  padding: 140px 40px 80px;
  background: linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  padding-right: 20px;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%);
  color: #6366f1;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 25px;
  color: #1a1a2e;
  font-weight: 800;
}

.hero h1 .highlight {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 18px;
  color: #4a4a6a;
  margin-bottom: 35px;
  line-height: 1.8;
}

.hero-stats {
  display: flex;
  gap: 50px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8e8f0;
}

.hero-stat {
  text-align: left;
}

.hero-stat-number {
  font-size: 36px;
  font-weight: 800;
  color: #6366f1;
  line-height: 1;
  margin-bottom: 5px;
}

.hero-stat-label {
  font-size: 14px;
  color: #6a6a8a;
}

.hero-actions {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 16px 38px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  color: white;
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
}

.hero-btn-secondary {
  background: white;
  color: #4a4a6a;
  border: 2px solid #e8e8f0;
}

.hero-btn-secondary:hover {
  border-color: #6366f1;
  color: #6366f1;
}

.hero-visual {
  position: relative;
}

.hero-mockup {
  background: white;
  border-radius: 24px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  position: relative;
}

.mockup-header {
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  padding: 20px 25px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.mockup-dots {
  display: flex;
  gap: 8px;
}

.mockup-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.mockup-dot:nth-child(1) { background: #ff5f57; }
.mockup-dot:nth-child(2) { background: #febc2e; }
.mockup-dot:nth-child(3) { background: #28c840; }

.mockup-title {
  color: white;
  font-size: 14px;
  font-weight: 500;
  flex: 1;
  text-align: center;
}

.mockup-body {
  padding: 25px;
  background: #f8f7ff;
}

.meeting-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.meeting-participant {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.participant-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.participant-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.participant-name {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
}

.participant-status {
  font-size: 12px;
  color: #28c840;
  margin-left: auto;
}

.participant-video {
  height: 100px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.participant-speaker {
  grid-column: span 2;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%);
  border: 2px solid rgba(99, 102, 241, 0.2);
}

.participant-speaker .participant-video {
  height: 140px;
  font-size: 48px;
}

/* Features Section */
.features {
  padding: 100px 40px;
  max-width: 1300px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 70px;
}

.features-tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%);
  color: #6366f1;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}

.features-header h2 {
  font-size: 40px;
  color: #1a1a2e;
  margin-bottom: 15px;
  font-weight: 800;
}

.features-header p {
  color: #4a4a6a;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-box {
  background: white;
  border: 1px solid #e8e8f0;
  border-radius: 20px;
  padding: 40px 35px;
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
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.feature-box:hover::before {
  transform: scaleX(1);
}

.feature-icon-box {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 30px;
}

.feature-box h3 {
  font-size: 22px;
  color: #1a1a2e;
  margin-bottom: 12px;
  font-weight: 700;
}

.feature-box p {
  color: #6a6a8a;
  font-size: 15px;
  line-height: 1.7;
}

/* Benefits Section */
.benefits {
  padding: 100px 40px;
  background: linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%);
}

.benefits-container {
  max-width: 1300px;
  margin: 0 auto;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.benefits-content h2 {
  font-size: 40px;
  color: #1a1a2e;
  margin-bottom: 25px;
  font-weight: 800;
  line-height: 1.3;
}

.benefits-content h2 span {
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.benefits-content p {
  color: #4a4a6a;
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 40px;
}

.benefit-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.benefit-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
  flex-shrink: 0;
}

.benefit-text h4 {
  font-size: 18px;
  color: #1a1a2e;
  margin-bottom: 8px;
  font-weight: 700;
}

.benefit-text p {
  color: #6a6a8a;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 0;
}

.benefits-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.benefit-card {
  background: white;
  padding: 30px;
  border-radius: 18px;
  border: 1px solid #e8e8f0;
  transition: all 0.3s;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.benefit-card-icon {
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 26px;
}

.benefit-card h4 {
  font-size: 17px;
  color: #1a1a2e;
  margin-bottom: 8px;
  font-weight: 700;
}

.benefit-card p {
  color: #6a6a8a;
  font-size: 14px;
  margin-bottom: 0;
}

/* Stats Section */
.stats-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: -200px;
  left: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.stats-section::after {
  content: '';
  position: absolute;
  bottom: -300px;
  right: -300px;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.stats-container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-box {
  text-align: center;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.stat-box:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 56px;
  font-weight: 800;
  color: white;
  line-height: 1;
  margin-bottom: 10px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 500;
}

/* CTA Section */
.cta-section {
  padding: 120px 40px;
  text-align: center;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
}

.cta-box {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
  border-radius: 30px;
  padding: 70px 50px;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.cta-box::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-box h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 20px;
  font-weight: 800;
}

.cta-box p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-bottom: 40px;
}

.cta-btn {
  display: inline-block;
  background: white;
  color: #6366f1;
  padding: 18px 50px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 700;
  font-size: 17px;
  transition: all 0.3s;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Footer */
.footer {
  background: #1a1a2e;
  padding: 70px 40px 30px;
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 50px;
}

.footer-brand {
  padding-right: 40px;
}

.footer-brand .logo {
  margin-bottom: 20px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.footer-brand .footer-social {
  display: flex;
  gap: 15px;
}

.footer-social a {
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s;
}

.footer-social a:hover {
  background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
  transform: translateY(-3px);
}

.footer-links h4 {
  color: white;
  font-size: 17px;
  margin-bottom: 25px;
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
  color: #6366f1;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: #6366f1;
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

  .hero-stats {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefits-grid {
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

  .nav-btns {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 25px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .benefits-cards {
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
