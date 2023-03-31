
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {  
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  // Swapping 2 numbers

let a=userInput[0];
let b=userInput[1];
let c=userInput[2];

console.log(`Before Swapping the Number a : ${a}`);
console.log(`Before Swapping the Number b : ${b}`);         // before sapping
console.log(`Before Swapping the Number c : ${c}`);

// let temp= a;
// a=b;                 // for 2 Numbers 
// b= temp; 


let temp1=a;
a=b;
b=c;                        // for 3 numbers
c=temp1;

console.log();

console.log(`After Swapping the Number a : ${a}`);
console.log(`After Swapping the Number b : ${b}`); 
console.log(`After Swapping the Number c : ${c}`);        // After Swapping

});
