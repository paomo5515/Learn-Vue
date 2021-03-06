import _ from "lodash-es"
import { createApp } from "vue";
import { sum } from "./js/math";
import mul from "./ts/mul";
import App from "./vue/App.vue";

import "./css/style.css"
import "./css/title.less"

console.log("Hello Word");
console.log(sum(10, 20));
console.log(mul(20, 30));

console.log(_.join(["aaa", "bbb"], "-"));

const titleEl = document.createElement("div")
titleEl.className = "title"
titleEl.innerHTML = "Hello Vite"

document.body.appendChild(titleEl)

// vue
createApp(App).mount("#app")
