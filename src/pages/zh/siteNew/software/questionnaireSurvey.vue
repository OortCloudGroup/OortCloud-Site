<template>
  <div class="home_page vls">
    <div class="blueBg">
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            问卷调查
          </div>
          <div class="cl_t_d">
            问卷调查·考试测评·投票评选·收集表单
          </div>
          <div class="flexRowAC useBox flexJSSta">
            <div class="seeMore">
              立即试用
            </div>
            <div class="seeMore red">
              立即购买
            </div>
            <div class="seeMore u1">
              安排演示
            </div>
          </div>
        </div>
        <img class="cloudAlbum_bg" src="@/assets/software/questionnaireSurvey/wjdc_bg.png" alt="" />
      </div>
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/问卷调查.mp4" controls autoplay muted />
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_l_w">
          在线问卷调查
        </div>
        <div class="cl_l_w_d">
          支持Word极速导入，海量问卷模板可引用 提供丰富的调研题型，并可自定义品牌形象
        </div>
      </div>
      <img class="cloudMemo_img1" src="@/assets/software/questionnaireSurvey/wjdc_zxwjdc_bg.png" alt="" />
    </div>
    <div class="w1380 CloudBox ipcBox flexRowAC">
      <img class="cloudMemo_img1" src="@/assets/software/questionnaireSurvey/wjdc_xskscp_bg.png" alt="" />
      <div class="CloudL R">
        <div class="cl_r_w">
          线上考试测评
        </div>
        <div class="cl_l_w_d">
          支持文本、Excel极速导入，海量考试题库可引用，为考试定制的专属题型，轻松查看排行榜、成绩单或错题解析
        </div>
      </div>
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_l_w">
          信息收集表单
        </div>
        <div class="cl_l_w_d">
          完美支持信息、图片与文件收集可实时查看收集进度
        </div>
      </div>
      <img class="cloudAlbum_bg" src="@/assets/software/questionnaireSurvey/wjdc_xxsjbd_bg.png" alt="" />
    </div>
    <div class="w1380 CloudBox ipcBox flexRowAC">
      <img class="cloudMemo_img1" src="@/assets/software/questionnaireSurvey/wjdc_tppx_bg.png" alt="" />
      <div class="CloudL R">
        <div class="cl_r_w">
          投票评选
        </div>
        <div class="cl_l_w_d">
          强大技术保障千万级投票丝滑稳定，支持实时排名与拉票传播
        </div>
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        现在开始体验
      </div>
      <div class="flexRowAC productItem">
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1_.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            SaaS版本
            <span class="pro1_1_s_b">14天功能全免费试用</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            7天快速迭代，问题敏捷解决
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            快速启用，精简运维
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            更低建设成本
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            私有化部署
            <span class="pro1_1_s_b">1v1 定制方案量身打造</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            1v1 专家服务，定制化解决方案
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            本地化灵活部署，私有化数据存储
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            高可用架构与完备容灾方案
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--资料下载-->
    <div class="productBox w1380">
      <div class="proT">
        资料下载
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class="product2Out_it flexRowAC">
          <div class="pro2o_l flexRowAC">
            <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />
            产品文档.pdf
          </div>
          <div class="pro2o_2" @click="downloadPDF">
            下载
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'application'
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/产品文档.pdf'
  link.download = '产品文档.pdf'
  link.click()
}
</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;

  &.w1200 {
    width: 1200px;
  }
}

