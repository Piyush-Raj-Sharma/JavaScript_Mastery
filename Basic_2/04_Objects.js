// Creating an empty object using the 'new Object()' constructor
const tinderUser = new Object();

// Alternatively, using object literal (simpler and more common)
// const tinderUser = {};

// Adding properties to the object
tinderUser.id = "123";
tinderUser.name = "Mr_Sharma";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 
// Outputs: { id: '123', name: 'Mr_Sharma', isLoggedIn: false }


const regularUser = {
    email: "sharma@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Jhon",
            middleName: "The",
            lastName: "Don"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName); 
// With each attribute added after the '.' operator, we are accessing deeper levels of the nested object. 
// Each part of the path (regularUser, fullName, userFullName, firstName) corresponds to a key within an object or another nested object.


// MERGING OBJECTS
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1, obj2, obj3} 
// This does not merge the objects. Instead, it creates an object with keys 'obj1', 'obj2', and 'obj3' pointing to the original objects.

const obj4 = Object.assign(obj1, obj2, obj3); 
// This merges obj2 and obj3 into obj1, mutating obj1 and returning the merged object.
// The properties from obj2 and obj3 are copied to obj1.
// console.log(obj4); // Outputs the merged object: {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}
// console.log(obj1); // Also outputs the merged object, since obj1 was mutated.

const obj6 = Object.assign({}, obj1, obj2, obj3);
// Merging multiple objects (obj1, obj2, obj3) into a new object (obj6) using Object.assign()
// The first argument is an empty object {} which ensures that obj1, obj2, and obj3 are merged into a new object
// This prevents mutation of the original objects, as the properties from obj1, obj2, and obj3 are copied into a new object instead
// console.log(obj6);  // Outputs the merged object without altering the original ones


// To handle this mutation condition, we use the spread operator.
const obj5  = {...obj1, ...obj2, ...obj3}; 
// The spread operator creates a new object and merges obj1, obj2, and obj3 without mutating obj1.
// console.log(obj5); // Outputs: {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// Outputs an array of the keys (property names) of the 'tinderUser' object.
// Example output: ['id', 'name', 'isLoggedIn']

// console.log(Object.values(tinderUser));
// Outputs an array of the values corresponding to the keys of the 'tinderUser' object.
// Example output: ['123', 'Mr_Sharma', false]

// console.log(Object.entries(tinderUser));
// Outputs an array of key-value pairs from the 'tinderUser' object as nested arrays.
// Example output: [['id', '123'], ['name', 'Mr_Sharma'], ['isLoggedIn', false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Returns a boolean that wether the property is present in the given object or not [True or False]


const users = [
    {
        pehchan: 1,
        naam: "Chikna Bhai",
        sharaab: "Desi Tharra"
    },
    {
        pehchan: 2,
        naam: "Bantoo Bhai",
        sharaab: "Sasti Daru"
    },
    {
        pehchan: 3,
        naam: "Munna Don",
        sharaab: "A1 Whisky"
    }
];

// console.log(users[2]);
// Outputs the object at index 2 in the 'users' array, which is the third user in the list.
// { pehchan: 3, naam: "Munna Don", sharaab: "A1 Whisky" }

//OBJECT DESTRUCTURING
// Object Destructuring: A syntax in JavaScript that allows unpacking values from objects and assigning them to variables in a concise way. It enhances code 
// readability and reduces redundancy when accessing object properties.

const course = {
    courseName: "JavaScript",
    price: "Free",
    courseInstructor: "Mr_Sharma",
    details: {
        duration: "3 months",
        prerequisites: "Basic HTML & CSS"
    }
};

// 1. Basic Destructuring
// Extracts 'courseName' and 'price' from the 'course' object into separate variables.
const { courseName, price } = course;
console.log(courseName); // Outputs: "JavaScript"
console.log(price);      // Outputs: "Free"

// 2. Renaming Variables
// Extracts 'courseInstructor' and renames it to 'Instructor'.
const { courseInstructor: Instructor } = course;
console.log(Instructor); // Outputs: "Mr_Sharma"

// 3. Default Values
// Attempts to extract 'level' from the 'course' object. Since 'level' is not defined,
// it assigns a default value of "Beginner".
const { level = "Beginner" } = course;
console.log(level); // Outputs: "Beginner"

// 4. Nested Destructuring
// Extracts 'duration' and 'prerequisites' from the nested 'details' object within 'course'.
const { details: { duration, prerequisites } } = course;
console.log(duration);      // Outputs: "3 months"
console.log(prerequisites); // Outputs: "Basic HTML & CSS"

// 5. Destructuring in Function Parameters
// A function that takes an object as a parameter and uses destructuring to extract
// 'courseName' and 'price' directly from the passed object.
function printCourseInfo({ courseName, price }) {
    console.log(`Course: ${courseName}, Price: ${price}`);
}