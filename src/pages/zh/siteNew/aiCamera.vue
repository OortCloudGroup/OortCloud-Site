<template>
  <div class="ai-camera-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>新一代<span>AI智能摄像机</span><br />重新定义视觉感知</h1>
          <p>融合深度学习算法与高清成像技术，实现精准目标识别、智能行为分析与实时预警。为安防监控、智慧城市、工业检测等领域提供强大视觉支撑。</p>
          <div class="hero-badges">
            <span class="badge">4K超清画质</span>
            <span class="badge">实时AI识别</span>
            <span class="badge">边缘计算</span>
            <span class="badge">低功耗设计</span>
          </div>
        </div>
        <div class="hero-visual">
          <div class="camera-display">
            <div class="camera-screen">
              <div class="detection-box detection-box-1" />
              <div class="detection-box detection-box-2" />
              <div class="camera-icon">
                📷
              </div>
            </div>
            <div class="camera-info">
              <div class="info-item">
                <div class="info-value">
                  99.8%
                </div>
                <div class="info-label">
                  识别准确率
                </div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  &lt;50ms
                </div>
                <div class="info-label">
                  响应延迟
                </div>
              </div>
              <div class="info-item">
                <div class="info-value">
                  4K
                </div>
                <div class="info-label">
                  视频分辨率
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心特性 -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="section-header">
          <h2>核心特性</h2>
          <p>先进AI算法赋能，开启智能视觉新时代</p>
        </div>
        <div class="feature-grid">
          <div v-for="(feature, index) in featuresList" :key="index" class="feature-item">
            <div class="feature-icon-wrapper">
              <span class="feature-icon">{{ feature.icon }}</span>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品系列 -->
    <section id="products" class="products">
      <div class="products-container">
        <div class="section-header">
          <h2>产品系列</h2>
          <p>满足不同场景需求的多样化产品选择</p>
        </div>
        <div class="product-list">
          <div v-for="(product, index) in filteredProducts" :key="index" class="product-card">
            <div class="product-image">
              {{ product.icon }}
            </div>
            <div class="product-info">
              <span class="product-badge">{{ product.badge }}</span>
              <h3>{{ product.title }}</h3>
              <p>{{ product.desc }}</p>
              <div class="product-specs">
                <div v-for="(spec, sIndex) in product.specs" :key="sIndex" class="spec-item">
                  <span>{{ spec.value }}</span> {{ spec.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用领域 -->
    <section id="applications" class="applications">
      <div class="applications-container">
        <div class="section-header">
          <h2>应用领域</h2>
          <p>广泛适用于各行各业，提供智能视觉解决方案</p>
        </div>
        <div class="application-grid">
          <div v-for="(app, index) in applicationsList" :key="index" class="application-card">
            <div class="app-icon">
              {{ app.icon }}
            </div>
            <div class="app-title">
              {{ app.title }}
            </div>
            <div class="app-desc">
              {{ app.desc }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术参数 -->
    <section id="specs" class="specs">
      <div class="specs-container">
        <div class="specs-header">
          <h2>技术参数</h2>
          <p>专业级硬件配置，确保卓越性能表现</p>
        </div>
        <div class="specs-table">
          <div v-for="(spec, index) in specsList" :key="index" class="specs-row">
            <div class="spec-label">
              {{ spec.label }}
            </div>
            <div class="spec-value">
              <span>{{ spec.highlight }}</span> {{ spec.value }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
definePageMeta({
  layout: 'site-new'
})
// 产品标签激活状态
const activeTab = ref('all')

// 核心特性数据
const featuresList = ref([
  {
    icon: '🎯',
    title: '精准目标识别',
    desc: '基于深度神经网络，支持人脸、车辆、物品等多类别目标识别，准确率高达99.8%，适应复杂环境场景。'
  },
  {
    icon: '📊',
    title: '智能行为分析',
    desc: '实时分析人员行为轨迹，识别异常动作如徘徊、奔跑、聚集等，主动预警潜在安全风险。'
  },
  {
    icon: '⚡',
    title: '边缘AI计算',
    desc: '内置高性能AI芯片，支持本地化实时推理，无需云端依赖，降低网络带宽需求，提升响应速度。'
  },
  {
    icon: '🌙',
    title: '全彩夜视',
    desc: '采用星光级传感器与红外补光技术，即使在极低光照环境下也能呈现清晰彩色画面。'
  },
  {
    icon: '🔒',
    title: '智能追踪',
    desc: '支持目标自动追踪功能，360°云台旋转，确保重要目标始终处于监控视野中心。'
  },
  {
    icon: '☁️',
    title: '云端管理',
    desc: '支持云平台统一管理，多设备远程配置与监控，数据安全加密存储，随时随地掌控现场。'
  }
])

// 产品列表数据
const productsList = ref([
  {
    icon: '📹',
    badge: '热销',
    title: 'AI-Pro 4K枪机',
    desc: '专业级4K超清画质，内置AI芯片，支持人脸识别与行为分析，适用于城市安防、交通监控。',
    type: 'gun',
    specs: [
      { value: '400万', label: '像素' },
      { value: '100米', label: '红外距离' },
      { value: 'IP67', label: '防护等级' }
    ]
  },
  {
    icon: '🎥',
    badge: '新品',
    title: 'AI-Speed 智能球机',
    desc: '360°全景监控，支持智能跟踪与自动巡航，适合广场、商场等开阔场所的大范围监控。',
    type: 'ball',
    specs: [
      { value: '30倍', label: '光学变焦' },
      { value: '360°', label: '水平旋转' },
      { value: 'IP66', label: '防护等级' }
    ]
  },
  {
    icon: '📷',
    badge: '推荐',
    title: 'AI-Mini 半球机',
    desc: '紧凑设计，美观大方，支持多种安装方式，适用于室内办公、零售门店等环境。',
    type: 'dome',
    specs: [
      { value: '200万', label: '像素' },
      { value: '广角', label: '镜头' },
      { value: '双向语音', label: '对讲' }
    ]
  },
  {
    icon: '🔦',
    badge: '旗舰',
    title: 'AI-Ultra 超清球机',
    desc: '800万像素超高清，AI算法全面升级，支持多目标并发识别与智能分析。',
    type: 'ball',
    specs: [
      { value: '800万', label: '像素' },
      { value: '40倍', label: '光学变焦' },
      { value: '智能降噪', label: '技术' }
    ]
  },
  {
    icon: '📡',
    badge: '专用',
    title: 'AI-Traffic 交通球机',
    desc: '专为交通场景优化，支持车牌识别、违章检测、车流统计，助力智慧交通建设。',
    type: 'ball',
    specs: [
      { value: '车牌识别', label: '准确率99%' },
      { value: '多车道', label: '覆盖' },
      { value: 'LED补光', label: '功能' }
    ]
  },
  {
    icon: '🏠',
    badge: '家用',
    title: 'AI-Home 家用摄像机',
    desc: '智能家居首选，支持移动侦测、双向对讲、哭声检测，守护家庭安全。',
    type: 'dome',
    specs: [
      { value: '1080P', label: '高清' },
      { value: '移动侦测', label: '报警' },
      { value: '云存储', label: '支持' }
    ]
  }
])

// 过滤产品列表
const filteredProducts = computed(() => {
  if (activeTab.value === 'all') {
    return productsList.value
  }
  return productsList.value.filter(product => product.type === activeTab.value)
})

// 应用领域数据
const applicationsList = ref([
  { icon: '🏢', title: '智慧城市', desc: '城市安防、交通管理、公共设施监控' },
  { icon: '🏭', title: '工业安全', desc: '工厂安全、设备监测、生产管理' },
  { icon: '🏪', title: '商业零售', desc: '门店管理、客流分析、防盗预警' },
  { icon: '🏫', title: '智慧校园', desc: '校园安全、考勤管理、行为分析' },
  { icon: '🏥', title: '医疗健康', desc: '医院安防、病房监护、疫情防控' },
  { icon: '🚗', title: '智慧交通', desc: '道路监控、车牌识别、违章检测' },
  { icon: '🌳', title: '智慧园区', desc: '园区安防、访客管理、设备巡检' },
  { icon: '🏠', title: '智能家居', desc: '家庭安防、老人看护、宠物监控' }
])

// 技术参数数据
const specsList = ref([
  { label: '图像传感器', highlight: '1/1.8英寸', value: 'CMOS 星光级传感器' },
  { label: '有效像素', highlight: '800万', value: '(3840×2160)' },
  { label: '视频压缩', highlight: 'H.265+', value: '/ H.264 / MJPEG' },
  { label: '帧率', highlight: '25/30', value: 'fps (全分辨率)' },
  { label: '镜头', highlight: '2.8-12mm', value: '自动光圈电动变焦' },
  { label: '红外距离', highlight: '100米', value: '智能红外补光' },
  { label: '最低照度', highlight: '0.0005Lux', value: '(星光模式)' },
  { label: 'AI处理器', highlight: '内置NPU', value: '4 TOPS 算力' },
  { label: '防护等级', highlight: 'IP67', value: '/ IK10 防暴' },
  { label: '工作温度', highlight: '-40℃ ~ +70℃', value: '' },
  { label: '网络接口', highlight: 'RJ45', value: '10/100/1000M 自适应' },
  { label: '存储接口', highlight: 'SD卡', value: '最大支持256GB' }
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
  background-color: #f8fafc;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 0 40px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.logo-text {
  font-size: 22px;
  font-weight: bold;
  color: #2d3436;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 45px;
}

.nav-menu a {
  color: #636e72;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-menu a:hover {
  color: #00b894;
}

.nav-menu a.active {
  color: #00b894;
}

.nav-cta {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 184, 148, 0.35);
}

/* Hero Section */
.hero {
  padding: 160px 40px 100px;
  background: linear-gradient(180deg, #e8f8f5 0%, #f8fafc 100%);
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-content h1 {
  font-size: 52px;
  color: #2d3436;
  margin-bottom: 25px;
  font-weight: 800;
  line-height: 1.2;
}

.hero-content h1 span {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content p {
  font-size: 18px;
  color: #636e72;
  margin-bottom: 35px;
  line-height: 1.8;
  max-width: 520px;
}

.hero-badges {
  display: flex;
  gap: 15px;
  margin-bottom: 35px;
  flex-wrap: wrap;
}

.badge {
  background: rgba(0, 184, 148, 0.1);
  color: #00b894;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.hero-buttons {
  display: flex;
  gap: 18px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  cursor: pointer;
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 184, 148, 0.35);
}

.hero-btn-secondary {
  background: white;
  color: #2d3436;
  padding: 16px 40px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #dfe6e9;
  transition: all 0.3s;
  cursor: pointer;
}

.hero-btn-secondary:hover {
  border-color: #00b894;
  color: #00b894;
}

.hero-visual {
  position: relative;
}

.camera-display {
  background: white;
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
}

.camera-display::before {
  content: '';
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: linear-gradient(135deg, rgba(0, 184, 148, 0.2) 0%, rgba(0, 206, 201, 0.2) 100%);
  border-radius: 30px;
  z-index: -1;
}

.camera-screen {
  background: linear-gradient(135deg, #2d3436 0%, #636e72 100%);
  border-radius: 16px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.camera-screen::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 2px solid rgba(0, 184, 148, 0.3);
  border-radius: 8px;
}

.detection-box {
  position: absolute;
  border: 3px solid #00b894;
  background: rgba(0, 184, 148, 0.1);
  border-radius: 4px;
  animation: scan 3s infinite;
}

.detection-box-1 {
  top: 30%;
  left: 20%;
  width: 120px;
  height: 100px;
}

.detection-box-2 {
  top: 50%;
  right: 15%;
  width: 90px;
  height: 120px;
  animation-delay: 1s;
}

@keyframes scan {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.camera-icon {
  font-size: 80px;
  opacity: 0.3;
}

.camera-info {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #dfe6e9;
}

.info-item {
  text-align: center;
}

.info-value {
  font-size: 24px;
  font-weight: 700;
  color: #00b894;
  margin-bottom: 5px;
}

.info-label {
  font-size: 12px;
  color: #636e72;
}

/* 核心特性 */
.features {
  padding: 100px 40px;
  background: white;
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
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

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-item {
  background: #f8fafc;
  border-radius: 20px;
  padding: 40px 35px;
  transition: all 0.4s;
  border: 1px solid transparent;
}

.feature-item:hover {
  background: white;
  border-color: #00b894;
  box-shadow: 0 15px 40px rgba(0, 184, 148, 0.15);
  transform: translateY(-8px);
}

.feature-icon-wrapper {
  width: 65px;
  height: 65px;
  background: linear-gradient(135deg, rgba(0, 184, 148, 0.15) 0%, rgba(0, 206, 201, 0.15) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.feature-icon {
  font-size: 28px;
}

.feature-item h3 {
  font-size: 22px;
  color: #2d3436;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-item p {
  color: #636e72;
  font-size: 15px;
  line-height: 1.8;
}

/* 产品展示 */
.products {
  padding: 100px 40px;
  background: #f8fafc;
}

.products-container {
  max-width: 1400px;
  margin: 0 auto;
}

.product-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.product-tab {
  background: white;
  color: #636e72;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid #dfe6e9;
  transition: all 0.3s;
  cursor: pointer;
}

.product-tab.active,
.product-tab:hover {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  border-color: transparent;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s;
}

.product-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  transform: translateY(-10px);
}

.product-image {
  height: 220px;
  background: linear-gradient(135deg, #e8f8f5 0%, #d1f2eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
}

.product-info {
  padding: 30px;
}

.product-badge {
  background: rgba(0, 184, 148, 0.1);
  color: #00b894;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 12px;
}

.product-info h3 {
  font-size: 20px;
  color: #2d3436;
  margin-bottom: 12px;
  font-weight: 600;
}

.product-info p {
  color: #636e72;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.product-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 15px;
  border-top: 1px solid #dfe6e9;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #636e72;
}

.spec-item span {
  color: #00b894;
  font-weight: 600;
}

/* 应用领域 */
.applications {
  padding: 100px 40px;
  background: white;
}

.applications-container {
  max-width: 1400px;
  margin: 0 auto;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.application-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 35px 25px;
  text-align: center;
  transition: all 0.4s;
  border: 1px solid transparent;
}

.application-card:hover {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  transform: translateY(-10px);
}

.application-card:hover .app-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.application-card:hover .app-title {
  color: white;
}

.application-card:hover .app-desc {
  color: rgba(255, 255, 255, 0.9);
}

.app-icon {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 26px;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.app-title {
  font-size: 18px;
  color: #2d3436;
  margin-bottom: 10px;
  font-weight: 600;
  transition: color 0.3s;
}

.app-desc {
  color: #636e72;
  font-size: 13px;
  line-height: 1.6;
  transition: color 0.3s;
}

/* 技术参数 */
.specs {
  padding: 100px 40px;
  background: linear-gradient(135deg, #2d3436 0%, #636e72 100%);
}

.specs-container {
  max-width: 1200px;
  margin: 0 auto;
}

.specs-header {
  text-align: center;
  margin-bottom: 60px;
}

.specs-header h2 {
  font-size: 40px;
  color: white;
  margin-bottom: 18px;
  font-weight: 700;
}

.specs-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.specs-table {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.specs-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 22px 35px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.specs-row:last-child {
  border-bottom: none;
}

.specs-row:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

.spec-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
}

.spec-value {
  color: white;
  font-size: 15px;
  font-weight: 500;
}

.spec-value span {
  color: #00cec9;
}

/* CTA区域 */
.cta-section {
  padding: 120px 40px;
  text-align: center;
  background: linear-gradient(135deg, #e8f8f5 0%, #d1f2eb 100%);
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

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cta-btn-primary {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  padding: 18px 50px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 184, 148, 0.35);
}

.cta-btn-secondary {
  background: white;
  color: #2d3436;
  padding: 18px 50px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  border: 2px solid #dfe6e9;
  transition: all 0.3s;
  cursor: pointer;
}

.cta-btn-secondary:hover {
  border-color: #00b894;
  color: #00b894;
}

/* 页脚 */
.footer {
  background: #2d3436;
  padding: 60px 40px 30px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
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
  max-width: 320px;
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
  color: #00cec9;
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

  .hero-badges {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .application-grid {
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

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .product-tabs {
    flex-direction: column;
  }

  .product-list {
    grid-template-columns: 1fr;
  }

  .application-grid {
    grid-template-columns: 1fr;
  }

  .specs-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
