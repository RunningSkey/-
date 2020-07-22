<template>
  <div class="tab">
    <van-tabs v-model="active" swipeable color="#4fc08d">
      <van-tab title="推荐" name="recommend" class="van-tabs__content">
        <recommend></recommend>
      </van-tab>

      <van-tab title="手机专区" name="phone"  class="van-tabs__content">
        <div v-for="(v,k) in 50" :key="k">手机{{k+1}}</div>      
      </van-tab>

      <van-tab title="电脑专区" name="computer"  class="van-tabs__content">
        <!-- <div v-for="(v,k) in 50" :key="k">电脑{{k+1}}</div>       -->
      </van-tab>

      <van-tab title="智能家居" name="ai"  class="van-tabs__content">
        <!-- <div v-for="(v,k) in 50" :key="k">智能家居{{k+1}}</div>       -->
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

import Recommend from './recommend/Recommend'


export default {
  name:'Tab',
  components:{
    Recommend
  },
  data(){
    return {
      active: "recommend"
    }
  },
  methods:{
    
  }
}
</script>
