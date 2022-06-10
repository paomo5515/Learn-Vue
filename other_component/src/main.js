import { createApp } from 'vue'
// import App from './01_render函数的使用/01_render函数基本使用.vue'
// import App from './01_render函数的使用/02_render函数实现计数器.vue'
// import App from './01_render函数的使用/03_setup函数实现计数器.vue'
// import App from './01_render函数的使用/App.vue'
// import App from './02_jsx的使用/App.vue';
// import App from './03_自定义指令/App.vue';
import App from "./04_telport内置组件/App.vue"
import pluginObject from './plugins/piugins-object';
import pluginFunction from './plugins/plugin-function';

// 导入自定义指令
import registerDirectives from "./directives";
const app = createApp(App)

registerDirectives(app)
// 定义全局指令
/* app.directive("focus", {
  mounted(el, bindings, vnode, preVnode) {
    console.log("focus monted");
    el.focus();
  },
}) */

app.use(pluginObject)
app.use(pluginFunction)

app.mount('#app')
