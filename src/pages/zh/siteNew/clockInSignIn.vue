<template>
  <div class="clock-in-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-text">
          <span class="hero-badge">✨ 智能打卡签到系统</span>
          <h1>让考勤管理<br /><span>简单高效</span></h1>
          <p>
            基于GPS定位、人脸识别的智能打卡系统，支持多场景考勤需求。精确记录，数据实时同步，让企业管理更轻松。
          </p>
        </div>
      </div>
    </section>

    <!-- 功能特点 -->
    <section id="features" class="features-section">
      <div class="section-header">
        <h2>全方位考勤解决方案</h2>
        <p>
          融合先进技术与人性化设计，为企业提供完整的一站式考勤管理服务
        </p>
      </div>
      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">
            {{ feature.icon }}
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section id="scenarios" class="scenarios-section">
      <div class="section-header">
        <h2>满足多样化考勤需求</h2>
        <p>针对不同行业、不同场景提供专业的考勤解决方案</p>
      </div>
      <div class="scenarios-container">
        <div class="scenarios-grid">
          <div v-for="(scenario, index) in scenarios" :key="index" class="scenario-card">
            <div class="scenario-image" :style="{ background: scenario.bgGradient }">
              {{ scenario.icon }}
            </div>
            <div class="scenario-content">
              <h3>{{ scenario.title }}</h3>
              <p>{{ scenario.desc }}</p>
              <div class="scenario-tags">
                <span v-for="(tag, i) in scenario.tags" :key="i" class="tag">{{ tag }}</span>
              </div>
            </div>
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
// 功能特点数据
const features = ref([
  {
    icon: '📍',
    title: 'GPS精准定位',
    desc: '基于高精度GPS定位技术，支持设置打卡范围，确保员工在指定地点完成打卡，杜绝代打卡现象。'
  },
  {
    icon: '👤',
    title: '人脸识别验证',
    desc: '集成AI人脸识别技术，快速完成身份验证，考勤更准确、更安全，提升企业考勤管理水平。'
  },
  {
    icon: '📊',
    title: '智能统计分析',
    desc: '自动生成考勤报表，多维度数据分析，迟到、早退、缺勤一目了然，为管理决策提供数据支持。'
  },
  {
    icon: '🔔',
    title: '智能提醒通知',
    desc: '上下班前智能推送打卡提醒，避免遗忘打卡，提升员工考勤自觉性，减少考勤异常。'
  },
  {
    icon: '📱',
    title: '多端支持',
    desc: '支持手机APP、微信小程序、Web端等多种打卡方式，随时随地轻松打卡，使用更加便捷。'
  },
  {
    icon: '🔒',
    title: '数据安全保障',
    desc: '采用银行级数据加密技术，确保考勤数据安全存储和传输，保护企业和员工隐私信息。'
  }
])

