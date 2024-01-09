const findSubstringIndex = (text, sub) =>
	text === '' || sub === '' ? -1 : text.indexOf(sub)

export default findSubstringIndex
