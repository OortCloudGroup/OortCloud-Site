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

    <div class="yyrjdz_logic">
      <ul class="logic_group">
        <li class="logic_group_item">
          <div class="logic_item_img_box">
            <img class="logic_item_img" src="/img/product/customize_app/demand.png" alt="" />
          </div>
          <div class="logic_item_title">
            需求挖掘与分析
          </div>
          <div class="logic_item_text">
            根据客户场景描述，需求对接，对需求进行整理分析
          </div>
        </li>
        <div class="logic_right">
          <img class="logic_right_img" src="/img/product/customize_app/right.png" alt="" />
        </div>
        <li class="logic_group_item">
          <div class="logic_item_img_box">
            <img class="logic_item_img" src="/img/product/customize_app/produce.png" alt="" />
          </div>
          <div class="logic_item_title">
            产品立项及UE分析
          </div>
          <div class="logic_item_text">
            提供设计原型及相关的产品逻辑图
          </div>
        </li>
        <div class="logic_right">
          <img class="logic_right_img" src="/img/product/customize_app/right.png" alt="" />
        </div>
        <li class="logic_group_item">
          <div class="logic_item_img_box">
            <img class="logic_item_img" src="/img/product/customize_app/APP.png" alt="" />
          </div>
          <div class="logic_item_title">
            APP制作与研发
          </div>
          <div class="logic_item_text">
            进入快速开发阶段，实现产品与设计，期间与您保持沟通
          </div>
        </li>
        <div class="logic_right">
          <img class="logic_right_img" src="/img/product/customize_app/right.png" alt="" />
        </div>
        <li class="logic_group_item">
          <div class="logic_item_img_box">
            <img class="logic_item_img" src="/img/product/customize_app/search.png" alt="" />
          </div>
          <div class="logic_item_title">
            APP测试与改进
          </div>
          <div class="logic_item_text">
            会提供里程碑产品和测试版给测试，直到验收完成
          </div>
        </li>
      </ul>
      <ul class="logic_remark">
        <li class="logic_remark_item">
          <div class="logic_remark_img_box">
            <img class="logic_remark_img" src="/img/product/customize_app/server.png" alt="" />
          </div>
          <div class="logic_remark_text">
            服务能力广泛，业务能力辐射全行业
          </div>
        </li>
        <li class="logic_remark_item">
          <div class="logic_remark_img_box">
            <img class="logic_remark_img" src="/img/product/customize_app/standard.png" alt="" />
          </div>
          <div class="logic_remark_text">
            标准化，标准化验收体系，专业监理全程跟踪
          </div>
        </li>
        <li class="logic_remark_item">
          <div class="logic_remark_img_box">
            <img class="logic_remark_img" src="/img/product/customize_app/fast.png" alt="" />
          </div>
          <div class="logic_remark_text">
            快，iOS、Android同时开发，同一套代码，升级成本低
          </div>
        </li>
      </ul>
    </div>

    <div class="app_detail">
      <div class="app_content">
        <div class="app_detail_header">
          <!-- 缺两图 -->
          <h3 class="app_detail_title">
            应用案例
          </h3>
        </div>
        <div class="app_detail_content">
          <div class="app_detail_content_group">
            <p class="detail_group_title">
              移动办公
            </p>
            <ul class="detail_group_list">
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  刷脸记录
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_nearby.png" alt="" />
                <p class="detail_group_list_text">
                  附近同事
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  智能审批
                </p>
              </li>
              <li class="detail_group_list_item">
                <img
                  class="detail_group_list_img"
                  src="/img/product/customize_app/quick_office/ic_safe_email.png"
                  alt=""
                />
                <p class="detail_group_list_text">
                  安全邮箱
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_vote.png" alt="" />
                <p class="detail_group_list_text">
                  微投票
                </p>
              </li>
              <li class="detail_group_list_item">
                <img
                  class="detail_group_list_img"
                  src="/img/product/customize_app/quick_office/ic_work_helper.png"
                  alt=""
                />
                <p class="detail_group_list_text">
                  工作助手
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  打卡签到
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  工作汇报
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_list.png" alt="" />
                <p class="detail_group_list_text">
                  微清单
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_video.png" alt="" />
                <p class="detail_group_list_text">
                  小视频
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_vacation.png" alt="" />
                <p class="detail_group_list_text">
                  请休假
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_work.png" alt="" />
                <p class="detail_group_list_text">
                  工作圈
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  来访预约
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  消息
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  通讯录
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  群管理
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  问吧
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_video.png" alt="" />
                <p class="detail_group_list_text">
                  小视频
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  人脸识别
                </p>
              </li>
            </ul>

            <p class="detail_group_title">
              队伍建设
            </p>
            <ul class="detail_group_list">
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  人员管理
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_nearby.png" alt="" />
                <p class="detail_group_list_text">
                  个人档案
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  动态勤务
                </p>
              </li>
              <li class="detail_group_list_item">
                <img
                  class="detail_group_list_img"
                  src="/img/product/customize_app/quick_office/ic_safe_email.png"
                  alt=""
                />
                <p class="detail_group_list_text">
                  工作宣传
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_vote.png" alt="" />
                <p class="detail_group_list_text">
                  大数据管理
                </p>
              </li>
              <li class="detail_group_list_item">
                <img
                  class="detail_group_list_img"
                  src="/img/product/customize_app/quick_office/ic_work_helper.png"
                  alt=""
                />
                <p class="detail_group_list_text">
                  智慧社区
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  核录查控
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_recording.png" alt="" />
                <p class="detail_group_list_text">
                  两学一做
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_list.png" alt="" />
                <p class="detail_group_list_text">
                  教育整顿
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_video.png" alt="" />
                <p class="detail_group_list_text">
                  位置上报
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_vacation.png" alt="" />
                <p class="detail_group_list_text">
                  公众号
                </p>
              </li>
              <li class="detail_group_list_item">
                <img class="detail_group_list_img" src="/img/product/customize_app/quick_office/ic_work.png" alt="" />
                <p class="detail_group_list_text">
                  安全检查
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务支持 -->
    <ProductSupport v-if="support" :name="support.name" :link="support.link" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'product'
})

