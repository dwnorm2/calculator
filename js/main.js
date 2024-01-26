class Calculator {
  constructor() {
    this.current = 0;
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
    console.log(eval(this.current));
    this.current = eval(this.current);
  }

  decimal() {
    this.current += ".";
  }

  clear() {
    this.current = 0;
  }
}

let calc = new Calculator();
