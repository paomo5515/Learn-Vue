<template>
  <div>
    <!-- <h2 :class="$attrs.class">{{ title }}</h2> -->
    <h2 v-bind="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  // props: ["title", "content"],
  inheritAttrs: false,
  props: {
    title: String,
    content: {
      // type类型可以写 String Number Boolean Array Object Date Function Symbol等等
      type: String,
      require: true,
      default: "123",
    },
    info: {
      type: Object,
      // 对象或数组默认值 必须是一个工厂函数获取
      default() {
        return { name: "hello" };
      },
    },
  },
};
</script>

<style scoped>
</style>