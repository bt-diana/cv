const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src\/scripts\/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'cv'),
        filename: 'index.js',
        clean: true,
    },
    devtool: process.env.NODE_ENV ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf|txt|csv|mmdb|jpg|png|svg|gif|pdf)$/i,
                type: 'asset/resource',
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/\en.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'ru/\index.html',
            template: path.resolve(__dirname, 'src/\/ru.html'),
        }),
    ],
};