const myArr =[0,1,2,3,4,5,6,7] 
// In javaScript the arrays are DYNAMIC (if the array is decleared of length 5, then if needed more than 5 elements can be stored in that particular array)

// console.log(myArr );

// myArr.push("Mr_Sharma") // Inserts element at last of the Array 
// myArr.push("Ujjwal")
// console.log(myArr);

// myArr.pop() // Removes the element present at the LAST index of the array
// console.log(myArr);

// myArr.unshift("Khushi") // INSERTS the elements from the front or at 0 Index
// console.log(myArr);

// myArr.shift(); // REMOVES the elements from the front or the 0 Index
// console.log(myArr);

// console.log(myArr.includes("Mr_Sharma")); // Checks wether the specified element is present in the array or not.
// console.log(myArr.indexOf("Mr_Sharma")); // Gives the index of the specified element if present in the Array, Otherwise returns -1.


console.log(myArr );
const nextArr = myArr.join(); // Converts the given array into a STRING
console.log(nextArr + "  The datatype of the array after using join() is : " + typeof(nextArr));

console.log("Original Array :   ", myArr);

const arr1 = myArr.slice(1,4) //Slice() method applies and returns the DEEP COPY (copy of the array) of the array, not its refrence, The COPY of the array is Mainupulated
console.log(arr1);

console.log("Original Array after using slice() :   ", myArr);

const arr2 = myArr.splice(1,4); //Splice() method applies on the original array, the SHALLOW COPY(the refrence array), the MAIN array is Mainupulated
console.log(arr2);

console.log("Original Array after using splice() :    ", myArr);



