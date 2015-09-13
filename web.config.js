var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/main.web.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.web.js',
    publicPath: '/static/'
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.web', '.web.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js/,
      include: [
        path.join(__dirname, 'src')
      ],
      loader: 'babel?stage=0'
    }]
  }
};

