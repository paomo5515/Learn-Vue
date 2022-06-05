<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="text" v-model.number="num" />
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
export default {
  // 注册事件
  // emits: ["add", "sub", "addN"],
  // 对象写法的目的是 为了进行参数的验证
  emits: {
    add: null,
    sub: null,
    addN: (num) => {
      console.log("num", num);
      if (num > 10) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      console.log("+1");
      this.$emit("add");
    },
    decrement() {
      console.log("-1");
      this.$emit("sub");
    },
    incrementN() {
      this.$emit("addN", this.num);
    },
  },
};
</script>

<style scoped>
</style>