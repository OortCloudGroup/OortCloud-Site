<template>
  <div class="admin-management">
    <section class="hero">
      <div class="hero-content">
        <h1>综合行政</h1>
        <p>全方位行政管理解决方案，涵盖办公管理、资产管理、流程审批、文档管理等模块，助力企业提升行政效率，降低运营成本。</p>
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
          <div v-for="(module, index) in modules" :key="index" class="module-card">
            <div class="module-icon">
              {{ module.icon }}
            </div>
            <h3>{{ module.title }}</h3>
            <p>{{ module.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 行政流程 -->
      <section id="process" class="process">
        <h2 class="section-title">
          行政流程管理
        </h2>
        <div class="process-container">
          <div class="process-line" />
          <div class="process-steps">
            <div v-for="(step, index) in processSteps" :key="index" class="process-step">
              <div class="step-circle">
                {{ index + 1 }}
              </div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.desc }}</p>
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
          <div v-for="(feature, index) in features" :key="index" class="feature-item">
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <div class="feature-content">
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.desc }}</p>
              <ul class="feature-list">
                <li v-for="(item, i) in feature.list" :key="i">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 智能化功能 -->
      <section id="smart" class="smart">
        <h3>智能化功能</h3>
        <div class="smart-grid">
          <div v-for="(smart, index) in smartFeatures" :key="index" class="smart-item">
            <div class="smart-icon">
              {{ smart.icon }}
            </div>
            <div class="smart-name">
              {{ smart.name }}
            </div>
            <div class="smart-desc">
              {{ smart.desc }}
            </div>
          </div>
        </div>
      </section>

      <!-- 资产管理 -->
      <section id="assets" class="assets">
        <h2 class="section-title">
          资产管理
        </h2>
        <div class="asset-grid">
          <div v-for="(asset, index) in assets" :key="index" class="asset-card">
            <div class="asset-icon">
              {{ asset.icon }}
            </div>
            <h4>{{ asset.title }}</h4>
            <p>{{ asset.desc }}</p>
          </div>
        </div>
      </section>
    </div>
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

// 核心模块数据
const modules = ref([
  { icon: '📝', title: '公文管理', desc: '公文收发、审批流转、归档管理，实现公文全生命周期数字化管理。' },
  { icon: '📅', title: '会议管理', desc: '会议室预约、会议安排、会议纪要，提高会议效率，优化资源利用。' },
  { icon: '📋', title: '流程审批', desc: '自定义审批流程，移动端快速审批，提高审批效率，缩短业务周期。' },
  { icon: '📄', title: '文档管理', desc: '文档分类存储、版本控制、权限管理，实现文档安全共享与协作。' },
  { icon: '📞', title: '通讯录', desc: '企业通讯录管理，部门架构展示，快速查找同事联系方式。' },
  { icon: '📢', title: '公告通知', desc: '企业公告发布、通知推送，确保重要信息及时传达给全体员工。' },
  { icon: '🚗', title: '车辆管理', desc: '车辆信息管理、用车申请、维修保养，优化车辆资源配置。' },
  { icon: '📦', title: '物品管理', desc: '办公用品管理、领用申请、库存预警，降低采购成本。' }
])

// 行政流程数据
const processSteps = ref([
  { title: '发起申请', desc: '填写表单 · 提交申请' },
  { title: '流程审批', desc: '多级审批 · 快速流转' },
  { title: '执行办理', desc: '任务执行 · 进度跟踪' },
  { title: '结果归档', desc: '完成归档 · 数据统计' }
])

// 功能详情数据
const features = ref([
  {
    icon: '🏢',
    title: '办公管理',
    desc: '全面的办公管理功能，提升行政工作效率，降低管理成本。',
    list: ['会议室预约管理', '办公位资源管理', '访客登记系统', '门禁权限管理']
  },
  {
    icon: '📊',
    title: '数据统计',
    desc: '多维度数据统计分析，为管理决策提供数据支持。',
    list: ['流程效率分析', '资源使用统计', '费用支出分析', '工作绩效评估']
  },
  {
    icon: '🔔',
    title: '消息提醒',
    desc: '智能消息推送系统，确保重要信息及时送达。',
    list: ['待办事项提醒', '会议通知推送', '公告消息通知', '流程进度提醒']
  },
  {
    icon: '🔒',
    title: '权限管理',
    desc: '细粒度权限控制，保障数据安全，规范操作流程。',
    list: ['角色权限配置', '数据访问控制', '操作日志记录', '安全审计追踪']
  }
])

