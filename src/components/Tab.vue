<template>
  <div class="tab">
      <van-tabs v-model="active" swipeable color="#4fc08d">
        <!-- 推荐页面开始 -->
        <van-tab title="推荐" name="send" class="van-tabs__content">
          <send></send>
        </van-tab>

        <!-- 手机专区 -->
        <van-tab title="手机专区" name="phone"  class="van-tabs__content">
          <div v-for="(v,k) in 50" :key="k">手机{{k+1}}</div>      
        </van-tab>

        <!-- 电脑专区-->
        <van-tab title="电脑专区" name="computer"  class="van-tabs__content">
          <div v-for="(v,k) in 50" :key="k">电脑{{k+1}}</div>      
        </van-tab>

        <!-- 智能家居-->
        <van-tab title="智能家居" name="ai"  class="van-tabs__content">
          <div v-for="(v,k) in 50" :key="k">智能家居{{k+1}}</div>      
        </van-tab>
      </van-tabs>
  </div>
</template>

<style scoped>
  .van-tabs__content{
    position: fixed;
    top: 98px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding-bottom: 150px;
  }
</style>

<script>

import Send from '../components/Send'


export default {
  name:'Tab',
  components:{
    Send
  },
  data(){
    return {
      active: "send"
    }
  }
}
</script>