// 应用场景数据
const scenarios = ref([
  {
    icon: '🏢',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    title: '企业办公',
    desc: '适合固定办公场所，支持WiFi打卡、GPS打卡等多种方式，满足传统企业日常考勤管理需求，提升HR工作效率。',
    tags: ['办公室', '固定考勤', '团队管理']
  },
  {
    icon: '🏗️',
    bgGradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    title: '工程施工',
    desc: '针对建筑工地、项目现场等移动办公场景，支持GPS范围打卡、拍照打卡，确保人员真实到岗，管理更规范。',
    tags: ['工地', '项目管理', '移动办公']
  },
  {
    icon: '🛒',
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    title: '零售连锁',
    desc: '适用于连锁店、商场等零售行业，支持多门店统一管理，实时监控各门店人员到岗情况，运营更高效。',
    tags: ['连锁店', '多门店管理', '排班管理']
  },
  {
    icon: '🚚',
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    title: '物流配送',
    desc: '专为快递员、配送人员设计，支持GPS轨迹记录、路线打卡，实时掌握员工位置和配送进度，调度更灵活。',
    tags: ['快递', '配送', '轨迹追踪']
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
  color: #333;
  background-color: #fff;
}

/* Hero Section - 左右布局 */
.hero {
  display: flex;
  align-items: center;
  min-height: 600px;
  padding: 60px 30px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-text {
  flex: 1;
  text-align: center;
  max-width: 800px;
}

.hero-badge {
  display: inline-block;
  background: rgba(0, 114, 255, 0.1);
  color: #0072ff;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
}

.hero h1 {
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 25px;
  color: #1a1a2e;
  font-weight: 800;
}

.hero h1 span {
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 18px;
  color: #666;
  margin-bottom: 35px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 114, 255, 0.3);
}

.btn-secondary {
  background: white;
  color: #0072ff;
  padding: 16px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #0072ff;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #0072ff;
  color: white;
}

.hero-image {
  flex: 1;
  max-width: 650px;
  position: relative;
}

.hero-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
}

.clock-display {
  text-align: center;
  margin-bottom: 30px;
}

.current-time {
  font-size: 72px;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1;
  margin-bottom: 10px;
}

.current-date {
  font-size: 20px;
  color: #666;
}

.check-in-btn {
  width: 100%;
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
  border: none;
  border-radius: 15px;
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 20px;
}

.check-in-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 114, 255, 0.4);
}

.location-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #666;
  font-size: 15px;
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid #eee;
}

.status-item {
  text-align: center;
}

.status-time {
  font-size: 24px;
  font-weight: 700;
  color: #00c6ff;
}

.status-label {
  font-size: 14px;
  color: #999;
}

/* 功能模块 */
.features-section {
  padding: 100px 30px;
  background: white;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 70px;
}

.section-tag {
  display: inline-block;
  background: linear-gradient(90deg, rgba(0, 198, 255, 0.1), rgba(0, 114, 255, 0.1));
  color: #0072ff;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #1a1a2e;
  font-weight: 700;
}

.section-header p {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.feature-card {
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 15px;
  transition: all 0.3s;
  border: 1px solid transparent;
}

.feature-card:hover {
  background: white;
  border-color: #0072ff;
  box-shadow: 0 15px 40px rgba(0, 114, 255, 0.15);
  transform: translateY(-5px);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 25px;
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1a1a2e;
  font-weight: 700;
}

.feature-card p {
  color: #666;
  font-size: 15px;
  line-height: 1.7;
}

/* 应用场景 */
.scenarios-section {
  padding: 100px 30px;
  background: linear-gradient(180deg, #f5f7fa 0%, #fff 100%);
}

.scenarios-container {
  max-width: 1400px;
  margin: 0 auto;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.scenario-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.scenario-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.scenario-image {
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}

.scenario-content {
  padding: 35px;
}

.scenario-content h3 {
  font-size: 26px;
  margin-bottom: 15px;
  color: #1a1a2e;
  font-weight: 700;
}

.scenario-content p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.scenario-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(0, 114, 255, 0.1);
  color: #0072ff;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 500;
}

/* 数据统计 */
.stats-section {
  padding: 80px 30px;
  background: linear-gradient(135deg, #1a1a2e 0%, #2d3436 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
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
  height: 60%;
  background: rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}

/* CTA Section */
.cta-section {
  padding: 100px 30px;
  background: white;
  text-align: center;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
}

.cta-container h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #1a1a2e;
  font-weight: 700;
}

.cta-container p {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: white;
  padding: 60px 30px 30px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand h3 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 700;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin-bottom: 20px;
}

.footer-links h4 {
  font-size: 18px;
  margin-bottom: 25px;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 15px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #00c6ff;
}

.footer-bottom {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero {
    padding: 40px 20px;
  }

  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image {
    max-width: 100%;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenarios-grid {
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
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .current-time {
    font-size: 48px;
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

  .section-header h2 {
    font-size: 32px;
  }
}
</style>
