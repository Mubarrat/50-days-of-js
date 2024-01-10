# Currency Tracker

You have write the JavaScript function to display the currency rate for given currecy code from the input.

Your app will make a GET request to the API '[https://api.exchangerate-api.com/v4/latest/USD](https://api.exchangerate-api.com/v4/latest/USD)' to fetch the latest exchange rate for USD. The fetched data will be in JSON format.Your task is to display the conversion rate for the currency entered by the user in the `#currencyInput` field.

> NOTE: The `#currencyInput` will only accept the input if given in capital letters and will only accept if the length of the input is 3 letters. This validation is done using a regular expression added to the `pattern` attribute of the input element

### Steps

1.  Prevent the default behaviour of the form submit event
2.  Get the value from the `#currencyInput` element
3.  Make a fetch request to the given API URL
4.  Verify if the given the currecyCode exists in the `rates` object of the returned response
5.  If the currecyCode exists, add the following string to `#results` div

```
`1 USD = ${currecyRate} ${currecyCode}`
```

6.  If the currecyCode does not exist, then add the following text to `#results` div

```
`${currencyCode} does not exist`
```

> NOTE: The text script will verify your code against the output string, make sure you don't make any typos or mistake while adding the string content to the `#results` div
