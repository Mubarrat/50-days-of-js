/**
 * Returns a currency value if the given currency code exists
 * @param {FormDataEvent} event - form submit event
 */
async function getCurrency(event) {
	event.preventDefault()

	let currencyCode = document.querySelector('#currencyInput').value

	fetch('https://api.exchangerate-api.com/v4/latest/USD')
		.then((response) => response.json())
		.then((data) => {
			if (data.rates[currencyCode]) {
				displayRate(currencyCode, data.rates[currencyCode])
			} else {
				displayError(`Currency code does not exist`)
			}
		})
		.catch((error) => console.error('Error fetching data:', error))
}

function displayRate(code, rate) {
	document.querySelector(
		'#results'
	).textContent = `1 USD is equal to ${rate} ${code}`
}

function displayError(message) {
	document.querySelector('#results').textContent = message
}
