<template>
  <h2>我是vue渲染出来的</h2>
  <h2>{{ title }}</h2>
  <hello-word></hello-word>
</template>

<script>
import HelloWord from './HelloWord.vue';

export default {
  components: {
    HelloWord
  },
  data() {
    return {
      title: "Hello Word",
    };
  },
};
</script>

<style scoped>
h2 {
  color: lightcoral;
}
</style>