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
const pkg = require('../package.json');
const webpack = require('webpack');

module.exports = function (entry, isMinify) {
    const plugins = [
        new webpack.DefinePlugin({
            NODE_ENV: '"production"',
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.BannerPlugin([
            pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
            'Copyright ' + new Date().getFullYear() + ', ' + pkg.author,
            pkg.license + ' license'
        ].join('\n'))
    ];
    if(isMinify){
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }));
    }

    return {
        context: path.join(__dirname, '../src'),
        entry: entry,
        output: {
            path: path.join(__dirname, '../dist'),
            filename: isMinify ? '[name].min.js' : '[name].js',
            library: 'gqui',
            libraryTarget: 'umd',
            umdNameDefine: true
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel'
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'html?minimize'
                }
            ]
        },
        plugins: plugins
    };
};