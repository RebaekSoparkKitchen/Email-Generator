/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-10 16:36:20
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-10 16:42:16
 */
import Raven from 'raven-js';

function init() {
  Raven.config(
    'https://894ef5e1a66b466f815bba23e021ff15@o547262.ingest.sentry.io/5669508',
    {
      release: '1-0-0',
      environment: 'development-test',
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
