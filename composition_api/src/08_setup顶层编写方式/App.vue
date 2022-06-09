<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>

    <HelloWord message="更多嘎嘎嘎" @increment="getCounter" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWord from "./HelloWord.vue";

const counter = ref(0);
const increment = () => counter.value++;

const getCounter = (payLoad) => {
  console.log(payLoad);
};
</script>

<style scoped>
</style>