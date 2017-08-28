const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const dist = path.resolve(__dirname, 'www');

module.exports = {
    entry: {
        app: ['./client/index.js', 'webpack-hot-middleware/client']
    },
    resolve: { extensions: ['.js', '.jsx'] },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin([dist]),
        new HtmlWebpackPlugin({
            template: 'client/index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, dist)
    }
};