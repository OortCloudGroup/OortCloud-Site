<template>
  <div class="mobile-video-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-subtitle">
            移动视频平台
          </div>
          <h1>随时随地<br /><span>高清视频</span>即时沟通</h1>
          <p>专业的移动视频平台，支持实时直播、视频会议、点播回放等功能。无论身在何处，都能保持高效的视觉沟通。</p>
        </div>
      </div>
    </section>

    <!-- 核心功能 -->
    <section id="features" class="features">
      <div class="section-container">
        <div class="section-header">
          <div class="section-badge">
            ✨ 强大功能
          </div>
          <h2>全方位视频解决方案</h2>
          <p>满足企业各种视频通信需求，从实时直播到视频点播，从一对一沟通到多人会议，一应俱全。</p>
        </div>
        <div class="features-grid">
          <div v-for="(item, index) in featureList" :key="index" class="feature-item">
            <div class="feature-icon">
              {{ item.icon }}
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <a href="#" class="feature-link">了解更多 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section id="scenarios" class="scenarios">
      <div class="scenarios-container">
        <div class="section-header">
          <div class="section-badge">
            🎯 应用场景
          </div>
          <h2>丰富的行业应用</h2>
          <p>适用于政府、企业、教育、医疗等多个领域，满足不同行业的视频通信需求。</p>
        </div>
        <div class="scenarios-grid">
          <div v-for="(item, index) in scenarioList" :key="index" class="scenario-card">
            <div class="scenario-image">
              {{ item.icon }}
            </div>
            <div class="scenario-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
              <div class="scenario-tags">
                <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="scenario-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术优势 -->
    <section id="tech" class="tech-advantages">
      <div class="tech-container">
        <div class="section-header">
          <div class="section-badge">
            ⚡ 技术实力
          </div>
          <h2>核心技术优势</h2>
          <p>基于先进的技术架构，为您提供稳定、高效、安全的视频服务体验。</p>
        </div>
        <div class="tech-grid">
          <div v-for="(item, index) in techList" :key="index" class="tech-item">
            <div class="tech-icon">
              {{ item.icon }}
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
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
// 核心功能列表
const featureList = [
  {
    icon: '📡',
    title: '实时直播',
    desc: '支持超低延迟的实时直播，可同时容纳数万观众在线观看，适合企业培训、产品发布等场景。'
  },
  {
    icon: '👥',
    title: '视频会议',
    desc: '高清稳定的多人视频会议，支持屏幕共享、白板协作、会议录制等功能，提升团队协作效率。'
  },
  {
    icon: '🎬',
    title: '点播回放',
    desc: '自动录制直播内容，支持随时回放和点播，让错过直播的用户也能获取完整信息。'
  },
  {
    icon: '🔒',
    title: '安全加密',
    desc: '端到端加密传输，保障视频内容安全。支持权限管理和访问控制，确保信息不外泄。'
  },
  {
    icon: '🌐',
    title: '全球加速',
    desc: '遍布全球的CDN节点，确保视频内容快速传输，无论身在何处都能流畅观看。'
  },
  {
    icon: '📱',
    title: '多端适配',
    desc: '完美支持手机、平板、电脑等各种设备，随时随地都能参与视频沟通。'
  }
]

// 应用场景列表
const scenarioList = [
  {
    icon: '🏛️',
    title: '政务视频',
    desc: '为政府部门提供安全可靠的视频通信平台，支持远程会议、应急指挥、政策宣讲等应用场景。',
    tags: ['远程会议', '应急指挥', '政策宣讲']
  },
  {
    icon: '🏢',
    title: '企业协作',
    desc: '帮助企业建立高效的视频协作体系，支持跨地域团队沟通、客户视频拜访、在线培训等场景。',
    tags: ['团队协作', '客户沟通', '在线培训']
  },
  {
    icon: '🎓',
    title: '在线教育',
    desc: '为教育机构提供专业的在线教学平台，支持直播授课、互动答疑、课程录制等功能。',
    tags: ['直播授课', '互动答疑', '课程回放']
  },
  {
    icon: '🏥',
    title: '远程医疗',
    desc: '为医疗机构提供高清远程诊疗平台，支持远程会诊、手术示教、健康咨询等医疗场景。',
    tags: ['远程会诊', '手术示教', '健康咨询']
  }
]

// 技术优势列表
const techList = [
  {
    icon: '🚀',
    title: '超低延迟',
    desc: '基于WebRTC技术，实现毫秒级视频传输，确保实时互动体验。'
  },
  {
    icon: '🎨',
    title: '4K超清',
    desc: '支持最高4K分辨率，展现最清晰的视频画质细节。'
  },
  {
    icon: '🔄',
    title: '智能转码',
    desc: '自动适配不同网络环境，根据带宽动态调整视频质量。'
  },
  {
    icon: '🛡️',
    title: '安全可靠',
    desc: '多重安全防护机制，保障视频传输和数据存储安全。'
  }
]

</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #7c3aed;
  --secondary-color: #4f46e5;
  --accent-color: #ec4899;
  --success-color: #10b981;
  --dark-bg: #1a1a2e;
  --card-bg: #16213e;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
}

