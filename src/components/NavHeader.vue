<template>
  <div class="header">
    <div class="header_wrapper">
      <div @click="backToHome" class="header_logo">
        <img src="@/assets/img/logo_white.png" />
      </div>
      <div class="header_menu">
        <div class="header_tabs">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/hardware" @mouseenter="handleMouseenter('hardware')" @mouseleave="handleMouseleave('hardware')">硬件产品</NuxtLink>
          <NuxtLink to="/product" @mouseenter="handleMouseenter('software')" @mouseleave="handleMouseleave('software')">软件产品</NuxtLink>
          <NuxtLink to="/services" @mouseenter="handleMouseenter('solution')" @mouseleave="handleMouseleave('solution')">专业服务</NuxtLink>
          <NuxtLink to="/news">新闻动态</NuxtLink>
          <NuxtLink to="/about">关于我们</NuxtLink>
        </div>
      </div>
      <div class="header_other">
        <img src="@/assets/img/dashboard.png" />
        <div class="header_dialog">
        <div class="header_dialog_head">
          <div class="header_dialog_head_left">基础软件</div>
          <div class="header_dialog_head_right"><a>查看更多</a></div>
        </div>
        <div class="header_dialog_item">
          <div class="header_dialog_item_title">双系统安全移动办公</div>
          <div class="header_dialog_item_main">
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/app/chat.png">
              <div>即时通讯</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/app/syy.png">
              <div>私有云部署的移动安全办公云平台</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/home/xl_3.png">
              <div>门户与应用仓库</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/app/mobile.png">
              <div>移动应用开发支撑平台</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/home/xl_5.png">
              <div>安全管控MDM</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/home/xl_6.png">
              <div>定制手机型安全终端</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/home/xl_7.png">
              <div>定制安全Pad终端</div>
            </div>
          </div>
        </div>
        <div class="header_dialog_item">
          <div class="header_dialog_item_title">双系统安全移动办公</div>
          <div class="header_dialog_item_main">
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/home/xl_9.png">
              <div>指挥调度一张图</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/home/xl_10.png">
              <div>XSmart大数据IOC可视化平台</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/app/icon_apache.png">
              <div>Apache Superset</div>
            </div>
            <div class="header_dialog_item_main_div">
              <img src="@/assets/img/app/icon_xdata.png">
              <div>XDataStudio大数据底座</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <n-collapse-transition :show="hardwareVisible" class="menu" @mouseenter="panelEnter" @mouseleave="panelLeave('hardware')">
      <NavHeaderDropdown :menu="hardwareMenu" width="1280px" />
    </n-collapse-transition>
    <n-collapse-transition :show="softwareVisible" class="menu" @mouseenter="panelEnter" @mouseleave="panelLeave('software')">
      <NavHeaderDropdown :menu="softwareMenu" width="1560px">
        <div class="dropdown_col" style="flex: 1.5">
          <p class="dropdown_col_title">基础软件</p>
          <div class="dropdown_col_sort">
            <img class="dropdown_col_sort_logo" src="@/assets/img/home/sxt.png">
            <span class="dropdown_col_sort_label">安全移动办公</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_1.png">
            <span class="dropdown_col_item_label">即时通讯</span>
            <!-- <span>NEW</span> -->
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_2.png">
            <span class="dropdown_col_item_label">私有云部署的移动安全办公云平台</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_3.png">
            <span class="dropdown_col_item_label">门户与应用仓库</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_5.png">
            <span class="dropdown_col_item_label">安全管控MDM</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_6.png">
            <span class="dropdown_col_item_label">定制手机型安全终端</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_7.png">
            <span class="dropdown_col_item_label">定制安全Pad终端</span>
          </div>
          <div class="dropdown_col_sort">
            <img class="dropdown_col_sort_logo" src="@/assets/img/home/zhdd.png">
            <span class="dropdown_col_sort_label">指挥调度与IOC大数据可视化</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_9.png">
            <span class="dropdown_col_item_label">指挥调度一张图</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_10.png">
            <span class="dropdown_col_item_label">XSmart大数据IOC可视化平台</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/app/icon_apache.png">
            <span class="dropdown_col_item_label">Apache Superset</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/app/icon_xdata.png">
            <span class="dropdown_col_item_label">XDataStudio大数据底座</span>
          </div>
        </div>
        <div class="dropdown_col" style="flex: 1.5; padding-top: 22px;">
          <p class="dropdown_col_title"></p>
          <div class="dropdown_col_sort">
            <img class="dropdown_col_sort_logo" src="@/assets/img/home/dzh.png">
            <span class="dropdown_col_sort_label">私有云</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_11.png">
            <span class="dropdown_col_item_label">智慧云aPaaS应用支撑平台（aPaaS）</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_12.png">
            <span class="dropdown_col_item_label">移动端服务化能力支撑平台（mPaaS）</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_4.png">
            <span class="dropdown_col_item_label">XMobileStudio移动应用开发支撑平台</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_8.png">
            <span class="dropdown_col_item_label">PGIS地图引擎能力支撑平台(PGISPaaS)</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/home/xl_13.png">
            <span class="dropdown_col_item_label">XDevStudio“奥尔特云”开发平台</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/app/icon_cloud.png">
            <span class="dropdown_col_item_label">XProxy跨网智能网关</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/app/icon_kuboard.png">
            <span class="dropdown_col_item_label">Kuboard</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/app/icon_cloud.png">
            <span class="dropdown_col_item_label">XFileStor分布式文件存储系统</span>
          </div>
          <div class="dropdown_col_item">
            <img class="dropdown_col_item_logo" src="@/assets/img/app/icon_tianqin.png">
            <span class="dropdown_col_item_label">XCompute天琴虚拟化软件</span>
          </div>
        </div>
      </NavHeaderDropdown>
    </n-collapse-transition>
    <n-collapse-transition :show="solutionVisible" class="menu" @mouseenter="panelEnter" @mouseleave="panelLeave('solution')">
      <NavHeaderDropdown :menu="solutionMenu" width="1280px" />
    </n-collapse-transition>
  </div>
