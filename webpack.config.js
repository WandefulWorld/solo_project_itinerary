const HtmlWebpackPlugin = require('html-webpack-plugin');
const newPlugins = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            inlineRequires: '/assests/',
          },
        },
      },

      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 10000,
            },
          },
        ],
      },

    ],
  },
  // proxy: {
  //   '/**': 'http://localhost:3000',
  // },

  plugins: [newPlugins],
};
