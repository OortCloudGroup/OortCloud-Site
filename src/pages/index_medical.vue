<template>
  <div class="page_container">
    <div class="b_m_t_one">
      <div class="b_m_t_one_body">
        <span class="b_m_t_oneb">智慧基础医疗</span>
        <div class="b_m_t_onec">
                <span class="b_m_t_oned">
                    通过安全、可靠的云平台为医院、互联网医疗企业的业务提供稳定支撑，通过安全屋、人工智能等服务对数据进行分析、
                    对医疗影像等进行辅助诊断。
                </span>
        </div>
        <!--        <div class="b_m_t_onee" >-->
        <!--            <span class="b_m_t_onef">咨询客服</span>-->
        <!--        </div>-->
      </div>

    </div>

    <!--<div id="tab_head" class="tab_head">-->
    <!--    <div id="lablea">-->
    <!--        <span id="tab1" onclick="changeTab1();toTop()" class="selected">核心优势</span>-->
    <!--        <span id="tab2" onclick="changeTab2();toTop()">产品功能</span>-->
    <!--        <span id="tab3" onclick="changeTab3();toTop()">方案架构</span>-->
    <!--    </div>-->
    <!--</div>-->
    <div class="tab_content">
      <div id="c1" class="show">
        <div class="b_m_t_tree">
          <span class="b_m_t_treea">核心优势</span>
          <div class="b_m_t_treeb">
            <div class="b_m_t_treec">
              <img src="/img/linghuo.png" style="width: 70px;height: 70px">
              <span class="b_m_t_treed">强大的技术优势</span>
              <span class="b_m_t_treef">
                        依托奥尔特云的基础设施能力、人才优势与图像识别、大数据、人工智能等技术积累，助力医疗大健康产业智慧化升级。
                    </span>
            </div>
            <div class="b_m_t_treec">
              <img src="/img/kekao.png" style="width: 70px;height: 70px">
              <span class="b_m_t_treed">丰富的产品及解决方案</span>
              <span class="b_m_t_treef">
                        整合奥尔特云、奥陌陌、视频和支付等产品及合作伙伴的产品服务，提供全行业、全流程的医疗大健康解决方案。
                    </span>
            </div>
            <div class="b_m_t_treec">
              <img src="/img/jekou.png" style="width: 70px;height: 70px">
              <span class="b_m_t_treed">强大的连接能力</span>
              <span class="b_m_t_treef">
                        基于互联网技术与服务，建立机构与机构之间、机构与用户之间的强连接，助力全方位、全生命周期的大健康产业发展。
                    </span>
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
                <span class="b_m_t_fourd">面向管理者的大数据分析服务</span>
                <ul class="b_m_t_fourf">
                  <li>· 医疗服务统计分析及监督管理应用</li>
                  <li>· 公共卫生服务统计分析及监督管理应用</li>
                  <li>· 区域协同医疗卫生信息数据整合分析及监督管理应用</li>
                  <li>· 海量数据分析、AI辅助服务</li>
                </ul>

              </div>
              <div class="b_m_t_fourc">
                <span class="b_m_t_fourd">面向管理者的大数据分析服务</span>
                <ul class="b_m_t_fourf">
                  <li>· 云存储</li>
                  <li>· 云虚拟主机</li>
                  <li>· 云物理主机用</li>
                  <li>· 云网络</li>
                </ul>
              </div>
            </div>
            <div class="b_m_t_fourb_item div2_ie78">
              <div class="b_m_t_fourc">
                <span class="b_m_t_fourd">面向居民的健康管理服务</span>
                <ul class="b_m_t_fourf">
                  <li>· 虚拟健康卡</li>
                  <li>· 健康管理</li>
                  <li>· 健康资讯</li>
                </ul>

              </div>
              <div class="b_m_t_fourc">
                <span class="b_m_t_fourd">面向中小型医疗机构的云应用服务</span>
                <ul class="b_m_t_fourf">
                  <li>· 基本诊疗</li>
                  <li>· 基本公卫</li>
                  <li>· 家医签约</li>
                  <li>· 健康扶贫</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="c3">
        <div class="b_m_t_five">
          <span class="b_m_t_fivea">方案架构</span>
          <img src="/img/jigou.png" style="height: 100% ; width: 100%">
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
.b_m_t_one {
  width: 100%;
  background-image: url("/img/programdetails.png");
  /*background-size: cover;*/
  /*background-repeat: no-repeat;*/
  background-size: revert;
  background-repeat: round;
  height: 450px;
  filter: progid:DXImageTransform.Microsoft.alphaImageLoader(src='imgs/programdetails.png',sizingMethod='scale');
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