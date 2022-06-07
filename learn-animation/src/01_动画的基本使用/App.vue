<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition name="pm">
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
.test {
  width: 200px;
  margin: 10px auto;
}
h2 {
  background-color: lightcoral;
  width: 180px;
}
.pm-enter-active {
  animation: bounce 1s ease;
}
.pm-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>