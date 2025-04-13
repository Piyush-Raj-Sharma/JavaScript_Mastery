const coding = ['Java', 'JavaScript', 'Python', 'Cpp', 'Kotlin', 'Swift'];

// const values = coding.forEach( (item) => {
//     console.log(item); // This prints each element in the Array
// })
// console.log(values); // returns 'undefined' because .forEach() function returns nothing.


// const values = coding.forEach( (item) => {
//     return item; // This also returns 'undefined' because forEach() function does not returns anything, even if EXPLICTLY returned.
// })
// console.log(values);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNum.filter( (num) => num > 4) // this will not print anything IMPLICTLY

const afterFilter = myNum.filter( (num) => num > 4); // returns the array of elements that passes the given condition  i.e. here the function returns the Array of elements that are greater than 4
// console.log(afterFilter); //prints the returned array by the filter function, in the afterFilter variable (here acts as an Array) 

const newNums = [] //An empty array is created

myNum.forEach( (num) => {
    if(num > 4) newNums.push(num);
})
// console.log(newNums); // the same thing has been implemented here using forEach() function that has been done using filter() function 




const books = [
    {
        title : 'Book One', genre : 'Fiction', publish : '1981', edition : 2004
    },
    {
        title : 'Book Two', genre : 'Non-Fiction', publish : '1995', edition : 1999
    },
    {
        title : 'Book Three', genre : 'History', publish : '2001', edition : 2015
    },
    {
        title : 'Book Four', genre : 'Non-Fiction', publish : '2011', edition : 2020
    },
    {
        title : 'Book Five', genre : 'Science', publish : '1979', edition : 1990
    },
    {
        title : 'Book Six', genre : 'Fiction', publish : '1999', edition : 2000
    },
    {
        title : 'Book Seven', genre : 'History', publish : '1988', edition : 1995
    },
    {
        title : 'Book Eight', genre : 'Science', publish : '2024', edition : 2024
    },
    {
        title : 'Book Nine', genre : 'Non-Fiction', publish : '1999', edition : 2006
    }
];

let userBooks = books.filter( (bk) => bk.genre === 'Science'); //Returns (implictily , because no {--scope--} is used) the Array of Objects in which the genre = 'Science'

// userBooks = books.filter( (bk) => {return bk.publish >= 2000}); //Return (explict return , because {--scope--} is used) the Array of Objects which are published after 2000;

// userBooks = books.filter( (bk) => {
//     return bk.publish >= 1995 && bk.genre === 'History' //returns the Array of Objects which is published in and after 1995 and whose genre is 'History
// })
// console.log(userBooks);



