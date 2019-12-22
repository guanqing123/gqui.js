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

const webpack = require("webpack");
const config = require('./webpack.mod.config');


Promise.all([
    {gqui: './gqui.js'}
].map((entry) => {
        return new Promise((resolve, reject) => {
            webpack(config(entry), function (error) {
            if (error) {
                reject(error);
                return;
            }

            webpack(config(entry, true), (err, stats) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(stats);
                }
            });
        });
    });
})
).then(() => {
    console.info('build finished');
}).catch((err) => {
    console.error('build error', err);
});