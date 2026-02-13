<template>
  <div class="unified-communication">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-tag">🚀 新一代融合通信平台</span>
          <h1>融合通信系统<br /><span class="gradient">连接一切</span></h1>
          <p>融合语音、视频、即时消息、会议等多种通信方式，打破信息孤岛，实现跨平台、<br />跨终端的无缝通信，让协作更高效，让沟通更简单。</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特色</h2>
          <p>全方位融合通信解决方案，让沟通无处不在</p>
        </div>
        <div class="features-grid">
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              📞
            </div>
            <h3>高清语音</h3>
            <p>支持PSTN、VoIP、手机等多种语音通道，高清音质，智能降噪，让通话更清晰。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              📹
            </div>
            <h3>视频会议</h3>
            <p>支持多人视频会议，4K超高清画质，屏幕共享，让远程协作如临现场。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              💬
            </div>
            <h3>即时消息</h3>
            <p>支持单聊、群聊、文件传输、表情包，让沟通更高效便捷。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              📱
            </div>
            <h3>移动办公</h3>
            <p>支持PC、手机、平板多端同步，随时随地保持连接，办公不受限。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              🔒
            </div>
            <h3>安全加密</h3>
            <p>端到端加密传输，多重安全防护，保障通信内容安全可靠。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              🔗
            </div>
            <h3>系统集成</h3>
            <p>支持与企业OA、CRM、ERP等系统集成，统一通信入口，提升效率。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              📊
            </div>
            <h3>数据分析</h3>
            <p>通信数据统计分析，通话时长、消息数量等可视化报表，辅助决策。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-wrapper">
              🎯
            </div>
            <h3>智能路由</h3>
            <p>智能通信路由，自动选择最优通道，保障通信质量稳定可靠。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section id="solutions" class="solutions">
      <div class="solutions-container">
        <div class="solutions-header">
          <h2>行业解决方案</h2>
          <p>针对不同行业特点，提供定制化融合通信解决方案</p>
        </div>
        <div class="solutions-grid">
          <div class="solution-card">
            <div class="solution-icon">
              🏢
            </div>
            <h3>企业办公</h3>
            <p>统一通信平台，提升企业内外沟通效率，降低通信成本</p>
            <ul class="solution-features">
              <li>内外线互通</li>
              <li>会议系统</li>
              <li>工单对接</li>
              <li>移动办公</li>
            </ul>
          </div>
          <div class="solution-card">
            <div class="solution-icon">
              🏥
            </div>
            <h3>医疗健康</h3>
            <p>远程会诊、急救通信，为医疗行业提供专业通信支持</p>
            <ul class="solution-features">
              <li>远程会诊</li>
              <li>急救调度</li>
              <li>医疗协作</li>
              <li>健康咨询</li>
            </ul>
          </div>
          <div class="solution-card">
            <div class="solution-icon">
              🎓
            </div>
            <h3>教育培训</h3>
            <p>在线教学、家校沟通，助力教育行业数字化转型</p>
            <ul class="solution-features">
              <li>在线课堂</li>
              <li>家校互动</li>
              <li>教学协作</li>
              <li>校园通知</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
definePageMeta({
  layout: 'site-new'
})

// 示例：导航菜单响应式控制
const isMobile = ref(false)

// 检测屏幕尺寸
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

// 清理事件监听
onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

// 可添加更多交互逻辑，比如：
// 1. 平滑滚动到锚点
// 2. 移动端菜单展开/收起
// 3. 按钮点击事件
// 4. 数据请求等
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
  background-color: #0f172a;
}

/* 导航栏 */
.navbar {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 0 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.logo-text {
  color: white;
  font-size: 22px;
  font-weight: 800;
}

.logo-text span {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
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
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}

.nav-menu a:hover {
  color: #06b6d4;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  transition: width 0.3s;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-cta {
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

.nav-btn-ghost {
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #06b6d4;
  color: #06b6d4;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  color: white;
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
}

/* Hero Section */
.hero {
  padding: 140px 35px 100px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
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
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
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
  padding-right: 20px;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  border: 1px solid rgba(6, 182, 212, 0.3);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: white;
  font-weight: 900;
}

.hero h1 .gradient {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-channels {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.hero-channel {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
}

.hero-channel-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.hero-actions {
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
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(6, 182, 212, 0.4);
}

.hero-btn-secondary {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.hero-btn-secondary:hover {
  border-color: #06b6d4;
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
}

.hero-visual {
  position: relative;
}

.hero-interface {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 24px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.interface-header {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  padding: 20px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.interface-title {
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}

.interface-status {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.interface-body {
  padding: 30px;
}

.communication-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 25px;
}

.comm-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 16px;
}

.comm-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
  border-color: rgba(6, 182, 212, 0.3);
}

.comm-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.comm-info {
  flex: 1;
}

.comm-name {
  font-size: 15px;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}

.comm-type {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

.comm-status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
}

.comm-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.comm-stat {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.comm-stat-number {
  font-size: 28px;
  font-weight: 800;
  color: #06b6d4;
  line-height: 1;
  margin-bottom: 6px;
}

.comm-stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

/* Features Section */
.features {
  padding: 110px 35px;
  background: #0f172a;
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
  color: white;
  margin-bottom: 16px;
  font-weight: 900;
}

.features-header p {
  color: rgba(255, 255, 255, 0.7);
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
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  height: 4px;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-box:hover {
  background: rgba(30, 41, 59, 0.9);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  transform: translateY(-8px);
  border-color: rgba(6, 182, 212, 0.3);
}

.feature-box:hover::before {
  transform: scaleX(1);
}

.feature-icon-wrapper {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  font-size: 28px;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.feature-box h3 {
  font-size: 19px;
  color: white;
  margin-bottom: 12px;
  font-weight: 800;
}

.feature-box p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.7;
}

/* Solutions Section */
.solutions {
  padding: 110px 35px;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
}

.solutions-container {
  max-width: 1400px;
  margin: 0 auto;
}

.solutions-header {
  text-align: center;
  margin-bottom: 75px;
}

.solutions-header h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 16px;
  font-weight: 900;
}

.solutions-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.solution-card {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  padding: 42px 35px;
  transition: all 0.4s;
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  border-color: rgba(6, 182, 212, 0.3);
}

.solution-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
}

.solution-card h3 {
  font-size: 22px;
  color: white;
  margin-bottom: 14px;
  font-weight: 800;
}

.solution-card p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 24px;
}

.solution-features {
  list-style: none;
}

.solution-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
}

.solution-features li::before {
  content: '✓';
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

/* Stats Section */
.stats {
  padding: 100px 35px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
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
  background: #0f172a;
}

.cta-container {
  max-width: 950px;
  margin: 0 auto;
}

.cta-box {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
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
  color: #06b6d4;
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
  background: #020617;
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
  color: #06b6d4;
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
  color: #06b6d4;
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

  .hero-channels {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .solutions-grid {
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

  .hero-channels {
    flex-direction: column;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .communication-grid {
    grid-template-columns: 1fr;
  }

  .comm-stats {
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
