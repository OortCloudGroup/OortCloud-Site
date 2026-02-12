<template>
  <div class="news-push-app">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-tag">
            <span>🔥</span>
            <span>智能新闻推送系统</span>
          </div>
          <h1>让新闻推送<br /><span>更精准更高效</span></h1>
          <p>基于AI智能推荐算法，精准匹配用户兴趣，实现新闻内容的个性化推送。支持多渠道分发、实时监控、数据分析，助力企业提升内容传播效果。</p>
        </div>
      </div>
    </section>

    <!-- 功能特点 -->
    <section id="features" class="features-section">
      <div class="section-header">
        <h2>强大功能，智能推送</h2>
        <p>基于先进算法与技术，为企业提供全方位的新闻推送解决方案</p>
      </div>
      <div class="features-grid">
        <div v-for="(feature, index) in featuresList" :key="index" class="feature-card">
          <div class="feature-icon-wrapper">
            {{ feature.icon }}
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 新闻频道 -->
    <section id="channels" class="channels-section">
      <div class="channels-header">
        <h2>丰富的新闻频道</h2>
        <p>覆盖多个领域，满足不同用户的阅读需求</p>
      </div>
      <div class="channels-grid">
        <div v-for="(channel, index) in channelsList" :key="index" class="channel-card">
          <div class="channel-icon">
            {{ channel.icon }}
          </div>
          <h3>{{ channel.title }}</h3>
          <p>{{ channel.desc }}</p>
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
// 功能特点列表
const featuresList = ref([
  {
    icon: '🎯',
    title: '智能推荐',
    desc: '基于用户行为分析和兴趣偏好，运用AI算法实现精准的个性化内容推荐，提升用户阅读体验。'
  },
  {
    icon: '📊',
    title: '数据分析',
    desc: '实时监控推送数据，提供详细的阅读率、点击率、分享率等多维度分析报告，优化推送策略。'
  },
  {
    icon: '⚡',
    title: '实时推送',
    desc: '支持实时新闻推送，第一时间将重要资讯送达用户，确保信息时效性，提升用户粘性。'
  },
  {
    icon: '🌐',
    title: '多渠道分发',
    desc: '支持APP、微信、短信、邮件等多种推送渠道，一站式管理，覆盖更广泛的用户群体。'
  },
  {
    icon: '🔔',
    title: '定时推送',
    desc: '灵活设置推送时间，支持定时、周期性推送策略，选择最佳时机触达目标用户。'
  },
  {
    icon: '🛡️',
    title: '内容审核',
    desc: '内置智能内容审核系统，自动识别违规内容，确保推送内容合规安全，降低运营风险。'
  }
])

// 新闻频道列表
const channelsList = ref([
  { icon: '🔴', title: '时事热点', desc: '最新国内外新闻' },
  { icon: '💰', title: '财经资讯', desc: '金融市场动态' },
  { icon: '💻', title: '科技前沿', desc: '技术创新趋势' },
  { icon: '🏢', title: '企业动态', desc: '商业新闻资讯' },
  { icon: '🎮', title: '娱乐八卦', desc: '明星影视资讯' },
  { icon: '⚽', title: '体育竞技', desc: '赛事新闻动态' },
  { icon: '🏥', title: '健康生活', desc: '养生保健知识' },
  { icon: '🚗', title: '汽车资讯', desc: '行业新车发布' }
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
  background-color: #fff;
}

/* Hero Section - 左侧文字右侧内容 */
.hero {
  background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
  padding: 100px 30px;
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
  background: radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
}

.hero h1 {
  font-size: 60px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1f2937;
  font-weight: 800;
}

.hero h1 span {
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
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

.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-large {
  padding: 16px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
}

.btn-primary-orange {
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.25);
}

.btn-primary-orange:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(239, 68, 68, 0.35);
}

.btn-white {
  background: white;
  color: #ef4444;
  border: 2px solid #fee2e2;
}

