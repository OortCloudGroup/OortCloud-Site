<template>
  <div class="service-page">
    <!-- Banner区域 -->
    <section class="banner">
      <div class="banner-content">
        <div class="banner-text">
          <span class="tag">🤖 AI智能客服系统</span>
          <h1>智能客服<br />7×24小时在线</h1>
          <p>基于人工智能技术的新一代客服系统，自动应答、智能分流、精准服务。让每一次客户交互都变得高效、便捷、愉悦。</p>
        </div>
        <div class="banner-visual">
          <div class="chat-preview">
            <div class="chat-header">
              <div class="chat-avatar">
                🤖
              </div>
              <div class="chat-info">
                <h4>智能客服助手</h4>
                <span>在线 · 随时为您服务</span>
              </div>
            </div>
            <div class="chat-messages">
              <div class="message user">
                请问如何办理退款？
              </div>
              <div class="message bot">
                您好！办理退款需要登录账户后，进入"订单管理"页面，找到对应订单点击"申请退款"即可。需要我为您详细说明步骤吗？
              </div>
              <div class="typing-indicator">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="advantages" class="advantages">
      <div class="section-header">
        <h2>核心功能</h2>
        <p>我们提供全方位的智能客服解决方案，帮助企业降低成本、提升服务质量、增强客户满意度</p>
      </div>
      <div class="advantages-grid">
        <div class="advantage-card">
          <div class="advantage-icon">
            🧠
          </div>
          <h3>AI智能应答</h3>
          <p>基于自然语言处理技术，精准理解客户意图，提供专业、准确的解答，响应速度提升90%</p>
        </div>
        <div class="advantage-card">
          <div class="advantage-icon">
            ⏰
          </div>
          <h3>24小时在线</h3>
          <p>全天候不间断服务，随时响应客户咨询，让客户问题不再等待，提升客户体验</p>
        </div>
        <div class="advantage-card">
          <div class="advantage-icon">
            🎯
          </div>
          <h3>智能分流</h3>
          <p>自动识别问题类型，精准分配给相应客服或部门，提高问题处理效率</p>
        </div>
        <div class="advantage-card">
          <div class="advantage-icon">
            📊
          </div>
          <h3>数据分析</h3>
          <p>全面记录客户交互数据，生成多维度分析报告，为产品优化和决策提供依据</p>
        </div>
        <div class="advantage-card">
          <div class="advantage-icon">
            🌐
          </div>
          <h3>多渠道接入</h3>
          <p>支持网站、微信、APP、电话等多种渠道接入，统一管理，一站式服务</p>
        </div>
        <div class="advantage-card">
          <div class="advantage-icon">
            📚
          </div>
          <h3>知识库管理</h3>
          <p>智能知识库持续学习，不断优化应答内容，越用越聪明，服务质量不断提升</p>
        </div>
      </div>
    </section>

    <!-- 功能展示 -->
    <section id="features" class="features">
      <div class="section-header">
        <h2>强大功能，卓越体验</h2>
        <p>丰富的功能模块，满足企业全方位的客服需求</p>
      </div>
      <div class="feature-tabs">
        <div class="feature-tab" :class="{ active: activeTab === '智能问答' }" @click="activeTab = '智能问答'">
          智能问答
        </div>
        <div class="feature-tab" :class="{ active: activeTab === '人工客服' }" @click="activeTab = '人工客服'">
          人工客服
        </div>
        <div class="feature-tab" :class="{ active: activeTab === '工单管理' }" @click="activeTab = '工单管理'">
          工单管理
        </div>
        <div class="feature-tab" :class="{ active: activeTab === '客户画像' }" @click="activeTab = '客户画像'">
          客户画像
        </div>
        <div class="feature-tab" :class="{ active: activeTab === '质量监控' }" @click="activeTab = '质量监控'">
          质量监控
        </div>
      </div>
      <div class="feature-content">
        <div class="feature-visual">
          {{ tabIconMap[activeTab] }}
        </div>
        <div class="feature-text">
          <h3>{{ tabTitleMap[activeTab] }}</h3>
          <p>{{ tabDescMap[activeTab] }}</p>
          <ul class="feature-list">
            <li v-for="(item, index) in tabFeatureMap[activeTab]" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 服务场景 -->
    <section id="scenarios" class="scenarios">
      <div class="section-header">
        <h2>多样化服务场景</h2>
        <p>覆盖企业各类客服需求，提供专业、高效的解决方案</p>
      </div>
      <div class="scenarios-grid">
        <div class="scenario-card">
          <div class="scenario-icon">
            🛒
          </div>
          <h3>电商客服</h3>
          <p>商品咨询、订单查询、售后服务、退款处理，一站式电商客服解决方案</p>
        </div>
        <div class="scenario-card">
          <div class="scenario-icon">
            💳
          </div>
          <h3>金融客服</h3>
          <p>业务咨询、账户查询、风险提示、投诉建议，专业金融领域智能服务</p>
        </div>
        <div class="scenario-card">
          <div class="scenario-icon">
            🏥
          </div>
          <h3>医疗客服</h3>
          <p>预约挂号、健康咨询、用药指导、病历查询，贴心医疗服务助手</p>
        </div>
        <div class="scenario-card">
          <div class="scenario-icon">
            🎓
          </div>
          <h3>教育客服</h3>
          <p>课程咨询、学习辅导、作业答疑、教务服务，智能化教育服务平台</p>
        </div>
      </div>
    </section>

    <!-- 对比区域 -->
    <section class="comparison">
      <div class="section-header">
        <h2>传统客服 vs 智能客服</h2>
        <p>体验升级，效率倍增，成本降低</p>
      </div>
      <div class="comparison-content">
        <div class="comparison-card traditional">
          <h3>传统人工客服</h3>
          <ul class="comparison-list">
            <li>工作时间有限，客户等待时间长</li>
            <li>客服人员培训成本高，流动大</li>
            <li>重复性工作多，效率低下</li>
            <li>服务质量受人员素质影响大</li>
            <li>无法同时服务多个客户</li>
            <li>客服成本高昂</li>
          </ul>
        </div>
        <div class="comparison-card smart">
          <h3>AI智能客服</h3>
          <ul class="comparison-list">
            <li>7×24小时在线，客户无需等待</li>
            <li>一次部署，持续学习，成本低</li>
            <li>自动化处理，效率提升90%</li>
            <li>标准化服务，质量稳定可靠</li>
            <li>并发处理，同时服务万级客户</li>
            <li>大幅降低客服成本</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 激活的标签
