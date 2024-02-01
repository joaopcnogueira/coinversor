#!/usr/bin/env node

// https://www.youtube.com/watch?v=4W55nFDyIrc
const puppeteer = require('puppeteer');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

console.log('Bem-vindo ao Bot conversor de moedas 🤑');

async function robo(moedaBase, moedaFinal) {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    const URL = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDIGCAMQRRhAMgoIBBAAGLEDGIAEMg0IBRAAGIMBGLEDGIAEMg0IBhAAGIMBGLEDGIAEMg0IBxAAGIMBGLEDGIAE0gEIMTc5MmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8`;
    await page.goto(URL);

    const resultado = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value;        ;
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

    await browser.close();
};

const argv = yargs(hideBin(process.argv))
    .option('base', {
        alias: 'b',
        type: 'string',
        description: 'Moeda base',
        default: 'dolar'
    })
    .option('final', {
        alias: 'f',
        type: 'string',
        description: 'Moeda final',
        default: 'real'
    })
    .argv;

robo(argv.base, argv.final);