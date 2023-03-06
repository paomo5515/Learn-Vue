<script setup>
  import useCounter from '@/stores/counter';
  import { toRefs } from 'vue';
  import { storeToRefs } from 'pinia';

  const counterStore = useCounter();
  // 第一种方式
  // const { count } = toRefs(counterStore);
  const { count } = storeToRefs(counterStore);
  function incrementCount() {
    counterStore.count++;
  }
</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>count:{{ counterStore.count }}</h2>
    <h2>解构：{{ count }}</h2>
    <button @click="incrementCount">count++</button>
  </div>
</template>

<style scoped></style>
