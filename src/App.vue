<template>
  <div class="$style.app">
    <button @click="increment">
      {{ aaaa.count }}
    </button>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  setup() {
    const aaaa = reactive({ count: 0 });
    const increment = () => {
      aaaa.count++;
    };
    return { aaaa, increment };
  },
};
</script>
<style lang="scss">
.app {
  background: green;
  padding: 10px;
  button {
    color: red;
  }
}
</style>
