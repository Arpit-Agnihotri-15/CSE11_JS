// getElementById Example
const result = document.getElementById('para');
result.innerHTML = 'Hello World';
result.title = 'myself';


// getElementsByClassName Example
function changeColor() {
    let elements = document.getElementsByClassName("text");

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
}


// getElementsByTagName Example
const result3 = document.getElementsByTagName('p');

result3[2].innerHTML = 'Hello World';   // third paragraph
result3[1].style.color = 'red';
result3[1].style.fontSize = '20px';
result3[1].style.fontFamily = 'Arial';
result3[1].style.fontWeight = 'bold';
result3[1].innerText = 'Myself = Arpit Agnihotri';


// querySelector Example
const text2 = document.querySelector('ul li:nth-child(2)');

text2.style.color = "green";
text2.style.fontSize = "18px";
text2.style.fontFamily = "Verdana";
text2.style.fontWeight = "bold";
text2.innerText = "I am a Web Developer";