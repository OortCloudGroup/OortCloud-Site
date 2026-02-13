<template>
  <div class="home_page vls">
    <div class="platTopOut flexRowAC w1380">
      <div class="platTop w1380">
        <div class="VLStream">
          云课堂<br />
          Classroom<br />
          3.0
        </div>
        <div class="plat_cent">
          基于移动互联网的培训管理和学习交互平台
        </div>
        <div class="flexRowAC useBox" style="justify-content: flex-start">
          <div class="seeMore">
            立即试用
          </div>
          <div class="seeMore u3">
            立即购买
          </div>
          <div class="seeMore u1">
            安排演示
          </div>
        </div>
      </div>
      <img class="platTopOutImg" src="@/assets/software/cloudClass_bg1.png" alt="" />
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/云课堂.mp4" controls autoplay muted />
    </div>

    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section0')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section0'}">直播课堂</span>
        <span class="line" :class="{activeLine:activeSection==='section0'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">在线考试</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">在线课堂</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section3')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section3'}">学习计划</span>
        <span class="line" :class="{activeLine:activeSection==='section3'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section4')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section4'}">其他</span>
        <span class="line" :class="{activeLine:activeSection==='section4'}" />
      </div>
    </div>

    <div id="section0" ref="section0" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          直播课堂
        </div>
        <div class="cl_d">
          知识奇幻之旅开启
        </div>
      </div>
      <img class="k8sMana_c1" src="@/assets/software/superAPP_c8.png" alt="" />
    </div>

    <div id="section1" ref="section1" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          在线考试
        </div>
        <div class="cl_d">
          知识大阅兵，学识绽光彩
        </div>
      </div>
      <img class="k8sMana_c1" src="@/assets/software/cloudClass_c1.png" alt="" />
    </div>

    <div id="section2" ref="section2" class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          视频课程
        </div>
        <div class="cl_d">
          开启知识新视界
        </div>
      </div>
      <img class="k8sMana_c1" src="@/assets/software/cloudClass_c2.png" alt="" />
    </div>

    <div class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          排行榜
        </div>
        <div class="cl_d">
          记录进步足迹
        </div>
      </div>
      <img class="k8sMana_c1" src="@/assets/software/cloudClass_c3.png" alt="" />
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          心得体会
        </div>
        <div class="cl_d">
          知识感悟的智慧结晶
        </div>
        <img class="cloudClass_c4 " src="@/assets/software/cloudClass_c4.png" alt="" />
      </div>
    </div>

    <div id="section3" ref="section3" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          学习计划
        </div>
        <div class="cl_d">
          探寻知识的无尽奥秘
        </div>
      </div>
      <img class="k8sMana_c1" src="@/assets/software/cloudClass_c5.png" alt="" />
    </div>

    <div id="section4" ref="section4" class="w1380 CloudBox">
      <div class="CloudL">
        <div class="cl_t wt_t">
          问卷调查、微投票
        </div>
        <div class="cl_d wt_d">
          你的选择很重要
        </div>
      </div>
      <img class="w1380" src="@/assets/software/cloudClass_c6.png" alt="" />
    </div>

    <!-- 成功案例 -->
    <div class="productBox w1380">
      <div class="proT">
        成功案例
      </div>
      <div class="productImg p5Out flexRowAC">
        <div class="item img1">
          <div class="bottom">
            <p>城市风光</p>
          </div>
        </div>
        <div class="item img2">
          <div class="bottom">
            <p>专业服务</p>
          </div>
        </div>
        <div class="item img3">
          <div class="bottom">
            <p>教育机构</p>
          </div>
        </div>
        <div class="item img4">
          <div class="bottom">
            <p>精准分析</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 现在开始体验 -->
    <div class="productBox w1380">
      <div class="proT">
        现在开始体验
      </div>
      <div class="flexRowAC productItem">
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1_.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            SaaS版本<span class="pro1_1_s_b">14天功能全免费试用</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />7天快速迭代，问题敏捷解决
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />快速启用，精简运维
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />更低建设成本
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            私有化部署<span class="pro1_1_s_b">1v1 定制方案量身打造</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />1v1 专家服务，定制化解决方案
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />本地化灵活部署，私有化数据存储
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />高可用架构与完备容灾方案
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--资料下载-->
    <div class="productBox w1380">
      <div class="proT">
        资料下载
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class="product2Out_it flexRowAC">
          <div class="pro2o_l flexRowAC">
            <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />云课堂3.0（new）.pdf
          </div>
          <div class="pro2o_2" @click="downloadPDF">
            下载
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'

