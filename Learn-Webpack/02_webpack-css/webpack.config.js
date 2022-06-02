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
          "css-loader"
        ]
      }
    ]
  }
}