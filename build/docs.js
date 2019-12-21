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
const fs = require('fs');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');

const docs = glob.sync(path.join(__dirname, '../src/**/*.js')).filter(function (file) {
    if (/util\/util.js/.test(file)) return false;

    /*取到与目录名相同的js*/
    const basename = path.basename(file, '.js');
    const dirname = path.dirname(file).substr(path.dirname(file).lastIndexOf('/') + 1);
    return basename === dirname;
}).map(function (file) {
    const basename = path.basename(file, '.js');
    const doc = jsdoc2md.renderSync({ files: file});
    fs.writeFileSync(path.join(__dirname, '../docs/component', basename + '.md'), doc);
    console.log(`generate ${basename}.md...`);
    return basename;
}).reduce(function (doc, a) {
    return `${doc}\n- [${a}](component/${a}.md)`;
}, '');

const summary = `# Summary\n${docs}`;
fs.writeFileSync(path.join(__dirname, '../docs/README.md'), summary);