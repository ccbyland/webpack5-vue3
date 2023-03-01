const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    hot: true, // 启用 webpack 的 热模块替换 特性
    open: true, // 告诉 dev-server 在服务器已经启动后打开浏览器
    static: {
      // 该配置项允许配置从目录提供静态文件的选项
      directory: path.resolve(__dirname, "./dist"), // 告诉服务器从哪里提供内容
    },
  },
};
