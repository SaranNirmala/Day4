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
  // power of any 2 numbers

//   let a=userInput[0];
//   a=parseInt(a);


let a = parseInt(userInput[0]);
let b=parseInt(userInput[1]);
let power=1;


for(let i=1; i<=b; i++)
{
    power= a ** b;
}

  console.log(`Power of 2 numbers : ${power}`);
});