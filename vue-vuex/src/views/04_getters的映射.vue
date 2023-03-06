<script setup>
  import { toRefs, computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const { name, age } = toRefs(store.state);
  const message = computed(() => store.getters.message);
  function changeName() {
    store.state.name = 'jjjjjj';
  }
</script>

<template>
  <main>
    <h2>Home 页面</h2>
    <h3>Home：{{ $store.state.name }}</h3>
    <h2 color="pink">映射 state</h2>
    <h3>Home：{{ name }}</h3>
    <h3>Home：{{ age }}</h3>
    <!-- gerters的使用 -->
    <h3>Gerters：{{ $store.getters.formatName }}</h3>
    <h3>使用其他的getters：{{ $store.getters.message }}</h3>
    <h3>使用其他的getters传入参数：{{ $store.getters.getName(2) }}</h3>
    <h3>Getters的映射：{{ message }}</h3>
    <button @click="changeName">改变message</button>
  </main>
</template>
