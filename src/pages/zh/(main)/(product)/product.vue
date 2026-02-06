<template>
  <div class="page_container">
    <div class="cd_bottom">
      <div class="cd_bottom_list">
        <NuxtLink to="/zh/product" class="cd_bottom_list_item">
          <img src="/img/home/xl_3.png" />
          <div class="cd_bottom_list_item_right">
            <span>门户与应用仓库</span>
            <span>把小程序搬进APP,快速打造超级APP</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/zh/product_instantMsg" class="cd_bottom_list_item">
          <img src="/img/home/jstx.png" />
          <div class="cd_bottom_list_item_right">
            <span>即时通讯</span>
            <span>单聊、群聊、图文、视频等即时通讯IM</span>
          </div>
        </NuxtLink>
        <a href="#" class="cd_bottom_list_item">
          <img src="/img/home/xl_4.png" />
          <div class="cd_bottom_list_item_right">
            <span>移动应用开发支撑平台</span>
            <span>移动应用开发支撑平台</span>
          </div>
        </a>
        <a href="https://myoumuamua.com/" class="cd_bottom_list_item">
          <img src="/img/home/xl_2.png" />
          <div class="cd_bottom_list_item_right">
            <span>私有云部署的移动安全办公云平台</span>
            <span>私有云部署的移动安全办公云平台</span>
          </div>
        </a>
      </div>
      <div class="cd_bottom_list">
        <div class="cd_bottom_list_item">
          <img src="/img/home/xl_5.png" />
          <div class="cd_bottom_list_item_right">
            <span>安全管控MDM</span>
            <span>设备管家--MDM移动终端安全管理平台</span>
          </div>
        </div>
        <a
          href="http://map.oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/console_manage/index.html#/"
          class="cd_bottom_list_item"
          target="_blank"
        >
          <img src="/img/home/xl_6.png" />
          <div class="cd_bottom_list_item_right">
            <span>定制手机型安全终端</span>
            <span>手机终端安全加固组件与刷机服务包</span>
          </div>
        </a>
        <a
          href="http://map.oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/console_manage/index.html#/"
          class="cd_bottom_list_item"
          target="_blank"
        >
          <img src="/img/home/xl_7.png" />
          <div class="cd_bottom_list_item_right">
            <span>定制安全Pad终端</span>
            <span>Pad终端安全加固组件与刷机服务包</span>
          </div>
        </a>
        <NuxtLink to="/zh/more" class="cd_bottom_list_item">
          <img src="/img/home/gd_1.png" />
          <div
            class="cd_bottom_list_item_right"
            style="display: flex; flex-direction: row; align-items: center; margin-left:1.125rem"
          >
            <span style="color: #2e4bf1">更多</span>
            <img src="/img/home/gd_2.png" style="width: 1rem; height:1rem" />
          </div>
        </NuxtLink>
      </div>
    </div>

    <ProductAnchorWrapper>
      <div id="商品详情">
        <ProductHeader
          :logo="headerContent.logo"
          :name="headerContent.name"
          :title="headerContent.title"
          :excerpt="headerContent.excerpt"
          :buttons="headerContent.buttons"
          :swipes="headerContent.swipes"
        >
          <template #intro>
            <p class="radius_info">
              <span>30分钟</span>&nbsp;把小程序搬进App
            </p><br />
            <p class="radius_info">
              <span>30分钟</span>&nbsp;在App里运行小程序
            </p><br />
            <p class="radius_info">
              <span>30分钟</span>&nbsp;开启App敏捷开发新模式
            </p>
          </template>
          <template #desc>
            <p class="desc">
              * <span style="color: #2038EC;">小程序
              </span>是指包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等技术开发的轻应用，满足个性化需求快速迭代业务场景
            </p>
          </template>
        </ProductHeader>

        <div class="product_detail">
          <div class="item">
            <div class="left">
              <p>前端容器技术引领者 助力企业拥抱云原生时代</p>
              <p>灵活强大，可支持多行业、多场景应用的容器化技术</p>
              <p>天然具备跨平台连接，敏捷、安全开发的特性，学习门槛低，包含H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等技术开发的轻应用，满足个性化需求快速迭代业务场景。</p>
            </div>
            <div class="right">
              <img src="/img/product/portal/item1.png" />
            </div>
          </div>
          <div class="item_2">
            <div class="left">
              <p>语法遵循主流轻应用规范</p>
              <p>遵循H5、VUE、MUI、uni-app、原生混合应用等主流小程序开发标准与规范，无需额外学习成本，对原有遗留的应用系统上移动端提供最优解决方案。</p>
            </div>
            <div class="right_1">
              <img src="/img/product/portal/item2.png" />
            </div>
          </div>
          <div class="item_2">
            <div class="left">
              <p>扩展方式 可基于业务灵活配置</p>
              <p>遵循H5、VUE、MUI、uni-企业可根据自己的业务灵活配置 API 和第三方 SDK 插件，同时提供开放的 API 接口，支持二次开发。</p>
            </div>
            <div class="right_2">
              <img src="/img/product/portal/item3.png" />
            </div>
          </div>
          <div class="item_2">
            <div class="left">
              <p>提供完善开发测试 环境与支持文档</p>
              <p>
                布」工具，深度提升需求迭代速度，并提供H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等开发模板与Demo、组件、UI/UE规范等完备的开发者指引文档，保障开发流程。
              </p>
            </div>
            <div class="right_3">
              <img src="/img/product/portal/item4.png" />
            </div>
          </div>
        </div>
        <div class="product_detail2">
          <p class="title_1">
            强大的容器技术研发能力 提供安全稳定的产品
          </p>
          <p class="title_2">
            基于「云原生」底层架构实现，足够且必要的架构设计，支撑产品高可用
          </p>
          <div class="card_container">
            <div class="container_1">
              <div class="card_1">
                <p>个性私有化“应用市场”</p>
                <p>应用市场不再是苹果、谷歌的专利，帮助机构建立自己的私有化“应用市场”，构建自己的应用生态，规范企业内外的应用上架，向员工与客户提供最便捷的服务功能分发。</p>
              </div>
              <div class="card_2">
                <p>云原生架构</p>
                <p>基于云原生底层架构设计，支持百万数据查询与高并发吞吐，保证业务平滑运行。</p>
              </div>
            </div>
            <div class="container_2">
              <div class="card_3">
                <p>多终端支持</p>
                <p>多终端支持。支持移动端、双系统、华为Pad、PC端、国产化操作系统、华为IdeaHub等多种办公终端。</p>
              </div>
              <div class="card_4">
                <p>多种部署方式</p>
                <p>不论是私有云、行业云、混合云都能安装部署，支持国产化适配、 鲲鹏云部署，一切目标只为满足您的实际业务。</p>
              </div>
              <div class="card_5">
                <p>真实环境压力测试</p>
                <p>经过真实生产环境服务器与运维人员百万级并发压力试，保证业务无忧运行。</p>
              </div>
            </div>
          </div>
          <p class="title_3">
            支持多种使用与部署方案，开箱即用
          </p>
          <p class="title_4">
            提供多种部署与安装方式，安装升级方法简易，放心运转真实业务数据。
            支持对接内网统一用户、统一认证、统一授权体系
          </p>
        </div>
        <div class="product_detail3">
          <p>开发小程序，也可以是件「愉悦」的事儿</p>
          <p
            style="font-size: 24px;
                    color: #717781;
                    letter-spacing: 2.32px;
                    text-align: center;
                    font-weight: 600;
                    width: 925px;"
          >
            通过小程序「开发」「调试」「发布」工具，调试APP即刻开始体验小程序的代码开发与移动体验
          </p>
          <div class="card_container">
            <div>
              <img src="/img/product/portal/detail3_1.png" />
              <p>提供SDK及集成指南</p>
            </div>
            <div>
              <img src="/img/product/portal/detail3_2.png" />
              <p>提供测试开发调试环境</p>
            </div>
          </div>
          <p class="product_detail3_p1" style="width: 970px">
            *<span style="color: #2038EC">小程序</span>
            是指包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等技术开发的轻应用，满足个性化需求快速迭代业务场景
          </p>
          <div class="product_detail3_div1">
            <p>把想法快速变成现实，我们「都」准备好了</p>
            <p>不论规模与性质如何，企业都能通过小程序快速连接用户与业务</p>
            <p>小程序容器技术可被用在<span style="color: #FF2121">智慧城管领域、大型央企、公检法司</span>等众多行业之中，从而助力业务成功</p>
          </div>
        </div>
        <div class="four_funcs">
          <p>「 四大功能 」</p>
          <p>是一款轻应用平台，也是企业数字化转型的连接器</p>
          <p>是一款轻应用（包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等）技术开发与运营平台，它是由这几部分所组成的：</p>
          <n-grid :x-gap="30" :y-gap="30" :cols="4">
            <n-grid-item>
              <div class="card">
                <p>私有化的App Store与门户</p>
                <p>一个应用商店提供应用的上架、升级、下架、审核、搜索与推荐、灰度发布等管理后台以及前端信息化门户。</p>
              </div>
            </n-grid-item>
            <n-grid-item>
              <div class="card">
                <p>前端服务化应用运行环境</p>
                <p>
                  一个能运行小程序的安全沙箱。通过单独运行门户App或嵌入式 SDK 的形态让移动端软件、PC
                  端软件或物联网设备软件在内的宿主环境集成；轻应用运行安全沙箱支持包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等技术开发的轻应用。
                </p>
              </div>
            </n-grid-item>
            <n-grid-item>
              <div class="card">
                <p>轻应用快速开发框架与运营工具</p>
                <p>一系列的开发支持包（包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等开发模板与Demo、组件、UI/UE规范等）与轻应用运营监控工具。</p>
              </div>
            </n-grid-item>
            <n-grid-item>
              <div class="card">
                <p>前端服务化能力集合</p>
                <p>
                  一系列的原生服务化能力支持包（个性化需求快速迭代底座，包括需要在轻应用中调用核心层中的原生能力如身份证识别、车牌识别、OCR、位置信息等原生能力的集合）。以及统一消息推送服务，移动数据分析，应用安全加固等，向开发者提供更加全面的移动研发中台，也便于对已有
                  App 进行重构。
                </p>
              </div>
            </n-grid-item>
          </n-grid>
        </div>
      </div>

      <div id="用户案例">
        <div class="user">
          <p class="title">
            用户案例
          </p>
          <div class="item">
            <p class="second_title">
              XXX GA局移动警务门户与应用开发支撑平台
            </p>
            <p class="third_title">
              移动警务门户和应用市场，应用开发支撑平台
            </p>
            <div>
              <p>一、建设移动警务门户应用，集中展示业务相关内容，应能包括新闻、通知公告、政策法规、工作排班、内部管理、党建工作等相关内容。</p>
              <p>
                建设移动警务应用市场，集中管理移动应用，实现对移动应用申请、上架、审核、发布、升级、下架等全生命周期管理，并提供细粒度的应用可见性管理，可按照不同部门、岗位属性等维度进行可见性管理和可用性授权。移动警务门户客户端应提供应用市场入口，为民警提供应用查询、查看、下载、安装、评价的统一入口。
              </p>
              <p>
                二、针对组织内部私有云打造类似于“小程序”模式的使用体验和应用开发支撑环境。支持轻用快速迭代开发，释放平台里的消息中心等即时通讯能力，提供支持H5轻应用开发框架的移动端技术中台，同时支撑以前开发的原生应用不变化，新的应用可采用H5技术开发，首页实现一人多机构登录，千人千面，消息类的信息等能主动推动到首页上来，提升开发者开发迭代速度与用户体验。
              </p>
              <p>三、构成移动应用中台。主要包含三大价值：轻应用开发框架、轻应用运行环境、底层原生能力集成。“钉钉”模式的定位是统一提供H5网页、轻应用、小程序、原生应用等开发。一网打尽。承载各种SaaS应用。</p>
              <p>四、构建统一门户、统一用户、统一服务、统一授权、统一数据对标等。避免业务系统重复建设、降低开发成本、缩短项目周期。</p>
            </div>
            <div>
              <p>主要使用成效，解决如下问题：</p>
              <ol>
                <li>1、建设应用生态。</li>
                <li>2、避免信息孤岛。</li>
                <li>3、拆除信息烟囱。</li>
                <li>4、避免重复开发。</li>
              </ol>
              <p>对各业务应用开发、发布、管理、下载、使用、统计、维护等工作，做到各业务应用的全生命周期的管理。</p>
              <p>信息化统筹建设的抓手。</p>
              <p>集约化建设的利器。</p>
            </div>
          </div>
          <div class="item">
            <p class="second_title">
              移动警务门户与应用开发支撑平台
            </p>
            <p class="third_title">
              功能包括：
            </p>
            <div>
              <p>一、移动中台</p>
              <p>
                提供移动终端相关的NFC识别二代身份证、拍照、车牌识别、手环识别、身份证扫描识别等技术，实现警务工作的沟通移动化、业务移动化和服务移动化，实现移动数据采集、移动办公,为用户带来快速、方便的办公环境，实现一人采集、全局共享。包括移动原生应用常用的视频监控组件、离线地图组件、NFC感知组件和PKI证书组件。打造一个移动应用“底座”，形成移动端的能力沉淀，各个移动端应用按需取用，逐步形成“移动中台”。为快速迭代应用开发提供支撑服务。实现在后端服务层面、前端服务化能力层面、警务应用层面，三个层面均分别引入开发厂商开发，在同一技术组件，可以引入多家同时竞争。实现生态繁荣。
              </p>
              <p>二、运营工具部分</p>
              <p>
                基于云计算，对接私有云，为日常云运维运营提供支撑。建设一批如活跃度、使用排名、积分晋级、上帝视角领导驾驶舱等移动警务运营技术工具，深入挖掘分析运营数据，深度匹配用户需求。建立起持续的运营机制，通过持续运营，逐步提升移动警务系统的使用率、认同感和参与感。同时基于业务后台需要建设运营后台，包括对内容、活动、用户以及数据的运营，实现对整个运营体系的支持。加强应用管理，运营运维。如在应用超市关联每个APP的运维信息，用户可直接查看APP建设单位、研发公司、基本功能等资料，并可一键电话咨询APP管理员。加强用户使用情况分析，用户画像，用户使用激励机制，鼓励移动应用建设。
              </p>
              <p>三、使用成效</p>
              <p>应用支撑平台：构建统一门户、统一用户、统一服务、统一授权、统一数据对标等。避免业务系统重复建设、降低开发成本、缩短项目周期。</p>
              <div>
                <p>主要使用成效，解决如下问题：</p>
                <ol>
                  <li>1、应用生态：解决云架构产品壁垒，实现云最优架构组合，解耦单应用技术壁垒，形成一个共建、共享、共用的移动应用生态圈。</li>
                  <li>2、信息孤岛：在移动端打通各部门的沟通渠道，实现数据的共收、共存、共管、共用，驱动业务的管理向扁平化模式转变。</li>
                  <li>3、信息烟囱：将各类业务应用改造上云，打破部门壁垒，“以场景为中心”思维，对传统的烟囱式应用进行移动化改造，变成轻量级的“微应用”。</li>
                  <li>4、重复开发：应用微服务化，拆解每个应用的各项功能达到共用，节省各组件研发投入。</li>
                  <li>5、开发周期长：直接调用应用支撑平台微服务能力，应用越多，周期越短。</li>
                </ol>
                <p>应用支撑平台对各业务应用开发、发布、管理、下载、使用、统计、维护等工作，做到各业务应用的全生命周期的管理。</p>
              </div>
            </div>
          </div>
          <div class="item">
            <p class="second_title">
              XXX市国有大型企业公司
            </p>
            <div>
              <p>建设一个智慧检务综合门户与应用仓库，移动检务门户和应用市场软件，包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等技术开发与运营平台</p>
              <p>主要功能包括：</p>
              <p>（1）一个私有化的AppStore与门户，</p>
              <p>一个应用商店提供应用的上架、升级、下架、审核、搜索与推荐、灰度发布等管理后台；</p>
              <p>（2）一个轻应用快速开发框架与运营工具，</p>
              <p>一系列的开发支持包（包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等开发模板与Demo、组件、UI/UE规范等）与轻应用运营监控工具；</p>
              <p>（3）一个前端服务化应用运行环境，</p>
              <p>
                一个能运行小程序的安全沙箱。通过单独运行门户App或嵌入式SDK的形态让移动端软件、PC端软件或物联网设备软件在内的宿主环境集成；轻应用运行安全沙箱支持包括H5应用、原生混合应用、MUI、uni-app小程序、VUE、PC-Web、PC原生等技术开发的轻应用。
              </p>
              <p>（4）一个前端服务化能力集合。</p>
              <p>
                一系列的原生服务化能力支持包（个性化需求快速迭代底座，包括需要在轻应用中调用核心层中的原生能力如身份证识别、车牌识别、OCR、位置信息等原生能力的集合）。以及统一消息推送服务，移动数据分析，应用安全加固等，向开发者提供更加全面的移动研发中台，也便于对已有App进行重构。
              </p>
              <br />
              <p>用于快速一个智慧检务超级App，各业务处室可以通过开发小程序敏捷开发的新模式实现业务需求快速迭代。</p>
              <br />
              <p>二、开发对接与运营支撑</p>
              <p>与第三方系统对接能力</p>
              <p>具备与统一身份系统（包含单点登录）对接能力，具备统一二维码登录能力，具备与统一提醒服务对接能力，具备其他第三方H5应用、原生应用接入能力以及多开发商管理能力。</p>
              <p>以及多种和个性化移动应用分类支持,多种屏幕适配支持。</p>
              <p>开启内部登录集成可以使用机构自有的帐号、密码登录客户端以及管理后台，可使用HTTP登录认证。</p>
            </div>
          </div>
        </div>
      </div>

      <ProductSupport :name="support.name" :link="support.link" />
    </ProductAnchorWrapper>
  </div>
