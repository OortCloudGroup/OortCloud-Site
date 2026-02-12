<template>
  <div class="work-report">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <span>🚀</span>
          <span>智能工作汇报系统</span>
        </div>
        <h1>让工作汇报<br /><span>更高效更专业</span></h1>
        <p>告别繁琐的文档编写，一键生成专业工作汇报。支持多种汇报类型、智能模板推荐、数据可视化展示，让汇报变得简单高效。</p>
      </div>
    </section>

    <!-- 功能介绍 -->
    <section id="features" class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>核心功能亮点</h2>
          <p>强大的功能设计，满足各种汇报场景需求</p>
        </div>
        <div class="features-list">
          <div class="feature-item">
            <div class="feature-text">
              <div class="feature-number">
                01
              </div>
              <h3>智能模板库</h3>
              <p>内置丰富的汇报模板，涵盖日报、周报、月报、项目汇报等多种类型。支持自定义模板，企业可根据自身需求创建专属模板库。</p>
              <div class="feature-tags">
                <span class="feature-tag">多场景模板</span>
                <span class="feature-tag">自定义设计</span>
                <span class="feature-tag">一键套用</span>
              </div>
            </div>
            <div class="feature-visual">
              📋
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-text">
              <div class="feature-number">
                02
              </div>
              <h3>数据可视化</h3>
              <p>支持图表、图形等多种数据展示方式，让数据更直观。自动生成柱状图、折线图、饼图等，汇报效果更专业。</p>
              <div class="feature-tags">
                <span class="feature-tag">多种图表</span>
                <span class="feature-tag">实时更新</span>
                <span class="feature-tag">导出高清</span>
              </div>
            </div>
            <div class="feature-visual">
              📊
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-text">
              <div class="feature-number">
                03
              </div>
              <h3>协同编辑</h3>
              <p>支持多人在线协同编辑汇报内容，实时同步修改，团队成员可同时参与汇报编写，提高协作效率。</p>
              <div class="feature-tags">
                <span class="feature-tag">实时协作</span>
                <span class="feature-tag">版本控制</span>
                <span class="feature-tag">评论反馈</span>
              </div>
            </div>
            <div class="feature-visual">
              👥
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 汇报模板 -->
    <section id="templates" class="templates-section">
      <div class="templates-header">
        <h2>精选汇报模板</h2>
        <p>专业团队精心设计的模板，让您的汇报更出色</p>
      </div>
      <div class="templates-grid">
        <div class="template-card">
          <div class="template-preview">
            📄
          </div>
          <div class="template-content">
            <h3>标准日报模板</h3>
            <p>简洁明了的日报格式，包含今日工作、明日计划、遇到的问题等核心内容，适合日常汇报使用。</p>
            <div class="template-meta">
              <span class="template-use">10,234 人使用</span>
              <span class="template-tag">常用</span>
            </div>
          </div>
        </div>
        <div class="template-card">
          <div class="template-preview">
            📑
          </div>
          <div class="template-content">
            <h3>项目进度周报</h3>
            <p>专业的项目周报模板，包含本周进展、下周计划、风险预警、资源需求等模块，适合项目管理。</p>
            <div class="template-meta">
              <span class="template-use">8,567 人使用</span>
              <span class="template-tag">推荐</span>
            </div>
          </div>
        </div>
        <div class="template-card">
          <div class="template-preview">
            📈
          </div>
          <div class="template-content">
            <h3>月度分析报告</h3>
            <p>全面的月度汇报模板，支持数据对比分析、趋势图表展示，适合管理层月度总结汇报。</p>
            <div class="template-meta">
              <span class="template-use">5,891 人使用</span>
              <span class="template-tag">专业</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用流程 -->
    <section id="process" class="process-section">
      <div class="process-container">
        <div class="process-header">
          <h2>简单四步，完成汇报</h2>
          <p>无需复杂操作，快速上手，轻松创建专业汇报</p>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-icon">
              <span class="step-number">1</span>
              📝
            </div>
            <h4>选择模板</h4>
            <p>从模板库中选择合适的汇报类型</p>
          </div>
          <div class="process-step">
            <div class="step-icon">
              <span class="step-number">2</span>
              ✏️
            </div>
            <h4>填写内容</h4>
            <p>根据模板填写工作内容与数据</p>
          </div>
          <div class="process-step">
            <div class="step-icon">
              <span class="step-number">3</span>
              🎨
            </div>
            <h4>美化样式</h4>
            <p>调整排版样式，添加图表美化</p>
          </div>
          <div class="process-step">
            <div class="step-icon">
              <span class="step-number">4</span>
              📤
            </div>
            <h4>发送汇报</h4>
            <p>一键发送给相关人员或导出保存</p>
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
  background-color: #f8fafc;
}

