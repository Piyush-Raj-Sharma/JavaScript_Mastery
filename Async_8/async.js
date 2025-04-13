setTimeout(function(){
    console.log("Mr_Shamra");
}, 2000) //Executes once after the given time i.e. 2seconds


const Don = () =>{
    console.log(`This is an external Function`);
    document.querySelector('h1').innerHTML = 'This is My Learnings';
}

const changeMe = setTimeout(Don, 2000);

document.querySelector('button').addEventListener('click', ()=>{
    clearTimeout(changeMe);
    console.log('stopped');
})


// -------------------------------------------------------------------------------------------------------


// setInterval(function(){
//     console.log("Mr_Sharma - Interval");
// }, 2000); //Executes endlessly with the given  interval i.e. 2seconds

 