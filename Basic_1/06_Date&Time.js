let myDate = new Date();
console.log(myDate);
console.log(" ");
console.log(myDate.getDate());
console.log(" ");

console.log(myDate.toString());
console.log(" ");

console.log(myDate.toDateString());
console.log(" ");

console.log(myDate.toLocaleString());
console.log(" ");

console.log(myDate.toLocaleDateString());
console.log(" ");

console.log(myDate.toLocaleTimeString());
console.log(" ");
console.log(myDate.toJSON());
console.log(" ");

let myCreatedDate = new Date(2003, 7, 23);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now(); // Date.now() i similar to, new Date()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //We can use these to get the TimeStamp - because they give value in miliseconds which can be compared.


console.log(Date.now()/1000); // Converts MiliSeconds to Seconds 
console.log(Math.round(Date.now()/1000)); // removes the precision from the seconds value.

let newDate = new Date();
// console.log(newDate.getFullYear());
// newDate.toLocaleString('default', {
//     weekday: "narrow",
//     year: "numeric",
//     month: "long",
//     day: "2-digit",
//     weekday: "short",
// })

