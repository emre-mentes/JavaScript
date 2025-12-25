import countries from "./data/countries.js";

const loadCountries = () => {

    let options ="";
    for (let country of countries) {

        options+= `<option >${country.name} (${country.mobileCode})</option>`

        

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


loadCountries();


console.log(getCountry('VA'))


