export const sumOfThirds = (arr) =>
	(arr ? arr.filter((_, i) => i % 3 == 0) : []).reduce((a, b) => a + b, 0)
