var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/js/index.js',
    devtool: 'source-map', // 输出source-map
    output:{
        path:path.resolve(__dirname, './build/'),
        filename:'app.js'
    },
    devServer: {
        contentBase: './',
        inline: true, // 项目文件保存自动编译文件模块
        port: 8080
    }, 
    module: {
      loaders: [
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015', 'react', 'stage-1']}}

      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'aaaa',
            template: 'test.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};