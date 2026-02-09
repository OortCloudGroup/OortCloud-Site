<template>
  <div class="w1380 box">
    <div class="cl_box">
      <div class="cl_title">
        热门产品
      </div>
      <div class="cl_list">
        <NuxtLink to="/zh/siteNew/cloudClass" target="_blank">
          <div class="cl_item">
            <img class="cl_item_img" src="@/assets/software/allProducts/ykt.png" />
            <div class="cl_item_r">
              <span class="cl_item_r_t">云课堂</span>
              <span class="cl_item_r_d">基于移动互联网的培训管理和学习交互平台</span>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/zh/siteNew/instantMess" target="_blank">
          <div class="cl_item">
            <img class="cl_item_img" src="@/assets/software/allProducts/jstx.png" />
            <div class="cl_item_r">
              <span class="cl_item_r_t">即时通讯</span>
              <span class="cl_item_r_d">单聊、群聊、图文、视频等即时通讯IM</span>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/zh/siteNew/approval" target="_blank">
          <div class="cl_item">
            <img class="cl_item_img" src="@/assets/software/allProducts/znsp.png" />
            <div class="cl_item_r">
              <span class="cl_item_r_t">智能审批</span>
              <span class="cl_item_r_d">工作流引擎和自定义表单服务系统</span>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/zh/siteNew/portalApp" target="_blank">
          <div class="cl_item">
            <img class="cl_item_img" src="@/assets/software/allProducts/mhyyyck.png" />
            <div class="cl_item_r">
              <span class="cl_item_r_t">门户与应用仓库</span>
              <span class="cl_item_r_d">把小程序搬进APP,快速打造超级APP</span>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/zh/siteNew/policeBus" target="_blank">
          <div class="cl_item">
            <img class="cl_item_img" src="@/assets/software/allProducts/ydjwfwzx.png" />
            <div class="cl_item_r">
              <span class="cl_item_r_t">警务服务总线</span>
              <span class="cl_item_r_d">基于OpenSergo统一微服务治理警务服务总线软件</span>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/zh/siteNew/dispatch" target="_blank">
          <div class="cl_item">
            <img class="cl_item_img" src="@/assets/software/allProducts/zhdd.png" />
            <div class="cl_item_r">
              <span class="cl_item_r_t">指挥调度</span>
              <span class="cl_item_r_d">指挥调度，警情、警力、现场、调度、过程可视</span>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/zh/siteNew/k8sMana" target="_blank">
          <div class="cl_item">
            <img class="cl_item_img" src="@/assets/software/allProducts/k8sAndCMDB.png" />
            <div class="cl_item_r">
              <span class="cl_item_r_t">K8S容器管理和CMDB软件</span>
              <span class="cl_item_r_d">把小程序搬进APP,快速打造超级APP</span>
            </div>
          </div>
        </NuxtLink>

        <div class="cl_item" @click="viewPath('/zh/siteNew/operationsManPlatform',3)">
          <img class="cl_item_img" src="@/assets/software/allProducts/ywglpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">运维管理平台</span>
            <span class="cl_item_r_d">运营运维平台整合服务与运维管理，确保系统高效稳定运行</span>
          </div>
        </div>
        <div class="cl_item" @click="viewPath('/zh/siteNew/archiveManagement',3)">
          <img class="cl_item_img" src="@/assets/software/allProducts/dagl.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">档案管理</span>
            <span class="cl_item_r_d">电子档案安全管理平台</span>
          </div>
        </div>
        <div class="cl_item" @click="viewPath('/zh/siteNew/videoFusion',3)">
          <img class="cl_item_img" src="@/assets/software/allProducts/sprh.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">视频融合</span>
            <span class="cl_item_r_d">OpenGBS可视化国标(GB28181)指挥调度平台</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        基础软件
      </div>
      <div class="cl_subTitle">
        双系统安全移动办公
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jstx.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">即时通讯</span>
            <span class="cl_item_r_d">即时通讯</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/xyybsdydaqb.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">私有云部署的移动安全办公云平台</span>
            <span class="cl_item_r_d">私有云部署的移动安全办公云平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/mhyyyck.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">门户与应用仓库</span>
            <span class="cl_item_r_d">门户与应用仓库</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/ydyykfzcpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">移动应用开发支撑平台</span>
            <span class="cl_item_r_d">移动应用开发支撑平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/aqglMDM.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">安全管控MDM</span>
            <span class="cl_item_r_d">安全管控MDM</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/dzsjxaqzd.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">定制手机型安全终端</span>
            <span class="cl_item_r_d">定制手机型安全终端</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/dzaqPadzd.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">定制安全Pad终端</span>
            <span class="cl_item_r_d">定制安全Pad终端</span>
          </div>
        </div>
      </div>
      <div class="cl_subTitle">
        指挥调度与IOC大数据可视化
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/PGISMap.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">PGIS地图引擎能力支撑平台(PGISPaaS)</span>
            <span class="cl_item_r_d">PGIS地图引擎能力支撑平台(PGISPaaS)</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/zhdd.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">指挥调度一张图</span>
            <span class="cl_item_r_d">指挥调度一张图</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/dsjIOCkshpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">大数据IOC可视化平台</span>
            <span class="cl_item_r_d">大数据IOC可视化平台</span>
          </div>
        </div>
      </div>
      <div class="cl_subTitle">
        多租户aPaaS云
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/zhyApaas.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">智慧云aPaaS应用支撑平台(aPaaS)</span>
            <span class="cl_item_r_d">智慧云aPaaS应用支撑平台(aPaaS)</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/yddfwhnlzcpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">移动端服务化能力支撑平台</span>
            <span class="cl_item_r_d">移动端服务化能力支撑平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/kfpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">“奥尔特云”开发平台</span>
            <span class="cl_item_r_d">“奥尔特云”开发平台</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        应用产品
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/hwIdeaHub.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">华为IdeaHub警务宝</span>
            <span class="cl_item_r_d">华为IdeaHub警务宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jwbytj.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">警务宝一体机</span>
            <span class="cl_item_r_d">警务宝一体机</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jcyzsgzpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">基层一站式工作平台</span>
            <span class="cl_item_r_d">基层一站式工作平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jwbyypt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">警务宝应用平台</span>
            <span class="cl_item_r_d">警务宝应用平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/bgb.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">办公宝</span>
            <span class="cl_item_r_d">办公宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/zhdd.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">指挥调度一张图</span>
            <span class="cl_item_r_d">指挥调度一张图</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/ydjwfwzx.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">移动警务服务总线</span>
            <span class="cl_item_r_d">移动警务服务总线</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/dab.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">档案宝</span>
            <span class="cl_item_r_d">档案宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/djb.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">党建宝</span>
            <span class="cl_item_r_d">党建宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jwb.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">警卫宝</span>
            <span class="cl_item_r_d">警卫宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/zab.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">治安宝</span>
            <span class="cl_item_r_d">治安宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/spb.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">视频宝</span>
            <span class="cl_item_r_d">视频宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/sprh.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">GB28181国标推流一体机</span>
            <span class="cl_item_r_d">GB28181国标推流一体机</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/spbytj.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">视频宝一体机</span>
            <span class="cl_item_r_d">视频宝一体机</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/tqzb.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">天琴智宝</span>
            <span class="cl_item_r_d">天琴智宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/ydyj.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">移动阅卷</span>
            <span class="cl_item_r_d">移动阅卷</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/ykt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">领导驾驶仓</span>
            <span class="cl_item_r_d">领导驾驶仓</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jcmjythgzpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">村警平台</span>
            <span class="cl_item_r_d">村警平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/fjydjw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">辅警移动警务</span>
            <span class="cl_item_r_d">辅警移动警务</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/znkf.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">智能客服</span>
            <span class="cl_item_r_d">智能客服</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/sqjw2.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">社区警务</span>
            <span class="cl_item_r_d">社区警务</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/hczz.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">合成作战</span>
            <span class="cl_item_r_d">合成作战</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/bjdwfw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">110报警定位服务</span>
            <span class="cl_item_r_d">110报警定位服务</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/znsp.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">智能审批</span>
            <span class="cl_item_r_d">智能审批</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/zhyjpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">综合预警平台</span>
            <span class="cl_item_r_d">综合预警平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/rwgl.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">任务管理</span>
            <span class="cl_item_r_d">任务管理</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/ajsdbxz.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">案事件督办协作</span>
            <span class="cl_item_r_d">案事件督办协作</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        云SaaS软件
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jtwqdxt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">交通微劝导系统</span>
            <span class="cl_item_r_d">交通微劝导系统</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/fzzxtgtjpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">反诈中心推广统计平台</span>
            <span class="cl_item_r_d">反诈中心推广统计平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/hlwjgazwfw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">互联网+公安政务服务</span>
            <span class="cl_item_r_d">互联网+公安政务服务</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/qfqf.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">群防群治</span>
            <span class="cl_item_r_d">群防群治</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/fjydjw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">辅警移动警务</span>
            <span class="cl_item_r_d">辅警移动警务</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        安全产品
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/aqglMDM.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">安全管控MDM</span>
            <span class="cl_item_r_d">安全管控MDM</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/fjydjw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">辅警移动警务</span>
            <span class="cl_item_r_d">辅警移动警务</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/aqglMDM.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">安全管控MDM</span>
            <span class="cl_item_r_d">安全管控MDM</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/qdzbs.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">枪弹装备室</span>
            <span class="cl_item_r_d">枪弹装备室</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/dzsjxaqzd.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">定制手机型安全终端</span>
            <span class="cl_item_r_d">定制手机型安全终端</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/dzaqPadzd.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">定制安全Pad终端</span>
            <span class="cl_item_r_d">定制安全Pad终端</span>
          </div>
        </div>
      </div>
      <div class="cl_subTitle">
        计算机保密防范
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/dxgdj.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">单向光导机</span>
            <span class="cl_item_r_d">单向光导机</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/xydzjj.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">新一代中间机</span>
            <span class="cl_item_r_d">新一代中间机</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/hplpaqxt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">红盘、蓝盘安全U盘系统</span>
            <span class="cl_item_r_d">红盘、蓝盘安全U盘系统</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/zdsjkwaqcsxt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">终端数据跨网安全传输系统</span>
            <span class="cl_item_r_d">终端数据跨网安全传输系统</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/swzdjhaqxt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">税务自助交换安全系统</span>
            <span class="cl_item_r_d">税务自助交换安全系统</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        公安
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/xydydjwpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">新一代移动警务平台</span>
            <span class="cl_item_r_d">新一代移动警务平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/hjyy.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">惠警应用</span>
            <span class="cl_item_r_d">惠警应用</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/qfqf.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">群防群治</span>
            <span class="cl_item_r_d">群防群治</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/wmfw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">为民服务</span>
            <span class="cl_item_r_d">为民服务</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jcmjythgzpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">基层民警一体化工作平台</span>
            <span class="cl_item_r_d">基层民警一体化工作平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/sqjw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">社区警务</span>
            <span class="cl_item_r_d">社区警务</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/fjydjw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">辅警移动警务</span>
            <span class="cl_item_r_d">辅警移动警务</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        智慧派出所
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/hwIdeaHub.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">华为IdeaHub警务宝</span>
            <span class="cl_item_r_d">华为IdeaHub警务宝</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/jcmjythgzpt.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">基层民警一体化工作平台</span>
            <span class="cl_item_r_d">基层民警一体化工作平台</span>
          </div>
        </div>
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/zhdd.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">指挥调度一张图</span>
            <span class="cl_item_r_d">指挥调度一张图</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        应用软件定制
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/yyrjdz.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">应用软件定制</span>
            <span class="cl_item_r_d">应用软件定制</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        运维服务外包
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/ywfwwb.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">运维服务外包</span>
            <span class="cl_item_r_d">运维服务外包</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        流程自动化
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/lczdh.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">流程自动化</span>
            <span class="cl_item_r_d">流程自动化</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        微信公众号维护服务
      </div>
      <div class="cl_list">
        <div class="cl_item">
          <img class="cl_item_img" src="@/assets/software/allProducts/wxgzhwhfw.png" />
          <div class="cl_item_r">
            <span class="cl_item_r_t">微信公众号维护服务</span>
            <span class="cl_item_r_d">微信公众号维护服务</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cl_box">
      <div class="cl_title">
        海外[一带一路] English
      </div>
      <div>
        <div class="cl_b_list">
          <div class="cl_b_item">
            <img class="cl_b_item_img" src="@/assets/software/allProducts/zswx.png" />
            <div class="cl_b_item_r">
              <span class="cl_b_item_r_t">专属“微信” IM and Mini program </span>
              <span class="cl_b_item_r_d">专属“微信” IM and Mini program </span>
            </div>
          </div>
          <div class="cl_b_item">
            <img class="cl_b_item_img" src="@/assets/software/allProducts/zwfwGov.png" />
            <div class="cl_b_item_r">
              <span class="cl_b_item_r_t">政务服务 Government Services </span>
              <span class="cl_b_item_r_d">政务服务 Government Services </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const viewPath = (path) => {
  console.log(path)
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
}
</script>

