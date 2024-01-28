class Calculator {
  constructor() {
    this.current = "";
  }

  inputNum(num) {
    this.current += num;
  }

  add() {
    this.current += "+";
  }

  subtract() {
    this.current += "-";
  }

  multiply() {
    this.current += "*";
  }

  divide() {
    this.current += "/";
  }

  equals() {
    this.current = parseFloat(eval(this.current).toFixed(10));
  }

  clear() {
    this.current = "";
  }

  delete() {
    this.current = this.current.toString().split("").slice(0, -1).join("");
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
  calc.divide();
  showCurrentNum();
});

document.querySelector(".multiply").addEventListener("click", function () {
  calc.multiply();
  showCurrentNum();
});

document.querySelector(".subtract").addEventListener("click", function () {
  calc.subtract();
  showCurrentNum();
});

document.querySelector(".add").addEventListener("click", function () {
  calc.add();
  showCurrentNum();
});

document.querySelector(".equals").addEventListener("click", function () {
  calc.equals();
  showCurrentNum();
});

document.querySelector(".one").addEventListener("click", function () {
  calc.inputNum(1);
  showCurrentNum();
});

document.querySelector(".two").addEventListener("click", function () {
  calc.inputNum(2);
  showCurrentNum();
});

document.querySelector(".three").addEventListener("click", function () {
  calc.inputNum(3);
  showCurrentNum();
});

document.querySelector(".four").addEventListener("click", function () {
  calc.inputNum(4);
  showCurrentNum();
});

document.querySelector(".five").addEventListener("click", function () {
  calc.inputNum(5);
  showCurrentNum();
});

document.querySelector(".six").addEventListener("click", function () {
  calc.inputNum(6);
  showCurrentNum();
});

document.querySelector(".seven").addEventListener("click", function () {
  calc.inputNum(7);
  showCurrentNum();
});

document.querySelector(".eight").addEventListener("click", function () {
  calc.inputNum(8);
  showCurrentNum();
});

document.querySelector(".nine").addEventListener("click", function () {
  calc.inputNum(9);
  showCurrentNum();
});

document.querySelector(".zero").addEventListener("click", function () {
  calc.inputNum(0);
  showCurrentNum();
});

document.querySelector(".decimal").addEventListener("click", function () {
  calc.inputNum(".");
  showCurrentNum();
});

showCurrentNum();

document.addEventListener("keydown", function (event) {
  const key = event.key;

  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      calc.inputNum(+key);
      showCurrentNum();
      break;
    case ".":
      calc.inputNum(key);
      showCurrentNum();
      break;
    case "+":
      calc.add();
      showCurrentNum();
      break;
    case "-":
      calc.subtract();
      showCurrentNum();
      break;
    case "*":
      calc.multiply();
      showCurrentNum();
      break;
    case "/":
      event.preventDefault();
      calc.divide();
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
