/*
var username = prompt();
alert("hello " + username);

if (username === "David"){
    console.log("Welcome!");
}
else if (username === "Katie"){
    console.log("hi hi hi");
}

var age = prompt()

if (age<13 || age >=65){

console.log("you are "+age+" years old.");
}

{
let name = prompt("What is your name?")
switch(name){
    case "Caleb": 
        console.log("welcome!");
        break;
    case "Claire":
    case "David":
        console.log("Get out!");
        break;
    default:
        console.log("ok whatever");
        break;
}
if(name === 'Katie') console.log("Hellooo");
}
// a one line if
*/
/*
{
let new_name = prompt("guess the name");
let points = new_name === "John" ? 10 : 0;
console.log(points)
}
// like an if on one line
let a = 1;
while (a < 10){
    console.log(a);
    a++;
} // when you don't know how many times
let b = 1000;
do{
    console.log(b);
    b++;
} while(b<10);
// when you want to happen once
for (c=1; c <10; c++){
console.log(c)
} // when you know how many times


// a little password guessing thing
{
    let password;
    do{
        password = prompt("What is the passcode?");
    } while(password !== "let me in");
}

{
let d = document.getElementById("destination");
for(let i = 0; i < 10; i++){
    for(let k = i; k >= 0; k--){
        d.append(k + " ");
    }
    var br = document.createElement('br');
    d.appendChild(br);
    }
}

{

let ages = [15, 16, 17, 18, 19, 20, 20, 20, 21, 33, 15, 6, 4, 2, 19, 29]
//ages[100] = 35
// in javascript this is ok. it will just create
// a gappy array 

while(true){
    let input = prompt("Add an age");
    if(input === 'q' || input === null){
        break;
    }
    ages.push(Number(input));
    console.log(ages);
    
}
ages.pop() // removes value from the end
console.log(ages)
ages.unshift(40) // adds value at the beginning
console.log(ages)
ages.shift() //removes value from the beginning
console.log(ages)
ages.splice(2, 3) // start at index two delete three items
console.log(ages)
ages.splice(2, 0, 5, 6, 7, 8) //start at index delete 0 replace with after stuff
console.log(ages)

ages.sort() //will sort by first number value then second etc etc
console.log(ages)
ages.sort(function(a, b){return a-b})
console.log(ages)
ages.reverse() // easy peasy
console.log(ages)

let agesB = [9, 12, 9, 9]
ages.concat(agesB) // puts the groups together
console.log(ages)
// concat creates a new array
// whereas push method changes original array
// by adding elements
ages.includes(6)
// True or False if this value is in the array
console.log(ages.indexOf(20))
// gives you the index of the first instance of sthis value 
console.log(ages.join("-"))
// makes a string of the values in the array
ages.slice(3, 5)
// takes a slice starting at index 3 and up to 5 not including 5, one number goes from start to end
ages.forEach(function(element){
    console.log(element);
});

ages.forEach(function(element, i){
    console.log(element, i);
});
}
*/

let grades = [
    [12, 13, 14,15 ,156],
    [12, 23, 3, 4, 5, 67, 76,],
    [43, 12, 34, 12]
];

grades.forEach(function(row){
    row.forEach(function(col){
        console.log(col);
    })
    console.log("~~~~~~~~");
});
/* we can use labels and continue and break
to control where we go after the loop
if we use continue
so for example

loop_one: Position 1
    loop_two: Position 2
        Position 3:
            Some Code w/our break/continue etc
        Position 4:
    Position 5:
position 6

continue we go from 3 to position 5 then 2
break we go to position 5 then 1
continue + label we go from 3 to 2 (no 5)
break + label we go to position 6


the basic react setUp
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


*/