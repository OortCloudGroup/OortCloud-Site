<template>
  <div class="page_container">
    <div class="banner">
      <h5>全栈解决方案</h5>
      <span>奥尔特云面向丰富的业务场景，提供整套行业和技术解决方案，助力客户安全高效上云</span>
      <span>奥尔特云解决方案涵盖公安、派出所、检察、司法、监狱、智慧边海防、政府等多个领域</span>
    </div>

    <!-- 热门方案 -->
    <SolutionGrid :data="gridData"/>

    <!-- 专业服务 -->
    <div class="panel_wrapper">
      <h2 class="panel_wrapper_title">全部专业服务</h2>
      <!-- 公安 -->
      <AppPanel :data="policeApp"/>
      <!-- 智慧派出所 -->
      <AppPanel :data="policeStationApp"/>
      <!-- 检察 -->
      <AppPanel :data="procuratorialApp"/>
      <!-- 司法监狱 -->
      <AppPanel :data="prisonApp"/>
      <!-- 法院 -->
      <AppPanel :data="courtApp"/>
      <!-- 消防 -->
      <AppPanel :data="fireProtApp"/>
      <!-- 档案 -->
      <AppPanel :data="filesApp"/>
      <!-- 政府 -->
      <AppPanel :data="govermentApp"/>
      <!-- 智慧边海防 -->
      <AppPanel :data="borderDefendApp"/>
      <!-- 城管 -->
      <AppPanel :data="cityAdminApp"/>
      <!-- 交警 -->
      <AppPanel :data="trafficPoliceApp"/>
      <!-- 企业 -->
      <AppPanel :data="enterpriseApp"/>
      <!-- 应急 -->
      <AppPanel :data="emergencyApp"/>
      <!-- 疫情防控 -->
      <AppPanel :data="plaguePrevApp"/>
      <!-- 物联网 -->
      <AppPanel :data="iotApp"/>
      <!-- 应用软件定制与运维服务外包 -->
      <AppPanel :data="customizeApp"/>
      <!-- 海外[一带一路] English -->
      <AppPanel :data="overseasApp"/>
    </div>

    <!-- 客户案例 -->
    <SolutionCasePanel :data="caseData" />
  </div>
</template>

<script setup>
const gridData = ref([
  {
    title: '新一代移动警务',
    content: '从基层一线民警反映强烈的应用需求入手，先后推出20多项平台产品，200多项基础服务能力，300多款实用APP， 着力打通大数据应用“最后一公里”。',
    cover: '/img/solution/grid_bg.png'
  },
  {
    title: '智慧派出所',
    content: '数据随用即得，战法随想随用，应用随需随变。精准数据筛选、灵活碰撞分析，满足不同无技术背景用户对数据的应用需求，从根本上改变了传统软件的开发模式，让新需求在短时间内得到实现。',
    cover: ''
  },
  {
    title: '指挥调度一张图',
    content: '融合指挥各大通信系统、请休假、签到、勤务等系统，将系统的各种功能都在公安的网内地图上应用，实现“一张图”展示，一键通话，一键视频，一键组队等，是真正的“看得见、呼得通”的扁平化指挥调度。',
    cover: ''
  },
  {
    title: '智慧政府',
    content: '实现城市运行一网统管，公务办公一网协同，政务服务一网通办，公共资源一网通享，依托公司智慧化产品，将智慧化应用推向各局委办，比如出行拼车、顺风车、派车为机关单位提供公车出行服务；各局委办跨地区、跨层级、跨部门政务协同以及数据可视化决策支持。',
    cover: ''
  },
  {
    title: '智慧检务',
    content: '通过服务检察干警移动办公办案业务的移动检务,以及服务人民群众、律师、人大政协、公司办理业务的阳光检务。检务移动终端辅助业务系统，移动阅卷系统，司法文书远程送达系统等产品助力智慧检务建设。',
    cover: ''
  },
  {
    title: '行业数字化转型&IT服务',
    content: '涵盖30多个场景的行业数字化转型（行业各场景智能化建设）软件开发，系统建设，方案咨询， 人力资源外包，IT运营运维，物联网服务。',
    cover: '/img/solution/grid_bg2.png'
  },
])

