// Predefined line break for console output
const newline = "\n";

// Variables
let a = 10;
let b = 20;

// Display values
console.log("Value of a: " + a);
console.log("Value of b: " + b);
console.log(newline);

// Functions
function add(a, b) {
    let res = a + b;
    console.log("The sum of " + a + " and " + b + " is: " + res + newline);
}

function sub(a, b) {
    let res = a - b;
    console.log("The difference of " + a + " and " + b + " is: " + res + newline);
}

function pro(a, b) {
    let res = a * b;
    console.log("The product of " + a + " and " + b + " is: " + res + newline);
}

function div(a, b) {
    let res = a / b;
    console.log("The quotient of " + a + " and " + b + " is: " + res + newline);
}

function mod(a, b) {
    let res = a % b;
    console.log("The modulo of " + a + " and " + b + " is: " + res + newline);
}

// Function calls
add(a, b);
sub(a, b);
pro(a, b);
div(a, b);
mod(a, b);