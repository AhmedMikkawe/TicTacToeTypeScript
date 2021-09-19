const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode : 'development',
    entry:{
        main : path.resolve(__dirname, 'src/main.ts')
    },
    output:{
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].bundle.js',
        assetModuleFilename : '[name].[ext]',
        clean :true,
    },
    devtool : 'inline-source-map',
    devServer:{
        static : {directory: path.resolve(__dirname,'dist')},
        port: 5000, // default 8080
        open : true,
        hot: true,
    },
// loaders
    module : {
        rules : [
            {test :  /\.s[ac]ss$/i, use :['style-loader','css-loader','sass-loader']},
            {test : /\.(svg|png|jpg)$/, type: "asset/resource"},
            {test: /\.ts$/, use : 'ts-loader', include: [path.resolve(__dirname,'src')]},
        ],
    },
    resolve: {
        extensions: ['.ts','.js']
    },

// plugins
    plugins:[new HtmlWebpackPlugin({
        title : "Tic Tac Toe | TypeScript",
        filename:"index.html",
        template: path.resolve(__dirname, 'src/index.html'),
    })
    ],
}