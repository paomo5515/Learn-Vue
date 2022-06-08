<template>
  <div>
    <h2>{{ name }}--{{ age }}</h2>
    <button @click="changeAge">age+1</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup() {
    const info = reactive({ name: "hello", age: 18 });
    // const { name, age } = info; // 相当于下边的写法
    // let name = "hello"
    // let age = 18

    // 1.toRefs 将 reactive 对象中所有的属性都转成 ref，建立连接
    // let { name, age } = toRefs(info);

    // 2.toRef 对其中一个属性进行转换 ref，建立连接
    let { name } = info;
    let age = toRef(info, "age");

    const changeAge = () => {
      // 两种写法都可以
      // age.value++;
      info.age++;
    };
    return {
      name,
      age,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>