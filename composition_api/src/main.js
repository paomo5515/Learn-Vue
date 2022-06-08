import { createApp } from 'vue'

// import App from "./01_mixin和extends/01_mixin的基本使用.vue"
// import App from "./01_mixin和extends/App.vue"
// import App from "./02_compositionAPI基础/App.vue"
import App from "./03_RefAPI的补充/App.vue"

const app = createApp(App)

/* app.mixin({
  data() {
    return {}
  },
  created() {
    console.log("全局的生命周期");
  }
}) */

app.mount('#app')
