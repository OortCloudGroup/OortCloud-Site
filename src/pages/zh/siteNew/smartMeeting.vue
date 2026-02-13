<template>
  <div class="smart-meeting-room">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>智慧会议室<br /><span class="gradient-text">重新定义企业会议体验</span></h1>
        <p>融合IoT物联网、AI智能识别、大数据分析技术，打造智能预约、自动签到、设备联动、<br />数据洞察的一体化会议室管理平台，让每一次会议都高效顺畅。</p>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特性</h2>
          <p>全方位智能管理，让会议室使用更高效、更便捷、更智能</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in featuresList" :key="index" class="feature-item">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section id="solution" class="solution">
      <div class="solution-container">
        <div class="solution-grid">
          <div class="solution-visual">
            <div class="solution-card featured">
              <div class="solution-card-icon">
                🎯
              </div>
              <h4>一体化解决方案</h4>
              <p>从预约到结束，全流程智能管理，让会议体验更加流畅高效</p>
            </div>
            <div class="solution-card">
              <div class="solution-card-icon">
                🏢
              </div>
              <h4>企业管理</h4>
              <p>多会议室统一管理，权限分级控制，资源合理调配</p>
            </div>
            <div class="solution-card">
              <div class="solution-card-icon">
                📱
              </div>
              <h4>移动端</h4>
              <p>随时随地预约管理，实时查看会议状态</p>
            </div>
          </div>
          <div class="solution-content">
            <h2>为<span>现代企业</span><br />打造的智慧会议空间</h2>
            <p>智慧会议室系统深度整合物联网、人工智能、云计算等前沿技术，为企业提供从会议室预约、智能签到、设备控制到数据分析的全流程解决方案。</p>
            <ul class="solution-list">
              <li v-for="(item, index) in solutionList" :key="index">
                <div class="solution-list-icon">
                  ✓
                </div>
                <div class="solution-list-text">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.desc }}</p>
                </div>
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

const featuresList = ref([
  { icon: '📅', title: '智能预约', desc: '支持APP、微信、PC多端预约，实时查看会议室状态，冲突智能提醒。' },
  { icon: '📱', title: '扫码签到', desc: '二维码快速签到，人脸识别验证，自动记录参会人员信息。' },
  { icon: '🎙️', title: '语音控制', desc: '语音指令控制设备，调节灯光、温度、投影仪，解放双手。' },
  { icon: '📹', title: '视频会议', desc: '一键发起远程会议，支持多方视频连线，高清稳定不卡顿。' },
  { icon: '💡', title: '智能照明', desc: '根据会议场景自动调节灯光，节能环保，营造舒适会议环境。' },
  { icon: '🌡️', title: '温度控制', desc: '智能温控系统，自动调节室温，保持最佳会议舒适度。' },
  { icon: '📊', title: '数据统计', desc: '会议室使用率分析，会议时长统计，为资源配置提供数据支撑。' },
  { icon: '🔔', title: '智能提醒', desc: '会议开始前自动提醒，会议结束前预告，避免占用超时。' }
])

// 解决方案列表
const solutionList = ref([
  { title: '预约智能化', desc: '支持多端预约，实时查看空闲状态，自动检测时间冲突' },
  { title: '签到自动化', desc: '二维码扫码、人脸识别、IC卡多种签到方式' },
  { title: '控制便捷化', desc: '语音控制、触控面板、手机APP多种操作方式' },
  { title: '管理数字化', desc: '自动生成会议报告，使用率分析，资源优化建议' }
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
  color: #2d3748;
  background-color: #f7fafc;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 12px 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo-icon {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.logo-text {
  color: #1a202c;
  font-size: 20px;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 35px;
  margin-left: 40px;
}

.nav-menu a {
  color: #4a5568;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: #3b82f6;
}

.nav-actions {
  margin-left: auto;
  display: flex;
  gap: 12px;
}

.nav-btn {
  padding: 8px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.nav-btn-ghost {
  color: #4a5568;
}

.nav-btn-ghost:hover {
  background: #f7fafc;
  color: #3b82f6;
}

.nav-btn-solid {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  color: white;
}

.nav-btn-solid:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 130px 35px 100px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;
}

.hero-content {
  padding-right: 30px;
}

.hero-badges {
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.hero-badge {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.hero-badge.green {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.hero h1 {
  font-size: 46px;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #1a202c;
  font-weight: 800;
}

.hero h1 .gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 17px;
  color: #718096;
  margin-bottom: 35px;
  line-height: 1.8;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 35px;
}

.hero-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #4a5568;
}

.hero-feature-icon {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  flex-shrink: 0;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 14px 32px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  color: white;
}

.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
}

.hero-btn-secondary {
  background: white;
  color: #4a5568;
  border: 1.5px solid #e2e8f0;
}

.hero-btn-secondary:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.hero-visual {
  position: relative;
}

.hero-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #f0f0f0;
}

