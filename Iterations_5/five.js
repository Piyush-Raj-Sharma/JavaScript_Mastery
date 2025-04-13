const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.ma//p( (num) => num + 10)
// console.log(newNums);


// ++++++++++++ METHOD CHAINING +++++++++++
const newNums = myNumbers
    .map((num) => num * 10) // Step 1: The `.map()` method creates a new array by multiplying each element of `myNumbers` by 10.
                            // `.map()` applies the callback function (num * 10) to every element in the array.
                            // Result after this step: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].
    .map((num) => num + 1)  // Step 2: Another `.map()` creates a new array by adding 1 to each element from the previous step.
                            // Result after this step: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101].
    .filter((num) => num > 50) // Step 3: The `.filter()` method creates a new array with elements greater than 50.
                               // It checks each element of the array using the callback function (num > 50).
                               // Result after this step: [51, 61, 71, 81, 91, 101].

// console.log(newNums); // Final Output: [51, 61, 71, 81, 91, 101]



// ++++++++++++++++++++ REDUCE FUNCTION ++++++++++++++++

// Reduce is used to calculate a single value (e.g., sum, product, or any other aggregated value) by iterating over an array.

const values = [1, 2, 3, 4]

// Example 1: Using a regular function as a callback
const myTotal = values.reduce(function (acc, currVal) {
    // console.log(`accumulator: ${acc} and current Value: ${currVal}`);
    // `acc` is the accumulator, which holds the running total or aggregated result.
    // `currVal` is the current element being processed in the array.

    return acc + currVal // Add the current value to the accumulator.
}, 5) // The second parameter (5) is the initial value of the accumulator.
// If no initial value is provided, the first element of the array is used as the initial accumulator.

// console.log(myTotal); // Final output: 15 (5 + 1 + 2 + 3 + 4)

// Example 2: Using an arrow function as a callback
const myTotal2 = values.reduce((accumulator, currValue) => accumulator + currValue, 0)
// In this example:
// `accumulator` starts at 0 (the initial value passed as the second parameter).
// Each element of the array is added to `accumulator`.

// console.log(myTotal2); // Final output: 10 (0 + 1 + 2 + 3 + 4)


const shoppingCart = [
    {
        itemName: "Android Development",
        price: 9999
    },
    {
        itemName: "FullStack Development",
        price: 5999
    },
    {
        itemName: "Complete Java",
        price: 3999
    },
    {
        itemName: "Frontent Dominator",
        price: 4999
    },
    {
        itemName: "Backend Dominator",
        price: 3999
    }
]

const subTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(subTotal);
