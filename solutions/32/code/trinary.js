export class Trinary {
	constructor(trinaryNumber) {
		this.trinaryNumber = trinaryNumber
	}

	toDecimal() {
		// Validate input: check if the string contains only valid trinary digits (0, 1, or 2)
		const isValidTrinary = /^[0-2]+$/.test(this.trinaryNumber)

		if (!isValidTrinary) {
			return 0 // Return 0 for invalid trinary input
		}

		// Convert the trinary number to decimal
		let decimalNumber = 0
		const trinaryArray = this.trinaryNumber.split('').reverse() // Reverse the string to start from the rightmost digit

		for (let i = 0; i < trinaryArray.length; i++) {
			const digit = parseInt(trinaryArray[i], 10)
			decimalNumber += digit * Math.pow(3, i)
		}

		return decimalNumber
	}
}

// Sample Test Cases
const firstNumber = new Trinary('102012')
console.log(firstNumber.toDecimal())

const secondNumber = new Trinary('1211112')
console.log(secondNumber.toDecimal())
