// Example demonstrating the concept of truthy and falsy values in JavaScript

// Case 1: Defining userEmail as a string with a valid email address
const userEmail = "mrSharma@gmail.com"; // This is a truthy value because it is a non-empty string.
// const userEmail = []; // Uncommenting this will also result in "Got user Email" because arrays are truthy values.

// if (userEmail) {
//     console.log("Got user Email"); // Executes if userEmail is truthy
// } else {
//     console.log("Don't have user Email"); // Executes if userEmail is falsy
// }

// Explanation of falsy values in JavaScript:
// Falsy values are those that are considered equivalent to `false` when evaluated in a boolean context.
// Examples of falsy values:
// 1. `false` - The boolean false
// 2. `0` - The number zero
// 3. `-0` - Negative zero
// 4. `BigInt(0n)` - BigInt zero
// 5. `""` - An empty string
// 6. `null` - Represents no value
// 7. `undefined` - A variable declared but not assigned any value
// 8. `NaN` - Not-a-Number

// Explanation of truthy values in JavaScript:
// Truthy values are all values that are not falsy. Some common examples include:
// 1. `"0"` - A string containing zero is truthy because it is non-empty.
// 2. `"false"` - A string containing "false" is truthy because it is non-empty.
// 3. `" "` - A string containing only whitespace is truthy because it is non-empty.
// 4. `[]` - An empty array is truthy.
// 5. `{}` - An empty object is truthy.
// 6. `function() {}` - Any function is truthy.


const emptyArray = []; // Declares an empty array

// Checking if the array is empty using its length property
if (emptyArray.length === 0) {
    console.log("Array is EMPTY & its Truthy"); 
    // If the array has no elements, its length is 0, but the array itself is still a truthy value.
} else {
    console.log("It's Falsy");
}


const emptyObj = {}; // Declares an empty object

// Checking if the object is empty using Object.keys() to retrieve an array of the object's keys
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is EMPTY & its Truthy");
    // If the object has no keys, its length is 0. The object itself is still a truthy value.
} else {
    console.log("It's Falsy");
}




// Nullish Coalescing Operator (??): 

// It is used to return the first value that is NOT null or undefined.
// It evaluates expressions from left to right and stops when it finds a value 
// that is NOT null or undefined. 

// Example 1: Basic Usage
let val;

// val = 5 ?? 10; 
// Returns 5 because it's not null or undefined
// console.log(val); // Output: 5

// val = null ?? 10; 
// Returns 10 because the first value is null
// console.log(val); // Output: 10

val = undefined ?? 15; 
// Returns 15 because the first value is undefined
console.log(val); // Output: 15

// Example 2: Chaining with multiple values
let val1;

// val1 = null ?? null ?? 30; 
// Returns 30, the first value that is not null or undefined
// console.log(val1); // Output: 30

val1 = null ?? 10 ?? 20; 
// Returns 10, as it's the first value in the chain that is not null or undefined
console.log(val1); // Output: 10

// Example 3: Comparison with || (Logical OR)
let val2;

// Using ||
val2 = 0 || 10; 
// Returns 10 because 0 is treated as falsy in ||
console.log(val2); // Output: 10

// Using ??
val2 = 0 ?? 10; 
// Returns 0 because ?? only checks for null and undefined, and 0 is a valid value
console.log(val2); // Output: 0

// Use Cases of ??
// 1. Providing Default Values
let username = null;
// If username is null or undefined, it defaults to "Guest"
let displayName = username ?? "Guest"; 
console.log(displayName); // Output: Guest

// 2. Avoid Overwriting Falsy Values
let count = 0;
// Keeps 0 because it's a valid number and not null or undefined
let finalCount = count ?? 10; 
console.log(finalCount); // Output: 0

