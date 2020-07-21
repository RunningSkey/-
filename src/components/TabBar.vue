<template>
  <div>
    <van-tabbar v-model="active" placeholder route active-color="#4fc08d">
      <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="category" icon="search" to="/about">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="my" icon="friends-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
  
</style>

<script>
export default {
  name: 'TabBar',
  data(){
    return {
      active:"home"
    }
  },
  
}
</script>
