const path = require('path');
const portfinder = require('portfinder');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () =>
    new Promise((resolve, reject) => {
        portfinder
            .getPortPromise({
                port: 3000, // minimum port
                stopPort: 3999 // maximum port
            })
            .then((port) => {
                resolve({
                    devServer: {
                        hot: true,
                        contentBase: path.resolve(__dirname, './'),
                        port: port,
                        host: '0.0.0.0',
                        publicPath: '/',
                        historyApiFallback: true,
                        disableHostCheck: true
                        // proxy: {
                        //   '/api': {
                        //     target: `https://unidemo.dcloud.net.cn`,
                        //     changeOrigin: true
                        //   }
                        // }
                    },
                    mode: 'development',
                    resolve: {
                        extensions: ['.js'],
                        modules: ['node_modules'],
                        alias: {
                            '@src': path.resolve(__dirname, './src')
                        }
                    },
                    entry: {
                        main: './src/index.js'
                    },
                    module: {
                        rules: [
                            {
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: {
                                    loader: 'babel-loader'
                                }
                            }
                        ]
                    },
                    plugins: [
                        new webpack.HotModuleReplacementPlugin(),
                        new HtmlWebpackPlugin({
                            filename: 'index.html',
                            template: path.resolve(__dirname, './index.html'),
                            title: 'my-react'
                        })
                    ]
                });
            })
            .catch((err) => {
                // Could not get a free port, `err` contains the reason.
                console.log(err);
            });
    });
