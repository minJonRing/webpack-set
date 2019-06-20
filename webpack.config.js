const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const findSync = require("./entry.file.js")
// const wModule = require("./webpack.module.js")

module.exports = {
    devtool: 'eval-source-map',
    entry:findSync(__dirname+"/src/js"),
    output:{
        path:__dirname+"/build",
        filename:"[name].js"
    },
    devServer:{
        contentBase:"./build",
        historyApiFallback:true,
        inline:true
    },
    module:{
        rules:[{
            test:/(\.jsx|\.js)$/,
            use:{
                loader:"babel-loader",
            },
            exclude:/node_modules/
        },{
            test:/\.(sa|sc|c)ss$/,
            use:[{
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
            chunks:['index'],
            filename:'index.html',
            hash:true,
            template:__dirname+"/src/temp/index.html"
        }),
        new HtmlWebpackPlugin({
            chunks:['main'],
            filename:'main.html',
            hash:true,
            template:__dirname+"/src/temp/main.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}