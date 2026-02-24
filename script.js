console.log("Hello Console!");
//document.write("Hello Browser!" + "<br>");

num = 10;
console.log(num);
//document.write(num + "<br>");
console.log(typeof(num));
//document.write(typeof(num) + "<br>");
num = "Arpit Agnihotri";
console.log(num);
//document.write(num + "<br>");        
console.log(typeof(num));
//document.write(typeof(num) + "<br>");    
num = true;
console.log(num);
//document.write(num + "<br>");
console.log(typeof(num));
//document.write(typeof(num) + "<br>");        
num = null;
console.log(num);
//document.write(num + "<br>");
console.log(typeof(num));
//document.write(typeof(num) + "<br>");
num = undefined;
console.log(num);
//document.write(num + "<br>");
console.log(typeof(num));
//document.write(typeof(num) + "<br>");

const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if (sym1 === sym2) {
    console.log("True, Symbols are same");
}
else{
    console.log("False, Symbols are not same");
}
     

 