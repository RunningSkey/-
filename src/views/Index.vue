<template>
  <div class="index">
    <!-- 首页页面组件 -->
    <indexs></indexs>
  </div>
</template>

<style scoped>
  .index{
    background: #fff;
    padding-top: 54px;
  }
</style>

<script>

import Indexs from '../components/index/Indexs'

export default {
  name: "Index",
  components: {
    Indexs
  },
};
</script>
