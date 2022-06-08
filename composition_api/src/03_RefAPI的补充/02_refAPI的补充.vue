<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改info</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";
export default {
  setup() {
    // const info = ref({ name: "hello" });

    // 浅层响应式，不会触发修改
    const info = shallowRef({ name: "hello" });

    const changeInfo = () => {
      info.value.name = "word";
      // 手动触发相关的 shallowRef 的修改
      triggerRef(info)
    };
    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped>
</style>