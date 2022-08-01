// display information on the screen
function display(something) {
  document.writeln(something);
}

// sum 2 numbers entered
function calculator(num1, num2, myCallback) {
  const sum = num1 + num2;
  myCallback(sum);
}

calculator(5, 5, display);
