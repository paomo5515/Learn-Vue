<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- 根据那种类型来决定动画 执行结束时间 duration 动画执行的时间 {enter:800,leave:1000} -->
    <transition name="pm" type="transition" :duration="1000">
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

.pm-enter-from,
.pm-leave-to {
  opacity: 0;
}
.pm-enter-active,
.pm-leave-active {
  transition: opacity 2s ease;
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