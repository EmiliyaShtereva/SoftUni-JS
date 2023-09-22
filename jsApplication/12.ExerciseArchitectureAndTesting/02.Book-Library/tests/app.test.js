const {chromium} = require('playwright-chromium');
const {expect} = require('chai');
const exp = require('constants');

const host = 'http://localhost:5500/';

const mockData = {
    catalog: [
        {author: 'Author 1', title: 'Title 1', _id: '1001'},
        {author: 'Author 2', title: 'Title 2', _id: '1002'},
    ]
}

describe('Tests', async function() {
    this.timeout(6000);

    let browser, page;

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it ('it works', async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        expect(1).to.equal(1);
    })

    it ('screenshot', async () => {
        await page.goto(host);
        await page.screenshot({path: 'screenshot.png'});
    })

    it ('load all books', async () => {
        await page.goto(host);
        await page.waitForSelector('#loadBooks');

        await page.route("**/jsonstore/collections/books", (route, request) => {
            route.fulfill({
                body: JSON.stringify(mockData.catalog),
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                }
            })
        })

        await page.click('#loadBooks');
        const books = await page.$$eval(`tbody tr`, (tr) => 
            tr.map((s) => s.textContent)        
        );

        expect(books.length).to.equal(mockData.catalog.length);

    });

    it ('create book', async () => {
        const newBookData = mockData.catalog[0];

        await page.goto(host);
        await page.waitForSelector("#submit");

        const newBookTitle = newBookData.title + "random";
        const newBookAuthor = newBookData.author + "random";
        await page.fill('input[name="title"]', newBookTitle);
        await page.fill('input[name="author"]', newBookAuthor);

        const [request] = await Promise.all([
            page.waitForRequest("**/jsonstore/collections/books"),
            page.click("#submit"),
        ]);

        expect(request.method()).to.equal("POST");

        const postData = JSON.parse(request.postData());

        expect(postData.author).to.equal(newBookAuthor);
        expect(postData.title).to.equal(newBookTitle);
    });
})