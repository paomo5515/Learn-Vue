const path = require("path")

// npm i clean-webpack-plugin -D
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// npm i html-webpack-plugin -D
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    // 获取文件路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // 表示通过 asset 打包后的文件
    // assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        use: [
          // { loader: "css-loader" }
          "style-loader",
          "css-loader",
          "postcss-loader"
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

      // 使用 asset 来替换 file-loader 和 url-loader
      {
        test: /\.(jpg|png|gif|svg|webp|jpeg)$/,
        // type: "asset/resource"
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024 // 100 kb
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }
    ]
  },
  plugins: [
    // 一个个的插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
}