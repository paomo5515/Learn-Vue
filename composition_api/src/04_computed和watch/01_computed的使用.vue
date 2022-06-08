<template>
  <div>
    <!-- <h2>{{ firstName }}--{{ lastName }}</h2> -->
    <h2>{{ fullName }}</h2>
    <button @click="changeFirstName">修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("tom");
    const lastName = ref("jerry");

    // 1.用法一：传入一个 getter 函数， computed的返回值 是一个 ref 对象
    // const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    // 1.用法二：传入一个 对象，对象包括 getter/setter
    const fullName = computed({
      get: () => {
        return `${firstName.value} ${lastName.value}`;
      },
      set(newValue){
        const names = newValue.split(" ")
        console.log(names);
        firstName.value =names[0]
        lastName.value = names[1]
      }
    });

    const changeFirstName = () => {
      // firstName.value = "hello";
      fullName.value = "word kkk"
    };
    return {
      // firstName,
      // lastName,
      fullName,
      changeFirstName,
    };
  },
};
</script>

<style scoped>
</style>