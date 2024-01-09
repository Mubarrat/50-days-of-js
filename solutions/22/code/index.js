console.log('JavaScript Date Object Lab')

//Create a new Date object called `currentDate` and log the current date and time
const currentDate = new Date()
console.log(currentDate)

//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
const formatDate = (date) =>
	`${String(date.getDate()).padStart(2, '0')}-${String(
		date.getMonth() + 1
	).padStart(2, '0')}-${date.getFullYear()}`

//Create a function `getDayName` that takes a Date object and returns the day of the week as a string
const getDayName = (date) =>
	[
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	][date.getDay()]

//Export the `formatDate` function using ESM syntax
export { formatDate }
