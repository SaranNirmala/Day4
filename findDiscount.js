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
  // given Actual cost and sold cost find Discount

  let actualCost=parseFloat(userInput[0]);
  let soldCost=parseFloat(userInput[1]);


  let discount= actualCost - soldCost;

  let discountPercentage= (discount /actualCost) /100 ;


  console.log(`The discount of the product is            : ${discount}`);
  console.log(`The discount percentage of the product is : ${discountPercentage}`);
  
});