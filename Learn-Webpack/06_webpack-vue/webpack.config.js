const path = require("path")

// npm i clean-webpack-plugin -D
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// npm i html-webpack-plugin -D
const HtmlWebpackPlugin = require("html-webpack-plugin")

const { DefinePlugin } = require("webpack")

// npm i copy-webpack-plugin -D
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  // 设置模式
  // development 开发阶段，会设置 development
  // production  准备打包上线的时候，设置 production
  mode: "development",
  // 设置 source-map：建立 js 映射文件，方便测试代码和错误
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    // 获取文件路径
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
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
            maxSize: 10 * 1024 // 100 kb
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       /* plugins: [
      //         "@babel/plugin-transform-arrow-functions",
      //         "@babel/plugin-transform-block-scoping"
      //       ] */
      //       presets: [
      //         "@babel/preset-env"
      //       ]
      //     }
      //   }
      // }
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        // npm i vue-loader@next -D 
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    // 一个个的插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Learn Vue"
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}