<template>
  <div>
    <hr />
    <h2>root-当前计数：{{ $store.state.rootCounter }}</h2>
    <h2>home-当前计数：{{ $store.state.home.homeCounter }}</h2>
    <h2>user-当前计数：{{ $store.state.user.userCounter }}</h2>
    <hr />
    <!-- 没开启命名空间 -->
    <!-- <h2>double-当前计数：{{ $store.getters.doubleHomeCounter }}</h2> -->

    <!-- 开启命名空间 -->
    <h2>double-当前计数：{{ $store.getters["home/doubleHomeCounter"] }}</h2>

    <button @click="homeIncrement">+1</button>
    <button @click="homeIncrementAction">+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    homeIncrement() {
      this.$store.commit("home/increment");
    },
    homeIncrementAction() {
      this.$store.dispatch("home/incrementAction");
    },
  },
};
</script>
 

<style>
</style>