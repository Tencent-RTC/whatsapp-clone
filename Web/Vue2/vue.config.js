const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  publicPath: "./",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "WhatsApp Clone";
      return args;
    });
  },
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false,
    },
  },
});
