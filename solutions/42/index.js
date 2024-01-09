export const customAdd = (a, b) =>
	typeof a !== typeof b
		? (() => {
				throw new Error('Arguments should be of the same type')
		  })()
		: typeof a === 'boolean'
		? +a + +b
		: a + b
