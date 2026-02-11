<template>
  <div class="smart-fire-safety">
    <section class="banner">
      <div class="container">
        <!-- 添加版心容器 -->
        <div class="banner-content">
          <h1>智慧消防</h1>
          <p>基于物联网、大数据和人工智能技术，打造智能化消防管理平台，实现火灾隐患实时监测、智能预警和快速响应，为生命财产安全保驾护航。</p>
        </div>
      </div>
    </section>
    <!-- 核心功能区域 -->
    <section id="features" class="section features">
      <div class="container">
        <div class="section-header">
          <h2>六大核心功能</h2>
          <p>运用物联网、大数据和AI技术，构建全方位、智能化的消防管理体系，让消防安全管理更高效、更智能。</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-number">01</span>
            <div class="feature-icon">
              🔥
            </div>
            <h3>火灾智能监测</h3>
            <p>通过烟感、温感、火焰等传感器实时监测火灾隐患，AI算法智能分析，火灾发生初期即可精准识别。</p>
          </div>
          <div class="feature-card">
            <span class="feature-number">02</span>
            <div class="feature-icon">
              📢
            </div>
            <h3>多级智能预警</h3>
            <p>多级预警机制，火灾隐患自动分级告警，通过APP、短信、电话等多种方式实时通知相关人员。</p>
          </div>
          <div class="feature-card">
            <span class="feature-number">03</span>
            <div class="feature-icon">
              🚒
            </div>
            <h3>应急联动响应</h3>
            <p>与消防部门、物业管理系统联动，火灾发生时自动启动应急预案，协调各方力量快速响应。</p>
          </div>
          <div class="feature-card">
            <span class="feature-number">04</span>
            <div class="feature-icon">
              📊
            </div>
            <h3>数据分析决策</h3>
            <p>消防数据集中管理，生成可视化报表，分析火灾风险趋势，为消防管理决策提供数据支撑。</p>
          </div>
          <div class="feature-card">
            <span class="feature-number">05</span>
            <div class="feature-icon">
              🔧
            </div>
            <h3>设备全生命周期</h3>
            <p>消防设备全生命周期管理，实时监控设备状态，自动提醒维护保养，确保设备正常运行。</p>
          </div>
          <div class="feature-card">
            <span class="feature-number">06</span>
            <div class="feature-icon">
              🎯
            </div>
            <h3>风险评估管理</h3>
            <p>基于历史数据和实时监测，智能评估火灾风险等级，识别高风险区域，指导预防措施。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 解决方案区域 -->
    <section id="solutions" class="section solutions">
      <div class="container">
        <div class="section-header">
          <h2>行业解决方案</h2>
          <p>针对不同行业特点和应用场景，提供定制化的智慧消防解决方案，满足多样化消防安全需求。</p>
        </div>

        <div class="solution-row">
          <div class="solution-image">
            🏢
          </div>
          <div class="solution-content">
            <h3>产业园区消防管理</h3>
            <p>为产业园区、科技园区提供全方位的消防安全保障，实现火灾隐患的早期发现和快速处置，降低安全风险。</p>
            <div class="solution-features">
              <span>园区消防设施集中监控</span>
              <span>重点区域烟雾和温度监测</span>
              <span>消防通道智能管理</span>
              <span>应急疏散指示系统</span>
              <span>消防水源实时监测</span>
              <span>设备远程巡检维护</span>
            </div>
          </div>
        </div>

        <div class="solution-row">
          <div class="solution-image">
            🏬
          </div>
          <div class="solution-content">
            <h3>商业场所消防预警</h3>
            <p>面向商场、超市、酒店等商业综合体，提供专业的消防预警和应急管理服务，保障人员密集场所安全。</p>
            <div class="solution-features">
              <span>商户用电安全监测</span>
              <span>厨房烟道火灾预警</span>
              <span>消防设施远程监控</span>
              <span>人员密集场所火灾风险评估</span>
              <span>多部门联动应急响应</span>
              <span>客流量与风险关联分析</span>
            </div>
          </div>
        </div>

        <div class="solution-row">
          <div class="solution-image">
            🏥
          </div>
          <div class="solution-content">
            <h3>医疗场所消防安全</h3>
            <p>为医院、养老院等医疗机构提供特殊要求的消防安全保障，确保病患和医护人员的安全，守护生命防线。</p>
            <div class="solution-features">
              <span>医疗设备用电安全监控</span>
              <span>医用气体泄漏监测</span>
              <span>患者疏散路径优化</span>
              <span>消防设备定期巡检</span>
              <span>特殊区域重点防护</span>
              <span>医疗资源联动调度</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #ffffff;
}

