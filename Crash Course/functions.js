// function statement
function fn() {}

// function Expression
let fnE = function () {};

//Fat arrow fanction
let arwfn = () => {};

//  --------------------------------

function add(v1, v2) {
  // no arguments recived so the value of v1 & v2 is undefined
  console.log(v1 + v2); // when any non number tries to perform some menthematical operations it return NaN
  // this will return NaN
}
add(); //we are not passing any arguments although its required

// --------------------------------

function rest(...val) {
  console.log(val); // returns an array with all the argumets in it
}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //when we pass multiple values as arguments to the function, then we need to create multiple parameters too
//to prevent from this we use rest operatior (...Val) these 3 dots are the rest operators, which packs all the arguments in form of
// a array in a single variable in the paramerter

function rest2(a, b, c, ...val) {
  // first 3 values arguments will be stored in a, b , c and rest will be in rest
  console.log(a, b, c, val); // avl will be an array
}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ---------------------------------------------

// When ... are used in funcation parameter its is acts as the rest Operator (packs the values in the array), but
// When ... are used inside an array or an object it acts as the spread operator (removes the values from the array)

// -------------------------------------------------------

// First Class Functions / First class citizens-> fuctions can be treated as values (passing a function as an argument to another function and more)

// HIgher Order Functions -> Functions that ACCEPTS or RETURNS another function

function abcd() {
  return function () {
    console.log("hello");
  };
}

abcd()(); // first () is used to call abcd function, and the second () is used to call the returned function by abcd

// ----------------------------------------------

// Pure VS IMpure Functions

// 🔹 What is a Pure Function in JavaScript?
// A pure function is a function that:
// ✅ Always produces the same output for the same input
// ✅ Does not modify or rely on external/global state (no side effects)
// 📌 It does NOT mutate global variables, the DOM, files, or databases.

let a = 12;

// ✅ Pure Function Example 1
function hey() {
  // Pure, because it does not modify any external value.
  console.log("hello"); // Technically a side effect (console), but harmless in most cases
}

// ✅ Pure Function Example 2
function add(a, b) {
  // Pure function: uses only its parameters and returns a result
  return a + b;
}
console.log(add(2, 3)); // 5 — Always the same output for the same input


// IMpure Function
function hey2() {
  // ❌ Impure function: it alters external/global state
  a++; // modifies global variable
  console.log(a); // side effect (console output)
}

// -----------------------------------------------------------

// CLOSURES -> function that returns another function, and the function which is returned must be using any variable of the parent function

function Closure(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

// Lexical Scoping means:
// 👉 Where you write your code (physically) decides what variables you can access.

// In other words:
// ✅ Inner functions can use variables from the outer functions where they are written.

// ------------------------------------------

// IIFE - Immediately Invoked Function Expression
 
(function(){
console.log((10));
})() 

// ------------------------------------------

// Hoisting is supported by the Function Statement 
    // NOt with the Function Expression -> will give refrence error -> Cannot access 'fnExpression' before initialization
    // fnExpression();
    let fnExpression = () =>{
        console.log("Hey Im Hoisted Function Expression");
    }

// ---------------------------------------------------

function f(){
    // return // afunction who is returning nothing returns undefined 
}
console.log(f()); // -> returns undefined

// --------------------------------------------------------


