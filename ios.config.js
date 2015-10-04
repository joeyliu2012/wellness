var path = require('path');

module.exports = {
  entry: {
    'index.ios': [path.join(__dirname, 'src/main.ios.js')],
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js/,
      include: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules/react-native-camera')
      ],
      loader: 'babel?stage=0'
    }]
  }
};
