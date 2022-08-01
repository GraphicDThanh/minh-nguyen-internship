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
// eslint-disable-next-line no-plusplus
for (i = 0; i < list.length; i++) {
  document.writeln(list[i]); // value
  document.writeln(i); // index
}
document.writeln('<br>');
