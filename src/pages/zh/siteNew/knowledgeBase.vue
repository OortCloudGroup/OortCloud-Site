<template>
  <div class="knowledge-base">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-badge">
          🎯 企业级知识管理平台
        </div>
        <h1>汇聚智慧，共享知识</h1>
        <p>为团队提供统一的知识管理平台，让每个成员都能轻松创建、查找和分享知识，提升团队协作效率。</p>
      </div>
    </section>

    <!-- 分类导航 -->
    <section id="categories" ref="categoriesRef" class="categories">
      <div class="categories-container">
        <div class="categories-header">
          <h2>知识分类</h2>
        </div>
        <div class="categories-grid">
          <div
            v-for="category in categories"
            :key="category.id"
            class="category-card"
            @click="handleCategoryClick(category)"
          >
            <div class="category-icon">
              {{ category.icon }}
            </div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.desc }}</p>
            <span class="category-count">{{ category.count }} 篇文章</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门文章 -->
    <section id="articles" ref="articlesRef" class="articles">
      <div class="articles-container">
        <div class="section-header">
          <h2>热门文章</h2>
          <p>最受用户欢迎的知识内容</p>
        </div>
        <div class="articles-grid">
          <div
            v-for="article in hotArticles"
            :key="article.id"
            class="article-card"
            @click="handleArticleClick(article)"
          >
            <div class="article-image">
              {{ article.icon }}
            </div>
            <div class="article-content">
              <div class="article-meta">
                <span>📅 {{ article.date }}</span>
                <span>⏱️ {{ article.readTime }} 分钟阅读</span>
              </div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.desc }}</p>
              <div class="article-footer">
                <div class="article-author">
                  <div class="article-author-avatar">
                    {{ article.author.avatar }}
                  </div>
                  <span>{{ article.author.name }}</span>
                </div>
                <div class="article-likes">
                  <span>❤️ {{ article.likes }}</span>
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
import { ref } from 'vue'
definePageMeta({
  layout: 'site-new'
})
const categoriesRef = ref(null)
const articlesRef = ref(null)

// 分类数据
const categories = ref([
  {
    id: 1,
    icon: '🚀',
    name: '快速入门',
    desc: '新手必读的基础知识和操作指南',
    count: 128
  },
  {
    id: 2,
    icon: '📖',
    name: '产品文档',
    desc: '详细的产品功能介绍和使用说明',
    count: 256
  },
  {
    id: 3,
    icon: '🔧',
    name: 'API 参考',
    desc: '完整的 API 接口文档和开发指南',
    count: 189
  },
  {
    id: 4,
    icon: '💡',
    name: '最佳实践',
    desc: '行业专家的经验分享和实践案例',
    count: 95
  },
  {
    id: 5,
    icon: '❓',
    name: '常见问题',
    desc: '用户常见问题的解答和解决方案',
    count: 342
  },
  {
    id: 6,
    icon: '🎬',
    name: '视频教程',
    desc: '直观的视频演示和操作指导',
    count: 67
  }
])

// 热门文章数据
const hotArticles = ref([
  {
    id: 1,
    icon: '📱',
    badge: '快速入门',
    date: '2026-02-10',
    readTime: 5,
    title: '如何快速搭建知识库？',
    desc: '详细介绍如何在 10 分钟内完成知识库的搭建和配置，让团队立即开始使用。',
    author: {
      avatar: '张',
      name: '张三'
    },
    likes: 256
  },
  {
    id: 2,
    icon: '🔌',
    badge: 'API 文档',
    date: '2026-02-08',
    readTime: 15,
    title: 'API 接口调用完整指南',
    desc: '从认证到实际调用，全方位讲解 API 的使用方法和最佳实践。',
    author: {
      avatar: '李',
      name: '李四'
    },
    likes: 189
  },
  {
    id: 3,
    icon: '🎯',
    badge: '最佳实践',
    date: '2026-02-05',
    readTime: 8,
    title: '企业知识管理最佳实践',
    desc: '分享行业领先企业的知识管理经验和成功案例，帮助您优化管理流程。',
    author: {
      avatar: '王',
      name: '王五'
    },
    likes: 167
  },
  {
    id: 4,
    icon: '🔐',
    badge: '安全指南',
    date: '2026-02-03',
    readTime: 12,
    title: '知识库安全配置全解析',
    desc: '详细介绍如何配置权限管理、数据加密等安全功能，保护企业知识资产。',
    author: {
      avatar: '赵',
      name: '赵六'
    },
    likes: 145
  },
  {
    id: 5,
    icon: '⚡',
    badge: '性能优化',
    date: '2026-02-01',
    readTime: 10,
    title: '知识库性能优化技巧',
    desc: '分享如何优化知识库的性能，提升检索速度和用户体验。',
    author: {
      avatar: '钱',
      name: '钱七'
    },
    likes: 132
  },
  {
    id: 6,
    icon: '🔄',
    badge: '集成方案',
    date: '2026-01-28',
    readTime: 20,
    title: '第三方系统集成方案',
    desc: '详细介绍如何将知识库与企业现有系统进行集成，实现数据互通。',
    author: {
      avatar: '孙',
      name: '孙八'
    },
    likes: 118
  }
])

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #0891b2;
  --secondary-color: #0e7490;
  --accent-color: #14b8a6;
  --success-color: #22c55e;
  --warning-color: #f59e0b;
  --dark-bg: #0f172a;
  --card-bg: #1e293b;
  --light-bg: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
}

