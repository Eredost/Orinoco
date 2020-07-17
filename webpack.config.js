const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js',
        home: './src/home.js',
        product: './src/product.js',
        basket: './src/basket.js',
        order: './src/order.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: 'fonts'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [
                {from: './src/assets'}
            ]
        }),
        new BrowserSyncPlugin({
            files: ['src/scss/*.scss', 'src/assets/*.html'],
            startPath: '/public',
            host: 'localhost',
            port: 3001,
            proxy: 'http://localhost:8080/',
        }, {
            reload: false,
        })
    ],
    devServer: {
        publicPath: '/public/',
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        open: false,
    }
};
