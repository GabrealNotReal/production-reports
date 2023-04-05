const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   // eslint-disable-next-line no-undef
  //   plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  // },
})
