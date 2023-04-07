<template>
  <div class="page_container">
    <div class="carousel_container">
      <Carousel :carouse-list="carouseList"></Carousel>
    </div>
    <div>
      <!-- 硬件产品 -->
      <HomeHardwarePanel :data="hardwareCards"/>
      <!-- 软件产品 -->
      <HomeSoftwarePanel :data="softwareCards"/>
      <!-- 专业服务 -->
      <HomeSolutionPanel :data="tabsContent"/>
      <!-- 合作伙伴 -->
      <HomePartnerPanel :data="partnerData"/>
      <!-- 新闻中心 -->
      <HomeNewsPanel :data="newsList"/>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Resp {
  code: number,
  data: any
}

const url =  'https://www.oortcloudsmart.com/oort/oortcloud-cetcnewsservice/api/v1/cetcnewservice/new_list'

const carouseList = ref([
  { 
    url: '/img/home/bg_2.png',
    title: '创造无限可能',
    desc:'公共安全“私有云智能化应用建设解决方案”提供商',
    buttons:[]
  },
  { 
    url: '/img/home/jwb.png',
    title: '警务宝一体机',
    desc: '面向派出所、警务室的一体化智慧基层平台',
    buttons: [{ text: '立即购买' } , { text: '了解详情' }, { text: '立即体验' }, { text: '观看视频' }]
  },
  { url: '/img/home/yzt_bg.png',
    title: '智慧调度一张图',
    desc: '打造全警钟、全平台、资源整合、系统集成、信息共享，实现接警、指挥、调度为一体的指挥中心，从而更有效的提高治安预防、控制、制止的反应能力',
    buttons: [{ text: '立即购买' } , { text: '了解详情' }, { text: '立即体验' }, { text: '观看视频' }]
  },
  { url: '/img/home/sypt.png',
    title: '私有云部署的移动安全办公云平台',
    desc: '对标公有云上的钉钉，企业微信的专门私有化部署的数字化移动协同办公平台，数据自己掌握，安全可控。打造了一个涵盖即时消息、电子邮件、音视频会议、资料分享、流程申请与',
    buttons: [{ text: '立即购买' } , { text: '了解详情' }, { text: '立即体验' }, { text: '观看视频' }]
  },
  { 
    url: '/img/home/mhck.png',
    title: '门户与应用仓库',
    desc: '快速打造数字化超级App，拥有领先于市场的小程序容器技术，可为您提供敏捷、安全的最佳实践，是数字化时代下企业移动开发的不二之选。',
    buttons: [{ text: '立即购买' } , { text: '了解详情' }, { text: '立即体验' }]
  }
])

const hardwareCards = ref([
  {
    title: '移动存储',
    bg: 'pane_1',
    buttons: [
      { name: 'U盘' },
      { name: '移动硬盘' }
    ]
  },
  {
    title: '网络产品',
    bg: 'pane_2',
    buttons: [
      { name: '网关' },
      { name: '4G工业路由器' },
      { name: '5G工业路由器' },
      { name: '交换机' },
    ]
  },
  {
    title: '智能终端',
    bg: 'pane_3',
    buttons: [
      { name: '国产化笔记本' },
      { name: '国产化平板电脑' },
      { name: '消费电子' },
      { name: 'IOT元件库' }
    ]
  },
  {
    title: '数据采集',
    bg: 'pane_1',
    buttons: [
      { name: '动环盒子' },
      { name: '动环交换机' },
      { name: '动环网关' },
    ]
  },
])

const softwareCards = ref([
  {
    title: '基础软件',
    logo: '/img/index/software/basic.png',
    content: [
      {
        title: '安全移动办公',
        list: [
          { name: '即时通讯' },
          { name: '移动应用开发支撑平台' },
          { name: '门户与应用仓库' },
          { name: '安全管控MDM' },
          { name: '私有云部署的移动安全办公云平台' },
          { name: '定制手机型安全终端' },
          { name: '定制安全Pad终端' },
        ]
      },
      {
        title: '私有云',
        list: [
          { name: '智慧云aPaaS应用支撑平台(aPaaS)' },
          { name: '移动端服务化能力支撑平台(mPaaS)' },
          { name: 'PGIS地图引擎能力支撑平台(PGISPaaS)' },
          { name: '“奥尔特云”开发平台' },
          { name: '跨网智能网关' },
          { name: 'Kuboard' },
          { name: '分布式文件存储系统' },
          { name: '天琴虚拟化软件' },
        ]
      },
      {
        title: '指挥调度与IOC大数据可视化',
        list: [
          { name: '指挥调度一张图' },
          { name: '大数据IOC可视化平台(Apache Superset plus)' },
          { name: 'Apache Superset' },
          { name: '大数据底座' }
        ]
      }
    ]
  },
  {
    title: '应用软件',
    logo: '/img/index/software/app.png',
    content: [
      {
        title: 'OA数字化办公',
        list: [
          { name: '智能客服' },
          { name: '智能审批' },
          { name: '任务管理' },
          { name: '办公宝' }
        ]
      },
      {
        title: 'XCreator敏捷发布平台',
        list: [
          { name: '党建宝' }
        ]
      },
      {
        title: '视频宝',
        list: [
          { name: 'OpenGBS可视化国标(GB28181)指挥调度平台' }
        ]
      },
      {
        title: '警卫宝',
        list: [
          { name: '面向传达室、来访人员预约、来访人员预判的一体化基层平台' }
        ]
      },
      {
        title: '天琴智宝',
        list: [
          { name: '智慧校园人脸考勤推送' }
        ]
      }
    ]
  },
  {
    title: '云SaaS软件',
    logo: '/img/index/software/sass.png',
    content: [
      {
        title: '交通微劝导系统',
        list: [
          { name: '落实公安部交管局“一盔一带”行动计划，助力文明城市迎检工作' }
        ]
      },
      {
        title: '反诈中心推广统计平台',
        list: [
          { name: '反诈APP推广神器 — 反诈推广码' }
        ]
      },
      {
        title: '互联网+公安政务服务',
        list: [
          { name: '政务服务“一网通办”' }
        ]
      },
      {
        title: '群防群治',
        list: [
          { name: '“互联网+”大数据思维下建立的公安与群众' }
        ]
      },
      {
        title: '辅警平台',
        list: [
          { name: '智慧新警务辅警移动警务应用平台' }
        ]
      }
    ]
  },
  {
    title: '安全产品',
    logo: '/img/index/software/security.png',
    content: [
      {
        title: '安全管控MDM',
        list: [
          { name: '设备管家 — MDM移动终端安全管理平台' }
        ]
      },
      {
        title: '计算机保密防范',
        list: [
          { name: '单向光导机' },
          { name: '新一代“中间机”' },
          { name: '红盘、蓝盘安全U盘系统' },
          { name: '终端数据跨网安全传输系统' },
          { name: '税务自助交换安全系统' },
        ]
      },
      {
        title: '枪弹装备室',
        list: [
          { name: '枪弹柜、警用装备柜及其管理平台' }
        ]
      },
      {
        title: '定制手机型安全终端',
        list: [
          { name: '手机终端安全加固组件与刷机服务包' }
        ]
      },
      {
        title: '定制安全Pad终端',
        list: [
          { name: 'Pad终端安全加固组件与刷机服务包' }
        ]
      }
    ]
  }
])

