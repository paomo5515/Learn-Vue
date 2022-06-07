<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
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
  methods:{
    beforeEnter(){
      console.log("beforeEnter");
    },
    enter(){
      console.log("enter");
    },
    afterEnter(){
      console.log("afterEnter");
    },
    beforeLeave(){
      console.log("beforeLeave");
    },
    leave(){
      console.log("leave");
    },
    afterLeave(){
      console.log("afterLeave");
    },
  }
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