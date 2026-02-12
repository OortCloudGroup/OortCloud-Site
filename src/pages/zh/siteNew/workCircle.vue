<template>
  <div class="work-circle">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>让团队协作<br /><span>更高效、更轻松</span></h1>
          <p>工作圈是一款专为现代团队设计的协作平台，融合即时通讯、任务管理、文件共享、日程安排等功能于一体，让团队沟通更顺畅，工作效率倍增。</p>
          <div class="hero-features">
            <div class="hero-feature">
              <span class="icon">✓</span>
              <span>实时消息</span>
            </div>
            <div class="hero-feature">
              <span class="icon">✓</span>
              <span>任务协作</span>
            </div>
            <div class="hero-feature">
              <span class="icon">✓</span>
              <span>云端存储</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="platform-preview">
            <div class="platform-header">
              <div class="header-avatar">
                👤
              </div>
              <div class="header-text">
                <h4>项目讨论组</h4>
                <p>12位成员在线</p>
              </div>
            </div>
            <div class="platform-body">
              <div v-for="(post, index) in posts" :key="index" class="post-card">
                <div class="post-header">
                  <div class="post-avatar">
                    {{ post.avatar }}
                  </div>
                  <div class="post-info">
                    <h5>{{ post.author }}</h5>
                    <span>{{ post.time }}</span>
                  </div>
                </div>
                <div class="post-content">
                  {{ post.content }}
                </div>
                <div v-if="post.images" class="post-images">
                  <div v-for="(img, i) in post.images" :key="i" class="post-img">
                    {{ img }}
                  </div>
                </div>
                <div class="post-stats">
                  <div v-for="(stat, i) in post.stats" :key="i" class="stat-item">
                    {{ stat }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值 -->
    <section id="values" class="values">
      <div class="values-container">
        <div class="section-header">
          <span class="section-tag">为什么选择工作圈</span>
          <h2>核心价值</h2>
          <p>专为高效团队打造，让每一次协作都更有价值</p>
        </div>
        <div class="value-cards">
          <div v-for="(value, index) in coreValues" :key="index" class="value-card">
            <div class="value-icon">
              {{ value.icon }}
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能特色 -->
    <section id="features" class="features-section">
      <div class="features-section-container">
        <div class="section-header">
          <span class="section-tag">强大功能</span>
          <h2>功能特色</h2>
          <p>一站式团队协作解决方案，满足多样化工作需求</p>
        </div>
        <div class="feature-list">
          <div v-for="(feature, index) in features" :key="index" class="feature-item">
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
              <div class="feature-points">
                <div v-for="(point, i) in feature.points" :key="i" class="feature-point">
                  <span class="check">✓</span> {{ point }}
                </div>
              </div>
            </div>
            <div class="feature-visual">
              {{ feature.icon }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section id="scenarios" class="scenarios">
      <div class="scenarios-container">
        <div class="section-header">
          <span class="section-tag">适用场景</span>
          <h2>应用场景</h2>
          <p>满足各种团队协作需求</p>
        </div>
        <div class="scenario-tabs">
          <a
            v-for="(item, index) in scenarioTabs"
            :key="index"
            href="#"
            class="scenario-tab"
            :class="{ active: activeScenario === item.key }"
            @click.prevent="switchScenario(item.key)"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="scenario-content">
          <div class="scenario-text">
            <h3>{{ currentScenario.title }}</h3>
            <p v-for="(p, i) in currentScenario.desc" :key="i">
              {{ p }}
            </p>
          </div>
          <div class="scenario-visual">
            {{ currentScenario.icon }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

definePageMeta({
  layout: 'site-new'
})

// 响应式数据 - 帖子数据
const posts = ref([
  {
    avatar: '👩',
    author: '张经理',
    time: '10分钟前',
    content: '本周项目进度汇报已完成，请各位查看附件中的详细报告，有任何问题请在群里反馈。',
    stats: ['💬 5条评论', '👍 12个赞', '📎 2个附件']
  },
  {
    avatar: '👨',
    author: '李开发',
    time: '25分钟前',
    content: '新功能模块已经部署到测试环境，大家可以开始测试了，发现Bug及时反馈。',
    images: ['📊', '📈', '🔧'],
    stats: ['💬 8条评论', '👍 20个赞']
  }
])

// 核心价值数据
const coreValues = ref([
  { icon: '⚡', title: '极速沟通', desc: '实时消息推送，秒级响应，确保信息及时传达，让团队沟通零延迟，决策更高效。' },
  { icon: '🎯', title: '任务聚焦', desc: '清晰的任务分配与追踪，明确责任人，设置截止日期，让每个项目都井然有序。' },
  { icon: '🔒', title: '安全可靠', desc: '企业级安全保障，数据加密传输，细粒度权限控制，确保企业信息安全无忧。' },
  { icon: '📱', title: '多端同步', desc: '支持PC、手机、平板多端访问，数据实时同步，随时随地处理工作事务。' },
  { icon: '🔌', title: '开放集成', desc: '丰富的API接口，支持与第三方系统集成，打造定制化的工作流程。' },
  { icon: '📊', title: '数据洞察', desc: '智能数据分析，可视化团队工作状态，为管理决策提供有力支撑。' }
])

// 功能特色数据
const features = ref([
  {
    title: '即时通讯',
    desc: '支持单人私聊、群组讨论、@提醒、消息已读回执等功能，让团队沟通更加高效便捷。',
    points: [
      '支持文字、语音、图片、文件多种消息类型',
      '消息实时推送，不错过任何重要信息',
      '消息已读回执，确认信息接收状态'
    ],
    icon: '💬'
  },
  {
    title: '任务管理',
    desc: '创建、分配、追踪任务，支持任务优先级设置、进度跟踪、子任务拆分，让项目管理井井有条。',
    points: [
      '支持看板、列表多种视图展示',
      '任务截止提醒，避免遗漏重要事项',
      '任务流转记录，清晰追溯工作历程'
    ],
    icon: '✅'
  },
  {
    title: '文件共享',
    desc: '集中管理团队文件，支持在线预览、版本控制、权限设置，实现知识沉淀与高效协作。',
    points: [
      '支持在线预览常见文件格式',
      '文件版本历史，轻松恢复历史版本',
      '细粒度权限控制，保护敏感文件'
    ],
    icon: '📁'
  }
])

// 应用场景数据
const scenarioTabs = ref([
  { key: 'dev', name: '研发团队' },
  { key: 'sales', name: '销售团队' },
  { key: 'design', name: '设计团队' },
  { key: 'admin', name: '行政团队' }
])

const activeScenario = ref('dev')

const scenarioData = reactive({
  dev: {
    title: '研发团队协作',
    desc: [
      '工作圈为研发团队提供专业的协作环境。通过代码评审讨论、Bug跟踪、需求管理等功能，让开发流程更加规范高效。',
      '支持集成Git、Jira等开发工具，实现自动化工作流，让研发团队专注于技术创新。'
    ],
    icon: '💻'
  },
  sales: {
    title: '销售团队协作',
    desc: [
      '工作圈为销售团队打造客户管理与跟进体系，实时同步客户信息，团队协作跟进客户，提升成单率。',
      '销售数据可视化，业绩追踪一目了然，支持移动端随时查看，外出拜访更高效。'
    ],
    icon: '📊'
  },
  design: {
    title: '设计团队协作',
    desc: [
      '支持设计稿在线预览、标注、评论，告别反复传输文件，团队成员可直接在设计稿上反馈意见。',
      '版本管理功能确保设计稿迭代可追溯，权限控制保护设计资产安全。'
    ],
    icon: '🎨'
  },
  admin: {
    title: '行政团队协作',
    desc: [
      '办公用品申领、会议室预约、考勤管理等行政事务一站式处理，流程标准化，减少沟通成本。',
      '数据统计与报表自动生成，行政工作效率提升80%以上。'
    ],
    icon: '🗂️'
  }
})

const currentScenario = computed(() => scenarioData[activeScenario.value])

// 方法 - 切换应用场景
const switchScenario = (key) => {
  activeScenario.value = key
}

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

/* Hero Section */
.hero {
  padding: 140px 50px 80px;
  background: linear-gradient(135deg, #FFF5F5 0%, #FFF0E6 100%);
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.hero-content h1 {
  font-size: 54px;
  color: #2d3436;
  margin-bottom: 25px;
  font-weight: 800;
  line-height: 1.15;
}

.hero-content h1 span {
  color: #FF6B6B;
}

.hero-content p {
  font-size: 18px;
  color: #636e72;
  margin-bottom: 35px;
  line-height: 1.8;
  max-width: 500px;
}

.hero-features {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.hero-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #636e72;
}

.hero-feature .icon {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
}

.hero-buttons {
  display: flex;
  gap: 18px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  color: white;
  padding: 16px 42px;
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
  box-shadow: 0 12px 30px rgba(255, 107, 107, 0.35);
}

.hero-btn-secondary {
  background: white;
  color: #2d3436;
  padding: 16px 42px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #FFE5D9;
  transition: all 0.3s;
  cursor: pointer;
}

.hero-btn-secondary:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

.hero-visual {
  position: relative;
}

.platform-preview {
  background: white;
  border-radius: 24px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.platform-header {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  padding: 20px 25px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-avatar {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.header-text {
  flex: 1;
}

.header-text h4 {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
}

.header-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}

.platform-body {
  padding: 25px;
}

.post-card {
  background: #FAFAFA;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 15px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.post-avatar {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #FFE5D9 0%, #FFD4C4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.post-info h5 {
  font-size: 14px;
  font-weight: 600;
  color: #2d3436;
  margin-bottom: 2px;
}

.post-info span {
  font-size: 12px;
  color: #999;
}

.post-content {
  font-size: 14px;
  color: #636e72;
  line-height: 1.7;
  margin-bottom: 15px;
}

.post-stats {
  display: flex;
  gap: 25px;
  padding-top: 12px;
  border-top: 1px solid #EEEEEE;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #999;
}

.post-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 12px;
}

.post-img {
  aspect-ratio: 1;
  background: linear-gradient(135deg, #FFE5D9 0%, #FFD4C4 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

/* 核心价值 */
.values {
  padding: 100px 50px;
  background: white;
}

.values-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-tag {
  background: rgba(255, 107, 107, 0.1);
  color: #FF6B6B;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 40px;
  color: #2d3436;
  margin-bottom: 18px;
  font-weight: 700;
}

.section-header p {
  color: #636e72;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.value-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.value-card {
  background: white;
  border-radius: 20px;
  padding: 45px 35px;
  text-align: center;
  border: 1px solid #FFE5D9;
  transition: all 0.4s;
}

.value-card:hover {
  border-color: #FF6B6B;
  box-shadow: 0 15px 40px rgba(255, 107, 107, 0.15);
  transform: translateY(-8px);
}

.value-icon {
  width: 75px;
  height: 75px;
  background: linear-gradient(135deg, #FFF5F5 0%, #FFE5D9 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 32px;
}

.value-card h3 {
  font-size: 22px;
  color: #2d3436;
  margin-bottom: 15px;
  font-weight: 600;
}

.value-card p {
  color: #636e72;
  font-size: 15px;
  line-height: 1.8;
}

/* 功能展示 */
.features-section {
  padding: 100px 50px;
  background: linear-gradient(135deg, #FFF5F5 0%, #FFF0E6 100%);
}

.features-section-container {
  max-width: 1400px;
  margin: 0 auto;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.feature-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-item:nth-child(even) {
  grid-template-columns: 1fr 1fr;
}

.feature-item:nth-child(even) .feature-content {
  order: 2;
}

.feature-item:nth-child(even) .feature-visual {
  order: 1;
}

.feature-content h3 {
  font-size: 32px;
  color: #2d3436;
  margin-bottom: 20px;
  font-weight: 700;
}

.feature-content p {
  color: #636e72;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.feature-points {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.feature-point {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #636e72;
}

.feature-point .check {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  flex-shrink: 0;
}

.feature-visual {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}

/* 团队场景 */
.scenarios {
  padding: 100px 50px;
  background: white;
}

.scenarios-container {
  max-width: 1400px;
  margin: 0 auto;
}

.scenario-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.scenario-tab {
  background: #FAFAFA;
  color: #636e72;
  padding: 14px 35px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  border: 2px solid #EEEEEE;
  transition: all 0.3s;
}

.scenario-tab.active,
.scenario-tab:hover {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  color: white;
  border-color: transparent;
}

.scenario-content {
  background: linear-gradient(135deg, #FFF5F5 0%, #FFE5D9 100%);
  border-radius: 24px;
  padding: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.scenario-text h3 {
  font-size: 36px;
  color: #2d3436;
  margin-bottom: 25px;
  font-weight: 700;
}

.scenario-text p {
  color: #636e72;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.scenario-visual {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
}

/* 用户评价 */
.testimonials {
  padding: 100px 50px;
  background: #FAFAFA;
}

.testimonials-container {
  max-width: 1400px;
  margin: 0 auto;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.testimonial-card {
  background: white;
  border-radius: 20px;
  padding: 35px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.testimonial-quote {
  font-size: 18px;
  color: #2d3436;
  line-height: 1.8;
  margin-bottom: 25px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #FFE5D9 0%, #FFD4C4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.author-info h4 {
  font-size: 16px;
  font-weight: 600;
  color: #2d3436;
  margin-bottom: 3px;
}

.author-info p {
  font-size: 13px;
  color: #999;
}

/* 数据统计 */
.stats {
  padding: 100px 50px;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  color: white;
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item h3 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 12px;
}

.stat-item p {
  font-size: 16px;
  opacity: 0.9;
}

/* CTA区域 */
.cta-section {
  padding: 120px 50px;
  text-align: center;
  background: white;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 42px;
  color: #2d3436;
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-content p {
  color: #636e72;
  font-size: 18px;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-form {
  display: flex;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.cta-input {
  flex: 1;
  padding: 16px 25px;
  border-radius: 30px;
  border: 2px solid #FFE5D9;
  background: white;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.cta-input:focus {
  border-color: #FF6B6B;
}

.cta-input::placeholder {
  color: #CCC;
}

.cta-btn {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
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
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.35);
}

/* 页脚 */
.footer {
  background: #2d3436;
  padding: 70px 50px 40px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
}

.footer-brand h3 {
  color: white;
  font-size: 24px;
  margin-bottom: 18px;
  font-weight: 600;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.8;
  max-width: 300px;
}

.footer-links h4 {
  color: white;
  font-size: 16px;
  margin-bottom: 22px;
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
  color: #FF8E53;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 40px;
  }

  .hero-content p {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-features {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .value-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-item {
    grid-template-columns: 1fr;
  }

  .feature-item:nth-child(even) {
    grid-template-columns: 1fr;
  }

  .feature-item:nth-child(even) .feature-content,
  .feature-item:nth-child(even) .feature-visual {
    order: unset;
  }

  .scenario-content {
    grid-template-columns: 1fr;
  }

  .testimonial-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .value-cards {
    grid-template-columns: 1fr;
  }

  .scenario-tabs {
    flex-direction: column;
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .cta-form {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
