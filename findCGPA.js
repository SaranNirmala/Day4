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
  // find CGPA using Grade points

  let [DS, ST, OS, PCO, DBMS] =userInput[0].split(' ').map(item => parseFloat(item));

let totalGradePoits=DS + ST + OS + PCO + DBMS;   // we need to take GRADE POINTS for all subject

let CGPA = totalGradePoits/ 5 ;         

console.log(`Student CGPA by using Grade Points : ${CGPA}`);

});