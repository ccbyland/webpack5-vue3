<template>
  <div :class="$style.app">
    <div>home</div>
    <img :class="$style.hover" src="./image/1.png" />
    <div :class="$style.img"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" module>
.app {
  background: red;
  .hover{
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
