<template>
  <div class="classifys">
    <!-- 顶部搜索 -->
    <search></search>
    <!-- 主体内容 -->
    <div class="content">
      <van-row>
        <!-- 左边 -->
        <van-col class="left" span="6">
          <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item title="新品" />
            <van-sidebar-item title="手机" />
            <van-sidebar-item title="电脑" />
            <van-sidebar-item title="智能家居" />     
          </van-sidebar>
        </van-col>
        <!-- 右边 -->
        <van-col v-show="right == '新品'" class="right" span="18">
          新品
          <div v-for="k in 10" :key="k">12</div>
        </van-col>
        <van-col v-show="right == '手机'" class="right" span="18">手机</van-col>
        <van-col v-show="right == '电脑'" class="right" span="18">电脑</van-col>
        <van-col v-show="right == '智能家居'" class="right" span="18">智能家居</van-col>
      </van-row>
    </div>
    <!-- 底部分类栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<style scoped>
  .classifys{
    padding-top: 54px;
  }
  .content{
    background: #fff;
  }
  .van-sidebar{
    width: 100%;
    text-align: center;
  }
  .van-sidebar-item--select{
    color: #4fc08d;
  }
  .van-sidebar-item--select::before {
    left: 100%;
    background-color: #4fc08d;
    transform: translate(-4px,-50%);
  }

  .right{
    padding: 20px;
    height: 400px;
  }
</style>
  
<script>


export default {
  data() {
    return {
      activeKey:0,
      right:"新品"
    }
  },
  components:{
  },
  methods:{
    onChange(index){
      console.log(this.activeKey)
      var i = this.activeKey;
      if(i==0){
        this.right = '新品'
      }else if(i==1){
        this.right = '手机'
      }else if(i==2){
        this.right = '电脑'
      }else{
        this.right = '智能家居'
      }
    }
  }
}
</script>