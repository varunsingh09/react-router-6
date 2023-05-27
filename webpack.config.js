const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;
  // console.log('_env, argv', _env, argv, "----", isProduction)
  return {
    mode: "production",
    entry: {
      app: "./src/index.js",
    },
    devtool: false,
    devServer: {
      host: 'localhost',
      port: 4040,
      compress: true,
      historyApiFallback: true,
      open: true,
      hot: true,
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'build'), // base path where to send compiled assets
      publicPath: '/' // base path where referenced files will be look for
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
      }
    },
    module: {
      rules: [
        { // config for es6 jsx
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        { // config for sass compilation
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.less$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
                javascriptEnabled: true,
              },
            },
          }]
        },
        {
          test: /\.(png|gif|jpe?g|ttf|pdf|ioc)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 81912,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 100000,
              },
            },
          ],
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[contenthash].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },

      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
      }),
      new HtmlWebpackPlugin({ // plugin for inserting scripts automatically into html
        template: path.resolve(__dirname, "public/index.html"),
        filename: "index.html",
        title: "React Router 6"
      }),
      new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
        filename: "css/[name].css",
        chunkFilename: "css/[id].css"
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProduction ? "production" : "development"
        )
      })
    ]
  }
}