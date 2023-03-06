<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>App组件</h1>
      <!-- template 中获取 状态 -->
      <h3>APP 当前计数：{{ $store.state.count }}</h3>
      <hr color="red" />
      <section>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </section>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
  nav a.router-link-exact-active {
    color: red;
  }
  a {
    margin-left: 20px;
  }
</style>
