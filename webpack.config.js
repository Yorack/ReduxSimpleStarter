const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const configurationFRED = {
    context: path.join(__dirname, 'src'),

    entry: {
        app: './index.js',
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.jsx', '.json', '.scss', '.less', '.css'],
        unsafeCache: true,
    },

    module: {
        noParse: /jquery/,

        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                'react-hot-loader/babel',
                                '@babel/plugin-proposal-class-properties',
                            ],
                        },
                    },
                ],
            },
            {
                exclude: /(node_modules)/,
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|gif|jpe?g|svg|ico)$/,
                exclude: /(node_modules)/,
                include: [path.resolve(__dirname, 'img')],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name]-[hash].[ext]'
                    }
                }
            }
            // {
            //     test: /\.css/,
            //     exclude: /(node_modules)/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     importLoaders: 1,
            //                 },
            //             },
            //             // 'postcss-loader'
            //         ],
            //     }),
            // },
        ],
    },

    optimization: {
        minimize: false,
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        compress: true,
        hot: true,
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    plugins: [
        // new ExtractTextPlugin({
        //     filename: 'style.css',
        //     allChunks: true,
        // }),

        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            inject: 'body',
            title: 'tools',
            template: path.resolve(__dirname, 'index.html'),
        }),

        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
};

module.exports = configurationFRED;