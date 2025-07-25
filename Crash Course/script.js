//  a = 12 // this way also we can declare a variable without var, let, const
//  console.log(a);
 
//  var x; // declaration 
//  x = 10 // initialization


 var y = 10; // declared and initialized
 var y = 15; // we can again declare the variable with the sam ename without getting the error
// but this will give error with let & const

// when decalring a variable with var, the variable will be added to the window, but not with const & let

// SCOPE (global, block, functional)
// var is functional Scoped, and can be used anywhere in the function ()
// let and const are block scoped, can only be used inside {}

 if(true) {
    let hey = "hello"
 }
//  console.log(hey); // gives refrence error - since Let/const are blocked scoped
 
 function hello() {
    var imVarInFunction = "Im var inside Function" // this can't be accessed outside function
 }
//  console.log(imVarInFunction); // refrence error: imVarInFunction is not defined

//Reassingment
let xx = 10
xx = 20 // we can re assing variables in var, let, const

//ReDeclare

var yy = 20
var yy = 10 // re Declaration of the var variable yy, gives no error, because redeclaration is supported by var in js

let letY = 20
// let letY = 30 //gives error, since let & const does not support redclaration


// TDZ - Temporal Dead Zone

// its the part of the code where the variable is access without being initialized 

// console.log(c); // variable is being accessed - >  ReferenceError: Cannot access 'c' before initialization

// this reagion is TDZ until the initialization
// The scope or the area between the Declaration & the initialization of a variable is known as TDZ

let c = 10 ;

// here the let c is being hoisted and the declaration part is moving above the usage part, - let c = undefined
// but until initialization is not before the usage it will give error
// deleclarations are hoisted but initialization are not


// var -> hoisted -> undefined
// let -> hoisted -> refrence error
// const -> hoisted -> refrence error


// Object.freeze  (obj) 
// 🔒 You can no longer:
// Add new properties
// Remove existing properties
// Change existing property values
// Reconfigure property descriptors (e.g. make them writable again)
// Basically, it makes the object immutable (unchangeable) at the top level.


// let a = 10;  
// {
//    let a = 20;
//    console.log(a); // since there is a variable named a inside the block scope then, a = 20 will be accessed in side the block scope first 
//    //if not present in the block scope then in the global scope will be searched for
// }
// console.log(a);


// var a = 10;  
// {
//    var a = 20;
//    console.log(a); // this will return 20
// }
// console.log(a); // this will also return 20 since var is not block scoped & supports reDeclaration 
// so a has been reDeclared with the value 20 in the Block scope


// const a = 10 
// console.log(a);
// a = 20; // gives TYPE ERROR - const cannotr be reassinged
// console.log(a);