const activeTab = ref('智能问答')
definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '概述'
  }
})
// 标签图标映射
const tabIconMap = {
  智能问答: '💬',
  人工客服: '👨‍💼',
  工单管理: '📋',
  客户画像: '👤',
  质量监控: '📌'
}

// 标签标题映射
const tabTitleMap = {
  智能问答: 'AI智能问答系统',
  人工客服: '人工客服协作平台',
  工单管理: '智能工单管理系统',
  客户画像: '360°客户画像分析',
  质量监控: '全流程质量监控'
}

// 标签描述映射
const tabDescMap = {
  智能问答: '基于深度学习的智能问答引擎，能够理解复杂的客户问题，提供精准的答案。支持多轮对话、上下文理解，让交流更加自然流畅。',
  人工客服: '高效的人工客服协作平台，支持在线聊天、转接、备注等功能，提升人工客服工作效率，优化客户服务体验。',
  工单管理: '全流程工单管理系统，自动创建、分配、跟踪工单，确保客户问题得到及时解决，提升服务闭环效率。',
  客户画像: '基于客户交互数据构建360°客户画像，精准识别客户需求，提供个性化服务，提升客户忠诚度。',
  质量监控: '全流程服务质量监控，实时检测客服对话质量，自动预警违规行为，保障服务标准化和合规性。'
}

// 标签功能列表映射
const tabFeatureMap = {
  智能问答: [
    '自然语言理解与语义分析',
    '支持多轮对话与上下文关联',
    '智能识别客户情绪与意图',
    '自动推荐相关帮助文档',
    '实时学习与知识库更新'
  ],
  人工客服: [
    '在线实时聊天与消息推送',
    '客服状态监控与智能分配',
    '快捷回复与知识库调用',
    '客户信息一键查看',
    '对话记录与复盘分析'
  ],
  工单管理: [
    '自动创建与智能分配工单',
    '工单状态实时跟踪与提醒',
    'SLA超时预警与处理',
    '多维度工单统计分析',
    '工单流转与协作审批'
  ],
  客户画像: [
    '客户基本信息整合',
    '交互行为轨迹分析',
    '需求偏好智能识别',
    '客户价值分层管理',
    '个性化服务推荐'
  ],
  质量监控: [
    '实时对话质检与评分',
    '敏感词自动检测与预警',
    '服务流程合规性检查',
    '客服绩效多维度分析',
    '质检结果整改跟踪'
  ]
}
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
  background-color: #f8f9fc;
}

/* Banner区域 */
.banner {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 650px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 700px;
  height: 700px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.banner::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.banner-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.banner-text {
  color: white;
}

.banner-text .tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 25px;
  backdrop-filter: blur(10px);
}

.banner-text h1 {
  font-size: 54px;
  margin-bottom: 25px;
  line-height: 1.2;
  font-weight: 700;
}

