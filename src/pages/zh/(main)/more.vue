<template>
  <div class="container">
    <div class="panel_wrapper">
      <h2 class="panel_title">
        基础软件
      </h2>
      <!-- 双系统安全移动办公 -->
      <AppPanel :data="doubleSysApp" />
      <!-- 指挥调度与IOC大数据可视化 -->
      <AppPanel :data="viewableApp" />
      <!-- 多租户aPaaS云 -->
      <AppPanel :data="aPaaSApp" />

      <h2 class="panel_title">
        应用产品
      </h2>
      <AppPanel :data="application" />
      <h2 class="panel_title">
        云SaaS软件
      </h2>
      <AppPanel :data="saasApp" />
      <h2 class="panel_title">
        安全产品
      </h2>
      <AppPanel :data="securityApp" />

      <!-- 计算机保密防范 -->
      <AppPanel :data="privacyApp" />
      <!-- 公安 -->
      <AppPanel :data="policeApp" />
      <!-- 智慧派出所 -->
      <AppPanel :data="policeStationApp" />
      <!-- 检察 -->
      <AppPanel :data="procuratorialApp" />
      <!-- 司法监狱 -->
      <AppPanel :data="prisonApp" />
      <!-- 法院 -->
      <AppPanel :data="courtApp" />
      <!-- 消防 -->
      <AppPanel :data="fireProtApp" />
      <!-- 档案 -->
      <AppPanel :data="filesApp" />
      <!-- 政府 -->
      <AppPanel :data="govermentApp" />
      <!-- 智慧边海防 -->
      <AppPanel :data="borderDefendApp" />
      <!-- 城管 -->
      <AppPanel :data="cityAdminApp" />
      <!-- 交警 -->
      <AppPanel :data="trafficPoliceApp" />
      <!-- 企业 -->
      <AppPanel :data="enterpriseApp" />
      <!-- 应急 -->
      <AppPanel :data="emergencyApp" />
      <!-- 疫情防控 -->
      <AppPanel :data="plaguePrevApp" />
      <!-- 物联网 -->
      <AppPanel :data="iotApp" />
      <!-- 应用软件定制与运维服务外包 -->
      <AppPanel :data="customizeApp" />
      <!-- 海外[一带一路] English -->
      <AppPanel :data="overseasApp" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 双系统安全移动办公
