
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
  // find pounds to kilogram

let pounds=userInput[0];
pounds=parseFloat(pounds);


let kilogram= pounds * 0.45359237;
  
console.log(`Convertion of Pounds to Kilogram : ${kilogram}`);         

});
