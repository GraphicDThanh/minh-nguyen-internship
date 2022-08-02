// display information on the screen
function display(something) {
  document.writeln(something);
}

// sum 2 numbers entered
function calculator(a, b, myCallback) {
  const sum = a + b;

  myCallback(sum);
}

calculator(5, 5, display);
