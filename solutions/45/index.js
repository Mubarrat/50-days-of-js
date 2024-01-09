const myIterable = {
	*[Symbol.iterator]() {
		let current = 2,
			count = 0
		while (count < 5) {
			yield current
			current += 2
			count++
		}
	}
}

export default myIterable
