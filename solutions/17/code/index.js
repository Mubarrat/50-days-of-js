// myMap function
const myMap = (array, callback) => array.map(callback)

// myFilter function
const myFilter = (array, callback) => array.filter(callback)

// myReduce function
const myReduce = (array, callback, initialValue) =>
	initialValue !== undefined
		? array.reduce(callback, initialValue)
		: array.reduce(callback)

// Exporting the functions using ESM syntax
export { myMap, myFilter, myReduce }
