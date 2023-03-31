<template>
  <div class="page_container">
    <div class="b_m_t_one_security">
      <div class="b_m_t_one_body">
        <span class="b_m_t_oneb">公安行业解决方案</span>
        <div class="b_m_t_onec">
          <span class="b_m_t_oned">以基层警务需求为导向，以提高警务工作效率、警务处理能力、民生服务水平为目标，从办案、办公、办事、社区管理和辖区总览等方面，着力打造的“全新基层警务工作模式”。</span>
        </div>
      </div>
    </div>

    <div class="tab_content">
      <div id="c1" class="show">
        <div class="b_m_t_tree">
          <span class="b_m_t_treea">核心优势</span>
          <div class="b_m_t_treeb">
            <div class="b_m_t_treec">
              <img src="/img/linghuo.png" style="width: 70px;height: 70px">
              <span class="b_m_t_treed">互联网接处警</span>
              <span class="b_m_t_treef">通过移动端APP打造高效、快捷的基层警务网络。</span>
            </div>
            <div class="b_m_t_treec">
              <img src="/img/kekao.png" style="width: 70px;height: 70px">
              <span class="b_m_t_treed">办案区管理</span>
              <span class="b_m_t_treef">通过虹膜设备、人身监测、将入区登记，人身检查、信息采集、侯问管理、讯 / 询问管理、出区登记等整个流程形成闭环，实现办案审讯流程和执法管理流程标准化、规范化。</span>
            </div>
            <div class="b_m_t_treec">
              <img src="/img/jekou.png" style="width: 70px;height: 70px">
              <span class="b_m_t_treed">社区管理</span>
              <span class="b_m_t_treef">全方位社区数据实时采集，对人员、车辆、楼栋进行远程巡视，与社区安保队伍建立视频对话形式的便捷沟通路径，着力解决基层警力不足、难以应对众多社区管理的难题。</span>
            </div>
          </div>
        </div>
      </div>
      <div id="c2">
        <div>
          <span class="b_m_t_foura">产品功能</span>
          <div class="b_m_t_fourb">
            <div class="b_m_t_fourb_item div1_ie78">
              <div class="b_m_t_fourc">
                <span class="b_m_t_fourd">公安资源融合</span>
                <span class="b_m_t_fourf">公安大数据资源融合服务平台支持可视化的数据治理，可实现数据治理过程的动态配置与自动化运行，可基于公安数据标准实现数据的深度关联融合，并建立立体式、多层次、实战化的数据资源组织能力，并提供数据共享和服务保障，从而为上层应用提供可靠的数据支撑。</span>
              </div>
              <div class="b_m_t_fourc">
                <span class="b_m_t_fourd">智慧社区</span>
                <span class="b_m_t_fourf">智慧社区综合应用系统基于大数据、人工智能等相关技术，通过对所辖社区内“人、车、物、房、场所”等前端要素数据的汇聚、治理、挖掘、分析，实现对公共安全和社会治安风险隐患的泛在感知、多维研判，有效支撑各个警种业务系统及智慧城市的应用，打造新型扁平化公安治理社会新生态。</span>

              </div>
            </div>
            <div class="b_m_t_fourb_item div2_ie78">
              <div class="b_m_t_fourc">
                <span class="b_m_t_fourd">刑事案件智能侦破</span>
                <span class="b_m_t_fourf">聚焦公安刑事案件分析、研判，线索挖掘业务，利用多时期多警种多系统的案件数据、多维度多行业多级别的人员数据、高精时空轨迹数据，以自然语言处理为核心技术，打通已破案件的知识库与未破案件侦破之间的线索桥梁，形成真正的刑侦线索挖掘闭环，真正为提升破案率而服务。</span>

              </div>
              <div class="b_m_t_fourc">
                <span class="b_m_t_fourd">可视化建模平台</span>
                <span class="b_m_t_fourf">可视化建模平台是定位于让普通业务民警就能够构建模型的平台，用户只需要懂业务，就可使用平台中整合的各类业务数据、模型工厂中的算子与平台封装好业务算法，构建出各类实战业务模型，实现“数据驱动业务”降低建模门槛，缩短建模及投产周期，深挖大数据价值。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="c3">
        <div class="b_m_t_five">
          <span class="b_m_t_fivea">方案架构</span>
          <img src="/img/jiagou2.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'bottom-layout'
})
</script>

<style scoped>
.b_m_t_one_security{
  width: 100%;
  background-image: url("/img/programdetail.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 450px;
  height: auto;
  filter: progid:DXImageTransform.Microsoft.alphaImageLoader(src='/img/programdetail.png',sizingMethod='scale');
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
.tab_content {
  width: 100%;
  height: auto;
  min-height: 200px;
}
.b_m_t_tree{
  height: 20%;
  /*height: 500px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.b_m_t_treea{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SourceHanSansCN-Medium;
  font-size: 30px;
  color: #161C43;
  letter-spacing: 0;
  text-align: center;
  /*margin-top: 74px;*/
  margin-top: 52px;
  margin-bottom: 40px;
}
.b_m_t_treeb{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  /*align-items: self-start;*/
  align-items: baseline;
  flex-direction:row;
  flex-wrap: wrap;
  max-width: 1240px;
}
.b_m_t_treec{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  /*height: 287px;*/
  width: 30% ;
  height: auto;
  margin-right: 36px;
  /*padding-bottom: 4rem;*/
}
.b_m_t_treed{
  font-family: MicrosoftYaHeiSemibold;
  font-size: 22px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  margin-top: 37px;
}
.b_m_t_treef{
  font-family: MicrosoftYaHeiSemibold;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0;
  text-align: justify;
  height: auto;
  width: 335px;
  margin-top: 24px;
  line-height: 30px;
  display: block;
  /*text-indent: 2em;*/
}
.b_m_t_foura{
  color: #161C43;
  font-family: SourceHanSansCN-Medium;
  font-size: 30px;
  letter-spacing: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 143px;
}
.b_m_t_fourb{
  background: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  /*flex-wrap: wrap;*/
  /*margin-top: 79px;*/
  margin-bottom: 79px;
  flex-direction: column;
}
.b_m_t_fourb_item{
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  max-width: 1240px;
}

.b_m_t_fourc{
  background-image: url("/img/bianzhu3.png");
  background-size: auto;
  background-repeat: round;
  height: 156px;
  width: 580px;
  border: 1px solid #EBEBEB;
  margin: 15px;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items:self-start;
  flex-direction: column;
  padding: 1rem;
  /*注意：src 的；路径为绝对路径 ，不能是相对路径 （此处的src就是图片注册时的路径）  */
  filter: progid:DXImageTransform.Microsoft.alphaImageLoader(src='/img/bianzhu3.png',sizingMethod='scale');
}
.b_m_t_fourd{
  font-family: MicrosoftYaHeiSemibold;
  font-size: 20px;
  color: #282828;
  letter-spacing: 0;
}

.b_m_t_fourf{
  opacity: 0.6;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  line-height: 1.5rem;
  padding-top: 1rem;
  display: block;
  /*text-indent: 2em;*/
}

.b_m_t_five{
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding-bottom: 2rem;
  max-width: 1240px;
  width: 90%;
  margin: auto;
}
.b_m_t_fivea{
  font-family: SourceHanSansCN-Medium;
  font-size: 30px;
  color: #161C43;
  letter-spacing: 0;
  text-align: center;
  /*margin-top: 47px;*/
  margin-top: 19px;
  margin-bottom: 40px;
}
.b_m_t_five img{
  width: 90%;
  height: 100%;
}
</style>