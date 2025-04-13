// Immediately Invoked Function Expressions (IIFE)

// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
// It’s useful for creating a local scope for variables and avoiding polluting the global scope.
// An IIFE is defined by wrapping the function in parentheses and then immediately invoking it with an additional pair of parentheses.

(function food() {
    console.log(`My favourite food is Paneer Wrap`);
})(); // Terminates the food function using ";" explicitly, to avoid errors when chaining multiple IIFEs
// This is an IIFE - First () wraps the function declaration & Second () invokes the function


// IIFE with a parameter
(function vegFood(vegItem) {
    console.log(`My favourite Veg Food is ${vegItem}`);
})("Chilli Manchurian");
// This IIFE accepts a parameter "vegItem". The argument "Chilli Manchurian" is passed in the SECOND () when invoking the function.


// ---> To run multiple IIFE functions in sequence, terminate each function with ";"

// IIFE with Arrow Function syntax
        // --> Named IIFE - the IIFE function with a name
(snacks = () => {
    console.log(`My favourite Snack is Samosa`);
})(); // Name 'snacks' is assigned to the arrow function, making it reusable
// Runs immediately after definition


(nonVegDish = (item) => {
    console.log(`My favourite Non-Veg food Item is ${item}`);
})("Chicken"); // Accepts "item" as a parameter and passes "Chicken" as an argument when invoking the IIFE


        // --> Unnamed IIFE - the IIFE function without a name
(() => {
    console.log(`Hello World`);
})(); // Without a name, it’s an anonymous function that executes immediately

((drink) => {
    console.log(`My favourite Drink is ${drink}`);
})("Mojito"); // This IIFE is also unnamed but takes a parameter "drink" and passes "Mojito" as an argument
