<template>
  <div id="recommend" ref="recommend">
    <!-- 轮播 -->
    <carousel></carousel>
    <!-- 服务 -->
    <serve></serve>
    <!-- 类型 -->
    <cate></cate>
    <!-- 新品 -->
    <rec-nav></rec-nav>
    <!-- 热销 -->
    <detail></detail>
    <!-- 回到顶部 -->
    <van-button icon="home-o" class="backtop" @click="backTop"></van-button>
  </div>
</template>

<style scoped>
  .backtop{
    position: fixed;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    bottom: 60px;
    right: 20px;
  }
</style>

<script>

import Carousel from './children/Carousel'
import Serve from './children/Serve'
import Cate from './children/Cate'
import RecNav from './children/RecNav'
import Detail from './children/Detail'

export default {
  name:'Recommend',
  data() {
    return {
      // show:false,
      height:''
    }
  },
  components:{
    Carousel,
    Serve,
    Cate,
    RecNav,
    Detail
  },
  methods:{
    backTop(){
      this.$refs.recommend.scrollIntoView()
    },
    show(){
      // console.log(this.$refs.recommend.scrollHeight)
      // console.log(e);
      // window.scrollTo(0,0)
      // console.log(window.screenTop,this.$refs.recommend.screenTop)
    }
  },
  mounted(){
    // window.addEventListener('scroll',this.show,true)
    // this.height = this.$refs.recommend.offsetHeight
  },
  watch: {
    // height(){
    //   console.log(this.height)
    // }
  },
  
}
</script>