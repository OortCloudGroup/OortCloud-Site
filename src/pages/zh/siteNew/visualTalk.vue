<template>
  <div class="visual-intercom">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">🚀 新一代智能对讲解决方案</span>
        <h1>可视化对讲系统<br />开启智能安防新篇章</h1>
        <p>融合高清视频、实时语音与智能识别技术，为智慧社区、智能楼宇、平安校园等场景<br />提供安全、便捷、高效的可视化对讲服务。</p>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="section-header">
        <span class="section-tag">核心功能</span>
        <h2>全方位可视化对讲解决方案</h2>
        <p>基于最新视频通信技术与AI智能算法，打造行业领先的可视化对讲系统</p>
      </div>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            📹
          </div>
          <h3>高清视频通话</h3>
          <p>支持1080P高清视频，画质清晰流畅，通话质量稳定，让面对面交流无障碍。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            🎤
          </div>
          <h3>双向语音对讲</h3>
          <p>采用先进降噪技术，语音清晰无延迟，支持多方通话，满足各种沟通需求。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            🔐
          </div>
          <h3>人脸识别开门</h3>
          <p>集成AI人脸识别技术，支持刷脸开门，安全便捷，告别传统钥匙和门禁卡。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            📱
          </div>
          <h3>移动端远程控制</h3>
          <p>通过手机APP随时随地对讲、开门，即使不在家也能掌握来访信息。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            🔔
          </div>
          <h3>智能推送提醒</h3>
          <p>访客呼叫实时推送至手机，支持拍照留影，不错过任何重要访客。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            📊
          </div>
          <h3>访客记录管理</h3>
          <p>自动记录访客信息，支持查询统计，方便物业管理和安防追溯。</p>
        </div>
      </div>
    </section>

    <!-- Showcase Section -->
    <section id="showcase" class="showcase">
      <div class="showcase-container">
        <div class="showcase-content">
          <div class="showcase-text">
            <h2>为<span>多场景</span>提供<br />专业对讲解决方案</h2>
            <p>我们的可视化对讲系统广泛应用于智慧社区、智能楼宇、平安校园、产业园区等多个场景，满足不同行业的安防管理需求。</p>
            <ul class="showcase-list">
              <li>智慧社区 - 打造安全便捷的居住环境</li>
              <li>智能楼宇 - 提升办公场所管理效率</li>
              <li>平安校园 - 构建校园安全防护网</li>
              <li>产业园区 - 实现园区智能化管理</li>
            </ul>
          </div>
          <div class="showcase-demo">
            <div class="demo-card">
              <div class="demo-icon">
                🏢
              </div>
              <h4>智慧社区</h4>
              <p>单元对讲、访客管理、物业联动</p>
            </div>
            <div class="demo-card">
              <div class="demo-icon">
                🏛️
              </div>
              <h4>智能楼宇</h4>
              <p>办公室对讲、门禁控制、访客预约</p>
            </div>
            <div class="demo-card">
              <div class="demo-icon">
                🏫
              </div>
              <h4>平安校园</h4>
              <p>宿舍管理、校门监控、紧急呼叫</p>
            </div>
            <div class="demo-card">
              <div class="demo-icon">
                🏭
              </div>
              <h4>产业园区</h4>
              <p>企业对讲、安防联动、数据统计</p>
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

.visual-intercom {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #0f172a;
}

/* 导航栏 */
.navbar {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #38bdf8;
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
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
  color: #38bdf8;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #38bdf8;
  transition: width 0.3s;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-cta {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 160px 30px 100px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 80px;
  align-items: center;
}

.hero-content {
  color: white;
}

.hero-badge {
  display: inline-block;
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 25px;
  line-height: 1.2;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
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

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(56, 189, 248, 0.4);
}

.hero-btn-secondary {
  background: transparent;
  color: white;
  padding: 16px 40px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.hero-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero-visual {
  position: relative;
}

.hero-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.hero-card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.hero-card-header h3 {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.hero-card-header span {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.hero-video-placeholder {
  width: 100%;
  height: 280px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(129, 140, 248, 0.1) 100%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(56, 189, 248, 0.3);
  gap: 15px;
}

.hero-video-placeholder span {
  font-size: 60px;
}

.hero-video-placeholder p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  margin: 0;
}

.hero-controls {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.control-btn {
  flex: 1;
  padding: 15px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.control-btn-answer {
  background: #22c55e;
  color: white;
}

.control-btn-answer:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

.control-btn-reject {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.control-btn-reject:hover {
  background: rgba(239, 68, 68, 0.3);
}

/* Features Section */
.features {
  padding: 100px 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-tag {
  display: inline-block;
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 15px;
}

.section-header p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-item {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 35px 30px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-item:hover {
  transform: translateY(-8px);
  background: rgba(30, 41, 59, 0.8);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.feature-item:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 65px;
  height: 65px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(129, 140, 248, 0.2) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 28px;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.feature-item h3 {
  color: white;
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: 600;
}

.feature-item p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  line-height: 1.7;
}

/* Showcase Section */
.showcase {
  padding: 100px 30px;
  background: rgba(30, 41, 59, 0.3);
}

.showcase-container {
  max-width: 1400px;
  margin: 0 auto;
}

.showcase-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.showcase-text h2 {
  font-size: 38px;
  color: white;
  margin-bottom: 25px;
  line-height: 1.3;
}

.showcase-text h2 span {
  color: #38bdf8;
}

.showcase-text p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.showcase-list {
  list-style: none;
}

.showcase-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-bottom: 18px;
}

.showcase-list li::before {
  content: '✓';
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
}

.showcase-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.demo-card {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 25px;
  text-align: center;
}

.demo-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(129, 140, 248, 0.15) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
}

.demo-card h4 {
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
}

.demo-card p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* Stats Section */
.stats {
  padding: 100px 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.stat-card {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(129, 140, 248, 0.05) 100%);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 20px 40px rgba(56, 189, 248, 0.1);
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 500;
}

/* CTA Section */
.cta {
  padding: 80px 30px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(129, 140, 248, 0.05) 100%);
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
}

.cta p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  margin-bottom: 40px;
}

.cta-btn {
  display: inline-block;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  color: white;
  padding: 18px 50px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(56, 189, 248, 0.4);
}

/* Footer */
.footer {
  background: rgba(15, 23, 42, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 60px 30px 30px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
}

.footer-brand h3 {
  color: white;
  font-size: 24px;
  margin-bottom: 15px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.footer-links h4 {
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #38bdf8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .showcase-content {
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

  .hero h1 {
    font-size: 36px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .showcase-demo {
    grid-template-columns: 1fr;
  }

  .demo-card:nth-child(2) {
    grid-column: 1;
    grid-row: span 1;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
