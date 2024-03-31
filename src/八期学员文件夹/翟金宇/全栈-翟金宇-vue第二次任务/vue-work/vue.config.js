const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = defineConfig({
  ...
  devServer: {
  client: {
    overlay: false
  }
}
})
