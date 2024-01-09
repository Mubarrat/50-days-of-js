export const sumOfThirds = (arr) => {
	const filt = arr ? arr.filter((_, i) => i % 3 == 0) : []
	return filt.length > 0 ? filt.reduce((a, b) => a + b) : 0
}
