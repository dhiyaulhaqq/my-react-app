const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        inline: true,
        hot: true,
        port: 8181
    },
    module: {
        rules: [
            {
                test: /\.(m?jsx?)$/,
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
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'main.js',
        clean: false
    }
};