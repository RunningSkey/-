<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<style scoped>
  
</style>

<script>

import Search from './components/Search'
import TabBar from './components/TabBar'
import Tab from './components/Tab'


export default {
  components:{
    TabBar,
    Search,
    Tab
  }  
}
</script>


