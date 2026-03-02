<template>
  <div class="home_page vls">
    <div class="platTopOut flexRowAC w1380">
      <div class="platTop">
        <div class="VLStream">
          K8S容器管理
          <br />
          和
          <br />
          CMDB软件
        </div>
        <div class="plat_cent">
          基于OpenSergo统一微服务治理警务服务总线软件
        </div>
        <div class="flexRowAC useBox">
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
      <img class="platTopOutImg" src="@/assets/software/k8sMana_bg1.png" alt="" />
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/k8s.mp4" controls autoplay muted />
    </div>
    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section0')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section0'}">微服务平台</span>
        <span class="line" :class="{activeLine:activeSection==='section0'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">微服务管理支撑</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">API网关</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
    </div>
    <!--微服务平台 -->
    <div id="section0" ref="section0">
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            容器管理
          </div>
          <div class="cl_d">
            提供高性能容器应用管理服务，支持Kubernetes原生工具，简化环境搭建，涵盖集群、容器主机、调度、网络、存储及负载均衡管理。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_rqgl_bg.png" alt="" />
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_ywjkgl_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            镜像管理
          </div>
          <div class="cl_d">
            提供安全可靠的镜像全生命周期管理，支持高效仓库与镜像管理，助力用户快速部署容器化服务。
          </div>
        </div>
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            微服务运行监控
          </div>
          <div class="cl_d">
            涵盖服务监控、日志管理、告警等功能，助力快速定位与排除故障，保障业务稳定运行。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_wfwyx_bg.png" alt="" />
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_fwzl_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            服务治理
          </div>
          <div class="cl_d">
            服务治理通过指标分析与动态策略，优化服务运行，保障高可用性与性能稳定。
          </div>
        </div>
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            配置管理
          </div>
          <div class="cl_d">
            支持集中化管理与实时推送，简化多环境配置操作，提升效率与服务能力。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_pzgl_bg.png" alt="" />
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_wfwzcgl_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            微服务注册管理
          </div>
          <div class="cl_d">
            微服务注册提供新XX平台微服务的注册、更新、启用/停用/注销、查询等服务。
          </div>
        </div>
      </div>
    </div>
    <!--微服务管理支撑-->
    <div id="section1" ref="section1">
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            微服务目录管理
          </div>
          <div class="cl_d">
            展示已注册微服务列表，含名称、类型、管理单位、状态等信息，支持启用、更新、停用等操作，并按名称或类型查询。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_wfwmlgl_bg.png" alt="" />
      </div>
      <div class="w1380 CloudBox ipcBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_zqgl_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            微服务全生命<br />
            周期管理
          </div>
          <div class="cl_d">
            包括：微服务创建、微服务启停、微服务更新、微服务伸缩、微服务升级和回滚、微服务健康检查。
          </div>
        </div>
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            微服务治理支撑
          </div>
          <div class="cl_d">
            微服务治理通过指标分析与策略优化，保障高可用性，防止雪崩效应，涵盖流控、灰度发布、熔断降级、限流等功能。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_wfwzlzc_bg.png" alt="" />
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_jxgl_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            微服务业务监控管理
          </div>
          <div class="cl_d">
            实时采集与分析CPU/内存、容器、服务、实例、调用链等数据，监控应用健康状态，快速定位与排除故障，保障微服务稳定运行。
          </div>
        </div>
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            访问鉴权
          </div>
          <div class="cl_d">
            微服务网关提供统一安全控制，支持应用鉴权、用户认证（OAuth2、JWT）、请求校验，拦截无效请求，降低后端资源消耗。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_fwjq_bg.png" alt="" />
      </div>
    </div>
    <!--API网关-->
    <div id="section2" ref="section2">
      <div class="w1380 CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_fwly_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            服务路由
          </div>
          <div class="cl_d">
            微服务网关通过权限校验与路由匹配处理服务请求，完成后将响应结果传递至服务发起方，实现高效安全的请求转发与响应。
          </div>
        </div>
      </div>
      <div class="w1380 CloudBox ipcBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            API调试
          </div>
          <div class="cl_d">
            包括：微服务创建、微服务启停、微服务更新、微服务伸缩、微服务升级和回滚、微服务健康检查。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_apits_bg.png" alt="" />
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_xyzh_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            协议转换
          </div>
          <div class="cl_d">
            后端服务支持Dubbo、SOAP协议，并通过协议转换将服务统一以REST协议对外提供，提升兼容性与扩展性。
          </div>
        </div>
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            数据转换
          </div>
          <div class="cl_d">
            通过配置映射规则，实现前、后端数据转换。支持前端请求的数据转换。支持返回结果的数据转换。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_sjzh_bg.png" alt="" />
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_fzjh_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            负载均衡
          </div>
          <div class="cl_d">
            在高负载情况下，支持通过横向扩展和集群提升处理能力。网关内负载均衡通过注册中心发现可用服务实例，支持轮询、随机、最小并发等负载均衡方式。
          </div>
        </div>
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            访问控制
          </div>
          <div class="cl_d">
            通过访问控制策略管理API调用者，支持新增、编辑、删除策略。使用IP黑白名单控制访问，白名单限制非授权IP访问，黑名单拒绝指定IP访问API服务。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_fwkz_bg.png" alt="" />
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_rdgl_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            熔断隔离
          </div>
          <div class="cl_d">
            网关通过熔断和隔离机制，响应慢或超时时熔断服务并释放资源，监控异常防止影响系统稳定性。
          </div>
        </div>
      </div>
      <div class="w1380 CloudBox flexRowAC">
        <div class="CloudL">
          <div class="cl_t">
            服务挡板
          </div>
          <div class="cl_d">
            服务挡板用于开发调试阶段，模拟后端服务返回预期结果，帮助调用方在API联调环境未搭建时进行开发。
          </div>
        </div>
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_fwdb_bg.png" alt="" />
      </div>
      <div class="w1380 ipcView CloudBox flexRowAC">
        <img class="k8sMana_c1" src="@/assets/software/k8sMana/k8s_dtlj_bg.png" alt="" />
        <div class="CloudL">
          <div class="cl_t">
            动态拦截
          </div>
          <div class="cl_d">
            提供动态拦截器，方便开发、运维人员对提供的服务进行自定义请求拦截配置、响应包装等。
          </div>
        </div>
      </div>
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
    <div class="productBox w1380">
      <div class="proT">
        现在开始体验
      </div>
      <div class="productImg product1">
        <img class="pro1_1" src="@/assets/software/down1.png" alt="" />
        <div class="pro1_1_s flexRowAC">
          私有化部署
          <span class="pro1_1_s_b">1v1 定制方案量身打造</span>
        </div>
        <div class="pro1_2 flexRowAC">
          <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
          1v1 专家服务，定制化解决方案
        </div>
        <div class="pro1_2 flexRowAC">
          <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
          本地化灵活部署，私有化数据存储
        </div>
        <div class="pro1_2 flexRowAC">
          <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
          高可用架构与完备容灾方案
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
    <!--资料下载-->
    <div class="productBox w1380">
      <div class="proT">
        资料下载
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class="product2Out_it flexRowAC">
          <div class="pro2o_l flexRowAC">
            <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />
            微服务集成平台---k8s容器管理和CMDB软件V2.0技术白皮书.pdf
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
definePageMeta({
  layout: 'site-new'
})

