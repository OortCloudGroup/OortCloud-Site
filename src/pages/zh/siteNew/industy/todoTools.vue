<template>
  <div class="todo-tool">
    <!-- Hero Section -->
    <section class="hero">
      <h1>待办工具</h1>
      <p>高效管理任务，轻松掌控生活。帮助您规划日程、追踪进度、提高效率，让每一天都更有条理、更从容。</p>
    </section>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 核心功能 -->
      <section id="features" class="features">
        <h2 class="section-title">
          核心功能特点
        </h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              ✅
            </div>
            <div class="feature-content">
              <h3>任务创建</h3>
              <p>快速创建待办事项，支持设置优先级、截止日期、标签分类，让任务管理更加精细化。</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              🔔
            </div>
            <div class="feature-content">
              <h3>智能提醒</h3>
              <p>多维度提醒功能，支持时间提醒、位置提醒、重复提醒，确保重要事项不被遗漏。</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              📅
            </div>
            <div class="feature-content">
              <h3>日历视图</h3>
              <p>直观的日历视图展示任务分布，支持按日、周、月查看，合理安排时间资源。</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              🏷️
            </div>
            <div class="feature-content">
              <h3>标签分类</h3>
              <p>灵活的标签系统，支持自定义分类和颜色标识，快速筛选和查找相关任务。</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              📊
            </div>
            <div class="feature-content">
              <h3>进度统计</h3>
              <p>自动生成任务完成率统计，可视化展示工作效率，帮助您了解自己的工作状态。</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              🔄
            </div>
            <div class="feature-content">
              <h3>重复任务</h3>
              <p>支持设置重复任务规则，自动创建周期性任务，无需重复输入，节省时间。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 使用场景 -->
      <section id="scenarios" class="scenarios">
        <h2 class="section-title">
          典型使用场景
        </h2>
        <div class="scenario-timeline">
          <div class="scenario-step">
            <h4>工作计划</h4>
            <p>安排每日工作任务，合理分配时间，提高工作效率</p>
          </div>
          <div class="scenario-step">
            <h4>学习目标</h4>
            <p>追踪学习进度，记录重要知识点，实现持续进步</p>
          </div>
          <div class="scenario-step">
            <h4>生活提醒</h4>
            <p>记录日常琐事，设置提醒，让生活更有条理</p>
          </div>
          <div class="scenario-step">
            <h4>项目管理</h4>
            <p>分解项目任务，跟踪进度，确保按时交付</p>
          </div>
          <div class="scenario-step">
            <h4>健康习惯</h4>
            <p>记录健身计划、饮食目标，养成良好生活习惯</p>
          </div>
        </div>
      </section>

      <!-- 高效管理 -->
      <section id="management" class="management">
        <div class="management-content">
          <h3>打造高效的任务管理体系</h3>
          <div class="management-cards">
            <div class="management-card">
              <h4>🔄 跨平台同步</h4>
              <p>无论您使用电脑、手机还是平板，都能随时随地访问和管理您的任务，确保信息的实时性和一致性。</p>
            </div>
            <div class="management-card">
              <h4>🔒 隐私安全</h4>
              <p>采用本地优先的数据存储策略，确保您的隐私安全，同时支持云端备份，让数据永不丢失。</p>
            </div>
            <div class="management-card">
              <h4>🤝 团队协作</h4>
              <p>支持任务共享和团队协作，让团队成员可以共同完成任务，提高整体工作效率。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 实用技巧 -->
      <section id="tips" class="tips">
        <h2 class="section-title">
          待办管理实用技巧
        </h2>
        <div class="tips-list">
          <div class="tip-item">
            <div class="tip-number">
              1
            </div>
            <div class="tip-content">
              <h4>二八法则</h4>
              <p>识别并优先处理最重要的20%任务，它们能带来80%的价值。每天清晨列出最重要的3件事，优先完成它们。</p>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-number">
              2
            </div>
            <div class="tip-content">
              <h4>番茄工作法</h4>
              <p>将工作划分为25分钟的专注时段，配合待办工具的时间提醒功能，保持高效的工作节奏。</p>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-number">
              3
            </div>
            <div class="tip-content">
              <h4>GTD工作法</h4>
              <p>收集、整理、组织、回顾、执行。使用待办工具建立完善的任务管理系统，让大脑专注于执行而非记忆。</p>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-number">
              4
            </div>
            <div class="tip-content">
              <h4>任务分解</h4>
              <p>将复杂的大任务分解为可执行的小任务，每完成一个小任务都给予自己肯定，保持工作的动力。</p>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-number">
              5
            </div>
            <div class="tip-content">
              <h4>批量处理</h4>
              <p>将相似的任务集中处理，减少上下文切换的成本，提高整体工作效率。</p>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-number">
              6
            </div>
            <div class="tip-content">
              <h4>每日回顾</h4>
              <p>每天结束前回顾任务完成情况，规划明天的工作，通过待办工具的统计功能了解自己的工作习惯。</p>
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
  background-color: #fff8f0;
}

