<template>
  <div class="hr-management">
    <section class="hero">
      <div class="hero-content">
        <h1>综合人事</h1>
        <p>全方位人力资源管理解决方案，覆盖员工全生命周期。智能、高效、便捷，助力企业数字化转型，提升人力资源管理效能。</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 核心模块 -->
      <section id="modules" class="modules">
        <h2 class="section-title">
          核心管理模块
        </h2>
        <div class="module-grid">
          <div class="module-card">
            <div class="module-icon">
              👤
            </div>
            <h3>组织架构</h3>
            <p>灵活的组织架构管理，支持多层级、多部门设置，实现组织架构可视化，清晰展现企业结构。</p>
          </div>
          <div class="module-card">
            <div class="module-icon">
              📋
            </div>
            <h3>招聘管理</h3>
            <p>全流程招聘管理，从职位发布、简历筛选、面试安排到录用入职，一站式解决招聘难题。</p>
          </div>
          <div class="module-card">
            <div class="module-icon">
              📊
            </div>
            <h3>考勤管理</h3>
            <p>智能考勤系统，支持多种打卡方式、自动计算工时、请假加班管理，考勤数据一目了然。</p>
          </div>
          <div class="module-card">
            <div class="module-icon">
              💰
            </div>
            <h3>薪酬管理</h3>
            <p>灵活的薪酬体系，支持多种薪酬方案、自动计算薪资、个税申报，确保薪资发放准确及时。</p>
          </div>
          <div class="module-card">
            <div class="module-icon">
              📈
            </div>
            <h3>绩效管理</h3>
            <p>科学的绩效评估体系，支持多种考核方式、目标设定、绩效面谈，助力员工成长与发展。</p>
          </div>
          <div class="module-card">
            <div class="module-icon">
              🎓
            </div>
            <h3>培训管理</h3>
            <p>完善的培训体系，课程管理、在线学习、培训效果评估，提升员工专业技能和综合素质。</p>
          </div>
        </div>
      </section>

      <!-- 员工生命周期 -->
      <section id="lifecycle" class="lifecycle">
        <h2 class="section-title">
          员工生命周期管理
        </h2>
        <div class="lifecycle-container">
          <div class="lifecycle-line" />
          <div class="lifecycle-steps">
            <div class="lifecycle-step">
              <div class="step-dot">
                1
              </div>
              <h4>招聘入职</h4>
              <p>发布职位 · 简历筛选 · 面试录用</p>
            </div>
            <div class="lifecycle-step">
              <div class="step-dot">
                2
              </div>
              <h4>在职管理</h4>
              <p>考勤打卡 · 薪酬发放 · 绩效考核</p>
            </div>
            <div class="lifecycle-step">
              <div class="step-dot">
                3
              </div>
              <h4>培训发展</h4>
              <p>技能培训 · 职业规划 · 晋升发展</p>
            </div>
            <div class="lifecycle-step">
              <div class="step-dot">
                4
              </div>
              <h4>离职管理</h4>
              <p>离职申请 · 交接办理 · 档案归档</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 功能详情 -->
      <section id="features" class="features">
        <h2 class="section-title">
          详细功能
        </h2>
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-icon">
              🏢
            </div>
            <div class="feature-content">
              <h4>组织管理</h4>
              <p>灵活配置企业组织架构，支持多层级、多部门管理，实时可视化展示。</p>
              <ul class="feature-list">
                <li>部门层级管理</li>
                <li>岗位职级设置</li>
                <li>人员编制管理</li>
                <li>组织架构图展示</li>
              </ul>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              📅
            </div>
            <div class="feature-content">
              <h4>考勤排班</h4>
              <p>智能考勤排班系统，支持多种班次设置，自动统计考勤数据。</p>
              <ul class="feature-list">
                <li>多种打卡方式</li>
                <li>智能排班管理</li>
                <li>假期审批流程</li>
                <li>考勤报表生成</li>
              </ul>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              💳
            </div>
            <div class="feature-content">
              <h4>薪酬核算</h4>
              <p>自动化薪酬核算系统，支持多种薪酬方案，确保薪资发放准确。</p>
              <ul class="feature-list">
                <li>薪资方案配置</li>
                <li>个税自动计算</li>
                <li>社保公积金管理</li>
                <li>工资条在线查看</li>
              </ul>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              🎯
            </div>
            <div class="feature-content">
              <h4>绩效评估</h4>
              <p>科学的绩效管理体系，支持多维度考核，助力员工持续成长。</p>
              <ul class="feature-list">
                <li>考核模板配置</li>
                <li>目标设定追踪</li>
                <li>360度评估</li>
                <li>绩效面谈记录</li>
              </ul>
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