// 公安
const policeApp = ref({
  title: '公安',
  logo: '/img/app/jinghui.png',
  apps: [
    {
      name: '新一代移动警务平台',
      logo: '/img/app/xjwpt.png',
      excerpt: '移动警务、私有部署的移动安全办公云平台'
    },
    {
      name: '惠警应用',
      logo: '/img/app/hjyy.png',
      excerpt: '新时代建警治警爱警暖警信息化助手'
    },
    {
      name: '群防群治',
      logo: '/img/app/qfqz.png',
      excerpt: '“互联网+”大数据思维下建立的公安与群众的连接器'
    },
    {
      name: '为民服务',
      logo: '/img/app/wmfw.png',
      excerpt: '公安政务服务“一网通办”'
    },
    {
      name: '基层民警一体化工作平台',
      logo: '/img/app/mjyth.png',
      excerpt: '图查要素，屏观态势，打造警务信息化基石'
    },
    {
      name: '社区警务',
      logo: '/img/app/sqjw.png',
      excerpt: '结合辅警应用、 警务通民警应用，实现警务工作分流'
    },
    {
      name: '辅警移动警务',
      logo: '/img/app/fjydjw.png',
      excerpt: '智慧新警务辅警管理平台'
    },
  ]
})
// 智慧派出所
const policeStationApp = ref({
  title: '智慧派出所',
  logo: '/img/app/jinghui.png',
  apps: [
    {
      name: '华为IdeaHub警务宝',
      logo: '/img/app/jwb.png',
      excerpt: '华为IdeaHub智慧屏+奥尔特云警务应用平台'
    },
    {
      name: '基层民警一体化工作平台',
      logo: '/img/app/mjyth.png',
      excerpt: '图查要素，屏观态势，打造警务信息化基石+奥尔特云警务应用平台'
    },
    {
      name: '调度指挥一张图',
      logo: '/img/app/zhyzt.png',
      excerpt: '指挥调度，警情、警力、现场、调度、过程可视'
    },
    {
      name: '枪弹装备室',
      logo: '/img/app/qd.png',
      excerpt: '枪弹柜、警用装备柜及其管理平台'
    },
    {
      name: '领导驾驶舱',
      logo: '/img/app/ldjsc.png',
      excerpt: '领导指挥一屏纵览'
    },
  ]
})
// 检察
const procuratorialApp = ref({
  title: '检察',
  logo: '/img/app/jiancha.png',
  apps: [
    {
      name: '移动检务',
      logo: '/img/app/ydjw.png',
      excerpt: '服务检察干警移动办公办案业务',
      link: '/product_mobileInspection'
    },
    {
      name: '阳光检务',
      logo: '/img/app/ygjw.png',
      excerpt: '服务人民群众、律师、人大政协、公司办理业务'
    },
    {
      name: '移动阅卷',
      logo: '/img/app/ydyj.png',
      excerpt: '检务移动终端辅助业务系统'
    },
    {
      name: '远程送达',
      logo: '/img/app/ycsd.png',
      excerpt: '司法文书远程送达系统'
    },
  ]
})
// 司法监狱
const prisonApp = ref({
  title: '司法监狱',
  logo: '/img/app/jinghui.png',
  apps: [
    {
      name: '狱警通',
      logo: '/img/app/yjt.png',
      excerpt: '私有化部署的内网“微信”APP'
    },
    {
      name: '智慧监狱应用',
      logo: '/img/app/zhjy.png',
      excerpt: '智慧监狱业务应用'
    },
    {
      name: '惠警应用',
      logo: '/img/app/hjyy.png',
      excerpt: '新时代建警治警爱警暖警信息化助手'
    },
  ]
})
// 法院
const courtApp = ref({
  title: '法院',
  logo: '/img/app/fayuan.png',
  apps: [
    {
      name: '移动办公加密通信服务',
      logo: '/img/app/ydbgjm.png',
      excerpt: '私有化部署的内网“微信”APP'
    }
  ]
})
// 消防
const fireProtApp = ref({
  title: '法院',
  logo: '/img/app/xiaofang.png',
  apps: [
    {
      name: '消防指挥调度',
      logo: '/img/app/xfzhdd.png',
      excerpt: '指挥调度，警情、警力、现场、调度、过程可视'
    },
    {
      name: '消防战训管理',
      logo: '/img/app/xfzxgl.png',
      excerpt: '消防战训管理'
    },
    {
      name: '消防宝',
      logo: '/img/app/xfb.png',
      excerpt: '战备勤管理与消防指挥研判平台'
    }
  ]
})
// 档案
const filesApp = ref({
  title: '档案',
  logo: '/img/app/dangan.png',
  apps: [
    {
      name: '档案宝',
      logo: '/img/app/dab.png',
      excerpt: '电子档案管理系统、声像档案管理系统',
      link: '/product_archiveSoftware'
    },
    {
      name: '项目解决方案',
      logo: '/img/app/xmjjfa.png',
      excerpt: '数字档案馆/室，智慧档案库房',
      link: '/product_projectSolution'
    },
    {
      name: '外包服务',
      logo: '/img/app/wbfw.png',
      excerpt: '档案整理、数字化加工、档案信息化咨询/室，智慧档案库房',
      link: '/product_outService'
    },
    {
      name: '硬件产品',
      logo: '/img/app/yjcp.png',
      excerpt: '密集架、扫描仪、除湿机、档案盒',
      link: '/product_hardware'
    }
  ]
})
// 政府
const govermentApp = ref({
  title: '政府',
  logo: '/img/app/zhengfu.png',
  apps: [
    {
      name: '一网协同',
      logo: '/img/app/ywxt.png',
      excerpt: '政府运行“一网协同”'
    },
    {
      name: '一网统管',
      logo: '/img/app/ywtg.png',
      excerpt: '政府治理“一网统管”'
    },
    {
      name: '一网通办',
      logo: '/img/app/ywtb.png',
      excerpt: '政务服务“一网通办”，智慧互联网+服务助手平台'
    },
    {
      name: '大数据IOC可视化',
      logo: '/img/app/ioc.png',
      excerpt: '数据可视化决策支持'
    },
    {
      name: '公务出行',
      logo: '/img/home/spell_car.png',
      excerpt: '为机关单位提供公车出行服务'
    },
  ]
})
// 智慧边海防
const borderDefendApp = ref({
  title: '智慧边海防',
  logo: '/img/app/zgbhf.png',
  apps: [
    {
      name: '指挥调度',
      logo: '/img/app/yjzhdd.png',
      excerpt: '指挥调度，警情、警力、现场、调度、过程可视'
    },
    {
      name: '综合预警',
      logo: '/img/app/zhyj.png',
      excerpt: '移动端千万级消息推送平台'
    },
    {
      name: '可视化指挥',
      logo: '/img/app/kshzh.png',
      excerpt: '雷视一体化可视融合指挥'
    },
    {
      name: '指挥控制',
      logo: '/img/app/zhkz.png',
      excerpt: '基于GIS的泛在感知指挥联动'
    },
  ]
})
// 城管
const cityAdminApp = ref({
  title: '城管',
  logo: '/img/app/chengguan.png',
  apps: [
    {
      name: '智慧城管平台',
      logo: '/img/app/zhcg.png',
      excerpt: '智慧城管大数据云平台'
    },
    {
      name: '综合行政执法平台',
      logo: '/img/app/zhxz.png',
      excerpt: '智慧城管综合行政执法平台'
    }
  ]
})
// 交警
const trafficPoliceApp = ref({
  title: '交警',
  logo: '/img/app/jiaojing.png',
  apps: [
    {
      name: '微劝导',
      logo: '/img/app/wqd.png',
      excerpt: '落实公安部交管局“一盔一带”行动计划，助力文明城市迎检工作',
      link: '/product_microAdvice'
    }
  ]
})
// 企业
const enterpriseApp = ref({
  title: '企业',
  logo: '/img/app/qiye.png',
  apps: [
    {
      name: '内网“微信”',
      logo: '/img/app/nwwx.png',
      excerpt: '私有化部署内网“微信”APP'
    },
    {
      name: '门户与应用市场',
      logo: '/img/app/mhyysc.png',
      excerpt: '把小程序搬进APP'
    },
    {
      name: '统一门户与统一认证',
      logo: '/img/app/tymh.png',
      excerpt: '信息系统内部门户和统一身份管理系统'
    },
  ]
})
// 应急
const emergencyApp = ref({
  title: '应急',
  logo: '/img/app/yingji.png',
  apps: [
    {
      name: '应急宝',
      logo: '/img/app/nwwx.png',
      excerpt: '战备勤管理与应急指挥研判平台'
    },
    {
      name: '应急指挥调度',
      logo: '/img/app/yjzhdd2.png',
      excerpt: '指挥调度，警情、警力、现场、调度、过程可视'
    }
  ]
})
// 疫情防控
const plaguePrevApp = ref({
  title: '疫情防控',
  logo: '/img/app/yiqingfangkong.png',
  apps: [
    {
      name: '疫情指挥调度',
      logo: '/img/app/yqzhdd.png',
      excerpt: '基层社会治理可视化指挥调度一张图系统和智慧社区综合信息平台'
    },
    {
      name: '疫情防控访客管理',
      logo: '/img/app/yqfk.png',
      excerpt: '来访预约访客管理系统'
    },
    {
      name: '疫情卡口小战士',
      logo: '/img/app/xzs.png',
      excerpt: '疫情防控卡口电子哨兵'
    }
  ]
})
// 物联网
const iotApp = ref({
  title: '物联网',
  logo: '/img/app/wlw.png',
  apps: [
    {
      name: 'AIoTPaaS物联网服务平台',
      logo: '/img/app/AiIOT.png',
      excerpt: '面向智慧城市智能计算，智能装备，智能感知设备的物联网PaaS平台'
    },
    {
      name: '动环盒子 (4G)',
      logo: '/img/app/dhhz.png',
      excerpt: '带温湿度、光感、电源1进10路出，带电池和4G告警模块的动环监控',
      link: '/product_dynamicRingBox'
    },
    {
      name: '动环交换机 (4G)',
      logo: '/img/app/dhjhj.png',
      excerpt: '带交换机功能的动环监控',
      link: '/product_dynamicLoopSwitch'
    },
    {
      name: '5G动环网关',
      logo: '/img/app/5Gdh.png',
      excerpt: '带5G数据网关，可以实现远程控制的动环监控',
      link: '/product_dynamicGateway'
    },
    {
      name: '路由器',
      logo: '/img/home/router.png',
      excerpt: '多功能路由器、5G工业路由器、无线路由器、4G工业路由器',
      link: '/product_router'
    },
    {
      name: '消费型电子',
      logo: '/img/app/wlw.png',
      excerpt: '红环main_loop系列消费电子产品'
    },
    {
      name: '硬件定制',
      logo: '/img/app/yjdz.png',
      excerpt: 'MTK、RTD安卓广告机,RK安卓主机，QCA,IPQ，高通等方案定制开发'
    },
  ]
})
// 应用软件定制与运维服务外包
const customizeApp = ref({
  title: '应用软件定制与运维服务外包',
  logo: '/img/app/yyrjdz.png',
  apps: [
    {
      name: '应用软件定制',
      logo: '/img/home/xl_13.png',
      excerpt: '应用定制开发一站式服务',
      link: '/product_customizeApp'
    },
    {
      name: '运维服务外包',
      logo: '/img/app/zdh.png',
      excerpt: 'IT驻场运营运维'
    },
    {
      name: '流程自动化',
      logo: '/img/app/yw.png',
      excerpt: '电子员工'
    },
    {
      name: '微信公众号维护服务',
      logo: '/img/app/wechat2.png',
      excerpt: '一站式微信公众号运维运营'
    }
  ]
})
// 海外[一带一路] English
const overseasApp = ref({
  title: '海外[一带一路] English',
  logo: '/img/app/haiwai.png',
  apps: [
    {
      name: '专属“微信” IM and Mini program',
      logo: '/img/app/ywxt.png',
      excerpt: '即时通讯工具与小程序开发运营平台'
    },
    {
      name: '政务服务 Government Services',
      logo: '/img/app/zwfw.png',
      excerpt: '政务通办、政务协同、政务统管应用'
    }
  ]
})

// 客户案例
const caseData = ref([
  '/img/solution/1p.png',
  '/img/solution/2p.png',
  '/img/solution/3p.png',
  '/img/solution/4p.png',
  '/img/solution/5p.png',
  '/img/solution/6p.png',
  '/img/solution/7p.png',
  '/img/solution/8p.png',
  '/img/solution/9p.png',
  '/img/solution/10p.png',
  '/img/solution/11p.png',
  '/img/solution/12p.png',
])
</script>

<style lang="scss" scoped>
.page_container {
  width: 100%;
  height: auto;
}
.banner {
  width: 100%;
  height: 300px;
  background-image: url('/img/solution/banner.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    color: #fff;
    font-size: 40px;
  }
  span {
    font-size: 16px;
    color: #fff;
  }
}
.panel_wrapper {
  padding: 60px 0;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  &_title {
    padding: 60px 0;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>