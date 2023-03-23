<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
// You might choose this based on an API call or logged-in status
const layout = "default";

</script>

<style>
@import './assets/common.css'
</style>