.hr-management {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fafafa;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
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
  color: #fa709a;
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.25);
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

/* 核心模块 */
.modules {
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
  background: linear-gradient(90deg, #fa709a, #fee140);
  border-radius: 3px;
}

.module-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.module-card {
  background: white;
  padding: 45px 30px;
  border-radius: 18px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.module-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #fa709a, #fee140);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.module-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.module-card:hover::before {
  transform: scaleX(1);
}

.module-icon {
  width: 95px;
  height: 95px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 40px;
  color: white;
  box-shadow: 0 8px 25px rgba(250, 112, 154, 0.3);
}

.module-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.module-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
}

/* 员工生命周期 */
.lifecycle {
  margin-bottom: 120px;
}

.lifecycle-container {
  position: relative;
  padding: 60px 0;
}

.lifecycle-line {
  position: absolute;
  top: 50%;
  left: 100px;
  right: 100px;
  height: 4px;
  background: linear-gradient(90deg, #fa709a, #fee140);
  z-index: 0;
}

.lifecycle-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.lifecycle-step {
  text-align: center;
  flex: 1;
}

.step-dot {
  width: 80px;
  height: 80px;
  background: white;
  border: 5px solid #fa709a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  font-weight: bold;
  color: #fa709a;
  box-shadow: 0 5px 20px rgba(250, 112, 154, 0.2);
  transition: all 0.3s;
}

.lifecycle-step:hover .step-dot {
  transform: scale(1.1);
  background: linear-gradient(135deg, #fa709a, #fee140);
  color: white;
}

.lifecycle-step h4 {
  font-size: 20px;
  margin-bottom: 8px;
  color: #333;
  font-weight: 700;
}

.lifecycle-step p {
  color: #666;
  font-size: 14px;
}

/* 功能详情 */
.features {
  margin-bottom: 120px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.feature-item {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  display: flex;
  gap: 35px;
  align-items: flex-start;
}

.feature-item:hover {
  transform: translateX(10px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  flex-shrink: 0;
}

.feature-content h4 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #333;
  font-weight: 700;
}

.feature-content p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 15px;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  padding: 6px 0;
  padding-left: 25px;
  position: relative;
  color: #555;
  font-size: 14px;
}

.feature-list li::before {
  content: '•';
  position: absolute;
  left: 5px;
  color: #fa709a;
  font-weight: bold;
  font-size: 20px;
}

/* 数据统计 */
.stats {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  padding: 90px 50px;
  border-radius: 25px;
  margin-bottom: 120px;
  text-align: center;
}

.stats h3 {
  font-size: 38px;
  margin-bottom: 60px;
  color: white;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}

.stat-item {
  position: relative;
}

.stat-number {
  font-size: 56px;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

/* 管理优势 */
.advantages {
  margin-bottom: 120px;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.advantage-card {
  background: white;
  padding: 45px 35px;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  text-align: center;
  position: relative;
}

.advantage-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 4px;
  background: linear-gradient(90deg, #fa709a, #fee140);
  border-radius: 2px;
  opacity: 0;
  transition: opacity 0.3s;
}

.advantage-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.advantage-card:hover::after {
  opacity: 1;
}

.advantage-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 40px;
  color: white;
}

.advantage-card h4 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.advantage-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
}

/* 适用行业 */
.industries {
  background: white;
  padding: 80px 50px;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  margin-bottom: 120px;
}

.industries h3 {
  font-size: 36px;
  margin-bottom: 50px;
  text-align: center;
  color: #333;
  font-weight: 700;
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}

.industry-item {
  text-align: center;
  padding: 35px 20px;
  border-radius: 16px;
  transition: all 0.3s;
  background: #fafafa;
}

.industry-item:hover {
  background: linear-gradient(135deg, #fff5f7, #fffef5);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.industry-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.industry-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
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
  .module-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantage-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .industry-grid {
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

  .module-grid {
    grid-template-columns: 1fr;
  }

  .lifecycle-line {
    display: none;
  }

  .lifecycle-steps {
    flex-direction: column;
    gap: 30px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .feature-item {
    flex-direction: column;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantage-grid {
    grid-template-columns: 1fr;
  }

  .industry-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
