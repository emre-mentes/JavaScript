const cities = ["Ankara", "Izmir","Istanbul", "Sinop"];

document.querySelector("#btnSort").addEventListener("click", () =>{
    cities.sort();
    loadList();
});

document.querySelector("#btnReverse").addEventListener("click", () =>{
    cities.reverse();
    loadList();
});


document.querySelector("#btnRemoveFirst").addEventListener("click", () =>{
    cities.shift();
    loadList();
});


document.querySelector("#btnRemoveLast").addEventListener("click", () =>{
    cities.pop();
    loadList();
});


document.querySelector("#btnRemoveAll").addEventListener("click", () =>{
    cities.splice(0,cities.length);
    loadList();
});


document.querySelector("#btnMix").addEventListener("click", () => {
    for (let i = cities.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cities[i], cities[j]] = [cities[j], cities[i]]; // Elemanları yer değiştir
    }
    loadList();
});

document.querySelector("#btnAddCity").addEventListener("click", () =>{
   
   const city = document.querySelector("#txtCity").value;
   if(!city) return;
   cities.push(city)
   
   loadList();

});


const loadList = () => {

    let html = "";

    for(let i=0; i < cities.length; i++) {

        html+= `<li>${cities[i]}</li>`
    }
    document.querySelector("#cityList").innerHTML = html;
};

loadList();
