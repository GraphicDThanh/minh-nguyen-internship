const car1 = {
  color: 'blue',
  brand: 'Ford',
};

// Case 1: use dot notation
document.writeln('Case 1: ');
document.writeln(`The ${car1.color} car belongs to ${car1.brand}`);
document.writeln('<br>');

// Case 2: use square brackets
document.writeln('Case 2: ');
// eslint-disable-next-line prefer-template, dot-notation
document.writeln(car1['color'] + 'car belongs to' + car1['brand']);
