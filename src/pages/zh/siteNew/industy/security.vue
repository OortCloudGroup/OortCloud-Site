<template>
  <div class="smart-security">
    <section class="hero">
      <div class="container hero-content">
        <h1>智慧安保</h1>
        <p>基于私有云和AI技术的智能化安保管理系统，为园区、场馆、楼宇提供全方位的安全保障和智能预警服务</p>
      </div>
    </section>

    <!-- 核心功能 -->
    <section id="features" class="section features">
      <div class="container">
        <div class="section-title">
          <h2>核心功能</h2>
          <p>运用先进的AI技术和大数据分析，构建智能化、可视化的安保管理体系</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 解决方案 -->
    <section id="solutions" class="section solutions">
      <div class="container">
        <div class="section-title">
          <h2>解决方案</h2>
          <p>针对不同应用场景，提供定制化的智慧安保解决方案</p>
        </div>

        <div v-for="(solution, index) in solutions" :key="index" class="solution-item">
          <div class="solution-image">
            {{ solution.icon }}
          </div>
          <div class="solution-content">
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.desc }}</p>
            <ul>
              <li v-for="(item, i) in solution.list" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Vue3 Composition API 语法
import { ref } from 'vue'

definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})

// 核心功能数据
const features = ref([
  {
    icon: '🔍',
    title: '智能监控',
    desc: '利用AI图像识别技术，实现24小时全天候智能监控，自动识别异常行为和安全隐患，实时预警通知'
  },
  {
    icon: '🚨',
    title: '应急响应',
    desc: '建立快速响应机制，突发事件自动报警联动，指挥调度系统一键调度，确保第一时间处理'
  },
  {
    icon: '📊',
    title: '数据分析',
    desc: '大数据分析平台，对安保数据进行深度挖掘，生成可视化报表，为决策提供数据支撑'
  },
  {
    icon: '📱',
    title: '移动管理',
    desc: '支持移动端实时查看和管理，安保人员通过手机APP即可接收任务、上报情况、查看监控'
  },
  {
    icon: '🔐',
    title: '权限管理',
    desc: '精细化权限控制，分级授权管理，确保信息安全，操作全程留痕，责任可追溯'
  },
  {
    icon: '🌐',
    title: '系统集成',
    desc: '可与门禁系统、消防系统、停车场系统等无缝对接，实现统一管理和联动控制'
  }
])

// 解决方案数据
const solutions = ref([
  {
    icon: '🏢',
    title: '智慧园区安保',
    desc: '为产业园区、科技园区提供全方位的安全保障，实现人员、车辆、物资的智能化管理',
    list: [
      '智能门禁与人员识别',
      '车辆出入管理与车牌识别',
      '周界防护与入侵检测',
      '巡更系统与电子签到',
      '重点区域视频监控'
    ]
  },
  {
    icon: '🏟️',
    title: '智慧场馆安保',
    desc: '面向体育场馆、展览中心、会议中心等大型公共场所，提供人流控制和安全保障',
    list: [
      '实时人流监测与预警',
      '重点区域布控',
      '应急疏散引导系统',
      '活动期间临时安保部署',
      '多部门协同指挥调度'
    ]
  },
  {
    icon: '🏗️',
    title: '智慧楼宇安保',
    desc: '为办公楼、商业综合体、住宅小区提供一体化的楼宇安全管理解决方案',
    list: [
      '访客管理与预约系统',
      '电梯智能调度',
      '消防报警联动',
      '楼层安防巡查',
      '智能家居安防集成'
    ]
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f5f7fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e3c72;
  font-size: 20px;
}

.nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.hero {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
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
  color: #1e3c72;
  padding: 15px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 36px;
  color: #1e3c72;
  margin-bottom: 15px;
}

.section-title p {
  color: #666;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 50%;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
}

.feature-card h3 {
  font-size: 22px;
  color: #1e3c72;
  margin-bottom: 15px;
}

.feature-card p {
  color: #666;
  line-height: 1.8;
}

.solutions {
  background: #f8f9fa;
}

.solution-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.solution-item:nth-child(even) {
  flex-direction: row-reverse;
}

.solution-image {
  flex: 1;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: white;
  margin-right: 40px;
}

.solution-item:nth-child(even) .solution-image {
  margin-right: 0;
  margin-left: 40px;
}

.solution-content {
  flex: 1;
}

.solution-content h3 {
  font-size: 28px;
  color: #1e3c72;
  margin-bottom: 20px;
}

.solution-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.solution-content ul {
  list-style: none;
  padding: 0;
}

.solution-content ul li {
  padding: 8px 0;
  color: #666;
  position: relative;
  padding-left: 25px;
}

.solution-content ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #2a5298;
  font-weight: bold;
}

.stats {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.stat-item h3 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
}

.stat-item p {
  font-size: 18px;
  opacity: 0.9;
}

.contact {
  background: white;
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact h3 {
  font-size: 28px;
  color: #1e3c72;
  margin-bottom: 20px;
}

.contact p {
  color: #666;
  margin-bottom: 30px;
  line-height: 1.8;
}

.contact-btn {
  display: inline-block;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 15px 50px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(30, 60, 114, 0.3);
}

.footer {
  background: #1a1a2e;
  color: white;
  padding: 40px 0;
  text-align: center;
}

.footer p {
  opacity: 0.7;
  font-size: 14px;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 16px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .solution-item,
  .solution-item:nth-child(even) {
    flex-direction: column;
  }

  .solution-image {
    margin: 0 0 20px 0;
    width: 100%;
  }
}
</style>
