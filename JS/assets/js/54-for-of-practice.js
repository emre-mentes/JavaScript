import countries from "./data/countries.js";

const loadCountries = () => {

    let options ="";
    for (let country of countries) {

        options+= `<option >${country.name} (${country.mobileCode})</option>`

        console.log(country)

    }
    document.querySelector("#dd1Countries").innerHTML = options;
  
};

loadCountries();


