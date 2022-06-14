<template>
  <div>
    <hr />
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <hr />

    <!-- 通过提交 mution  -->
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <button @click="increment_n({ age: 10 })">+10</button>
    <button @click="add({ age: 10 })">+1</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { INCREMENT_N } from "../store/mutation-types";
export default {
  methods: {
    // ...mapMutations(["increment", "decrement", INCREMENT_N]),
    // ...mapMutations({
    //   add: "increment",
    // }),
  },

  setup() {
    const storeMutations = mapMutations([
      "increment",
      "decrement",
      INCREMENT_N,
    ]);
    return {
      ...storeMutations
    }
  },
};
</script>
 

<style>
</style>