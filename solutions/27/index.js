export const findCharacter = (str) => {
	const charCounts = {}
	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1
	}
	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		if (charCounts[char] === 1)
			return char
	}
	return null
}
