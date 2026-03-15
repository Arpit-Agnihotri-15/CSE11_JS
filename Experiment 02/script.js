let employees = [];

function addEmployee(){
    let name = document.getElementById("name").value.trim();
    let id = document.getElementById("id").value.trim();
    let salary = document.getElementById("salary").value.trim();
    let dept = document.getElementById("dept").value.trim();
    if(name === "" || id === "" || salary === "" || dept === ""){
        alert("Please fill all fields correctly.");
        return;
    }
    salary = parseFloat(salary);
    let emp = {
        name:name,
        id:id,
        salary:salary,
        dept:dept
    };
    employees.push(emp);
    document.getElementById("output").innerHTML = "Employee Added!";
}

function displayEmployees(){
    let output="All Employees:<br>";
    for(let emp of employees){
        output += `Name: ${emp.name} | ID: ${emp.id} | Salary: ₹${emp.salary} | Dept: ${emp.dept} <br>`;
    }
    document.getElementById("output").innerHTML = output;
}

function filterSalary(){
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output="Employees with Salary > ₹50,000:<br>";
    for(let emp of filtered){
        output += `Name: ${emp.name} | Salary: ₹${emp.salary} <br>`;
    }
    document.getElementById("output").innerHTML = output;
}

function totalSalary(){
    let total = 0;
    for(let emp of employees){
        total += emp.salary;
    }
    document.getElementById("output").innerHTML = "Total Salary Payout: ₹" + total;
}

function averageSalary(){
    let total = 0;
    for(let emp of employees){
        total += emp.salary;
    }
    let avg = total / employees.length;
    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg.toFixed(2);
}

function countDepartment(){

    let dept = prompt("Enter Department Name:");
    let count = 0;
    for(let emp of employees){
        if(emp.dept.toLowerCase() === dept.toLowerCase()){
            count++;
        }
    }
    document.getElementById("output").innerHTML =
    "Employees in " + dept + " Department: " + count;
}