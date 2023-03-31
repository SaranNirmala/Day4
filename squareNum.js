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
  // square of a number

let squareNum=userInput[0];
squareNum=parseInt(squareNum);
let square =1;


square= squareNum ** 2;


console.log(`Square of a Number : ${square}`);

// console.log(squareNum);
// console.log(typeof(squareNum));

});