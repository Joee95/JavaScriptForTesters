document.getElementById("demo1").innerHTML = "Yousef";
document.getElementById("demo2").innerHTML = "Hello JavaScript";

// Assign the onclick event to the button
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
    // Use new Date() for current date
    document.getElementById("MyDate").innerHTML = new Date(); 
}
document.write("<h3>Functions</h3>");
console.log("This is my Test");

document.getElementById("Add").onclick = AddFunction;
document.getElementById("Subtract").onclick = SubtractFunction;
document.getElementById("Multiply").onclick = MultiplyFunction;

function AddFunction() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let res = parseInt(num1) + parseInt(num2);
    document.getElementById("Result").innerHTML = res;
}

function SubtractFunction() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let res = parseInt(num1) - parseInt(num2);
    document.getElementById("Result").innerHTML = res;
}

function MultiplyFunction() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let res = parseInt(num1) * parseInt(num2);
    document.getElementById("Result").innerHTML = res;
}