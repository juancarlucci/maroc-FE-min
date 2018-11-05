// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.scss$/,
      //   use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader']
      // },
      {
        test: /\.scss$/,
            use: [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../../"
              }
            }, {
              loader: 'style-loader'
            }, {
              loader: MiniCssExtractPlugin.loader
            }, {
              loader: 'css-loader'
            }, {
              loader: 'resolve-url-loader'
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: false
              }
            }
          ]
        },
        {
           test: /\.(png|jp(e*)g|svg)$/,
           use: [{
               loader: 'url-loader',
               options: {
                   limit: 8000, // Convert images < 8kb to base64 strings
                   name: 'img/[hash]-[name].[ext]'
               }
           }]
       }


    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};
