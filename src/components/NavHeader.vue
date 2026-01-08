<template>
  <div class="header">
    <div class="header_wrapper">
      <div class="header_logo" @click="backToHome">
        <img src="/img/logo_white.png" />
      </div>
      <div class="header_menu">
        <div class="header_tabs">
          <NuxtLink to="/zh/">
            首页
          </NuxtLink>
          <n-popover trigger="hover" arrow-point-to-center placement="bottom">
            <template #trigger>
              <NuxtLink to="/zh/hardware">
                硬件产品
              </NuxtLink>
            </template>
            <template #default>
              <NavHeaderDropdown :menu="hardwareMenu" width="60rem" />
            </template>
          </n-popover>
          <n-popover trigger="hover" arrow-point-to-center placement="bottom">
            <template #trigger>
              <NuxtLink to="/zh/product" @mouseenter="handleMouseenter('software')" @mouseleave="handleMouseleave('software')">
                软件产品
              </NuxtLink>
            </template>
            <template #default>
              <NavHeaderDropdown :menu="softwareMenu" width="82rem">
                <div class="dropdown_col" style="flex: 1.5">
                  <p class="dropdown_col_title">
                    基础软件
                  </p>
                  <div class="dropdown_col_sort">
                    <img class="dropdown_col_sort_logo" src="/img/home/sxt.png" />
                    <span class="dropdown_col_sort_label">安全移动办公</span>
                  </div>
                  <NuxtLink to="/zh/product_instantMsg" class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_1.png" />
                    <span class="dropdown_col_item_label">即时通讯</span>
                    <!-- <span>NEW</span> -->
                  </NuxtLink>
                  <a href="https://www.myoumuamua.com/" target="_blank">
                    <div class="dropdown_col_item">
                      <img class="dropdown_col_item_logo" src="/img/home/xl_2.png" />
                      <span class="dropdown_col_item_label">私有云部署的移动安全办公云平台</span>
                    </div>
                  </a>
                  <NuxtLink to="/zh/product" class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_3.png" />
                    <span class="dropdown_col_item_label">门户与应用仓库</span>
                  </NuxtLink>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_5.png" />
                    <span class="dropdown_col_item_label">安全管控MDM</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_6.png" />
                    <span class="dropdown_col_item_label">定制手机型安全终端</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_7.png" />
                    <span class="dropdown_col_item_label">定制安全Pad终端</span>
                  </div>
                  <div class="dropdown_col_sort">
                    <img class="dropdown_col_sort_logo" src="/img/home/zhdd.png" />
                    <span class="dropdown_col_sort_label">指挥调度与IOC大数据可视化</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_9.png" />
                    <span class="dropdown_col_item_label">指挥调度一张图</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_10.png" />
                    <span class="dropdown_col_item_label">XSmart大数据IOC可视化平台</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/app/icon_apache.png" />
                    <span class="dropdown_col_item_label">Apache Superset</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/app/icon_xdata.png" />
                    <span class="dropdown_col_item_label">XDataStudio大数据底座</span>
                  </div>
                </div>
                <div class="dropdown_col" style="flex: 1.5; padding-top: 1.375rem;">
                  <p class="dropdown_col_title" />
                  <div class="dropdown_col_sort">
                    <img class="dropdown_col_sort_logo" src="/img/home/dzh.png" />
                    <span class="dropdown_col_sort_label">私有云</span>
                  </div>
                  <a href="http://oort.oortcloudsmart.com:32610/oort/oortcloud-frontservice/apaas_web/" target="_blank">
                    <div class="dropdown_col_item">
                      <img class="dropdown_col_item_logo" src="/img/home/xl_11.png" />
                      <span class="dropdown_col_item_label">智慧云aPaaS应用支撑平台（aPaaS）</span>
                    </div>
                  </a>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_12.png" />
                    <span class="dropdown_col_item_label">移动端服务化能力支撑平台（mPaaS）</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_4.png" />
                    <span class="dropdown_col_item_label">XMobileStudio移动应用开发支撑平台</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_8.png" />
                    <span class="dropdown_col_item_label">PGIS地图引擎能力支撑平台(PGISPaaS)</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/home/xl_13.png" />
                    <span class="dropdown_col_item_label">XDevStudio“奥尔特云”开发平台</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/app/icon_cloud.png" />
                    <span class="dropdown_col_item_label">XProxy跨网智能网关</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/app/icon_kuboard.png" />
                    <span class="dropdown_col_item_label">Kuboard</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/app/icon_cloud.png" />
                    <span class="dropdown_col_item_label">XFileStor分布式文件存储系统</span>
                  </div>
                  <div class="dropdown_col_item">
                    <img class="dropdown_col_item_logo" src="/img/app/icon_tianqin.png" />
                    <span class="dropdown_col_item_label">XCompute天琴虚拟化软件</span>
                  </div>
                </div>
              </NavHeaderDropdown>
            </template>
          </n-popover>
          <n-popover trigger="hover" arrow-point-to-center placement="bottom">
            <template #trigger>
              <NuxtLink to="/zh/services" @mouseenter="handleMouseenter('solution')" @mouseleave="handleMouseleave('solution')">
                专业服务
              </NuxtLink>
            </template>
            <template #default>
              <NavHeaderDropdown :menu="solutionMenu" width="65rem" />
            </template>
          </n-popover>
          <NuxtLink to="/zh/news">
            新闻动态
          </NuxtLink>
          <NuxtLink to="/zh/about">
            关于我们
          </NuxtLink>
        </div>
      </div>
      <div class="header_right">
        <n-popover trigger="hover" arrow-point-to-center placement="bottom">
          <template #trigger>
            <div class="header_right_demo" @mouseenter="handleMouseenter('demo')" @mouseleave="handleMouseleave('demo')">
              <img src="/img/demo/menu/demo.png" />
              <span>在线演示</span>
            </div>
          </template>
          <template #default>
            <div class="demo_div">
              <template v-for="(item, index) in demoMenu" :key="index">
                <NuxtLink
                  :to="'/zh' + item.link"
                  target="_blank"
                >
                  <div class="demo_div_item">
                    <img :src="item.logo" />
                    <div>
                      <span>{{ item.name }}</span>
                      <span>{{ item.desc }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </template>
              <NuxtLink to="/zh/demoAll">
                <div class="demo_div_item demo_div_item_more">
                  <img src="/img/demo/menu/more_f.png" />
                  <span>更多演示</span>
                  <img src="/img/demo/menu/more_a.png" />
                </div>
              </NuxtLink>
            </div>
          </template>
        </n-popover>
      </div>
    </div>
    <div class="header_other">
      <img src="/img/dashboard.png" />
      <div class="header_dialog">
        <div class="header_dialog_head">
          <div class="header_dialog_head_left">
            基础软件
          </div>
          <div class="header_dialog_head_right">
            <NuxtLink to="/zh/more">
              查看更多
            </NuxtLink>
          </div>
        </div>
        <div class="header_dialog_item">
          <div class="header_dialog_item_title">
            双系统安全移动办公
          </div>
          <div class="header_dialog_item_main">
            <div class="header_dialog_item_main_div">
              <img src="/img/app/chat.png" />
              <div>即时通讯</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/app/syy.png" />
              <div>私有云部署的移动安全办公云平台</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/home/xl_3.png" />
              <div>门户与应用仓库</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/app/mobile.png" />
              <div>移动应用开发支撑平台</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/home/xl_5.png" />
              <div>安全管控MDM</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/home/xl_6.png" />
              <div>定制手机型安全终端</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/home/xl_7.png" />
              <div>定制安全Pad终端</div>
            </div>
          </div>
        </div>
        <div class="header_dialog_item">
          <div class="header_dialog_item_title">
            指挥调度与IOC大数据可视化
          </div>
          <div class="header_dialog_item_main">
            <div class="header_dialog_item_main_div">
              <img src="/img/home/xl_9.png" />
              <div>指挥调度一张图</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/home/xl_10.png" />
              <div>XSmart大数据IOC可视化平台</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/app/icon_apache.png" />
              <div>Apache Superset</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="/img/app/icon_xdata.png" />
              <div>XDataStudio大数据底座</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NPopover } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

