<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(v,k) in swipeImg" :key="k">
        <img v-lazy="v.img" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>
  .van-swipe-item img{
    width: 100%;
    height: 150px;
  }
</style>

<script>
export default {
  name:'Carousel',
  data(){
    return {
      swipeImg:[
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/lZq6u4uSdHDERTqREhKP.jpg"
        },
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/m5eC5Aa47SGYLxHweJeY.jpg"
        },
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/32558834349513885523.jpg"
        },
        {
          img:"https://res.vmallres.com/pimages//pages/picImages/Xe9oUNAHw62mZ7OzCe31.jpg"
        }
      ]
    }
  }
}
</script>