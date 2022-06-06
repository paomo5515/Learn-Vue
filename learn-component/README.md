# learn-component

## Project setup
```
npm install
```

### keep-alive 属性
```
keep-alive有一些属性：
  include-string|RegExp|Array。只有名称匹配的组件会被缓存；
  exclude-string|RegExp|Array。任何名称匹配的组件都不会被缓存；
  max-number|string。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁；

  例子：
    逗号分隔字符串（注意逗号前面不需要加 空格）
    <keep-alive include="a,b">
      <component :is="view"></component>
    </keep-alive>

    RegExp（使用 "v-bind"）
    <keep-alive :include="/a|b/">
      <component :is="view"></component>
    </keep-alive>

    Array（使用 "v-bind"）
    <keep-alive :include="['a', 'b']">
      <component :is="view"></component>
    </keep-alive>
  
include 和 exclude prop 允许组件有条件地缓存：
  二者都可以用逗号分隔字符串、正则表达式或一个数组来表示；
  匹配首先检查组件自身的 name 选项；
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
