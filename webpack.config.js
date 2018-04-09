var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanPlugin = new CleanWebpackPlugin(['dist'], {
  verbose: true
});

module.exports = {
  entry: [
    __dirname + '/src/index.ts',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'spore.js',
    library: 'spore',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      }
    ],
  },
  plugins: [cleanPlugin]
}
