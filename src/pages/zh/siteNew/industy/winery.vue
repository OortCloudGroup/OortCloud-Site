<template>
  <div class="smart-winery">
    <!-- Hero 区域 -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>智慧酒厂管理系统</h1>
        <p>基于物联网、大数据、人工智能技术，打造智能化、数字化的酒厂生产管理平台，提升生产效率，保障产品品质，降低运营成本</p>
      </div>
    </section>

    <!-- 核心功能 -->
    <section id="features" class="features">
      <div class="section-title">
        <h2>核心功能</h2>
        <p>全方位的智慧酒厂解决方案，覆盖生产全流程</p>
      </div>
      <div class="features-grid">
        <div v-for="(feature, index) in featureList" :key="index" class="feature-card">
          <div class="feature-icon">
            {{ feature.icon }}
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 详细功能板块 -->
    <section id="production" class="feature-detail">
      <div class="detail-section">
        <div class="detail-image">
          🏭
        </div>
        <div class="detail-content">
          <h3>生产工艺管理</h3>
          <p>数字化管理酿造全过程，确保工艺标准化、数据化、可追溯，提升产品品质稳定性</p>
          <ul class="detail-list">
            <li>原料管理与配方控制，精确配比确保品质</li>
            <li>发酵过程实时监控，温度、湿度、pH值全参数采集</li>
            <li>蒸馏工艺自动化控制，优化提取效率</li>
            <li>陈酿管理智能化，酒库环境自动调节</li>
            <li>灌装生产线智能化，减少人工干预</li>
            <li>工艺参数历史记录，持续优化改进</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="safety" class="feature-detail">
      <div class="detail-section">
        <div class="detail-image">
          🛡️
        </div>
        <div class="detail-content">
          <h3>安全管理</h3>
          <p>构建全方位安全防护体系，从人员、设备、环境多维度保障酒厂安全生产</p>
          <ul class="detail-list">
            <li>视频监控系统全覆盖，关键区域24小时监控</li>
            <li>气体泄漏监测，酒精、二氧化碳等危险气体实时预警</li>
            <li>火灾烟雾检测，早期预警快速响应</li>
            <li>设备运行状态监测，异常停机自动报警</li>
            <li>人员定位与安全管理，危险区域进入控制</li>
            <li>安全巡检数字化，隐患闭环管理</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="iot" class="feature-detail">
      <div class="detail-section">
        <div class="detail-image">
          📡
        </div>
        <div class="detail-content">
          <h3>IOT物联技术管理</h3>
          <p>通过物联网技术实现设备互联互通，构建智能化生产环境，提升管理效率</p>
          <ul class="detail-list">
            <li>传感器网络部署，温度、湿度、压力等参数实时采集</li>
            <li>设备智能连接，实现设备间数据共享与协同</li>
            <li>边缘计算节点，本地数据处理提升响应速度</li>
            <li>云平台数据汇聚，大数据分析与智能决策</li>
            <li>设备远程控制，减少人工现场操作</li>
            <li>预测性维护，提前预警设备故障风险</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="energy" class="feature-detail">
      <div class="detail-section">
        <div class="detail-image">
          ⚡
        </div>
        <div class="detail-content">
          <h3>能耗管理</h3>
          <p>智能能耗监测与分析系统，全面掌控能源使用情况，优化能源配置，降低生产成本</p>
          <ul class="detail-list">
            <li>水、电、气、热等多能源计量与监测</li>
            <li>能耗数据实时采集与分析，识别能耗异常</li>
            <li>能耗报表与趋势分析，辅助节能决策</li>
            <li>智能能耗优化，设备运行策略自动调整</li>
            <li>碳排放监测与管理，响应环保要求</li>
            <li>节能效果评估，持续改进节能方案</li>
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

const featureList = ref([
  {
    icon: '⚙️',
    title: '生产工艺管理',
    desc: '数字化监控酿造全过程，从原料处理到成品灌装，确保工艺标准化执行'
  },
  {
    icon: '🛡️',
    title: '安全管理',
    desc: '全方位安全监测体系，实时监控生产环境，预警安全隐患，保障人员与设备安全'
  },
  {
    icon: '📡',
    title: 'IOT物联技术',
    desc: '万物互联的智能感知网络，设备状态实时采集，数据驱动的智能决策'
  },
  {
    icon: '⚡',
    title: '能耗管理',
    desc: '智能能耗监测与分析，优化能源使用效率，降低生产成本，实现绿色制造'
  },
  {
    icon: '📊',
    title: '数据报表',
    desc: '自动生成各类生产报表，可视化展示生产数据，辅助管理决策'
  },
  {
    icon: '🔍',
    title: '质量追溯',
    desc: '全程质量追溯系统，从原料到成品每一步可查，保障产品质量'
  }
])

</script>

<style scoped>
/* 保留所有原有样式，并添加 scoped 作用域 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f7fa;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #D2691E 0%, #CD853F 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Hero 区域 */
.hero {
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 5%;
  position: relative;
  overflow: hidden;
}

@keyframes float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-200px); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
}

.hero h1 {
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.3rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.hero-btn {
  display: inline-block;
  padding: 1rem 3rem;
  background: linear-gradient(135deg, #D2691E 0%, #CD853F 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(210, 105, 30, 0.4);
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(210, 105, 30, 0.6);
}

/* 核心功能 - 关键修改：固定一行3列 */
.features {
  padding: 5rem 5%;
  background: #fff;
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.5rem;
  color: #8B4513;
  margin-bottom: 1rem;
}

.section-title p {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

/* 核心修改：grid-template-columns: repeat(3, 1fr) 固定3列 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 固定一行3列 */
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.feature-card {
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e8ecf4;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  border-color: #D2691E;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #D2691E 0%, #CD853F 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #fff;
}

.feature-card h3 {
  font-size: 1.4rem;
  color: #8B4513;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  font-size: 1rem;
  line-height: 1.7;
}

/* 详细功能板块 */
.feature-detail {
  padding: 5rem 5%;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf4 100%);
}

.detail-section {
  max-width: 1400px;
  margin: 0 auto 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.detail-section:nth-child(even) {
  direction: rtl;
}

.detail-section:nth-child(even) .detail-content {
  direction: ltr;
}

.detail-image {
  height: 400px;
  background: linear-gradient(135deg, #D2691E 0%, #CD853F 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: #fff;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.detail-content h3 {
  font-size: 2rem;
  color: #8B4513;
  margin-bottom: 1.5rem;
}

.detail-content p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.detail-list {
  list-style: none;
}

.detail-list li {
  padding: 0.8rem 0;
  padding-left: 2rem;
  position: relative;
  color: #555;
}

.detail-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #D2691E;
  font-weight: bold;
}

/* 数据统计 */
.stats {
  padding: 4rem 5%;
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: 2rem;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.8);
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: #fff;
  padding: 4rem 5% 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #D2691E;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #fff;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #666;
}

/* 响应式 - 优化小屏显示 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .nav-links {
    display: none;
  }

  /* 小屏幕下核心功能改为1列 */
  .features-grid {
    grid-template-columns: 1fr;
  }

  .detail-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .detail-section:nth-child(even) {
    direction: ltr;
  }

  .detail-image {
    height: 250px;
  }
}

/* 适配平板：768-1024px 显示2列 */
@media (min-width: 769px) and (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>
