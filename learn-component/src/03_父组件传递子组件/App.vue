<template>
  <div>
    <show-message id="001" class="hello" title="哈哈哈" content="我是message"></show-message>
    <show-message title="啊啊啊" content="我是message"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <show-message :title="message.title" :content="message.content"></show-message>
    <show-message v-bind="message" ></show-message>

    <mulit-root-element id="002"></mulit-root-element>
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";
import MulitRootElement from "./MulitRootElement.vue"
export default {
  components: {
    ShowMessage,
    MulitRootElement
  },
  data() {
    return {
      title: "十九届世界",
      content: "我是第哈韩的",
      message: {
        title:"黑嘿嘿",
        content:"我是嘿嘿嘿"
      }
    };
  },
};
</script>

<style scoped>
</style>