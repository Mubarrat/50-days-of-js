export const sumOfEvens = (arr) =>
	(arr ? arr.filter((x) => x % 2 == 0) : []).reduce((a, b) => a + b, 0)
