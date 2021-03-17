/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-16 11:48:26
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-17 22:15:13
 */

// jshint esversion: 6
let template = require('art-template');
const fs = require('fs');
const path = require('path');

const render = (data) => {
  const page = template(__dirname + '/templates/cn.art', data);
  const file = path.resolve(__dirname, `./origin_html/${data.title}.html`);
  fs.writeFile(file, page, { encoding: 'utf8' }, (err) => {});
};

module.exports = render;
