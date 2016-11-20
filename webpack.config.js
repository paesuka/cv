// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg|\.jpg)/,
      loader: 'file-loader'
    }]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + './dist',
    publicPath: '/'
  },
  plugins: [HTMLWebpackPluginConfig]
};
