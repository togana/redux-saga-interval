import path from 'path';

const outputPath = path.join(__dirname, 'lib');

export default {
  entry: {
    'redux-saga-interval': './src/index.js',
  },
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
      { test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