.useBox {
  justify-content: center;
  gap: 20px;

  .seeMore {
    padding: 24px 50px;
    color: #fff;
    border: 1px solid #2278FF;
    border-radius: 8px;
    background: #2278FF;
    //box-shadow: 0px 4px 10px 0px #FF5E1033;
    font-weight: bold;
    font-size: 18px;
  }

  .u1 {
    color: #333;
    background-color: #F4F4F4;
    border: 1px solid #F4F4F4;
  }

  .red {
    color: #ED2121;
    background-color: transparent;
    border: 1px solid #ED2121;
  }

  .seeMore.u2 {
    display: flex;
    gap: 10px;
    border: 1px solid #333;
    background-color: #333;

    .u2_img {
      width: 28px;
      height: 26px;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.webBottomImg {
  padding-bottom: 160px;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;

  .cl_t {
    padding-top: 30px;
    padding-bottom: 20px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 78px;
    .cl_t_b{
      color: #2278FF;
    }
  }

  .cl_l_w{
    width: 464px;
    font-weight: 700;
    font-size: 58px;
    color: #333333;
    line-height: 88px;
    text-align: left;
    height: auto;
    margin-bottom: 20px;
  }

  .cl_l_w_d{
    width: 460px;
    font-size: 24px;
    color: #717781;
    line-height: 36px;
    text-align: left;
  }

  .cl_r_w{
    width: 348px;
    font-weight: 700;
    font-size: 58px;
    color: #333333;
    line-height: 88px;
    text-align: left;
    margin-bottom: 28px;
  }

  .cl_t_d{
    width: 580px;
    height: 60px;
    font-size: 20px;
    color: #717781;
    line-height: 30px;
    text-align: left;
    margin-bottom: 24px;
  }

  .cl_d {
    width: 460px;
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    padding-top: 60px;
  }

  .CloudR{
    margin-left: auto;
  }

  .CloudL,.CloudR{
    .cl_d_t{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .cl_d_t_img{
        width: 48px;
        height: 48px;
        margin-right: 16px;
      }
      .cl_d_t_title{
        white-space: nowrap;
        height: 36px;
        font-weight: 700;
        font-size: 32px;
        color: #3D3D3D;
        line-height: 36px;
        text-align: left;
      }
    }
    .cl_d_c{
      width: 460px;
      height: 72px;
      font-size: 24px;
      color: #717781;
      line-height: 36px;
      text-align: left;
    }
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT {
    padding-bottom: 60px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
  }

  .prod {
    padding-bottom: 60px;
    color: #717781;
    font-size: 20px;
  }

  .productImg {
    width: 100%;
    height: 600px;
    padding-bottom: 60px;

    .proImg {
      width: 100%;
      height: 100%;
    }
  }

  .product1 {
    text-align: left;
    color: #fff;
    width: auto;
    height: 510px;
    background-color: #fff;
    border-radius: 24px;
    background: linear-gradient(135deg, #0C1F40 0%, #252734 98%);
    padding: 40px;

    .pro1_1 {
      width: 46px;
      height: 48px;
      margin-bottom: 46px;
    }

    .pro1_1_s {
      padding-bottom: 50px;
      gap: 12px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;

      .pro1_1_s_b {
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 4px;
        border: 0.5px solid #FFFFFF;
        padding: 4px 10px;
      }
    }

    .pro1_2 {
      gap: 12px;
      padding-bottom: 30px;

      .pro1_2_i {
        width: 16px;
        height: 16px;
      }
    }

    .pro3 {
      padding-top: 35px;
      gap: 30px;

      .pro3_btn {
        flex: 1;
        padding: 20px 0;
        justify-content: center;
        background-color: #fff;
        border-radius: 4px;
        color: #333;
        font-weight: bold;
        font-size: 18px;
      }

      .pro3_btn.p3b {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  .product2Out {
    padding-bottom: 0;
    height: 220px;
    justify-content: center;
    background-image: url('@/assets/software/downloadBG.png');
    background-size: 100% 100%;

    .product2Out_it {
      opacity: 1;
      color: #333333;
      font-size: 16px;

      .pro2o_l {
        padding-left: 12px;
        width: 600px;
        height: 54px;
        background-color: #F0F0F0;

        .pro2o_l_l {
          width: 34px;
          height: 34px;
          margin-right: 12px;
        }
      }

      .pro2o_2 {
        cursor: pointer;
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
    }
  }

  .product3Out.productImg {
    height: initial;
    margin-bottom: 60px;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;

    .p3Box {
      justify-content: space-between;

      .p3 {
        width: 358px;
        height: 170px;
      }
    }

    .p3_title {
      padding-top: 40px;
      text-align: left;
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .ps_desc {
      padding-top: 16px;
      padding-left: 60px;
      width: 900px;
      color: #3D3D3D;
      font-size: 20px;
      text-align: left;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        top: 26px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #333;
      }
    }
  }

  .p4Out {
    width: auto;
    height: 870px;
  }

  .p5Out {
    flex-wrap: wrap;
    gap: 40px;

    .p5Item {
      padding: 50px 0;
      flex-direction: column;
      border-radius: 40px;
      background: #FFFFFF;
      box-shadow: 0px 0px 48px 0px #07005714;
      width: 300px;
      height: 300px;
      flex-shrink: 0;
      gap: 10px;
      position: relative;
    }

    .p5Iimg {
      width: 110px;
      height: 110px;
    }

    .p5t {
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .p5d {
      color: #717781;
      font-size: 14px;
    }

    .proCode {
      width: 70px;
      height: 70px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0px 0px 0px 0px;
    }
  }
}

.approval_c1 {
  width: 734px;
  height: auto;
}

.card_container {
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  &.car{
    padding-bottom: 60px;
  }

  .card_1 {
    flex: 1;
    padding: 40px 20px;
    background: #FFFFFF;
    box-shadow: 0px 18px 48px 0px rgba(0,73,182,0.08);
    border-radius: 24px 24px 24px 24px;

    >p{
      width: 240px;
      margin: 0 auto;
      height: 90px;
      font-weight: 700;
      font-size: 18px;
      color: #3D3D3D;
    }
    .card_1_img {
      width: 88px;
      height: 88px;
      margin-bottom: 20px;
    }

    .card_1_t{
      font-weight: 700;
      font-size: 24px;
      color: #3D3D3D;
      padding-bottom: 10px;
    }
  }

  .card_2 {
    flex: 1;
    padding: 40px;
    background: #E5F0FE;
    border-radius: 24px 24px 24px 24px;
    justify-content: space-between;

    > p {
      width: 200px;
    }

    .card_2_l {
      text-align: left;
      font-weight: 400;
      font-size: 16px;
      color: #717781;

      .card_2_t1 {
        font-weight: 700;
        font-size: 32px;
        color: #333333;
      }

    }

    .card_2_r {
      gap: 40px;

      .card_file {
        font-weight: 700;
        font-size: 16px;
        color: #333333;
      }
    }

    .card_file {
      flex-direction: column;
      gap: 12px;
    }

    .card_2_t_img {
      width: 48px;
      height: 48px;
    }

    .card_num{
      font-weight: 400;
      font-size: 28px;
      color: #2278FF;
    }

    > .line {
      margin: 18px 0 24px;
      width: 30px;
      height: 4px;
      background: linear-gradient(270deg, rgba(34, 200, 255, 0.16) 0%, #2278FF 100%);
      border-radius: 1px 1px 1px 1px;
    }
  }
}
.productItem {
  gap: 20px;

  .productItem1 {
    flex: 1;

    &:nth-child(1) {
      background: #2278FF;

      .pro3_btn {
        color: #2278FF;
      }
    }
  }
}

.approval_c1 {
  width: 734px;
  height: auto;
}

.cloudAlbum_bg {
  width: 560px;
  height: auto;
  align-self: end;
}

.approval_c2 {
  width: 702px;
  height: auto;
}

.cloudMemo_img1 {
  width: 620px;
  height: 480px;
  background: #F4F8FF;
  border-radius: 24px 24px 24px 24px;
  align-self: center;
}

.approval_c3 {
  width: 587px;
  height: auto;
}

.approval_c5 {
  width: 634px;
  height: auto;
}

.blueBg{
  background: linear-gradient( 181deg, #F0F3FF 0%, rgba(240,243,255,0) 100%);
}

.imgGap{
  gap: 20px;
  .flexImgL{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 100%;
    }
  }

  .flexImgR{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 100%;
    }
  }
  .flexImgDes{
    height: 36px;
    font-weight: 700;
    font-size: 24px;
    color: #3D3D3D;
    line-height: 36px;
    margin-top: 24px;
  }
}
.flexJSSta{
  justify-self: flex-start;
}
</style>