.hero-card-header {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-card-title {
  color: white;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-card-status {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 4px 14px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
}

.hero-card-body {
  padding: 25px;
}

.meeting-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.meeting-info-item {
  text-align: center;
  flex: 1;
  padding: 0 10px;
}

.meeting-info-item:not(:last-child) {
  border-right: 1px solid #f0f0f0;
}

.meeting-info-label {
  font-size: 12px;
  color: #718096;
  margin-bottom: 5px;
}

.meeting-info-value {
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
}

.meeting-preview {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  border: 2px dashed rgba(59, 130, 246, 0.2);
  margin-bottom: 20px;
}

.meeting-preview-icon {
  font-size: 50px;
  margin-bottom: 12px;
}

.meeting-preview-text {
  color: #718096;
  font-size: 14px;
}

.meeting-controls {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.meeting-control-btn {
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.meeting-control-btn.start {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  color: white;
}

.meeting-control-btn.start:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.meeting-control-btn.book {
  background: white;
  color: #4a5568;
  border: 1.5px solid #e2e8f0;
}

.meeting-control-btn.book:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.meeting-control-btn.cancel {
  background: #f7fafc;
  color: #e53e3e;
}

.meeting-control-btn.cancel:hover {
  background: #fee2e2;
}

/* Features Section */
.features {
  padding: 100px 35px;
  background: white;
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 60px;
}

.features-header h2 {
  font-size: 36px;
  color: #1a202c;
  margin-bottom: 12px;
  font-weight: 800;
}

.features-header p {
  color: #718096;
  font-size: 16px;
  max-width: 550px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.feature-item {
  background: #f7fafc;
  border-radius: 18px;
  padding: 30px 25px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #3b82f6 0%, #10b981 100%);
  transform: scaleY(0);
  transition: transform 0.3s;
}

.feature-item:hover {
  background: white;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transform: translateY(-5px);
}

.feature-item:hover::before {
  transform: scaleY(1);
}

.feature-icon {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 24px;
}

.feature-item h3 {
  font-size: 18px;
  color: #1a202c;
  margin-bottom: 10px;
  font-weight: 700;
}

.feature-item p {
  color: #718096;
  font-size: 14px;
  line-height: 1.7;
}

/* Solution Section */
.solution {
  padding: 100px 35px;
  background: linear-gradient(180deg, #f7fafc 0%, white 100%);
}

.solution-container {
  max-width: 1400px;
  margin: 0 auto;
}

.solution-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.solution-visual {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.solution-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.solution-card-icon {
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 26px;
}

.solution-card h4 {
  font-size: 17px;
  color: #1a202c;
  margin-bottom: 8px;
  font-weight: 700;
}

.solution-card p {
  color: #718096;
  font-size: 14px;
  margin-bottom: 0;
}

.solution-card.featured {
  grid-column: span 2;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  border: none;
}

.solution-card.featured .solution-card-icon {
  background: rgba(255, 255, 255, 0.2);
}

.solution-card.featured h4,
.solution-card.featured p {
  color: white;
}

.solution-content h2 {
  font-size: 38px;
  color: #1a202c;
  margin-bottom: 20px;
  font-weight: 800;
  line-height: 1.3;
}

.solution-content h2 span {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.solution-content p {
  color: #718096;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 40px;
}

.solution-list {
  list-style: none;
}

.solution-list li {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.solution-list-icon {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
}

.solution-list-text h5 {
  font-size: 16px;
  color: #1a202c;
  margin-bottom: 4px;
  font-weight: 700;
}

.solution-list-text p {
  color: #718096;
  font-size: 14px;
  margin-bottom: 0;
  line-height: 1.6;
}

/* Stats Section */
.stats {
  padding: 80px 35px;
  background: white;
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.stat-card {
  background: #f7fafc;
  border-radius: 16px;
  padding: 35px 25px;
  text-align: center;
  border: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.stat-number {
  font-size: 42px;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  color: #718096;
  font-size: 14px;
  font-weight: 500;
}

/* CTA Section */
.cta {
  padding: 100px 35px;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 38px;
  color: white;
  margin-bottom: 15px;
  font-weight: 800;
}

.cta p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  margin-bottom: 40px;
}

.cta-btn {
  display: inline-block;
  background: white;
  color: #3b82f6;
  padding: 16px 45px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* Footer */
.footer {
  background: #1a202c;
  padding: 60px 35px 25px;
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

.footer-brand .logo {
  margin-bottom: 18px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 20px;
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
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 700;
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
  font-size: 13px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #3b82f6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: #3b82f6;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    padding-right: 0;
  }

  .hero-features {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .solution-grid {
    grid-template-columns: 1fr;
  }

  .solution-visual {
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

  .nav-actions {
    display: none;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero-features {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .solution-visual {
    grid-template-columns: 1fr;
  }

  .solution-card.featured {
    grid-column: span 1;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .cta h2 {
    font-size: 30px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
