<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>counter*2：{{ counter }}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(){

    },
    decrement(){
      
    }
  }
};
</script>

<style scoped>
</style>