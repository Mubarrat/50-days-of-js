function convertTo24HrsFormat(time) {
	const newTime = time.slice(0, time.length - 2).split(':')
	let hours = newTime[0]
	const minutes = newTime[1]
	const amPm = time.substr(time.length - 2)
	if (amPm === 'AM' && hours === '12') {
		hours = '00'
	} else if (amPm === 'PM' && hours !== '12') {
		hours = `${parseInt(hours) + 12}`
	}
	return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`
}

console.log(`Converted time: ${convertTo24HrsFormat('1:45PM')}`) // Output should be '13:45'
console.log(`Converted time: ${convertTo24HrsFormat('03:45PM')}`) // Output should be '15:45'
