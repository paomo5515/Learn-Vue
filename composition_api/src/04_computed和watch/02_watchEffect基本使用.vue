<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    // watchEffect：自动收集响应式的依赖，默认会执行一次
    const name = ref("tom");
    const age = ref(18);

    const changeName = () => {
      name.value = "jerry";
    };
    const changeAge = () => age.value++;

    watchEffect(() => {
      console.log("name：", name.value,"age：",age.value);
    });

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>