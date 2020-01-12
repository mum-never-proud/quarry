const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/quarry.js',
  devtool: 'source-map',
  output: {
    filename: 'quarry.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: '$q'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};
