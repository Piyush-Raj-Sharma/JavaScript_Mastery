// setTimeout(function(){
//     console.log("Mr_Shamra");
// }, 2000) //Executes once after the given time i.e. 2seconds


// const Don = () =>{
//     console.log(`This is an external Function`);
//     document.querySelector('h1').innerHTML = 'This is My Learnings';
// }

// const changeMe = setTimeout(Don, 2000);

// document.querySelector('#stop').addEventListener('click', ()=>{
//     clearTimeout(changeMe);
//     console.log('stopped');
// })


// -------------------------------------------------------------------------------------------------------


// setInterval(function(){
//     console.log("Mr_Sharma - Interval");
// }, 2000); //Executes endlessly with the given  interval i.e. 2seconds

 const sayDate = (str) =>{
    console.log(`${str} Mr_Sharma`, Date.now());
 }
 let intervalId = null;

document.querySelector('#start').addEventListener('click', ()=>{
    console.log('Interval Started');
    intervalId = setInterval(sayDate, 2000, "Hey");  // we can also pass arguments with setInterval;
})

document.querySelector('#stop').addEventListener('click', ()=>{
    clearInterval(intervalId); //The setInterval gets stopped
    console.log('Interval stopped');
})