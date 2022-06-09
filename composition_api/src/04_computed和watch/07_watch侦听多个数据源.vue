<template>
  <div>
    <h2>{{ info.name }}--{{ info.age }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>


// 0.40.05
<script>
import { watch, watchEffect, reactive, ref } from "vue";

export default {
  setup() {
    // 1.定义可响应式的对象
    const info = reactive({ name: "hello", age: 18 });
    const name = ref("hello");

    watch([info, name], ([newInfo, newName], [oldInfo, olaName]) => {
      console.log(newInfo, newName, oldInfo, olaName);
    });

    const changeData = () => {
      // name.value = "word";
      info.name = "word";
    };
    return {
      info,
      changeData,
    };
  },
};
</script>

<style scoped>
</style>