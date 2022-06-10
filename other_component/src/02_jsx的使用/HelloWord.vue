
<script>
export default {
  render() {
    return (
      <div>
        <h2>Hello Word</h2>
        {this.$slots.default ? this.$slots.default() : <span>哈哈哈</span>}
      </div>
    );
  },
};
</script>

<style>
</style>