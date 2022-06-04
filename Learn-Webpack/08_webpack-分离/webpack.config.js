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
  target: "web",
  mode: "development",
  devtool: "source-map",
  //  监听文件变化
  // watch: true,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
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
        directory: path.join(__dirname, 'public')
      },
      // {
      //   directory: path.join(__dirname, 'abc')
      // }
    ],
  },
  resolve: {
    // modules: ["node_modules"],
    extensions: [".js", ".json", "mjs", ".vue", ".ts", ".jsx", ".tsx"],
    // 配文件夹别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "js": path.resolve(__dirname, "./src/js")
    }
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
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "./",
    //       globOptions: {
    //         ignore: [
    //           "**/index.html"
    //         ]
    //       }
    //     }
    //   ]
    // }),
    new VueLoaderPlugin()
  ]
}