/*
import { render } from '@testing-library/react';
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-14 16:39:33
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-23 14:50:40
 */
const fs = require('fs');
const cheerio = require('cheerio');
class EmailFactory {
  constructor(data) {
    this.data = data[0];
    this.url = `https://events.sap.cn/home/meeting-register/${this.data.id}/`;
  }

  // 为报名的 url 加上参数
  urlProcess = (url, code) => {
    return `${url}?pk_source=edminv&pk_campaign=${code}&campaigncode=${code}`;
  };

  emailSubject = (subject) => {
    return `${subject}`;
  };

  // 将复杂的 object 转化为字符串的 guest
  guestProcess = (speakers) => {
    let guest = '';
    speakers.forEach((value, index) => {
      if (!value) {
        return undefined;
      }
      const newGuest = index == 0 ? `${value.name}` : `<br>${value.name}`;
      guest += newGuest;
      guest += `<br>${value.titles.join('<br>')}`;
    });
    return guest;
  };

  // 将 this.data.agendas 转换为我熟悉的 schedule
  scheduleProcess = (agenda) => {
    const schedule = [];
    for (const item of agenda.items) {
      const scheduleItem = {};
      scheduleItem.time = `${item.start} - ${item.end}`;
      scheduleItem.content = item.content;
      scheduleItem.guest = this.guestProcess(item.speakers);

      schedule.push(scheduleItem);
    }
    return schedule;
  };

  guestProcess = (speakers) => {
    const guests = [];
    speakers.forEach((speaker) => {
      const guest = {};
      guest.name = speaker.name;
      guest.company = speaker.company ? speaker.company.join(' ') : '';
      guest.title = speaker.titles ? speaker.titles.join(' ') : '';
      guest.introduction = speaker.intros ? speaker.intros.join(' ') : '';
      guests.push(guest);
    });
    return guests;
  };

  //helper method for padding of p tag
  textProcess = (str) => {
    // null & false to avoid auto wrap of html tag in $.html()
    const $ = cheerio.load(str, null, false);
    const margin = '15px';
    const left = '30px';

    $('p').each(function (i, ele) {
      const prevNode = $(this).prev()[0];
      if (prevNode && prevNode.tagName == 'p') {
        $(this).css('padding-top', margin);
      }
    });
    const olWrapper = `<div style="margin: ${margin} 0"></div>`;
    $('ol').wrap(olWrapper);
    $('ul').wrap(olWrapper);
    $('ol').css('padding-left', `${left}`);
    $('ul').css('padding-left', `${left}`);
    return $.html();
  };

  create = (team, qr) => {
    const email = {};
    const data = this.data;

    email.code = data.code;
    email.team = team;
    email.subject = this.emailSubject(data.title);
    email.meetingTime = `${data.date} ${data.start_time} - ${data.end_time}`;
    email.header = {};
    email.button = { text: '立即报名', color: 'black' };
    email.banner = data.banners[0].image_mobile;
    email.title = data.title;
    email.meetingUrl = this.urlProcess(this.url, data.code);
    email.mainText = this.textProcess(data.intro);
    email.schedule = [];
    data.agendas.forEach((value) => {
      email.schedule.push(this.scheduleProcess(value));
    });
    email.guests = this.guestProcess(data.speakers);
    email.qr = qr;
    return email;
  };
}

module.exports = EmailFactory;
