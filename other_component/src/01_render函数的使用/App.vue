<script>
import { ref, h } from "vue";
import HelloWord from "./HelloWord.vue";
export default {
  render() {
    // 传入插槽，一个插槽使用 {}，多个插槽使用 []
    return h(
      HelloWord,
      {},
      {
        // 传入插槽
        default: (props) =>
          h("span", null, `app传入到HelloWord中的内容：${props.name}`),
      }
    );
  },
};
</script>

<style scoped>
</style>