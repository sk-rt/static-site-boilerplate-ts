const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = process.env.NODE_ENV || 'development';
const isDevelopment = environment === 'development';
const publicPath = '/assets/';

module.exports = {
  entry: {
    main: `${__dirname}/src/js/main.ts`,
  },
  target: 'web',
  mode: isDevelopment ? environment : 'production',
  devtool: isDevelopment ? 'inline-source-map' : false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: isDevelopment ? `${__dirname}/public${publicPath}` : `${__dirname}/dist${publicPath}`,
    publicPath: publicPath,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts?$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
              url: false,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              postcssOptions: {
                plugins: [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(environment),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  devServer: {
    contentBase: `${__dirname}/public`,
    publicPath: publicPath,
    watchContentBase: true,
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8080,
  },
};
