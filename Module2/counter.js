// Create a variable to start the counter at zero, just to make sure it is declared
let count = 0;

// assign variables based on the element IDs in the HTML file
let addElement = document.getElementById("add");
let subElement = document.getElementById("sub");
let numberElement = document.getElementById("number");

// add functions to the variables in order to increase or decrease the value accordingly
function addButton() {
    count++;
    numberElement.innerText = count;
}

function subButton() {
    count--;
    numberElement.innerText = count;
}

// Add event listeners to check if each button is clicked, activating the said functions.
addElement.addEventListener("click", addButton);
subElement.addEventListener("click", subButton);