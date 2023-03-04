const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
// const AutoImport = require("unplugin-auto-import/webpack");
// const Components = require("unplugin-vue-components/webpack");
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  entry: path.resolve(__dirname, "../src/main.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
  },
  resolve: {
    // 这些选项能设置模块如何被解析
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".vue"], // 尝试按顺序解析这些后缀名
    alias: {
      "@": "./",
    }, // 创建 import 或 require 的别名，来确保模块引入变得更简单
    symlinks: false, // 是否将符号链接(symlink)解析到它们的符号链接位置
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
        use: {
          loader: "file-loader",
          options: {
            limit: 1024,
            esModule: false,
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
      filename: "index.html",
      title: "新标题",
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
};
