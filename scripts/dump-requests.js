'use strict';
const puppeteer = require('puppeteer');
const _ = require('lodash');

const URL = process.argv[2];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  var requests = [];
  page.on('requestfinished', request => {
      requests.push(request)
  });

  await page.goto(URL, {waitUntil: 'networkidle0'});
  await browser.close();

  console.log(JSON.stringify(
    _.map(requests, request =>
      _.pick(request, ['_method', '_url'])
    ), null, '\t'
  ));
})();
