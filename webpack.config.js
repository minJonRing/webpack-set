const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const findSync = require("./entry.file.js")
// const wModule = require("./webpack.module.js")

module.exports = {
    devtool: 'eval-source-map',
    entry: findSync(__dirname + "/src/js"),
    output: {
        path: __dirname + "/build",
        filename: "[name].js"
    },
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        inline: true,
        proxy: {
            '/app': {
                target: 'http://localhost:3000/',
                pathRewrite: { '^/app': '' },
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            },
            '/upload': {
                target: 'http://localhost:3000/',
                pathRewrite: { '^/upload': '/upload' },
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            },
            '/images': {
                target: 'http://localhost:3000/',
                pathRewrite: { '^/images': '/images' },
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            },
            '/style': {
                target: 'http://localhost:3000/',
                pathRewrite: { '^/style': '/style' },
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            }
        }
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
            },
            exclude: /node_modules/
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },
                'css-loader',
                'postcss-loader',
                'sass-loader']
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'index.html',
            hash: true,
            template: __dirname + "/src/temp/index.html"
        }),
        // 我的项目
        new HtmlWebpackPlugin({
            chunks: ['project'],
            filename: 'project.html',
            hash: true,
            template: __dirname + "/src/temp/project.html"
        }),
        // 我的项目
        new HtmlWebpackPlugin({
            chunks: ['project-item'],
            filename: 'project-item.html',
            hash: true,
            template: __dirname + "/src/temp/project-item.html"
        }),
        // 新闻
        new HtmlWebpackPlugin({
            chunks: ['news'],
            filename: 'news.html',
            hash: true,
            template: __dirname + "/src/temp/news.html"
        }),
        // 新闻
        new HtmlWebpackPlugin({
            chunks: ['news-item'],
            filename: 'news-item.html',
            hash: true,
            template: __dirname + "/src/temp/news-item.html"
        }),
        // 关于我们
        new HtmlWebpackPlugin({
            chunks: ['company'],
            filename: 'company.html',
            hash: true,
            template: __dirname + "/src/temp/company.html"
        }),
        // 我的客户
        new HtmlWebpackPlugin({
            chunks: ['client'],
            filename: 'client.html',
            hash: true,
            template: __dirname + "/src/temp/client.html"
        }),
        // 加入我们
        new HtmlWebpackPlugin({
            chunks: ['join'],
            filename: 'join.html',
            hash: true,
            template: __dirname + "/src/temp/join.html"
        }),
        // 联系我们
        new HtmlWebpackPlugin({
            chunks: ['contact'],
            filename: 'contact.html',
            hash: true,
            template: __dirname + "/src/temp/contact.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}