<template>
  <div class="agile-development">
    <!-- Hero Section -->
    <section class="hero">
      <h1>敏捷开发</h1>
      <p>快速响应变化，持续交付价值。通过迭代开发和持续反馈，让软件开发更高效、更灵活、更贴近用户需求。</p>
    </section>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 核心价值观 -->
      <section id="values" class="values">
        <h2 class="section-title">
          敏捷核心价值观
        </h2>
        <div class="value-grid">
          <div v-for="(item, index) in valueList" :key="index" class="value-card">
            <div class="value-icon">
              {{ item.icon }}
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 开发流程 -->
      <section id="process" class="process">
        <h2 class="section-title">
          敏捷开发流程
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

      <!-- 敏捷框架 -->
      <section id="framework" class="framework">
        <div class="framework-content">
          <div class="framework-text">
            <h3>主流敏捷框架介绍</h3>
            <p v-for="(frame, index) in frameworkList" :key="index">
              <strong>{{ frame.name }}：</strong>{{ frame.desc }}
            </p>
          </div>
          <div class="framework-image">
            🚀
          </div>
        </div>
      </section>

      <!-- 最佳实践 -->
      <section id="practices" class="practices">
        <h2 class="section-title">
          敏捷开发最佳实践
        </h2>
        <div class="practice-list">
          <div v-for="(practice, index) in practiceList" :key="index" class="practice-item">
            <h4>{{ practice.title }}</h4>
            <p>{{ practice.desc }}</p>
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
// 核心价值观数据
const valueList = [
  {
    icon: '👥',
    title: '个体与互动',
    desc: '重视团队成员的协作与沟通，优于流程与工具。相信团队的自组织能力，鼓励面对面交流。'
  },
  {
    icon: '⚡',
    title: '可工作的软件',
    desc: '优先交付可运行的软件，优于详尽的文档。通过持续集成和自动化测试，确保软件质量。'
  },
  {
    icon: '🤝',
    title: '客户协作',
    desc: '与客户密切合作，优于合同谈判。定期收集反馈，确保产品方向符合用户期望。'
  }
]

// 开发流程数据
const processSteps = [
  { title: '需求梳理', desc: '收集用户故事，明确需求' },
  { title: '迭代规划', desc: '制定Sprint计划，确定目标' },
  { title: '每日站会', desc: '同步进度，解决问题' },
  { title: '迭代评审', desc: '展示成果，收集反馈' },
  { title: '回顾改进', desc: '总结经验，持续优化' }
]

// 敏捷框架数据
const frameworkList = [
  {
    name: 'Scrum',
    desc: '采用固定长度的迭代周期（Sprint），通常为1-4周。通过产品待办列表、冲刺计划、每日站会、冲刺评审和回顾会议等仪式来管理项目。'
  },
  {
    name: 'Kanban',
    desc: '使用看板可视化工作流程，限制在制品数量（WIP），通过持续交付来提高效率。适用于需要灵活应对变化的团队。'
  },
  {
    name: 'XP（极限编程）',
    desc: '强调工程实践，包括结对编程、测试驱动开发（TDD）、持续集成、重构等，以提高代码质量和开发速度。'
  }
]

// 最佳实践数据
const practiceList = [
  {
    title: '用户故事（User Stories）',
    desc: '以用户视角描述功能需求，采用"作为...，我希望...，以便..."的格式，确保开发内容对用户有价值。'
  },
  {
    title: '测试驱动开发（TDD）',
    desc: '先编写测试用例，再编写代码实现，通过红-绿-重构的循环，确保代码质量和功能正确性。'
  },
  {
    title: '持续集成（CI）',
    desc: '频繁地将代码集成到主干分支，通过自动化构建和测试，及早发现并解决问题，保持代码库稳定。'
  },
  {
    title: '持续交付（CD）',
    desc: '确保软件随时可以部署到生产环境，通过自动化部署流程，加快交付速度，降低发布风险。'
  },
  {
    title: '结对编程',
    desc: '两位开发人员共享一台电脑，一人编写代码，另一人进行实时审查，提高代码质量并促进知识共享。'
  },
  {
    title: '代码审查',
    desc: '团队成员互相审查代码，发现问题、分享知识、统一代码风格，确保代码库的整体质量。'
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
  min-height: 400px;
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
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
  color: #005bea;
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

/* 核心价值观 */
.values {
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
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
  margin: 20px auto 0;
  border-radius: 2px;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  color: white;
}

.value-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.value-card p {
  color: #666;
  font-size: 16px;
}

/* 开发流程 */
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
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
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

/* 敏捷框架 */
.framework {
  background: white;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 80px;
}

.framework-content {
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.framework-text {
  flex: 1;
  min-width: 300px;
}

.framework-text h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.framework-text p {
  color: #666;
  font-size: 16px;
  margin-bottom: 15px;
}

.framework-image {
  flex: 1;
  min-width: 300px;
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
  border-radius: 10px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
}

/* 最佳实践 */
.practices {
  margin-bottom: 80px;
}

.practice-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.practice-item {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #005bea;
}

.practice-item h4 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.practice-item p {
  color: #666;
  font-size: 15px;
}

/* 数据统计 */
.stats {
  background: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);
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
  color: #00c6fb;
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

  .value-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    flex-direction: column;
  }

  .framework-content {
    flex-direction: column;
  }

  .practice-list {
    grid-template-columns: 1fr;
  }
}
</style>
