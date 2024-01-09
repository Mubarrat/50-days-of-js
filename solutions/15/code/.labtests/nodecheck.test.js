const fs = require('fs')
const puppeteer = require('puppeteer')

async function run() {
    const results = []
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu',
        ],
    })
    page = await browser.newPage()

    await page.goto('http://localhost:1337')

    await Promise.all([
        page.addScriptTag({
            url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        }),
        page.addScriptTag({
            url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js',
        }),
    ])

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            assert(document.getElementById('storageKey') !== null)
            assert(document.getElementById('setStorage') !== null)
        })
        console.log('Test #1 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #1 failed! Did you add the input field and button?')
        results.push(false)
    }

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            document.getElementById('storageKey').value = 'test'
            document.getElementById('setStorage').click()
            assert(localStorage.getItem('myKey') === 'test')
        })
        console.log('Test #2 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #2 failed! Did you save the input value in localStorage?')
        results.push(false)
    }

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            assert(document.getElementById('output') !== null)
            assert(document.getElementById('getStorage') !== null)
        })
        console.log('Test #3 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #3 failed! Did you add the output element and button?')
        results.push(false)
    }

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            document.getElementById('getStorage').click()
            assert(document.getElementById('output').innerText === 'test')
        })
        console.log('Test #4 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #4 failed! Did you display the localStorage value in output element?')
        results.push(false)
    }

    fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(results))
    await browser.close().catch((err) => {})


    process.exit(0)
}
run()