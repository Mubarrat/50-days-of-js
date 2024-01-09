const sayNumberInEnglish = (n) => {
	if (n < 0 || n > 999_999_999_999) {
		return 'Out of range'
	}
	const numbers = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten'
	]
	const teens = [
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	]
	const tens = [
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety'
	]
	const scales = ['', 'thousand', 'million', 'billion', 'trillion']
	const result = []

	const numberToWords = (num) => {
		if (num === 0) {
			return ''
		}
		let str = ''
		if (num < 11) {
			str = numbers[num]
		} else if (num < 20) {
			str = teens[num - 11]
		} else if (num < 100) {
			const tensPlace = Math.floor(num / 10)
			const onesPlace = num % 10
			str = tens[tensPlace - 2]
			if (onesPlace !== 0) {
				str += '-' + numbers[onesPlace]
			}
		} else {
			str =
				numbers[Math.floor(num / 100)] +
				' hundred ' +
				numberToWords(num % 100)
		}
		return str.trim()
	}

	const numberToString = n.toString().split('').reverse()

	for (let i = 0; i < numberToString.length; i += 3) {
		const chunk = parseInt(
			numberToString
				.slice(i, i + 3)
				.reverse()
				.join('')
		)
		if (chunk !== 0) {
			result.unshift(
				(numberToWords(chunk) + ' ' + scales[Math.floor(i / 3)]).trim()
			)
		}
	}

	return result.join(' ').trim() || 'zero'
}

console.log(`8811730 in English is: ${sayNumberInEnglish(8811730)}`)
