<template>
  <div class="blog-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-tag">
          📝 技术分享与见解
        </div>
        <h1>探索技术世界<br />分享创新思维</h1>
        <p>汇集前沿技术文章、深度行业分析和实用开发技巧，与开发者共同成长。</p>
      </div>
    </section>

    <!-- 精选文章 -->
    <section id="featured" class="featured">
      <div class="featured-container">
        <div class="section-header">
          <h2>精选文章</h2>
        </div>
        <div class="featured-article">
          <div class="featured-image">
            <span class="featured-badge">🔥 热门推荐</span>
            🚀
          </div>
          <div class="featured-content">
            <div class="featured-meta">
              <span>📅 2026-02-12</span>
              <span>⏱️ 12 分钟阅读</span>
              <span>👁️ 2,345 次浏览</span>
            </div>
            <h3>2026年前端开发趋势与最佳实践</h3>
            <p>深入分析2026年前端技术的发展方向，包括新兴框架、工具链优化、性能提升策略以及团队协作最佳实践。帮助开发者把握技术脉搏，提升开发效率。</p>
            <div class="featured-author">
              <div class="featured-author-avatar">
                张
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新文章 -->
    <section id="latest" class="latest">
      <div class="latest-container">
        <div class="section-header">
          <h2>最新文章</h2>
        </div>
        <div class="latest-grid">
          <div v-for="(article, index) in latestArticles" :key="index" class="article-card">
            <div class="article-thumb" :style="{ background: article.gradientBg }">
              <span class="article-cat">{{ article.category }}</span>
              {{ article.icon }}
            </div>
            <div class="article-body">
              <div class="article-meta">
                <span>📅 {{ article.date }}</span>
                <span>⏱️ {{ article.readTime }} 分钟</span>
              </div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.desc }}</p>
              <div class="article-footer">
                <div class="article-author">
                  <div class="article-author-avatar">
                    {{ article.authorAvatar }}
                  </div>
                  <span>{{ article.authorName }}</span>
                </div>
                <div class="article-stats">
                  <span>❤️ {{ article.likes }}</span>
                  <span>💬 {{ article.comments }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 主题分类 -->
    <section id="topics" class="topics">
      <div class="topics-container">
        <div class="section-header" style="justify-content: center; margin-bottom: 50px;">
          <h2>探索主题</h2>
        </div>
        <div class="topics-grid">
          <div v-for="(topic, index) in topics" :key="index" class="topic-card">
            <div class="topic-icon">
              {{ topic.icon }}
            </div>
            <h3>{{ topic.name }}</h3>
            <p>{{ topic.count }} 篇文章</p>
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

const latestArticles = ref([
  {
    category: '前端开发',
    date: '2026-02-10',
    readTime: 8,
    title: 'React 19 新特性深度解析',
    desc: '全面解析 React 19 带来的新功能和改进，包括并发特性优化、Server Components 增强等。',
    authorAvatar: '李',
    authorName: '李四',
    likes: 156,
    comments: 23,
    icon: '🎨',
    gradientBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    category: '后端架构',
    date: '2026-02-08',
    readTime: 10,
    title: '微服务架构设计模式与实践',
    desc: '分享微服务架构的核心设计模式，包括服务拆分策略、数据一致性方案等。',
    authorAvatar: '王',
    authorName: '王五',
    likes: 132,
    comments: 18,
    icon: '⚙️',
    gradientBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    category: '人工智能',
    date: '2026-02-05',
    readTime: 15,
    title: '大语言模型在企业中的应用',
    desc: '探讨如何将大语言模型技术应用到实际业务场景中，提升效率和智能化水平。',
    authorAvatar: '赵',
    authorName: '赵六',
    likes: 189,
    comments: 31,
    icon: '🤖',
    gradientBg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    category: 'DevOps',
    date: '2026-02-03',
    readTime: 7,
    title: 'Kubernetes 实战指南',
    desc: '从入门到实践，详细讲解 Kubernetes 的核心概念、部署和运维技巧。',
    authorAvatar: '钱',
    authorName: '钱七',
    likes: 108,
    comments: 15,
    icon: '🚀',
    gradientBg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    category: '数据库',
    date: '2026-02-01',
    readTime: 9,
    title: '分布式数据库选型指南',
    desc: '对比主流分布式数据库的特点和适用场景，帮助您做出最佳技术选型决策。',
    authorAvatar: '孙',
    authorName: '孙八',
    likes: 95,
    comments: 12,
    icon: '💾',
    gradientBg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    category: '安全',
    date: '2026-01-28',
    readTime: 11,
    title: 'Web 应用安全防护实践',
    desc: '总结常见的 Web 安全漏洞及防护措施，构建安全可靠的应用系统。',
    authorAvatar: '周',
    authorName: '周九',
    likes: 87,
    comments: 10,
    icon: '🔒',
    gradientBg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  }
])

// 主题分类数据
const topics = ref([
  { icon: '💻', name: '前端开发', count: 120 },
  { icon: '🖥️', name: '后端架构', count: 95 },
  { icon: '🤖', name: '人工智能', count: 78 },
  { icon: '☁️', name: '云计算', count: 65 },
  { icon: '🔒', name: '网络安全', count: 52 },
  { icon: '📱', name: '移动开发', count: 48 },
  { icon: '🔬', name: '数据科学', count: 43 },
  { icon: '🎯', name: '产品思维', count: 38 }
])

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #f472b6;
  --success-color: #34d399;
  --warning-color: #fbbf24;
  --dark-bg: #111827;
  --card-bg: #1f2937;
  --light-bg: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
}