<style scoped lang="scss">
.w1380 {
  width: 1380px;
  margin: 0 auto;

  &.w1200 {
    width: 1200px;
  }
}

.box{
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cl_box{
  .cl_title{
    color: #2278FF;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .cl_subTitle{
    color: #2278FF;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .cl_list{
    display: flex;
    width: 1200px;
    flex-wrap: wrap;
    .cl_item{
      width: 386px;
      height: 78px;
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
      cursor: pointer;
      .cl_item_img{
        width: 48px;
        height: 48px;
      }
      .cl_item_r{
        display: flex;
        flex-direction: column;
        gap: 8px;
        .cl_item_r_t{
          color: #333333;
          font-size: 14px;
        }
        .cl_item_r_d{
          color: #999999;
          font-size: 12px;
        }
      }
    }
  }

  .cl_b_list{
    display: flex;
    gap: 8px;
    .cl_b_item{
      height: 74px;
      padding: 11px 2px 0 8px;
      display: flex;
      gap: 8px;
      margin-bottom: 160px;
      .cl_b_item_img{
        width: 24px;
        height: 24px;
      }
      .cl_b_item_r{
        display: flex;
        flex-direction: column;
        gap: 4px;
        .cl_b_item_r_t{
          color: #333333;
          font-size: 14px;
        }
        .cl_b_item_r_d{
          color: #666666;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
