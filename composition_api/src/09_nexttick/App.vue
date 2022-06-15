<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <hr />
    <h2 class="h2" ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref, onUpdated, nextTick } from "vue";

export default {
  setup() {
    const message = ref("");
    const titleRef = ref(null);
    const counter = ref(0);

    const addMessageContent = () => {
      message.value += "呵呵呵呵呵";

      // 更新 DOM
      nextTick(() => {
        console.log(titleRef.value.offsetHeight);
      });
    };

    const increment = () => {
      counter.value++;
    };

    // onUpdated(() => {
    //   console.log(titleRef.value.offsetHeight);
    // });

    return {
      message,
      titleRef,
      counter,
      increment,
      addMessageContent,
    };
  },
};
</script>

<style>
.h2 {
  width: 150px;
}
</style>