<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/paomo/id/1111">用户</router-link>

    <hr />
    <div>
      <button @click="jumpToAbout">关于button</button>
      <span>关于span</span>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {},
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
</style>