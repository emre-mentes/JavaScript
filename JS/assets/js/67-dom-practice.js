import { students } from "./data/students.js";


const loadStudents = () => {

    let strStudents = "";

    students.forEach ( (student, index)=>  {
        strStudents+=`
             <tr >
             <th scope="row">${index+1}</th>
             <td>${student.name}</td>
             <td>${student.puan}</td>
             </tr>
            
          `;
    });

    document.querySelector("#tb1Students tbody").innerHTML=  strStudents;


};

const setStudentsBg = () => {
    const rows = document.querySelectorAll("#tb1Students tbody tr");

    for ( let row of rows ) {
        const point = row.querySelector("td:nth-child(3)").innerText;
        
        if(point < 60 ){
            row.classList.add("table-danger")
        }
        
    }
}

loadStudents();
setStudentsBg();



