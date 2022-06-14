<template>
  <div>
    <h2>Home：{{ $store.state.counter }}</h2>
    <h2>Home：{{ sCounter }}</h2>
    <h2>Home：{{ counter }}</h2>
    <h2>Home：{{ name }}</h2>
    <h2>Home：{{ age }}</h2>
    <h2>Home：{{ Mcounter }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    sCounter() {
      return this.$store.state.counter;
    },

    // 自己的计算属性
    fullName() {
      return "kkkk";
    },

    // 其它的计算属性：从store获取
    // ...mapState(["counter", "name", "age"]),
    ...mapState({
      Mcounter: (state) => state.counter,
    }),
  },
};
</script>

<style>
</style>