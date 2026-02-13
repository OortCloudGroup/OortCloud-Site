<template>
  <div class="online-mall">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>线上商城系统<br /><span class="gradient">开启电商新纪元</span></h1>
          <p>融合智能推荐、会员管理、营销活动、数据分析等功能，打造全场景电商解决方案，<br />让购物更智能，让运营更高效，让生意更火爆。</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="features-header">
          <h2>核心功能特色</h2>
          <p>全方位电商解决方案，让您的生意更红火</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-box">
            <div class="feature-icon-box">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
      <div class="products-container">
        <div class="products-header">
          <h2>热销商品</h2>
          <p>精选优质商品，品质保证，优惠不断</p>
        </div>
        <div class="products-grid">
          <div v-for="(product, index) in hotProducts" :key="index" class="product-item">
            <div class="product-item-image">
              {{ product.icon }}
            </div>
            <div class="product-item-name">
              {{ product.name }}
            </div>
            <div class="product-item-desc">
              {{ product.desc }}
            </div>
            <div class="product-item-price">
              {{ product.price }}
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
  layout: 'site-new'
})
// 示例数据 - 功能特色
const features = ref([
  { icon: '🎯', title: '智能推荐', description: 'AI智能算法推荐，精准匹配用户需求，提升转化率85%。' },
  { icon: '👤', title: '会员管理', description: '完整的会员体系，积分、等级、优惠券，提升用户忠诚度。' },
  { icon: '📦', title: '订单管理', description: '全流程订单跟踪，从下单到发货到收货，状态实时更新。' },
  { icon: '💳', title: '支付系统', description: '支持多种支付方式，安全快捷，资金实时到账。' },
  { icon: '🎁', title: '营销活动', description: '秒杀、拼团、满减等多样化营销工具，刺激消费增长。' },
  { icon: '📊', title: '数据分析', description: '销售数据可视化，用户行为分析，为运营决策提供支撑。' },
  { icon: '🚚', title: '物流配送', description: '对接主流物流商，自动分配运单，物流信息实时追踪。' },
  { icon: '🔒', title: '安全保障', description: '多重安全防护，保障交易安全，让用户购物无忧。' }
])

// 示例数据 - 热销商品
const hotProducts = ref([
  { icon: '📱', name: '智能手机', desc: '旗舰芯片 | 超清屏幕 | 长续航', price: '¥2,999' },
  { icon: '💻', name: '笔记本电脑', desc: '高性能 | 轻薄设计 | 高清屏', price: '¥5,999' },
  { icon: '🎧', name: '无线耳机', desc: '降噪功能 | 超长续航 | 舒适佩戴', price: '¥299' },
  { icon: '⌚', name: '智能手表', desc: '健康监测 | 运动追踪 | 防水设计', price: '¥1,299' },
  { icon: '📷', name: '数码相机', desc: '4K拍摄 | 防抖功能 | 高清画质', price: '¥4,599' },
  { icon: '🎮', name: '游戏主机', desc: '高性能 | 大作畅玩 | 网络对战', price: '¥3,299' },
  { icon: '🔌', name: '充电宝', desc: '快充技术 | 大容量 | 安全防护', price: '¥199' },
  { icon: '🖥️', name: '显示器', desc: '4K超清 | 广视角 | 护眼模式', price: '¥1,999' }
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
  color: #1f2937;
  background-color: #fefce8;
}

/* Hero Section */
.hero {
  padding: 150px 35px 120px;
  background: linear-gradient(135deg, #fefce8 0%, #fef2f2 100%);
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(239, 68, 68, 0.15) 100%);
  color: #f59e0b;
  padding: 7px 18px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 700;
}

.hero-badge.red {
  color: #ef4444;
}

.hero h1 {
  font-size: 52px;
  line-height: 1.15;
  margin-bottom: 25px;
  color: #1f2937;
  font-weight: 900;
}

.hero h1 .gradient {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
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

.hero-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 40px;
}

.hero-card {
  background: white;
  border-radius: 16px;
  padding: 22px 18px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  text-align: center;
  transition: all 0.3s;
}

.hero-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(245, 158, 11, 0.15);
}

.hero-card-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 22px;
}

.hero-card-number {
  font-size: 26px;
  font-weight: 800;
  color: #f59e0b;
  line-height: 1;
  margin-bottom: 6px;
}

.hero-card-label {
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
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(245, 158, 11, 0.4);
}

.hero-btn-secondary {
  background: white;
  color: #4b5563;
  border: 2px solid #e5e7eb;
}

.hero-btn-secondary:hover {
  border-color: #f59e0b;
  color: #f59e0b;
}

.hero-visual {
  position: relative;
}

.hero-storefront {
  background: white;
  border-radius: 24px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.storefront-header {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storefront-title {
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.storefront-cart {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.storefront-body {
  padding: 25px;
  background: #fafafa;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 22px;
}

.product-card {
  background: white;
  border-radius: 14px;
  padding: 16px;
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.product-image {
  height: 100px;
  background: linear-gradient(135deg, #fef3c7 0%, #fecaca 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 12px;
}

.product-name {
  font-size: 14px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 6px;
}

.product-price {
  font-size: 18px;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 8px;
}

.product-btn {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.product-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(245, 158, 11, 0.3);
}

.store-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.store-stat {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  border: 1px solid #f3f4f6;
}

.store-stat-number {
  font-size: 24px;
  font-weight: 800;
  color: #f59e0b;
  line-height: 1;
  margin-bottom: 4px;
}

.store-stat-label {
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
  background: linear-gradient(135deg, #fefce8 0%, #fef2f2 100%);
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
  background: linear-gradient(90deg, #f59e0b, #ef4444);
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
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
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

/* Products Section */
.products {
  padding: 110px 35px;
  background: linear-gradient(180deg, #fafafa 0%, white 100%);
}

.products-container {
  max-width: 1400px;
  margin: 0 auto;
}

.products-header {
  text-align: center;
  margin-bottom: 75px;
}

.products-header h2 {
  font-size: 42px;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 900;
}

.products-header p {
  color: #6b7280;
  font-size: 18px;
  max-width: 650px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.product-item {
  background: white;
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid #f3f4f6;
  transition: all 0.4s;
  text-align: center;
}

.product-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.product-item-image {
  height: 140px;
  background: linear-gradient(135deg, #fef3c7 0%, #fecaca 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  margin-bottom: 20px;
}

.product-item-name {
  font-size: 18px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 8px;
}

.product-item-desc {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.6;
}

.product-item-price {
  font-size: 24px;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 18px;
}

.product-item-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.product-item-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
}

/* Stats Section */
.stats {
  padding: 100px 35px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
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
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
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
  color: #f59e0b;
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
  color: #f59e0b;
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
  color: #f59e0b;
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

  .hero-cards {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .products-grid {
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

  .nav-cart {
    display: none;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero-cards {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .store-stats {
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
