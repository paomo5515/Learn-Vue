import { createApp } from 'vue'
// import App from './01_组件的拆分和嵌套/App.vue'
// import App from "./02_组件的css作用域/App.vue"
// import App from "./03_父组件传递子组件/App.vue"
// import App from "./04_子组件传递父组件/App.vue"
// import App from "./05_商品页面的切换/App.vue"
// import App from "./06_Provide和inject使用/App.vue"
// import App from "./07_事件总线的使用/App.vue"
// import App from "./08_插槽的基本使用/App.vue"
// import App from "./09_具名插槽的使用/App.vue"
// import App from "./10_作用域插槽的使用/App.vue"
// import App from "./11_动态组件的使用/App.vue"
import App from "./12_异步组件的使用/App.vue"
/* import { sum } from './12_异步组件的使用/utils/math'

console.log(sum(20, 30)); */

// 分开打包，通过 import() 导入的模块，后续 webpack 对其进行打包的时候就会进行分包的操作
// import("./12_异步组件的使用/utils/math").then(({ sum }) => {
//   console.log(sum(20, 30));
// })

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')

