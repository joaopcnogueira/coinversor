const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


async function robo() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const URL = `https://app.powerbi.com/view?r=eyJrIjoiZWY1NTFlYzktMzg5My00MTYwLTgzYWYtNGY3MjRkOTU1NmU4IiwidCI6IjlkYmE0ODBjLTRmYTctNDJmNC1iYmEzLTBmYjEzNzVmYmU1ZiJ9`;
    await page.goto(URL);
    //await page.waitForNavigation();
    await page.screenshot({path: 'example.png'});

    //await browser.close();
}

robo();