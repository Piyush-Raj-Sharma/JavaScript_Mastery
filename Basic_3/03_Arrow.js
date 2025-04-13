const user  = {
    itemName: "Boult Astra",  // Initial item name
    price: 1299,  // Price of the item

    // Method to print a purchase message using the item name
    purchaseMessaage: function() {
        console.log(`${this.itemName} , Your order is successful`); // 'this' refers to the current object (user), so 'this.itemName' accesses 'user.itemName'
        // console.log(this); //  'this' will log the entire 'user' object because 'this' points to the object that invokes the function.
        
    }
}

// user.purchaseMessaage();  
// First call to purchaseMessaage: It prints "Boult Astra, Your order is successful"
// At this point, 'this.itemName' refers to the original 'itemName' ("Boult Astra")

user.itemName = "Boult Astra Mustang";  // Update the 'itemName' property of the object to a new value
// user.purchaseMessaage();  
// Second call to purchaseMessaage: It now prints "Boult Astra Mustang, Your order is successful"
// Since 'itemName' was updated, 'this.itemName' now refers to the new value "Boult Astra Mustang"

// console.log(this); //Here 'this' will return the global object, which is 'window' (Window - { ... })in the browser or 'global' in Node.js.
//Window is the GLOBAL object in the Browser

function study(){
    // console.log(this); // Logs the value of 'this' when the function is called
    // --since study is called as a regular function (not as a method of an object), the value of this refers to the global object.
    // --In a browser environment, this will log the window object, while in Node.js, it will log the global object.

    let subject = "Javascript"
    console.log(this.subject); //This attempts to access 'subject' from the global object
    // -- When you call console.log(this.subject);, you are trying to access the subject property from the global object.
    // -- Since there is no property named subject in the global object (the subject variable is not attached to it), the result is undefined.
}
// study();

const collageStudy = () =>{
    let GPA = 7.65
    // console.log(GPA); // 7.65
    console.log(this); // Logs the value of 'this' when the function is called
    // --since study is called as a regular function (not as a method of an object), the value of this refers to the global object.
    // --In a browser environment, this will log the window object, while in Node.js, it will log the global object.
    
}
// collageStudy()


const collageGPA = (sem1GPA , sem2GPA) =>{
    return sem1GPA + sem2GPA; //Arrpw function with Explicit return 
}
// console.log(collageGPA(8.23, 8.58));

//Arrow function with Implicit return
const secondYear = (sem3, sem4) => sem3 + sem4;
// console.log(secondYear(7.05, 6.86));

const thirdYear = (sem5, sem6) => (sem5 + sem6);
// console.log(thirdYear(7.61, 7.41));

// const currentGPA = (year1, year2, year3) => {CGPA : 7.65} // Object will not be returned 
// console.log(currentGPA(8.6, 7.6, 7.9));

const currentGPA = (year1, year2, year3) => ({CGPA : 7.65}) //Here after applying the parenthesis around the object, the object get returned
// console.log(currentGPA(8.6, 7.6, 7.9));
