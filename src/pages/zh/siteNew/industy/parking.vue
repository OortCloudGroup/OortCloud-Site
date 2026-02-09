<template>
  <div class="smart-parking">
    <!-- Hero区域 -->
    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">SMART PARKING SOLUTION</span>
        <h1>智慧停车<br />重塑城市出行体验</h1>
        <p>以AI和物联网技术为核心，打造无人值守、无感支付、智能引导的现代停车系统，让停车更便捷、更高效</p>
      </div>
    </section>

    <!-- 功能特性 -->
    <section id="features" class="features-section">
      <div class="section-header">
        <span class="section-tag">Core Features</span>
        <h2>核心功能</h2>
        <p>全方位智慧停车解决方案，满足各类停车场景需求</p>
      </div>

      <div class="bento-grid">
        <div class="bento-card">
          <div class="bento-icon">
            🚗
          </div>
          <h3>智能车牌识别</h3>
          <p>采用先进的AI图像识别技术，支持99.9%识别准确率，实现车辆快速进出，无需人工干预，大幅提升通行效率</p>
        </div>

        <div class="bento-card">
          <div class="bento-icon">
            💳
          </div>
          <h3>无感支付</h3>
          <p>支持微信、支付宝、ETC等多种支付方式，自动扣费，无需排队，体验流畅</p>
        </div>

        <div class="bento-card">
          <div class="bento-icon">
            🗺️
          </div>
          <h3>车位引导</h3>
          <p>实时显示剩余车位，智能推荐最佳停车位置，减少寻位时间</p>
        </div>

        <div class="bento-card">
          <div class="bento-icon">
            📊
          </div>
          <h3>数据分析</h3>
          <p>多维度数据报表，车流分析、收入统计、运营决策支持</p>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section id="scenarios" class="scenarios-section">
      <div class="section-header">
        <span class="section-tag">Application Scenarios</span>
        <h2>应用场景</h2>
        <p>适配各类停车场景，提供定制化解决方案</p>
      </div>

      <div class="scenarios-grid">
        <div v-for="(item, index) in scenariosList" :key="index" class="scenario-card">
          <div class="scenario-number">
            {{ (index + 1).toString().padStart(2, '0') }}
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="advantages" class="advantages-section">
      <div class="section-header">
        <span class="section-tag">Core Advantages</span>
        <h2>核心优势</h2>
        <p>为什么选择我们的智慧停车解决方案</p>
      </div>

      <div class="advantages-container">
        <div v-for="(item, index) in advantagesList" :key="index" class="advantage-item">
          <div class="advantage-number">
            {{ (index + 1).toString().padStart(2, '0') }}
          </div>
          <div class="advantage-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
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
// 应用场景列表
const scenariosList = ref([
  { title: '商业综合体', desc: '购物中心、写字楼等高流量场景，支持会员管理、优惠活动' },
  { title: '医院停车场', desc: '优化就医车辆进出，支持预约停车、急诊绿色通道' },
  { title: '住宅小区', desc: '业主管理、访客预约、车位租赁，提升居住体验' },
  { title: '路侧停车', desc: '路边车位智能管理，移动支付，提高车位利用率' },
  { title: '交通枢纽', desc: '机场、火车站、客运站，大容量车辆调度管理' },
  { title: '工业园区', desc: '货运车辆管理、物流调度、企业专属车位' },
  { title: '景区停车场', desc: '游客车辆管理、预约停车、客流分析' },
  { title: '政务中心', desc: '公务车辆管理、访客登记、便民服务' }
])

