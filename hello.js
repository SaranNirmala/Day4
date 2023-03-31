const xhttp=new XMLHttpRequest();
xhttp.open('GET', 'https://restcountries.com/v3.1/all', true);

xhttp.onload= function(){
    let country=JSON.parse(xhttp.responseText);
    for(let i=0; i<=country.length-1; i++)
    {
        console.log(country[i].flag);          // Display all coutry flag 

        // click the Flags button we can get all the flags
        let btnCountryFlags=document.getElementById("btn-countriesFlags");      // Display flags 
        btnCountryFlags.addEventListener('click', function(){
            console.log(country[i].flags);
        });

    }
}


xhttp.send();
