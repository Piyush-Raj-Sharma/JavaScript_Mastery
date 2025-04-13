// FOR OF LOOPS
// The `for...of` loop is used to iterate over iterable objects like arrays, strings, Maps, Sets, etc.

const arr = [1, 2, 3, 4, 5];

for (const element of arr) { 
    // Iterates through each element in the array
    // console.log(element); // Logs 1, 2, 3, 4, 5 (each on a new line)
}

const greetings = "Hello World!";

for (const greet of greetings) {
    if (greet == " ") continue; // Skips spaces
    // console.log(`Each char is ${greet}`); 
    // Logs each character of the string except spaces
}

// MAPS
// A `Map` is a collection of key-value pairs where keys are unique, and the order of insertion is preserved.

const map = new Map();
map.set('IN', "India");  // Adds key-value pair 'IN': 'India'
map.set('US', "USA");    // Adds key-value pair 'US': 'USA'
map.set('FR', "France"); // Adds key-value pair 'FR': 'France'
map.set('FR', "France"); // Duplicate key, value is not added (keys must be unique)

// console.log(map); // Logs Map(3) { 'IN' => 'India', 'US' => 'USA', 'FR' => 'France' }

for (const element of map) { 
    // Iterates through each key-value pair in the map
    // console.log(element); 
    // Logs each key-value pair as an array, e.g., [ 'IN', 'India' ]
}

for (const [key, value] of map) {
    // console.log(key);   // Logs only the keys, e.g., 'IN', 'US', 'FR'
    // console.log(value); // Logs only the values, e.g., 'India', 'USA', 'France'
    // console.log(`${key} :- ${value}`); // Logs both key and value, e.g., 'IN :- India'
}

// OBJECTS AND FOR OF LOOP
const myObject = {
    'game1': "GTA",
    'game2': "SpiderMan"
};

// Objects are not iterable with `for...of` directly
// for (const game of myObject) {  
    // Throws an error: "TypeError: myObject is not iterable"
    // console.log(game);
// }

// To iterate over objects, use `for...in` or Object.keys/values/entries
for (const key in myObject) {
    // console.log(key);         // Logs keys: 'game1', 'game2'
    // console.log(myObject[key]); // Logs values: 'GTA', 'SpiderMan'

    console.log(`${key} is ${myObject[key]}`);
    
}

