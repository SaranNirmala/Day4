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
  // find Volume of Prism

  let base =parseFloat(userInput[0]);
  let height = parseFloat(userInput[1]);


  let volumePrsim= base * height;

  console.log(`The Volume of Prism is ${volumePrsim}`);

});