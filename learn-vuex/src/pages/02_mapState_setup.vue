<template>
  <div>
    <h2>Home：{{ $store.state.counter }}</h2>
    <hr />
    <h2>Home：{{ sCounter }}</h2>
    <hr />
    <h2>Home：{{ counter }}</h2>
    <h2>Home：{{ name }}</h2>
    <h2>Home：{{ age }}</h2>
  </div>
</template>

<script>
import { mapState, useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const sCounter = computed(() => store.state.counter);

    // counter => function => computed(function) =>counter
    const storeStateFns = mapState(["counter", "name", "age"]);

    // {name: function, ...}
    // {name: ref, ...}
    const storeState = {};
    Object.keys(storeStateFns).forEach((fnKey) => {
      const fn = storeStateFns[fnKey].bind({ $store: store });
      // computed 返回 ref
      storeState[fnKey] = computed(fn);
    });

    return {
      sCounter,
      ...storeState,
    };
  },
};
</script>

<style>
</style>