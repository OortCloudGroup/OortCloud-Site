<template>
  <div class="vehicle-management">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>车辆管理系统<br /><span class="gradient">智慧出行新体验</span></h1>
          <p>融合车辆信息管理、实时定位监控、智能调度、费用管理等功能，打造全方位车辆管理<br />解决方案，让管理更智能，让出行更安全，让调度更高效。</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特色</h2>
          <p>全方位车辆管理解决方案，让管理更高效</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-box">
            <div class="feature-icon-box">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vehicle Types Section -->
    <section id="types" class="vehicle-types">
      <div class="vehicle-container">
        <div class="vehicle-header">
          <h2>车辆类型</h2>
          <p>覆盖多种车型，满足不同需求</p>
        </div>
        <div class="vehicle-types-grid">
          <div v-for="(type, index) in vehicleTypes" :key="index" class="vehicle-type-item">
            <div class="vehicle-type-icon">
              {{ type.icon }}
            </div>
            <div class="vehicle-type-name">
              {{ type.name }}
            </div>
            <div class="vehicle-type-desc">
              {{ type.desc }}
            </div>
            <div class="vehicle-type-stats">
              <div class="vehicle-type-stat">
                <div class="vehicle-stat-num">
                  {{ type.total }}
                </div>
                <div class="vehicle-stat-text">
                  车辆数
                </div>
              </div>
              <div class="vehicle-type-stat">
                <div class="vehicle-stat-num">
                  {{ type.online }}
                </div>
                <div class="vehicle-stat-text">
                  在线数
                </div>
              </div>
            </div>
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

// 功能特色数据
const features = [
  { icon: '🚗', title: '车辆管理', desc: '车辆信息管理、档案记录、年检提醒，全生命周期管理。' },
  { icon: '📍', title: '实时定位', desc: 'GPS实时定位，轨迹回放，电子围栏，安全保障。' },
  { icon: '📋', title: '调度管理', desc: '智能调度派单，任务分配，优化车辆利用率。' },
  { icon: '💰', title: '费用管理', desc: '油耗统计、维修费用、保险管理，费用透明化。' },
  { icon: '📊', title: '数据分析', desc: '里程统计、油耗分析、使用报表，数据驱动决策。' },
  { icon: '🔔', title: '智能提醒', desc: '年检提醒、保养提醒、违章提醒，不再错过重要事项。' },
  { icon: '📱', title: '移动管理', desc: '支持手机APP管理，随时随地查看车辆状态。' },
  { icon: '👥', title: '司机管理', desc: '司机信息管理、驾驶证管理、绩效考核。' }
]

// 车辆类型数据
const vehicleTypes = [
  { icon: '🚗', name: '轿车', desc: '商务出行、接送服务', total: 86, online: 62 },
  { icon: '🚙', name: 'SUV', desc: '越野出行、载货运输', total: 54, online: 48 },
  { icon: '🚐', name: '商务车', desc: '团队出行、会议接送', total: 68, online: 42 },
  { icon: '🚚', name: '货车', desc: '货物运输、物流配送', total: 48, online: 30 }
]

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
  color: #1f2937;
  background-color: #eff6ff;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 0 35px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 72px;
  display: flex;
  align-items: center;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.logo-text {
  color: #1f2937;
  font-size: 22px;
  font-weight: 800;
}

.logo-text span {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 38px;
}

.nav-menu a {
  color: #4b5563;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}

.nav-menu a:hover {
  color: #3b82f6;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -26px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-menu a:hover::after {
  transform: scaleX(1);
}

.nav-cta {
  display: flex;
  gap: 12px;
  align-items: center;
}

.nav-btn {
  padding: 10px 22px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}

.nav-btn-ghost {
  color: #4b5563;
}

.nav-btn-ghost:hover {
  color: #3b82f6;
  background: #dbeafe;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

/* Hero Section */
.hero {
  padding: 150px 35px 120px;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(29, 78, 216, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  padding-right: 30px;
}

.hero-tags {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.hero-tag {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(29, 78, 216, 0.15) 100%);
  color: #3b82f6;
  padding: 7px 18px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 700;
}

.hero-tag.blue {
  color: #1d4ed8;
}

.hero h1 {
  font-size: 52px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1f2937;
  font-weight: 900;
}

.hero h1 .gradient {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 40px;
}

.hero-metric {
  background: white;
  border-radius: 16px;
  padding: 22px 18px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  text-align: center;
  transition: all 0.3s;
}

.hero-metric:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
}

.hero-metric-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 22px;
}

.hero-metric-number {
  font-size: 26px;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 6px;
}

.hero-metric-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 16px 38px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
}

