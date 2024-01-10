# Iteration Protocols in JavaScript

In this lab, you'll learn about iteration protocols in JavaScript by creating an iterable and iterator for even numbers. Iteration protocols are a set of conventions used in JavaScript to iterate over a collection.

The iterable protocol allows JavaScript objects to define or customize their iteration behavior. It requires the object to have a `[Symbol.iterator]` method.

The iterator protocol defines a standard way to produce a sequence of values. It requires an object to have a `next` method that should return an object with two properties: `value` (the next value in the sequence) and `done` (a boolean indicating if the sequence is complete).
