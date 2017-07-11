var webpack = require('webpack');
// webpack.config.js
module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        inline: true, //注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};