.banner-text p {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 35px;
  line-height: 1.8;
}

.banner-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: #4facfe;
  padding: 15px 35px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 15px 35px;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.3s, transform 0.3s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.banner-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-preview {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 480px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.chat-header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.chat-avatar {
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 15px;
}

.chat-info h4 {
  font-size: 16px;
  margin-bottom: 3px;
}

.chat-info span {
  font-size: 13px;
  opacity: 0.8;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message {
  max-width: 80%;
  padding: 12px 18px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.5;
}

.message.user {
  background: rgba(255, 255, 255, 0.25);
  align-self: flex-end;
  color: white;
  border-bottom-right-radius: 5px;
}

.message.bot {
  background: white;
  align-self: flex-start;
  color: #333;
  border-bottom-left-radius: 5px;
}

.typing-indicator {
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  align-self: flex-start;
  width: fit-content;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-8px);
  }
}

/* 核心优势 */
.advantages {
  padding: 100px 20px;
  background: #ffffff;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #333;
}

.section-header p {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
}

.advantages-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.advantage-card {
  background: #f8f9fc;
  padding: 45px 35px;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  background: white;
}

.advantage-icon {
  width: 85px;
  height: 85px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 38px;
}

.advantage-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
}

.advantage-card p {
  color: #666;
  font-size: 15px;
  line-height: 1.7;
}

/* 功能展示 */
.features {
  padding: 100px 20px;
  background: #f8f9fc;
}

.feature-tabs {
  max-width: 900px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.feature-tab {
  padding: 12px 28px;
  border: 2px solid #e8e8e8;
  border-radius: 30px;
  background: white;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.feature-tab.active,
.feature-tab:hover {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border-color: transparent;
}

.feature-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-visual {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 20px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 90px;
  box-shadow: 0 20px 60px rgba(79, 172, 254, 0.3);
}

.feature-text h3 {
  font-size: 36px;
  margin-bottom: 25px;
  color: #333;
}

.feature-text p {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
  color: #555;
}

.feature-list li::before {
  content: '✓';
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 15px;
  flex-shrink: 0;
}

/* 服务场景 */
.scenarios {
  padding: 100px 20px;
  background: #ffffff;
}

.scenarios-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.scenario-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 35px 25px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.scenario-card:nth-child(2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.scenario-card:nth-child(3) {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.scenario-card:nth-child(4) {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.scenario-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.scenario-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.scenario-card h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: white;
}

.scenario-card p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 1.6;
}

/* 数据展示 */
.data-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.data-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  text-align: center;
}

.data-item h3 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 10px;
}

.data-item p {
  font-size: 18px;
  opacity: 0.9;
}

/* 对比区域 */
.comparison {
  padding: 100px 20px;
  background: #f8f9fc;
}

.comparison-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.comparison-card {
  background: white;
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.comparison-card.traditional {
  border: 2px solid #e8e8e8;
}

.comparison-card.smart {
  border: 2px solid #4facfe;
  position: relative;
}

.comparison-card.smart::before {
  content: '推荐';
  position: absolute;
  top: -15px;
  right: 30px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 5px 20px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
}

.comparison-card h3 {
  font-size: 26px;
  margin-bottom: 30px;
  text-align: center;
}

.comparison-list {
  list-style: none;
}

.comparison-list li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
}

.comparison-list li::before {
  content: '✗';
  width: 26px;
  height: 26px;
  background: #ff6b6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 15px;
  flex-shrink: 0;
}

.comparison-card.smart .comparison-list li::before {
  content: '✓';
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

/* CTA区域 */
.cta-section {
  padding: 100px 20px;
  background: #ffffff;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #333;
}

.cta-content p {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-form {
  display: flex;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cta-form input {
  flex: 1;
  min-width: 250px;
  padding: 18px 25px;
  border: 2px solid #e8e8e8;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.cta-form input:focus {
  border-color: #4facfe;
}

.cta-form button {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 18px 40px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(79, 172, 254, 0.3);
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: white;
  padding: 60px 20px 30px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 50px;
}

.footer-brand h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 20px;
}

.footer-brand .social-icons {
  display: flex;
  gap: 15px;
}

.footer-brand .social-icons a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
}

.footer-brand .social-icons a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-column h4 {
  font-size: 18px;
  margin-bottom: 25px;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 15px;
}

.footer-column a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenarios-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .data-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .banner-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .banner-buttons {
    justify-content: center;
  }

  .feature-content {
    grid-template-columns: 1fr;
  }

  .feature-visual {
    order: -1;
  }

  .comparison-content {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .banner-text h1 {
    font-size: 36px;
  }

  .advantages-grid,
  .scenarios-grid,
  .data-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
