function display(something) {
  document.writeln(something);
}

function calculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

calculator(5, 5, display);
