<template>
  <div class="container">
    <div class="nav">
      <div class="nav_item_t">
        <span class="nav_item_t_text">软件产品</span>
      </div>
      <n-popover trigger="hover" placement="right">
        <template #trigger>
          <div class="nav_item">
            <span class="nav_item_text">基础软件</span><n-icon :component="IosArrowForward" />
          </div>
        </template>
        <template #default>
          <!-- 双系统安全移动办公 -->
          <h3 class="h3_title">
            双系统安全移动办公
          </h3>
          <AppPanel :data="doubleSysApp" />
          <!-- 指挥调度与IOC大数据可视化 -->
          <h3 class="h3_title">
            指挥调度与IOC大数据可视化
          </h3>
          <AppPanel :data="viewableApp" />
          <!-- 多租户aPaaS云 -->
          <h3 class="h3_title">
            应用与服务支撑平台
          </h3>
          <AppPanel :data="aPaaSApp" />
        </template>
      </n-popover>
      <n-popover trigger="hover" placement="right">
        <template #trigger>
          <div class="nav_item">
            <span class="nav_item_text">应用产品</span><n-icon :component="IosArrowForward" />
          </div>
        </template>
        <template #default>
          <AppPanel :data="application" />
        </template>
      </n-popover>
      <n-popover trigger="hover" placement="right">
        <template #trigger>
          <div class="nav_item">
            <span class="nav_item_text">云SaaS软件</span><n-icon :component="IosArrowForward" />
          </div>
        </template>
        <template #default>
          <h3>云SaaS软件</h3>
          <AppPanel :data="saasApp" />
        </template>
      </n-popover>
      <n-popover trigger="hover" placement="right">
        <template #trigger>
          <div class="nav_item">
            <span class="nav_item_text">安全产品</span><n-icon :component="IosArrowForward" />
          </div>
        </template>
        <template #default>
          <h3>安全产品</h3>
          <AppPanel :data="securityApp" />
        </template>
      </n-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IosArrowForward } from '@vicons/ionicons4'
import { NPopover, NIcon } from 'naive-ui'

// 双系统安全移动办公
const doubleSysApp = ref({
  title: '',
  logo: '',
  apps: [
    {
      name: '即时通讯',
      logo: '/img/home/xl_1.png',
      excerpt: '私有化部署的内网“微信”',
      link: '/product_instantMsg'
    },
    {
      name: '私有云部署的移动安全办公云平台',
      logo: '/img/home/xl_2.png',
      excerpt: '私有云部署的移动安全办公云平台'
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
      name: '定制手机型安全终端',
      logo: '/img/home/xl_6.png',
      excerpt: '手机终端安全加固组件与刷机服务包'
    },
    {
      name: '定制安全Pad终端',
      logo: '/img/home/xl_7.png',
      excerpt: 'Pad终端安全加固组件与刷机服务包'
    }
  ]
})
// 指挥调度与IOC大数据可视化
const viewableApp = ref({
  title: '',
  logo: '',
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
      name: '大数据IOC可视化平台',
      logo: '/img/home/xl_10.png',
      excerpt: '大数据处理与IOC可视化系统'
    }
  ]
})
// 多租户aPaaS云
const aPaaSApp = ref({
  title: '',
  logo: '',
  apps: [
    {
      name: '智慧云aPaaS应用支撑平台(aPaaS)',
      logo: '/img/home/xl_11.png',
      excerpt: '个性化需求快递迭代、支撑能力底座'
    },
    {
      name: '移动端服务化能力支撑平台(mPaaS)',
      logo: '/img/home/xl_4.png',
      excerpt: '移动应用开发支撑平台'
    },
    {
      name: '“奥尔特云”开发平台',
      logo: '/img/home/xl_3.png',
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
      logo: '/img/home/yycp_6.png',
      excerpt: '可视化实战指挥调度一张图系统'
    },
    {
      name: '警务服务总线',
      logo: '/img/home/yycp_7.png',
      excerpt: '基于OpenSergo统一微服务治理警务服务总线软件'
    },
    {
      name: '档案宝',
      logo: '/img/home/dab.png',
      excerpt: '电子档案安全管理平台'
    },
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
      logo: '/img/home/yycp_28.png',
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
      name: 'OA数字化办公',
      logo: '/img/app/OAszh.png',
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
      name: '交通微劝导系统',
      logo: '/img/home/aqcp_1.png',
      excerpt: '落实公安部交管局“一盔一带”行动计划，助力文明城市迎检工作',
      link: '/product_microAdvice'
    },
    {
      name: '反诈中心推广统计平台',
      logo: '/img/home/aqcp_2.png',
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
    }
  ]
})

</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.nav {
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 8%);
  box-sizing: border-box;
  &_item_t {
    padding: 0 40px;
    display: flex;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 18px;
    &_text {
      font-weight: 400;
    }
  }
  &_item:hover {
    color: #2856A5;
   span {
    font-size: 18px;
    font-weight: 600;
    color: #2856A5;
    }
  }
  &_item {
    padding: 0 40px;
    display: flex;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 8%);
    }
    &_text {
      font-size: 14px;
      font-weight: 600;
    }
  }
  &_menu {
    position: absolute;
    top: 0;
    right: -1080px;
    padding: 20px;
    height: 100%;
    width: 1080px;
    overflow: auto;
    background-color: #fff;
    z-index: 10;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 8%);
    box-sizing: border-box;
  }
}

.h3_title {
  font-size: 16px;
}
</style>
