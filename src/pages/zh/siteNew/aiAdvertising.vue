<template>
  <div class="ai-promoter">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>智能化<span>AI宣传员</span><br />引领营销新纪元</h1>
          <p>基于先进的人工智能技术，打造全天候、智能化的品牌宣传与客户服务解决方案。让AI成为您最得力的营销助手，7×24小时在线，精准触达每一位潜在客户。</p>
        </div>
      </div>
    </section>

    <!-- 功能特点 -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="section-header">
          <h2>核心功能</h2>
          <p>全方位智能化营销解决方案，赋能品牌价值增长</p>
        </div>
        <div class="feature-cards">
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

    <!-- 应用场景 -->
    <section id="scenarios" class="scenarios">
      <div class="scenarios-container">
        <div class="section-header">
          <h2>应用场景</h2>
          <p>适用于各行各业，满足多样化营销需求</p>
        </div>
        <div class="scenario-list">
          <div v-for="(scenario, index) in scenariosList" :key="index" class="scenario-item">
            <div class="scenario-icon">
              {{ scenario.icon }}
            </div>
            <div class="scenario-content">
              <h4>{{ scenario.title }}</h4>
              <p>{{ scenario.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 优势对比 -->
    <section id="comparison" class="comparison">
      <div class="comparison-container">
        <div class="section-header">
          <h2>优势对比</h2>
          <p>AI宣传员 vs 传统客服，智能升级显而易见</p>
        </div>
        <div class="comparison-table">
          <div class="comparison-header">
            <div>对比维度</div>
            <div>传统客服</div>
            <div>AI宣传员</div>
          </div>
          <div v-for="(item, index) in comparisonList" :key="index" class="comparison-row">
            <div>{{ item.dimension }}</div>
            <div>{{ item.traditional }}</div>
            <div class="ai-highlight">
              {{ item.aiPromoter }}
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
// 核心功能列表
const featuresList = [
  { icon: '💬', title: '智能对话', desc: '基于自然语言处理技术，实现流畅的人机交互，准确理解用户意图，提供精准回应。' },
  { icon: '🎯', title: '精准营销', desc: '通过用户画像和行为分析，精准定位目标客户，实现个性化营销内容推送。' },
  { icon: '📊', title: '数据分析', desc: '实时收集和分析用户数据，生成详细报告，为营销决策提供数据支撑。' },
  { icon: '🌐', title: '多语言支持', desc: '支持中英文等多种语言交互，打破语言壁垒，服务全球用户。' },
  { icon: '⚡', title: '快速部署', desc: '简单的配置流程，快速上线使用，无需复杂的技术背景即可轻松部署。' },
  { icon: '🔒', title: '安全可靠', desc: '采用企业级安全防护措施，保护用户数据隐私，确保系统稳定运行。' }
]

// 应用场景列表
const scenariosList = [
  { icon: '🏢', title: '企业官网', desc: '作为官网智能客服，为访客提供咨询服务，解答常见问题，提升用户体验。' },
  { icon: '🛒', title: '电商平台', desc: '智能推荐商品，解答购物咨询，处理售后问题，提高转化率和客户满意度。' },
  { icon: '📱', title: '社交媒体', desc: '在社交平台自动回复用户互动，维护品牌形象，扩大品牌影响力。' },
  { icon: '🎓', title: '教育培训', desc: '提供课程咨询、学习指导，个性化推荐学习内容，提升教学服务质量。' },
  { icon: '🏥', title: '医疗健康', desc: '提供健康咨询、预约挂号服务，减轻医护人员压力，提高服务效率。' },
  { icon: '🏨', title: '酒店旅游', desc: '智能预订、景点推荐、行程规划，为旅客提供一站式服务体验。' }
]

// 优势对比列表
const comparisonList = [
  { dimension: '服务时间', traditional: '工作时间有限', aiPromoter: '7×24小时全天候' },
  { dimension: '响应速度', traditional: '需要排队等待', aiPromoter: '秒级即时响应' },
  { dimension: '服务成本', traditional: '人力成本高昂', aiPromoter: '大幅降低成本' },
  { dimension: '并发能力', traditional: '同时服务有限', aiPromoter: '支持无限并发' },
  { dimension: '数据分析', traditional: '人工统计效率低', aiPromoter: '自动实时分析' },
  { dimension: '服务质量', traditional: '受情绪影响大', aiPromoter: '始终稳定优质' }
]

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.ai-promoter {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #0a0a1a;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  min-height: 600px;
  display: flex;
  align-items: center;
  padding: 120px 40px 60px;
  position: relative;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.15) 0%, transparent 50%);
  pointer-events: none;
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

.hero-content h1 {
  text-align: center;
  font-size: 60px;
  margin-bottom: 25px;
  color: white;
  font-weight: 700;
  line-height: 1.2;
}

.hero-content h1 span {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content p {
  text-align: center;
  font-size: 18px;
  color: #aaa;
  margin-bottom: 35px;
  line-height: 1.8;
  max-width: 550px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  cursor: pointer;
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
}

.hero-btn-secondary {
  background: transparent;
  color: white;
  padding: 16px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid rgba(102, 126, 234, 0.5);
  transition: all 0.3s;
  cursor: pointer;
}

.hero-btn-secondary:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: #667eea;
}

.hero-visual {
  position: relative;
}

.hero-card {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  backdrop-filter: blur(10px);
}

.hero-card::before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(30px);
}

