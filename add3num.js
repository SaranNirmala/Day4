
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
  // add 3 numbers

let [a, b, c]=userInput[0].split(' ').map((item) => parseInt(item));
let sum=0;
sum= a+b+c;
  
console.log(`The Sum of 3 numbers : ${sum}`);         

});
