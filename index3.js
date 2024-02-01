require('dotenv'). config();
const puppeteer = require ('puppeteer');


(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://app.senhorcontabil.com.br/Sistema/Entrar/');

    //await page.click('.fusion-button-text');

    await page.type('#Email', process.env.EMAIL);
    await page.type('#Password', process.env.PASSWORD);
    await page.click('[name="Login"]');
    
    //await browser.close();
})();