.ai-avatar {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
}

.ai-avatar::after {
  content: '';
  position: absolute;
  width: 140px;
  height: 140px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
      transform: scale(1);
      opacity: 0.5;
  }
  50% {
      transform: scale(1.1);
      opacity: 0.2;
  }
}

.chat-messages {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 20px;
  margin-top: 25px;
}

.message {
  background: rgba(102, 126, 234, 0.2);
  color: #fff;
  padding: 12px 18px;
  border-radius: 15px 15px 15px 5px;
  margin-bottom: 12px;
  font-size: 14px;
}

.message.user {
  background: rgba(118, 75, 162, 0.3);
  border-radius: 15px 15px 5px 15px;
  text-align: right;
}

/* 功能区域 */
.features {
  padding: 100px 40px;
  position: relative;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-header h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;
}

.section-header p {
  color: #aaa;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.8) 0%, rgba(30, 30, 60, 0.8) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  padding: 40px 30px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 28px;
}

.feature-card h3 {
  font-size: 22px;
  color: white;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-card p {
  color: #999;
  font-size: 15px;
  line-height: 1.7;
}

/* 应用场景 */
.scenarios {
  padding: 100px 40px;
  background: rgba(10, 10, 26, 0.5);
}

.scenarios-container {
  max-width: 1400px;
  margin: 0 auto;
}

.scenario-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.scenario-item {
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.6) 0%, rgba(30, 30, 60, 0.6) 100%);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 16px;
  padding: 35px;
  display: flex;
  gap: 25px;
  transition: all 0.3s;
}

.scenario-item:hover {
  border-color: rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, rgba(25, 25, 50, 0.8) 0%, rgba(35, 35, 70, 0.8) 100%);
}

.scenario-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.scenario-content h4 {
  font-size: 20px;
  color: white;
  margin-bottom: 12px;
  font-weight: 600;
}

.scenario-content p {
  color: #999;
  font-size: 15px;
  line-height: 1.7;
}

/* 优势对比 */
.comparison {
  padding: 100px 40px;
}

.comparison-container {
  max-width: 1200px;
  margin: 0 auto;
}

.comparison-table {
  background: rgba(20, 20, 40, 0.6);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  overflow: hidden;
}

.comparison-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  padding: 25px;
}

.comparison-header div {
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 25px;
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row > div {
  color: #ccc;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comparison-row > div:first-child {
  justify-content: flex-start;
  font-weight: 500;
}

.comparison-row .ai-highlight {
  color: #667eea;
  font-weight: 600;
}

/* 数据展示 */
.stats-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
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
  text-align: center;
  padding: 40px 20px;
}

.stat-number {
  font-size: 56px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
}

.stat-label {
  color: #aaa;
  font-size: 16px;
}

/* CTA区域 */
.cta-section {
  padding: 120px 40px;
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-content p {
  color: #aaa;
  font-size: 18px;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-input-group {
  display: flex;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.cta-input {
  flex: 1;
  padding: 16px 25px;
  border-radius: 30px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  background: rgba(20, 20, 40, 0.8);
  color: white;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.cta-input:focus {
  border-color: #667eea;
}

.cta-input::placeholder {
  color: #666;
}

.cta-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

/* 页脚 */
.footer {
  background: rgba(5, 5, 15, 0.9);
  padding: 50px 40px 30px;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
}

.footer-brand h3 {
  color: white;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
}

.footer-brand p {
  color: #888;
  font-size: 14px;
  line-height: 1.8;
  max-width: 300px;
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
  color: #888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #667eea;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.footer-bottom p {
  color: #666;
  font-size: 13px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
      grid-template-columns: 1fr;
      text-align: center;
  }

  .hero-content h1 {
      font-size: 42px;
  }

  .hero-content p {
      margin-left: auto;
      margin-right: auto;
  }

  .hero-buttons {
      justify-content: center;
  }

  .feature-cards {
      grid-template-columns: repeat(2, 1fr);
  }

  .scenario-list {
      grid-template-columns: 1fr;
  }

  .stats-grid {
      grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
      grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu {
      display: none;
  }

  .hero-content h1 {
      font-size: 32px;
  }

  .hero-content p {
      font-size: 16px;
  }

  .hero-buttons {
      flex-direction: column;
  }

  .feature-cards {
      grid-template-columns: 1fr;
  }

  .comparison-header,
  .comparison-row {
      grid-template-columns: 1fr;
      gap: 15px;
  }

  .comparison-row > div {
      justify-content: center;
  }

  .stats-grid {
      grid-template-columns: 1fr;
  }

  .cta-input-group {
      flex-direction: column;
  }

  .footer-content {
      grid-template-columns: 1fr;
  }
}
</style>
