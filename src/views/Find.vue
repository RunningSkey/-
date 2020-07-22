<template>
  <div class="find">
    <finds></finds>
  </div>
</template>

<style scoped>
  .find{
    background: #fff;
    padding-bottom: 50px;
  }
</style>

<script>

import Finds from '../components/find/Finds'

export default {
  name: "Find",
  components: {
    Finds
  },
};
</script>