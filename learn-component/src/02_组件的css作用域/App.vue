<template>
  <div>
    <h2>App</h2>
    <hello-word></hello-word>
  </div>
</template>

<script>
import HelloWord from "./HelloWord.vue"
  export default {
    components: {
      HelloWord
    }
  }
</script>

<style scoped>
  h2 {
    color: lightcoral;
  }
</style>