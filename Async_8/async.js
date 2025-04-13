// ---------------------------- setTimeout ----------------------------

// setTimeout is used to execute a function **once** after a specified delay (in milliseconds)
// Here, after 2 seconds, "Mr_Sharma" would be logged to the console

// setTimeout(function(){
//     console.log("Mr_Sharma");
// }, 2000);

// External function that updates content in the DOM
// const Don = () => {
//     console.log(`This is an external Function`);
//     document.querySelector('h1').innerHTML = 'This is My Learnings';
// };

// This schedules the Don function to run after 2 seconds
// const changeMe = setTimeout(Don, 2000);

// If user clicks the #stop button before timeout triggers, it cancels the setTimeout
// document.querySelector('#stop').addEventListener('click', () => {
//     clearTimeout(changeMe);  // Cancels the scheduled execution
//     console.log('Timeout stopped');
// });


// ---------------------------- setInterval ----------------------------

// setInterval is used to repeatedly execute a function after a fixed delay between each call
// This will keep logging "Mr_Sharma - Interval" every 2 seconds endlessly

// setInterval(function(){
//     console.log("Mr_Sharma - Interval");
// }, 2000);


// Function to be called repeatedly by setInterval
const sayDate = (str) => {
    // Logs a custom string along with the current timestamp
    console.log(`${str} Mr_Sharma`, Date.now());
};

// Variable to hold the interval ID returned by setInterval
let intervalId = null;

// Starts the interval when the "start" button is clicked
document.querySelector('#start').addEventListener('click', () => {
    console.log('Interval Started');

    // setInterval will call sayDate every 2 seconds and pass "Hey" as an argument
    intervalId = setInterval(sayDate, 2000, "Hey");
});

// Stops the interval when the "stop" button is clicked
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);  // Stops the interval using the stored intervalId
    console.log('Interval stopped');
});
