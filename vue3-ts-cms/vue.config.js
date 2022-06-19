const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 6060,
    host: '127.0.0.1',
    open: true,
    historyApiFallback: true
  }
})
