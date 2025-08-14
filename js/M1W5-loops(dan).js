"use strict";

/***   LOOP RECAP   ***/
let fruits = ["apple", "banana", "mango", "papaya", "grape"];

// Our friendly traditional for loop
// We're simply printing out each element of our fruits array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Lets see the above with a for-of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// What happens if we use for-in rather than for-of?
// It's going to log the indices this time rather than the values of the array
for (let fruit in fruits) {
    console.log(fruit);
}



const person = {
    name: "Dan",
    hobby: "Programming",
    age: 34,
};

// Let's use for-of to iterate through the properties of `person`
// Aaaaand we get an error. This is because objects are NOT iterable by default
for (let property of person) {
    console.log(property);
}

// However we can use for-in to iterate over the properties (keys) of an object.
for (let property in person) {
    console.log(property);
}

/*

You saw some examples of methods from the Object interface in class, so I'm going to leave this as a challenge for you to play with:

Use the MDN docs to read about the following methods and experiment with them:

Object.entries()
Object.keys()
Object.values()

Attempt to print out both the key and the value of person or an object literal you've created in a loop

*/





/***  COMPOUND OPERATORS  ***/

let numbers = [1, 2, 3, 4, 5];

// Let's start simple by using a traditonal for loop
// to output the value of each index in numbers
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// To make compound operators more clear by not using them
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + 1;    // Hey! Let's take the value inside the numbers array at this index,
                                    // add 1 to it, and assign it to the value in the array at the same index
}

console.log(numbers);


// The same as above except using a compound operator
for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 1;    // Hey! Let's take the value inside the numbers array at this index,
                        // add 1 to it, and assign it to the value in the array at the same index
}

console.log(numbers);


// Compound operator for squaring each number in the array
for (let i = 0; i < numbers.length; i++) {
    numbers[i] **= 2; // Same as: numbers[i] = numbers[i] ** 2
}

console.log(numbers);


// Using a compound operator for squaring a number is a little
// hard to read. Let's make it more readable by using the Math object
// which contains common mathematical operations.
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.pow(numbers[i], 2);
}

console.log(numbers);


/*

As optional practice, explore the Math object's methods and try using different compound operators like subtraction, division, and multiplication.

*/






