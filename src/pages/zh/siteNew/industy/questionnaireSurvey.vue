<template>
  <div class="survey-research">
    <section class="hero">
      <div class="hero-content">
        <h1>问卷调研</h1>
        <p>专业、高效、便捷的在线问卷调研工具。支持多种题型、智能分析、实时统计，助您快速收集反馈、获取洞察、驱动决策。</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 核心功能 -->
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

      <!-- 问卷类型 -->
      <section id="types" class="types">
        <h2 class="section-title">
          问卷类型
        </h2>
        <div class="type-grid">
          <div v-for="(type, index) in surveyTypes" :key="index" class="type-card">
            <div class="type-header">
              <div class="type-icon">
                {{ type.icon }}
              </div>
              <h4>{{ type.title }}</h4>
            </div>
            <div class="type-content">
              <p>{{ type.desc }}</p>
              <ul class="type-features">
                <li v-for="(item, idx) in type.features" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 调研流程 -->
      <section id="process" class="process">
        <h2 class="section-title">
          调研流程
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

      <!-- 应用场景 -->
      <section id="scenarios" class="scenarios">
        <h3>应用场景</h3>
        <div class="scenario-grid">
          <div v-for="(scenario, index) in scenarios" :key="index" class="scenario-item">
            <div class="scenario-icon">
              {{ scenario.icon }}
            </div>
            <div class="scenario-name">
              {{ scenario.name }}
            </div>
            <div class="scenario-desc" v-html="scenario.desc" />
          </div>
        </div>
      </section>

      <!-- 题型展示 -->
      <section class="question-types">
        <h2 class="section-title">
          支持的题型
        </h2>
        <div class="question-grid">
          <div v-for="(question, index) in questionTypes" :key="index" class="question-card">
            <div class="question-header">
              <div class="question-icon">
                {{ question.icon }}
              </div>
              <div class="question-title">
                {{ question.title }}
              </div>
            </div>
            <div class="question-desc">
              {{ question.desc }}
            </div>
            <div class="question-example" v-html="question.example" />
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
// 核心功能数据
const features = [
  {
    icon: '🎨',
    title: '灵活设计',
    desc: '拖拽式问卷设计器，支持多种题型、逻辑跳转、自定义样式，轻松创建专业问卷。'
  },
  {
    icon: '📤',
    title: '多渠道分发',
    desc: '支持二维码、链接、微信、邮件等多种分发方式，触达更多目标用户，提高回收率。'
  },
  {
    icon: '📊',
    title: '实时统计',
    desc: '数据实时收集、自动统计、可视化图表展示，让数据分析更加直观高效。'
  },
  {
    icon: '🤖',
    title: '智能分析',
    desc: 'AI驱动的智能分析，自动识别关键洞察、生成分析报告，节省分析时间。'
  },
  {
    icon: '🔒',
    title: '数据安全',
    desc: '企业级数据加密、权限管理、隐私保护，确保问卷数据安全可靠。'
  },
  {
    icon: '🌐',
    title: '多端适配',
    desc: '完美适配PC、手机、平板等设备，确保用户在任何设备上都能顺畅填写。'
  }
]

// 问卷类型数据
const surveyTypes = [
  {
    icon: '📝',
    title: '调研问卷',
    desc: '适用于市场调研、用户需求调研、满意度调查等多种场景，支持复杂逻辑和多种题型。',
    features: [
      '支持逻辑跳转和条件显示',
      '丰富的题型选择',
      '自定义问卷样式',
      '支持随机出题顺序'
    ]
  },
  {
    icon: '✅',
    title: '表单收集',
    desc: '用于信息登记、活动报名、意见收集等场景，简单直观，易于填写和管理。',
    features: [
      '支持附件上传',
      '表单验证规则',
      '数据导出功能',
      '消息通知提醒'
    ]
  }
]

// 调研流程数据
const processSteps = [
  {
    title: '设计问卷',
    desc: '明确目标设计问题'
  },
  {
    title: '分发收集',
    desc: '多渠道投放获取数据'
  },
  {
    title: '数据分析',
    desc: '统计汇总生成报告'
  },
  {
    title: '洞察决策',
    desc: '提取价值驱动决策'
  }
]

// 应用场景数据
const scenarios = [
  {
    icon: '🛒',
    name: '市场调研',
    desc: '了解市场需求<br>分析竞争态势'
  },
  {
    icon: '😊',
    name: '满意度调查',
    desc: '收集用户反馈<br>提升服务质量'
  },
  {
    icon: '🎓',
    name: '学术研究',
    desc: '收集研究数据<br>支持学术分析'
  },
  {
    icon: '🏢',
    name: '员工调研',
    desc: '了解员工需求<br>改善工作环境'
  }
]

