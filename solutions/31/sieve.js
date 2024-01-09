//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
	const primes = []
	const isPrime = Array(limit + 1).fill(true)
	isPrime[0] = isPrime[1] = false // 0 and 1 are not prime numbers

	for (let number = 2; number <= limit; number++) {
		if (isPrime[number]) {
			primes.push(number)
			for (
				let multiple = number * number;
				multiple <= limit;
				multiple += number
			) {
				isPrime[multiple] = false
			}
		}
	}

	return primes
}
