import { createApp } from 'vue'
// import App from './01_组件的拆分和嵌套/App.vue'
// import App from "./02_组件的css作用域/App.vue"
// import App from "./03_父组件传递子组件/App.vue"
// import App from "./04_子组件传递父组件/App.vue"
// import App from "./05_商品页面的切换/App.vue"
// import App from "./06_Provide和inject使用/App.vue"
// import App from "./07_事件总线的使用/App.vue"
// import App from "./08_插槽的基本使用/App.vue"
import App from "./09_具名插槽的使用/App.vue"


const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')

