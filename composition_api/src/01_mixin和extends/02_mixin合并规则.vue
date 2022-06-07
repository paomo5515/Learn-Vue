<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";
export default {
  mixins: [demoMixin],
  data() {
    return {
      title: "hello vue",
      message: "hello vue",
    };
  },
  methods: {
    foo(){
      console.log("app foo");
    }
  },
  created() {
    console.log("App created");
  }
};
</script>

<style scoped>
</style>