</template>

<script setup lang="ts">
import { NGrid, NGridItem } from 'naive-ui'

definePageMeta({
  layout: 'product'
})

const headerContent = ref({
  logo: '/img/product/portal/ic_portal.png',
  name: '门户与应用仓库',
  title: '快速打造数字化超级 App',
  excerpt: '拥有领先于市场的小程序容器技术，可为您提供敏捷、安全的最佳实践，是数字化时代下企业移动开发的不二之选。',
  buttons: [
    {
      name: '立即购买',
      link: 'https://marketplace.huaweicloud.com/contents/e15d419a-1569-4d70-b093-36ce1d820cd9'
    },
    {
      name: '在线体验',
      link: 'https://myoumuamua.com/download.html'
    },
    {
      name: '立即观看',
      icon: '/img/home/logo_video.png'
    }
  ],
  swipes: [
    '/img/product/portal/swipe_1.png',
    '/img/product/portal/swipe_2.png',
    '/img/product/portal/swipe_3.png',
    '/img/product/portal/swipe_4.png',
    '/img/product/portal/swipe_5.png'
  ]
})
const support = ref({
  name: '门户与应用仓库使用汇报V2.0.pdf',
  link: 'https://portal-data-cn.obs.cn-north-4.myhuaweicloud.com/marketplace/public/app/attachment/20220222/0032167c-ff0b-4eaf-9d53-17cd5be6a975/2202220525262885.pdf'
})
</script>

