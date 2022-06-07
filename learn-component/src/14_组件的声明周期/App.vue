<template>
  <div>
    <h2>我是 App 组件</h2>
    <template v-if="isShow">
      <home></home>
    </template>
    <button @click="isShow = !isShow">切换</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
</style>