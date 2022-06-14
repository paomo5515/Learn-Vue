<template>
  <div>
    <hr />
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <hr />

    <!-- 通过提交 mution  -->
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>

    <button @click="addTen">+10</button>
  </div>
</template>

<script>
import { INCREMENT_N } from "../store/mutation-types";
export default {
  methods: {
    addTen() {
      // this.$store.commit("incrementN", 10);
      // this.$store.commit("incrementN", { naem: "paomo", age: 10 });
      // 另外一种提交风格
      this.$store.commit({
        type: INCREMENT_N,
        naem: "paomo",
        age: 10,
      });
    },
  },
};
</script>
 

<style>
</style>