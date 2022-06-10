<template>
  <div>
    <button 
      v-if="counter < 2" 
      v-paomo.aa.bb="'hello'" 
      @click="increment"
    >
      当前计数：{{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  directives: {
    // 局部指令
    paomo: {
      created(el, bindings, vnode, preVnode) {
        console.log("paomo created", el, bindings, vnode, preVnode);
        console.log(bindings.value);
      },
      beforeMount() {
        console.log("paomo beforeMount");
      },
      mounted() {
        console.log("paomo mounted");
      },
      beforeUpdate() {
        console.log("paomo beforeUpdate");
      },
      updated() {
        console.log("paomo updated");
      },
      beforeUnmount() {
        console.log("paomo beforeUnmount");
      },
      unmounted() {
        console.log("paomo unmounted");
      },
    },
  },
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    return {
      counter,
      increment,
    };
  },
};
</script>

<style>
</style>