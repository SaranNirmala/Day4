//1.Declare four variables without assigning values and print them in console     

let a;
let b;
let c;
let d;
console.log(a);     // undefined
console.log(b);     // undefined
console.log(c);     // undefined
console.log(d);     // undefined



//2.How to get value of the variable myvar as output
var myVar=1;
console.log(myVar);   // 1

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName="Shiva";
let lastName="Ruthra";               // declare variables Multiple lines
let maritalStatus="Single";
let country="India";
let age=25;
// console.log(firstName);                // Shiva
// console.log(lastName);                 // Ruthra
// console.log(maritalStatus);            // Single
// console.log(country);                  //India
// console.log(age);                      //25


//4. Declare variables to store your first name, last name, marital status, country and age in a single line

let person={
    firstname : 'Shiva',
    lastname :'Ruthra',
    maritalstatus:'married',
    country :'America',
    age : 25
};

console.log(person);    


let array =['Shiva' , 'ruthra' , 'single', 'India', 20];
let [fN, LN, MS, coun, agenow] =['Shiva' , 'ruthra' , 'single', 'India', 20];

console.log(array);          //o/p= full Array
console.log(fN);
console.log(LN);
console.log(MS);
console.log(coun);
console.log(age);


//5. Declare variables and assign string, boolean, undefined and null data types

// let myAge=25;
// let yourAge=30;
// let myName='Mahadeva';
// let isTrue=true;
// let myPhone;
// let myLaptop=null;

// console.log(`I am ${myAge} years old.`);
// console.log(`You are ${yourAge} years old.`);
// console.log(`My name is ${myName}.`);
// if(5>6){
//   console.log(isTrue);
// } else{
//     return false;
// }

// console.log(myPhone);
// console.log(myLaptop);  // it's Defined as Object


// 6. Convert the string to integer

let x='20';
console.log(typeof(x));
x= parseInt(x);
console.log(typeof(x));



//7. Write 6 statement which provide truthy & falsey values.
// Truthy Values
if([])         // its truthy = we able to use empty Array
{
}

if({})             // its truthy = we able to use empty Object
{
    
}

if(-Infinity){    // its truthy = we able to use Infinity number

}

let y;
y=1;
y='1';
y=[1];

if(y ==  '1' || y == y || y == [1])   // its Truthy function should be true when we are using (==) Abstract equal
{
    console.log('function true');
}


if(y === [1])            // function should be false when we are using (===) Strict equal
{
    console.log('success');
} else 
{
    console.log('function false');
}


function hello() {
    // we can create a empty function
}


let value=0;
if(value){
    // value should be truthy
} else{
    // value should be falsy . it could be false, 0, null, undefined
}


// always Falsy Statements
// false, 0, null, undefined, NaN, (''," ", ``) string, -0(minus zero), 0n (bigInt zero)

if(false)
{
    // code not excuted
}

if(0n)
{
    // code not excuted
}

if(undefined)
{
    // code not excuted
}

if(-0)
{
     // code not excuted
}