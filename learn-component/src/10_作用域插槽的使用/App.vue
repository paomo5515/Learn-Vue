<template>
  <div>
    <!-- 编译作用域 -->
    <!-- <child-cpn>
      <button>哈哈哈</button>
    </child-cpn> -->

  <show-names :names="names">
    <template v-slot="slotProps">
      <button>{{slotProps.item}}</button>
    </template>

    <template v-slot:paomo="slotProps">
      <button>{{slotProps.item}}</button>
    </template>
  </show-names>
  </div>

   <!-- 默认插槽简写  独占默认插槽 -->
    <show-names :names="names" v-slot="slotProps">
      <button>{{slotProps.item}}</button>
  </show-names>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue"

export default {
  components: {
    ChildCpn,
    ShowNames
  },
  data() {
    return {
      names: ["aaa", "bbb", "ccc", "ddd"],
    };
  },
};
</script>

<style scoped>
</style>