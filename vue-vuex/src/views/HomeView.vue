<script setup>
  import { toRefs } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  // 发起网络请求
  store.dispatch('fetchHomeMutidataAction');
  const { banners } = toRefs(store.state);
</script>

<template>
  <main>
    <h2>Home 页面</h2>
    <ul v-if="banners.at(-1)">
      <template v-for="item in banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
    <h3 v-else>loading...</h3>
  </main>
</template>
