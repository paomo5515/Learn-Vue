<template>
  <div>
    <hr />
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountN(3) }}</h2>
    <hr />
    <!-- <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <hr />
    <h2>{{ sNameInfo }}</h2> -->

    <!-- setup 中使用 -->
    <!-- <h2>{{ sNameInfo }}</h2> -->
    <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { mapGetters, useStore } from "vuex";
import { useGetters } from "../hooks/useGetters";

export default {
  setup() {

    // const sNameInfo = computed(() => store.getters.nameInfo);
    const storeGettersFns = useGetters(["nameInfo", "ageInfo"]);

    return {
      // sNameInfo,
      ...storeGettersFns,
    };
  },
};
</script>
 

<style>
</style>