const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 8080;

module.exports = {
  mode: "development",
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, "..", "server", "public"),
    filename: "bundle.[hash].js"
  },
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { modules: true, camelCase: true, sourceMap: true }
          }
        ]
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
