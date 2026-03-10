<template>
  <div class="defalut_layout">
    <div ref="anchor" />
    <!-- <NavHeader class="defalut_hea" :is-sticky="isSticky" @handle="handle" /> -->
    <div class="page_body">
      <slot />
      <!-- <JZBottom /> -->
    </div>
    <!-- <el-dialog
      v-model="hVisi"
      width="100%"
      top="0"
      :show-close="false"
      class="headDia"
    >
      <NavHeader v-if="hVisiT" :item="hVisiT" class="defalut_hea" @handle="handle" />
      <industry :item="hVisiT" @handle="handleI" />
    </el-dialog> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { useScroll, useElementBounding } from '@vueuse/core'
// import Industry from '@/pages/zh/siteNew/industry.vue'
// import NavHeader from '@/components/siteNew/NavHeader.vue'
// import JZBottom from '@/components/JZBottom.vue'

// const router = useRouter()
// let hVisi = ref(false)
// let hVisiT = ref('')

// const handle = (t) => {
//   if (t === '应用程序' || t === '行业' || t === '社区' ||
//       t === '街道' || t === '问题反馈' || t === '云备忘录' ||
//       t === '云相册' || t === '云盘' || t === '云文档' ||
//       t === '云清单' || t === 'WMS' || t === '任务管理' ||
//       t === '合同管理' || t === '文档管理' || t === '智能客服' ||
//       t === '知识论坛' || t === '问卷调查') {
//     hVisiT.value = t
//     hVisi.value = true
//   } else {
//     hVisi.value = false
//   }
// }

// // 选择
// const handleI = (val) => {
//   hVisi.value = false
//   if (val) {
//     router.push(val?.path)
//   }
// }

// const anchor = ref(null)
// const { y } = useScroll(window)

// const { top: anchorTop } = useElementBounding(anchor)

// const isSticky = computed(() => {
//   return y.value > anchorTop.value
// })

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
