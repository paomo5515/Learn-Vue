import { createApp } from 'vue/dist/vue.esm-bundler';
import { sum } from "./js/math";
const { priceFormat } = require("./js/format")
import App from "./vue/App.vue"
import "./js/element"


console.log(sum(20, 30));
console.log(priceFormat());

// vue 代码
// const app = createApp({
//   template: "#my-app",
//   data() {
//     return {
//       title: "Hello Word"
//     }
//   }
// })

const app = createApp(App)
app.mount("#app")