const doubleSysApp = ref({
  title: '双系统安全移动办公',
  logo: '/img/home/sxt.png',
  apps: [
    {
      name: '即时通讯',
      logo: '/img/home/jstx.png',
      excerpt: '单聊、群聊、图文、视频等即时通讯IM',
      link: '/product_instantMsg'
    },
    {
      name: 'OortCloud智能体',
      logo: '/img/home/znt.png',
      excerpt: 'OortCloud智能体'
    },
    {
      name: '门户与应用仓库',
      logo: '/img/home/xl_3.png',
      excerpt: '把小程序搬进APP,快速打造超级APP',
      link: '/product'
    },
    {
      name: '移动应用开发支撑平台',
      logo: '/img/home/xl_4.png',
      excerpt: '移动应用开发支撑平台'
    },
    {
      name: '安全管控MDM',
      logo: '/img/home/xl_5.png',
      excerpt: '设备管家--MDM移动终端安全管理平台'
    },
    {
      name: '定制手机型安全终端与Pad终端',
      logo: '/img/home/xl_6.png',
      excerpt: '手机和Pad终端安全加固组件与刷机服务包'
    }
    // {
    //   name: '定制安全Pad终端',
    //   logo: '/img/home/xl_7.png',
    //   excerpt: 'Pad终端安全加固组件与刷机服务包'
    // }
  ]
})
// 指挥调度与IOC大数据可视化
const viewableApp = ref({
  title: '指挥调度与IOC大数据可视化',
  logo: '/img/home/zhdd.png',
  apps: [
    {
      name: 'PGIS地图引擎能力支撑平台(PGISPaaS)',
      logo: '/img/home/xl_8.png',
      excerpt: 'PGIS地图引擎'
    },
    {
      name: '指挥调度一张图',
      logo: '/img/home/xl_9.png',
      excerpt: '总揽指挥调度一张图，用于电子指挥大屏操作'
    },
    {
      name: 'OORT.DA',
      logo: '/img/home/da.png',
      excerpt: '大数据处理与IOC可视化系统'
    }
  ]
})
// 多租户aPaaS云
const aPaaSApp = ref({
  title: '多租户aPaaS云',
  logo: '/img/home/dzh.png',
  apps: [
    {
      name: '智慧云aPaaS应用支撑平台(aPaaS)',
      logo: '/img/home/xl_11.png',
      excerpt: '个性化需求快递迭代、支撑能力底座'
    },
    {
      name: '移动端服务化能力支撑平台(mPaaS)',
      logo: '/img/home/xl_11.png',
      excerpt: '移动应用开发支撑平台'
    },
    {
      name: '“奥尔特云”开发平台',
      logo: '/img/home/xl_11.png',
      excerpt: '低无代码快速开发平台'
    }
  ]
})
// 应用产品
const application = ref({
  title: '',
  logo: '',
  apps: [
    {
      name: '华为IdeaHub警务宝',
      logo: '/img/home/yycp_1.png',
      excerpt: '面向派出所、警务室的一体化智慧基层平台系统'
    },
    {
      name: '警务宝一体机',
      logo: '/img/home/yycp_1.png',
      excerpt: '分局-派出所-警务站多任务多级联动'
    },
    {
      name: '基层一站式工作平台',
      logo: '/img/home/yycp_1.png',
      excerpt: '图查要素，屏观态势，打造警务信息化基石'
    },
    {
      name: '警务宝应用平台',
      logo: '/img/home/yycp_4.png',
      excerpt: '跨网段、多终端、全连接任务协同办理'
    },
    {
      name: '办公宝',
      logo: '/img/home/yycp_5.png',
      excerpt: '私有云部署的移动安全办公云平台',
      link: '/product_office'
    },
    {
      name: '指挥调度一张图',
      logo: '/img/home/zhddyzt.png',
      excerpt: '可视化实战指挥调度一张图系统'
    },
    {
      name: '警务服务总线',
      logo: '/img/home/yycp_7.png',
      excerpt: '基于OpenSergo统一微服务治理警务服务总线软件'
    },
    // {
    //   name: '智慧档案',
    //   logo: '/img/home/zhda.png',
    //   excerpt: '电子档案安全管理平台'
    // },
    {
      name: '党建宝',
      logo: '/img/home/yycp_9.png',
      excerpt: '党建宝平台',
      link: '/product_partyBuilder'
    },
    {
      name: '警卫宝',
      logo: '/img/home/yycp_10.png',
      excerpt: '面向传达室、来访人员预约、来访人员预判的一体化基层平台'
    },
    {
      name: '治安宝',
      logo: '/img/home/yycp_11.png',
      excerpt: '面向群防群治的立体化作战指挥调度的一体化基层平台'
    },
    {
      name: '视频宝',
      logo: '/img/home/yycp_12.png',
      excerpt: 'OpenGBS可视化国标(GB28181)指挥调度平台'
    },
    {
      name: 'GB28181国标推流一体机',
      logo: '/img/home/yycp_13.png',
      excerpt: '支持设备或平台GB28181标准协议注册接入，向上级联'
    },
    {
      name: '视频宝一体机',
      logo: '/img/home/yycp_14.png',
      excerpt: '国标流媒体服务'
    },
    {
      name: '天琴智宝',
      logo: '/img/home/yycp_17.png',
      excerpt: '智慧校园人脸考勤推送'
    },
    {
      name: '移动阅卷',
      logo: '/img/home/yycp_18.png',
      excerpt: '检务移动终端辅助业务系统'
    },
    {
      name: '领导驾驶仓',
      logo: '/img/home/yycp_19.png',
      excerpt: '领导指挥一屏纵览'
    },
    {
      name: '村警平台',
      logo: '/img/home/yycp_21.png',
      excerpt: '一村一警社区管控平台'
    },
    {
      name: '辅警平台',
      logo: '/img/home/yycp_22.png',
      excerpt: '智慧新警务辅警管理平台'
    },
    {
      name: '智能客服',
      logo: '/img/home/yycp_23.png',
      excerpt: '智能音视频通讯服务平台'
    },
    {
      name: '社区警务',
      logo: '/img/home/yycp_24.png',
      excerpt: '结合辅警应用、 警务通民警应用，实现警务工作分流'
    },
    {
      name: '合成作战',
      logo: '/img/home/yycp_25.png',
      excerpt: '“情指勤舆”一体化合成作战中心'
    },
    {
      name: '110报警定位服务',
      logo: '/img/home/yycp_27.png',
      excerpt: '110报警精准位置服务'
    },
    {
      name: '智能审批',
      logo: '/img/home/znsp.png',
      excerpt: '工作流引擎和自定义表单服务系统'
    },
    {
      name: '综合预警平台',
      logo: '/img/home/yycp_29.png',
      excerpt: '移动端千万级消息推送平台'
    },
    {
      name: '任务管理',
      logo: '/img/home/yycp_30.png',
      excerpt: '任务协作、流程管理'
    },
    {
      name: '案事件督办协作',
      logo: '/img/home/yycp_31.png',
      excerpt: '案事件流转，督办协作管理平台'
    },
    {
      name: '检务宝',
      logo: '/img/app/jianwubao.png',
      excerpt: '移动检务宝平台'
    },
    {
      name: 'AI办公',
      logo: '/img/home/aibg.png',
      excerpt: '流程管理、信息门户、知识管理、移动办公、合同管理、人事管理、采购管理、费控管理等数字化办公'
    },
    {
      name: 'XCreator敏捷发布平台',
      logo: '/img/app/XCreator.png',
      excerpt: '全媒体矩阵信息发布平台'
    }
  ]
})
// 云Saas软件
const saasApp = ref({
  title: '',
  logo: '',
  apps: [
    {
      name: '企业办公',
      logo: '/img/home/qybg.png',
      excerpt: '落实公安部交管局“一盔一带”行动计划，助力文明城市迎检工作',
      link: '/product_microAdvice'
    },
    {
      name: '智慧宣传',
      logo: '/img/home/zhxc.png',
      excerpt: '反诈APP推广神器——反诈推广码',
      link: '/product_antiFraud'
    },
    {
      name: '互联网+公安政务服务',
      logo: '/img/home/aqcp_3.png',
      excerpt: '政务服务“一网通办”'
    },
    {
      name: '群防群治',
      logo: '/img/home/aqcp_4.png',
      excerpt: '“互联网+”大数据思维下建立的公安与群众的连接器'
    },
    {
      name: '辅警平台',
      logo: '/img/home/yycp_22.png',
      excerpt: '智慧新警务辅警管理平台'
    },
    {
      name: '智慧园林',
      logo: '/img/home/zhyl.png',
      excerpt: '智慧园林管理平台'
    },
    {
      name: '智慧安保',
      logo: '/img/home/zhab.png',
      excerpt: '智慧安保管理平台'
    },
    {
      name: '智慧档案',
      logo: '/img/home/zhda.png',
      excerpt: '电子档案安全管理平台'
    }
  ]
})
// 安全产品
const securityApp = ref({
  title: '',
  logo: '',
  apps: [
    {
      name: '安全管控MDM',
      logo: '/img/home/aqcp_01.png',
      excerpt: '设备管家--MDM移动终端安全管理平台'
    },
    {
      name: '枪弹装备室',
      logo: '/img/home/aqcp_5.png',
      excerpt: '枪弹柜、警用装备柜及其管理平台'
    },
    {
      name: '定制手机型安全终端',
      logo: '/img/home/xl_6.png',
      excerpt: '手机终端安全加固组件与刷机服务包'
    },
    {
      name: '定制安全Pad终端',
      logo: '/img/home/xl_7.png',
      excerpt: 'Pad终端安全加固组件与刷机服务包'
    },
    {
      name: '计算机保密防范',
      logo: '/img/app/icon_lock.png',
      excerpt: '计算机信息保密防范管理平台'
    }
  ]
})
// 计算机保密防范
const privacyApp = ref({
  title: '计算机保密防范',
  logo: '/img/home/aqcp_05.png',
  apps: [
    {
      name: '单向光导机',
      logo: '/img/home/aqcp_06.png',
      excerpt: '大容量信息设备光单向传输系统',
      link: '/product_lightGuide'
    },
    {
      name: '新一代中间机',
      logo: '/img/home/aqcp_07.png',
      excerpt: '移动存储安全交换系统',
      link: '/product_midMachine'
    },
    {
      name: '红盘、蓝盘安全U盘系统',
      logo: '/img/home/aqcp_08.png',
      excerpt: '安全U盘系统',
      link: '/product_uDisk'
    },
    {
      name: '终端数据跨网安全传输系统',
      logo: '/img/home/aqcp_11.png',
      excerpt: '终端数据跨网安全传输系统',
      link: '/product_terminalDataSys'
    },
    {
      name: '税务自助交换安全系统',
      logo: '/img/home/yycp_22.png',
      excerpt: '税务自助交换安全系统',
      link: '/product_taxExchangeSys'
    }
  ]
})
// 公安
const policeApp = ref({
  title: '公安',
  logo: '/img/demo/menu/ga.png',
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
    }
  ]
})
// 智慧派出所
const policeStationApp = ref({
  title: '智慧派出所',
  logo: '/img/demo/menu/zhpcs.png',
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
    }
  ]
})
// 检察
const procuratorialApp = ref({
  title: '检察',
  logo: '/img/demo/menu/jcy.png',
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
    }
  ]
})
// 司法监狱
const prisonApp = ref({
  title: '司法监狱',
  logo: '/img/demo/menu/jy.png',
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
    }
  ]
})
// 法院
const courtApp = ref({
  title: '法院',
  logo: '/img/demo/menu/fy.png',
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
  title: '消防',
  logo: '/img/demo/menu/xf.png',
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
  logo: '/img/demo/menu/da.png',
  apps: [
    {
      name: '智慧档案',
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
  logo: '/img/demo/menu/zf.png',
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
    }
  ]
})
// 智慧边海防
const borderDefendApp = ref({
  title: '智慧边海防',
  logo: '/img/demo/menu/zhbhf.png',
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
    }
  ]
})
// 城管
const cityAdminApp = ref({
  title: '城管',
  logo: '/img/demo/menu/cg.png',
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
  logo: '/img/demo/menu/jj.png',
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
  logo: '/img/demo/menu/qy.png',
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
    }
  ]
})
// 应急
const emergencyApp = ref({
  title: '应急',
  logo: '/img/demo/menu/yj.png',
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
  logo: '/img/demo/menu/yqfk.png',
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
  logo: '/img/demo/menu/wlw.png',
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
    }
  ]
})
// 应用软件定制与运维服务外包
const customizeApp = ref({
  title: '应用软件定制与运维服务外包',
  logo: '/img/demo/menu/yyrjdz.png',
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
      excerpt: '电子员工',
      link: '/product_autoProcess'
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
  logo: '/img/demo/menu/hw.png',
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
</script>

<style lang="scss" scoped>
.page_container {
  width: 100%;
  height: auto;
}
.panel_wrapper {
  padding: 60px 0;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.panel_title {
  padding: 0 16px;
  font-size: 24px;
  color: #5378b7;
  font-weight: 600;
}
</style>
