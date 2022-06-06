<template>
  <div>
    <h2>Category组件</h2>
    <button @click="counter++">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style scoped>
</style>