// Function: sayMyName
// This function prints each letter of the name "Piyush" individually to the console.
function sayMyName(){
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
// sayMyName(); // Uncomment this to run the function and print the name.

// Function: addTwoNumbers
// This function takes two numbers as arguments, adds them, and prints the result to the console.
function addTwoNumbers(number1, number2){
    console.log(number1 + number2); // Prints the sum of number1 and number2
}

// addTwoNumbers(); // If no arguments are passed, the result will be NaN (Not a Number).
// const result = addTwoNumbers(5, 4); // Even though the sum is printed, the function doesn't return anything.
// console.log("Result: ", result); // Outputs 'undefined' since the function has no return statement.

// Function: logInInfo
// This function takes a 'username' as an argument and returns a message.
// However, the function does not print anything unless explicitly logged.
function logInInfo(username){
    return `${username} just logged in to the system!!`; // Returns a formatted string
}

// Calling logInInfo without printing will not output anything to the console.
// logInInfo(); // Nothing is printed

// This will print the returned value from the logInInfo function to the console.
// console.log(logInInfo("Mr_Sharma")); // Outputs: "Mr_Sharma just logged in to the system!!"

// If no argument is passed to logInInfo, 'username' will be 'undefined'.
// console.log(logInInfo()); // Outputs: "undefined just logged in to the system!!"


// Function: isLoggedIn
// This function checks if a 'username' is provided. If not, it prompts the user to enter the username.
// Otherwise, it returns a message indicating the user has logged in.
function isLoggedIn(username) {
    if (!username) { // Checks if 'username' is falsy (empty, undefined, etc.)
        return `Enter the Username`; // If no username is provided, return this message.
    }
    return `${username} just logged into their account!!`; // If username is provided, return the success message.
}

// console.log(isLoggedIn("Piyush")); // Outputs: "Piyush just logged into their account!!"
// console.log(isLoggedIn()); // Outputs: "Enter the Username" because no username is passed.

// Function: confirmTicket
// This function checks if a PNR number is provided. If not, it uses a default PNR number (12345678).
function confirmTicket(PNR = 12345678) { // 'PNR' is given a default value of 12345678
    if (!PNR) { // This condition is redundant here because PNR already has a default value.
        return `Please Enter your PNR number!!`; // If PNR is falsy (undefined or null), return this message.
    }
    return `${PNR} is successfully confirmed!`; // Otherwise, return the confirmation message.
}

// console.log(confirmTicket(952333)); // Outputs: "952333 is successfully confirmed!"
// console.log(confirmTicket()); // Outputs: "12345678 is successfully confirmed!" (default PNR)



// Function: Cart
// This function can only accept a single argument, limiting its flexibility for a shopping cart scenario where multiple items (arguments) might be passed.
function Cart(num) {
    return num;
}
// console.log(Cart(50)); 
// Outputs: 50
// In a real-world shopping cart, we might need to handle multiple items, but this function can only handle one argument.


// Function: calculateCart
// The rest operator ('...num') allows this function to handle any number of arguments and store them in an array.
function calculateCart(...num) { 
    return num; // 'num' will be an array of all arguments passed to the function.
}
// console.log(calculateCart(50, 78, 99, 80, 100)); 
// Outputs: [50, 78, 99, 80, 100] 
// By using the rest operator, the function can accept any number of arguments and manage them as an array.


// Function: sumCart //IMPORTANT INTERVIEW QUESTION
// In this function, the first two arguments will be assigned to 'var1' and 'var2', 
// while the remaining arguments will be captured in the 'num' array using the rest operator.
function sumCart(var1, var2, ...num) { 
    console.log(var1);  // Outputs the first argument
    console.log(var2);  // Outputs the second argument
    console.log(num);   // Outputs the remaining arguments as an array
}
// sumCart(55, 60, 99, 550, 2500, 250); 
// Outputs:
// 55      (var1)
// 60      (var2)
// [99, 550, 2500, 250]  (rest of the arguments stored in 'num' array)



// Define an object 'item' with two properties: 'itemName' and 'price'
const item = {
    itemName: "Laptop", // Name of the item
    price: 50000        // Price of the item
}

// Function: handleObject
// This function accepts an object as an argument and logs a message using the object's properties.
function handleObject(anyObject) {
    // Template literals are used here to include the object's properties directly in the string.
    console.log(`The item: ${anyObject.itemName} is to be sold at the price of ${anyObject.price}`);
}

// Call the function 'handleObject' and pass the 'item' object.
handleObject(item);
// Output: The item: Laptop is to be sold at the price of 50000
