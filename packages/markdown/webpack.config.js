let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
// const RemarkHTML = require("remark-html");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // 模版文件
    })
  ],
  module: {
    rules: [
      {
        loader: require.resolve("raw-loader"),
        test: /\.(txt|md)/i,
        include: path.resolve('./src')
      }
      
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: "../loaders/md-loader" }, // 加上自己写的loader
      //   ]
      // },
    ],
  },
};