body {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.7;
  color: var(--text-primary);
  background-color: var(--light-bg);
  overflow-x: hidden;
}

/* 导航栏 */
.navbar {
  background: white;
  padding: 15px 40px;
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
}

.logo {
  color: var(--primary-color);
  font-size: 26px;
  font-weight: 800;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 35px;
}

.nav-menu a {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu a:hover {
  color: var(--primary-color);
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-menu a:hover::after {
  width: 100%;
}

.search-box {
  display: flex;
  align-items: center;
  background: var(--light-bg);
  border-radius: 25px;
  padding: 10px 20px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.search-box:focus-within {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.search-box input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  width: 200px;
  color: var(--text-primary);
}

.search-box input::placeholder {
  color: var(--text-secondary);
}

.search-box button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 16px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--dark-bg) 0%, #1e3a5f 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 100px 40px 80px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 60%, rgba(8, 145, 178, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 40%, rgba(20, 184, 166, 0.1) 0%, transparent 50%);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  background: rgba(8, 145, 178, 0.15);
  color: var(--accent-color);
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  border: 1px solid rgba(8, 145, 178, 0.3);
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 25px;
  font-weight: 800;
  color: #333;
  line-height: 1.2;
}

.hero h1 span {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 20px;
  color: #333;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.hero-search {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.hero-search-input {
  width: 100%;
  padding: 20px 60px 20px 25px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  outline: none;
}

.hero-search-input:focus {
  box-shadow: 0 10px 40px rgba(8, 145, 178, 0.3);
}

.hero-search button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
}

.hero-search button:hover {
  transform: translateY(-50%) scale(1.1);
}

.hero-tags {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-tag {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-tag:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* 分类导航 */
.categories {
  padding: 80px 40px;
  background: white;
}

.categories-container {
  max-width: 1400px;
  margin: 0 auto;
}

.categories-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.categories-header h2 {
  font-size: 32px;
  font-weight: 800;
  color: var(--dark-bg);
}

.view-all {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
}

.view-all:hover {
  color: var(--secondary-color);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.category-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px 25px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  background: white;
  border-color: var(--primary-color);
  box-shadow: 0 10px 30px rgba(8, 145, 178, 0.15);
  transform: translateY(-5px);
}

.category-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 20px;
}

.category-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 700;
  color: var(--dark-bg);
}

.category-card p {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
}

.category-count {
  display: inline-block;
  background: rgba(8, 145, 178, 0.1);
  color: var(--primary-color);
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

/* 热门文章 */
.articles {
  padding: 80px 40px;
  background: var(--light-bg);
}

.articles-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 36px;
  font-weight: 800;
  color: var(--dark-bg);
  margin-bottom: 15px;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 16px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.article-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.article-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
}

.article-image::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.8;
}

/* 文章卡片背景色 */
.articles-grid :nth-child(1) .article-image { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.articles-grid :nth-child(2) .article-image { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.articles-grid :nth-child(3) .article-image { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.articles-grid :nth-child(4) .article-image { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.articles-grid :nth-child(5) .article-image { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.articles-grid :nth-child(6) .article-image { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }

.article-badge {
  /* position: absolute; */
  top: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dark-bg);
}

.article-content {
  padding: 25px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 12px;
  font-size: 13px;
  color: var(--text-secondary);
}

.article-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.article-content h3 {
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 700;
  color: var(--dark-bg);
  line-height: 1.5;
}

.article-content p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 15px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #e2e8f0;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}

.article-author-avatar {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.article-likes {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* 快速入门 */
.quick-start {
  padding: 80px 40px;
  background: white;
}

.quick-start-container {
  max-width: 1200px;
  margin: 0 auto;
}

.quick-start-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.quick-start-content h2 {
  font-size: 36px;
  font-weight: 800;
  color: var(--dark-bg);
  margin-bottom: 20px;
}

.quick-start-content p {
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.quick-start-steps {
  list-style: none;
}

.quick-start-steps li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  padding: 20px;
  background: var(--light-bg);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.quick-start-steps li:hover {
  background: rgba(8, 145, 178, 0.05);
  transform: translateX(5px);
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--dark-bg);
}

.step-content p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

.quick-start-visual {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 20px;
  padding: 40px;
  color: white;
  position: relative;
}

.quick-start-visual::before {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  filter: blur(20px);
}

.quick-start-visual h3 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 700;
}

.quick-start-visual p {
  opacity: 0.9;
  margin-bottom: 25px;
  line-height: 1.8;
}

.quick-start-btn {
  display: inline-block;
  background: white;
  color: var(--primary-color);
  padding: 14px 35px;
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quick-start-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* 统计数据 */
.stats {
  padding: 80px 40px;
  background: var(--dark-bg);
  color: white;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.stat-item h3 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-item p {
  opacity: 0.8;
  font-size: 15px;
}

/* 页脚 */
.footer {
  background: white;
  padding: 80px 40px 30px;
  border-top: 1px solid #e2e8f0;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 50px;
}

.footer-brand h3 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--dark-bg);
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.footer-links h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
  color: var(--dark-bg);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 15px;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid #e2e8f0;
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .hero h1 {
    font-size: 48px;
  }

  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .search-box {
    display: none;
  }

  .quick-start-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
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

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
