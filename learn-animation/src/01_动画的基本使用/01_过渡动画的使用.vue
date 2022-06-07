<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition name="paomo">
      <h2 v-if="isShow">Hello Word</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.paomo-enter-from,
.paomo-leave-to {
  opacity: 0;
}

.paomo-enter-to,
.paomo-leave-from {
  opacity: 1;
}

.paomo-enter-active,
.paomo-leave-active {
  transition: opacity 1s ease-in;
}
</style>