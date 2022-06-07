<template>
  <div>
    <!-- 1.模拟绑定和事件处理 -->
    <!-- <button @click="btnClick">my按钮</button>
    <h2>MyInputMessage：{{ modelValue }}</h2> -->

    <!-- 2.通过input -->
    <!-- <input type="text" :value="modelValue" @input="btnClick"> -->

    <!-- 3.绑定到 props 中是不对的  错误写法-->
    <!-- <input v-model="modelValue" /> -->

    <!-- 4.使用 computed get 和 set -->
    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String | Number,
  },
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  emits: ["update:modelValue"],
  methods: {
    btnClick() {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>