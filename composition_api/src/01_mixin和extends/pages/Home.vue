<template>
  <div>
    Home 
  </div>
  <h2>{{title}}</h2>
  <button @click="bar">按钮</button>
</template>

<script>
import BasePage from "./BasePage.vue"
  export default {
    extends: BasePage,
    data(){
      return {
        content: "Hello Home"
      }
    }
  }
</script>

<style scoped>

</style>