.banner {
  background: linear-gradient(135deg, #e74c3c 0%, #e74c3c 100%);
  min-height: 400px;
  color: white;
  padding: 8rem 0 4rem; /* 修改为上下内边距，左右由container控制 */
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
  color: #e74c3c;
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

.top-bar {
  background: #2d3436;
  color: #dfe6e9;
  padding: 8px 0;
  font-size: 14px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.top-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: 800;
  color: #2d3436;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: #e74c3c;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.btn-primary {
  background: #e74c3c;
  color: white;
  padding: 18px 45px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s;
  border: 2px solid #e74c3c;
}

.btn-primary:hover {
  background: transparent;
  color: #e74c3c;
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 18px 45px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #1a1a2e;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.stat-box {
  background: rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}

.stat-box h3 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;
  color: #e74c3c;
}

.stat-box p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
}

/* Section通用样式 */
.section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-tag {
  background: #ffeaa7;
  color: #d63031;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 42px;
  color: #2d3436;
  margin-bottom: 20px;
  font-weight: 800;
}

.section-header p {
  color: #636e72;
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

/* 核心功能区域 */
.features {
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 50px 40px;
  border-radius: 16px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #e74c3c;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
}

.feature-number {
  font-size: 48px;
  font-weight: 900;
  color: rgba(231,76,60,0.4);
  position: absolute;
  top: 20px;
  right: 30px;
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  border-radius: 16px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.feature-card h3 {
  font-size: 24px;
  color: #2d3436;
  margin-bottom: 15px;
  font-weight: 700;
}

.feature-card p {
  color: #636e72;
  line-height: 1.8;
  font-size: 15px;
}

/* 解决方案区域 */
.solutions {
  background: white;
}

.solution-row {
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 100px;
}

.solution-row:last-child {
  margin-bottom: 0;
}

.solution-row:nth-child(even) {
  flex-direction: row-reverse;
}

.solution-image {
  flex: 1;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  height: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;
  color: white;
  position: relative;
  overflow: hidden;
}

.solution-image::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.solution-content {
  flex: 1;
}

.solution-badge {
  background: #ffeaa7;
  color: #d63031;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 20px;
}

.solution-content h3 {
  font-size: 36px;
  color: #2d3436;
  margin-bottom: 25px;
  font-weight: 800;
}

.solution-content p {
  color: #636e72;
  line-height: 1.9;
  margin-bottom: 30px;
  font-size: 17px;
}

.solution-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.solution-features span {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #2d3436;
  font-weight: 600;
  font-size: 15px;
}

.solution-features span::before {
  content: '▸';
  color: #e74c3c;
  font-size: 18px;
}

/* 数据统计区域 */
.stats {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  position: relative;
}

.stat-item::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: rgba(255,255,255,0.3);
}

.stat-item:last-child::after {
  display: none;
}

.stat-item h3 {
  font-size: 56px;
  font-weight: 900;
  margin-bottom: 15px;
}

.stat-item p {
  font-size: 18px;
  opacity: 0.9;
  font-weight: 600;
}

/* 联系我们区域 */
.contact {
  background: #f8f9fa;
}

.contact-box {
  background: white;
  border-radius: 20px;
  padding: 80px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.contact-box h3 {
  font-size: 36px;
  color: #2d3436;
  margin-bottom: 20px;
  font-weight: 800;
}

.contact-box p {
  color: #636e72;
  margin-bottom: 40px;
  line-height: 1.9;
  font-size: 18px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* 页脚 */
.footer {
  background: #2d3436;
  color: white;
  padding: 50px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand h4 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  color: white;
}

.footer-brand p {
  opacity: 0.7;
  line-height: 1.8;
  font-size: 15px;
}

.footer-links h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #e74c3c;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 30px;
  text-align: center;
}

.footer-bottom p {
  opacity: 0.6;
  font-size: 14px;
}

/* 响应式 */
@media (max-width: 992px) {
  .hero-content,
  .solution-row,
  .solution-row:nth-child(even) {
    grid-template-columns: 1fr;
    flex-direction: column;
    gap: 40px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .solution-features {
    grid-template-columns: 1fr;
  }

  .contact-box {
    padding: 40px;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .hero-buttons,
  .contact-buttons {
    flex-direction: column;
  }
}
</style>
