console.log('JavaScript Generators Lab')

export function* countUp(limit) {
	for (let x = 0; x < limit; ) yield ++x
}

export const counter = countUp(5)

for (const value of counter) {
	console.log(value)
}
