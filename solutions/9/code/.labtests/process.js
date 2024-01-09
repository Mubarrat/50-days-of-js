import fs from 'node:fs'
const payload = JSON.parse(fs.readFileSync('./payload.json', 'utf8'))
const answers = payload.testResults[0].assertionResults.map(test => test.status === 'passed')

fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(answers))
