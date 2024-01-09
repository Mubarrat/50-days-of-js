export const sumOfEvens = (arr) => {
	const filt = arr ? arr.filter((x) => x % 2 == 0) : []
	return filt.length > 0 ? filt.reduce((a, b) => a + b) : 0
}
