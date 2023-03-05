<template>
  <div class="app">
    <div class="link" @click="goto('home')">Go to Home</div>
    <div class="link" @click="goto('about')">Go to About</div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goto = (target) => {
  router.push(target);
};
</script>
<style scoped lang="scss">
.app {
  background: lightcoral;
  .link {
    text-decoration: underline;
    line-height: 30px;
    cursor: pointer;
    display: block;
  }
}
</style>
