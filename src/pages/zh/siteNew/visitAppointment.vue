<template>
  <div class="visitor-booking">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>来访预约系统<br /><span class="gradient">智能接待新体验</span></h1>
          <p>融合在线预约、快速登记、智能识别、访客管理等功能，打造全方位来访<br />预约解决方案，让预约更便捷，让接待更高效，让管理更规范。</p>
        </div>
      </div>
    </section>

    <div class="w1380">
      <video class="wBImg" src="/documents/来访预约.mp4" controls autoplay muted />
    </div>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特色</h2>
          <p>全方位来访预约解决方案，让接待更高效</p>
        </div>
        <div class="features-grid">
          <div class="feature-box">
            <div class="feature-icon-box">
              📱
            </div>
            <h3>在线预约</h3>
            <p>支持手机、电脑多端预约，一键提交，方便快捷。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🎯
            </div>
            <h3>智能审核</h3>
            <p>AI智能算法自动审核，提高审批效率。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              📊
            </div>
            <h3>快速登记</h3>
            <p>二维码快速签到，电子通行证，减少等待时间。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🔐
            </div>
            <h3>身份识别</h3>
            <p>人脸识别、身份证识别，确保访客身份准确。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              ⭐
            </div>
            <h3>访客管理</h3>
            <p>访客信息管理、历史记录、黑名单管理。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              📈
            </div>
            <h3>数据分析</h3>
            <p>预约数据统计分析，为管理决策提供支撑。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🔔
            </div>
            <h3>消息提醒</h3>
            <p>智能消息推送，及时通知预约状态和提醒。</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon-box">
              🚪
            </div>
            <h3>门禁集成</h3>
            <p>与门禁系统集成，自动授权访客通行权限。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Types Section -->
    <section id="types" class="booking-types">
      <div class="booking-container">
        <div class="booking-header">
          <h2>预约类型</h2>
          <p>覆盖多种来访场景，满足不同需求</p>
        </div>
        <div class="booking-types-grid">
          <div class="booking-type-item">
            <div class="booking-type-icon">
              💼
            </div>
            <div class="booking-type-name">
              商务洽谈
            </div>
            <div class="booking-type-desc">
              客户拜访、商务合作洽谈
            </div>
            <div class="booking-type-stats">
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  65
                </div>
                <div class="booking-stat-text">
                  今日预约
                </div>
              </div>
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  90%
                </div>
                <div class="booking-stat-text">
                  审核通过
                </div>
              </div>
            </div>
          </div>
          <div class="booking-type-item">
            <div class="booking-type-icon">
              👔
            </div>
            <div class="booking-type-name">
              面试交流
            </div>
            <div class="booking-type-desc">
              人才面试、岗位交流
            </div>
            <div class="booking-type-stats">
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  38
                </div>
                <div class="booking-stat-text">
                  今日预约
                </div>
              </div>
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  95%
                </div>
                <div class="booking-stat-text">
                  审核通过
                </div>
              </div>
            </div>
          </div>
          <div class="booking-type-item">
            <div class="booking-type-icon">
              🎓
            </div>
            <div class="booking-type-name">
              技术交流
            </div>
            <div class="booking-type-desc">
              技术研讨、项目交流
            </div>
            <div class="booking-type-stats">
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  42
                </div>
                <div class="booking-stat-text">
                  今日预约
                </div>
              </div>
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  88%
                </div>
                <div class="booking-stat-text">
                  审核通过
                </div>
              </div>
            </div>
          </div>
          <div class="booking-type-item">
            <div class="booking-type-icon">
              👀
            </div>
            <div class="booking-type-name">
              参观考察
            </div>
            <div class="booking-type-desc">
              园区参观、实地考察
            </div>
            <div class="booking-type-stats">
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  41
                </div>
                <div class="booking-stat-text">
                  今日预约
                </div>
              </div>
              <div class="booking-type-stat">
                <div class="booking-stat-num">
                  92%
                </div>
                <div class="booking-stat-text">
                  审核通过
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
  background-color: #fce7f3;
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  color: #ec4899;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -26px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ec4899, #db2777);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-menu a:hover::after {
  transform: scaleX(1);
}

