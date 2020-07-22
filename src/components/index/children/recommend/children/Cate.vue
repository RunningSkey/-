<template>
  <div>
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
  </div>
</template>

<style scoped>
  .icon{
    vertical-align:baseline;
    text-align: center;
  }
  .cate{
    font-size: 12px;
    color: #888;
    text-align: center;
  }
  .bg{
    display: inline-block;
    width: 48px;
    height: 48px;
    background: url('../../../../../assets/img/32b46fe090fcab93c1459eae921a2119.png');
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
</style>