.hero-btn-secondary {
  background: white;
  color: #4b5563;
  border: 2px solid #e5e7eb;
}

.hero-btn-secondary:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.hero-visual {
  position: relative;
}

.hero-monitor {
  background: white;
  border-radius: 24px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.monitor-header {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.monitor-title {
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.monitor-status {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.monitor-body {
  padding: 25px;
  background: #fafafa;
}

.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 22px;
}

.vehicle-card {
  background: white;
  border-radius: 14px;
  padding: 16px;
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
}

.vehicle-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.vehicle-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.vehicle-plate {
  font-size: 16px;
  font-weight: 800;
  color: #1f2937;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  padding: 4px 12px;
  border-radius: 6px;
}

.vehicle-status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
}

.vehicle-status.running {
  background: #3b82f6;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
}

.vehicle-status.parking {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
}

.vehicle-info {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
}

.vehicle-location {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #6b7280;
}

.monitor-footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.monitor-stat {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  border: 1px solid #f3f4f6;
}

.monitor-stat-number {
  font-size: 24px;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 4px;
}

.monitor-stat-label {
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
}

/* Features Section */
.features {
  padding: 110px 35px;
  background: white;
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 75px;
}

.features-header h2 {
  font-size: 42px;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 900;
}

.features-header p {
  color: #6b7280;
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.feature-box {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 20px;
  padding: 38px 28px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.feature-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-box:hover {
  background: white;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}

.feature-box:hover::before {
  transform: scaleX(1);
}

.feature-icon-box {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  font-size: 28px;
}

.feature-box h3 {
  font-size: 19px;
  color: #1f2937;
  margin-bottom: 12px;
  font-weight: 800;
}

.feature-box p {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.7;
}

/* Vehicle Types Section */
.vehicle-types {
  padding: 110px 35px;
  background: linear-gradient(180deg, #fafafa 0%, white 100%);
}

.vehicle-container {
  max-width: 1400px;
  margin: 0 auto;
}

.vehicle-header {
  text-align: center;
  margin-bottom: 75px;
}

.vehicle-header h2 {
  font-size: 42px;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 900;
}

.vehicle-header p {
  color: #6b7280;
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.vehicle-types-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.vehicle-type-item {
  background: white;
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid #f3f4f6;
  transition: all 0.4s;
  text-align: center;
}

.vehicle-type-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.vehicle-type-icon {
  height: 100px;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin-bottom: 20px;
}

.vehicle-type-name {
  font-size: 18px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 8px;
}

.vehicle-type-desc {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.6;
}

.vehicle-type-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 18px;
}

.vehicle-type-stat {
  background: #eff6ff;
  border-radius: 10px;
  padding: 12px;
}

.vehicle-stat-num {
  font-size: 20px;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 4px;
}

.vehicle-stat-text {
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
}

.vehicle-type-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.vehicle-type-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

/* Stats Section */
.stats {
  padding: 100px 35px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: -200px;
  left: -200px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.stats::after {
  content: '';
  position: absolute;
  bottom: -300px;
  right: -300px;
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
}

.stat-item {
  text-align: center;
  padding: 50px 32px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.stat-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 56px;
  font-weight: 900;
  color: white;
  line-height: 1;
  margin-bottom: 12px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 600;
}

/* CTA Section */
.cta {
  padding: 120px 35px;
  text-align: center;
  background: white;
}

.cta-container {
  max-width: 950px;
  margin: 0 auto;
}

.cta-box {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 32px;
  padding: 80px 60px;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-box h2 {
  font-size: 44px;
  color: white;
  margin-bottom: 18px;
  font-weight: 900;
}

.cta-box p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-bottom: 45px;
}

.cta-btn {
  display: inline-block;
  background: white;
  color: #3b82f6;
  padding: 18px 55px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  font-size: 17px;
  transition: all 0.3s;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Footer */
.footer {
  background: #1f2937;
  padding: 75px 35px 35px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand .logo {
  margin-bottom: 22px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 24px;
}

.footer-brand .footer-contact {
  display: flex;
  gap: 20px;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
}

.footer-links h4 {
  color: white;
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: 700;
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
  color: #3b82f6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: #3b82f6;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    padding-right: 0;
  }

  .hero-tags {
    justify-content: center;
  }

  .hero-metrics {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .vehicle-types-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .vehicle-grid {
    grid-template-columns: 1fr;
  }

  .vehicle-types-grid {
    grid-template-columns: 1fr;
  }

  .monitor-footer {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    padding: 50px 30px;
  }

  .cta-box h2 {
    font-size: 34px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
