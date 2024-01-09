export function getMiddleValue(arr) {
	arr.sort((a, b) => a - b)
	return arr.length % 2 === 0
		? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
		: arr[Math.floor(arr.length / 2)]
}

// Sample Test Cases
const numbers1 = [5, 3, 8, 4, 2]
const numbers2 = [40, 20, 60, 80, 50, 30]

console.log(getMiddleValue(numbers1)) // Expected Output: 4
console.log(getMiddleValue(numbers2)) // Expected Output: 45
