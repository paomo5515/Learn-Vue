const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "127.0.0.1",
    port: "6060",
    open: true,
    // https: false,
    // proxy: 'http://localhost:4000'
  }
})
