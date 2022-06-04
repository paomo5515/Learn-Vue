const { merge } = require("webpack-merge")
const CommonConfig = require("./webpack.comm.config")
// npm i clean-webpack-plugin -D
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// npm i copy-webpack-plugin -D
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = merge(CommonConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
  ]
})