.nav-right {
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
  color: #ec4899;
  background: #fce7f3;
}

.nav-btn-primary {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.3);
}

/* Hero Section */
.hero {
  padding: 150px 35px 120px;
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
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
  background: radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(219, 39, 119, 0.06) 0%, transparent 70%);
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

.hero-badges {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.hero-badge {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%);
  color: #ec4899;
  padding: 7px 18px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 700;
}

.hero-badge.pink {
  color: #db2777;
}

.hero h1 {
  font-size: 52px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1f2937;
  font-weight: 900;
}

.hero h1 .gradient {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  box-shadow: 0 10px 25px rgba(236, 72, 153, 0.15);
}

.hero-metric-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  color: #ec4899;
  line-height: 1;
  margin-bottom: 6px;
}

.hero-metric-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.hero-buttons {
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(236, 72, 153, 0.4);
}

.hero-btn-secondary {
  background: white;
  color: #4b5563;
  border: 2px solid #e5e7eb;
}

.hero-btn-secondary:hover {
  border-color: #ec4899;
  color: #ec4899;
}

.hero-visual {
  position: relative;
}

.hero-calendar {
  background: white;
  border-radius: 24px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.calendar-header {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.calendar-title {
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.calendar-status {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.calendar-body {
  padding: 25px;
  background: #fafafa;
}

.booking-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 22px;
}

.booking-card {
  background: white;
  border-radius: 14px;
  padding: 16px;
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
}

.booking-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.booking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.booking-name {
  font-size: 14px;
  font-weight: 700;
  color: #1f2937;
}

.booking-status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
}

.booking-status.pending {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
}

.booking-status.checkin {
  background: #3b82f6;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
}

.booking-info {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
}

.booking-time {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #6b7280;
}

.calendar-footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.calendar-stat {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  border: 1px solid #f3f4f6;
}

.calendar-stat-number {
  font-size: 24px;
  font-weight: 800;
  color: #ec4899;
  line-height: 1;
  margin-bottom: 4px;
}

.calendar-stat-label {
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
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
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
  background: linear-gradient(90deg, #ec4899, #db2777);
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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

/* Booking Types Section */
.booking-types {
  padding: 110px 35px;
  background: linear-gradient(180deg, #fafafa 0%, white 100%);
}

.booking-container {
  max-width: 1400px;
  margin: 0 auto;
}

.booking-header {
  text-align: center;
  margin-bottom: 75px;
}

.booking-header h2 {
  font-size: 42px;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 900;
}

.booking-header p {
  color: #6b7280;
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.booking-types-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.booking-type-item {
  background: white;
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid #f3f4f6;
  transition: all 0.4s;
  text-align: center;
}

.booking-type-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.booking-type-icon {
  height: 100px;
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin-bottom: 20px;
}

.booking-type-name {
  font-size: 18px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 8px;
}

.booking-type-desc {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.6;
}

.booking-type-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 18px;
}

.booking-type-stat {
  background: #fce7f3;
  border-radius: 10px;
  padding: 12px;
}

.booking-stat-num {
  font-size: 20px;
  font-weight: 800;
  color: #ec4899;
  line-height: 1;
  margin-bottom: 4px;
}

.booking-stat-text {
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
}

.booking-type-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.booking-type-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
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

  .hero-badges {
    justify-content: center;
  }

  .hero-metrics {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .booking-types-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .nav-right {
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

  .booking-grid {
    grid-template-columns: 1fr;
  }

  .booking-types-grid {
    grid-template-columns: 1fr;
  }

  .calendar-footer {
    grid-template-columns: 1fr;
  }
}
.w1380 {
  width: 1380px;
  margin: 0 auto;
  margin-top: 100px;
  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}
</style>
