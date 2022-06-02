const path = require("path")

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
      /* {
        test: /\.(jpg|png|gif|svg|webp|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // // file-loader 默认使用 ES6 模块解析，将其关闭，启用 CommonJS 模块，不配置这个，html 文件中的图片路径不对
              esModule: false,
              // outputPath: "img", // 也可以使用，下面写法
              name: "img/[name]_[hash:6].[ext]",
              limit: 100 * 1024

              // [name] 当前图片的名称
              // [hash:6] 取前6位 hansh 
              // [ext] 文件扩展名
              // name:"[name]_[hash:6].[ext]"
            }
          }
        ],
        // // 不加这个配置，一张图片打包后会生成两张
        type: 'javascript/auto'
      } */

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
      /* {
        test: /\.(eot|ttf|woff2?)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "font/[name]_[hash:6].[ext]"
            }
          }
        ],
        type: 'javascript/auto'
      } */

      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }
    ]
  }
}