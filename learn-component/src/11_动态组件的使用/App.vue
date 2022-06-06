<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>

    <!-- 2.动态组件 -->
    <!-- include 后面可以写 字符串 正则表达式 数组 -->
    <keep-alive include="About">
      <component 
        :is="currentTab" 
        name="paomo" 
        :age="18" 
        @homeClick="homeClick"
      >
      </component>
    </keep-alive>

    <!-- 1.v-if 判断来实现 -->
    <!-- <template v-if="currentTab === 'Home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'About'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Category from "./pages/Category.vue";

export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ["Home", "About", "Category"],
      currentTab: "Home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    homeClick() {
      console.log("homeClick内部发生了点击");
    },
  },
};
</script>

<style scoped>
.active {
  color: lightcoral;
}
</style>