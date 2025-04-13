const coding = ['Java', 'JavaScript', 'Python', 'Cpp', 'Kotlin', 'Swift'];

// For-Each Loop 

// First example using an anonymous function (normal function) as the callback
coding.forEach(function(item) { 
    // The function we pass to forEach is called a "callback function".
    // A callback function is simply a function that is passed as an argument to another function.
    // In this case, we are passing the anonymous function to forEach, 
    // which gets called for each element in the array.

    // 'item' is the current element in the array that forEach is processing. 
    // For the first iteration, 'item' will be 'Java', for the second it will be 'JavaScript', and so on.
    // console.log(`used normal function to: ${item}`); // Log the element from the array
});

// Second example using an arrow function as the callback
coding.forEach((item) => {  
    // Here, we're using an arrow function as the callback function.
    // The callback function will be invoked for each element of the array, 
    // just like in the previous example with the normal function.
    
    // console.log(`Used Arrow Function to: ${item}`); // Log the element from the array
});

// Function declaration (normal function) as the callback function
const programming = function (item) {
    // This is a named function. We are passing this function as a callback to forEach.
    // A callback function is simply a function that will be executed when the forEach method runs.
    
    // console.log(`using any other function declared before as the callback function in the For-Each loop for the Arrays: ${item}`);
}

// Arrow function declaration as the callback function
const language = (item) => {
    // This is an arrow function, and it is also passed as a callback function to forEach.
    
    // console.log(`Using arrow function declared before as the callback function: ${item}`);
}

// Here, we're calling forEach and passing the function references (not calling them).
// We just pass the reference to the function, not the result of calling the function.
coding.forEach(programming);  // Passes the reference of the 'programming' function to forEach
coding.forEach(language);  // Passes the reference of the 'language' function to forEach

// The forEach method also provides access to the index of the element and the entire array, 
// in addition to the element itself. So, the callback function can take up to three parameters: 
// - The current element being processed
// - The index of the element
// - The array itself

coding.forEach((item, index, arr) => {
    // The callback function receives three parameters:
    // 'item' - the current element of the array
    // 'index' - the index of the current element in the array
    // 'arr' - the original array

    // Log the item, its index, and the entire array
    // console.log(`item: ${item}, index: ${index}, Array: ${arr}`);
});



const results = [
    {
        semester: 1,
        SGPA: 8.23
    },
    {
        semester: 2,
        SGPA: 8.58
    },
    {
        semester: 3,
        SGPA: 7.05
    },
    {
        semester: 4,
        SGPA: 6.86
    }
];

// Using the forEach loop to iterate over the array 'results'
results.forEach((items) => {
    // Each 'items' is an object from the array.
    // 'items.semester' accesses the semester number in the current object
    // 'items.SGPA' accesses the SGPA value in the current object.
    console.log(`In Semester ${items.semester}, I scored ${items.SGPA} CGPA`);
});
