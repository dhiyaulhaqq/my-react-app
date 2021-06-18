const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(m?js?)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
        clean: true
    }
};