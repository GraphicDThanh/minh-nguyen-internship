const list = ['a', 'b', 'c'];
let i = 0;

// while
document.writeln('Use while loop: ');

while (i < list.length) {
  document.writeln(list[i]); // value
  document.writeln(i); // index
  i += 1;
}

document.writeln('<br>');

// for
document.writeln('Use for: ');

for (i = 0; i < list.length; i += 1) {
  document.writeln(list[i]); // value
  document.writeln(i); // index
}

document.writeln('<br>');
