<template>
  <div class="nav-bar">
    <slot name="default"></slot>

    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="cenetr">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  // data() {
  //   return {
  //     name: "paomo",
  //   };
  // },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 80px;
}
.left,
.right,
.addition {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 120px;
  background-color: rgb(184, 20, 175);
}
.cenetr {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  flex: 1;
  background-color: lightcoral;
}
</style>