<template>
  <div>
    <div class="app">
      <router-view></router-view>
      <img class="hover" src="./image/1.png" />
      <div class="img"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.app {
  padding: 10px;
  background: #eee;
  .hover {
    width: 60px;
    height: 60px;
  }
  .img {
    display: inline-block;
    width: 60px;
    height: 60px;
    background-image: url("./image/1.png");
    background-size: contain;
  }
}
</style>
