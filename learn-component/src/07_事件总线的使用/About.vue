<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
import emitter from "./utils/eventBus";
export default {
  methods: {
    btnClick() {
      console.log("About按钮发生了点击");
      emitter.emit("paomo", { name: "jerry", age: 15 });
    },
  },
};
</script>

<style scoped>
</style>