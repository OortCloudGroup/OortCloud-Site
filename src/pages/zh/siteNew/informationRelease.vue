<template>
  <div class="info-publish-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span>🔔</span>
            <span>智能信息发布系统</span>
          </div>
          <h1>让信息发布<br /><span>更精准更高效</span></h1>
          <p>一站式信息发布平台，支持多渠道一键发布、智能审核、数据追踪。<br />帮助企业快速触达目标用户，提升信息传播效率，降低运营成本。</p>
        </div>
      </div>
    </section>

    <!-- 发布渠道 -->
    <section id="channels" class="channels-section">
      <div class="section-container">
        <div class="section-header">
          <h2>多渠道一键发布</h2>
          <p>支持多种发布渠道，一次编辑，多处发布</p>
        </div>
        <div class="channels-grid">
          <div v-for="(channel, index) in channels" :key="index" class="channel-card">
            <div class="channel-icon">
              {{ channel.icon }}
            </div>
            <h3>{{ channel.name }}</h3>
            <p>{{ channel.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能特点 -->
    <section id="features" class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>核心功能特点</h2>
          <p>全方位的信息发布解决方案</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.name }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 发布流程 -->
    <section id="process" class="process-section">
      <div class="process-container">
        <div class="process-header">
          <h2>简单四步，完成发布</h2>
          <p>无需复杂操作，快速上手，轻松发布信息</p>
        </div>
        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step">
            <div class="step-icon">
              {{ step.icon }}
            </div>
            <h3>{{ step.name }}</h3>
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
// 发布渠道数据
const channels = ref([
  {
    icon: '📱',
    name: '移动APP',
    desc: '支持企业自有APP推送，精准触达移动端用户'
  },
  {
    icon: '💬',
    name: '微信',
    desc: '支持微信公众号、小程序、企业微信发布'
  },
  {
    icon: '🌐',
    name: '网站',
    desc: '支持企业官网、门户网站信息发布'
  },
  {
    icon: '📧',
    name: '邮件',
    desc: '支持邮件群发，一键发送给目标用户'
  }
])

// 功能特点数据
const features = ref([
  {
    icon: '📝',
    name: '富文本编辑',
    desc: '支持图文混排、视频嵌入、表格插入，丰富的编辑工具让内容更生动。'
  },
  {
    icon: '👁️',
    name: '预览审核',
    desc: '发布前实时预览效果，支持多级审核流程，确保信息准确无误。'
  },
  {
    icon: '⏰',
    name: '定时发布',
    desc: '支持设置发布时间，自动定时推送，选择最佳发布时机。'
  },
  {
    icon: '📊',
    name: '数据统计',
    desc: '实时追踪阅读量、点赞量、分享量等数据，生成分析报告。'
  },
  {
    icon: '🎯',
    name: '精准推送',
    desc: '基于用户画像和标签，实现精准分群推送，提升触达率。'
  },
  {
    icon: '🔄',
    name: '版本管理',
    desc: '支持内容版本管理，可随时查看历史版本，支持内容回滚。'
  }
])

// 发布流程数据
const processSteps = ref([
  {
    icon: '📝',
    name: '创建内容',
    desc: '使用富文本编辑器编写信息内容，支持图文、视频等多媒体'
  },
  {
    icon: '👁️',
    name: '预览审核',
    desc: '实时预览发布效果，提交审核流程'
  },
  {
    icon: '🎯',
    name: '选择渠道',
    desc: '选择发布渠道和目标用户群体'
  },
  {
    icon: '🚀',
    name: '一键发布',
    desc: '设置发布时间，一键推送到各渠道'
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
  color: #1e293b;
  background-color: #fff;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 0 40px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.logo-text {
  font-size: 24px;
  font-weight: 800;
  color: #1e293b;
}

.logo-text span {
  color: #f59e0b;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-menu a {
  color: #475569;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -26px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #f97316);
  transition: width 0.3s;
}

.nav-menu a:hover {
  color: #f59e0b;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.nav-btn {
  padding: 11px 28px;
  border-radius: 11px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s;
}

.nav-btn-outline {
  color: #f59e0b;
  border: 2px solid #f59e0b;
}

.nav-btn-outline:hover {
  background: #f59e0b;
  color: white;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
}

/* Hero Section - 信息流展示 */
.hero {
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  padding: 90px 30px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%);
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

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  color: #f59e0b;
  padding: 10px 22px;
  border-radius: 28px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 28px;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.1);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1e293b;
  font-weight: 800;
}

.hero h1 span {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
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

.btn-primary-orange {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.25);
}

.btn-primary-orange:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(245, 158, 11, 0.35);
}

.btn-white {
  background: white;
  color: #f59e0b;
  border: 2px solid #fef3c7;
}

.btn-white:hover {
  border-color: #f59e0b;
}

.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: white;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.info-category {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.info-time {
  font-size: 13px;
  color: #9ca3af;
}

.info-title {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1.4;
}

.info-content {
  font-size: 15px;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 20px;
}

.info-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #f1f5f9;
}

.info-author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 14px;
}

.author-name {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.info-stats {
  display: flex;
  gap: 15px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #64748b;
}

/* 发布渠道 */
.channels-section {
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

.channels-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.channel-card {
  background: #fafafa;
  padding: 35px 25px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.channel-card:hover {
  background: white;
  border-color: #f59e0b;
  box-shadow: 0 15px 40px rgba(245, 158, 11, 0.12);
  transform: translateY(-5px);
}

.channel-icon {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 20px;
}

.channel-card:nth-child(1) .channel-icon {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
}

.channel-card:nth-child(2) .channel-icon {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.channel-card:nth-child(3) .channel-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
}

.channel-card:nth-child(4) .channel-icon {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

.channel-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #1e293b;
  font-weight: 700;
}

.channel-card p {
  font-size: 13px;
  color: #64748b;
}

/* 功能特点 */
.features-section {
  padding: 100px 30px;
  background: linear-gradient(180deg, #fafafa 0%, #fff 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px 35px;
  border-radius: 18px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  border: 2px solid transparent;
}

.feature-card:hover {
  border-color: #f59e0b;
  box-shadow: 0 15px 40px rgba(245, 158, 11, 0.12);
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
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.feature-card:nth-child(2) .feature-icon {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.feature-card:nth-child(3) .feature-icon {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.feature-card:nth-child(4) .feature-icon {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
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

/* 发布流程 */
.process-section {
  padding: 100px 30px;
  background: white;
}

.process-container {
  max-width: 1000px;
  margin: 0 auto;
}

.process-header {
  text-align: center;
  margin-bottom: 70px;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 30px;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 45px;
  left: 10%;
  right: 10%;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #f97316);
}

.process-step {
  text-align: center;
  flex: 1;
  position: relative;
}

.step-icon {
  width: 90px;
  height: 90px;
  background: white;
  border: 3px solid #f59e0b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0 auto 25px;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.2);
}

.process-step h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #1e293b;
  font-weight: 700;
}

.process-step p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
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

.stat-card {
  text-align: center;
  padding: 35px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 52px;
  font-weight: 800;
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
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
  color: #f97316;
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

  .hero-visual {
    justify-content: center;
  }

  .channels-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    flex-wrap: wrap;
  }

  .process-steps::before {
    display: none;
  }

  .process-step {
    flex: 1 1 calc(50% - 30px);
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .channels-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .process-step {
    flex: 1 1 100%;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
