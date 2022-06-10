<script>
import { h } from "vue";
export default {
  render() {
    return h("div", null, [
      h("h2", null, "Hello Word"),
      this.$slots.default
        ? this.$slots.default({ name: "tom" })
        : h("span", null, "我是HelloWord组件的默认值"),
    ]);
  },
};
</script>

<style scoped>
</style>