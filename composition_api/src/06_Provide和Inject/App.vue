<template>
  <div>
    <home />
    <h2>App：{{ counter }}</h2>
    <button @click="increment">App+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  setup() {
    const name = ref("hello word");
    let counter = ref(100);

    const increment = () => {
      return counter.value++;
    };

    provide("name", readonly(name));
    provide("counter", readonly(counter));
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
</style>