<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>Home1</li>
      <li>Home2</li>
      <li>Home3</li>
      <li>Home4</li>
    </ul>

    <router-view />

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/product">商品</router-link>
    <router-link to="/home/moment">动态</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>