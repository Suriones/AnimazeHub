const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    cache: false,
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.(css|scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
            { test: /\.(svg)$/i, loader: 'file-loader', options: { name: 'public/[name].[ext]' } }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html", favicon: "./public/logo.png" })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}