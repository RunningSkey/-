<template>
  <div>
    <!-- 顶部标题 -->
    <div>
      <h3>购物车</h3>
      <div class="content">
        <van-icon class="icon" name="cart-circle-o" />
        <span class="text">购物车暂时没有商品</span>
        <van-button class="btn" color="#4fc08d" size="small" round>
          去逛逛
        </van-button>
      </div>
    </div>
    <!-- 为你推荐 -->
    <div>
      <detail></detail>
    </div>
    <!-- 底部选项卡 -->
    <tab-bar></tab-bar>
  </div>
</template>

<style scoped>
  h3{
    padding: 10px 0;
    font-size: 18px;
    text-align: center;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 200px;
    background: #f0f0f0;
  }
  .icon{
    font-size: 40px;
  }
  .text{
    margin: 10px 0;
  }
  .btn{
    width: 100px;
    margin: 0 auto;
  }
</style>

<script>

import Detail from '../index/children/recommend/children/Detail'

export default {
  components:{
    Detail
  }
}
</script>