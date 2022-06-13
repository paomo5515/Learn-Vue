<template>
  <div id="app">
    <!-- props: href 跳转的连接 -->
    <!-- props: route 对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 当前是否处于活跃状态 -->
    <!-- props: isExactActive 当前是否处于精确的活跃状态 -->
    <router-link to="/home" v-slot="props" custom>
      <!-- <button>首页</button> -->
      <button>{{ props.href }}</button>
      <button @click="props.navigate">哈哈哈</button>
      <!-- <p>{{props.route}}</p> -->
      <span :class="{ active: props.isActive }">{{ props.isActive }}</span>
      <span :class="{ active: props.isExactActive }">
        {{ props.isExactActive }}
      </span>

      <!-- <NavBar title="首页"></NavBar> -->
      <!-- <NavBar></NavBar> -->
    </router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/paomo/id/1111">用户</router-link>
    <router-link to="/category">分类</router-link>
    

    <hr />
    <div>
      <button @click="jumpToAbout">关于button</button>
      <span>关于span</span>
    </div>

    <!-- 添加跳转动画 -->
    <router-view v-slot="props">
      <transition name="pm">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  methods: {
    /* jumpToAbout() {
      // router
      this.$router.push("/about");
    }, */
  },
  setup() {
    const router = useRouter();
    const jumpToAbout = () => {
      // router.push("/about");

      router.push({
        path: "/about",
        query: {
          name: "hello",
          age: 18,
        },
      });

      // router.replace("/about")

      // 其它按钮也可使用
      // router.go(1)
    };

    return {
      jumpToAbout,
    };
  },
};
</script>

<style>
a {
  margin-left: 10px;
}
.router-link-active {
  color: lightsalmon;
}
.pm-enter-from,
.pm-leave-to {
  opacity: 0;
}

.pm-enter-active,
.pm-leave-active {
  transition: opacity 1s ease;
}
</style>