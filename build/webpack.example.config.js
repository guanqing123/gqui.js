/*
* GuanQing is pleased to support the open source community by making gqui.js available.
*
* Copyright (C) 2019 THL A29 Limited, a GuanQing person. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../example'),
    entry: {
        example: './example.js'
    },
    output: {
        path: path.join(__dirname, '../dist/example'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html?minimize'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]_[hash:base64:5]!postcss!less'
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                loader: 'style!css!postcss'
            }
        ]
    },
    devServer: {
        disableHostCheck: true
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: '"dev"',
            'process.env.NODE_ENV': '"dev"'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../example/index.html')
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8001'})
    ]
};