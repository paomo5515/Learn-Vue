<script setup>
  import useCounter from '@/stores/counter';
  import { storeToRefs } from 'pinia';

  const counterStore = useCounter();
</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>count:{{ counterStore.count }}</h2>
    <h2>getters:{{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne:{{ counterStore.doubleCountAddOne }}</h2>
    <h2>showMessage:{{ counterStore.showMsg }}</h2>
    <h2>friend12:{{ counterStore.getFriendByID(12) }}</h2>
  </div>
</template>

<style scoped></style>
