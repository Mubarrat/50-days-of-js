export const fetchData = () =>
	new Promise((resolve) => setTimeout(() => resolve('data fetched!'), 1000))

export const processData = (data) =>
	new Promise((resolve) =>
		setTimeout(() => resolve(data + ' - processed!'), 1000)
	)

const main = async () => {
	try {
		console.log(await processData(await fetchData()))
	} catch (err) {
		console.error('Error Occurred:', err)
	}
}

main()
