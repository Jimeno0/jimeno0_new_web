module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 7777
  },
  module:{
    loaders:[
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}