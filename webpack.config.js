const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'fancyTodo',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
    ],
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "util": require.resolve("util/"),
            "crypto": require.resolve("crypto-browserify"),
        },
    },
};
