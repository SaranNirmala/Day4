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
  //  To find Isosleces Triangle

  let base=parseFloat(userInput[0]);
  let height=parseFloat(userInput[1]);

  let area= (base * height) / 2 ;




console.log(`Area of the Isosleces Triangle : ${area.toFixed(2)}`);


});