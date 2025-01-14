<template>
  <main class="container">
    <header class="b_m_t_one">
      <div class="b_m_t_one_body">
        <span class="b_m_t_oneb">智慧新警务</span>
        <div class="b_m_t_onec">
          <span class="b_m_t_oned">
            我们以科技倒逼改革，倾力打造智慧警务，努力实现警务转型升级、人民群众满意、队伍活力迸发的叠加效应。
            主动适应云计算、互联网、人工智能等现代科技发展趋势，以“AI+新警务”建设为牵引，以大数据应用为核心，全面启动新一轮改革创新。
          </span>
        </div>
      </div>
    </header>
    <section class="section">
      <h1>一体化解决方案</h1>
      <img style="width: 55%; object-fit: contain;" src="/img/police_solve/solve.png" alt="" />
    </section>
    <section class="section bg">
      <h1>智慧新警务系统介绍</h1>
      <img style="width: 54%; object-fit: contain;" src="/img/police_solve/intro.png" alt="" />
    </section>
    <section class="section">
      <h1>先进的技术理念-微服务架构</h1>
      <img style="width: 41%; object-fit: contain;" src="/img/police_solve/theory.png" alt="" />
    </section>
    <section class="section_last">
      <div>
        <img style="width: 28%; object-fit: contain;" src="/img/police_solve/step1.png" alt="" />
        <img style="width: 5.2%; object-fit: contain;" src="/img/police_solve/arrow_right.png" alt="" />
        <img style="width: 28%; object-fit: contain;" src="/img/police_solve/step2.png" alt="" />
      </div>
      <h1>打通警务各部门的沟通渠道，实现数据共享</h1>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'bottom-layout'
})
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
}
.b_m_t_one {
  width: 100%;
  background-image: url("/img/home/bg_2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  //background-size: revert;
  //background-repeat: round;
  height: 450px;
  filter: progid:DXImageTransform.Microsoft.alphaImageLoader(src='img/programdetails.png',sizingMethod='scale');
}
.b_m_t_one_body{
  width: 90%;
  margin: auto;
  /* padding: 5rem 0rem; */
  /* padding: 8rem 12rem; */
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  height: auto;
  padding-top: 6rem;

}
.b_m_t_oneb {
  font-family: MicrosoftYaHei;
  font-size: 40px;
  color: #FFFFFF;
  letter-spacing: 0;

}
.b_m_t_onec{
  height: 42px;
  width: 544px;
  margin-top: 25px;
  /*text-indent: 2em;*/
}
.b_m_t_oned{
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 1px;
  line-height: 2rem;
}
.section {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.bg {
  width: 100%;
  background-image: url("/img/police_solve/intro_bg.png");
  /*background-size: cover;*/
  /*background-repeat: no-repeat;*/
  background-size: revert;
  background-repeat: round;
  height: 780px;
  filter: progid:DXImageTransform.Microsoft.alphaImageLoader(src='img/programdetails.png',sizingMethod='scale');
}
.section h1 {
  margin-bottom: 40px;
  font-size: 30px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  font-weight: 700;
}
.section_last {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FBFBFB;
  box-sizing: border-box;
}
.section_last h1 {
  margin-top: 40px;
  font-size: 28px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 600;

}
.section_last>div {
  display: flex;
  justify-content: center;
}
</style>
