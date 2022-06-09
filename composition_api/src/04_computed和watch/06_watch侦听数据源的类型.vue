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
    const info = reactive({ name: "hello", age: 18 });

    // 1.侦听 watch时，传入一个 getter函数
    // watch(
    //   () => info.name,
    //   (newValue, oldValue) => {
    //     console.log("newValue：", newValue, "oldValue：", oldValue);
    //   }
    // );

    // 2.传入一个可响应式对象：reative对象/ref对象
    // 情况一：reactive 对象获取到的 newValue和 oldValue本身都是 reactive对象
    // watch(
    //   info,
    //   (newValue, oldValue) => {
    //     console.log("newValue：", newValue, "oldValue：", oldValue);
    //   }
    // );

    // 如果希望 newValue和oldValue是一个普通的对象
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log("newValue：", newValue, "oldValue：", oldValue);
      }
    );

    // 情况二：ref对象 获取的 newValue和oldValue 是 value 的本身
    // const name = ref("hello");
    // watch(name, (newValue, oldValue) => {
    //   console.log("newValue：", newValue, "oldValue：", oldValue);
    // });

    const changeData = () => {
      // name.value = "word";
      info.name = "word"
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