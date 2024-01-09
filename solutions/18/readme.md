# JavaScript Objects Lab

In this lab, you will create a JavaScript object named 'product' with specific properties. The experience will strengthen your understanding of key JavaScript concepts, such as objects, property keys and values, and various data types (numbers, strings, and booleans). This straightforward yet essential task is a foundational lesson for any JavaScript learner.

### Concepts

Creating JavaScript objects and defining property keys and their associated values is a fundamental skill in JavaScript programming. This lab focuses on the understanding of the following concepts:

*   JavaScript Objects: A collection of named properties.
*   Property Keys: Can be a string or a symbol.
*   Property Values: Can be various types in JavaScript, including numbers, strings, and booleans.
*   Exporting Objects: A common method to allow other code to use the object.

### Steps

Here are the steps you need to complete this lab:

1.  Start by declaring a constant named 'product' and assign to it an object using curly braces {}.
2.  Inside the 'product' object, you need to define four properties: 'id', 'name', 'price', and 'availability'.
    *   Recall that properties of an object consist of key-value pairs, with the key being the property name and the value being the property value.
3.  Assign the 'id' and 'price' properties with a numeric value.
4.  Set the 'name' property with a non-empty string.
5.  The 'availability' property should be assigned a boolean value - 'true' or 'false'.
6.  Lastly, **export** the 'product' object for it to be used elsewhere. This lab uses ESM Syntax.

Your aim should not be just completing the lab, but also understanding why and how it's done. Reflect intermittently about what each step entails!

### Examples

A quick example can provide context. Here is a simple object creation in JavaScript.

```javascript
const exampleObject = {
    property1: "I am a string",
    property2: 123,
    property3: true
}
```

In this example, 'property1' is a string, 'property2' is a number, and 'property3' is a boolean. The 'exampleObject' demonstrates the basics of creating an object and adding different types of properties to it.

### Hints

*   Ensure the property keys in your 'product' object match exactly with the ones mentioned in the challenges i.e., they need to be 'id', 'name', 'price', and 'availability'. JavaScript is case-sensitive!
*   When exporting the 'product' object, keep in mind that you are not executing it. So, it should not be followed by parentheses.
*   Remember that in JavaScript, constant variables need to be assigned a value when they are declared.
