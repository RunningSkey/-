<template>
  <div>
    <!-- 顶部查询 -->
    <search></search>
    <!-- 顶部分类栏 -->
    <tab></tab>
    <!-- 底部分类栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<style scoped>

</style>

<script>

import Tab from './children/Tab'

export default {
  components: {
    Tab
  },
};
</script>