<style lang="scss" scoped>
.cd_bottom {
  padding: 30px 0 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 298px; */
  background: url(/img/home/cd_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  filter: progid:DXImageTransform.Microsoft.alphaImageLoader(src='imgs/home/cd_bg.png',sizingMethod='scale');
}
@media screen and (max-width: 1537px) {
  .cd_bottom_list_item {
    width: 320px !important;
  }
}
.cd_bottom_list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cd_bottom_list_item {
  padding: 0 24px;
  display: flex;
  align-items: center;
  width: 390px;
  height: 116px;
  background: #ffffff;
  margin: 0 10px 10px 0;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  transition: .3s;
}
.cd_bottom_list_item:hover {
  background: rgba(51, 146, 217, 0.07);
}

.cd_bottom_list_item img {
  width: 46px;
  height: 46px;
  margin-left: 12px;
}

.cd_bottom_list_item_right {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 8px;
}

.cd_bottom_list_item_right span:nth-of-type(1) {
  font-size: 16px;
  color: #333333;
  font-weight: 600;
}

.cd_bottom_list_item_right span:nth-of-type(2) {
  margin-top: 12px;
  font-size: 14px;
  color: #666666;
}

.radius_info {
  margin: 10px 0;
  padding: 8px 20px;
  display: inline-block;
  background: #2038ec;
  border: 1px solid rgba(32, 56, 236, 1);
  border-radius: 24px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1.74px;
  line-height: 27px;
  font-weight: 700;
}
.desc {
  margin: 20px 0;
  width: 530px;
  font-size: 14px;
  color: #1f3f74;
  line-height: 22px;
  font-weight: 700;
}
.product_detail .item,
.product_detail .item_2 {
  margin: 0 340px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 460px;
  background: #fdfeff;
}
.product_detail .item_2 {
  position: relative;
  background: #fdfeff;
}
.product_detail .item .left {
  padding-bottom: 60px;
}
.product_detail .item .left p:nth-of-type(1),
.product_detail .item_2 .left p:nth-of-type(1) {
  margin-bottom: 60px;
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_detail .item .left p:nth-of-type(2) {
  margin-bottom: 60px;
  font-size: 22px;
  color: #051261;
  letter-spacing: 2.13px;
  font-weight: 500;
}
.product_detail .item .left p:nth-of-type(3),
.product_detail .item_2 .left p:nth-of-type(2) {
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 500;
}
.product_detail .item .right img {
  object-fit: cover;
  width: 500px;
  height: 294px;
}
.product_detail .item_2 .right_1 img {
  margin-bottom: -190px;
  margin-right: 60px;
  object-fit: contain;
  width: 400px;
}
.product_detail .item_2 .right_2 img {
  object-fit: cover;
  height: 320px;
}
.product_detail .item_2 .right_3 img {
  margin-bottom: -170px;
  object-fit: contain;
  width: 500px;
}
.product_detail .item_2 .left {
  margin-bottom: 180px;
}
.product_detail2 {
  margin: 100px 360px 60px;
  background-image: url('/img/product/portal/detail2_bg.png');
}
.product_detail2 .title_1,
.product_detail2 .title_3 {
  margin-bottom: 30px;
  text-align: center;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  line-height: 62px;
  font-weight: 600;
}
.product_detail2 .title_2,
.product_detail2 .title_4 {
  margin-bottom: 50px;
  text-align: center;
  font-size: 24px;
  color: #717781;
  letter-spacing: 2.32px;
  line-height: 32px;
  font-weight: 600;
}
.product_detail2 .title_4 {
  margin: 0 auto;
  width: 843px;
}
.product_detail2 .card_container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product_detail2 .card_container .container_1,
.product_detail2 .card_container .container_2 {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_detail2 .card_container p:nth-of-type(1) {
  padding: 24px 0 24px 20px;
  font-size: 28px;
  color: #1f3f74;
  font-weight: 700;
}
.product_detail2 .card_container p:nth-of-type(2) {
  padding: 40px 0 0 20px;
  font-size: 16px;
  color: #506079;
  line-height: 36px;
  font-weight: 500;
}
.product_detail2 .card_1,
.product_detail2 .card_2 {
  margin-right: 20px;
  width: 580px;
  height: 311px;
}
.product_detail2 .card_1 {
  background-image: url('/img/product/portal/card1_bg.png');
  background-size: 100% 100%;
}
.product_detail2 .card_2 {
  background-image: url('/img/product/portal/card2_bg.png');
  background-size: 100% 100%;
}
.product_detail2 .card_3,
.product_detail2 .card_4,
.product_detail2 .card_5 {
  margin-right: 20px;
  width: 380px;
  height: 311px;
}
.product_detail2 .card_3 {
  background-image: url('/img/product/portal/card3_bg.png');
  background-size: 100% 100%;
}
.product_detail2 .card_4 {
  background-image: url('/img/product/portal/card4_bg.png');
  background-size: 100% 100%;
}
.product_detail2 .card_5 {
  background-image: url('/img/product/portal/card5_bg.png');
  background-size: 100% 100%;
}
.product_detail3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfcfc;
}
.product_detail3 p:first-child {
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  font-weight: 600;
}
.product_detail3 .card_container {
  margin-top: 50px;
  margin-bottom: 80px;
  width: 680px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product_detail3 .card_container > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product_detail3 .card_container img {
  width: 192px;
  height: 192px;
}
.product_detail3 .card_container p {
  font-size: 28px;
  color: #1f3f74;
  font-weight: 500;
}
.product_detail3 .product_detail3_p1 {
  font-size: 26px;
  color: #1f3f74;
  text-align: center;
  line-height: 36px;
  font-weight: 700;
}
.product_detail3_div1 {
  margin-top: 80px;
  padding-bottom: 60px;
  width: 100%;
  background: url('/img/product/portal/detail3_bg.png');
  background-position: -10% bottom;
  text-align: center;
}
.product_detail3_div1 p:nth-of-type(2) {
  margin-bottom: 30px;
  font-size: 28px;
  color: #3f4151;
  letter-spacing: 2.71px;
  font-weight: 600;
}
.product_detail3_div1 p:nth-of-type(3) {
  font-size: 24px;
  color: #717781;
  letter-spacing: 2.32px;
  text-align: center;
  font-weight: 600;
}
.four_funcs {
  background: #fcfcfc;
  padding: 100px 100px 40px;
  text-align: center;
}
.four_funcs > p:nth-of-type(1) {
  margin-bottom: 20px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  line-height: 62px;
  font-weight: 600;
}
.four_funcs > p:nth-of-type(2) {
  margin-bottom: 20px;
  font-size: 28px;
  color: #3f4151;
  letter-spacing: 2.71px;
  text-align: center;
  font-weight: 600;
}
.four_funcs > p:nth-of-type(3) {
  width: 910px;
  margin: 0 auto;
  margin-bottom: 60px;
  font-size: 24px;
  color: #717781;
  letter-spacing: 2.32px;
  text-align: center;
  font-weight: 600;
}
.four_funcs .card {
  width: 405px;
  height: 396px;
  background: url('/img/product/portal/function.png');
}
.four_funcs .card > p:nth-of-type(1) {
  padding: 24px 0 24px 20px;
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  text-align: left;
}
.four_funcs .card > p:nth-of-type(2) {
  padding: 40px 16px 0;
  font-size: 16px;
  color: #506079;
  line-height: 24px;
  font-weight: 500;
  text-align: justify;
}
</style>
