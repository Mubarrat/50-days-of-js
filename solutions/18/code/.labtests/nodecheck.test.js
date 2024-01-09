import { describe, test, expect } from 'vitest'
import { product } from '/home/damner/code/index.js'

describe('JavaScript Objects Lab', () => {
 test('Create a JavaScript object named product', () => {
 expect(typeof product === 'object').toBeTruthy()
 })

 test('The id and price properties of the product object should be numbers', () => {
 expect(typeof product.id === 'number' && typeof product.price === 'number').toBeTruthy()
 })

 test('The name property of the product object should be a non-empty string', () => {
 expect(typeof product.name === 'string' && product.name.length > 0).toBeTruthy()
 })

 test('The availability property of the product object should be a boolean', () => {
 expect(typeof product.availability === 'boolean').toBeTruthy()
 })
})