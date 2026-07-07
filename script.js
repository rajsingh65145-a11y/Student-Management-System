const nameinput=document.getElementById("name");
const rollinput=document.getElementById("rollno");

const mathsinput=document.getElementById("maths");
const scienceinput=document.getElementById("science");
const englishinput=document.getElementById("english");
const computerinput=document.getElementById("computer");
const hindiinput=document.getElementById("hindi");



const resultTable=document.getElementById("resultTable");

const addbtn=document.querySelector(".addbtn");
const deletebtn=document.querySelector(".deletebtn")

let students=[];
addbtn.addEventListener("click",addStudent);

function addStudent(){
    const name=nameinput.value.trim();
    const rollno=rollinput.value.trim();
  
  
    const maths=Number(mathsinput.value);
    const science=Number(scienceinput.value);
    const english=Number(englishinput.value);
    const computer=Number(computerinput.value);
    const hindi=Number(hindiinput.value);

     //validation//
     if(
        name===""||
        rollno===""||
        mathsinput.value===""||
        scienceinput.value===""||
        englishinput.value===""||
        computerinput.value===""||
        hindiinput.value===""){
         alert("Please fill in all fields.")
         return;
     }

     const total=calculateTotal(maths,science,english,computer,hindi);
     const percentage=calculatePercentage(total);
     const grade=calculateGrade(percentage);


     const student={
        name,
        rollno,
        total,
        percentage,
        grade
     }

     students.push(student);
     displaystudents();
     clearinputs();
    }


    // total function

    function calculateTotal(m,s,e,c,h){
        return m+s+e+c+h;
    }
     function calculatePercentage(total){
        return(total/500)*100;
     }

     function calculateGrade(per){
        if(per>=90)
            return "A+";

         else if(per>=80)
             return "A";

         else if(per>=70)
            return "B";

         else if(per>=60)
            return "C";

         else if(per>=50)
            return "D"
        
         else
            return "fail";
     }

     function displaystudents(){
        resultTable.innerHTML="";

        students.forEach((student,index)=>{
            resultTable.innerHTML +=`
            
             <tr>

             <td>${student.name}</td>

        <td>${student.rollno}</td>

        <td>${student.total}</td>

        <td>${student.percentage.toFixed(2)}%</td>

        <td>${student.grade}</td>

        <td>
        <button onclick="deletestudent(${index})">
        Delete
        </button>
        </td>

        </tr>
        `;

        });



    }

    //delete student

    function deletestudent(index){
        students.splice(index,1);

        displaystudents();
    }

    // clear input

   function clearinputs(){
nameinput.value = "";
    rollinput.value = "";

    mathsinput.value = "";
    scienceinput.value = "";
    englishinput.value = "";
    computerinput.value = "";
    hindiinput.value = "";
    }
     
