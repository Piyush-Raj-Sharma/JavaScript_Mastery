// In stack, basically the Data Types present are categoriezed into two types 1) Primitive & 2) Non-Primitive(Refrence type).

let myname = "Piyush Raj Sharma"
let secondname = myname
console.log(myname);
console.log(secondname + "-> its myname in secondname");

secondname = "Ujjwal Sharma"
console.log(secondname);
console.log(myname);
console.log(" ");


// In Primitive Data Types, the memory used is STACK & when the value of a variable is passed to another variable
//  -> basically its copy of that variable is alloted to it, not the refrence of the original variable.

let user1 = {
    name : "Sasta Ameer",
    email : "piyushsharma@raj.com"
}

console.log(user1.name);

let user2 = user1
user2.name = "Engineer"
console.log(user2.name);

// In Non- Primitive Data Types, the memory used is HEAP &^ when the value of a variable is passed to another variable
//  -> The refrence to the actual variables is passed i.e. if any changes is made in the second variable,
//  then the changes are actually made in the main value , not its copy and the changes get gighlighted in the first variable too.

