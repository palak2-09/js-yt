const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")

let firstNumber = "";
let secondNumber = "";
let operator = "";

//number buttons
numbers.forEach(function(button) {
    button.addEventListener("click", function() {
        if (operator === "") {
            firstNumber += button.textContent;
            display.value = firstNumber;
        } else {
            secondNumber += button.textContent;
            display.value = secondNumber;
        }
    });
});

//operator buttons
operators.forEach(function(button) {
    button.addEventListener("click", function() {
        if (firstNumber === "") {
            return;
        }
        operator = button.textContent;
    });
});

//equals button
equals.addEventListener("click", function() {
    if (firstNumber === "" || secondNumber === "" || operator === "") {
        return;
    }
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            display.value = "cannot divide by 0";
            return;
        }
        result = num1 / num2;
    }
    display.value = result;
})

//clear button
clear.addEventListener("click", function() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.value = "";
})