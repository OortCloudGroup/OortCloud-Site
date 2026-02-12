<template>
  <div class="warehouse-page">
    <!-- Hero区域 -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-info">
          <span class="badge">🏭 智能无人值守仓库</span>
          <h1>智慧仓储 无人值守</h1>
          <p>基于物联网、AI、自动化技术的智能仓储解决方案，实现仓库全流程无人化操作，大幅提升运营效率，降低人力成本。</p>
        </div>
      </div>
    </section>

    <!-- 核心特性 -->
    <section id="features" class="features">
      <div class="section-head">
        <h2>核心特性</h2>
        <p>全方位智能化解决方案，打造真正无人值守的智慧仓库</p>
      </div>
      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-item">
          <div class="feature-icon-box">
            {{ feature.icon }}
          </div>
          <div class="feature-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
            <div class="feature-tags">
              <span v-for="tag in feature.tags" :key="tag" class="feature-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 系统架构 -->
    <section id="architecture" class="architecture">
      <div class="section-head">
        <h2>系统架构</h2>
        <p>分层架构设计，各层独立可扩展，确保系统稳定可靠</p>
      </div>
      <div class="arch-container">
        <div class="arch-diagram">
          <div class="arch-layers">
            <div v-for="(layer, index) in archLayers" :key="index" class="arch-layer">
              <div class="arch-layer-label">
                {{ layer.label }}
              </div>
              <div class="arch-layer-box">
                <h4>{{ layer.title }}</h4>
                <div class="arch-items">
                  <span v-for="item in layer.items" :key="item" class="arch-item">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section id="scenarios" class="scenarios">
      <div class="section-head">
        <h2>应用场景</h2>
        <p>适配不同行业需求，提供定制化仓储解决方案</p>
      </div>
      <div class="scenarios-wrapper">
        <div class="scenario-tabs">
          <div
            v-for="(tab, index) in scenarioTabs"
            :key="index"
            class="scenario-tab"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tab }}
          </div>
        </div>
        <div class="scenario-grid">
          <div v-for="(scenario, index) in currentScenarios" :key="index" class="scenario-card">
            <div class="scenario-icon">
              {{ scenario.icon }}
            </div>
            <h4>{{ scenario.title }}</h4>
            <p>{{ scenario.desc }}</p>
            <ul class="scenario-features">
              <li v-for="(feature, idx) in scenario.features" :key="idx">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术优势 -->
    <section id="tech" class="tech-advantages">
      <div class="section-head">
        <h2 style="color: white;">
          技术优势
        </h2>
        <p style="color: rgba(255,255,255,0.9);">
          核心技术优势，打造行业领先的无人值守仓库系统
        </p>
      </div>
      <div class="tech-wrapper">
        <div class="tech-grid">
          <div v-for="(tech, index) in techAdvantages" :key="index" class="tech-card">
            <div class="tech-icon">
              {{ tech.icon }}
            </div>
            <h4>{{ tech.title }}</h4>
            <p>{{ tech.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 流程展示 -->
    <section class="process">
      <div class="section-head">
        <h2>工作流程</h2>
        <p>标准化的无人值守仓库作业流程，高效可靠</p>
      </div>
      <div class="process-wrapper">
        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step">
            <div class="step-circle">
              {{ step.icon }}
            </div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
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
// 核心特性数据
const features = ref([
  {
    icon: '🤖',
    title: '智能机器人',
    desc: 'AGV/AMR机器人自动搬运货物，智能路径规划，避障导航，实现货物自动上下架和库区间调拨。',
    tags: ['自动导航', '智能避障', '多机协作']
  },
  {
    icon: '📦',
    title: '智能货架',
    desc: '智能货架系统自动识别货物信息，实时监控库存状态，支持自动补货提醒和货物定位追踪。',
    tags: ['货物识别', '实时监控', '自动补货']
  },
  {
    icon: '🎯',
    title: '自动分拣',
    desc: '基于AI视觉的自动分拣系统，快速识别货物类型，自动分配到对应出库口，提升分拣效率。',
    tags: ['AI识别', '高速分拣', '智能分配']
  },
  {
    icon: '📊',
    title: '数据分析',
    desc: '实时数据分析与预测，优化库存结构，预测需求变化，为采购和销售决策提供数据支持。',
    tags: ['实时分析', '需求预测', '决策支持']
  },
  {
    icon: '🔒',
    title: '安全监控',
    desc: '全方位视频监控，异常行为检测，智能门禁管理，确保仓库资产和人员安全。',
    tags: ['视频监控', '异常检测', '门禁管理']
  },
  {
    icon: '🌡️',
    title: '环境控制',
    desc: '实时监控温湿度、空气质量等环境参数，自动调节设备，确保存储环境符合要求。',
    tags: ['温湿度监控', '自动调节', '环境预警']
  }
])

// 系统架构数据
const archLayers = ref([
  {
    label: '应用层',
    title: '业务应用',
    items: ['仓储管理', '订单管理', '库存管理', '设备管理', '数据分析']
  },
  {
    label: '平台层',
    title: '核心平台',
    items: ['调度引擎', 'AI算法', '数据中台', '规则引擎', '消息队列']
  },
  {
    label: '设备层',
    title: '智能设备',
    items: ['AGV机器人', '智能货架', '分拣系统', '堆垛机', '传送带']
  },
  {
    label: '感知层',
    title: '感知设备',
    items: ['RFID读写器', '摄像头', '温湿度传感器', '红外传感器', '重量传感器']
  }
])

// 应用场景标签
const scenarioTabs = ref(['电商仓储', '制造业', '医药行业', '冷链物流'])
const activeTab = ref('电商仓储')

// 应用场景数据
const scenarioData = ref({
  电商仓储: [
    {
      icon: '🛒',
      title: '电商仓储',
      desc: '支持海量SKU管理，快速拣选发货，应对大促高峰，提升订单处理效率和客户满意度。',
      features: ['海量SKU管理', '快速拣选发货', '大促峰值应对', '订单智能分配', '自动打包贴单']
    },
    {
      icon: '🚚',
      title: '退货处理',
      desc: '自动化退货验收、分类、上架流程，减少人工干预，提升退货处理效率。',
      features: ['自动验收', '智能分类', '快速上架', '退款自动化', '数据分析优化']
    },
    {
      icon: '📦',
      title: '波次拣选',
      desc: '基于订单聚类算法的波次拣选策略，大幅提升拣选效率，降低行走距离。',
      features: ['智能波次生成', '最优路径规划', '批量拣选', '错单率<0.1%', '效率提升300%']
    }
  ],
  制造业: [
    {
      icon: '🏭',
      title: '原料仓储',
      desc: '智能化原料管理，精准配料，支持JIT生产模式，降低原料库存成本。',
      features: ['原料追溯', '精准配料', 'JIT配送', '库存预警', '批次管理']
    },
    {
      icon: '🔧',
      title: '备件管理',
      desc: '智能化备件仓储管理，快速响应生产线维修需求，减少停机时间。',
      features: ['快速定位', '自动补货', '生命周期管理', '故障预警', '智能盘点']
    },
    {
      icon: '📦',
      title: '成品仓储',
      desc: '成品自动化入库、存储、出库，支持按订单发货，提升交付效率。',
      features: ['自动入库', '智能存储', '订单发货', '物流对接', '质量追溯']
    }
  ],
  医药行业: [
    {
      icon: '💊',
      title: '药品仓储',
      desc: '符合GMP标准的医药仓储管理，全程温湿度监控，批次追溯，效期管理。',
      features: ['GMP合规', '温湿度监控', '批次追溯', '效期预警', '电子监管码']
    },
    {
      icon: '🚑',
      title: '冷链管理',
      desc: '全程冷链监控，确保药品存储和运输环节温度符合要求，保障药品质量。',
      features: ['全程温控', '异常报警', '数据追溯', '合规报表', '智能调节']
    },
    {
      icon: '📋',
      title: '处方调配',
      desc: '自动化处方调配系统，精准高效，减少人为错误，提升药房运营效率。',
      features: ['精准调配', '错误率极低', '效率提升', '处方追溯', '合规管理']
    }
  ],
  冷链物流: [
    {
      icon: '❄️',
      title: '温控仓储',
      desc: '多温区智能仓储管理，精准控制不同区域温度，满足各类冷链商品存储需求。',
      features: ['多温区控制', '精准温控', '异常报警', '能耗优化', '远程监控']
    },
    {
      icon: '📦',
      title: '生鲜仓储',
      desc: '针对生鲜产品的特性，提供智能化仓储解决方案，延长保鲜期，降低损耗。',
      features: ['保鲜管理', '损耗控制', '批次先进先出', '智能盘点', '需求预测']
    },
    {
      icon: '🚛',
      title: '冷链配送',
      desc: '仓储与配送无缝对接，全程温度监控，确保冷链商品品质不受影响。',
      features: ['全程监控', '路径优化', '实时追踪', '交接确认', '异常处理']
    }
  ]
})

// 当前激活的场景数据
const currentScenarios = computed(() => scenarioData.value[activeTab.value])

// 技术优势数据
const techAdvantages = ref([
  {
    icon: '⚡',
    title: '超高效率',
    desc: '无人化操作大幅提升仓储效率，相比传统仓库效率提升300%以上。'
  },
  {
    icon: '🎯',
    title: '精准无误',
    desc: 'AI视觉识别和自动化操作，准确率达99.9%，几乎消除人为错误。'
  },
  {
    icon: '💰',
    title: '成本节约',
    desc: '减少人力成本80%以上，降低运营成本，提升企业盈利能力。'
  },
  {
    icon: '🔄',
    title: '7×24小时',
    desc: '全天候不间断运行，大幅提升仓库利用率，满足高时效业务需求。'
  },
  {
    icon: '📈',
    title: '数据驱动',
    desc: '全流程数据采集分析，持续优化运营策略，提升整体运营效率。'
  },
  {
    icon: '🔒',
    title: '安全可靠',
    desc: '多重安全防护机制，确保人员和货物安全，符合行业安全标准。'
  },
  {
    icon: '🧩',
    title: '灵活扩展',
    desc: '模块化设计，支持按需扩展，满足不同规模仓库的个性化需求。'
  },
  {
    icon: '🌐',
    title: '互联互通',
    desc: '无缝对接ERP、WMS、TMS等系统，实现全链路数字化管理。'
  }
])

// 流程步骤
const processSteps = ref([
  {
    icon: '1️⃣',
    title: '入库管理',
    desc: '自动扫码、称重、体积测量，智能分配库位，自动上架存储。'
  },
  {
    icon: '2️⃣',
    title: '库存管理',
    desc: '实时监控库存状态，智能盘点，效期管理，自动补货提醒。'
  },
  {
    icon: '3️⃣',
    title: '订单处理',
    desc: '自动接收订单，智能波次生成，最优路径规划，精准拣选。'
  },
  {
    icon: '4️⃣',
    title: '分拣打包',
    desc: '自动化分拣，智能打包，自动贴单，提升发货效率。'
  },
  {
    icon: '5️⃣',
    title: '出库配送',
    desc: '自动装车，物流对接，实时追踪，确保货物准时送达。'
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
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -5%;
  width: 800px;
  height: 800px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -10%;
  left: 0;
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 50%;
}

.hero-container {
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

.hero-info {
  color: white;
  text-align: center;
  max-width: 800px;
}

.hero-info .badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  padding: 12px 30px;
  border-radius: 32px;
  font-size: 15px;
  margin-bottom: 35px;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.hero-info h1 {
  font-size: 60px;
  margin-bottom: 30px;
  line-height: 1.15;
  font-weight: 800;
}

.hero-info p {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 45px;
  line-height: 1.9;
}

.hero-btns {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.btn-light {
  background: white;
  color: #0c3483;
  padding: 18px 45px;
  border-radius: 35px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-light:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
}

.btn-outline {
  background: transparent;
  color: white;
  padding: 18px 45px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 35px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: background 0.3s, transform 0.3s;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

.hero-demo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.warehouse-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(25px);
  border-radius: 30px;
  padding: 50px;
  width: 100%;
  max-width: 480px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.panel-title {
  text-align: center;
  margin-bottom: 35px;
  color: white;
}

.panel-title h4 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
}

.panel-title span {
  font-size: 14px;
  opacity: 0.7;
}

.warehouse-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.stat-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 22px;
  text-align: center;
  color: white;
}

.stat-box .icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.stat-box .value {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
}

.stat-box .label {
  font-size: 13px;
  opacity: 0.7;
}

.warehouse-status {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 25px;
  color: white;
}

.warehouse-status h5 {
  font-size: 16px;
  margin-bottom: 18px;
  font-weight: 600;
}

.status-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.status-item:last-child {
  border-bottom: none;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 15px;
}

.status-dot.green {
  background: #00d26a;
}

.status-dot.blue {
  background: #0095ff;
}

.status-dot.orange {
  background: #ff9f0a;
}

.status-info {
  flex: 1;
}

.status-info .name {
  font-size: 15px;
  font-weight: 500;
}

.status-info .detail {
  font-size: 12px;
  opacity: 0.6;
}

.status-value {
  font-size: 14px;
  font-weight: 600;
}

/* 核心特性 */
.features {
  padding: 140px 20px;
  background: #fff;
}

.section-head {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 90px;
}

.section-head h2 {
  font-size: 50px;
  margin-bottom: 28px;
  color: #333;
  font-weight: 700;
}

.section-head p {
  font-size: 20px;
  color: #666;
  line-height: 1.8;
}

.features-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
}

.feature-item {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.feature-icon-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #0c3483 0%, #a2b6df 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
}

.feature-content p {
  color: #666;
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-tag {
  background: #e8f0fe;
  color: #0c3483;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

/* 系统架构 */
.architecture {
  padding: 140px 20px;
  background: #f8f9fc;
}

.arch-container {
  max-width: 1400px;
  margin: 0 auto;
}

.arch-diagram {
  background: #fff;
  border-radius: 30px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.arch-layers {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.arch-layer {
  display: flex;
  align-items: center;
  gap: 20px;
}

.arch-layer-label {
  width: 120px;
  font-size: 16px;
  font-weight: 600;
  color: #0c3483;
  text-align: right;
}

.arch-layer-box {
  flex: 1;
  background: linear-gradient(135deg, #0c3483 0%, #a2b6df 100%);
  border-radius: 15px;
  padding: 25px 35px;
  color: white;
}

.arch-layer-box h4 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
}

.arch-items {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.arch-item {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
}

/* 应用场景 */
.scenarios {
  padding: 140px 20px;
  background: #fff;
}

.scenarios-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.scenario-tabs {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 70px;
  flex-wrap: wrap;
}

.scenario-tab {
  padding: 15px 35px;
  border: 2px solid #e0e0e0;
  border-radius: 32px;
  background: #fff;
  color: #666;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.scenario-tab.active,
.scenario-tab:hover {
  background: linear-gradient(135deg, #0c3483 0%, #a2b6df 100%);
  color: white;
  border-color: transparent;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.scenario-card {
  background: #f8f9fc;
  border-radius: 28px;
  padding: 45px 35px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.scenario-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
}

.scenario-icon {
  font-size: 55px;
  margin-bottom: 25px;
}

.scenario-card h4 {
  font-size: 24px;
  margin-bottom: 18px;
  color: #333;
  font-weight: 700;
}

.scenario-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 25px;
}

.scenario-features {
  list-style: none;
}

.scenario-features li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 15px;
  color: #777;
}

.scenario-features li::before {
  content: '✓';
  width: 22px;
  height: 22px;
  background: #0c3483;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  margin-right: 12px;
  flex-shrink: 0;
}

/* 技术优势 */
.tech-advantages {
  padding: 140px 20px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
}

.tech-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.tech-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-icon {
  font-size: 50px;
  margin-bottom: 22px;
}

.tech-card h4 {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 700;
}

.tech-card p {
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.85;
}

/* 数据统计 */
.data-stats {
  padding: 140px 20px;
  background: #fff;
}

.data-container {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  text-align: center;
}

.data-stat h3 {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #0c3483 0%, #a2b6df 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.data-stat p {
  font-size: 18px;
  color: #666;
  font-weight: 500;
}

/* 流程展示 */
.process {
  padding: 140px 20px;
  background: #f8f9fc;
}

.process-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 8%;
  right: 8%;
  height: 4px;
  background: linear-gradient(135deg, #0c3483 0%, #a2b6df 100%);
}

.process-step {
  text-align: center;
  position: relative;
  z-index: 1;
  flex: 1;
}

.step-circle {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #0c3483 0%, #a2b6df 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 40px;
  color: white;
  box-shadow: 0 15px 40px rgba(12, 52, 131, 0.3);
}

.process-step h4 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
  font-weight: 700;
}

.process-step p {
  color: #666;
  font-size: 15px;
  line-height: 1.6;
}

/* CTA区域 */
.cta {
  padding: 140px 20px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  text-align: center;
}

.cta-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 52px;
  margin-bottom: 28px;
  color: white;
  font-weight: 700;
}

.cta p {
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 50px;
  line-height: 1.8;
}

.cta-form-box {
  display: flex;
  gap: 22px;
  max-width: 700px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cta-form-box input {
  flex: 1;
  min-width: 300px;
  padding: 24px 40px;
  border: none;
  border-radius: 42px;
  font-size: 18px;
  outline: none;
}

.cta-form-box button {
  background: white;
  color: #0c3483;
  padding: 24px 50px;
  border: none;
  border-radius: 42px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s;
}

.cta-form-box button:hover {
  transform: translateY(-3px);
}

/* 页脚 */
.footer {
  background: #0a0a1a;
  color: white;
  padding: 90px 20px 60px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 80px;
  margin-bottom: 70px;
}

.footer-brand h3 {
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 700;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.9;
  margin-bottom: 30px;
  font-size: 16px;
}

.footer-brand .social-links {
  display: flex;
  gap: 20px;
}

.footer-brand .social-links a {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
  font-size: 22px;
}

.footer-brand .social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-col h4 {
  font-size: 22px;
  margin-bottom: 35px;
  font-weight: 600;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 20px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 16px;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 45px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .scenario-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-layout {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-btns {
    justify-content: center;
  }

  .process-steps::before {
    display: none;
  }

  .process-steps {
    flex-direction: column;
    gap: 40px;
  }

  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
  }

  .hero-info h1 {
    font-size: 42px;
  }

  .features-grid,
  .scenario-grid,
  .tech-grid,
  .stats-layout {
    grid-template-columns: 1fr;
  }

  .footer-container {
    grid-template-columns: 1fr;
  }

  .arch-layer {
    flex-direction: column;
    text-align: center;
  }

  .arch-layer-label {
    text-align: center;
  }
}
</style>
