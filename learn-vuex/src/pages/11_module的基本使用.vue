<template>
  <div>
    <hr />
    <h2>root-当前计数：{{ $store.state.rootCounter }}</h2>
    <h2>home-当前计数：{{ $store.state.home.homeCounter }}</h2>
    <h2>user-当前计数：{{ $store.state.user.userCounter }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  setup() {
  },
};
</script>
 

<style>
</style>