<template>
  <div>
    <h2>About组件</h2>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name:"About",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++
    },
  },
};
</script>

<style scoped>
</style>