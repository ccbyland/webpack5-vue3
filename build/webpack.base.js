const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  entry: path.resolve(__dirname, "../src/main.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
  },
  resolve: {
    // 这些选项能设置模块如何被解析
    extensions: [".js", ".ts", ".json", ".vue"], // 尝试按顺序解析这些后缀名
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
        test: /\.(gif|jpe?g|png|bmp|svg)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/images 目录中
          // 在这里的hash表示哈希表，意思就是指将图片放在不同的id下，因为hash的意思就是将图片等资源打包后有不同的id属性
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名，例如图片后缀的jpg那么打包之后也为jpg
          // [query]: 添加之前的query参数
          filename: "static/images/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 在这里的hash表示哈希表，意思就是指将图片放在不同的id下，因为hash的意思就是将图片等资源打包后有不同的id属性
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名，例如图片后缀的jpg那么打包之后也为jpg
          // [query]: 添加之前的query参数
          filename: "static/font/[hash:8][ext][query]",
        },
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
            // options: {
            //   modules: {
            //     localIdentName: "[name]_[local]_[hash:5]",
            //   },
            // },
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
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
};
