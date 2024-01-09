// Create your sum function here.
export const sum = (...a) => (a ? a.reduce((a, b) => a + b, 0) : 0)

console.log(sum(1, 2, 3, 4, 5)) // returns 15
console.log(sum(2, 342, 54, 2, 51)) // returns 451
console.log(sum(1, 12, 34, 2, 42, 12)) // returns 103
