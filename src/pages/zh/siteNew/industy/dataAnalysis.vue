<template>
  <div class="data-analysis-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>数据分析</h1>
        <p>深度挖掘数据价值，驱动业务增长决策。利用先进的数据分析技术和机器学习算法，为您提供精准的数据洞察和智能决策支持。</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 核心能力 -->
      <section id="capabilities" class="capabilities">
        <h2 class="section-title">
          核心分析能力
        </h2>
        <div class="capability-grid">
          <div v-for="(item, index) in capabilitiesList" :key="index" class="capability-card">
            <div class="capability-icon">
              {{ item.icon }}
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 数据流程 -->
      <section id="process" class="process">
        <h2 class="section-title">
          数据分析流程
        </h2>
        <div class="process-steps">
          <div v-for="(item, index) in processList" :key="index" class="process-step">
            <div class="step-circle">
              {{ index + 1 }}
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 应用领域 -->
      <section id="domains" class="domains">
        <h2 class="section-title">
          应用领域
        </h2>
        <div class="domain-grid">
          <div v-for="(item, index) in domainsList" :key="index" class="domain-card">
            <div class="domain-icon">
              {{ item.icon }}
            </div>
            <div class="domain-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
              <div class="domain-tags">
                <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="domain-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 成功案例 -->
      <section id="cases" class="cases">
        <h2 class="section-title">
          成功案例
        </h2>
        <div class="case-list">
          <div v-for="(item, index) in casesList" :key="index" class="case-item">
            <div class="case-header">
              <div class="case-title">
                {{ item.title }}
              </div>
              <div class="case-result">
                {{ item.result }}
              </div>
            </div>
            <div class="case-description">
              {{ item.desc }}
            </div>
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
// 核心能力列表
const capabilitiesList = [
  {
    icon: '📈',
    title: '趋势分析',
    desc: '基于历史数据的深度分析，识别业务发展趋势，预测未来走向，为战略决策提供科学依据。'
  },
  {
    icon: '🎯',
    title: '精准预测',
    desc: '运用机器学习算法，对关键指标进行精准预测，帮助您提前洞察市场变化，抢占先机。'
  },
  {
    icon: '🔍',
    title: '异常检测',
    desc: '实时监控数据变化，自动识别异常模式和潜在风险，及时发出预警，保障业务安全。'
  },
  {
    icon: '📊',
    title: '可视化报表',
    desc: '丰富的图表类型和交互式仪表盘，让复杂数据变得直观易懂，助力快速决策。'
  },
  {
    icon: '🤖',
    title: '智能洞察',
    desc: 'AI驱动的智能分析，自动发现数据中的隐藏模式和关联关系，提供深度洞察。'
  },
  {
    icon: '⚡',
    title: '实时分析',
    desc: '流式数据处理技术，实现毫秒级实时分析，满足对时效性要求极高的业务场景。'
  }
]

// 数据流程列表
const processList = [
  {
    title: '数据采集',
    desc: '多源数据接入清洗'
  },
  {
    title: '数据处理',
    desc: '特征工程数据转换'
  },
  {
    title: '模型训练',
    desc: '算法模型构建优化'
  },
  {
    title: '结果输出',
    desc: '洞察报告决策支持'
  }
]

// 应用领域列表
const domainsList = [
  {
    icon: '💼',
    title: '商业智能',
    desc: '帮助企业实现数据驱动的经营管理，提升决策效率和准确性，优化业务流程。',
    tags: ['销售分析', '客户画像', '市场预测']
  },
  {
    icon: '🏥',
    title: '医疗健康',
    desc: '辅助医疗诊断、疾病预测、药物研发，为医疗行业提供智能化解决方案。',
    tags: ['疾病预测', '影像分析', '疗效评估']
  },
  {
    icon: '🏦',
    title: '金融风控',
    desc: '实时监控交易风险，识别欺诈行为，评估信用风险，保障金融安全。',
    tags: ['欺诈检测', '信用评估', '风险预警']
  },
  {
    icon: '🏭',
    title: '工业制造',
    desc: '实现智能制造，优化生产流程，预测设备故障，提升产品质量和效率。',
    tags: ['质量检测', '设备维护', '产线优化']
  }
]

