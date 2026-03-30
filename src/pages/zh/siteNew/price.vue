<template>
  <div class="home_page vls">
    <div class="platTop page-start">
      <div class="VLStream">
        超值<span style="color: #2278FF;">低价</span> <span class="vlsUs">不是做梦!</span>
      </div>
      <div>选择一个合适您的套餐</div>
    </div>
    <div class="priceBox">
      <div v-for="item in list" :key="item.id" class="item" :class="{yellow: item.name === '企业版'}">
        <div>
          <div class="item-1 title1">
            {{ item.name }}
            <div v-if="item.name === '企业版'" class="Popular">
              热门推荐
            </div>
          </div>
          <div class="item-2 title2">
            {{ item.annual_price_desc }}
          <!-- <span class="title3" style="color: #818089;">/年</span> -->
          </div>
          <div class="item-3 title3" style="color: #818089;">
            折合{{ (item.annual_price / 1200).toFixed(2) }}/月
          </div>
          <div class="item-4 title3">
            {{ item.remark }}
          </div>
          <div v-for="(value,index) in item.highlights" :key="index" class="item-5 title3 ">
            <!-- <img src="@/assets/software/double-yes.png" alt="" /> -->
            {{ value }}
          </div>
        </div>
        <div class="item_content">
          <div class="item-6" :class="{yellow_buy: item.name === '企业版'}">
            立即购买
          </div>
          <div class="item-7" :class="{yewllow_meal: item.name === '企业版'}">
            <div class="meal" @click="mealDetail(item.id)">
              <img src="@/assets/software/tcxq.png" alt="" />套餐详情
            </div>
            <div class="meal">
              <img src="@/assets/software/zzgm.png" alt="" />增值购买
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w1380">
      <div class="optional">
        自选购买
      </div>
      <div class="descripe">
        *在已选套餐基础上，灵活补充额外资源与功能，满足阶段性扩容或个性化需求，无需更换主套餐。
      </div>
    </div>
    <div class="contrast">
      <div class="contrast_tiitle">
        套餐对比
      </div>
      为你的业务需求找到正确的<br />订阅套餐
    </div>
    <div class="compare-table w1380">
      <table class="custom-table">
        <thead>
          <tr>
            <th>功能内容</th>
            <!-- 动态列头：自动循环套餐名称 -->
            <th v-for="name in packageColumns" :key="name">
              {{ name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in tableData" :key="idx">
            <!-- 图标 + 文字 垂直水平居中 -->
            <td class="table-cell-center">
              <oort-img v-if="item.icon_url" :src="item.icon_url" alt="" class="iconImg" />
              <span>{{ item.featureName }}</span>
            </td>

            <!-- 动态列内容 -->
            <td v-for="name in packageColumns" :key="name">
              <!-- 服务行（带图标的行）不显示 - -->
              <span v-if="item.isServiceRow" />
              <!-- 功能行才显示值或 - -->
              <span v-else>{{ item.values[name] || '-' }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <div class="highlight" /> -->
    </div>
    <!-- <div class="w1380">
      <div class="table-container">
        <table class="version-table">
          <thead>
            <tr>
              <th>功能项</th>
              <th>标准版</th>
              <th class="highlight-col">
                高级版
              </th>
              <th>企业版</th>
              <th>旗舰版</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>付费价格</td>
              <td>¥1229/年</td>
              <td class="highlight-col">
                ¥2229/年
              </td>
              <td>¥5229/年</td>
              <td>¥8229/年</td>
            </tr>
            <tr>
              <td>用户席位</td>
              <td>10 位</td>
              <td class="highlight-col">
                20 位
              </td>
              <td>50 位</td>
              <td>不限</td>
            </tr>
            <tr>
              <td>联系人上限</td>
              <td>50 个</td>
              <td class="highlight-col">
                100 个
              </td>
              <td>500 个</td>
              <td>不限</td>
            </tr>
            <tr>
              <td>应用部署上限</td>
              <td>10 个</td>
              <td class="highlight-col">
                20 个
              </td>
              <td>50 个</td>
              <td>80 个</td>
            </tr>
            <tr>
              <td>服务部署上限</td>
              <td>6 个</td>
              <td class="highlight-col">
                12 个
              </td>
              <td>30 个</td>
              <td>60 个</td>
            </tr>
            <tr>
              <td>Agent 调用额度 (月)</td>
              <td>100 次</td>
              <td class="highlight-col">
                300 次
              </td>
              <td>1000 次</td>
              <td>不限</td>
            </tr>
            <tr>
              <td>自动化工作流</td>
              <td>基础版</td>
              <td class="highlight-col">
                高级可视化版
              </td>
              <td>企业级引擎版</td>
              <td>私有定制版</td>
            </tr>
            <tr>
              <td>API 访问权限</td>
              <td><span class="icon-cross">✕</span></td>
              <td class="highlight-col">
                基础版 (1万次/月)
              </td>
              <td>不限</td>
              <td>不限</td>
            </tr>
            <tr>
              <td>数据存储量</td>
              <td>10 GB</td>
              <td class="highlight-col">
                50 GB
              </td>
              <td>200 GB</td>
              <td>1000 GB + 备份服务</td>
            </tr>
            <tr>
              <td>专属客户经理</td>
              <td><span class="icon-cross">✕</span></td>
              <td class="highlight-col">
                <span class="icon-check">✓</span>
              </td>
              <td><span class="icon-check">✓</span></td>
              <td><span class="icon-check">✓</span></td>
            </tr>
            <tr>
              <td>客服等级支持</td>
              <td>标准支持 (8小时响应)</td>
              <td class="highlight-col">
                优先支持 (4小时响应)
              </td>
              <td>7×12 专属客户经理</td>
              <td>7×24 首席数据顾问</td>
            </tr>
            <tr>
              <td>安全与合规</td>
              <td>标准加密存储</td>
              <td class="highlight-col">
                标准加密存储
              </td>
              <td>审计日志 + SSO 单点登录</td>
              <td>GDPR / 等保合规咨询</td>
            </tr>
          </tbody>
        </table>
        <div class="highlight" />
      </div>
    </div> -->
    <div class="platTop w1380">
      <div class="VLStream us1">
        <span class="vlsUs us1s"><span>标准</span> 和 <span>定制</span> 服务计划，</span> 均为单一费用涵盖所有 OortCloud 应用程序
      </div>
    </div>
    <div class="proTitleBox priceIconBox w1380 flexRowAC" style="justify-content: space-between">
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c1.png" alt="" />
        <div class="priceTi">
          个人效率工具
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c2.png" alt="" />
        <div class="priceTi">
          培训学习
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c3.png" alt="" />
        <div class="priceTi">
          指挥调度
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c4.png" alt="" />
        <div class="priceTi">
          行政智慧后勤
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c5.png" alt="" />
        <div class="priceTi">
          生产力工具
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c6.png" alt="" />
        <div class="priceTi">
          业务管理
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c7.png" alt="" />
        <div class="priceTi">
          队伍建设
        </div>
      </div>
      <div class="priceIconIt flexRowAC">
        <img class="priceImg" src="@/assets/software/price_c8.png" alt="" />
        <div class="priceTi">
          IOT
        </div>
      </div>
    </div>
    <div class="proTitleBox lineBox w1380 flexRowAC">
      <div class="line" />
      还有更多
      <img class="lineImg" src="@/assets/software/price_icon.png" alt="" />
      <div class="line" />
    </div>
    <div class="proTitleBox w1380 plan">
      <div class="plan_t">
        所有计划享有 <span style="color: #2278FF;font-weight: bold; ">无限技术支持</span>、托管以及系统维护。
        <br />
        无任何隐藏费用，功能和数据使用无限制：享受真正的透明定价！
      </div>
      <div class="plan_t">
        (*)折扣有效期为12个月，适用于订购的初始用户。
        <br />
        (**)不包括OortCloud.sh的托管费用。
      </div>
      <div class="flexRowAC useBox" style="justify-content: center">
        <div class="seeMore">
          安排演示
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRowAC" style="justify-content: flex-start;padding: 0; color: #fff;">
      <div>
        有疑问<span style="color: #FFB53B">?</span>
        <div class="pri_why">
          如果此页面上没有符合您的问题的答案，请联系我们 <span style="color: #2278FF">客户经理</span>
        </div>
      </div>
    </div>
    <div class="advantBox w1380">
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num1.png" alt="" />
        我真的可以用统一的价格访问上百的应用程序和模块吗？
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num2.png" alt="" />
        订阅中包含的内容有什么
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num3.png" alt="" />
        什么是自主托管/OortCould.sh?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num4.png" alt="" />
        单一应用程序免费计划是否支持多公司或使用定制应用程序?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num5.png" alt="" />
        为什么在单一应用程序免费计划中，我有多个应用程序?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num6.png" alt="" />
        我在哪里可以找到实施服务，花费是多少?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num7.png" alt="" />
        标准计划和定制计划的区别是什么?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num8.png" alt="" />
        标准计划和定制计划的区别是什么?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num9.png" alt="" />
        我是否可以从托管计划(OortCloud Online)切换到OortCloud 企业版或反向切换?
      </div>
      <div class="flexRowAC advantIt">
        <img class="advantBoxImg" src="@/assets/software/mobilePolice_num10.png" alt="" />
        什么是外部API?
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      width="1200px"
      destroy-on-close
    >
      <priceDetail :id="id" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import priceDetail from './priceDetail.vue'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'

import { mealList, mealCompare } from '@/api'
const list = ref([])
const id = ref(1)
const compareData = ref({})

onMounted(() => {
  getMealCompare()
  getMealList()
})

const getMealList = async() => {
  try {
    const data = {
      page: 1,
      pagesize: 10
    }
    const res = await mealList(data)
    list.value = res.data.list
  } catch (err) {
    console.error('获取套餐列表失败:', err)
  }
}

const getMealCompare = async() => {
  try {
    const res = await mealCompare({})
    compareData.value = res.data
    buildTableData()
  } catch (err) {
    console.error('获取套餐对比:', err)
  }
}
const mealDetail = (data) => {
  dialogVisible.value = true
  id.value = data
}

definePageMeta({
  layout: 'site-new'
})

let p5Arr = ref([])
const dialogVisible = ref(false)
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]

// const list = ref([
//   {
//     title: '标准版',
//     price: '¥1229',
//     monthlyPrice: '¥102.41',
//     desc: 'Perfect for solo founders and small teams just getting started.',
//     seat: '10 位',
//     contact: '50 个',
//     deployment: '10 个',
//     service: '6 个',
//     agent: '100 次 / 月',
//     automation: '基础自动化流程'
//   },
//   {
//     title: '高级版',
//     price: '¥2229',
//     monthlyPrice: '¥185.75',
//     desc: 'For growing teams that need more reach and smarter insights.',
//     seat: '20 位',
//     contact: '100 个',
//     deployment: '20 个',
//     service: '12 个',
//     agent: '300 次 / 月',
//     automation: '高级自动化流程'
//   },
//   {
//     title: '企业版',
//     price: '¥5229',
//     monthlyPrice: '¥435.75',
//     desc: 'Perfect for solo founders and small teams just getting started.',
//     seat: '50 位',
//     contact: '500 个',
//     deployment: '60 个',
//     service: '30 个',
//     agent: '1000 次 / 月',
//     automation: '企业级自动化引擎'
//   },
//   {
//     title: '旗舰版',
//     price: '8229',
//     monthlyPrice: '¥685.75',
//     desc: 'Perfect for solo founders and small teams just getting started.',
//     seat: '不限',
//     contact: '不限',
//     deployment: '80 个',
//     service: '60 个',
//     agent: '不限',
//     automation: '私有定制自动化服务'
//   }
// ])

// 表格数据
const tableData = ref([])
// 动态列配置（套餐名称）
const packageColumns = ref([])

// 封装获取对应套餐对应服务的功能配置值
const getFeatureValue = (packageDisplayName, serviceName, featureName) => {
  if (!compareData.value?.platform_package_views) return '-'
  const targetPackage = compareData.value.platform_package_views.find(
    item => item.display_name === packageDisplayName
  )
  if (!targetPackage) return '-'

  const targetService = targetPackage.service_views.find(
    item => item.display_name === serviceName
  )
  if (!targetService) return '-'

  const targetFeature = targetService.feature_config_views.find(
    item => item.display_name === featureName
  )
  return targetFeature ? targetFeature.display_value : '-'
}

// 构建表格数据 + 动态列
const buildTableData = () => {
  tableData.value = []
  packageColumns.value = []

  const packageList = compareData.value.platform_package_views || []
  if (!packageList.length) return

  // 生成列名（自动从接口取 display_name）
  packageColumns.value = packageList.map(p => p.display_name)

  // 取最后一个套餐作为基础结构
  const basePackage = packageList.at(-1)

  // 遍历服务
  basePackage.service_views.forEach((service) => {
    // 服务标题行
    const row = {
      featureName: service.display_name,
      icon_url: service.icon_url,
      isServiceRow: true,
      values: {}
    }

    // 给每个套餐赋值
    packageColumns.value.forEach((col) => {
      row.values[col] = ''
    })
    tableData.value.push(row)

    // 功能配置行
    service.feature_config_views?.forEach((feature) => {
      const fRow = {
        featureName: feature.display_name,
        icon_url: '',
        values: {}
      }
      packageColumns.value.forEach((col) => {
        fRow.values[col] = getFeatureValue(col, service.display_name, feature.display_name)
      })
      tableData.value.push(fRow)
    })
  })
}

</script>

<style scoped lang="scss">

.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #00020F;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

// 查看更多
//.seeMore {
//  display: inline-block;
//  padding: 24px 50px;
//  color: #fff;
//  border: 1px solid #2278FF;
//  border-radius: 8px;
//  background: #2278FF;
//  box-shadow: 0px 4px 10px 0px #FF5E1033;
//  font-weight: bold;
//  font-size: 18px;
//}

.platTop {
  text-align: center;
  padding: 110px 0;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream_top {
    height: 66px;
    width: auto;
  }

  .VLStream {
    color: #fff;
    font-weight: bold;
    font-size: 78px;
    padding-bottom: 30px;
    position: relative;

    .VLStream_img {
      width: 222px;
      height: 222px;
      position: absolute;
      right: 336px;
      top: -50px;
    }
  }

  .plat_a {
    color: #333333;
    font-weight: bold;
    font-size: 58px;
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
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

.WebRTC {
  gap: 24px;
  padding-bottom: 80px;
  animation: scroll 35s linear infinite;

  .webItem {
    width: auto;
    height: 120px;
    border-radius: 16px;
    background: #E8F7FC;
    color: #5C6C00;
    gap: 14px;
    flex-wrap: nowrap;
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
  padding: 70px 0 110px;
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
    letter-spacing: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #333333;
    font-weight: bold;
    font-size: 54px;
    line-height: 82px;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    width: 500px;
  }

  .CloudR {
    width: 700px;
    height: auto;

    .CloudRImg {
      width: 100%;
      height: 100%;
    }
  }

  .CloudR2 {
    width: 700px;
    height: 700px;
  }
}

.ipcBox.CloudBox {
  padding-bottom: 120px;
  justify-content: space-between;
  align-items: flex-start;

  .CloudL {
    width: 450px;
    text-align: right;
    padding-top: 60px;
  }
}

.ipcView.CloudBox {
  .CloudR {
    height: 460px;
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

.ipcView.dev {
  .CloudL {
    width: 100%;
  }

  .terminal {
    border-radius: 24px;
    background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;
    margin-bottom: 20px;
    width: 100%;
    padding: 30px;

    .terminalImg {
      width: 62px;
      height: 62px;
    }

    .terminalT {
      padding-top: 30px;
      color: #333333;
      font-weight: bold;
      font-size: 28px;
    }

    .terminalD {
      padding-top: 30px;
      color: #717781;
      font-size: 18px;
    }
  }

  .cloud.terminal {
    border-radius: 24px;
    background: linear-gradient(180deg, #F9FFF7 0%, #FFFFFF 98%);
    border: 1px solid #001F5019;
  }
}

.proTitleBox {
  justify-content: center;
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
  padding-bottom: 100px;
}

.mb_h_t {
  padding-bottom: 20px;

  .VLStream_top {
    width: 445px;
    height: auto;
  }
}

.mb_h_d {
  color: #797F88;
  font-weight: normal;
  font-size: 18px;
  padding-bottom: 160px;
}

.advantBox {
  padding-bottom: 160px;

  .advantIt {
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    color: #fff;
    font-weight: normal;
    font-size: 20px;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.02);
  }

  .advantBoxImg {
    width: 40px;
    height: 36px;
    flex-shrink: 0;
    margin-right: 20px;
  }
}

.vlsUs {
  opacity: 1;
  border-radius: 0px;
  background: linear-gradient(270deg, rgba(146, 59, 255, 0.04) 0%, rgba(146, 59, 255, 0.32) 100%);
  border-left: 6px solid #923BFF;
  padding-left: 10px;
  color: #fff;
}

.pri_why {
  padding: 20px 0 40px;
  color: #fff;
  font-weight: normal;
  font-size: 20px;
}

.VLStream.us1 {
  color: #333333;
  font-weight: normal;
  font-size: 32px;
  text-align: center;

  .us1s {
    padding: 20px 12px;
    >span{
      font-weight: bold;
    }
  }
}

.proTitleBox.plan {
  .plan_t {
    padding-bottom: 48px;
    color: #fff;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
}

.lineBox {
  justify-content: space-between;
  color: #2278FF;
  font-size: 20px;
  padding: 0 10px 60px;

  .line {
    width: calc(50% - 74px);
    height: 1px;
    background-color: #2278FF;
  }

  .lineImg {
    width: 24px;
    height: 24px;
    background-color: #2278FF;
    border-radius: 50%;
  }
}

.priceIconBox {
  padding-bottom: 60px;

  .priceIconIt {
    flex-direction: column;
    gap: 20px;
  }

  .priceImg {
    width: 74px;
    height: 74px;
  }

  .priceTi {
    color: #fff;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
  }
}

.priceTBox {
  padding-top: 0;
  flex-direction: column;

  .price_tabs {
    width: 300px;
    justify-content: space-between;
    gap: 16px;
    padding: 10px 16px;
    border-radius: 6px;
    background-color: #F5F9FF;

    .pt_btn {
      cursor: pointer;
      width: 132px;
      height: 52px;
      line-height: 52px;
      border-radius: 6px;

      &.act {
        color: #fff;
        background-color: #2278FF;
      }
    }
  }

  .price_cont {
    width: 100%;
    justify-content: center;
    padding-top: 20px;
    gap: 20px;

    .p_c_it {
      cursor: pointer;
      color: #333333;
      width: 384px;
      flex-shrink: 0;
      padding: 40px 20px;
      height: 680px;
      border-radius: 24px;
      background: #FFFFFF;
      border: 1px solid #E4E4E7;

      .pcIt_t1 {
        padding-bottom: 24px;
        gap: 14px;
        font-weight: normal;
        font-size: 16px;
        text-align: left;

        .pcIt_t1_dot {
          width: 12px;
          height: 12px;
          background-color: #2278FF;
          border-radius: 50%;
        }
      }

      .pcIt_t {
        text-align: left;
      }

      .pcIt_l {
        padding: 44px 0;
        gap: 8px;

        .line {
          flex: 1;
          height: 1px;
          background-color: #2278FF;
        }

        .lineImg {
          width: 20px;
          height: 20px;
          background-color: #2278FF;
          border-radius: 50%;
        }
      }

      .pcIt_t1_out {
        height: 220px;

      }

      .pcIt_m {
        padding-top: 40px;
        font-weight: bold;
        font-size: 38px;
        text-align: left;

        > span {
          font-size: 14px;
          font-weight: normal;

        }
      }

      .pcIt_tbtn {
        margin-top: 16px;
        border-radius: 24px;
        height: 72px;
        line-height: 72px;
        color: #fff;
        background-color: #2278FF;
        border: 1px solid #fff;
      }

      .pcIt_tbtn.btn3 {
        color: #2278FF;
        height: 70px;
        line-height: 70px;
        background-color: #fff;
        border: 1px solid #2278FF;
      }

      .pcIt_tbtn.btn1 {
        color: #2278FF;
        font-weight: bold;
        height: 70px;
        line-height: 70px;
        background-color: #fff;
        border: 1px solid #2278FF;
      }

      .pcIt_tbtn.btn2 {
        height: 70px;
        line-height: 70px;
        border: 1px solid #fff;
      }
    }
    .p_c_it_s{
      color: #2278FF;
    }
  }

  .p_c_it.p2 {
    color: #fff;
    border-radius: 24px;
    background: #2278FF;

    .pcIt_l > .line {
      background-color: #fff;
    }

    .p_c_it_s {
      color: #333;
    }
  }
}
.page-start{
  height: 220px;
  background: url(@/assets/software/price-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  padding-top: 190px;
  color: #fff;
  font-size: 24px;
}

.title1{
    font-size: 20px;
    font-weight: 500;
}

.title2{
  font-size: 32px;
  font-weight: 500;
}

.title3{
  font-size: 16px;
  font-weight: 400;
}

.priceBox{
  padding: 0 140px;
  display: flex;
  justify-content: space-between;
}

.item{
  border-radius: 16px;
  color: #fff;
  background-color: #000F26;
  box-sizing: border-box;
  padding: 32px;
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item-1{
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    .Popular{
      font-size: 14px;
      font-weight: 500;
      color: #333;
      background-color: #FECE02;
      padding: 5px 15px;
      margin-left: 15px;
      border-radius: 99px;
    }
  }
  .item-2{
    margin-bottom: 10px;
  }
  .item-3{
    margin-bottom: 25px;
  }
  .item-4{
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
  .item-5{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img{
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
  .item-6{
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
  }
  .item-7{
    display: flex;
    justify-content: center;
    gap: 24px;
    color: #2278FF;
    margin-top: 20px;
    .meal{
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    img{
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
}

.item:hover{
  border: 1px solid #2278FF;
  box-shadow: 0px 0px 24px 0px rgba(65, 50, 224, 0.6);
}

.yellow{
  border: 1px solid #FECE04;
  box-shadow: 0px 0px 24px 0px rgba(254, 206, 2, 0.6);
  background-color: rgba(254, 206, 2, 0.2);

}
.yellow_buy{
  background: linear-gradient(106deg, #FFDB43 26%, #F5A10A 79%);
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0px 0px 21px 0px rgba(254, 206, 2, 0.2);
}
.yewllow_meal{
  color: #FECE04 !important;
  img{
    filter: hue-rotate(180deg) saturate(1.0) brightness(1.9);
  }
}

.optional{
  cursor: pointer;
  padding: 12px 50px;
  border-radius: 8px;
  border: 1px solid #FFFFFF;
  width: fit-content;
  margin: 40px auto;
  margin-bottom: 20px;
  color: #fff;
}
.descripe{
  text-align: center;
  color: #fff;
}
.contrast{
  font-size: 48px;
  text-align: center;
  color: #fff;
  margin-top: 150px;
  margin-bottom: 40px;
  .contrast_tiitle{
    margin: 0 auto;
    width: fit-content;
    padding:  5px 16px;
    font-size: 18px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 20px;
  }
}

.table-container {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  position: relative;
  margin-bottom: 100px;
}

.highlight{
  top: 12px;
  left: 570px;
  position: absolute;
  width: 250px;
  height: 95%;
  border: 1px solid #FFFFFF;
  box-shadow: inset 0px 0px 40px 0px #2278FF;
  border-radius: 16px;
}

.version-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: #e0e0e0;
  font-size: 14px;
  table-layout: fixed;
}

.version-table thead th {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 12px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  position: relative;
}

.version-table tbody td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 12px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  transition: background-color 0.2s;
}

.version-table tbody tr:last-child td {
  border-bottom: none;
}
.compare-table{
  position: relative;
  font-size: 20px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
  font-size: 16px;
  table-layout: fixed;
}

.custom-table th {
  padding: 30px 12px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-table td {
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.iconImg{
  width: 50px;
  height: 50px;
  border-radius: 16px;
}

.table-cell-center {
  padding: 20px 0 20px 70px !important;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
