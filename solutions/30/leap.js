//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) =>
	year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0
