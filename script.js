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

const syn1 = Symbol(4);
console.log(syn1);
const syn2 = Symbol(4);
console.log(syn2);
if (syn1 === syn2) {
    console.log("True, Symbols are same");
}
else{
    console.log("False, Symbols are not same");
}
     

 