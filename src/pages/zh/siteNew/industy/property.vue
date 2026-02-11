<template>
  <div class="property-management">
    <!-- Hero区域 -->
    <section id="home" class="hero">
      <h1>智慧物业管理系统</h1>
      <p>科技赋能社区，智能改变生活 - 打造现代化物业管理新体验</p>
    </section>

    <!-- 特性区域 -->
    <section id="features" class="features">
      <div class="section-title">
        <h2>核心功能</h2>
        <p>为您提供全方位的智慧物业管理解决方案</p>
      </div>
      <div class="features-grid">
        <div v-for="(feature, index) in featuresList" :key="index" class="feature-card">
          <div class="feature-icon">
            {{ feature.icon }}
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 服务区域 -->
    <section id="services" class="services">
      <div class="services-container">
        <div class="section-title">
          <h2>服务内容</h2>
          <p>专业的物业管理服务，让您的社区更加美好</p>
        </div>
        <div class="services-grid">
          <div v-for="(service, index) in servicesList" :key="index" class="service-item">
            <div class="service-number">
              {{ index + 1 }}
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.desc }}</p>
            </div>
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

// 核心功能列表
const featuresList = ref([
  {
    icon: '📱',
    title: '智能报修',
    desc: '业主可通过手机APP在线提交报修请求，实时查看处理进度，提升服务响应效率'
  },
  {
    icon: '💳',
    title: '在线缴费',
    desc: '支持物业费、水电费等多种费用在线缴纳，支持微信、支付宝等多种支付方式'
  },
  {
    icon: '🔒',
    title: '门禁管理',
    desc: '智能门禁系统，支持人脸识别、二维码开门等多种方式，保障社区安全'
  },
  {
    icon: '📊',
    title: '数据统计',
    desc: '完善的运营数据分析系统，帮助物业管理者科学决策，提升管理水平'
  },
  {
    icon: '📢',
    title: '信息发布',
    desc: '社区公告、通知一键发布，支持文字、图片、视频等多种形式'
  },
  {
    icon: '👥',
    title: '业主服务',
    desc: '完善的业主档案管理，提供个性化服务，增强业主满意度'
  }
])

// 服务内容列表
const servicesList = ref([
  {
    title: '日常维护',
    desc: '24小时全天候设备维护，定期检查社区设施，确保各项设备正常运行，为业主提供舒适的居住环境'
  },
  {
    title: '安保服务',
    desc: '专业安保团队，配备先进的监控设备，24小时巡逻值守，保障社区安全'
  },
  {
    title: '清洁绿化',
    desc: '定期社区清洁，专业绿化养护，打造优美、整洁的社区环境'
  },
  {
    title: '客户服务',
    desc: '专业客服团队，及时响应业主需求，提供贴心周到的服务'
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
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f7fa;
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
  background: rgba(255,255,255,0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 15px;
  transition: opacity 0.3s;
}

.nav a:hover {
  opacity: 0.8;
}

/* Hero区域 */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 400px;
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.btn {
  display: inline-block;
  padding: 12px 35px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

/* 特性区域 */
.features {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 15px;
}

.section-title p {
  color: #666;
  font-size: 16px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 35px 25px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 28px;
  color: white;
}

.feature-card h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
}

.feature-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.7;
}

/* 服务区域 */
.services {
  background: white;
  padding: 80px 20px;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 50px;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.service-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
}

.service-content h3 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
}

.service-content p {
  color: #666;
  font-size: 15px;
  line-height: 1.8;
}

/* 数据统计 */
.stats {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;
}

.stat-item h3 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 10px;
}

.stat-item p {
  font-size: 16px;
  opacity: 0.9;
}

/* 联系区域 */
.contact {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  align-items: center;
}

.contact-info h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.contact-info p {
  color: #666;
  margin-bottom: 30px;
  line-height: 1.8;
}

.contact-details {
  margin-top: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.contact-item-icon {
  width: 45px;
  height: 45px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.contact-item-text {
  font-size: 15px;
  color: #555;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.08);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

/* 底部 */
.footer {
  background: #2c3e50;
  color: white;
  padding: 60px 20px 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-column h4 {
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.6);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .nav {
    display: none;
  }

  .services-grid,
  .contact-grid,
  .footer-grid,
  .stats-container {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 25px 20px;
  }
}
</style>
