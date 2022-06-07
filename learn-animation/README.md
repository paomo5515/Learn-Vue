# learn-animation

## Project setup
```
npm install
```

### Transition 组件的原理
```
当插入或者删除包含在 transition 组件中的元素时，Vue 将会做出以下处理：
  1.自动嗅探 目标元素是否应用了CSS过渡或者动画，如果有，那么在恰当的实际添加/删除CSS类名；
  2.如果 transition 组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用；
  3.如果没有找到 JavaScript 钩子并且也没有检测到 CSS过渡/动画，DOM插入、删除操作将会立即执行；
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
