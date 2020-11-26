require('dotenv').config();
const port = process.env.REACT_APP_PORT || 3000;
const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry:'./src/index.js',
  output:{
    filename : "bundle.[hash].js",
    path : path.resolve(__dirname,"build"),
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  module : {
    rules :[
      {
        test : /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use : {
          loader : "babel-loader",
          options : {
            presets : ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use : ["css-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use : ["css-loader","sass-loader"]
      },
      {
        test: /\.png$/,
        loader : "file-loader",
        options : {
          name : "[name].[ext]?[hash]"
        },
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
    inline : true
  }
};