<template>
  <div class="main-container">
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <span class="hero-tag">专业网站设计服务</span>
        <h1>打造<span>极致</span><br />网站设计体验</h1>
        <p>从概念到实现，我们提供全方位的网站设计解决方案。融合创意与技术，为您打造兼具美学与功能性的专业网站，助力品牌在数字时代脱颖而出。</p>
      </div>
    </section>

    <!-- 服务介绍 -->
    <section id="services" class="section services-section">
      <div class="section-header">
        <p class="section-subtitle">
          Our Services
        </p>
        <h2 class="section-title">
          专业设计服务
        </h2>
        <p class="section-desc">
          我们提供全面的网站设计服务，满足您从品牌展示到电商运营的各类需求
        </p>
      </div>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            {{ service.icon }}
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 作品展示 -->
    <section id="portfolio" class="section portfolio-section">
      <div class="section-header">
        <p class="section-subtitle">
          Our Portfolio
        </p>
        <h2 class="section-title">
          精选作品
        </h2>
        <p class="section-desc">
          展示我们为客户打造的优秀网站设计案例
        </p>
      </div>
      <div class="portfolio-filter">
        <button class="filter-btn active" @click="activeFilter = 'all'">
          全部
        </button>
        <button class="filter-btn" @click="activeFilter = 'enterprise'">
          企业官网
        </button>
        <button class="filter-btn" @click="activeFilter = 'ecommerce'">
          电商平台
        </button>
        <button class="filter-btn" @click="activeFilter = 'mobile'">
          移动应用
        </button>
      </div>
      <div class="portfolio-grid">
        <div
          v-for="(item, index) in filteredPortfolio"
          :key="index"
          class="portfolio-item"
        >
          <div class="portfolio-image">
            {{ item.icon }}
          </div>
          <div class="portfolio-info">
            <p class="portfolio-category">
              {{ item.category }}
            </p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 设计流程 -->
    <section id="process" class="section process-section">
      <div class="section-header">
        <p class="section-subtitle">
          Our Process
        </p>
        <h2 class="section-title">
          设计流程
        </h2>
        <p class="section-desc">
          科学规范的设计流程，确保每个项目都能高质量交付
        </p>
      </div>
      <div class="process-timeline">
        <div v-for="(step, index) in processSteps" :key="index" class="process-step">
          <div class="process-dot" />
          <div class="process-content">
            <div class="process-number">
              {{ (index + 1).toString().padStart(2, '0') }}
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
definePageMeta({
  layout: 'site-new'
})
// 服务数据
const services = [
  {
    icon: '🎨',
    title: '品牌网站设计',
    desc: '深入理解品牌定位，打造具有独特视觉识别度的企业官网，提升品牌形象与用户信任度。'
  },
  {
    icon: '📱',
    title: '响应式网页设计',
    desc: '一套设计适配所有设备，确保在桌面、平板、手机上都能呈现完美的用户体验。'
  },
  {
    icon: '🛒',
    title: '电商网站设计',
    desc: '专注转化率优化的电商设计，从商品展示到结算流程，精心设计每个触点。'
  },
  {
    icon: '⚙️',
    title: '后台管理系统',
    desc: '简洁高效的后台界面设计，提升管理效率，降低学习成本。'
  },
  {
    icon: '🚀',
    title: '移动端应用设计',
    desc: '原生与H5应用设计，打造流畅的移动端交互体验。'
  },
  {
    icon: '✨',
    title: 'UI/UX设计',
    desc: '以用户为中心的设计理念，创造直观、愉悦的交互体验。'
  }
]

// 作品数据
const portfolioItems = [
  {
    icon: '🏢',
    category: '企业官网',
    title: '科技企业官网设计',
    desc: '现代简约风格，突出技术实力与创新理念',
    type: 'enterprise'
  },
  {
    icon: '🛍️',
    category: '电商平台',
    title: '时尚电商网站',
    desc: '视觉冲击力强的商品展示与流畅购物体验',
    type: 'ecommerce'
  },
  {
    icon: '📲',
    category: '移动应用',
    title: '金融APP界面设计',
    desc: '专业可信的金融类应用UI设计',
    type: 'mobile'
  },
  {
    icon: '🎓',
    category: '企业官网',
    title: '教育机构网站',
    desc: '亲和力强的教育品牌展示平台',
    type: 'enterprise'
  },
  {
    icon: '🏥',
    category: '企业官网',
    title: '医疗健康网站',
    desc: '专业、可信赖的医疗行业网站设计',
    type: 'enterprise'
  },
  {
    icon: '🎮',
    category: '移动应用',
    title: '游戏官网设计',
    desc: '充满活力与创意的游戏产品展示',
    type: 'mobile'
  }
]

// 筛选状态
const activeFilter = ref('all')

// 筛选后的作品列表
const filteredPortfolio = computed(() => {
  if (activeFilter.value === 'all') {
    return portfolioItems
  }
  return portfolioItems.filter(item => item.type === activeFilter.value)
})