definePageMeta({
  layout: 'site-new'
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/云课堂3.0(new).pdf'
  link.download = '云课堂3.0（new）.pdf'
  link.click()
}

let p5Arr = ref([])
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]
const activeSection = ref('section0')

const section0 = ref(null) // 直播课堂
const section1 = ref(null) // 在线考试
const section2 = ref(null) // 在线课堂
const section3 = ref(null) // 学习计划
const section4 = ref(null) // 其他（问卷调查、微投票）

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const viewportHeight = window.innerHeight
    const offset = viewportHeight * 0.15
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  const sections = [
    { id: 'section0', ref: section0 },
    { id: 'section1', ref: section1 },
    { id: 'section2', ref: section2 },
    { id: 'section3', ref: section3 },
    { id: 'section4', ref: section4 }
  ]
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = section.ref.value
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.platTopOut{
  justify-content: space-between;
  padding-bottom: 110px;

  .platTopOutImg{
    flex-shrink: 0;
    width: 680px;
    height: auto;
    margin-left: 100px;
  }
}

.platTop {
  text-align: left;
  padding: 110px 0;

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
    padding: 8px 0;
    position: relative;
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
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
      font-weight: bold;
      font-size: 18px;
    }

    .u1 {
      color: #333;
      background-color: #F4F4F4;
      border: 1px solid #F4F4F4;
    }

    .u3{
      border-radius: 8px;
      border: 1px solid #ED2121;
      color: #ED2121;
      font-weight: bold;
      font-size: 18px;
      background: #fff;
    }
  }
}

.webBottomImg {
  padding: 0 0 110px;
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
    padding-top: 30px;
    padding-bottom: 40px;
    color: #333333;
    font-weight: bold;
    font-size: 54px;
    line-height: 82px;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #97A3B6;
    font-weight: bold;
    font-size: 40px;
  }

  .wt_t{
    padding-bottom: 16px;
  }

  .wt_d{
    padding-bottom: 72px;
  }

  .CloudL {
    width: 500px;
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

  .productItem {
    gap: 20px;

    .productItem1 {
      flex: 1;

      &:nth-child(1) {
        background: #2278FF;

        .pro3_btn {
          color: #2278FF;
        }
      }
    }
  }

  .proT {
    padding-bottom: 60px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
  }

  .productImg {
    width: 100%;
    height: 300px;

    .img1{
      background: url('@/assets/VLimg2.0/jyjg1.png');
    }
    .img2{
      background: url('@/assets/VLimg2.0/jyjg2.png');
    }
    .img3{
      background: url('@/assets/VLimg2.0/jyjg3.png');
    }
    .img4{
      background: url('@/assets/VLimg2.0/jyjg4.png');
    }
    .item{
      width: 300px;
      height: 300px;
      background-size: cover;
      position: relative;
      .bottom{
        position: absolute;
        bottom: 0;
        width: 300px;
        text-align: left;
        line-height: 88px;
        border-radius: 0 0 24px 24px;
        background: linear-gradient(180deg, rgba(255, 94, 16, 0) 0%, #3C80FF  100%);
        p{
          margin-left: 24px;
          font-size: 28px;
          font-weight: bold;
          color: #FFFFFF;
        }
      }
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
        cursor: pointer;
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
    }
  }
}

.cloudClass_c4{
  width: 1380px;
  height: auto;
}
.k8sMana_c1{
  width: 750px;
  height: auto;
}

.tabSwitch{
  position: sticky;
  top: 82px;
  z-index: 9;
  background-color: #fff;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 80px;
  .tabItem{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 28px;
      letter-spacing: 2.67px;
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }
    .line{
      width: 64px;
      height: 4px;
      background: transparent;
      transition: background-color 0.3s ease;
    }
    .activeTitle{
      color: #333333;
      font-weight: 500;
    }
    .activeLine{
      background: #4480FF;
    }
  }
}
</style>
