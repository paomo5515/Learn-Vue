<template>
  <div>
    App组件
    <home></home>

    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <!-- 应急组件 -->
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import Home from "./Home.vue";
import Loading from "./Loading.vue";
// import AsyncCategory from "./AsyncCtaegory.vue"
// 对 AsyncCategory 进行分包
// const AsyncCategory = defineAsyncComponent(()=> import("./AsyncCtaegory.vue"))
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./AsyncCtaegory.vue"),
  // 占位组件
  loadingComponent: Loading,
  // 加载失败的组件
  // errorComponent:
  // 延迟 在我们显示 LoadingComponent 组件之前，等待多长时间
  delay: 2000,
});

export default {
  components: {
    Home,
    AsyncCategory,
  },
};
</script>

<style scoped>
</style>