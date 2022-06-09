<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <h2>计数*2：{{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{ data }}</h2>
    <button @click="changeData">修改data</button>

    <p class="content"></p>
    <div class="scroll">
      <div class="scroll-x">Scroll-X：{{ scrollX }}</div>
      <div class="scroll-y">Scroll-Y：{{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div class="mouse-x">mouse-X：{{ mouseX }}</div>
      <div class="mouse-y">mouse-Y：{{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from "./hooks";

export default {
  setup() {
    // counter
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // title
    const titleRef = useTitle("hello");
    setTimeout(() => {
      titleRef.value = "word";
    }, 3000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();

    // useLocalStorage
    // 保存值
    // const data = useLocalStorage("info", { name: "user", age: 18 });
    // 获取值
    const data = useLocalStorage("info");

    const changeData = () => (data.value = "哈哈哈");

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      // ...useCounter()

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      data,
      changeData,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 4000px;
}
.scroll {
  position: fixed;
  bottom: 100px;
  right: 80px;
  background: lightcoral;
}
.mouse {
  position: fixed;
  bottom: 30px;
  right: 80px;
  background: lightblue;
}
</style>