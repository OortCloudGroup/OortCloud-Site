<template>
  <div class="page_container">
    <div class="carousel_container">
      <Carousel :carouse-list="carouseList"></Carousel>
    </div>
    <div>


    </div>
  </div>
</template>

<script setup lang="ts">
import bg2 from '@/assets/img/home/bg_2.png'
import jwb from '@/assets/img/home/jwb.png'
import yzt_bg from '@/assets/img/home/yzt_bg.png'
import sypt from '@/assets/img/home/sypt.png'
import mhck from '@/assets/img/home/mhck.png'

const carouseList = ref([
  {url: bg2, title: '创造无限可能', desc:'公共安全“私有云智能化应用建设解决方案”提供商', buttons:[]},
  {url: jwb, title: '警务宝一体机', desc: '面向派出所、警务室的一体化智慧基层平台', buttons: [
    {text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}, {text: '观看视频'}
  ]},
  {url: yzt_bg, title: '智慧调度一张图', desc: '打造全警钟、全平台、资源整合、系统集成、信息共享，实现接警、指挥、调度为一体的指挥中心，从而更有效的提高治安预防、控制、制止的反应能力',
  buttons: [{text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}, {text: '观看视频'}]},
  {url: sypt, title: '私有云部署的移动安全办公云平台', desc: '对标公有云上的钉钉，企业微信的专门私有化部署的数字化移动协同办公平台，数据自己掌握，安全可控。打造了一个涵盖即时消息、电子邮件、音视频会议、资料分享、流程申请与',
  buttons: [{text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}, {text: '观看视频'}]},
  {url: mhck, title: '门户与应用仓库', desc: '快速打造数字化超级App，拥有领先于市场的小程序容器技术，可为您提供敏捷、安全的最佳实践，是数字化时代下企业移动开发的不二之选。',
  buttons: [{text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}]}
])



</script>


<style scoped>

.carousel_container {
  height: 500px;
  width: 100%;
}



</style>