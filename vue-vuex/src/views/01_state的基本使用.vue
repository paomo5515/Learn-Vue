<script setup>
  import { toRefs } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const { count } = toRefs(store.state);

  function increment() {
    // vuex 不推荐这样做
    // console.log(store.state.count++);
    // 方便跟踪状态
    store.commit('increment');
  }
</script>

<script>
  export default {
    computed: {
      storeCount() {
        return this.$store.state.count;
      },
    },
  };
</script>

<template>
  <main>
    <h2>Home 页面</h2>
    <h3>Home：{{ $store.state.count }}</h3>
    <h3>Computer中的：{{ storeCount }}</h3>
    <h3>Setup中的：{{ count }}</h3>
    <button @click="increment">home +1</button>
  </main>
</template>
