
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
  // Celsius to fahrenheit

let celsius=userInput[0];
celsius=parseFloat(celsius);


let fahren= celsius *1.8 +32;
  
console.log(`The Conversion of Celsius to Fahreheit is : ${fahren} `);         

});
