// !! Boilerplate code starts
const fs = require('fs')
const puppeteer = require('puppeteer')

async function run() {
    // results is a boolean[] that maps challenge results shown to user
    const results = []

    const t1 = 'TACCGAT'
    const t2 = 'ATGCCGATGCAGTTGC'


    const rnaMap = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    function trans(dna) {
        return dna.replace(/[GCTA]/g, l => {
            return rnaMap[l];
        });
    };

    const t1A = trans(t1)
    const t2A = trans(t2)

    // launch the headless browser for testing
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
            '--disable-gpu'
        ]
    })

    page = await browser.newPage()

    // wait for server to come online
    await page.goto('http://localhost:' + process.env.PUBLIC_PORT)

    // add jQuery and chai for unit testing support if you want
    await Promise.all([
        page.addScriptTag({
            url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
        }),
        page.addScriptTag({
            url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js'
        }),
    ])

    // !! Boilerplate code ends

    // Start your tests here in individual try-catch block

    try {
        await page.evaluate(async (t1, t1A) => {
            const assert = window.chai.assert
            assert(transcription(t1), t1A)
        }, t1, t1A)
        console.log('Test #1 passed!')
        results.push(true)
    } catch (error) {
        console.log(`Test #1 failed! Did your transcription() function not worked?`)
        results.push(false)
    }

    try {
        await page.evaluate(async (t2, t2A) => {
            const assert = window.chai.assert
            assert(transcription(t2), t2A)
        }, t2, t2A)
        console.log('Test #2 passed!')
        results.push(true)
    } catch (error) {
        console.log(`Test #2 failed! Did your transcription() function not worked?`)
        results.push(false)
    }

    // End your tests here
    fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(results))
    await browser.close().catch(err => { })

    // Exit the process
    process.exit(0)
}
run()
// !! Boilerplate code ends
