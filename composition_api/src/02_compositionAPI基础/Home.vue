<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { ref, readonly, reactive } from "vue";

export default {
  setup() {
    // 1.普通对象
    const info1 = { name: "hello" };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式的对象 reactive
    const info2 = reactive({
      name: "hello",
    });
    const readonlyInfo2 = readonly(info2);

    // 3.响应式对象 ref
    const info3 = ref("Hello");
    const readonlyInfo3 = readonly(info3);

    const updateState = () => {
      readonlyInfo1.name = "word";
      readonlyInfo2.name = "word";
      readonlyInfo3.name = "word";
      info2.name = "word";
    };
    return {
      updateState,
    };
  },
};
</script>

<style scoped>
</style>