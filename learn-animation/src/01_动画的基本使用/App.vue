<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- appear 默认是 false -->
    <transition name="pm" mode="out-in" appear>
      <component :is="isShow ? 'Home' : 'About'"></component>
    </transition>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
export default {
  components: {
    Home,
    About,
  },
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