<template>
  <div>
    <!-- <input type="text" v-model="message" />
    <input :value="message" @input="message = $event.target.value" /> -->

    <!-- 在组件上使用 v-model  等于下边的写法-->
    <!-- <pm-input v-model="message"></pm-input> -->
    <!-- <pm-input :modelValue="message" @update:model-value="message = $event"></pm-input> -->

    <!-- 绑定两个 v-model  -->
    <pm-input v-model="message" v-model:title="title"></pm-input>

    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import PmInput from "./PmInput.vue";
export default {
  components: {
    PmInput,
  },
  data() {
    return {
      message: "hello word",
      title: "哈哈哈哈",
    };
  },
};
</script>

<style scoped>
</style>