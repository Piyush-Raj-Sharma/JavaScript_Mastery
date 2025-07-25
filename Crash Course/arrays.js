// ARRAYS

// to instert an element inside an array we use .push(val)
// to delete an element from an array we use .pop(val)

// to instert an element inside an array from front we use .unshift(val)
// to delete an element from an array from front we use .(val)

// to get a sub part of an array we use slice(fromIndex, < tillIndex)  -- it just returns the copy
// to delete an element from any specific index in an array we use .splice(fromIndex, noOfElements)
// --------- splice makes changes in the original element


// to reverse an array we use arr.reverse
// to sort the array in ascending order we use arr.sort((a,b){return a-b})
// to sort the array in descending order we use arr.sort((a,b){return b-a})



let arr = [11, 62, 43, 54, 65];

// .forEach() executes a callback function for each element in the array.
// It takes up to 3 arguments: value, index, and the entire array.
// It is used for side effects (like logging), and it does NOT return a new array.

arr.forEach((val, index) => {
  console.log(val + 5); // Prints each value increased by 5
});


// .map() is used to create a **new array** by transforming each element of the original array.
// It returns a new array with the same length.
// ❗ If you forget to return a value inside the callback, the new array will contain `undefined` values.

let newArr = arr.map((val) => {
  return val + 1; // transforms each element by adding 1
});
console.log(newArr); // [12, 63, 44, 55, 66]



// .filter() is used to create a **new array** containing elements that satisfy a given condition.
// It does NOT modify the original array.
// Only elements for which the callback returns `true` are included.

let filteredArr = arr.filter((val) => val > 50);
console.log(filteredArr); // [62, 54, 65] → all elements greater than 50


// .reduce() is used to reduce an entire array to a **single value** (like sum, product, average, etc).
// It takes two main arguments:
// 1️⃣ A callback function with (accumulator, currentValue)
// 2️⃣ An optional initial value for the accumulator
//
// 🧠 The accumulator "remembers" the result of the previous iteration.
// 🛒 Common use case: calculating total cart price

let cartItems = [11, 62, 43, 54, 65];

let totalCartPrice = cartItems.reduce((acc, val) => {
  return acc + val; // add each item to the accumulator
}, 0); // initial value of acc is 0

console.log(totalCartPrice); // 235



// 🔍 .some() checks if **at least one** element in the array satisfies the condition.
// It returns a **boolean**: true (✅) or false (❌)

// In this case, we're checking if any value in the array is greater than 50
let someArr = arr.some((val) => val > 50);
console.log(someArr); // true → because 62, 54, and 65 are > 50



// 🔍 .every() checks if **all** elements in the array satisfy the given condition.
// It returns ✅ `true` only if **every** element passes the test.
// If even **one element fails**, it returns ❌ `false`.

let everyArr = arr.every((val) => val > 50);
console.log(everyArr); // false → because 11 and 43 are not > 50


// 🔹 Sample array of objects
let objArr = [
  { id: 1, key: 1 },
  { id: 2, key: 2 },
  { id: 3, key: 1 },
];

// 🔍 .find() is used to return the **first** element in the array 
// that satisfies the condition in the callback function

// ✅ In this case, we are looking for the first object where `key === 1`
let result = objArr.find((val) => val.key === 1);

// 📦 Output: { id: 1, key: 1 } → only the first match is returned
console.log(result);

// -------------------------------------------------

// ❌ This does NOT copy the array. It only creates a new reference to the same array in memory.
// Now arr2 and arr both point to the same array. So changes in one affect the other.
let arr2 = arr;

arr2.push(999);         // this also modifies `arr`
console.log(arr);       // [11, 62, 43, 54, 65, 999]
console.log(arr2);      // [11, 62, 43, 54, 65, 999]

// ✅ To make an actual copy (not just a reference), use the **spread operator**
let arr3 = [...arr];     // creates a shallow copy of `arr`

arr3.push(777);          // now arr3 is modified independently
console.log(arr);        // [11, 62, 43, 54, 65, 999]
console.log(arr3);       // [11, 62, 43, 54, 65, 999, 777]



// Using structuredClone() (modern & recommended) --- deep copy mordern version
let deep = structuredClone(original);
deep.address.city = "Bangalore";
