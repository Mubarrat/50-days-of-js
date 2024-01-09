# Local Storage Lab

In this lab, you'll practice using the Web Storage API by creating a simple key-value storage system. You will create two div sections, one for saving data to localStorage and another for retrieving data from it.

1.  First, create a div with id `localStorage-setup`. Inside this div, add an input field with id `storageKey` and a button with id `setStorage`. You'll save the input field's value to localStorage when the button is clicked.
    
2.  Next, bind a click event to the `setStorage` button. When clicked, save the input field's value to localStorage using the key `myKey`.
    
3.  Create another div with id `localStorage-retrieve`. Inside this div, add a div element with id `output` to display the retrieved value and a button with id `getStorage` to retrieve the value from localStorage.
    
4.  Bind a click event to the `getStorage` button. When clicked, retrieve the value from localStorage using the key `myKey` and display it in the `output` element.

> Remember, `localStorage` values are stored as strings. If you want to store complex data types like objects or arrays, you have to convert them into strings using `JSON.stringify()` before storing and parse them back using `JSON.parse()` after retrieving.
