
<template>
  <div class="page_container">
    <div class="demo_body" />
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'demo',
  title: '公安',
  subTitle: '演示环境',
  logo: '/img/demo/menu/ga.png'
})

// const goDetail = () => {
//   window.open('http://oort.oortcloudsmart.com:21410/bus/apaas-web/JZControlPlat/index.html', '_blank')
// }

</script>

<style lang="scss" scoped>

.page_container {
  width: 100%;
  padding-bottom: 60px;
  height: 1340px;
  background-image: url("/img/demo/im/ga_bg.png");
  background-size: 100% 100%;
}

</style>
