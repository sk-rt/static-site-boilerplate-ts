const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = process.env.NODE_ENV || 'development';
const publicPath = '/assets/';
const sourceMap = environment === 'development';

module.exports = {
    entry: {
        main: `${__dirname}/src/js/main.ts`,
    },
    target: 'web',
    mode: environment === 'development' ? environment : 'production',
    devtool: sourceMap ? 'inline-source-map' : false,
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        path:
            environment === 'development'
                ? `${__dirname}/dist/${publicPath}`
                : `${__dirname}/build/${publicPath}`,
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
                            sourceMap: sourceMap,
                            url: false,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: sourceMap,
                            postcssOptions: {
                                plugins: [require('autoprefixer')],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: sourceMap,
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
        contentBase: `${__dirname}/build`,
        watchContentBase: true,
        open: true,
        host: '0.0.0.0',
        useLocalIp: true,
        port: 8090,
    },
};
