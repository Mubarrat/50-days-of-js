function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	return Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart
}

console.log(randomNumberGeneratorInRange(10, 50))
console.log(randomNumberGeneratorInRange(100, 200))
