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
  // Find Simple Interest

  let P=parseFloat(userInput[0]);
  let R=parseFloat(userInput[1]);
  let T=parseFloat(userInput[2]);
  let simpleInterest=0;


  simpleInterest=(P * R* T) /100  ;

console.log(`Simple Interest : ${simpleInterest}`);


});