interface MenuItem{
  name: string,
  logo: string,
  link?: any,
  desc?: string
}

interface Menu {
  title: string,
  showTitle: boolean,
  menus: MenuItem[]
}

const router = useRouter()
const demoVisible = ref(false)
const hardwareMenu = ref<Menu[]>([
  {
    title: '移动存储',
    showTitle: true,
    menus: [
      { name: 'U盘', logo: '/img/app/icon_u.png' },
      { name: '移动硬盘', logo: '/img/app/icon_mobileu.png' }
    ]
  },
  {
    title: '网络产品',
    showTitle: true,
    menus: [
      { name: '网关', logo: '/img/home/router.png', link: '/product_router' },
      { name: '4G工业路由器', logo: '/img/app/dhhz.png', link: '/product_router' },
      { name: '5G工业路由器', logo: '/img/app/5Gdh.png', link: '/product_router' },
      { name: '交换机', logo: '/img/app/dhjhj.png', link: '/product_router' }
    ]
  },
  {
    title: '智能终端',
    showTitle: true,
    menus: [
      { name: '国产化笔记本', logo: '/img/app/icon_pc.png' },
      { name: '国产化平板电脑', logo: '/img/app/icon_pad.png' },
      { name: '消费电子', logo: '/img/app/icon_cpu.png' },
      { name: 'IOT元件库', logo: '/img/app/icon_iot.png' }
    ]
  },
  {
    title: '数据采集',
    showTitle: true,
    menus: [
      { name: '动环盒子', logo: '/img/app/icon_box.png', link: '/product_dynamicRingBox' },
      { name: '动环交换机', logo: '/img/app/icon_change.png', link: '/product_dynamicLoopSwitch' },
      { name: '动环网关', logo: '/img/app/icon_wlan.png', link: '/product_dynamicGateway' }
    ]
  }
])
const softwareMenu = ref<Menu[]>([
  {
    title: '应用产品',
    showTitle: true,
    menus: [
      { name: 'XOA数字化办公', logo: '/img/app/icon_xoa.png' },
      { name: 'XCreator敏捷发布平台', logo: '/img/app/icon_xcreator.png' },
      { name: '警卫宝', logo: '/img/home/yycp_10.png' },
      { name: '视频宝', logo: '/img/home/yycp_12.png' },
      { name: '天琴智宝', logo: '/img/home/yycp_17.png' }
    ]
  },
  {
    title: '云SaaS软件',
    showTitle: true,
    menus: [
      { name: '交通微劝导系统', logo: '/img/home/aqcp_1.png', link: '/product_microAdvice' },
      { name: '反诈中心推广统计平台', logo: '/img/home/aqcp_2.png', link: '/product_antiFraud' },
      { name: '互联网+公安政务服务', logo: '/img/home/aqcp_3.png' },
      { name: '群防群治', logo: '/img/home/aqcp_4.png' },
      { name: '辅警平台', logo: '/img/home/yycp_22.png' }
    ]
  },
  {
    title: '安全产品',
    showTitle: true,
    menus: [
      { name: '安全管控MDM', logo: '/img/home/aqcp_01.png' },
      { name: '枪弹装备室', logo: '/img/home/aqcp_5.png' },
      { name: '定制手机型安全终端', logo: '/img/home/dzh.png' },
      { name: '定制安全Pad终端', logo: '/img/home/xl_7.png' },
      { name: '计算机保密防范', logo: '/img/app/icon_lock.png' }
    ]
  }
])
const solutionMenu = ref<Menu[]>([
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '公安', logo: '/img/demo/menu/ga.png', link: '/services_publicSecurity' },
      { name: '智慧派出所', logo: '/img/demo/menu/zhpcs.png', link: '/services_smartPoliceStation' },
      { name: '交警', logo: '/img/demo/menu/jj.png', link: '/services_trafficPolice' }, // /img/app/jiaojing.png
      { name: '智慧检务', logo: '/img/demo/menu/jcy.png', link: '/services_inspection' },
      { name: '司法监狱', logo: '/img/demo/menu/jy.png', link: '/services_prison' }
    ]
  },
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '法院', logo: '/img/demo/menu/fy.png', link: '/services_court' }, // /img/app/fayuan.png
      { name: '智慧档案', logo: '/img/demo/menu/da.png', link: '/services_document' },
      { name: '智慧边海防', logo: '/img/demo/menu/zhbhf.png', link: '/services_borderSeaDefense' },
      { name: '政府', logo: '/img/demo/menu/zf.png', link: '/services_goverment' } // /img/app/zhengfu.png
    ]
  },
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '企业', logo: '/img/demo/menu/qy.png', link: '/services_enterprise' },
      { name: '应急', logo: '/img/demo/menu/yj.png', link: '/services_emergency' },
      { name: '消防', logo: '/img/demo/menu/xf.png', link: '/services_fireFighting' }, // /img/app/xiaofang.png
      { name: '疫情防控', logo: '/img/demo/menu/yqfk.png', link: '/services_epidemic' }
    ]
  },
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '城管', logo: '/img/demo/menu/cg.png', link: '/services_cityManager' }, // /img/app/chengguan.png
      { name: '物联网', logo: '/img/demo/menu/wlw.png', link: '/services_iot' },
      { name: '应用软件定制与运维服务外包', logo: '/img/demo/menu/yyrjdz.png', link: '/services_asc' },
      { name: '海外[一带一路] English', logo: '/img/demo/menu/hw.png', link: '/services_oversea' }
    ]
  },
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '智慧园林', logo: '/img/demo/menu/yl.png', link: '/services_garden' },
      { name: '智慧武装', logo: '/img/demo/menu/wz.png', link: '/services_armed' },
      { name: '智慧安保', logo: '/img/demo/menu/ab.png', link: '/services_security' }
    ]
  }
])

