/*
import { render } from '@testing-library/react';
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-14 16:39:33
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-16 16:15:44
 */
// const data = require('./data/logistical.json');
const fs = require('fs');
class EmailFactory {
  constructor(data, team) {
    this.data = data[0];
    this.team = team;
  }

  // 为报名的 url 加上参数
  urlProcess = (url, code) => {
    return `${url}?pk_source=edminv&campaigncode=${code}`;
  };

  emailSubject = (subject) => {
    return `【线上直播】${subject}`;
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

  create = () => {
    const email = {};
    const data = this.data;
    email.code = data.code;
    email.team = this.team;
    email.subject = this.emailSubject(data.title);
    email.meetingTime = `${data.date} ${data.start_time} - ${data.end_time}`;
    email.header = {};
    email.button = { text: '立即报名', color: 'black' };
    email.banner = data.banners[0].image_mobile;
    email.title = data.title;
    email.meetingUrl = this.urlProcess(data.url, data.code);
    email.mainText = data.intro;
    email.schedule = [];
    data.agendas.forEach((value) => {
      email.schedule.push(this.scheduleProcess(value));
    });
    email.guests = this.guestProcess(data.speakers);
    return email;
  };
}

const data = require('./origin_data/imc.json');

const e = new EmailFactory(data, 'gb');
const a = e.create();
// console.log(a.schedule[0][0].guest);

const render = require('./Render');

render(a);
module.exports = EmailFactory;