const tabsContent = ref([
  {
    tab: '公安',
    title: '新一代移动警务平台',
    content: '让海量警务服务快速赋能基层派出所，从“汗水警务”迈向“智慧警务”',
    site: '/index_publicSecurity',
    cover: '/img/home/smartcity.png'
  },
  {
    tab: '智慧派出所',
    title: '智慧派出所服务',
    content: '数据随用即得，战法随想随用，应用随需随变。精准数据筛选、灵活碰撞分析，满足不同无技术 背景用户对数据的应用需求，从根本上改变了传统软件的开发模式，让新需求在短时间内得到实现。',
    site: '/index_policeSolve',
    cover: '/img/home/mt2.png'
  },
  {
    tab: '检察院',
    title: '检察服务',
    content: '智慧检务移动平台是基于国产化华为云、华为智慧屏、华为智能协作能力无缝结合的检务一体化平台，同时支持了面向基层的SaaS应用软件，以及为第三方应用开发提供个性化需求快速迭代底座。',
    site: '/index_medical',
    cover: '/img/home/education.png'
  },
  {
    tab: '司法监狱',
    title: '司法监狱解决方案',
    content: '立足于智慧司法监狱领域实际业务需求，结合自身优势资源与丰富的产品项目经验，全面助力“智慧司法”建设，为其他司法机关提供定制化智慧司法、智慧监狱解决方案。',
    site: '',
    cover: '/img/home/mt5.png'
  },
  {
    tab: '智慧边海防',
    title: '智慧边海防服务',
    content: '智慧边海防是维护边海防安全稳定的重要支撑,是边海防管理“五位一体”合力的技术支撑,是推动边海防建设创新发展的必由之路。着力破除“统、融、智、密、制”方面的体制障碍，在合力强边固防、数据融合共享、智能高效管控、安全便捷通联、体制机制配套上求突破、见成效。',
    site: '',
    cover: '/img/home/mt5.png'
  },
  {
    tab: '政府',
    title: '智慧政府',
    content: '实现城市运行一网统管，公务办公一网协同，政务服务一网通办，公共资源一网通享，依托公司智慧化产品，将智慧化应用推向各局委办，比如出行拼车、顺风车、派车为机关单位提供公车出行服务；各局委办跨地区、跨层级、跨部门政务协同以及数据可视化决策支持。',
    site: '',
    cover: '/img/home/mt6.png'
  },
  {
    tab: '更多',
    title: '',
    content: '',
    site: '',
    cover: ''
  }
])

const partnerData = ref<Array<string>>([
  '/img/home/1.png',
  '/img/home/2.png',
  '/img/home/3.png',
  '/img/home/4.png',
  '/img/home/5.png',
  '/img/home/6.png',
  '/img/home/7.png',
  '/img/home/8.png',
  '/img/home/9.png',
  '/img/home/10.png',
  '/img/home/11.png',
  '/img/home/12.png',
])

const newsList = ref<Array<News>>([])

onBeforeMount(() => {
  partnerData.value.map(el => replaceImgPrefix(el))
  console.log(tabsContent.value)
})

getNewsList()

async function getNewsList() {
  const params = {
    pageIndex: 1,
    pageSize: 4,
    newsType: 1,
    status: 1
  }
  const { data } = await useFetch(url,  { body: params, method: 'post'})
  const res:Resp = toRaw(data.value) as Resp
  if (res.code === 200) {
    newsList.value = res.data.list
  }
}

// onBeforeMount(() => {
//   getNews()
// })
// const { data: news } = useLazyFetch(url,  { body: {
//     pageIndex: 1,
//     pageSize: 4,
//     newsType: 1,
//     status: 1
//   }, method: 'post'})
// watch(news, (newData) => {
//   console.log(news)
// })

</script>


<style scoped lang="scss">
.carousel_container {
  height: 500px;
  width: 100%;
}
</style>