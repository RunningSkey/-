<template>
  <div class="about">
    <search></search>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="新品" />
      <van-sidebar-item title="手机" />
      <van-sidebar-item title="电脑" />
      <van-sidebar-item v-for="k in 12" :key="k" title="智能家居" />     
    </van-sidebar>
    <div class="new" v-for="k in 100" :key="k">1121</div>    
  </div>
</template>

<style scoped>
  .about{
    padding-top: 54px;
  }
  /* 重写UI样式 */
  .van-sidebar{
    position: fixed;
    left: 0;
  }
  .van-sidebar-item--select{
    color: #4fc08d;
  }
  .van-sidebar-item--select::before {
    left: 100%;
    background-color: #4fc08d;
    transform: translate(-4px,-50%);
  }
  /* 内容 */
  .new{
    padding-left: 85px;
  }
</style>


<script>

import Search from '../components/Search'

export default {
  components:{
    Search
  },
  data(){
    return {
      activeKey:0
    }
  }
}
</script>