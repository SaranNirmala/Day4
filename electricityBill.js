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
  // Print Electricity Bills - I have print seperate months

  let perDayWatt=parseFloat(userInput[0]);
  let unitRate=parseFloat(userInput[1]);
  let month=userInput[2];

  let unit=perDayWatt / 1000;

let perDayRate= unit * unitRate;
let perMonthRate=0;

if(month == "January" || month == "March"|| month == "May"|| month == "July" || month == "August" || month == "October" || month == "November")
{
    perMonthRate= perDayRate *31;
} else if( month == "February")
{
    if(this.year /4 ==0)
    {
        perMonthRate=perDayRate *29;
    } else{
        perMonthRate=perDayRate *28;
    }
} else{
    perMonthRate =perDayRate * 30;
}

  console.log(`Electricity bill for a month RS.${perMonthRate}` );

  
});