<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(title, index) in titles"
      :key="title"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["titleClick"],
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  background-color: lightblue;
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item.active span {
  color: lightcoral;
  border-bottom: 4px solid lightcoral;
  padding: 5px 10px;
}
</style>