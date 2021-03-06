### 自定义 scripts 命令
    在根目录中创建 paomo.config.js 文件，再去改变 package.json 中的 scripts 中的命令，例如："build": "webpack --config paomo.config.js"

### babel 命令行的使用
    如果我们希望在命令行尝试使用 babel，需要安装如下库：
      npm i @babel/core @babel/cli -D
      @babel/core：babel的核心代码，必须安装；
      @babel/cli：可以让我们在命令行使用 babel；

      npx babel demo.js --out-dir dist
      demo.js 表示源文件，--out-dir 表示编译后存放文件的文件夹
      如果想要 输出一个单独的 文件 npx babel demo.js --out-file test.js
    
    如果我们需要转换箭头函数，那么我们就可以使用箭头函数转换相关的插件：
      npm i @babel/plugin-transform-arrow-functions -D
      // 使用 箭头函数 插件
      npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions

    将 const let 块级作用域转为 var（没有块级作用域）
      npm i @babel/plugin-transform-block-scoping -D
      // 使用 插件
      npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping   

 ### babel 的预设 preset
    如果我们需要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）；
     安装预设 npm i @babel/preset-env -D
     // 使用预设
     npx babel demo.js --out-file test.js --presets=@babel/preset-env
  
  ### babel 是如何做到将我们的 一段代码（ES6、TypeScript、React）转成另外一段代码（ES5）的呢？
    从一种 源代码（原生语言）转换成另一种源代码（目标语言），这是什么的工作呢？
      就是 编译器，事实上我们可以将 bable 看成就是一个的编译器。
      babel 编译器的作用就是将我们的源代码，转换成浏览器可以直接识别的 另外一段源代码。
    babel 也拥有编译器的工作流程：
      解析阶段（Parsing）
      转换阶段（Transformation）      
      生成阶段（Code Generation）
    
    https://github.com/jamiebuilds/the-super-tiny-compiler

  ### 处理 vue 文件
    npm install -D vue-loader vue-template-compiler

  ### 热更新
    第一种方式：watch
      在 package.json 文件中 scripts添加 --watch，webpack-cli 就会去配置 watch: true;
      也可以在 webpack.config.js 中添加 watch: true;
    第二种方式：webpack-dev-server
      npm i webpack-dev-server -D
      在 package.json 文件中 scripts添加 "serve": "webpack serve"，webpack-cli 发现这个参数 就回去 启动 webpack-dev-server
      这种方式没有输出打包后的静态资源，它是将打包后的资源放到了内存中，通过 express 来访问 内存中的静态资源，然后再返回到浏览器中
      事实上 webpack-dev-server 使用了一个库叫 memfs（memory-fs webpack自己写的）

  ### webpack-分离
    npm i webpack-merge -D
    const { merge } = require("webpack-merge")
    const CommonConfig = require("./webpack-comm.config")
    module.exports = merge(CommonConfig, { webpack配置 })

  ### Vite 的构造
    它主要由两部分组成：
      一个开发服务器，它基于原生ES 模块提供了丰富的内建功能，HMR的速度非常快速；
      一套构建指令，它使用 rollup 打开我们的代码，并且它是预配置的，可以输出生产环境的 优化过的静态资源；

      