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
  // All Arithmetic operation for 2 numbers

let [a, b]=userInput[0].split(' ').map(item => parseFloat(item));

function add()
{
    return a + b;
}
function sub()
{
    return a - b;
}
function mul()
{
    return a * b;
}

function div()
{
    return a / b;
}




console.log(`The sum of 2 numbers            : ${add(a, b)}`);
console.log(`The subtraction of 2 numbers    : ${sub(a, b)}`);
console.log(`The multiplication of 2 numbers : ${mul(a, b)}`);
console.log(`The division of 2 numbers       : ${div(a, b)}`);

});