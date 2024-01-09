export const removeFalsy = (arr) =>
	arr && (arr.length > 0 ? arr.filter((x) => x) : [])
