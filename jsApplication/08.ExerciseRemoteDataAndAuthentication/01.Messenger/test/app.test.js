let { chromium } = require('playwright-chromium');
let { expect } = require('chai');

let browser;
let page;

describe('E2E Tests', function () {
    // before(async () => { 
    //     browser = await chromium.launch();
    //     // browser = await chromium.launch({headless: false, slowMo: 1000});
    // });
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    describe('Messenger', function () {
        it('load messages', async function () {
            await page.goto('http://localhost:5500');
            await page.click('#refresh');
            await page.textContent('textarea[id="messages"]');
        })
    })
})