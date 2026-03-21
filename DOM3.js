function handleClick() {
    document.getElementById("output").innerHTML = "Button clicked!";
    console.log("Button was clicked!");
}

function handleMouseOver() {
    document.getElementById("output").innerHTML = "Mouse over button!";
    console.log("Mouse is over the button!");
}

function handleMouseOut() {
    document.getElementById("output").innerHTML = "Mouse out of button!";
    console.log("Mouse has left the button!");
}

function handleMouseDown() {
    document.getElementById("output").innerHTML = "Mouse down on button!";
    console.log("Mouse button is pressed!");
}

function handleMouseUp() {
    document.getElementById("output").innerHTML = "Mouse up on button!";
    console.log("Mouse button is released!");

}

function handleMouseMove() {
    document.getElementById("output").innerHTML = "Mouse moving over button!";
    console.log("Mouse is moving over the button!");
}
