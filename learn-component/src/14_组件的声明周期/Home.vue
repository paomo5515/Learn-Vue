<template>
  <div>
    <h2>我是Home组件</h2>
    <h3 ref="title">{{ message }}</h3>
    <button @click="changeMessage">修改message</button>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    console.log("beforeCreate：组件创建之前");
  },
  created() {
    console.log("created：组件创建");
  },
  beforeMount() {
    console.log("beforeMount：组件挂载之前");
  },
  mounted() {
    console.log("mounted：组件挂载完成");
  },
  beforeUpdate() {
    console.log(this.$refs.title.innerHTML);
    console.log("beforeUpdate：组件更新之前");
  },
  updated() {
    console.log(this.$refs.title.innerHTML);
    console.log("updated：组件更新完");
  },
  beforeUnmount() {
    console.log("beforeUnmount：组件卸载之前");
  },
  unmounted() {
    console.log("unmounted：组件卸载");
  },
  data() {
    return {
      message: "Hello Word",
    };
  },
  
  methods: {
    changeMessage() {
      this.message = "tom jerry";
    },
  },
};
</script>

<style scoped>
</style>