</template>

<script setup lang="ts">
import { NCollapseTransition } from 'naive-ui';

import { Menu } from '~/types'

const router = useRouter()

const hardwareVisible = ref<boolean>(false)
const softwareVisible = ref<boolean>(false)
const solutionVisible = ref<boolean>(false)
const hardwareMenu = ref<Menu[]>([
  { 
    title: '移动存储',
    showTitle: true,
    menus: [
      { name: 'U盘', logo: new URL('assets/img/app/icon_u.png', import.meta.url).href },
      { name: '移动硬盘', logo: new URL('assets/img/app/icon_mobileu.png', import.meta.url).href }
    ]
  },
  {
    title: '网络产品',
    showTitle: true,
    menus: [
      { name: '网关', logo: new URL('assets/img/home/router.png', import.meta.url).href },
      { name: '4G工业路由器', logo: new URL('assets/img/app/dhhz.png', import.meta.url).href },
      { name: '5G工业路由器', logo: new URL('assets/img/app/5Gdh.png', import.meta.url).href },
      { name: '交换机', logo: new URL('assets/img/app/dhjhj.png', import.meta.url).href },
    ]
  },
  {
    title: '智能终端',
    showTitle: true,
    menus: [
      { name: '国产化笔记本', logo: new URL('assets/img/app/icon_pc.png', import.meta.url).href },
      { name: '国产化平板电脑', logo: new URL('assets/img/app/icon_pad.png', import.meta.url).href },
      { name: '消费电子', logo: new URL('assets/img/app/icon_cpu.png', import.meta.url).href },
      { name: 'IOT元件库', logo: new URL('assets/img/app/icon_iot.png', import.meta.url).href }
    ]
  },
  {
    title: '数据采集',
    showTitle: true,
    menus: [
      { name: '动环盒子', logo: new URL('assets/img/app/icon_box.png', import.meta.url).href },
      { name: '动环交换机', logo: new URL('assets/img/app/icon_change.png', import.meta.url).href },
      { name: '动环网关', logo: new URL('assets/img/app/icon_wlan.png', import.meta.url).href }
    ]
  }
])
const softwareMenu = ref<Menu[]>([
  {
    title: '应用产品',
    showTitle: true,
    menus: [
      { name: 'XOA数字化办公', logo: new URL('assets/img/app/icon_xoa.png', import.meta.url).href },
      { name: 'XCreator敏捷发布平台', logo: new URL('assets/img/app/icon_xcreator.png', import.meta.url).href },
      { name: '警卫宝', logo: new URL('assets/img/home/yycp_10.png', import.meta.url).href },
      { name: '视频宝', logo: new URL('assets/img/home/yycp_12.png', import.meta.url).href },
      { name: '天琴智宝', logo: new URL('assets/img/home/yycp_17.png', import.meta.url).href },
    ]
  },
  {
    title: '云SaaS软件',
    showTitle: true,
    menus: [
      { name: '交通微劝导系统', logo: new URL('assets/img/home/aqcp_1.png', import.meta.url).href },
      { name: '反诈中心推广统计平台', logo: new URL('assets/img/home/aqcp_2.png', import.meta.url).href },
      { name: '互联网+公安政务服务', logo: new URL('assets/img/home/aqcp_3.png', import.meta.url).href },
      { name: '群防群治', logo: new URL('assets/img/home/aqcp_4.png', import.meta.url).href },
      { name: '辅警平台', logo: new URL('assets/img/home/yycp_22.png', import.meta.url).href },
    ]
  },
  {
    title: '安全产品',
    showTitle: true,
    menus: [
      { name: '安全管控MDM', logo: new URL('assets/img/home/aqcp_01.png', import.meta.url).href },
      { name: '枪弹装备室', logo: new URL('assets/img/home/aqcp_5.png', import.meta.url).href },
      { name: '定制手机型安全终端', logo: new URL('assets/img/home/dzh.png', import.meta.url).href },
      { name: '定制安全Pad终端', logo: new URL('assets/img/home/xl_7.png', import.meta.url).href },
      { name: '计算机保密防范', logo: new URL('assets/img/app/icon_lock.png', import.meta.url).href },
    ]
  }
])
const solutionMenu = ref<Menu[]>([
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '公安', logo: new URL('assets/img/app/jinghui.png', import.meta.url).href },
      { name: '智慧派出所', logo: new URL('assets/img/app/jinghui.png', import.meta.url).href },
      { name: '交警', logo: new URL('assets/img/app/jiaojing.png', import.meta.url).href },
      { name: '检察', logo: new URL('assets/img/app/jiancha.png', import.meta.url).href },
      { name: '司法监狱', logo: new URL('assets/img/app/jinghui.png', import.meta.url).href },
    ]
  },
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '法院', logo: new URL('assets/img/app/fayuan.png', import.meta.url).href },
      { name: '档案', logo: new URL('assets/img/app/dangan.png', import.meta.url).href },
      { name: '智慧边海防', logo: new URL('assets/img/app/zgbhf.png', import.meta.url).href },
      { name: '政府', logo: new URL('assets/img/app/zhengfu.png', import.meta.url).href },
    ]
  },
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '企业', logo: new URL('assets/img/app/qiye.png', import.meta.url).href },
      { name: '应急', logo: new URL('assets/img/app/yingji.png', import.meta.url).href },
      { name: '消防', logo: new URL('assets/img/app/xiaofang.png', import.meta.url).href },
      { name: '疫情防控', logo: new URL('assets/img/app/yiqingfangkong.png', import.meta.url).href },
    ]
  },
  {
    title: '',
    showTitle: false,
    menus: [
      { name: '城管', logo: new URL('assets/img/app/chengguan.png', import.meta.url).href },
      { name: '物联网', logo: new URL('assets/img/app/wlw.png', import.meta.url).href },
      { name: '应用软件定制与运维服务外包', logo: new URL('assets/img/app/yyrjdz.png', import.meta.url).href },
      { name: '海外[一带一路] English', logo: new URL('assets/img/app/haiwai.png', import.meta.url).href },
    ]
  }
])
let timer:any = null

const handleMouseenter = (nav: string): void => {
  if (nav === 'hardware') {
    hardwareVisible.value = true
  }
  if (nav === 'solution') {
    solutionVisible.value = true
  }
  if (nav === 'software') {
    softwareVisible.value = true
  }
}

const handleMouseleave = (nav: string): void => {
  timer = setTimeout(() => {
    if (nav === 'hardware') {
      hardwareVisible.value = false
    }
    if (nav === 'solution') {
      solutionVisible.value = false
    }
    if (nav === 'software') {
      softwareVisible.value = false
    }
  }, 300)
}

const panelEnter = () =>{
  if(timer){
    clearTimeout(timer)
    return
  }
}

const panelLeave = (nav: string): void =>{
  if (nav === 'hardware') {
    hardwareVisible.value = false
  }
  if (nav === 'solution') {
    solutionVisible.value = false
  }
  if (nav === 'software') {
    softwareVisible.value = false
  }
}

const backToHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
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
  &_other {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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
    bottom: 0!important;;
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
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &_col {
    flex: 1;
    &_title {
      padding: 0 16px;
      font-size: 14px;
      color: #666666;
    }
    &_sort {
      padding: 0 16px;
      display: flex;
      align-items: center;
      column-gap: 12px;
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
</style>