export const capitaliseAllWords = (input) => {
	return input.length > 0
		? input
				.split(' ')
				.map((x) => x[0].toUpperCase() + x.slice(1))
				.join(' ')
		: ''
}
