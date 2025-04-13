const marvel_Heros = ["SpiderMan", "IronMan", "BlackWidow"];
const dc_Heros = ["SuperMan", "BatMan", "Flash"];
// marvel_Heros.push(dc_Heros); // When we push an array into another array is basically adds the array pushed as a single element in the array.
// console.log(marvel_Heros);

// const allHeros = dc_Heros.concat(marvel_Heros)
// console.log(allHeros);

// const allNew_heros = [...dc_Heros, ...marvel_Heros]; //Tis method is known as SPREAD method, it basically spreads the elements of an arry.
// //It is more usesd than concat method because, concat method has trhe limitation of merging only 2 arrays, while SPREAD method can merge multiple arrays.)
// console.log(allNew_heros);

// const anotherArray = [1, 2, 3, 4, [5, 6, 7] , 9, [23, 44, 3, [45, 1, 2, [5, 6, 4]], 54], 9]
// const real_anotherArray = anotherArray.flat(4); // The .flat(depth) method flattens nested arrays within an array up to the specified depth,
//                                                 //  combining them into a single array with all the contained elements.
// console.log(real_anotherArray);
// const real_anotherArray2 = anotherArray.flat(Infinity); // Infinity basically handels any no. of depths automatically
// console.log(real_anotherArray2);


// console.log(Array.isArray("Piyush")); //Checks wether the given element is an Array or not (returns TRUE or FALSE)
// console.log(Array.from("Piyush")); //Converts the given element of any dataType to an Array

// console.log(Array.from({name: "Piyush"}));// Returns an empty array when conversion fails. This happens because Array.from() can get confused when passed an object,
// as it is unsure whether to convert the keys or the key-value pairs into an array.

// console.log(Object.values({name: "Piyush"})); // Output: ["Piyush"]
// console.log(Object.keys({name: "Piyush"}));   // Output: ["name"]


let str = "Piyush"
const num = 99;
const bool = true;
console.log(Array.of(str, num, bool)); 
// Creates and returns an array containing the provided elements.



