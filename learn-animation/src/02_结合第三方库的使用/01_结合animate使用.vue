<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- appear 默认是 false -->
    <transition 
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__lightSpeedOutLeft"
      >
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

/* .pm-enter-active {
  animation: backOutUp 1s ease-in reverse;
}
.pm-leave-active{
  animation: backOutUp 1s ease-in ;
} */
</style>