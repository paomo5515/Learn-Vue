<template>
  <div>
    <h2>About组件</h2>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name:"About",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++
    },
  },
  /* created(){
    console.log("about created：组件创建");
  },
  unmounted(){
    console.log("abput unmounted：组件卸载");
  } */

  // 针对缓存组件
  activated(){
    console.log("about activated");
  },
  deactivated(){
    console.log("about deactivated");
  }
};
</script>

<style scoped>
</style>