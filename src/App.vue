<template>
  <div :class="$style.app">
    <router-view></router-view>
    <el-button type="success">Success</el-button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" module>
.app {
  padding: 5px;
  background: #000;
}
</style>
