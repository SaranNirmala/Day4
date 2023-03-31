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
  // Find Equilateral Triangle
let triangle=parseFloat(userInput[0]);

let area = 1/4  * (Math.sqrt(3)) * (triangle ** 2);

console.log(`Area of the Equalateral Triangle : ${area}`);


});