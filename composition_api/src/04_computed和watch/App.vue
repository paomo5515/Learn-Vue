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
    const info = reactive({
      name: "hello",
      age: 18,
      friend: {
        name: "kkk",
      },
    });

    // 默认是深度侦听的
    // watch(info, (newInfo, oldInfo) => {
    //   console.log(newInfo, oldInfo);
    // });

    // 开启深度侦听
    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      },{
        deep: true,
        // 是否立即执行
        immediate: true
      }
    );

    const changeData = () => {
      // name.value = "word";
      info.friend.name = "jjj";
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