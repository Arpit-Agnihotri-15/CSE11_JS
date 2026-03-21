var text = '{ "employees": [' +
    '{ "firstName":"John","lastName":"Doe" },' +
    '{ "firstName":"Jane","lastName":"Smith" },' +
    '{ "firstName":"Alice","lastName":"Johnson" }' +
'] }';

// Convert JSON string to object
var obj = JSON.parse(text);

// Store output
let output = "";

// Loop through employees
for (let i = 0; i < obj.employees.length; i++) {
    output += obj.employees[i].firstName + " " + obj.employees[i].lastName + "<br>";
}

// Display all at once
document.getElementById("demo").innerHTML = output;