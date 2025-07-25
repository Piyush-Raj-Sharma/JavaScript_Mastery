// Operators
//  -- Arithmetic, Comaprision, Logical, Assingment, Unary, Ternary

// Arithmetic 
// + - / % * **

// ' + ' performs 2 operations in programming lang 1. Addition  2. Concatination
// ' ** ' performs exponintal operations like 2**3 = 8 (2^3)

// Comparision  // =, ==, ===, <=, >= != 

//Assingment = += -= *= /= %=

// Logical  &&, ||, !

// Unary + - ! typeof ++ --

// -----------------------------

// typeOf -> returns the dataType of the Variables
// typeof NaN -> Number
// typeof null -> Object
// typeof [] -> object 
// typeof object -> object
// typeof function -> function

// -----------------------------------------------

// ifnsanceof -> instanceof is an operator used to check if an object is an instance of a specific constructor or class (i.e., does it inherit from it?).
// const arr = [1, 2, 3];
// console.log(arr instanceof Array);      // true
// console.log(arr instanceof Object);     // true (Array inherits from Object)

// const name = "Piyush";
// console.log(name instanceof String); // false (primitive, not object)
// console.log(new String(name) instanceof String); // true

// 🔍 Under the hood:
// obj instanceof Constructor checks:
// Constructor.prototype.isPrototypeOf(obj)
// It walks up the prototype chain to see if Constructor.prototype is found.
