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
    },
  },

  stats: {
    // 是 是否添加关于构建模块的信息
    modules: false,
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