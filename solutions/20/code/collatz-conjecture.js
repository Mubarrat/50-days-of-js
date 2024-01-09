//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
	if (Number.isInteger(Number(n))) {
		if (n <= 0) throw new Error('Only positive numbers are allowed')
		let counter = 0
		while (n !== 1) {
			if (n % 2 === 0) {
				n = n / 2
				counter++
			} else {
				n = n * 3 + 1
				counter++
			}
			console.log(n)
		}
		return counter
	}
	throw new Error('Only numbers are allowed')
}
