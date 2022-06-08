<template>
  <div>
    <input v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import debounceRef from "./hook/useDebounceRef"

export default {
  setup() {
    const message = debounceRef("Hello Word");
    return {
      message,
    };
  },
};
</script>

<style scoped>
</style>