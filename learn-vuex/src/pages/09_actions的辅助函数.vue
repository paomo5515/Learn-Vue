<template>
  <div>
    <hr />
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <hr />

    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // methods: {
  // ...mapActions(["incrementAction","decrementAction"])

  // 对象写法
  // ...mapActions({
  //   add: "incrementAction",
  //   sub: "decrementAction",
  // }),
  // },
  setup() {
    const actions = mapActions(["incrementAction", "decrementAction"]);
    const actions2 = mapActions({
      add: "incrementAction",
      sub: "decrementAction",
    });

    return {
      ...actions,
      ...actions2,
    };
  },
};
</script>
 

<style>
</style>