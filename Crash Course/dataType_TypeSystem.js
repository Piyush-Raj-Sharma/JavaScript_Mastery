// Data TypeS

// Primitive DataTypes

// Strings, Number, boolean, null, undefined, symbol, bigint
// Each variable of this string can contain only single value
// The values are immutable 

// if we make a copy of a variable in another variable, that variable contains 
// its own value 



// What is Symbol in JavaScript?
// Symbol is a primitive data type introduced in ES6.
// Each Symbol() call returns a unique and immutable value, even if you give it the same description.

// ✅ Why use Symbol?
// To create unique property keys for objects (to avoid name collisions).
// To define hidden/internal properties.

// To use well-known symbols like Symbol.iterator, Symbol.toStringTag, etc.

// Create two unique symbols
const key1 = Symbol("userID");
const key2 = Symbol("userID");

// console.log(key1 === key2); // false (always unique)

const user = {
  name: "Piyush",
  [key1]: 101,     // symbol used as a hidden key
};

// console.log(user.name);      // "Piyush"
// console.log(user[key1]);     // 101
// console.log(user[key2]);     // undefined (different symbol)
// console.log(key2);           // symbol(userId)

// -----------------------------------------------

const secret = Symbol("secret");

class BankAccount {
  constructor(balance) {
    this[secret] = balance; // hidden property
  }

  getBalance() {
    return this[secret];
  }
}

const acc = new BankAccount(1000);
// console.log(acc.getBalance());      // 1000
// console.log(acc.secret);            // undefined
// console.log(Object.keys(acc));      // []

// -------------------------------------

let x = 432423n // this is a bigInt  // adding n after a number makes it of bigInt type



// Refrence DataTypes


// ---------------------------------------------

// JS is Dinamically Typed 

// Dynamic Typing means that variables do not have fixed types — their types are determined at runtime based on the value assigned.
// ✅ In JavaScript, the type of a variable can change while the program is running.

// Quriks-----------

// typeof null --> object // the dataType of null is Object
// typeof NaN --> number // dataType of NaN is number
// NaN === NaN --> false  // NaN is not equal to NaN itself
// [] + [] -> "" // array + array give blank string

// 0.1 + 0.5 -> 0.6 but 0.1 + 0.2 -> 0.30000000000001

// Type Coercion (== vs ===)

// Coercion is a type of implicit TypeCasting where one dataType is automatically converted to another dataType 

// applying !! before anything can help us to check whether the no is truthy or falsy
// !!x --> true since x is having the value 432423n  & is truthy



// ---------------------------

// true + false -> return 1
// null + 1 -> returns 1
// 5 + "5" -> returns '55
// !!undefined -> returns false, since undefined is a falsy value   

// --------------------------
// Why NaN is Number 
// js treats NaN as a failed mathematial number operation


// 🔍 Why is NaN considered a Number?
// Because NaN represents the result of a failed or undefined numeric operation.

// 💡 Think of it like this:
// NaN is not “not-a-value,” it’s “not a valid number result.”
// It still belongs to the number type because:
// The operation attempted was numeric.

// console.log(0 / 0);           // NaN
// console.log(Math.sqrt(-1));   // NaN

// 🔍 Better NaN checking:
// Use Number.isNaN() instead of isNaN():
// Number.isNaN(NaN);         // true ✅
// Number.isNaN("hello");     // false ✅

// isNaN("hello");            // true ❌ (performs coercion)