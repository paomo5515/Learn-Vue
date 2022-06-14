<template>
  <div>
    <hr />
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountN(3) }}</h2>
    <hr />
    <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <hr />
    <h2>{{ sNameInfo }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // nameInfo() {
    //   return this.$store.getters.nameInfo;
    // },

    // 数组类型
    ...mapGetters(["nameInfo", "ageInfo"]),

    // 对象类型
    ...mapGetters({
      sNameInfo: "nameInfo",
    }),
  },
  setup(){
    
  }
};
</script>


<style>
</style>