/*
alert("hello world")

document.getElementById("button").onclick = function(){
    document.getElementById("confirm").innerHTML = "Order placed.";
    document.getElementById("button").style.display = 'none';
}

var something = new Date();
var somethingTwo = Date.now()
console.log(something);
console.log(somethingTwo)

let start = Date.now();
let x = 0
for(let i = 0; i < 100000000; i++){
    x=x+1
}

let end = Date.now();
let total = end - start;
console.log("Time taken: " + total);
console.log(x);
// this code tells us how long something took (in milliseconds)

let before = new Date(2020, 10, 15);
let after = new Date(2020, 10, 20);

let oneDay = 1000 * 60 * 60 * 24;

let days = (after - before) / oneDay;

console.log("The difference between dates is " + days + " days.");

let myDate = Date.parse('12 Jan 1995 00:15:54 GMT');
console.log(myDate/oneDay);

let newDate = new Date();
console.log("The day is "+ newDate.getDay());
console.log("The year is "+ newDate.getFullYear());
console.log("The month is "+ newDate.getMonth());
console.log("The second is "+ newDate.getSeconds());

function square (x){
    return x * x;
}

console.log(square(5))

function doSomething(x){
    return x();
}
let myFunc = ()=> 5*5
console.log(doSomething(myFunc))

let timeMe = function(){
    console.log("Done!");
}

setTimeout(timeMe, 10000);
//This is asynchronus, the code after
//will continue to run and when this is done it
// will happen again then cut back to where it was

let time = 0;
setInterval(function(){
    time++;
    console.log(time);}, 1000)

    
{
    function cube(x){
        return x*x*x;
    }

    let cubeArrow = x => x*x*x;

    console.log(cube(5));
    console.log(cubeArrow(5));
}

{
    let arrow = () => this;
    function normal(){
        return this;
    }

    console.log(arrow());
    console.log(normal());

    let functions = {
        arrow: arrow,
        normal: normal
    }; 

    console.log(functions.normal());
    console.log(functions.arrow());
}
*/
{/*
    function fact(x){
        let total = 1;
        for (let i = x-1; i > 1; i--){
            total *= i;
        }
        return total;
    }
    console.log(fact(5));
    // this code was for learning debugging 
    // and using break points
    // in sources next to the console.
    document.getElementById("lemons")
    .onclick = () => {console.log("clicked")};
    // event listener break codes
    // mouse click
    // will do a break on mouse click
}

{
    try{
        doesntexist;
    } catch(e){
        console.log(e)
    } finally{
        console.log("test") //executes whatever
    }
*/
}