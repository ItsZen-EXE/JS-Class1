// Call variables to set as numbers, just to ensure they are declared
let number1 = 0;
let number2 = 0;
let result = 0;

// Convert the numbers recieved into actual number values rather than strings
function convertNum() {
    number1 = Number(document.getElementById("number1").value);
    number2 = Number(document.getElementById("number2").value);
}

function addNum() {
    convertNum(); // Convert to number values
    result = number1 + number2; // Add numbers into result
    document.getElementById("output").innerText = String(result); //Output result as a string
}

function subNum() {
    convertNum(); // Convert to number values
    result = number1 - number2; // Subtract numbers into result
    document.getElementById("output").innerText = String(result); //Output result as a string
}

function multiNum() {
    convertNum(); // Convert to number values
    result = number1 * number2; // Multiply numbers into result
    document.getElementById("output").innerText = String(result); //Output result as a string
}

function diviNum() {
    convertNum(); // Convert to number values
    result = number1 / number2; // Divide numbers into result
    document.getElementById("output").innerText = String(result); //Output result as a string
}

// Add event listeners for if the user clicks each button
document.getElementById("add").addEventListener("click", addNum);
document.getElementById("sub").addEventListener("click", subNum);
document.getElementById("multi").addEventListener("click", multiNum);
document.getElementById("divi").addEventListener("click", diviNum);