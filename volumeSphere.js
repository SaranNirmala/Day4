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
  // find Volume of Sphere

let radius=parseFloat(userInput[0]);
let PI=3.14;

let volume = 4/3 *( PI * (radius ** 3));



console.log(`Volume of the Sphere : ${volume}`);


});