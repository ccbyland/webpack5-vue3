<template>
  <div :class="$style.app">
    <!-- <router-link :class="$style.link" to="/home">Go to Home</router-link>
    <router-link :class="$style.link" to="/about">Go to About</router-link> -->
    <div :class="$style.link" @click="goto('home')">Go to Home</div>
    <div :class="$style.link" @click="goto('about')">Go to About</div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goto = (target) => {
  router.push(target);
};
</script>
<style lang="scss" module>
.app {
  padding: 30px;
  background: #eee;
  .link {
    text-decoration: underline;
    line-height: 30px;
    cursor: pointer;
    display: block;
  }
}
</style>
