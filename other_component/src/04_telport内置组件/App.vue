<template>
  <div class="vue">
    <teleport to="#other">
      <h2>当前计数：</h2>
      <button>+1</button>
    </teleport>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
  mounted() {
    console.log(this.$name);
  },
  setup() {
    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name);
  },
  methods: {
    foo() {
      console.log(this.$name);
    },
  },
};
</script>

<style>
</style>