const path = require("path")
const paht = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    // 获取文件路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        // 1.loader的写法（语法糖）
        // loader: "css-loader"

        // 2.完整写法
        use: [
          // { loader: "css-loader" }
          "style-loader",
          "css-loader",
          "postcss-loader"

          // 先在此读取有没有配置信息，如果没有 就会去 
          // 当前根目录下 去查找 postcss 文件导出的对象，把这个对象当作 配置信息
          /*  {
             loader: "postcss-loader",
             options: {
               postcssOptions: {
                 plugins: [
                   require("autoprefixer")
                 ]
               }
             }
           } */
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      // 写到一起
      // {
      //   test: /\.(less|css)$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "less-loader"
      //   ]
      // }
    ]
  }
}