const curry = (fn) => {
	const curried = (...args) =>
		args.length >= fn.length
			? fn(...args)
			: (...moreArgs) => curried(...args, ...moreArgs)
	return curried
}

export default curry
