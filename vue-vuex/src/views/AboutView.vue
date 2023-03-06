<script setup></script>
<template>
  <div class="about">
    <h2>Abou 页面</h2>
    <h3>{{ $store.state.about.about }}</h3>

    <!-- 使用 getters时，是直接 $store.getters.xxx -->
    <!-- dispatch事件时，也是直接派发不需要 加上moduleName -->
    <!-- 提交mutation时，也是直接派发不需要 加上 moduleName -->
  </div>
</template>

<style></style>