// 成功案例列表
const casesList = [
  {
    title: '零售企业销售预测',
    result: '预测准确率提升35%',
    desc: '通过构建深度学习模型，分析历史销售数据、季节性因素、促销活动等多维度数据，实现精准的销售预测。帮助客户优化库存管理，降低库存成本25%，同时确保商品供应充足。'
  },
  {
    title: '金融反欺诈系统',
    result: '欺诈识别率提升50%',
    desc: '基于机器学习算法构建实时反欺诈系统，通过分析交易行为模式、用户画像、地理位置等信息，准确识别可疑交易。系统上线后，成功拦截超过80%的欺诈交易，为客户挽回巨额损失。'
  },
  {
    title: '医疗影像智能诊断',
    result: '诊断效率提升60%',
    desc: '利用深度学习技术对医学影像进行智能分析，辅助医生进行疾病诊断。系统在肺部结节检测、乳腺癌筛查等方面表现优异，帮助医生提高诊断效率和准确性，减少误诊漏诊。'
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
  background-color: #f8f9fa;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s;
}

.hero-btn.primary {
  background: white;
  color: #667eea;
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* 内容区域 */
.content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 30px;
}

/* 核心能力 */
.capabilities {
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
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.capability-card {
  background: white;
  padding: 45px 35px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.capability-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.capability-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}

.capability-card:hover::before {
  transform: scaleX(1);
}

.capability-icon {
  width: 85px;
  height: 85px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 36px;
  color: white;
}

.capability-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.capability-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
}

/* 数据流程 */
.process {
  margin-bottom: 120px;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 42px;
  left: 100px;
  right: 100px;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  z-index: 0;
}

.process-step {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
}

.step-circle {
  width: 90px;
  height: 90px;
  background: white;
  border: 4px solid #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 32px;
  font-weight: bold;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
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

/* 应用领域 */
.domains {
  margin-bottom: 120px;
}

.domain-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.domain-card {
  background: white;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  display: flex;
  gap: 35px;
  align-items: flex-start;
}

.domain-card:hover {
  transform: translateX(10px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.domain-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  flex-shrink: 0;
}

.domain-content h4 {
  font-size: 26px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.domain-content p {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 15px;
}

.domain-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.domain-tag {
  background: #f0f0f5;
  color: #667eea;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

/* 技术栈 */
.tech-stack {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 50px;
  border-radius: 20px;
  margin-bottom: 120px;
  text-align: center;
}

.tech-stack h3 {
  font-size: 36px;
  margin-bottom: 50px;
  color: white;
  font-weight: 700;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
}

.tech-item {
  background: rgba(255, 255, 255, 0.95);
  padding: 35px 20px;
  border-radius: 12px;
  transition: all 0.3s;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.tech-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.tech-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

/* 成功案例 */
.cases {
  margin-bottom: 120px;
}

.case-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.case-item {
  background: white;
  padding: 45px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  border-left: 5px solid #667eea;
}

.case-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.case-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.case-result {
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 15px;
}

.case-description {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
}

/* 数据统计 */
.stats {
  background: white;
  padding: 80px 40px;
  text-align: center;
  margin-bottom: 120px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-item {
  position: relative;
}

.stat-number {
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(90deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
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
  padding: 60px 20px;
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
  margin-bottom: 30px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
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
  .capability-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
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

  .capability-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    flex-direction: column;
  }

  .process-steps::before {
    display: none;
  }

  .domain-grid {
    grid-template-columns: 1fr;
  }

  .domain-card {
    flex-direction: column;
    text-align: center;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
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
