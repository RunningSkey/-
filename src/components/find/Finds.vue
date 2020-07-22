<template>
  <div>
    <div>
      <!-- 头标题 -->
      <div class="title">发现</div>
      <!-- 内容 -->
      <div class="content">
        <!-- 轮播 -->
        <div class="carousel">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(v,k) in swipeImg" :key="k">
              <img v-lazy="v.img" alt="">
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 亲选头条 -->
        <div class="container">
          <div class="title">亲选头条</div>
          <div v-for="(v,k) in swipeImg" :key="k">
            <div class="img">
              <img v-lazy="v.img" alt="">
            </div>
            <div class="stitle">
              荣耀亲选 ❤ 生态产品BYBLUE HQ3 智能云台摄像头
            </div>
            <div class="contents">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, consectetur!
            </div>
            <div class="time">
              2019-10-10
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部选项栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<style scoped>
  .container{
    padding: 0 20px;
  }
  .title{
    padding: 10px 0;
    font-size: 18px;
    text-align: center;
  }
  .carousel img,.img img{
    width: 100%;
    height: 135px;
  }
  .img img{
    height: 120px;
    border-radius: 5px;
  }
  .stitle{
    margin: 5px 0;
    font-size: 14px;
    font-weight: 600;
  }
  .content,.time{
    color: #6d6b6b;
  }
  .time{
    margin: 5px 0;
  }
</style>
<script>
export default {
  data(){
    return {
      swipeImg:[
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/84204374359517340248.jpg"
        },
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/57315164359516151375.jpg"
        },
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/82321064359516012328.jpg"
        },
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/81075264359516257018.jpg"
        }
      ]
    }
  }
}
</script>