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
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      const promise = store.dispatch("getHomeMultidata");
        promise.then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>
 

<style>
</style>