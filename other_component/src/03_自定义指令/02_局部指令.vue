<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
export default {
  directives: {
    // 局部指令
    focus: {
      // 写生命周期
      mounted(el, bindings, vnode, preVnode) {
        // console.log("focus monted");
        el.focus();
      },
    },
  },
};
</script>

<style>
</style>