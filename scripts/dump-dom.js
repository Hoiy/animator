'use strict';
const puppeteer = require('puppeteer');
const _ = require('lodash');

const URL = process.argv[2];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(URL, {waitUntil: 'networkidle0'});
  const html = await page.content();
  await browser.close();
  console.log(html)
})();
