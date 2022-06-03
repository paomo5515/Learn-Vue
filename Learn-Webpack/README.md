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
