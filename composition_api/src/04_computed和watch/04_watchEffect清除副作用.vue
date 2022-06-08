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

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功~~~");
      }, 2000);


      // 根据 name和 age 两个变量 发送网络请求
      onInvalidate(() => {
        // 在这个函数中 清除额外的副作用（取消网络请求）清理工作
        // request.cancel()
        
        // 如果请求中更改了 name/age 就会清理 网络请求
        clearTimeout(timer)
        console.log("-----onInvalidate");
      });

      console.log("name：", name.value, "age：", age.value);
    });

    const changeName = () => {
      name.value = "jerry";
    };

    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

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