.mobile-video-page {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.7;
  color: var(--text-primary);
  background-color: var(--dark-bg);
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 40px 80px;
  background: linear-gradient(135deg, var(--dark-bg) 0%, #0f0f23 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
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

.hero-subtitle {
  display: inline-block;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%);
  color: var(--primary-color);
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  border: 1px solid rgba(124, 58, 237, 0.3);
  letter-spacing: 1px;
}

.hero-content h1 {
  font-size: 62px;
  line-height: 1.15;
  margin-bottom: 30px;
  font-weight: 900;
  background: linear-gradient(135deg, #333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content h1 span {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content p {
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 580px;
}

.hero-stats {
  display: flex;
  gap: 50px;
  margin-bottom: 40px;
}

.hero-stat-item {
  text-align: left;
}

.hero-stat-item .number {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-stat-item .label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 5px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn-play {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
}

.btn-play:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.5);
}

.btn-demo {
  background: transparent;
  color: var(--text-primary);
  padding: 16px 40px;
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid rgba(124, 58, 237, 0.3);
  transition: all 0.3s ease;
}

.btn-demo:hover {
  background: rgba(124, 58, 237, 0.1);
  border-color: var(--primary-color);
}

.hero-visual {
  position: relative;
}

.video-preview {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 20px;
  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(124, 58, 237, 0.2);
  position: relative;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.video-player {
  background: linear-gradient(135deg, #1e1e3f 0%, #2d2d5a 100%);
  border-radius: 16px;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.video-player::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(45deg, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
    linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
}

.play-button {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(124, 58, 237, 0.5);
  position: relative;
  z-index: 2;
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 50px rgba(124, 58, 237, 0.6);
}

.video-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 15px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  position: relative;
}

.progress-bar::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 35%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 3px;
}

.progress-time {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.floating-card {
  position: absolute;
  background: var(--card-bg);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(124, 58, 237, 0.2);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.floating-card.live {
  top: -30px;
  right: -20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.live-indicator {
  width: 10px;
  height: 10px;
  background: var(--success-color);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.floating-card h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}

.floating-card p {
  font-size: 12px;
  color: var(--text-secondary);
}

/* 核心功能 */
.features {
  padding: 120px 40px;
  background: linear-gradient(180deg, var(--dark-bg) 0%, #12121f 100%);
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(124, 58, 237, 0.1);
  color: var(--primary-color);
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.section-header h2 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 800;
}

.section-header p {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-item {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 40px 35px;
  border: 1px solid rgba(124, 58, 237, 0.15);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.feature-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.2);
  border-color: rgba(124, 58, 237, 0.3);
}

.feature-item:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 25px;
}

.feature-item h3 {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 700;
}

.feature-item p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.feature-link {
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s ease;
}

.feature-link:hover {
  gap: 10px;
}

/* 应用场景 */
.scenarios {
  padding: 120px 40px;
  background: #fff;
}

.scenarios-container {
  max-width: 1400px;
  margin: 0 auto;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 60px;
}

.scenario-card {
  background: var(--card-bg);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(124, 58, 237, 0.15);
  transition: all 0.4s ease;
}

.scenario-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.scenario-image {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  position: relative;
  overflow: hidden;
}

.scenario-image::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.3;
}

/* 为每个场景卡片设置渐变背景 */
.scenarios-grid :nth-child(1) .scenario-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.scenarios-grid :nth-child(2) .scenario-image {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
.scenarios-grid :nth-child(3) .scenario-image {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
.scenarios-grid :nth-child(4) .scenario-image {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.scenario-content {
  padding: 30px;
}

.scenario-content h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
}

.scenario-content p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.scenario-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.scenario-tag {
  background: rgba(124, 58, 237, 0.1);
  color: var(--primary-color);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

/* 技术优势 */
.tech-advantages {
  padding: 120px 40px;
  background: linear-gradient(180deg, #0f0f1e 0%, var(--dark-bg) 100%);
}

.tech-container {
  max-width: 1200px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.tech-item {
  text-align: center;
  padding: 40px 25px;
  background: rgba(124, 58, 237, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(124, 58, 237, 0.1);
  border-color: rgba(124, 58, 237, 0.2);
  transform: translateY(-5px);
}

.tech-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto 20px;
}

.tech-item h4 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 700;
}

.tech-item p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

/* CTA 区域 */
.cta-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></svg>') repeat;
  opacity: 0.3;
}

.cta-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-section h2 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 800;
}

.cta-section p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  gap: 15px;
}

.cta-input {
  flex: 1;
  padding: 16px 25px;
  border-radius: 28px;
  border: none;
  font-size: 15px;
  outline: none;
}

.cta-button {
  background: white;
  color: var(--primary-color);
  padding: 16px 35px;
  border-radius: 28px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* 页脚 */
.footer {
  background: #0a0a15;
  color: white;
  padding: 80px 40px 30px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand h3 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.footer-contact {
  list-style: none;
}

.footer-contact li {
  margin-bottom: 15px;
  color: var(--text-secondary);
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 15px;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid rgba(124, 58, 237, 0.2);
  padding-top: 30px;
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .hero-content h1 {
    font-size: 52px;
  }

  .features-grid,
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content p {
    margin: 0 auto 40px;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .scenarios-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero-content p {
    font-size: 17px;
  }

  .section-header h2 {
    font-size: 36px;
  }

  .features-grid,
  .tech-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }

  .cta-form {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 36px;
  }
}
</style>
