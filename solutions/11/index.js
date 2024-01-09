/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = (nums) => {
	const n = nums.length
	return (n * (n + 1)) / 2 - nums.reduce((sum, num) => sum + num, 0)
}

// Sample Tests
console.log(missingNumber([3, 0, 1])) // returns 2
console.log(missingNumber([0, 1])) // returns 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // returns 8
