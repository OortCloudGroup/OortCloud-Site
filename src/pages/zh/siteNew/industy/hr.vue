<template>
  <div class="hr-page">
    <!-- Hero区域 -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <span class="badge">🎯 智能人力资源管理平台</span>
          <h1>赋能团队 激发潜能</h1>
          <p>一体化人力资源管理系统，从招聘入职到离职管理，全流程数字化。让HR工作更高效，让员工体验更出色。</p>
        </div>
      </div>
    </section>

    <!-- 功能特性 -->
    <section id="features" class="features">
      <div class="section-header">
        <h2>强大功能，全面覆盖</h2>
        <p>从员工全生命周期管理到智能化数据分析，满足企业HR管理的所有需求</p>
      </div>
      <div class="features-container">
        <div v-for="(feature, index) in featureList" :key="index" class="feature-row">
          <div class="feature-visual">
            {{ feature.icon }}
          </div>
          <div class="feature-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
            <div class="feature-badges">
              <span v-for="(badge, i) in feature.badges" :key="i" class="feature-badge">{{ badge }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 系统模块 -->
    <section id="modules" class="modules">
      <div class="section-header">
        <h2>系统模块</h2>
        <p>全方位的人力资源管理解决方案</p>
      </div>
      <div class="modules-grid">
        <div v-for="(module, index) in moduleList" :key="index" class="module-card">
          <div class="module-icon">
            {{ module.icon }}
          </div>
          <h3>{{ module.title }}</h3>
          <p>{{ module.desc }}</p>
          <ul class="module-features">
            <li v-for="(feature, i) in module.features" :key="i">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </section>
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
    icon: '👥',
    title: '智能招聘管理',
    desc: '全流程招聘管理，从职位发布、简历筛选、面试安排到录用入职，一站式解决招聘难题。智能简历解析，自动匹配人才。',
    badges: ['职位发布', '简历管理', '面试安排', '智能匹配']
  },
  {
    icon: '📊',
    title: '绩效管理体系',
    desc: '灵活的绩效考核方案，支持OKR、KPI等多种考核方式。目标设定、过程跟踪、结果评估，帮助员工与企业共同成长。',
    badges: ['OKR管理', 'KPI考核', '360度评估', '数据分析']
  },
  {
    icon: '🏖️',
    title: '考勤与假期',
    desc: '智能考勤打卡，支持多种打卡方式。灵活的假期管理，年假、病假、事假等假期类型一应俱全，自动计算假期余额。',
    badges: ['智能打卡', '排班管理', '假期管理', '加班管理']
  }
])

// 系统模块列表
const moduleList = ref([
  {
    icon: '📋',
    title: '组织架构',
    desc: '可视化组织架构图，灵活调整部门与岗位，清晰展示企业结构',
    features: ['组织架构图展示', '部门管理', '岗位设置', '人员编制管理']
  },
  {
    icon: '👤',
    title: '员工档案',
    desc: '完整的员工信息管理，包括基本信息、工作经历、教育背景等',
    features: ['员工信息管理', '合同管理', '证照管理', '档案查询']
  },
  {
    icon: '💰',
    title: '薪酬福利',
    desc: '灵活的薪酬体系，自动计算薪资，支持多种薪资结构和奖金方案',
    features: ['薪资核算', '社保公积金', '个税计算', '工资条发放']
  },
  {
    icon: '📚',
    title: '培训发展',
    desc: '员工培训管理，课程安排、学习跟踪、效果评估，助力员工成长',
    features: ['培训计划', '在线课程', '学习记录', '培训评估']
  },
  {
    icon: '📈',
    title: '报表分析',
    desc: '多维度数据分析，生成各类人力资源报表，为决策提供支持',
    features: ['人员结构分析', '流失率分析', '成本分析', '自定义报表']
  },
  {
    icon: '🔐',
    title: '权限管理',
    desc: '灵活的权限配置，确保数据安全，支持角色管理和数据权限控制',
    features: ['角色管理', '权限配置', '数据权限', '操作日志']
  }
])

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

/* Hero区域 */
.hero {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 700px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -10%;
  width: 800px;
  height: 800px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -20%;
  left: -5%;
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-text {
  color: #333;
  text-align: center;
  max-width: 800px;
}

.hero-text .badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 500;
}

