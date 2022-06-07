<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- css= false 关闭 css -->
    <transition 
      @enter="enter" 
      @leave="leave"
      :css="false">
      <h2 v-if="isShow">Hello Word</h2>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      isShow: true,
      distance: 200,
    };
  },
  methods: {
    enter(el, done) {
      console.log("enter");
      gsap.from(el, {
        scale: 0,
        x: this.distance,
        // 执行完回调 done
        onComplete: done,
      });
    },
    leave(el, done) {
      console.log("leave");
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done,
      });
    },
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
</style>