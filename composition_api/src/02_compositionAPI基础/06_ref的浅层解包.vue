<template>
  <div>
    Home Page

    <!-- 当我们在 template 模板中使用 ref对象，它会自动进行解包 -->
    <h2>当前计数：{{ counter }}</h2>

    <!-- ref的解包只能是一个浅层解包 -->
    <h2>当前计数：{{ info.counter }}</h2>

    <!-- 如果外层包裹的是一个 reactive 可响应式对象，那么内部的 ref 可以解包 -->
    <h2>当前计数：{{ reactiveInfo.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    // counter 变成一个 ref 的可响应式的 引用，counter 就变成了一个对象
    let counter = ref(100);

    const info = {
      counter,
    };

    const reactiveInfo = reactive({
      counter
    })

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };
    return {
      counter,
      info,
      reactiveInfo,
      increment,
    };
  },
};
</script>

<style scoped>
</style>