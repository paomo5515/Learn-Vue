<template>
  <div>
    <nav-bar :name="name">
      <template #left>
        <button>左边的按钮</button>
      </template>
      <template #center>
        <h4>我是标题</h4>
      </template>
      <template #right>
        <i>我是右边的 i 元素</i>
      </template>
      <template v-slot:[name]>
        <i>paomo</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      name: "paomo",
    };
  },
};
</script>

<style scoped>
</style>