const headerContent = ref({
  logo: '/img/product/customize_app/icon.png',
  name: '应用软件定制',
  title: '应用软件开发一站式服务',
  excerpt: '通过信息化统筹建设和集约化建设的构建应用开发平台，各条线业务服务互联互通，各厂商能力互相应用，数据无需权限自动沉淀归到私有云平台，可依据平台权限取用，快速开发业务应用，在应用支撑平台与大数据平台上结合模块式进行通用应用与业务应用快速开发，为行业信息化建设提供定制化软件解决方案的一站式落地服务。',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/174bd256-4011-4988-89d8-d72c47e6741c#productid=OFFI698082226463612928'
    // }
  ],
  swipes: [
    '/img/product/customize_app/phone.png'
  ]
})
const support = ref(null)
</script>

<style scoped>
.yyrjdz_logic{
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 417px;
}

.logic_group{
  display: grid;
  grid-template-columns: auto 26px auto 26px auto 26px auto;
  grid-column-gap: 10px;
}

.logic_group_item{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.logic_item_img_box{
  width: 60px;
  height: 46px;
}

.logic_item_img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logic_item_title{
  font-size: 24px;
  color: #1F3F74;
  font-weight: 600;
  margin: 32px 0;
}

.logic_item_text{
  font-size: 16px;
  color: #1F3F74;
  text-align: center;
  font-weight: 400;
}

.logic_right{
  width: 28px;
  height: 100%;
}
.logic_right_img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.logic_remark{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    margin-top: 40px;
}

.logic_remark_item{
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 40px; */
}

.logic_remark_img_box{
    width: 32px;
    height: 32px;
}

.logic_remark_img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.logic_remark_text{
    font-size: 16px;
    color: #656666;
    font-weight: 400;
    margin-left: 10px;
}
/* 逻辑进度结束 */

/* 应用案列模块 */
.app_detail{
    width: 100%;
    font-family: PingFangSC-Semibold;
}
.app_content{
    max-width: 1240px;
    margin: 0 auto;
}
.app_detail_header{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
}
.app_detail_title{
    font-size: 46px;
    color: #051261;
    letter-spacing: 4.45px;
    line-height: 65px;
    font-weight: 600;
}
.app_detail_content{
    margin-bottom: 178px;
}
.detail_group_title{
    font-size: 28px;
    color: #051261;
    letter-spacing: 2.71px;
    font-weight: 600;
    margin-top: 60px;
}
.detail_group_list{
    display: grid;
    grid-template-columns: repeat(10,1fr);
}
.detail_group_list_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
}
.detail_group_list_img{
    width: 86px;
    height: 86px;
    object-fit: contain;
}
.detail_group_list_text{
    font-size: 16px;
    color: #757B84;
    font-weight: 400;
    margin-top: 12px;
}
/* 应用案例结束 */
</style>