.hero-text h1 {
  font-size: 62px;
  margin-bottom: 30px;
  line-height: 1.15;
  font-weight: 800;
}

.hero-text p {
  font-size: 20px;
  opacity: 0.85;
  margin-bottom: 40px;
  line-height: 1.9;
}

.hero-buttons {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.btn-main {
  background: #333;
  color: white;
  padding: 18px 45px;
  border-radius: 35px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: inline-block;
  cursor: pointer;
}

.btn-main:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.btn-alt {
  background: rgba(255, 255, 255, 0.4);
  color: #333;
  padding: 18px 45px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 35px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: background 0.3s, transform 0.3s;
  display: inline-block;
  cursor: pointer;
}

.btn-alt:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: translateY(-4px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hr-dashboard {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(25px);
  border-radius: 25px;
  padding: 45px;
  width: 100%;
  max-width: 450px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.dashboard-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  color: #333;
}

.dashboard-top h4 {
  font-size: 20px;
  font-weight: 700;
}

.dashboard-top .date {
  font-size: 14px;
  opacity: 0.7;
}

.team-summary {
  background: rgba(255, 255, 255, 0.35);
  border-radius: 18px;
  padding: 25px;
  margin-bottom: 25px;
  color: #333;
}

.team-summary h5 {
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 600;
}

.team-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.team-stat {
  text-align: center;
}

.team-stat .num {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 5px;
}

.team-stat .label {
  font-size: 13px;
  opacity: 0.7;
}

.activity-list {
  background: rgba(255, 255, 255, 0.35);
  border-radius: 18px;
  padding: 25px;
  color: #333;
}

.activity-list h5 {
  font-size: 16px;
  margin-bottom: 18px;
  font-weight: 600;
}

.activity-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 40px;
  height: 40px;
  background: #ff9a9e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 18px;
}

.activity-text {
  flex: 1;
}

.activity-text .name {
  font-size: 15px;
  font-weight: 500;
}

.activity-text .action {
  font-size: 13px;
  opacity: 0.7;
}

.activity-time {
  font-size: 12px;
  opacity: 0.6;
}

/* 功能特性 */
.features {
  padding: 120px 20px;
  background: #f9f9fc;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 70px;
}

.section-header h2 {
  font-size: 48px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 700;
}

.section-header p {
  font-size: 19px;
  color: #666;
  line-height: 1.8;
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
  margin-bottom: 120px;
}

.feature-row:nth-child(even) {
  direction: rtl;
}

.feature-row:nth-child(even) .feature-content {
  direction: ltr;
}

.feature-visual {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 30px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 100px;
  box-shadow: 0 25px 70px rgba(255, 154, 158, 0.25);
}

.feature-content h3 {
  font-size: 38px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 700;
}

.feature-content p {
  font-size: 18px;
  color: #666;
  line-height: 1.9;
  margin-bottom: 35px;
}

.feature-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.feature-badge {
  background: #fff5f6;
  color: #ff9a9e;
  padding: 10px 22px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
}

/* 模块展示 */
.modules {
  padding: 120px 20px;
  background: #fff;
}

.modules-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.module-card {
  background: #f9f9fc;
  border-radius: 25px;
  padding: 45px 35px;
  transition: all 0.4s ease;
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
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.module-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.module-card:hover::before {
  transform: scaleX(1);
}

.module-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 42px;
}

.module-card h3 {
  font-size: 24px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 700;
}

.module-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 25px;
}

.module-features {
  list-style: none;
}

.module-features li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: #777;
}

.module-features li::before {
  content: '✓';
  width: 22px;
  height: 22px;
  background: #ff9a9e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  margin-right: 12px;
  flex-shrink: 0;
}

/* 数据统计 */
.stats {
  padding: 120px 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  color: #333;
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  text-align: center;
}

.stat-box h3 {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 12px;
}

.stat-box p {
  font-size: 19px;
  opacity: 0.85;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .feature-row:nth-child(even) {
    direction: ltr;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hero-text h1 {
    font-size: 42px;
  }

  .modules-grid,
  .stats-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .job-card {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .job-info .tags {
    justify-content: center;
  }
}
</style>