.btn-white:hover {
  border-color: #ef4444;
}

.hero-visual {
  flex: 1;
  display: flex;
  gap: 20px;
}

.news-card-preview {
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 380px;
}

.news-card-preview.small {
  max-width: 280px;
  transform: translateY(30px);
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.preview-category {
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.preview-time {
  font-size: 12px;
  color: #9ca3af;
}

.preview-title {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 10px;
  line-height: 1.4;
}

.preview-excerpt {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
}

.preview-image {
  width: 100%;
  height: 140px;
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 15px;
}

.preview-actions {
  display: flex;
  gap: 10px;
}

.preview-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.preview-btn-read {
  background: #fef2f2;
  color: #ef4444;
}

.preview-btn-read:hover {
  background: #fee2e2;
}

.preview-btn-share {
  background: #fff7ed;
  color: #f97316;
}

.preview-btn-share:hover {
  background: #ffedd5;
}

/* 功能特点 */
.features-section {
  padding: 100px 30px;
  background: white;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 70px;
}

.section-header h2 {
  font-size: 40px;
  margin-bottom: 18px;
  color: #1f2937;
  font-weight: 700;
}

.section-header p {
  font-size: 18px;
  color: #6b7280;
  line-height: 1.7;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #fafafa;
  padding: 40px 35px;
  border-radius: 16px;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.feature-card:hover {
  background: white;
  border-color: #ef4444;
  box-shadow: 0 15px 40px rgba(239, 68, 68, 0.15);
  transform: translateY(-5px);
}

.feature-icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 25px;
}

/* 为每个feature-card的icon-wrapper设置渐变背景 */
.features-grid :nth-child(1) .feature-icon-wrapper {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.features-grid :nth-child(2) .feature-icon-wrapper {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.features-grid :nth-child(3) .feature-icon-wrapper {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.features-grid :nth-child(4) .feature-icon-wrapper {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
}

.features-grid :nth-child(5) .feature-icon-wrapper {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
}

.features-grid :nth-child(6) .feature-icon-wrapper {
  background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1f2937;
  font-weight: 700;
}

.feature-card p {
  color: #6b7280;
  font-size: 15px;
  line-height: 1.7;
}

/* 新闻频道 */
.channels-section {
  padding: 100px 30px;
  background: #fafafa;
}

.channels-header {
  text-align: center;
  margin-bottom: 60px;
}

.channels-header h2 {
  font-size: 40px;
  margin-bottom: 18px;
  color: #1f2937;
  font-weight: 700;
}

.channels-header p {
  font-size: 18px;
  color: #6b7280;
}

.channels-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.channel-card {
  background: white;
  border-radius: 16px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
}

.channel-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.channel-icon {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto 20px;
}

/* 为每个channel-card的icon设置渐变背景 */
.channels-grid :nth-child(1) .channel-icon {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.channels-grid :nth-child(2) .channel-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.channels-grid :nth-child(3) .channel-icon {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.channels-grid :nth-child(4) .channel-icon {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.channels-grid :nth-child(5) .channel-icon {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.channels-grid :nth-child(6) .channel-icon {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

.channels-grid :nth-child(7) .channel-icon {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}

.channels-grid :nth-child(8) .channel-icon {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
}

.channel-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #1f2937;
  font-weight: 700;
}

.channel-card p {
  font-size: 13px;
  color: #9ca3af;
}

/* 推送统计 */
.stats-section {
  padding: 90px 30px;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
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
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
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
  color: #1f2937;
  font-weight: 800;
}

.cta-container p {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 40px;
  line-height: 1.7;
}

/* 页脚 */
.footer {
  background: #1f2937;
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
  color: #ef4444;
}

.footer-bottom {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-visual {
    width: 100%;
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .channels-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .hero-visual {
    flex-direction: column;
  }

  .news-card-preview.small {
    transform: translateY(0);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .channels-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
