<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <h2>计数*2：{{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import useCounter from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
export default {
  setup() {
    // counter
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // title
    const titleRef = useTitle("hello");
    setTimeout(() => {
      titleRef.value = "word";
    }, 3000);

    return {
      counter,
      doubleCounter,
      increment,
      decrement,

      // ...useCounter()
    };
  },
};
</script>

<style scoped>
</style>