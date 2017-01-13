module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 7777,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
};
