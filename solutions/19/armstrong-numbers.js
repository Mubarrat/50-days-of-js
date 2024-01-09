export const isArmstrongNumber = (number) =>
	number ==
	String(number)
		.split('')
		.map((x) => Math.pow(Number(x), String(number).length))
		.reduce((a, b) => a + b)