const demoMenu = ref<MenuItem[]>([
  {
    name: '公安',
    desc: '公安警务服务总线',
    logo: '/img/demo/menu/ga.png',
    link: '/demoIndex'
  },
  {
    name: '智慧园林',
    desc: '物联网与GIS一张网技术驱动的园林全流程精细化管控平台',
    logo: '/img/demo/menu/yl.png',
    link: '/demoYL'
  },
  {
    name: '智慧武装',
    desc: '军地一张网、数据一条链、资源一个库、态势一幅图',
    logo: '/img/demo/menu/wz.png',
    link: '/demoIndex'
  },
  // {
  //   name: '智慧云aPaaS应用支撑平台(aPaaS)',
  //   desc: '个性化需求快递迭代、支撑能力底座',
  //   logo: '/img/demo/menu/apaas.png',
  //   link: '/demoIndex'
  // },
  // {
  //   name: 'XOA数字化办公',
  //   desc: '生产力工具',
  //   logo: '/img/demo/menu/oa.png',
  //   link: '/demoXOA'
  // },
  // {
  //   name: '门户与应用仓库',
  //   desc: '把小程序搬进APP,快速打造超级APP',
  //   logo: '/img/demo/menu/mh.png',
  //   link: '/demoIndex'
  // },
  {
    name: '智慧档案',
    desc: '符合国档规范标准的全门类档案收管存用综合管理系统',
    // logo: '/img/demo/menu/im.png',
    logo: '/img/demo/menu/da.png',
    // link: '/智慧档案馆管理系统演示系统.html'
    link: '/demoDA2'
  },
  {
    name: '智慧街道',
    desc: '网格任务闭环与多端协同指挥调度平台',
    logo: '/img/demo/menu/jd.png',
    // logo: '/img/demo/menu/da.png'
    link: '/demoJD'
  },
  {
    name: '智慧检务',
    desc: '基于新一代信息技术的检察业务与管理全流程融合赋能平台',
    logo: '/img/demo/menu/jcy.png',
    link: '/demoJW'
  },
  {
    name: '指挥调度',
    desc: '总揽指挥调度一张图、用于大屏、调度、过程可视',
    logo: '/img/app/zhyzt.png',
    link: '/demoOneMap'
  },
  {
    name: '智慧安保',
    desc: '安全风险智能预警及可视化指挥防护平台',
    logo: '/img/demo/menu/ab.png',
    link: '/demoAB'
  },
  // {
  //   name: '反诈中心推广统计平台',
  //   desc: '反诈APP推广神器——反诈推广码',
  //   logo: '/img/demo/menu/fz.png',
  //   link: '/demoFZ'
  // },
  {
    name: '宣传',
    desc: '全媒体矩阵信息发布平台',
    logo: '/img/demo/menu/xc.png',
    link: '/demoXCreator'
  }

])

