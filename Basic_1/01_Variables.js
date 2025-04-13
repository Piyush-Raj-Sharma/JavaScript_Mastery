const accountId = 9999
var accountPassword ="123456"
let accountEmail = "mrsharma@gmail.com"
accountCity = "Delhi"

// accountId = 5656;   //its not possible to mainupulate const variable, its immutable.
// console.log(accountId); 

accountEmail = "ujjwalsharma@gmail.com";
accountPassword = "MrSharma";
accountCity = "Noida";

console.table([accountId, accountEmail, accountPassword, accountCity]); 
//console.table() is used to print multiple variables at once in console in form of a table.

let accountNumber; 
console.table([accountId, accountEmail, accountPassword, accountCity, accountNumber])
// Since the variable accountNumber is only declared but the type of data it should contain(basically its Data Type) is unware,
//  then the system will present it as undefined 