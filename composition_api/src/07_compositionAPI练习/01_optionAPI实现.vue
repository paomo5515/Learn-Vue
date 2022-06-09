<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <h2>计数*2：{{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    doubleCounter() {
      return this.counter * 2;
    },
  },
  methods: {
    increment(){
      this.counter++
    },

    decrement(){
      this.counter--
    }
  }
};
</script>

<style scoped>
</style>