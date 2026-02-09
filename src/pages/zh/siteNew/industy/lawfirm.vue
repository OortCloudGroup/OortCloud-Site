<template>
  <div class="law-firm-container">
    <section class="banner">
      <div class="container">
        <!-- 添加版心容器 -->
        <div class="banner-content">
          <h1>智慧律所</h1>
          <p>以AI和大数据技术为核心，为现代律师事务所提供全方位数字化解决方案，<br />提升办案效率，优化客户体验</p>
        </div>
      </div>
    </section>
    <!-- 主要内容 -->
    <main class="main-content">
      <!-- 功能特性 -->
      <section id="features" class="features-section">
        <div class="container">
          <!-- 添加版心容器 -->
          <div class="section-header">
            <h2>核心功能</h2>
            <p>六大核心模块，全面覆盖律所管理需求</p>
          </div>

          <div v-for="(item, index) in featureList" :key="index" class="feature-item">
            <div class="feature-visual">
              {{ item.icon }}
            </div>
            <div class="feature-content">
              <div class="feature-number">
                {{ numberFormat(index + 1) }}
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 应用场景 -->
      <section id="scenarios" class="scenarios-section">
        <div class="container">
          <!-- 添加版心容器 -->
          <div class="section-header">
            <h2>应用场景</h2>
            <p>适配不同规模和类型的律师事务所</p>
          </div>

          <div class="timeline">
            <div v-for="(scenario, index) in scenariosList" :key="index" class="timeline-item">
              <div class="timeline-dot" />
              <div class="timeline-content">
                <h3>{{ scenario.title }}</h3>
                <p>{{ scenario.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 核心优势 -->
      <section id="advantages" class="advantages-section">
        <div class="container">
          <!-- 添加版心容器 -->
          <div class="section-header">
            <h2>核心优势</h2>
            <p>为什么选择我们的智慧律所解决方案</p>
          </div>

          <div class="advantages-grid">
            <div v-for="(advantage, index) in advantagesList" :key="index" class="advantage-card">
              <div class="advantage-icon">
                {{ advantage.icon }}
              </div>
              <h3>{{ advantage.title }}</h3>
              <p>{{ advantage.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})
// 功能特性列表
const featureList = ref([
  {
    icon: '⚖️',
    title: '案件全流程管理',
    desc: '从立案到结案，全流程数字化管理。支持案件分类、进度跟踪、文书生成、归档管理等，让每个案件都井然有序'
  },
  {
    icon: '📅',
    title: '智能日程协同',
    desc: '开庭提醒、任务分配、日程共享，支持团队协作。重要事项智能提醒，确保不错过任何关键时刻'
  },
  {
    icon: '💼',
    title: '客户关系管理',
    desc: '建立完整的客户档案，记录服务历史，跟踪客户满意度。支持客户标签分类，实现精准营销'
  },
  {
    icon: '📊',
    title: '财务计费系统',
    desc: '自动计算律师费、差旅费等各类费用，支持多种计费方式。一键生成发票和财务报表，简化财务管理'
  },
  {
    icon: '🔍',
    title: '法律智能检索',
    desc: '海量法规案例库，智能检索精准匹配。AI分析相似案例，提供办案参考，提升研究效率'
  },
  {
    icon: '📱',
    title: '移动办公平台',
    desc: '手机APP随时随地处理工作，支持在线审批、文件共享、视频会议，打破时空限制'
  }
])

// 应用场景列表
const scenariosList = ref([
  {
    title: '综合律所',
    desc: '多业务领域统一管理，团队协作高效，知识库共享，提升整体竞争力'
  },
  {
    title: '精品律所',
    desc: '专注专业领域深耕，客户精细化管理，品牌影响力建设，打造行业标杆'
  },
  {
    title: '个人律师',
    desc: '轻量化管理工具，个人品牌打造，客户关系维护，提升服务品质'
  },
  {
    title: '律所联盟',
    desc: '跨所协作平台，资源整合共享，业务协同发展，构建法律服务生态'
  }
])

// 核心优势列表
const advantagesList = ref([
  {
    icon: '🎯',
    title: '专业定制',
    desc: '深度理解法律行业，提供符合律师工作习惯的专业解决方案，量身定制'
  },
  {
    icon: '🔒',
    title: '安全可靠',
    desc: '数据加密传输，权限精细管控，操作全程日志，确保客户信息安全'
  },
  {
    icon: '🚀',
    title: '快速部署',
    desc: '模块化设计，灵活配置，私有化部署，快速上线使用'
  },
  {
    icon: '🔗',
    title: '开放生态',
    desc: '标准化API接口，易于集成第三方系统，支持定制化开发'
  },
  {
    icon: '📚',
    title: '持续升级',
    desc: '专业研发团队，定期功能升级，紧跟行业发展趋势'
  },
  {
    icon: '💬',
    title: '专属服务',
    desc: '专属客服支持，7x24小时在线，全程实施培训服务'
  }
])

const numberFormat = (value) => {
  return value.toString().padStart(2, '0')
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

/* 核心版心样式 - 1400px 固定宽度 */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 400px;
  color: white;
  padding: 8rem 0 4rem; /* 修改为上下内边距，左右由container控制 */
  text-align: center;
  position: relative;
  overflow: hidden;
}

.banner-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.banner p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.banner-btn {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 12px 32px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.banner-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 80px;
  height: 100%;
  background: #1e3a8a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  z-index: 1000;
  transition: width 0.3s;
}

.sidebar:hover {
  width: 200px;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
}

.nav-links {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.nav-links a {
  display: flex;
  align-items: center;
  padding: 1.2rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
  white-space: nowrap;
  overflow: hidden;
}

.nav-links a:hover {
  background: rgba(255,255,255,0.1);
}

.nav-links span {
  margin-left: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.sidebar:hover .nav-links span {
  opacity: 1;
}

/* 主要内容区域 */
.main-content {
  min-height: 100vh;
}

/* Hero区域 - 分屏设计 */
.hero {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.hero-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0; /* 修改为上下内边距 */
}

.hero-right {
  flex: 1;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-right::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  top: -100px;
  right: -100px;
}

.hero-tag {
  display: inline-block;
  background: #dbeafe;
  color: #1e3a8a;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.hero h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.hero p {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background: #1e3a8a;
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(30, 58, 138, 0.3);
}

.btn-secondary {
  background: white;
  color: #1e3a8a;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 2px solid #1e3a8a;
  cursor: pointer;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(30, 58, 138, 0.2);
}

.hero-visual {
  text-align: center;
  color: white;
}

.hero-visual h2 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-visual p {
  font-size: 1.5rem;
  opacity: 0.9;
}

/* 功能列表 - 左右交替布局 */
.features-section {
  padding: 6rem 0; /* 修改为上下内边距，左右由container控制 */
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
}

.feature-item:nth-child(even) {
  flex-direction: row-reverse;
}

.feature-visual {
  flex: 1;
  height: 350px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}

.feature-content {
  flex: 1;
}

.feature-number {
  font-size: 6rem;
  font-weight: 800;
  color: #dbeafe;
  line-height: 1;
  margin-bottom: 1rem;
}

.feature-content h3 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
}

.feature-content p {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.8;
}

/* 数据统计 - 横条式 */
.stats-section {
  background: #1e3a8a;
  color: white;
  padding: 6rem 0; /* 修改为上下内边距 */
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.stat-item {
  border-right: 1px solid rgba(255,255,255,0.2);
  padding: 2rem;
  text-align: center;
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.8;
}

/* 应用场景 - 时间线式 */
.scenarios-section {
  padding: 6rem 0; /* 修改为上下内边距 */
  background: #f8fafc;
}

.timeline {
  position: relative;
  max-width: 100%; /* 改为100%，由container控制宽度 */
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: #cbd5e1;
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: 3rem;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #1e3a8a;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 4px #1e3a8a;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  max-width: 400px;
}

.timeline-content h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.timeline-content p {
  color: #64748b;
  line-height: 1.6;
}

/* 优势 - 网格卡片 */
.advantages-section {
  padding: 6rem 0; /* 修改为上下内边距 */
  background: white;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.advantage-card {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 2.5rem;
  border-radius: 16px;
  border-left: 5px solid #1e3a8a;
  transition: transform 0.3s, box-shadow 0.3s;
}

.advantage-card:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.advantage-icon {
  width: 60px;
  height: 60px;
  background: #1e3a8a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.8rem;
}

.advantage-card h3 {
  font-size: 1.4rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.advantage-card p {
  color: #64748b;
  line-height: 1.6;
}

/* 页脚 */
.footer {
  background: #0f172a;
  color: white;
  padding: 4rem 0; /* 修改为上下内边距 */
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.footer-brand p {
  opacity: 0.7;
  line-height: 1.8;
}

.footer-links h4 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 1;
}

@media (max-width: 1400px) {
  .container {
    max-width: 100%;
  }
}

@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
  }

  .hero-left, .hero-right {
    flex: none;
    padding: 3rem 20px; /* 添加左右内边距 */
  }

  .hero-right {
    height: 400px;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .feature-item {
    flex-direction: column !important;
    gap: 2rem;
  }

  .feature-visual {
    width: 100%;
    height: 250px;
  }

  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item:nth-child(2) {
    border-right: none;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    justify-content: flex-start !important;
    padding-left: 4rem;
    padding-right: 0;
  }

  .timeline-dot {
    left: 20px;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .features-section,
  .stats-section,
  .scenarios-section,
  .advantages-section,
  .footer {
    padding: 4rem 0; /* 统一为上下内边距 */
  }

  .sidebar {
    width: 60px;
  }

  .sidebar:hover {
    width: 180px;
  }

  .main-content {
    margin-left: 60px;
  }
}
</style>
