import { createApp } from 'vue';
import axios from "axios"
import { sum } from "js/math";
const { priceFormat } = require("js/format")
import App from "./vue/App"
import "@/js/element"

// 模块热替换
if (module.hot) {
  module.hot.accept('./js/element', function () {
    // 对更新过的 library 模块做些事情...
    console.log("element模块发生更新了")
  });
}


console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App)
app.mount("#app")

console.log("object");
console.log("hello word 1111");

axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})