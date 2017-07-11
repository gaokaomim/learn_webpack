var webpack = require('webpack');
module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
        }, ]
    },
        devServer: {
        historyApiFallback: true,
        inline: true, //注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};