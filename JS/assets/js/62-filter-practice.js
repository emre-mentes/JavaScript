import countries from "./data/countries.js";

const loadCountries = () => {

    let options ="";
    for (let country of countries) {

        options+= `<option value="${country.code}">${country.name} </option>`

        

    }
    document.querySelector("#dd1Countries").innerHTML = options;
  
};

const getCountry = (id) => {

    const arr = countries.filter ( (country) => country.code=== id )

   if ( arr.length > 0){
    return arr[0];

   }else {
    return null;
   }

};

document.querySelector("#dd1Countries").addEventListener("change",  (e) =>  {

    console.log(e.target.value)
    const country = getCountry(e.target.value);
    document.querySelector("#details tr:nth-child(1) td").innerHTML = country.mobileCode
    document.querySelector("#details tr:nth-child(2) td").innerHTML = country.timezone
    document.querySelector("#details tr:nth-child(3) td").innerHTML = country.code
    document.querySelector("#details tr:nth-child(4) td").innerHTML = country.utc

});


loadCountries();


console.log(getCountry('VA'))


