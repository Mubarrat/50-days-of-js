document
	.getElementById('setStorage')
	.addEventListener(
		'click',
		() =>
			(localStorage['myKey'] =
				document.getElementById('storageKey').value || '')
	)

document
	.getElementById('getStorage')
	.addEventListener(
		'click',
		() =>
			(document.getElementById('output').textContent =
				localStorage['myKey'] || '')
	)
