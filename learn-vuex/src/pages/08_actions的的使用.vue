<template>
  <div>
    <hr />
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <hr />

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getHomeMultidata");
  },
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", { count: 100 });
    },
    decrement() {
      this.$store.dispatch("decrementAction");

      // 派发风格 对象类型
      // this.$store.dispatch({
      //   type:"decrementAction"
      // });
    },
  },

  setup() {},
};
</script>
 

<style>
</style>