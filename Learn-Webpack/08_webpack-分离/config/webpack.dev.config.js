const { merge } = require("webpack-merge")
const CommonConfig = require("./webpack.comm.config")
const path = require("path")

module.exports = merge(CommonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    // host: "0.0.0.0",
    port: "6060",
    // 是否要打开浏览器
    open: true,
    // // 是否开启 gzip 压缩
    // compress: true,

    // 设置代理
    /* proxy: {
      "/home": {
        target: "http://123.207.32.32:8000",
        pathRewrite: {
          '^/home': ''
        },
        secure: false,
        changeOrigin: true,
      } 
    }, */

    // 获取静态文件夹
    static: [
      {
        directory: path.join(__dirname, './public')
      },
      // {
      //   directory: path.join(__dirname, '../abc')
      // }
    ],
  },
})