<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: "hello vue",
    };
  },
};
</script>

<style scoped>
</style>