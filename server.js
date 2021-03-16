/*
import { axios } from 'axios';
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-10 12:01:37
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-16 22:20:00
 */
/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-01-15 23:23:42
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-09 17:42:05
 * @FilePath: \practice\express-demo\index.js
 */
const Joi = require('joi');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://events.sap.cn'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.post('/api/content', async (req, res) => {
  const { data: post } = await axios.get(
    `https://events.sap.cn/home/meeting-info/?slug=${req.body.slug}`,
    {
      auth: {
        username: 'sapuser',
        password: 'secret_189',
      },
    }
  );
  res.send(post);
});

app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
  course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course) res.status(404).send('the course not found');
  res.send(course);
});
//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
