<template>
  <Home />
  <h2>App：{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import Home from "./pages/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
</style>