const handleMouseenter = (nav: string): void => {
  if (nav === 'demo') {
    demoVisible.value = true
  }
}

const handleMouseleave = (nav: string): void => {
  setTimeout(() => {
    panelLeave(nav)
  }, 300)
}

const panelLeave = (nav: string): void => {
  if (nav === 'demo') {
    demoVisible.value = true
  }
}

const backToHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">

.header {
  position: relative;
  //top: 0;
  //left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
  min-height: 64px;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem 0 rgba(105, 123, 140, 0.1);
  &_wrapper {
    margin: 0 auto;
    display: flex;
    max-width: 1280px;
    width: 100%;
    height: 64px;
  }
  &_logo {
    padding: 0 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: auto;
      height: 36px;
    }
  }
  &_menu {
    flex: 1;
  }
  &_right{
    height: 100%;
    width: 450px;
    display: flex;
    flex-direction: row;
    &_demo:hover {
      span {
        color: #2278FF;
      }
    }
    &_demo {
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        margin: 8px;
      }
      span {
        font-size: 16px;
        color: #000;
        text-align: center;
        font-weight: 400;
      }
    }
  }

  &_other {
    position: fixed;
    top: 0;
    right: 0;
    padding: 0 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    cursor: pointer;
    img {
      width: auto;
      height: 26px;
    }
  }
}

