<script setup>
  import { toRefs } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const { name, age } = toRefs(store.state);
  function changeName() {
    store.commit('changeName');
  }

  function changeAge(age) {
    store.commit('changeAge', age);
  }
  // 发起action
  function handleAction() {
    store.dispatch('incrementAction');
  }
</script>

<template>
  <main>
    <h2>Home 页面</h2>
    <h3>Home：{{ name }}</h3>
    <h3>Home：{{ age }}</h3>
    <button @click="changeName">修改 name</button>
    <button @click="changeAge(10)">修改 age</button>
    <button @click="handleAction">异步加</button>
  </main>
</template>
