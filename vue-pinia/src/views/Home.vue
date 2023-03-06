<script setup>
  import useCounter from '@/stores/counter';
  import useHome from '@/stores/home';
  import { storeToRefs } from 'pinia';

  const counterStore = useCounter();
  function changeState() {
    // counterStore.increment();
    counterStore.incrementNum(10);
  }

  const homeStore = useHome();
  homeStore.fetchHomeMultidata();
</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>count:{{ counterStore.count }}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<style scoped></style>
