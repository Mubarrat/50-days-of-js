export const findTheDistanceValue = (arr1, arr2, d, i = 0) =>
	i >= arr1.length
		? 0
		: (arr2.some((element) => Math.abs(arr1[i] - element) <= d) ? 0 : 1) +
		  findTheDistanceValue(arr1, arr2, d, i + 1)

// Sample Tests (use run button to see logs)
console.log(findTheDistanceValue([4, 5, 8], [1, 2, 3], 3)) // Expected Output: 1
console.log(findTheDistanceValue([1, 4, 5, 6], [10, 12, 15], 5)) // Expected Output: 2
console.log(findTheDistanceValue([2, 3, 4], [3, 4, 5], 1)) // Expected Output: 0
