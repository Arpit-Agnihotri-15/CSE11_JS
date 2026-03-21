// ---------------- DOM BASICS ----------------

// getElementById (fixed id from para -> demo)
const result = document.getElementById("demo");
result.innerHTML = "Hello World";
result.title = "AA";

// getElementsByClassName
const x = document.getElementsByClassName("myClass");
console.log(x);

if (x.length > 0) {
    x[0].innerHTML = "Arpit";
}
if (x.length > 1) {
    x[1].innerHTML = "Agnihotri";
}

// ---------------- QUERY SELECTOR ----------------

// Select all list items
const text = document.querySelectorAll("ul li");

// FIXED LOOP (forEach instead of for-in)
text.forEach(item => {
    item.style.backgroundColor = "skyblue";
    item.style.margin = "10px";
    item.style.color = "blue";
});

// Select first list item
const text2 = document.querySelector("ul li");
text2.style.color = "green";
text2.style.fontSize = "18px";
text2.innerText = "I am a Web Developer";

// ---------------- FUNCTIONS ----------------

// Function 1
function myFunction() {
    const demo = document.getElementById("demo");
    demo.setAttribute("class", "democlass");
    alert(demo.getAttribute("class"));
}

// Function 2
function changeHeading() {
    document.getElementById("myH1").setAttribute("class", "heading");
}
// Function 3
function updateHeading() {
    let newText = prompt("Enter new heading:");
    document.getElementById("myH1").innerHTML = newText;
}
