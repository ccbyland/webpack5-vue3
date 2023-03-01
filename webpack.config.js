const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");
const developmentWebpackConfig = require("./webpack.development");
const productionWebpackConfig = require("./webpack.production");

module.exports = (env) => {
  return merge(
    baseWebpackConfig,
    env.development ? developmentWebpackConfig : productionWebpackConfig
  );
};
