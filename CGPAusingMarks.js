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
  //Your code goes here … replace the below li  ne with your code logic 
  // find CGPA using Marks
let marks=userInput[0].split(' ').map(item => parseFloat(item));

let sum=0;

for(let i=0; i<=marks.length-1; i++)
{
    if(marks[i] >= 91 || marks[i] == 100)
    {
        
        sum= sum + 10;
    } else if(marks[i] >= 81 || marks[i]  >= 90)   
    {
        sum= sum + 9;
        
    }
    else if(marks[i] >= 71 || marks[i] >=80)
    {
        sum= sum + 8;
        
    }
    else if(marks[i] >= 61 || marks[i] >=70)
    {
        sum= sum + 7;
        
    }
    else if(marks[i] >= 51 || marks[i] >=60)
    {
        sum= sum + 6;
       
    }
    else if(marks[i] >= 41 || marks[i] >=50)
    {
        sum= sum + 5;
        
    }
    else if(marks[i] >= 35 || marks[i] >=40)
    {
        sum= sum + 4;
       
    } else{
        console.log("Fail, So we cannont calculate Student's CGPA");
        return false;
    }
}


let CGPA=sum/5;


console.log(`The Student CGPA by using marks  : ${CGPA}`);


});