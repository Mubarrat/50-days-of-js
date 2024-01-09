/*
 * Step 1: Create 'allPositive' function using array.prototype.every()
 * Step 2: Export 'allPositive' function
 * Step 3: Create 'startsWithCapital' function using array.prototype.every()
 * Step 4: Export 'startsWithCapital' function
 */

export function allPositive(array) {
	return array.every((x) => x > 0)
}

export function startsWithCapital(array) {
	return array.every((x) => x[0] == x[0].toUpperCase())
}
