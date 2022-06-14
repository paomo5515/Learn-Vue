<template>
  <div>
    <hr />
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountN(3) }}</h2>
    <hr />
  </div>
</template>

<script>
import { useState } from "../hooks/useState";

export default {
  computed: {},
};
</script>
// 24-0.50.06

<style>
</style>