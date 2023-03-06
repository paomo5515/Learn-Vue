<script setup>
  import useUser from '@/stores/user';

  import { storeToRefs } from 'pinia';

  const userStore = useUser();
  const { name, age } = storeToRefs(userStore);

  function changeUser() {
    // userStore.name = 'kkkk';
    // userStore.age = 88;

    // 一次性修改多个状态
    userStore.$patch({
      name: 'yyy',
      age: 55,
    });

    // 替换 state 为新的对象
    // userStore.$state = {
    //   name: '555',
    // };
  }
  function resetState() {
    userStore.$reset();
  }
</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>name:{{ userStore.name }}</h2>
    <h2>age：{{ userStore.age }}</h2>
    <h2>解构：{{ name }}</h2>
    <h2>解构：{{ age }}</h2>
    <button @click="changeUser">修改user</button>
    <button @click="resetState">重置</button>
  </div>
</template>

<style scoped></style>
