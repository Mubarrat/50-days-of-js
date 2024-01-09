/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) =>
	convertFromBase10(convertToBase10(digits, baseA), baseB)

// Function to convert digits from baseA to base10 (decimal)
const convertToBase10 = (digits, baseA) => {
	let result = 0
	const len = digits.length
	for (let i = 0; i < len; i++)
		result += digits[i] * Math.pow(baseA, len - 1 - i)
	return result
}

// Function to convert a number from base10 to baseB
const convertFromBase10 = (num, baseB) => {
	const converted = []
	while (num > 0) {
		converted.unshift(num % baseB)
		num = Math.floor(num / baseB)
	}
	return converted
}
