function getData(color, age) {
  document.writeln(`color: ${color}`);
  document.writeln('<br>');
  document.writeln(`age: ${age}`);
  document.writeln('<br>');
}

// Passing 2 arguments and print 'green' and '24'
getData('green', 24);

// Missing param fos the age then will print 'underfined'
getData('black');
