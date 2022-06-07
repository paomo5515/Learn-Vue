<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffleNnm">数字洗牌</button>

    <transition-group tag="p" name="pm">
      <span v-for="item in numbers" :key="item" class="span">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },
  methods: {
    addNum() {
      // this.numbers.push(this.numCounter++)
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    shuffleNnm() {
      this.numbers = _.shuffle(this.numbers);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style scoped>
.span {
  display: inline-block;
  margin-right: 16px;
  font-size: 20px;
  color: lightcoral;
}
.pm-enter-from,
.pm-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.pm-enter-active,
.pm-leave-active {
  transition: all 1s ease;
}

.pm-leave-active {
  position: absolute;
}

.pm-move {
  transition: transform 1s ease;
}
</style>