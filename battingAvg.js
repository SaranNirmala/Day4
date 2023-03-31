
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
  // find the Batting Average

let totalRun=userInput[0];
totalRun=parseFloat(totalRun);
let numberOfOut=userInput[1];
numberOfOut=parseInt(numberOfOut);
let battingAvg= totalRun / numberOfOut ;

  
console.log(`Display the Batting average : ${battingAvg.toFixed(2)}`);         

});
