const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const constant = require("./src/utils/constants");

const CLIENT_PORT = constant.CLIENT_PORT;
const PROXY_DOMAIN = constant.SERVER_DOMIAN_URI
const ENTRY_PATH = path.join(__dirname, "src", "index.js");
const COUTPUT_PATH = path.join(__dirname, "..", "server", "public");

module.exports = {
  mode: "development",
  entry: ENTRY_PATH,
  output: {
    path: COUTPUT_PATH,
    publicPath: "/static/",
    filename: "bundle.[name].js"
  },
  devtool: "inline-source-map",
  devServer: {
    port: CLIENT_PORT,
    open: true,
    historyApiFallback: true,
    proxy: {
      "*": PROXY_DOMAIN
    }
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    })
  ]
};
