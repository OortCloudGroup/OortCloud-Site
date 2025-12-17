<template>
  <div class="defalut_layout">
    <div ref="anchor" />
    <NavHeader class="defalut_hea" :is-sticky="isSticky" :is-login="isLogin" @handle="handle" @close="close" />
    <div class="page_body">
      <slot />
      <Bottom />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScroll, useElementBounding } from '@vueuse/core'
import NavHeader from '@/components/siteNew/NavHeader.vue'
import Bottom from '@/components/siteNew/Bottom.vue'

let hVisi = ref(false)
let hVisiT = ref('')
const isLogin = false

const handle = (t:any) => {
  if (t === '应用程序' || t === '行业' || t === '社区' ||
      t === '街道' || t === '问题反馈' || t === '云备忘录' ||
      t === '云相册' || t === '云盘' || t === '云文档' ||
      t === '云清单' || t === 'WMS' || t === '任务管理' ||
      t === '合同管理' || t === '文档管理' || t === '智能客服' ||
      t === '知识论坛' || t === '问卷调查') {
    hVisiT.value = t
    hVisi.value = true
  } else {
    hVisi.value = false
  }
}

const close = () => {
  hVisi.value = false
}

const anchor = ref(null)
const { y } = useScroll(window)

const { top: anchorTop } = useElementBounding(anchor)

const isSticky = computed(() => {
  return y.value > anchorTop.value
})

</script>

<style lang="scss" scoped>

.defalut_layout, .page {
}

.page_body {
  /* height: calc(100vh - 82px); */
}

.main_body {
  background-color: #F7F7F7;
  min-height: calc(100vh - 140px - 300px);
}

:deep(.el-dialog) {
  padding: 0;

  .el-dialog__header {
    padding: 0;
  }

  .defalut_hea {
    height: 82px;
    position: relative;
  }
}
</style>
