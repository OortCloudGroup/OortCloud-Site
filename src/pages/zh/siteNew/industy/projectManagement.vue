<template>
  <div class="project-management">
    <!-- Hero Section -->
    <section class="hero">
      <h1>智能项目管理系统</h1>
      <p>高效协作，智能管理，让每一个项目都成功交付。整合团队资源，优化工作流程，提升项目交付效率与质量。</p>
    </section>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 功能特点 -->
      <section id="features" class="features">
        <h2 class="section-title">
          核心功能特点
        </h2>
        <div class="feature-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 项目流程 -->
      <section id="process" class="process">
        <h2 class="section-title">
          项目管理流程
        </h2>
        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step">
            <div class="step-number">
              {{ index + 1 }}
            </div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 团队协作 -->
      <section id="collaboration" class="collaboration">
        <div class="collaboration-content">
          <div class="collaboration-text">
            <h3>打造高效团队协作平台</h3>
            <p>项目管理不仅仅是个人的事情，更是团队共同努力的结果。我们的系统支持多人在线协作，让团队成员能够实时共享信息、交流想法，大大提高工作效率。</p>
            <p>通过智能的任务分配和进度追踪，每个成员都能清楚地了解自己的职责和项目的整体进展，避免信息孤岛和重复劳动。</p>
            <p>支持权限管理，确保敏感信息安全，让协作既高效又安全。</p>
          </div>
          <div class="collaboration-image">
            🤝
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})
// 功能特点数据
const features = [
  {
    icon: '📊',
    title: '任务管理',
    desc: '创建、分配、追踪任务，支持甘特图、看板等多种视图，让项目进度一目了然。'
  },
  {
    icon: '👥',
    title: '团队协作',
    desc: '实时在线协作，支持评论、@提醒、文件共享，让团队成员高效沟通协作。'
  },
  {
    icon: '📈',
    title: '数据分析',
    desc: '自动生成项目报告，多维度数据分析，帮助管理者做出明智决策。'
  },
  {
    icon: '⏰',
    title: '时间管理',
    desc: '精确的时间追踪与工时统计，合理分配资源，确保项目按时交付。'
  },
  {
    icon: '🔔',
    title: '智能提醒',
    desc: '自动化的任务提醒和截止日期通知，确保重要事项不被遗漏。'
  },
  {
    icon: '📁',
    title: '文档管理',
    desc: '集中管理项目文档，支持版本控制，确保团队使用最新的文件。'
  }
]

// 项目流程数据
const processSteps = [
  {
    title: '项目启动',
    desc: '明确目标，规划范围'
  },
  {
    title: '任务分配',
    desc: '合理分工，责任到人'
  },
  {
    title: '进度跟踪',
    desc: '实时监控，及时调整'
  },
  {
    title: '质量控制',
    desc: '严格把关，确保质量'
  },
  {
    title: '项目交付',
    desc: '验收确认，总结经验'
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
  background-color: #f5f7fa;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 20px 80px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero p {
  font-size: 20px;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto 40px;
}

.hero-btn {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 15px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 内容区域 */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

/* 功能特点 */
.features {
  margin-bottom: 80px;
}

.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 20px auto 0;
  border-radius: 2px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  color: white;
}

.feature-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  font-size: 16px;
}

/* 项目流程 */
.process {
  margin-bottom: 80px;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
}

.process-step {
  flex: 1;
  min-width: 200px;
  text-align: center;
  position: relative;
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.process-step h4 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.process-step p {
  color: #666;
  font-size: 14px;
}

/* 团队协作 */
.collaboration {
  background: white;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 80px;
}

.collaboration-content {
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.collaboration-text {
  flex: 1;
  min-width: 300px;
}

.collaboration-text h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.collaboration-text p {
  color: #666;
  font-size: 16px;
  margin-bottom: 15px;
}

.collaboration-image {
  flex: 1;
  min-width: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
}

/* 数据统计 */
.stats {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 80px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-item h3 {
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: 700;
}

.stat-item p {
  font-size: 18px;
  opacity: 0.9;
}

/* 页脚 */
.footer {
  background: #2c3e50;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.footer p {
  opacity: 0.8;
  margin-bottom: 10px;
}

.footer a {
  color: #667eea;
  text-decoration: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 16px;
  }

  .nav-menu {
    display: none;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    flex-direction: column;
  }

  .collaboration-content {
    flex-direction: column;
  }
}
</style>
