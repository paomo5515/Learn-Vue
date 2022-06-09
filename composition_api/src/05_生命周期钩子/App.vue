<template>
  <div>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref } from "vue";

export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      return counter.value++;
    };

    onMounted(() => {
      console.log("App Mounted");
    });
    onUpdated(() => {
      console.log("App onUpdated");
    });
    onUnmounted(() => {
      console.log("App onUnmounted");
    });
    return {
      counter,
      increment
    };
  },
};
</script>

<style scoped>
</style>