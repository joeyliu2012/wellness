var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'bundle': [path.join(__dirname, 'src/main.web.js')],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].web.js',
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.web', '.web.js']
  },
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

