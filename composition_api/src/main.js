import { createApp } from 'vue'

// import App from "./01_mixin和extends/01_mixin的基本使用.vue"
// import App from "./01_mixin和extends/App.vue"
// import App from "./02_compositionAPI基础/App.vue"
// import App from "./03_RefAPI的补充/01_toRefs和toRefs的使用.vue"
// import App from "./03_RefAPI的补充/02_refAPI的补充.vue"
// import App from "./03_RefAPI的补充/03_customRef.vue"
// import App from "./04_computed和watch/01_computed的使用.vue"
// import App from "./04_computed和watch/02_watchEffect基本使用.vue"
// import App from "./04_computed和watch/03_.watchEffect停止侦听.vue"
// // import App from "./04_computed和watch/04_watchEffect清除副作用.vue"
import App from "./04_computed和watch/App.vue"

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