// 核心优势列表
const advantagesList = ref([
  {
    title: '快速部署',
    desc: '模块化设计，灵活配置，支持云部署和本地部署，快速上线使用，无需复杂的系统改造'
  },
  {
    title: '高可靠性',
    desc: '多重备份机制，故障自动切换，确保系统7×24小时稳定运行，数据安全可靠'
  },
  {
    title: '智能运维',
    desc: 'AI预测性维护，设备状态实时监控，故障提前预警，大幅降低运维成本'
  },
  {
    title: '开放生态',
    desc: '标准化API接口，易于集成第三方系统，支持与智慧城市平台无缝对接'
  },
  {
    title: '专业服务',
    desc: '资深技术团队，全程实施服务，完善的售后支持，7×24小时技术响应'
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: #1f2937;
  background: #f8fafc;
  overflow-x: hidden;
}

/* Hero区域 - 全屏视频风格 */
.hero {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.hero-content {
  text-align: center;
  color: #1f2937;
  z-index: 1;
  max-width: 900px;
  padding: 0 2rem;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  color: #f59e0b;
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(245, 158, 11, 0.3);
  letter-spacing: 1px;
}

.hero h1 {
  font-size: 4.0rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.3rem;
  color: rgba(31, 41, 55, 0.7);
  margin-bottom: 1rem;
  line-height: 1.8;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.cta-primary {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  cursor: pointer;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(245, 158, 11, 0.3);
}

.cta-secondary {
  background: transparent;
  color: #1f2937;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  border: 2px solid rgba(31, 41, 55, 0.3);
  cursor: pointer;
}

.cta-secondary:hover {
  border-color: #1f2937;
  background: rgba(31, 41, 55, 0.05);
}

/* 统计数据 - 横向滚动条 */
.stats-bar {
  background: #ffffff;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  overflow: hidden;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 8rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.stat-box {
  text-align: center;
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  color: #f59e0b;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 功能特性 - Bento网格布局 */
.features-section {
  padding: 6rem 0 0 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-tag {
  display: inline-block;
  color: #f59e0b;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-header h2 {
  font-size: 3rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.bento-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.bento-card:hover {
  transform: translateY(-5px);
  border-color: rgba(245, 158, 11, 0.3);
  box-shadow: 0 30px 60px rgba(0,0,0,0.1);
}

.bento-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.bento-card h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.bento-card p {
  color: #64748b;
  line-height: 1.7;
  font-size: 1rem;
}

/* 应用场景 - 卡片滑动 */
.scenarios-section {
  padding-top: 6rem;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.scenario-card {
  background: rgba(255,255,255,0.8);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.scenario-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.scenario-card:hover::before {
  opacity: 1;
}

.scenario-card:hover {
  transform: translateY(-10px);
  border-color: rgba(245, 158, 11, 0.3);
}

.scenario-number {
  font-size: 4rem;
  font-weight: 800;
  color: rgba(245, 158, 11, 0.4);
  line-height: 1;
  margin-bottom: 1rem;
}

.scenario-card h3 {
  font-size: 1.3rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.scenario-card p {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
  position: relative;
  z-index: 1;
}

/* 优势 - 列表式 */
.advantages-section {
  padding: 8rem 4rem;
  background: #ffffff;
}

.advantages-container {
  max-width: 1200px;
  margin: 0 auto;
}

.advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 3rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.advantage-item:last-child {
  border-bottom: none;
}

.advantage-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
}

.advantage-content h3 {
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.advantage-content p {
  color: #64748b;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* 页脚 */
.footer {
  background: #f8fafc;
  padding: 5rem 4rem;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 4rem;
}

.footer-brand h3 {
  color: #1f2937;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.footer-brand p {
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.footer-links h4 {
  color: #1f2937;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #f59e0b;
}

.footer-bottom {
  max-width: 1400px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(0,0,0,0.05);
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .hero h1 {
    font-size: 3.5rem;
  }

  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenarios-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .top-nav, .nav-menu {
    padding: 1rem 2rem;
  }

  .nav-menu {
    display: none;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .hero-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .stats-container {
    gap: 3rem;
    flex-wrap: wrap;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .scenarios-grid {
    grid-template-columns: 1fr;
  }

  .advantage-item {
    flex-direction: column;
    text-align: center;
  }

  .advantage-number {
    margin: 0 auto;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .features-section,
  .scenarios-section,
  .advantages-section,
  .footer {
    padding: 5rem 2rem;
  }
}
</style>
