import { students } from "./data/students.js";


const loadStudents = () => {

    let strStudents = "";

    students.forEach ( (student, index)=>  {
        strStudents+=`
             <tr >
             <th scope="row">${index+1}</th>
             <td>${student.name}</td>
             <td>${student.puan}</td>
             <td><button class="btn btn-danger btn-delete">Del</button></td>
             </tr>
            
          `;
    });

    document.querySelector("#tb1Students tbody").innerHTML=  strStudents;


};

const setStudentsBg = () => {
    const rows = document.querySelectorAll("#tb1Students tbody tr");

    for ( let row of rows ) {
        const point = row.querySelector("td:nth-child(3)").innerText;
        
        if(point < 50 ){
            row.classList.add("table-danger")
        }
        
    }
};


loadStudents();
setStudentsBg();

document.querySelectorAll(".btn-delete").forEach( (btn) => {
    btn.addEventListener ( "click", (e)=> {


        const row=e.target.closest("tr")

        const name =row.querySelector("td").innerText;
       
        const result = confirm(`${name} isimli kaydi silmek istediginden emin  misin ?`

        );
        
        if(!result) return;
        row.remove();
    

    })
});

document.querySelectorAll("#tb1Students tbody tr").forEach( (row) =>{

    row.addEventListener( "click", (e)=> {
        e.target.closest("tr").classList.toggle("table-warning");
    })
});




