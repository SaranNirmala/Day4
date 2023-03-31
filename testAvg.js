
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
  // Five test scores print their Average

let eachSub=userInput[0].split(' ').map((item) => parseFloat(item));
let total=0
for(let item of eachSub){
    total= total+item;
}

let averageOfTest= total / 5;

console.log(`Display the Test Average: ${averageOfTest.toFixed(2)}`);         

});