/* Hero Section - 波浪背景 */
.hero {
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa502 100%);
  min-height: 400px;
  color: white;
  padding: 100px 20px 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 25px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 22px;
  opacity: 0.95;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-btn {
  display: inline-block;
  background: #fff;
  color: #ff6b6b;
  padding: 18px 50px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.3s;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.hero-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* 内容区域 */
.content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px;
}

/* 核心功能 - 左右分栏布局 */
.features {
  margin-bottom: 100px;
}

.section-title {
  text-align: center;
  font-size: 42px;
  margin-bottom: 80px;
  color: #333;
  position: relative;
  font-weight: 700;
}

.section-title::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 6px;
  background: linear-gradient(90deg, #ff6b6b, #ffa502);
  border-radius: 3px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  display: flex;
  align-items: center;
  gap: 30px;
  border: 3px solid transparent;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: #ffa502;
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa502 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 26px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.feature-content p {
  color: #666;
  font-size: 17px;
  line-height: 1.8;
}

/* 使用场景 - 时间轴风格 */
.scenarios {
  margin-bottom: 100px;
}

.scenario-timeline {
  position: relative;
  padding-left: 60px;
}

.scenario-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #ff6b6b, #ffa502);
  border-radius: 2px;
}

.scenario-step {
  position: relative;
  padding: 30px 40px;
  margin-bottom: 40px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.scenario-step::before {
  content: '';
  position: absolute;
  left: -48px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #ff6b6b;
  border: 4px solid #fff8f0;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #ff6b6b;
}

.scenario-step:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.scenario-step h4 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

.scenario-step p {
  color: #666;
  font-size: 16px;
}

/* 高效管理 - 卡片网格 */
.management {
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa502 100%);
  padding: 80px;
  border-radius: 30px;
  margin-bottom: 100px;
  position: relative;
  overflow: hidden;
}

.management::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.management-content h3 {
  font-size: 36px;
  margin-bottom: 30px;
  color: white;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.management-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  position: relative;
  z-index: 1;
}

.management-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 35px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s;
}

.management-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.management-card h4 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #ff6b6b;
  font-weight: 700;
}

.management-card p {
  color: #555;
  font-size: 15px;
  line-height: 1.7;
}

/* 实用技巧 - 交错布局 */
.tips {
  margin-bottom: 100px;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tip-item {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 40px;
  transition: all 0.3s;
}

.tip-item:nth-child(even) {
  flex-direction: row-reverse;
  background: linear-gradient(135deg, #fff5f5 0%, #fff9e6 100%);
}

.tip-item:hover {
  transform: translateX(10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.tip-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa502 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  color: white;
  flex-shrink: 0;
}

.tip-content h4 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #333;
  font-weight: 700;
}

.tip-content p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
}

/* 数据统计 - 圆形进度条 */
.stats {
  background: white;
  padding: 80px 40px;
  text-align: center;
  margin-bottom: 100px;
  border-radius: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-circle {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.stat-circle svg {
  transform: rotate(-90deg);
}

.stat-circle circle {
  fill: none;
  stroke-width: 12;
}

.stat-circle .bg {
  stroke: #f0f0f0;
}

.stat-circle .progress {
  stroke: url(#gradient);
  stroke-linecap: round;
  stroke-dasharray: 440;
  stroke-dashoffset: 88;
  transition: stroke-dashoffset 1s ease;
}

.stat-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: bold;
  color: #ff6b6b;
}

.stat-label {
  margin-top: 20px;
  font-size: 18px;
  color: #666;
  font-weight: 600;
}

/* 页脚 */
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
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
  gap: 40px;
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
@media (max-width: 1024px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .management-cards {
    grid-template-columns: 1fr;
  }

  .stats-grid {
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

  .nav-menu {
    display: none;
  }

  .feature-card {
    transform: none !important;
  }

  .tip-item,
  .tip-item:nth-child(even) {
    flex-direction: column;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
