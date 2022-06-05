<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import { computed } from "vue";

console.log(this); // undefined
export default {
  
  components: {
    Home,
  },
  provide() {
    console.log(this); // 组件实例
    return {
      name: "paomo",
      age: 18,
      length: computed(() =>  this.names.length )
    }
  },
  data() {
    return {
      names: ["aaa", "bbb", "ccc"],
    };
  },
  methods: {
    addName() {
      console.log(this.names);
      this.names.push("hello");
    },
  },
};
</script>

<style scoped>
</style>