// 智能化功能数据
const smartFeatures = ref([
  { icon: '🤖', name: '智能审批', desc: 'AI辅助审批决策' },
  { icon: '🔍', name: '智能检索', desc: '快速查找文档信息' },
  { icon: '📊', name: '智能分析', desc: '自动生成分析报告' },
  { icon: '💡', name: '智能推荐', desc: '个性化功能推荐' }
])

// 资产管理数据
const assets = ref([
  {
    icon: '💻',
    title: '固定资产',
    desc: '企业固定资产管理，包括设备采购、使用、维护、报废全生命周期管理，确保资产合理利用。'
  },
  {
    icon: '🏠',
    title: '房产管理',
    desc: '办公场所管理，包括房产信息、租赁合同、空间规划、费用分摊，优化办公资源配置。'
  },
  {
    icon: '📦',
    title: '库存管理',
    desc: '办公用品库存管理，包括入库、出库、盘点、预警，确保物资供应充足，降低库存成本。'
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
  background-color: #f0f4f8;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
  color: #4facfe;
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
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  border-radius: 3px;
}

.module-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.module-card {
  background: white;
  padding: 45px 25px;
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
  height: 4px;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
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
  width: 85px;
  height: 85px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
  font-size: 38px;
  color: white;
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
}

.module-card h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #333;
  font-weight: 700;
}

.module-card p {
  color: #666;
  font-size: 15px;
  line-height: 1.7;
}

/* 行政流程 */
.process {
  margin-bottom: 120px;
}

.process-container {
  position: relative;
  padding: 60px 0;
}

.process-line {
  position: absolute;
  top: 50%;
  left: 100px;
  right: 100px;
  height: 4px;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  z-index: 0;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.process-step {
  text-align: center;
  flex: 1;
}

.step-circle {
  width: 90px;
  height: 90px;
  background: white;
  border: 5px solid #4facfe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
  font-size: 36px;
  font-weight: bold;
  color: #4facfe;
  box-shadow: 0 5px 20px rgba(79, 172, 254, 0.2);
  transition: all 0.3s;
}

.process-step:hover .step-circle {
  transform: scale(1.1);
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}

.process-step h4 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

.process-step p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
  color: #4facfe;
  font-weight: bold;
  font-size: 20px;
}

/* 智能化功能 */
.smart {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 90px 50px;
  border-radius: 25px;
  margin-bottom: 120px;
}

.smart h3 {
  font-size: 38px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.smart-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
}

.smart-item {
  background: rgba(255, 255, 255, 0.95);
  padding: 45px 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s;
}

.smart-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.smart-icon {
  font-size: 55px;
  margin-bottom: 20px;
}

.smart-name {
  font-size: 20px;
  font-weight: 700;
  color: #4facfe;
  margin-bottom: 10px;
}

.smart-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 资产管理 */
.assets {
  margin-bottom: 120px;
}

.asset-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.asset-card {
  background: white;
  padding: 50px 35px;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s;
  border-left: 5px solid #4facfe;
}

.asset-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.asset-icon {
  width: 75px;
  height: 75px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  font-size: 35px;
  color: white;
}

.asset-card h4 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #333;
  font-weight: 700;
}

.asset-card p {
  color: #666;
  font-size: 15px;
  line-height: 1.7;
}

/* 数据统计 */
.stats {
  background: white;
  padding: 90px 50px;
  text-align: center;
  margin-bottom: 120px;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}

.stat-item {
  position: relative;
}

.stat-number {
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 18px;
  color: #666;
  font-weight: 600;
}

/* 适用规模 */
.scales {
  background: white;
  padding: 80px 50px;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  margin-bottom: 120px;
}

.scales h3 {
  font-size: 36px;
  margin-bottom: 50px;
  text-align: center;
  color: #333;
  font-weight: 700;
}

.scale-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
}

.scale-item {
  text-align: center;
  padding: 40px 25px;
  border-radius: 18px;
  transition: all 0.3s;
  background: #f8f9fe;
}

.scale-item:hover {
  background: linear-gradient(135deg, #f0f9ff, #fff0f5);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.scale-icon {
  font-size: 50px;
  margin-bottom: 18px;
}

.scale-name {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.scale-desc {
  font-size: 14px;
  color: #666;
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

  .smart-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .asset-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scale-grid {
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

  .process-line {
    display: none;
  }

  .process-steps {
    flex-direction: column;
    gap: 40px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .feature-item {
    flex-direction: column;
    text-align: center;
  }

  .smart-grid {
    grid-template-columns: 1fr;
  }

  .asset-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scale-grid {
    grid-template-columns: 1fr;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
