<template>
  <div>
    <h2>Hello Word</h2>
    <h2>{{ message }}</h2>
    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "哈啊哈",
  },
});

const emit = defineEmits(["increment", "decrement"]);

const emitEvent = () => {
  emit("increment", "10000");
};
</script>

<style lang="scss" scoped>
</style>