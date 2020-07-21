<template>
  <div class="home">
    <search></search>
    <tab></tab>
  </div>
</template>

<style scoped>
  .home{
    padding-top: 54px;
  }
</style>

<script>

import Tab from '../components/Tab'
import Search from '../components/Search'

export default {
  name: "Home",
  components: {
    Tab,
    Search
  },
  data() {
    return {
    };
  },
  

};
</script>
