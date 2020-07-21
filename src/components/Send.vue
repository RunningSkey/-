<template>
  <div class="send" id="send">
    <!-- 轮播 -->
    <carousel></carousel>
    <!-- 服务 -->
    <van-row class="serve">
      <van-col span="8">
        <van-icon class="icon" name="passed" />官方商城
      </van-col>
      <van-col span="8">
        <van-icon class="icon" name="passed" />正品保障
      </van-col>
      <van-col span="8">
        <van-icon class="icon" name="passed" />售后无忧
      </van-col>
    </van-row>
    <!-- 类型 -->
    <van-row class="cate">
      <van-col span="6">
        <i class="bg bg1"></i>
        <p class="p">购特惠</p>
      </van-col>
      <van-col span="6">
        <i class="bg bg2"></i>
        <p>会员领券</p>
      </van-col>
      <van-col span="6">
        <i class="bg bg3"></i>
        <p>以旧换新</p>
      </van-col>
      <van-col span="6">
        <i class="bg bg4"></i>
        <p>数码</p>
      </van-col>
    </van-row>
    <!-- 商品 -->
    <div>
      <!-- 新品 -->
      <van-row class="new">
        <van-col class="new-item" span="12">
          <div>
            <img src="../assets/img/35790532249513509753.png" alt="">
          </div>
        </van-col>
        <van-col class="new-item" span="12">
          <div>
            <img src="../assets/img/73730068049516003737.jpg" alt="">
          </div>
        </van-col>
        <van-col class="new-item" span="12">
          <div>
            <img src="../assets/img/29897817149511879892.png" alt="">
          </div>
        </van-col>
        <van-col class="new-item" span="12">
          <div>
            <img src="../assets/img/29897817149511879892.png" alt="">
          </div>
        </van-col>
      </van-row>
      <!-- 1L -->
      <div class="hot"  v-for="(v,k) in 2" :key="k">
        <van-divider class="title">热销商品</van-divider>        
        <van-row class="hot-list">
          <van-col class="hot-item" span="12">
            <div>
              <div class="hot-img">
                <img src="../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png" alt="">
              </div>
              <div class="hot-title">
                HUAWEI P 40
              </div>
              <div class="hot-less">
                限时直降300
              </div>
              <div class="hot-price">
                ￥1233
              </div>
            </div>
          </van-col>
          <van-col class="hot-item" span="12">
            <div>
              <div class="hot-img">
                <img src="../assets/img/78_78_571443A7074C195924CA2A203A5EB9469E3D90C612B0FEE7.png" alt="">
              </div>
              <div class="hot-title">
                荣耀px
              </div>
              <div class="hot-less">
                限时直降300
              </div>
              <div class="hot-price">
                ￥1233
              </div>
            </div>
          </van-col>
          <van-col class="hot-item" span="12">
            <div>
              <div class="hot-img">
                <img src="../assets/img/78_78_571443A7074C195924CA2A203A5EB9469E3D90C612B0FEE7.png" alt="">
              </div>
              <div class="hot-title">
                荣耀px
              </div>
              <div class="hot-less">
                限时直降300
              </div>
              <div class="hot-price">
                ￥1233
              </div>
            </div>
          </van-col>
          <van-col class="hot-item" span="12">
            <div>
              <div class="hot-img">
                <img src="../assets/img/78_78_571443A7074C195924CA2A203A5EB9469E3D90C612B0FEE7.png" alt="">
              </div>
              <div class="hot-title">
                荣耀px
              </div>
              <div class="hot-less">
                限时直降300
              </div>
              <div class="hot-price">
                ￥1233
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
      <van-button icon="arrow-up" class="top" @click="to" round></van-button>
    </div>
  </div>
</template>

<style scoped>
  .send{
    text-align: center;
    scroll-behavior: smooth
  }
  .serve{
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #888;
  }
  .icon{
    vertical-align:baseline;
    text-align: center;
  }
  .cate{
    font-size: 14px;
    color: #888;
    text-align: center;
  }
  .bg{
    display: inline-block;
    width: 48px;
    height: 48px;
    background: url('../assets/img/32b46fe090fcab93c1459eae921a2119.png');
    background-size: 350px;
    background-position: -0px 0px;
  }
  .bg2{
    background-position: -46px 0px;
  }
  .bg3{
    background-position: -92px 0px;
  }
  .bg4{
    background-position: -233px 0px;
  }
  .new{
    padding: 2px 10px;
  }
  .new img{
    width: 100%;
    border-radius: 5px;
  }
  .new-item>div{
    margin: 3px;
  }
  .title{
    padding: 0 20px;
    font-size: 20px;
    text-align: center;
  }

  .hot-item{
    padding: 2px 0;
  }
  .hot-list>.hot-item:nth-child(odd)>div{
    margin: 0 5px;
    padding: 5px 0;
    background: #f6f6f6;
  }
  .hot-list>.hot-item:nth-child(even)>div{
    margin-right: 5px;
    padding: 5px 0;
    background: #f6f6f6;
  }
  .hot-title{
    margin: 5px 0;
    font-size: 14px;
  }
  .hot-less{
    font-size: 12px;
    color: #666;
  }
  .hot-price{
    margin-top: 5px;
    font-size: 12px;
    color: #d35a5a;
  }

  .top{
    position: fixed;
    right: 0;
    bottom: 60px;
  }
</style>

<script>

import Carousel from './Carousel'

export default {
  name:'Send',
  data() {
    return {
      show:false,
      height: document.getElementById('send')
    }
  },
  components:{
    Carousel
  },
  methods:{
    to(){
      console.log(document.getElementById("send").offsetHeight)
    }
  },
  watch: {
    height(){
      // var el = document.getElementById('send')
      console.log(this.height)

    }
  },
  updated() {
    console.log()
  },
}
</script>