// 题型数据
const questionTypes = [
  {
    icon: '⭕',
    title: '单选题',
    desc: '用户从多个选项中选择一个答案，适用于选择唯一答案的场景。',
    example: '示例：您的年龄段是？<br>○ 18岁以下  ○ 18-25岁  ○ 26-35岁  ○ 36岁以上'
  },
  {
    icon: '☑️',
    title: '多选题',
    desc: '用户可以从多个选项中选择一个或多个答案，适用于多选场景。',
    example: '示例：您使用过哪些社交平台？<br>☑ 微信  ☑ 微博  ☑ 抖音  ☐ B站'
  },
  {
    icon: '📝',
    title: '填空题',
    desc: '用户输入文本答案，适用于收集具体信息或开放式问题。',
    example: '示例：请填写您的邮箱地址<br>_______________'
  },
  {
    icon: '⭐',
    title: '评分题',
    desc: '用户对项目进行评分，适用于满意度评价、质量评估等场景。',
    example: '示例：请对我们的服务进行评分<br>⭐⭐⭐⭐⭐'
  },
  {
    icon: '📊',
    title: '矩阵题',
    desc: '多个问题共用一套选项，适合批量收集结构化数据。',
    example: '示例：请对以下方面进行评价<br>[满意度] 服务态度 | 产品质量 | 响应速度'
  },
  {
    icon: '📅',
    title: '日期题',
    desc: '用户选择日期，适用于收集时间信息的场景。',
    example: '示例：请选择您的出生日期<br>📅 1990-01-01'
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
  background-color: #f0f4f8;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 160px 20px 100px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 52px;
  margin-bottom: 25px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
}

.hero p {
  font-size: 22px;
  opacity: 0.95;
  max-width: 850px;
  margin: 0 auto 45px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.hero-btn {
  padding: 16px 45px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s;
}

.hero-btn.primary {
  background: white;
  color: #4facfe;
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* 内容区域 */
.content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 30px;
}

/* 核心功能 */
.features {
  margin-bottom: 120px;
}

.section-title {
  text-align: center;
  font-size: 40px;
  margin-bottom: 70px;
  color: #333;
  position: relative;
  font-weight: 700;
}

.section-title::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 5px;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  border-radius: 3px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.feature-card {
  background: white;
  padding: 50px 35px;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 40px;
  color: white;
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
}

.feature-card h3 {
  font-size: 26px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 700;
}

.feature-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
}

/* 问卷类型 */
.types {
  margin-bottom: 120px;
}

.type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.type-card {
  background: white;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  overflow: hidden;
}

.type-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.type-header {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 40px;
  color: white;
  text-align: center;
}

.type-header .type-icon {
  font-size: 60px;
  margin-bottom: 15px;
}

.type-header h4 {
  font-size: 28px;
  font-weight: 700;
}

.type-content {
  padding: 40px;
}

.type-content p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.type-features {
  list-style: none;
}

.type-features li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  color: #555;
  font-size: 15px;
}

.type-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4facfe;
  font-weight: bold;
  font-size: 18px;
}

/* 调研流程 */
.process {
  margin-bottom: 120px;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 120px;
  right: 120px;
  height: 4px;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  z-index: 0;
}

.process-step {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 100px;
  height: 100px;
  background: white;
  border: 5px solid #4facfe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 36px;
  font-weight: bold;
  color: #4facfe;
  box-shadow: 0 5px 20px rgba(79, 172, 254, 0.2);
}

.process-step h4 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #333;
  font-weight: 700;
}

.process-step p {
  color: #666;
  font-size: 15px;
  line-height: 1.6;
}

/* 应用场景 */
.scenarios {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 80px 50px;
  border-radius: 25px;
  margin-bottom: 120px;
}

.scenarios h3 {
  font-size: 36px;
  margin-bottom: 50px;
  color: white;
  font-weight: 700;
  text-align: center;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.scenario-item {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px 25px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s;
}

.scenario-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.scenario-icon {
  font-size: 50px;
  margin-bottom: 18px;
}

.scenario-name {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.scenario-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 题型展示 */
.question-types {
  margin-bottom: 120px;
}

.question-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
}

.question-card {
  background: white;
  padding: 45px;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  border-left: 6px solid #4facfe;
}

.question-card:hover {
  transform: translateX(8px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.question-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.question-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
}

.question-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.question-desc {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.question-example {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  font-size: 14px;
  color: #555;
}

/* 数据统计 */
.stats {
  background: white;
  padding: 90px 50px;
  text-align: center;
  margin-bottom: 120px;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-item {
  position: relative;
}

.stat-circle {
  width: 140px;
  height: 140px;
  margin: 0 auto 25px;
  position: relative;
}

.stat-circle svg {
  transform: rotate(-90deg);
}

.stat-circle circle {
  fill: none;
  stroke-width: 10;
}

.stat-circle .bg {
  stroke: #e8ecf1;
}

.stat-circle .progress {
  stroke: url(#stat-gradient);
  stroke-linecap: round;
  stroke-dasharray: 396;
}

.stat-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 18px;
  color: #666;
  font-weight: 600;
}

/* 页脚 */
.footer {
  background: #2c3e50;
  color: white;
  padding: 70px 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 35px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 12px 28px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  transition: all 0.3s;
}

.footer-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer p {
  opacity: 0.7;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenario-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .nav-menu {
    display: none;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .type-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    flex-direction: column;
  }

  .process-steps::before {
    display: none;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
  }

  .question-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
