<template>
  <div class="page_container">
    <ProductHeader
      :logo="headerContent.logo"
      :name="headerContent.name"
      :title="headerContent.title"
      :excerpt="headerContent.excerpt"
      :buttons="headerContent.buttons"
      :swipes="headerContent.swipes"
      :is-swiper="false"
    />

    <div class="page_main">
       <!-- 分类 -->
      <div class="automation_classify">
        <div class="automation_classify_item">
          <p class="classify_title">局域网部署</p>
          <div class="classify_text">系统只需局域网内部署即可，无需链接外网。数据与硬件均采用本地化部署，安全性较高。</div>
        </div>
        <div class="automation_classify_item">
          <p class="classify_title">稳定可靠框架</p>
          <div class="classify_text">系统以高效且成熟可靠的技术框架设计研发，久经考验，运行稳定；无自带数据，确保原系统数据安全。</div>
        </div>
        <div class="automation_classify_item">
          <p class="classify_title">现有流程的辅助</p>
          <div class="classify_text">系统是针对公积金现有业务流程办理的辅助系统，无需对业务做任何调整，无需提供接口。操作简单便捷。</div>
        </div>
      </div>

      <!-- 多条件触发 -->
      <div class="condition_trigger">
        <h3 class="trigger_titel">多条件触发</h3>
        <p class="trigger_content">涉及贷款、归集、户管等相关审批流程业务</p>
        <img class="trigger_img" src="/img/product/auto_process/condition_trigger.png" alt="">
      </div>


      <!-- 项目优势 -->
      <div class="project_advantage">
        <h3 class="advantage_titel">项目优势</h3>
        <img class="project_advantage_img" src="/img/product/auto_process/project_advantage.png" alt="">
      </div>

      <!-- description -->
      <div class="description">
        <img class="description_img" src="/img/product/auto_process/ic_start.png" alt="">
        <div class="description_item_top">
          <p class="description_text_fc description_item_opertion">自动化业务流程操作</p>
          <p class="description_text_fc description_item_import">自动导入</p>
        </div>
        <div class="description_item_center">
          <p class="description_text_fc description_item_pproval">自动化审批</p>
          <p class="description_text_fc description_item_judge">多条件判断</p>
        </div>
        <div class="description_item_top">
          <p class="description_text_fc description_item_compare">自动化数据对比</p>
          <p class="description_text_fc description_item_guard">无人看守</p>
        </div>
        <div class="description_item_center">
          <p class="description_text_fc description_item_input">自动数据填写</p>
          <p class="description_text_fc description_item_discern">信息识别</p>
        </div>
        <div class="description_end">
          <img class="description_img" src="/img/product/auto_process/ic_end.png" alt="">
        </div>
      </div>
     </div>

    <!-- 服务支持 -->
    <ProductSupport v-if="support" :name="support.name" :link="support.link" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product"
})

const headerContent = ref({
  logo: '/img/product/auto_process/automation.png',
  name: '流程自动化',
  title: '流程自动化',
  excerpt: '借用安全可靠的AI智能技术模拟工作人员的日常业务操作中遇到的流程繁琐、易出错、重复性高、考核力度大、业务量大等难题，从而实现业务办事自动化，减轻一线工作人员的工作压力。',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/174bd256-4011-4988-89d8-d72c47e6741c#productid=OFFI698082226463612928'
    // }
  ],
  swipes: [
    '/img/product/auto_process/process.png'
  ]
})
const support = ref(null)
</script>

<style scoped>
.page_main {
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
}
.automation_classify{
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-column-gap: 20px;
  box-sizing: border-box;
}
.automation_classify_item{
    height: 260px;
    background-image: url('/img/product/auto_process/classfy_item.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.classify_title{
    display: flex;
    align-items: center;
    height: 86px;
    font-size: 24px;
    color: #051261;
    font-weight: 700;
    margin-left: 20px;
}
.classify_text{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(260px - 86px);
    font-size: 16px;
    color: #506079;
    font-weight: 400;
    padding: 0px 20px;
    box-sizing: border-box;
}
/* 自动化分类结束 */

/* 多条件触发 */
.condition_trigger{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 160px;
}
.trigger_titel{
    font-size: 46px;
    color: #051261;
    letter-spacing: 4.45px;
    font-weight: 600;
}
.trigger_content{
    font-size: 28px;
    color: #56667E;
    letter-spacing: 2.71px;
    font-weight: 400;
    margin: 20px 0 60px;
}
.trigger_img{
    width: 644px;
    object-fit: contain;
}
/* 多条件触发结束 */

/* 项目优势 */
.project_advantage{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 160px;
}
.advantage_titel{
    font-size: 46px;
    color: #051261;
    letter-spacing: 4.45px;
    font-weight: 600;
    margin-bottom: 60px;
}
.project_advantage_img{
    width: 800px;
    object-fit: contain;
    margin-bottom: 100px;
}
/* 项目优势结束 */

/* 描述模块 */
.description{
    display: grid;
    grid-template-columns: repeat(6,auto);
    grid-column-gap: 20px;
    min-height: 250px;
    margin-bottom: 100px;
}
.description_img{
    width: 60px;
    object-fit: contain;
}
.description_end{
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
.description_item_center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.description_item_top{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.description_text_fc{
    color: #051261;
}

.description_item_opertion{
    font-size: 32px;
    letter-spacing: 3.1px;
    font-weight: 600;
    margin-top: 11px;
}
.description_item_import{
    font-size: 28px;
    letter-spacing: 2.71px;
    margin: 69px 0 0 60px;
}
.description_item_pproval{
    font-size: 24px;
    letter-spacing: 2.32px;
    font-weight: 400;
    margin-top: 40px;
}
.description_item_judge{
    font-size: 36px;
    letter-spacing: 2px;
    font-weight: 600;
    margin-top: 90px;
}
.description_item_compare{
    font-size: 28px;
    letter-spacing: 2.71px;
    font-weight: 600;
    margin-top: 11px;
}
.description_item_guard{
    font-size: 28px;
    letter-spacing: 2.71px;
    font-weight: 400;
    margin: 69px 0 0 8px;
}
.description_item_input{
    font-size: 28px;
    letter-spacing: 2.71px;
    font-weight: 800;
    margin-top: 40px;
}
.description_item_discern{
    font-size: 24px;
    letter-spacing: 2.32px;
    font-weight: 700;
     margin-top: 90px;
}
/* 描述模块结束 */
</style>