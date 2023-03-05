<template>
  <div>
    <div class="app">
      <router-view></router-view>
      <img class="img-1" src="./image/1.png" />
      <div class="img-2"></div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.app {
  padding: 10px;
  background: #eee;
  .img-1 {
    width: 60px;
    height: 60px;
  }
  .img-2 {
    display: inline-block;
    width: 60px;
    height: 60px;
    background-image: url("./image/1.png");
    background-size: contain;
  }
}
</style>
