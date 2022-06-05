<template>
  <div>
    <my-solt-cpn>
      <button>我是按钮</button>
    </my-solt-cpn>

    <my-solt-cpn>
      <my-button/>
    </my-solt-cpn>
    
    <my-solt-cpn></my-solt-cpn>

    <!-- 插入了很多元素 -->
    <my-solt-cpn>
      <h2>哈哈哈</h2>
      <span>Span</span>
    </my-solt-cpn>

  </div>
</template>

<script>
import MySoltCpn from "./MySlotCpn.vue";
import MyButton from "./MyButton.vue"
export default {
  components: {
    MySoltCpn,
    MyButton
  },
};
</script>

<style scoped>
</style>