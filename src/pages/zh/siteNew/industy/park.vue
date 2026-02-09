<template>
  <div class="smart-park">
    <!-- Banner区域 -->
    <section class="banner">
      <div class="banner-content">
        <h1>智慧园区解决方案</h1>
        <p>以AIoT为核心，打造数字化、智能化、可视化的现代园区管理体系，提升运营效率，<br />创造极致体验</p>
      </div>
    </section>

    <!-- 主要内容 -->
    <main class="main-content">
      <!-- 功能特性 -->
      <section id="features" class="section-title">
        <h2>核心功能</h2>
        <p>全方位智慧园区管理能力，赋能园区数字化转型</p>
      </section>

      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">
            {{ feature.icon }}
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>

      <!-- 应用场景 -->
      <section id="scenarios" class="scenarios-section">
        <div class="section-title">
          <h2>应用场景</h2>
          <p>满足各类园区场景的智能化需求</p>
        </div>

        <div class="scenario-list">
          <div v-for="(scenario, index) in scenarios" :key="index" class="scenario-item">
            <div class="scenario-image">
              {{ scenario.icon }}
            </div>
            <div class="scenario-content">
              <h3>{{ scenario.title }}</h3>
              <p>{{ scenario.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 核心优势 -->
      <section id="advantages" class="advantages-section">
        <div class="section-title">
          <h2>核心优势</h2>
          <p>为什么选择我们的智慧园区解决方案</p>
        </div>

        <div class="advantages-grid">
          <div v-for="(advantage, index) in advantages" :key="index" class="advantage-item">
            <div class="advantage-number">
              {{ `0${index + 1}` }}
            </div>
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.desc }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer id="contact" class="footer">
      <div class="footer-content">
        <p>奥尔特云(深圳)智慧科技有限公司</p>
        <p>专注智慧园区、智慧城市、数字政府等领域的智能化解决方案</p>
        <div class="footer-links">
          <a href="#">关于我们</a>
          <a href="#">产品中心</a>
          <a href="#">解决方案</a>
          <a href="#">联系我们</a>
        </div>
      </div>
    </footer>
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
// 功能特性数据
const features = ref([
  { icon: '🏢', title: '智能安防', desc: 'AI视频监控、人脸识别、智能门禁，全方位保障园区安全' },
  { icon: '🚗', title: '智慧停车', desc: '车位引导、无感支付、车位预约，提升停车管理效率' },
  { icon: '⚡', title: '能源管理', desc: '智能用电监控、能耗分析、节能优化，降低运营成本' },
  { icon: '📊', title: '数据可视化', desc: '实时数据看板、运营分析、决策支持，实现精细化管理' },
  { icon: '🔧', title: '设施运维', desc: '设备状态监控、故障预警、工单管理，保障园区运行' },
  { icon: '📱', title: '移动服务', desc: '园区APP、小程序、扫码通行，提供便捷移动服务' }
])

// 应用场景数据
const scenarios = ref([
  { icon: '🏭', title: '工业园区', desc: '生产安全管理、环保监测、物流调度，打造安全高效的工业园区' },
  { icon: '🏢', title: '商务园区', desc: '智能办公、会议管理、企业服务，提升商务园区竞争力' },
  { icon: '🎓', title: '教育园区', desc: '校园安全、智慧教学、生活服务，构建现代化教育园区' },
  { icon: '🏪', title: '商业园区', desc: '客流分析、营销管理、会员服务，提升商业园区价值' }
])

// 核心优势数据
const advantages = ref([
  { title: '快速部署', desc: '模块化设计，灵活配置，快速上线，支持私有化部署' },
  { title: '开放生态', desc: '标准化接口，易于集成第三方系统，支持定制化开发' },
  { title: '专业服务', desc: '资深技术团队，全程实施服务，完善的售后保障' }
])
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f5f7fa;
}

/* Banner区域 */
.banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 400px;
  color: white;
  padding: 8rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.banner-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.banner p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.banner-btn {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 12px 32px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.banner-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

/* 主要内容区域 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* 功能特性 */
.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title h2 {
  font-size: 2.2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.section-title p {
  color: #6b7280;
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
  font-size: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #1f2937;
}

.feature-card p {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 数据展示 */
.stats-section {
  background: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  margin-bottom: 4rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.stat-item p {
  color: #6b7280;
  font-size: 1rem;
}

/* 应用场景 */
.scenarios-section {
  margin-bottom: 4rem;
}

.scenario-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.scenario-item {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.scenario-item:hover {
  transform: translateY(-5px);
}

.scenario-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

.scenario-content {
  padding: 1.5rem;
}

.scenario-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #1f2937;
}

.scenario-content p {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 优势 */
.advantages-section {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 4rem 2rem;
  border-radius: 20px;
  margin-bottom: 4rem;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.advantage-item {
  text-align: center;
  padding: 1.5rem;
}

.advantage-number {
  font-size: 4rem;
  font-weight: 700;
  color: #3b82f6;
  opacity: 0.3;
  margin-bottom: 0.5rem;
}

.advantage-item h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #1f2937;
}

.advantage-item p {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 页脚 */
.footer {
  background: #1f2937;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer p {
  opacity: 0.7;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }

  .nav-links {
    display: none;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenario-list {
    grid-template-columns: 1fr;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }
}
</style>
