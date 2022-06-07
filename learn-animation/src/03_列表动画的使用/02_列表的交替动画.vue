<template>
  <div>
    <input v-model="keyWord" />
    <transition-group
      tag="ul"
      name="pm"
      :css="false"
      @enter="enter"
      @leave="leave"
      @before-enter="beforeEnter"
    >
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      names: ["abc", "cba", "hell", "ddwd", "egd", "fxyz", "dac", "fssc", "ko"],
      keyWord: "",
    };
  },
  computed: {
    showNames() {
      return this.names.filter((item) => item.includes(this.keyWord));
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        delay: el.dataset.index * 0.5,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: "0",
        delay: el.dataset.index * 0.5,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.pm-enter-from,
.pm-leave-to {
  opacity: 0;
}

.pm-enter-active,
.pm-leave-active {
  transition: opacity 1s ease;
}
</style>