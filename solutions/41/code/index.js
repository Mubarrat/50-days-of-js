export const reverseString = (str) => str.split('').reverse().join('')

export const capitalizeFirstLetters = (str) =>
	str.replace(/\b\w/g, (char) => char.toUpperCase())

export const findLongestWord = (str) =>
	str
		.split(' ')
		.reduce(
			(longest, current) =>
				current.length > longest.length ? current : longest,
			''
		)

export const wordCount = (str) => str.split(' ').length
