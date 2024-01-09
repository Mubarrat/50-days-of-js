export const capitaliseWord = (word) =>
	word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ''

console.log(capitaliseWord('hello')) // Output: 'Hello'
console.log(capitaliseWord('mom')) // Output: 'Mom'
console.log(capitaliseWord('dAD')) // Output: 'DAD'
