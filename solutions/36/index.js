function nthlargest(arr, highest) {
	arr.sort((a, b) => b - a)
	return arr[highest - 1]
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652]
const highest = 4

console.log(nthlargest(arr, highest))
