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
  //  Find the radius, Diameter, circumference and area of the Circle

  let radius=parseFloat(userInput[0]);
  let PI=3.14;
 
  let Diameter= 2* radius
  let circumference= 2* PI * radius;        
  let area=  PI * (radius ** 2)

console.log(`Diameter of Cicle       : ${Diameter}`);
console.log(`Circumference of circle : ${circumference}`);
console.log(`Area of the circle      : ${area}`);


});