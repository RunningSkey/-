<template>
  <div>
    <div class="detail" v-for="(v,k) in detail" :key="k">
      <van-divider class="title">{{k}}</van-divider>        
      <van-row class="hot-list">
        <van-col class="hot-item" span="12" v-for="(v,k) in v" :key="k">
          <div>
            <div class="hot-img">
              <img :src="v.img" alt="">
            </div>
            <div class="hot-title">
              {{v.title}}
            </div>
            <div class="hot-less">
              {{v.less}}
            </div>
            <div class="hot-price">
              ￥{{v.price}}
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<style scoped>
  .title{
    padding: 0 40px;
    font-size: 18px;
  }
  .hot-list{
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
</style>

<script>
export default {
  data(){
    return {
      detail:{
          "热销商品":[
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            },
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            },
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            },
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            }
          ],
          "新上架商品":[
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            },
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            },
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            },
            {
              img:require('../../../../../assets/img/78_78_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png'),
              title:'HUAWEI P40',
              less:'限时直降300',
              price:1233
            }
          ]
      }
      
    }
  }
}
</script>