.blog-container {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.7;
  color: var(--text-primary);
  background-color: var(--light-bg);
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 140px 40px 100px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #6366f1;
  opacity: 0.5;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-tag {
  display: inline-block;
  /* background: rgba(255, 255, 255, 0.2); */
  color: #333;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  border: 1px solid #333;
}

.hero h1 {
  font-size: 52px;
  margin-bottom: 20px;
  font-weight: 800;
  color: #333;
  line-height: 1.2;
}

.hero p {
  font-size: 20px;
  color: #333;
  margin-bottom: 35px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
}

.hero-stat {
  text-align: center;
}

.hero-stat .number {
  font-size: 36px;
  font-weight: 800;
  color: #333;
}

.hero-stat .label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
}

/* 精选文章 */
.featured {
  padding: 80px 40px;
  background: white;
}

.featured-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 800;
  color: var(--text-primary);
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

.featured-article {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  background: var(--light-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.featured-image {
  height: 100%;
  min-height: 400px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  position: relative;
}

.featured-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 50%);
}

.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--primary-color);
  z-index: 2;
}

.featured-content {
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--text-secondary);
}

.featured-meta span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.featured-content h3 {
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.4;
}

.featured-content p {
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.featured-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.featured-author-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}

.featured-author-info h4 {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
}

.featured-author-info p {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 0;
}

/* 最新文章 */
.latest {
  padding: 80px 40px;
  background: var(--light-bg);
}

.latest-container {
  max-width: 1400px;
  margin: 0 auto;
}

.latest-grid {
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
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.article-thumb {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  position: relative;
  overflow: hidden;
}

.article-cat {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

.article-body {
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
  gap: 4px;
}

.article-body h3 {
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.5;
}

.article-body p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #e5e7eb;
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
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  font-weight: 700;
}

.article-stats {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* 主题分类 */
.topics {
  padding: 80px 40px;
  background: white;
}

.topics-container {
  max-width: 1200px;
  margin: 0 auto;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.topic-card {
  text-align: center;
  padding: 35px 25px;
  background: #f9fafb;
  border-radius: 16px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.topic-card:hover {
  background: white;
  border-color: var(--primary-color);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
  transform: translateY(-5px);
}

.topic-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto 20px;
}

.topic-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.topic-card p {
  font-size: 14px;
  color: var(--text-secondary);
}

/* 订阅区域 */
.newsletter {
  padding: 100px 40px;
  background: linear-gradient(135deg, var(--dark-bg) 0%, #1f2937 100%);
  color: white;
}

.newsletter-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.newsletter h2 {
  font-size: 40px;
  margin-bottom: 15px;
  font-weight: 800;
}

.newsletter p {
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 40px;
}

.newsletter-form {
  display: flex;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 16px 25px;
  border-radius: 30px;
  border: none;
  font-size: 15px;
  outline: none;
}

.newsletter-button {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 16px 35px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
}

/* 页脚 */
.footer {
  background: white;
  padding: 80px 40px 30px;
  border-top: 1px solid #e5e7eb;
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
  color: var(--text-primary);
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

.footer-social {
  display: flex;
  gap: 12px;
}

.footer-social a {
  width: 40px;
  height: 40px;
  background: var(--light-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

.footer-social a:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

.footer-links h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
  color: var(--text-primary);
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
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .hero h1 {
    font-size: 44px;
  }

  .latest-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .featured-article {
    grid-template-columns: 1fr;
  }

  .featured-image {
    min-height: 300px;
  }

  .topics-grid {
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

  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }

  .latest-grid {
    grid-template-columns: 1fr;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
