"use strict";

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

function buildConfig(configDirs) {
  return {
    entry: "./src/index.js",
    output: {
      path: configDirs.BUILD_DIR,
      filename: "index_bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
}

module.exports = buildConfig;
