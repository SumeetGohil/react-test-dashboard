var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'src/main.tsx'));
module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions:['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                loader: 'ts-loader',
                exclude: ['node_modules']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: ['node_modules']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ]
}