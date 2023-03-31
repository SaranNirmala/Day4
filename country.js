const xreq=new XMLHttpRequest();
xreq.open('GET', 'https://restcountries.com/v3.1/all', true)


xreq.onload= function(){
    let countries=JSON.parse(xreq.responseText);
    for(let item in countries)
    {
       
        console.log(countries[item].name);
        console.log(countries[item].region);    
        console.log(countries[item].subregion);
        console.log(countries[item].population);
    }
}

xreq.send();