// 设计流程数据
const processSteps = [
  {
    title: '需求分析',
    desc: '深入了解客户需求、目标用户群体及业务目标，制定清晰的项目规划。'
  },
  {
    title: '原型设计',
    desc: '创建低保真原型，梳理信息架构与用户流程，快速验证设计思路。'
  },
  {
    title: '视觉设计',
    desc: '基于原型进行视觉设计，打造符合品牌调性的精美界面。'
  },
  {
    title: '开发实现',
    desc: '将设计转化为代码，确保精准还原设计稿，保证性能与兼容性。'
  },
  {
    title: '测试交付',
    desc: '全面测试网站功能与兼容性，确保完美交付，提供持续支持。'
  }
]

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

/* 导航栏 - 侧边式 */
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 80px;
  height: 100vh;
  background: #1a1a2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 24px;
  transition: all 0.3s;
  position: relative;
}

.nav-item:hover {
  color: #fff;
  transform: scale(1.2);
}

.nav-item.active {
  color: #e94560;
}

.nav-item::after {
  content: attr(data-label);
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: #1a1a2e;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.nav-item:hover::after {
  opacity: 1;
}

/* 主内容区域 */
.main-container {

}

/* Hero Section - 网格背景 */
.hero {
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 100px 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(233, 69, 96, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(233, 69, 96, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  z-index: 1;
  max-width: 800px;
}

.hero-tag {
  display: inline-block;
  background: rgba(233, 69, 96, 0.2);
  color: #e94560;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid rgba(233, 69, 96, 0.3);
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 25px;
  font-weight: 800;
  line-height: 1.2;
}

.hero h1 span {
  color: #e94560;
}

.hero p {
  font-size: 18px;
  opacity: 0.85;
  margin-bottom: 35px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn-primary {
  background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%);
  color: white;
  padding: 16px 35px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(233, 69, 96, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 16px 35px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
}

.btn-secondary:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}

/* 内容区域 */
.section {
  padding: 100px 60px;
}

/* 服务介绍 - 卡片式布局 */
.services-section {
  background: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-subtitle {
  color: #e94560;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 20px;
}

.section-desc {
  color: #666;
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  border-radius: 15px;
  padding: 45px 35px;
  transition: all 0.4s;
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #e94560 0%, #ff6b6b 100%);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(233, 69, 96, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 25px;
}

.service-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1a1a2e;
  font-weight: 700;
}

.service-card p {
  color: #666;
  font-size: 15px;
  line-height: 1.7;
}

/* 作品展示 - 瀑布流式 */
.portfolio-section {
  background: white;
}

.portfolio-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 30px;
  background: white;
  border: 2px solid #eee;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover, .filter-btn.active {
  border-color: #e94560;
  color: #e94560;
  background: rgba(233, 69, 96, 0.05);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio-item {
  background: #f8f9fa;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.portfolio-image {
  height: 250px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: relative;
  overflow: hidden;
}

.portfolio-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(233, 69, 96, 0.9);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio-item:hover .portfolio-image::after {
  opacity: 1;
}

.portfolio-info {
  padding: 25px;
}

.portfolio-category {
  color: #e94560;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.portfolio-info h3 {
  font-size: 20px;
  color: #1a1a2e;
  margin-bottom: 10px;
  font-weight: 700;
}

.portfolio-info p {
  color: #666;
  font-size: 14px;
}

/* 设计流程 - 步骤式 */
.process-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
}

.process-section .section-title,
.process-section .section-desc {
  color: white;
}

.process-section .section-desc {
  opacity: 0.7;
}

.process-timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: rgba(233, 69, 96, 0.3);
}

.process-step {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  position: relative;
}

.process-step:nth-child(even) {
  flex-direction: row-reverse;
}

.process-step:last-child {
  margin-bottom: 0;
}

.process-dot {
  width: 20px;
  height: 20px;
  background: #e94560;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 10px rgba(233, 69, 96, 0.2);
  z-index: 1;
}

.process-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px 40px;
  border-radius: 15px;
  margin: 0 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.process-step:nth-child(odd) .process-content {
  margin-left: 0;
  margin-right: 40px;
  text-align: right;
}

.process-step:nth-child(even) .process-content {
  margin-right: 0;
  margin-left: 40px;
  text-align: left;
}

.process-number {
  font-size: 48px;
  font-weight: 800;
  color: rgba(233, 69, 96, 0.3);
  margin-bottom: 10px;
}

.process-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 700;
}

.process-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.7;
}

/* CTA区域 */
.cta-section {
  background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%);
  color: white;
  text-align: center;
  padding: 100px 60px;
}

.cta-section h2 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 35px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-btn {
  display: inline-block;
  background: white;
  color: #e94560;
  padding: 18px 45px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.6);
  padding: 60px 60px 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.footer-col h4 {
  color: white;
  font-size: 18px;
  margin-bottom: 25px;
  font-weight: 700;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 12px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 15px;
}

.footer-col a:hover {
  color: #e94560;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero h1 {
    font-size: 42px;
  }

  .section {
    padding: 80px 40px;
  }

  .process-timeline::before {
    left: 20px;
  }

  .process-step,
  .process-step:nth-child(even) {
    flex-direction: row;
  }

  .process-dot {
    left: 20px;
  }

  .process-step:nth-child(odd) .process-content,
  .process-step:nth-child(even) .process-content {
    margin-left: 50px;
    margin-right: 0;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .navbar {
    width: 60px;
  }

  .main-container {
    margin-left: 60px;
  }

  .hero {
    padding: 80px 30px;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .services-grid,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 32px;
  }
}
</style>
