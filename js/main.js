class Calculator {
  constructor() {
    this.current = "";
    this.lastEvaluated = false; // Tracks if the last action was an evaluation
  }

  inputNum(num) {
    if (this.lastEvaluated) {
      this.current = ""; // Clear the current expression if last action was evaluation
      this.lastEvaluated = false; // Reset the flag
    }
    this.current += num.toString();
  }

  inputOperator(operator) {
    if (this.lastEvaluated) {
      this.lastEvaluated = false; // Reset the flag
    }
    this.current += operator;
  }

  equals() {
    try {
      this.current = parseFloat(Function(`'use strict'; return (${this.current})`)().toFixed(10));
      if (this.current === Infinity) {
        this.current = "nope ;)"; // Handle division by zero or other infinite results
      }
    } catch (error) {
      this.current = "Error";
    }
    this.lastEvaluated = true; // Set the flag after evaluation
  }

  clear() {
    this.current = "";
    this.lastEvaluated = false; // Reset the flag
  }

  delete() {
    if (this.lastEvaluated) {
      this.current = ""; // Clear if last action was evaluation
      this.lastEvaluated = false; // Reset the flag
    } else {
      this.current = this.current.toString().split("").slice(0, -1).join("");
    }
  }
}

let calc = new Calculator();

let display = document.getElementById("display");

document.querySelector(".clear").addEventListener("click", function () {
  calc.clear();
  showCurrentNum();
  display.textContent = "0";
});

document.querySelector(".backspace").addEventListener("click", function () {
  calc.delete();
  showCurrentNum();
});

document.querySelector(".divide").addEventListener("click", function () {
  calc.inputOperator("/");
  showCurrentNum();
});

document.querySelector(".multiply").addEventListener("click", function () {
  calc.inputOperator("*");
  showCurrentNum();
});

document.querySelector(".subtract").addEventListener("click", function () {
  calc.inputOperator("-");
  showCurrentNum();
});

document.querySelector(".add").addEventListener("click", function () {
  calc.inputOperator("+");
  showCurrentNum();
});

document.querySelector(".equals").addEventListener("click", function () {
  calc.equals();
  showCurrentNum();
});

document.querySelector(".calcContainer").addEventListener("click", function (event) {
  const button = event.target;
  const input = button.textContent;

  // Check if the input is a number or a decimal point
  if (!isNaN(input) || input === ".") {
    calc.inputNum(input);
    showCurrentNum();
  }
});

showCurrentNum();

document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Check if the key is a number or a decimal point
  if (!isNaN(key) || key === ".") {
    calc.inputNum(key);
    showCurrentNum();
    return;
  }

  // Handle other keys
  switch (key) {
    case "+":
      calc.inputOperator("+");
      showCurrentNum();
      break;
    case "-":
      calc.inputOperator("-");
      showCurrentNum();
      break;
    case "*":
      calc.inputOperator("*");
      showCurrentNum();
      break;
    case "/":
      event.preventDefault();
      calc.inputOperator("/");
      showCurrentNum();
      break;
    case "Enter":
    case "=":
      calc.equals();
      showCurrentNum();
      break;
    case "c":
    case "C":
      calc.clear();
      showCurrentNum();
      display.textContent = "0";
      break;
    case "Backspace":
      calc.delete();
      showCurrentNum();
      break;
  }
});

function showCurrentNum() {
  display.textContent = !calc.current ? "0" : calc.current;
}

//to do:

//add conditionals to prevent invalid inputsS
