var path = require('path');
var webpack = require('webpack');

var config = {
  debug: true,
  devtool: 'source-map',
  entry: {
    'index.ios': [path.join(__dirname, 'src/main.ios.js')],
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', 'ios.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, 'src')
      ],
      loader: 'babel',
      query: {
        stage: 0,
        plugins: []
      }
    }]
  },
  plugins: []
};

if (process.env.HOT) {
  config.devtool = 'eval';
  config.entry['index.ios'].unshift('react-native-webpack-server/hot/entry');
  config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
  config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8082');
  config.output.publicPath = 'http://combinator.local:8082/';
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

  config.module.loaders[0].query.plugins.push('react-transform');
  config.module.loaders[0].query.extra = {
    'react-transform': [{
      target: 'react-transform-hmr',
      imports: ['react-native'],
      locals: ['module']
    }]
  };
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config
