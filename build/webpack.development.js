const path = require("path");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    hot: true, // 启用 webpack 的 热模块替换 特性
    historyApiFallback: true, // 当使用HTML5历史API时，index.html页面很可能必须用来代替任何404响应。通过设置为true来启用
    // open: true, // 告诉 dev-server 在服务器已经启动后打开浏览器
    static: {
      // 该配置项允许配置从目录提供静态文件的选项
      directory: path.resolve(__dirname, "./dist"), // 告诉服务器从哪里提供内容
    },
  },
});
