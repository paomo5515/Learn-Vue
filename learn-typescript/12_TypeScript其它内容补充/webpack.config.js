const path = require("path")
const HtmlWebpackOlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    open: true,
    client: {
      logging: 'error',
      // progress: true, // 浏览器显示 编译进度
    },
  },

  stats: {
    // 是 是否添加关于构建模块的信息
    // modules: false,
    outputPath: true,
    // 告知 stats 是否添加构建日期与时间信息
    builtAt: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackOlugin({
      template: "./index.html"
    })
  ]
}