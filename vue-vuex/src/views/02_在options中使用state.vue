<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      storeCount() {
        return this.$store.state.count;
      },
      // 映射 state
      ...mapState(['name', 'age']),
      ...mapState({
        sName: (state) => state.name,
      }),
    },
  };
</script>

<template>
  <main>
    <h2>Home 页面</h2>
    <h3>Home：{{ $store.state.name }}</h3>
    <h2>映射 state</h2>
    <h3>Home：{{ name }}</h3>
    <h3>Home：{{ age }}</h3>
    <!-- 防止名字和 组件中的 state重名 -->
    <h3>对象写法{{ sName }}</h3>
    <button @click="increment">home +1</button>
  </main>
</template>
