<template>
  <div>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const loginClick = () => {
      window.localStorage.setItem("token", "paomo");

      router.push({
        path: "/home",
      });
    };
    return {
      loginClick,
    };
  },
};
</script>

<style>
</style>