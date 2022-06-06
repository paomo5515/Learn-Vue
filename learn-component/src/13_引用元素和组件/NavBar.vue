<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "我是 NavBar 组件中的 message",
    };
  },
  methods: {
    sayHello() {
      console.log("sayHello");
    },
    getParentAndRoot(){
      // 获取父组件
      console.log(this.$parent);
      // 获取根组件
      console.log(this.$root);
    }
  },
};
</script>

<style scoped>
</style>