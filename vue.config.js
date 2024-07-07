const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  publicPath:"./",

  transpileDependencies: true,
  lintOnSave:false,
  // 设置css的主入口文件
  css: {
    // css预设器配置项
    loaderOptions: {
      scss: { 
        additionalData: `@import "./src/styles/style.scss";`//主入口css文件路径
      }
    }
  },
  configureWebpack:{
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }

})

