<template>
  <div class="page_container">
    <!-- 头部区域 -->
    <div class="header">
      <h1>智慧档案馆管理系统演示平台</h1>
      <p>集数字化、智能化、网络化于一体的现代化档案管理解决方案，实现档案全生命周期管理</p>
    </div>

    <!-- 核心内容容器 -->
    <div class="container">
      <!-- 数字档案馆（互联网）卡片 -->
      <div class="card">
        <h2>数字档案馆（互联网）</h2>
        <div class="link-container">
          <div v-for="(item, index) in internetLinks" :key="index" class="link-item">
            <a :href="item.url" target="_blank" class="link-name">{{ item.name }}</a>
          </div>
        </div>
      </div>

      <!-- 数字档案馆（政务网）卡片 -->
      <div class="card">
        <h2>数字档案馆（政务网）</h2>
        <div class="link-container">
          <div v-for="(item, index) in govLinks" :key="index" class="link-item">
            <a :href="item.url" target="_blank" class="link-name">{{ item.name }}</a>
          </div>
        </div>
      </div>

      <!-- 数字档案馆（局域网）卡片 -->
      <div class="card">
        <h2>数字档案馆（局域网）</h2>
        <div class="link-container">
          <div v-for="(item, index) in lanLinks" :key="index" class="link-item">
            <a :href="item.url" target="_blank" class="link-name">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部区域 -->
    <div class="footer">
      <p>智慧档案馆管理系统 © 2023 版权所有 | 技术支持：奥尔特云（深圳）智慧科技有限公司</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'demo',
  title: '智慧档案',
  subTitle: '演示环境',
  logo: '/img/demo/menu/da.png'
})
const internetLinks = [
  {
    name: '数字档案馆平台',
    url: 'https://archive-int.myoumuamua.com:6433/bus/apaas-web/desktopHome/index.html?#/zhhome'
  }
  // {
  //   name: '控制台',
  //   url: 'https://archive-int.myoumuamua.com:6433/bus/apaas-web/console_manage/index.html'
  // }
]

const govLinks = [
  {
    name: '数字档案馆平台',
    url: 'https://archive-gov.myoumuamua.com:6433/bus/apaas-web/desktopHome/index.html'
  }
  // {
  //   name: '控制台',
  //   url: 'https://archive-gov.myoumuamua.com:6433/bus/apaas-web/console_manage/index.html'
  // }
]

const lanLinks = [
  {
    name: '数字档案馆平台',
    url: 'https://archive-lan.myoumuamua.com:6433/bus/apaas-web/desktopHome/index.html'
  }
  // {
  //   name: '控制台',
  //   url: 'https://archive-lan.myoumuamua.com:6433/bus/apaas-web/console_manage/index.html'
  // }
]
</script>

<style scoped lang="scss">
/* 保留原始所有样式，添加scoped属性实现样式隔离 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Microsoft YaHei', sans-serif;
}

.page_container {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231a2b42"/><path d="M0 0L100 100M100 0L0 100" stroke="%232a3b52" stroke-width="1"/></svg>');
  color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  text-align: center;
  margin: 30px 0 50px;
  position: relative;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 150, 255, 0.7);
  letter-spacing: 2px;
}

.header p {
  font-size: 1.2rem;
  color: #a0d2ff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
}

.banner-img {
  max-width: 1200px;
  max-height: 1800px;
  height: auto; /* 保持宽高比 */
  object-fit: cover; /* 确保图片覆盖容器，裁剪多余部分 */
  display: block;
  margin-bottom: 50px;
}

.card {
  background: rgba(26, 43, 66, 0.8);
  border-radius: 10px;
  padding: 25px;
  width: 350px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(100, 150, 200, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 100, 200, 0.4);
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4a90e2, #64b3f4);
}

/* 第一个卡片渐变 */
.card:nth-child(1)::before {
  background: linear-gradient(90deg, #4a90e2, #64b3f4);
}

/* 第二个卡片渐变 */
.card:nth-child(2)::before {
  background: linear-gradient(90deg, #2ecc71, #1abc9c);
}

/* 第三个卡片渐变 */
.card:nth-child(3)::before {
  background: linear-gradient(90deg, #e74c3c, #e67e22);
}

.card h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #64b3f4;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}

.card h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  height: 2px;
  background: rgba(100, 179, 244, 0.5);
}

.link-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link-item {
  background: rgba(40, 60, 90, 0.7);
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s;
  border-left: 4px solid #4a90e2;
  text-align: center;
}

/* 第二个卡片链接左侧边框颜色 */
.card:nth-child(2) .link-item {
  border-left-color: #2ecc71;
}

/* 第三个卡片链接左侧边框颜色 */
.card:nth-child(3) .link-item {
  border-left-color: #e74c3c;
}

.link-item:hover {
  background: rgba(50, 80, 120, 0.9);
  transform: translateX(5px);
}

.link-item a {
  color: #a0d2ff;
  text-decoration: none;
  display: block;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.link-item a:hover {
  color: #fff;
}

.link-item .link-name {
  font-weight: bold;
  color: #fff;
}

.footer {
  margin-top: 50px;
  text-align: center;
  color: #8ba7c7;
  font-size: 0.9rem;
  padding: 20px;
  border-top: 1px solid rgba(100, 150, 200, 0.2);
  width: 100%;
  max-width: 1200px;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }

  .header h1 {
    font-size: 2rem;
  }
}
</style>
