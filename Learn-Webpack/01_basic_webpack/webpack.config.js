const path = require("path")
const paht = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    // 获取文件路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  }
}