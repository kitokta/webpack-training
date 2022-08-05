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
    //contenthash so everytime the file is changed the hash changes too, it helps with cache
    filename: '[name][contenthash].js'
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    //open nav wen npm run dev
    open: true,
    //hot reloading true
    hot: true,
    compress: true,
    historyApiFallback: true,
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
        //template to use, so we can change html from root
        template: 'src/template.html',
    }),
  ]
};
