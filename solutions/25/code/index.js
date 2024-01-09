import fs from 'fs'
import jwt from 'jsonwebtoken'

console.log('JWT Lab')

const payload = { username: 'codedamn' }
const secretKey = 'some-secret-key'

const token = jwt.sign(payload, secretKey)
console.log('Token:', token)

const decodedPayload = jwt.decode(token)
console.log('Decoded Payload:', decodedPayload)

const verified = jwt.verify(token, secretKey)
console.log('Verified:', verified)

export { token, decodedPayload, verified }
