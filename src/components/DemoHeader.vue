<template>
  <div class="demo_header" :class="title === '智慧党建' ? 'party-header' : ''">
    <a href="https://oortcloudsmart.com/" target="_blank"><img :src="logo" /></a>
    <span>{{ title }}</span>
    <span v-if="title != '智慧党建'" />
    <span v-if="title != '智慧党建'">{{ meta.subTitle }}</span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  meta: {
    type: Object,
    default: null
  }
})

const title = ref(props.meta.title)
const logo = ref(props.meta.logo)

if (props.meta.isGetAjax) {
  getConfigA()
}

async function getConfigA() {
  const { data } = await useFetch('http://oort.oortcloudsmart.com:31610/oort/oortcloud-sso/frontConf/v1/config.json', { method: 'get' })
  let res = toRaw(data.value) as any
  title.value = res.common.login_logo_text
  // 因为https里面加载http在浏览器有安全限制 这里要处理下路径 。在阿里云nginx已经配置好了 转发到31610的环境的fastdsf上 这里只需要把 前缀 fastdsf + 相对路径加上就好了
  if (!res.logoWhite.includes('https')) {
    let tempUrl = res.logoWhite.split('oort/oortwj1')[1]
    logo.value = '/fastdfs/oort/oortwj1' + tempUrl
  } else {
    logo.value = res.logoWhite
  }
}

</script>

<style scoped lang="scss">

  .demo_header {
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2856A5;
    img {
      height: 40px;
      margin: 0 0 0 32px;
    }
    span:nth-of-type(1) {
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 400;
      margin: 0 16px;
    }
    span:nth-of-type(2) {
      height: 24px;
      width: 1px;
      background-color: #fff;
    }
    span:nth-of-type(3) {
      font-size: 18px;
      color: #FFFFFF;
      margin: 0 16px;
      font-weight: 400;
    }
  }

  .party-header {
    padding-left: 200px;
    background: url(@/assets/img/demoHeader.png) !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    span:nth-of-type(1) {
      font-size: 24px;
      color: #E52B1D;
      letter-spacing: 0;
      font-weight: 400;
      margin: 0 16px;
    }
  }

</style>
