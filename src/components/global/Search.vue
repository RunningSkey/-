<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="搜索商品"
        shape="round"
        left-icon="search"
        background="#4fc08d"       
      />
    </form>
  </div>
</template>

<style scoped>
  .search{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
</style>


<script>

export default {
  name:"Search",
  data(){
    return {
      value:''
    }
  }
}
</script>