.header_tabs {
  list-style:none;
  height: 98%;
  padding: 0px;
  margin: 0px;
  display: flex;
  a {
    margin: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 108px;
    height: 100%;
    color: #000;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
    text-decoration: none;
    &::after {
      content: "";
      width: 0;
      height: 2.5px;
      background-color: #1856a6;
      position: absolute;
      left: 100%;
      bottom: 0;
      transition: all .4s;
    }
    &:hover {
      color: #1856a6;
      &::after {
        width: 100%;
        left: 0;
        transition-delay: 0.1s;
      }
      & ~ a::after {
        left: 0;
      }
    }
  }
}

.router-link-active {
  color: #1856a6 !important;
  &::after {
    content: "";
    width: 100% !important;;
    height: 2.5px !important;;
    background-color: #1856a6 !important;;
    position: absolute;
    left: 0!important;;
    bottom: 0px!important;
  }
}

.menu {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: auto;
}

.dropdown {
  padding: 16px;
  margin: 8px auto 0;
  display: flex;
  // max-width: 1480px;
  // width: 100%;
  background-color: #fff;
  //border-radius: 12px;
  //box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &_col {
    flex: 1;
    &_title {
      padding: 0px 16px;
      font-size: 14px;
      margin-bottom: 10px;
      color: #666666;
    }
    &_sort {
      padding: 0 16px;
      display: flex;
      align-items: center;
      column-gap: 12px;
      margin-bottom: 10px;
      &_logo {
        width: auto;
        height: 22px;
      }
      &_label {
        font-size: 20px;
        color: #333333;
        font-weight: 600;
      }
    }
    &_item {
      cursor: pointer;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      column-gap: 12px;
      transition: 0.15s;
      &:hover {
        background-color: rgb(243 244 246);
        border-radius: 8px;
      }
      &_logo {
        width: 36px;
        height: 36px;
      }
      &_label {
        font-size: 14px;
        color: rgb(55 65 81)
      }
    }
  }
}

.header_other img:hover + .header_dialog {
  transform: translateX(0px);
  transition: 0.5s;
}

.header_dialog {
  padding: 20px;
  position: absolute;
  top: 74px;
  right: 32px;
  background: #fff;
  width: 625px;
  height: 567px;
  border-radius: 8px;
  z-index: 99999;
  box-sizing: border-box;
  transform: translateX(110%);
  transition: 0.5s;
  transition-delay: 200ms;
  box-shadow: rgb(0 0 0 / 20%) 0px 7px 8px -4px, rgb(0 0 0 / 14%) 0px 12px 17px 2px, rgb(0 0 0 / 12%) 0px 5px 22px 4px;
  &_head {
    display: flex;
    justify-content: space-between;
    &_left {
      font-size: 24px;
      color: #333333;
      font-weight: 600;
    }
    &_right {
      font-size: 14px;
      a {
        color: #2E4BF1 !important;
        text-decoration: none;
      }
    }
  }
  &_item {
    margin-top: 24px;
    &_title {
      font-size: 18px;
      color: #333333;
    }
    &_main {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      &_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 142px;
        height: 125px;
        img {
          position: static;
          width: 48px;
          height: 48px;
        }
        div {
          margin-top: 10px;
          width: 122px;
          height: 33px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          line-height: 16px;
        }
        &:hover {
          background: #f7f7f7;
          border-radius: 8px;
        }
      }
    }
  }
}
.header_dialog:hover {
  transform: translateX(0px);
}

.demo_div {
  display: flex;
  flex-wrap: wrap;
  width: 750px;
  padding: 0px;
  gap: 0px;
  background: #fff;
  border-radius: 4px;
  a {
    text-decoration: none !important;
  }
  &_item:active {
    background-color: #f1f1f1;
  }
  &_item:hover {
    background-color: #f7f7f7;
  }
  &_item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 360px;
    margin: 4px;
    padding:8px 0;
    img {
      width: 48px;
      height: 48px;
      margin-left: 8px;
    }
    div {
      margin:0 8px;
      display: flex;
      padding: 4px;
      flex-direction: column;
      justify-content: flex-start;
      span:nth-of-type(1) {
        height: 20px;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
      }
      span:nth-of-type(2) {
        flex: 1;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
}

.demo_div_item_more {
  display: flex;
  align-items: center;
  padding:8px 0;
  img {
    margin: 0 8px;
    width: 26px;
    height: 26px;
  }
  span {
    font-size: 24px;
    color: #2E4BF1;
    letter-spacing: 0;
    font-weight: 400;
  }
}
</style>
