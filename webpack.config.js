const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //[name] refers to entry.bundle
    filename: '[name].js'
  },
  //loaders config
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack Training',
        filename: 'index.html',
    }),
  ]
};
