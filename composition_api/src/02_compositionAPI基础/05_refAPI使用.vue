<template>
  <div>
    Home Page

    <!-- 当我们在 template 模板中使用 ref对象，它会自动进行解包 -->
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // counter 变成一个 ref 的可响应式的 引用，counter 就变成了一个对象
    let counter = ref(100);

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
</style>