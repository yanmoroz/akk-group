const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = ["index", "contacts", "reviews", "services", "company"];

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/pages/${page}/${page}.js`;
    return config;
  }, {}),
  stats: {
    children: true,
  },
  output: {
    filename: "[name].js" 
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/pages/${page}/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    ),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ),
}