const activeSection = ref('section0')
const section0 = ref(null)
const section1 = ref(null)
const section2 = ref(null)

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
    { id: 'section2', ref: section2 }
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

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/微服务集成平台---k8s容器管理和CMDB软件V2.0技术白皮书.pdf'
  link.download = '微服务集成平台---k8s容器管理和CMDB软件V2.0技术白皮书.pdf'
  link.click()
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
.platTopOut{
  justify-content: space-between;
  padding-bottom: 160px;

  .platTopOutImg{
    flex-shrink: 0;
    width: 614px;
    height: auto;
    margin-left: 100px;
  }
}

.platTop {
  text-align: left;
  padding: 110px 0;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
    padding: 8px 0;
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

  .useBox {
    justify-content: left;
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

    .u3{
      border-radius: 8px;
      border: 1px solid #ED2121;
      color: #ED2121;
      font-weight: bold;
      font-size: 18px;
      background: #fff;
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
  padding: 0 0 110px;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-top: 30px;
  padding-bottom: 130px;
  justify-content: space-between;
  align-items: flex-start;

  .cl_t {
    padding-top: 30px;
    padding-bottom: 40px;
    font-weight: bold;
    font-size: 54px;
    color: #333333;
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
    height: 300px;

    .proImg {
      width: 100%;
      height: 100%;
    }

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

.k8sMana_c1{
  width: 692px;
  height: auto;
}

.tabSwitch{
  position: sticky;
  top: 82px;
  background-color: #fff;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 160px;
  padding-top: 10px;
  .tabItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 28px;
      letter-spacing: 2.67px;
      text-align: left;
      margin-bottom: 10px;
    }
    .line{
      width: 64px;
      height: 4px;
      background: transparent;
    }

    .activeTitle{
      color: #333333;
      //font-weight: bold;
    }
    .activeLine{
     background: #4480FF;
    }
  }
}

// #section0, #section1, #section2 {
//   padding-top: 100px;
//   margin-top: -100px;
// }
</style>
