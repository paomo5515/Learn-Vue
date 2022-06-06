<template>
  <div>
    <template v-for="item in names" :key="item">
      <slot :item="item"></slot>
      <!-- <slot name="paomo" :item="item"></slot> -->

    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>