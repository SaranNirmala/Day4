let obj1={ name : "Person 2", age : 5};
let obj2={age : 5, name : "Person 2"}
let temp=true;

// We cannot compare the obj so need to convert string

// if(JSON.stringify(obj1) === JSON.stringify(obj2))
// {
//     console.log("Both properties are same");
// } else
// {
//     console.log("Both properties are different");
// }


if(Object.keys(obj1).length == Object.keys(obj2).length)
{
    for(let key in obj1)
    {
        if(obj1[key] == obj2[key])
        {
            continue;
        } else{
            temp=false;
            break;
        }
    } 
    
} else{
   temp=false;
}

console.log(temp);