/* Hero Section - 居中大标题设计 */
.hero {
  background: linear-gradient(180deg, #f8fafc 0%, #e0e7ff 100%);
  padding: 120px 30px 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  color: #2563eb;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.hero h1 {
  font-size: 60px;
  line-height: 1.1;
  margin-bottom: 25px;
  color: #1e293b;
  font-weight: 800;
}

.hero h1 span {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 20px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  padding: 16px 45px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.25);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(37, 99, 235, 0.35);
}

.btn-outline {
  background: white;
  color: #2563eb;
  padding: 16px 45px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #e0e7ff;
  transition: all 0.3s;
}

.btn-outline:hover {
  border-color: #2563eb;
  background: #f8fafc;
}

/* 汇报类型选择 */
.report-types {
  max-width: 1200px;
  margin: -60px auto 80px;
  padding: 0 30px;
  position: relative;
  z-index: 10;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.type-card {
  background: white;
  padding: 30px 25px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid transparent;
}

.type-card:hover {
  transform: translateY(-8px);
  border-color: #2563eb;
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.15);
}

.type-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.type-card:nth-child(1) .type-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.type-card:nth-child(2) .type-icon {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.type-card:nth-child(3) .type-icon {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

.type-card:nth-child(4) .type-icon {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.type-card h4 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #1e293b;
  font-weight: 700;
}

.type-card p {
  font-size: 13px;
  color: #64748b;
}

/* 功能展示 */
.features-section {
  padding: 80px 30px;
  background: white;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 38px;
  margin-bottom: 15px;
  color: #1e293b;
  font-weight: 700;
}

.section-header p {
  font-size: 18px;
  color: #64748b;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 60px;
}

.feature-item:nth-child(even) {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
}

.feature-number {
  font-size: 72px;
  font-weight: 800;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 20px;
  opacity: 0.15;
}

.feature-text h3 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #1e293b;
  font-weight: 700;
  margin-top: -50px;
}

.feature-text p {
  font-size: 16px;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 20px;
}

.feature-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.feature-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
}

.feature-visual {
  flex: 1;
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  border-radius: 20px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  position: relative;
  overflow: hidden;
}

.feature-visual::before {
  content: '';
  position: absolute;
  top: 20%;
  right: 20%;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

/* 汇报模板展示 */
.templates-section {
  padding: 100px 30px;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
}

.templates-header {
  text-align: center;
  margin-bottom: 50px;
}

.templates-header h2 {
  font-size: 38px;
  margin-bottom: 15px;
  color: #1e293b;
  font-weight: 700;
}

.templates-header p {
  font-size: 18px;
  color: #64748b;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.template-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.template-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.template-preview {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: relative;
}

.template-card:nth-child(1) .template-preview {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.template-card:nth-child(2) .template-preview {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
}

.template-card:nth-child(3) .template-preview {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

.template-content {
  padding: 25px;
}

.template-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #1e293b;
  font-weight: 700;
}

.template-content p {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 15px;
  line-height: 1.6;
}

.template-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #f1f5f9;
}

.template-use {
  font-size: 13px;
  color: #2563eb;
  font-weight: 600;
}

.template-tag {
  background: #f1f5f9;
  color: #64748b;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
}

/* 数据统计 */
.stats-section {
  padding: 80px 30px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-card {
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

/* 使用流程 */
.process-section {
  padding: 100px 30px;
  background: white;
}

.process-container {
  max-width: 1000px;
  margin: 0 auto;
}

.process-header {
  text-align: center;
  margin-bottom: 70px;
}

.process-header h2 {
  font-size: 38px;
  margin-bottom: 15px;
  color: #1e293b;
  font-weight: 700;
}

.process-header p {
  font-size: 18px;
  color: #64748b;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 10%;
  right: 10%;
  height: 3px;
  background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
}

.process-step {
  text-align: center;
  position: relative;
  flex: 1;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
}

.step-number {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #2563eb;
}

.process-step h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #1e293b;
  font-weight: 700;
}

.process-step p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
}

/* CTA区域 */
.cta-section {
  padding: 100px 30px;
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  text-align: center;
}

.cta-container {
  max-width: 700px;
  margin: 0 auto;
}

.cta-container h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #1e293b;
  font-weight: 700;
}

.cta-container p {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 40px;
}

/* 页脚 */
.footer {
  background: #1e293b;
  color: white;
  padding: 60px 30px 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand h3 {
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  font-size: 14px;
}

.footer-links h4 {
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
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #3b82f6;
}

.footer-bottom {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .types-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-item {
    flex-direction: column;
    gap: 30px;
  }

  .feature-item:nth-child(even) {
    flex-direction: column;
  }

  .feature-visual {
    height: 280px;
  }

  .templates-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    flex-wrap: wrap;
  }

  .process-steps::before {
    display: none;
  }

  .process-step {
    flex: 1 1 calc(50% - 30px);
    margin-bottom: 40px;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .nav-menu {
    display: none;
  }

  .types-grid {
    grid-template-columns: 1fr;
  }

  .templates-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .process-step {
    flex: 1 1 100%;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
