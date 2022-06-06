<template>
  <div @click="homeClick">
    <h2>Home组件：{{ name }}-{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name:"Home",
  emits: ["homeClick"],
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    homeClick() {
      console.log('hjhj');
      this.$emit("homeClick")
    },
  },
};
</script>

<style scoped>
</style>