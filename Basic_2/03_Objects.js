// There are two ways to declare an Object: 
// 1- Singlenton Method (Constructor)
    // Object.create()


    // 2- Object Literals

const JsUser = {
    name: "Piyush",
    age: 23,
    "Type of Engineer": "Computer Science", //Can be accesed by Objects[''] method only
    email: 'mrshamra@google.com',
    location: "Chandigarh",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Thrusday", "Saturday"],
}

// Accessing the elements of an object:
// console.log(JsUser['name']); // Used because object keys are treated as strings. If a key is a string with spaces or special characters, or if it's a variable, use this syntax.
// console.log(JsUser.name);    // This works for keys that are valid identifiers (no spaces or special characters).
// console.log(JsUser['Type of Engineer']); //This cannot be accessed by object.key

JsUser.location = "Mohali" //The value of the Location of JsUser object get changed/mainupulated
// console.log(JsUser.location);

Object.freeze(JsUser); // Freezes the entire object, preventing any modifications. It cannot be applied on a particular attribute eg- Object.freeze(JsUser.name)
JsUser.name = "Piyush Raj Sharma"; // This will silently fail.
console.log(JsUser.name); // The original value remains unchanged.

//To prevent changes to the name property, you should use Object.defineProperty():
Object.defineProperty(JsUser, 'age', { 
    writable: false 
}); // Makes the 'age' property read-only.
  
JsUser.age = 18; // This assignment fails silently because 'age' is read-only.
console.log(JsUser.age); // The original value remains unchanged (or undefined if not previously set).
  
const mysym = Symbol('Contact'); // Correct way to declare and initialize a Symbol

// Using Symbol as an attribute/key in an object [IMPORTANT INTERVIEW QUESTION]
const student = {
    name: "Piyush",
    age: 23,
    college: "Chandigarh University",
    degree: "Bachelor's of Engineering",
    branch: "Computer Science & Engineering",
    // mysym: "8789532604", // Incorrect: this treats 'mysym' as a string key, not a symbol.
    [mysym]: "9693036805"  // Correct: Using the symbol as a key for this property.
};

// console.log(typeof student.mysym);  // Returns "string" because 'mysym' is treated as a string key.
// console.log(typeof student[mysym]); // Correct way to access the symbol as a key: Returns "string" as the value associated with the symbol is a string.


student.semester = function(){ //Here we have inserted an function as an attribute to the Object named student.
    console.log("Seventh")
}
console.log(student.semester); //This returns a -> [Function (anonymous)]
console.log(student.semester()); //This returns the execution of the function.

student.details = function(){
    console.log(`I'm a ${this.college} student`)// Here, this.college refers to the 'college' attribute in the 'student' object.
    // This allows us to use string interpolation to incorporate other attributes of the same object within an attribute's value.
}
console.log(student.details());
