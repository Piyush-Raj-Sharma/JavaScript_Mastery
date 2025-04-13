// const a = 10;
// let b = 20;
// var c = 30;

// console.log(a); // Outputs: 10 (Accessible because 'const' is block-scoped but this declaration is in the global scope)
// console.log(b); // Outputs: 20 (Accessible because 'let' is block-scoped but this declaration is in the global scope)
// console.log(c); // Outputs: 30 (Accessible because 'var' is function-scoped or globally scoped)

// If block to test scope behavior
if (true) {
    const a = 10;  // Block-scoped, accessible only within this 'if' block
    let b = 20;    // Block-scoped, accessible only within this 'if' block
    var c = 30;    // Function-scoped, accessible outside the 'if' block as well
}
// console.log(a); // Error: 'a' is not accessible outside the 'if' block because it's block-scoped
// console.log(b); // Error: 'b' is not accessible outside the 'if' block because it's block-scoped
// console.log(c); // Outputs: 30, 'c' is accessible outside the 'if' block because 'var' is function-scoped and not block-scoped


var c = 300; // This re-declares 'c' globally

if (true) {
    var c = 30; // Since 'var' is function-scoped, this overwrites the global 'c'
}
// console.log(c); // Outputs: 30, because the 'var c = 30' inside the 'if' block overwrites the global 'c' (var doesn't have block scope)



function one() {
    const userName = "Mr_Sharma"; // userName is declared inside the function 'one'

    function two() {
        const website = "www.blogmafiya.com"; // website is declared inside the function 'two'
        // Inner function 'two' can access 'userName' because of lexical scoping
        console.log(`${userName} website link is ${website}`); 
        // Output: "Mr_Sharma website link is www.blogmafiya.com"
    }
    // console.log(website); 
    // Uncommenting this will result in an error, as 'website' is block-scoped and only accessible within 'two'.
    
    two(); // Call the inner function 'two'
}
// one(); // Call the outer function 'one'


if (true) {
    const userName = "Mr_Sharma"; // 'userName' is block-scoped within this 'if' block

    if (userName === "Mr_Sharma") {
        const website = " www.blogmafiya.com"; // 'website' is block-scoped within this inner 'if' block
        console.log(userName + website); // Executes perfectly because 'userName' and 'website' are accessible in this block
    }

    console.log(website); // Uncommenting this will result in an error because 'website' is block-scoped and can't be accessed outside the inner 'if' block
}

console.log(userName); // This will result in an error as 'userName' is also block-scoped and not accessible outside the outer 'if' block


// +++++++++++++++++++++++++++++++++++++ INTRESTING +++++++++++++++++++++++++++++++++++++++++++++

// Function Declaration
addOne(7); // It works fine here, calling before the function initialization because function declarations are hoisted.
function addOne(num) {
    return num + 1;
}
addOne(5); // It works fine, calling after the function initialization.

// Function Expression (using const)
addTwo(7); // It returns ERROR, calling before the function initialization: "Cannot access 'addTwo' before initialization."
const addTwo = function (num) {
    return num + 2;
};
addTwo(5); // It works fine, calling after the function initialization.

// Explanation:
// 1. Function Declarations (like `addOne`) are fully hoisted to the top of the scope, meaning they can be called even before their actual definition.
// 2. Function Expressions (like `addTwo` using `const`) are not fully hoisted. The variable `addTwo` is hoisted, but the function definition is not. 
//    Therefore, calling `addTwo` before its initialization results in an error.
//    After the function expression is initialized, it works perfectly fine when called.
