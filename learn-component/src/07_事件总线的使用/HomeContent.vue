<template>
  <div></div>
</template>

<script>
import emitter from "./utils/eventBus";

export default {
  // 组件创建完成 后回调
  created() {
    emitter.on("paomo", (info) => {
      console.log(info);
    });

    // 监听多个事件
    emitter.on("hahha", (info) => {
      console.log(info);
    });

    // 监听所有事件
    emitter.on("*", (type, info) => {
      console.log("listener", type, "info", info);
    });

    // 取消 emitter 中的所有事件
    // emitter.all.clear();
    // emitter.off("事件名", "事件的函数名");
  },
};
</script>

<style scoped>
</style>