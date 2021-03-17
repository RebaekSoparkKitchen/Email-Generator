/*
import { axios } from 'axios';
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-15 10:51:15
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-15 15:50:28
 */
const axios = require('axios');
const fs = require('fs');

class Request {
  constructor(url) {
    this.url = url;
    this.data = {};
    this.requestData(url);
    this.qr = undefined;
  }

  requestData = async (url) => {
    const address = `https://events.sap.cn/home/meeting-info/?slug=${this.slug(
      url
    )}`;
    let temp = {};
    axios
      .get(address, {
        auth: {
          username: 'sapuser',
          password: 'secret_189',
        },
      })
      .then((ret) => {
        this.toJson(ret.data[0]);
      });
    this.data = temp;
  };

  getName = (data) => data.title;

  toJson = (data) => {
    let str = JSON.stringify(data, '', '\t');
    fs.writeFileSync(`./origin_data/${this.getName(data)}.json`, str);
  };

  slug = (url) => {
    const parser = new URL(url);
    const pathList = parser.pathname.split('/');
    for (let i = pathList.length - 1; i >= 0; i--) {
      if (pathList[i]) return pathList[i];
    }
    return null;
  };
}

// const test = data(
//   'https://events.sap.cn/w-dsc/wd2/?pk_source=edminv&pk_campaign=CRM-CN21-DSC-WEBSTC1'
// );
const r = new Request(
  'https://events.sap.cn/w-dsc/wd2/?pk_source=edminv&pk_campaign=CRM-CN21-DSC-WEBSTC1'
);
