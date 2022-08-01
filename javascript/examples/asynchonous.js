document.writeln('before');
setTimeout(() => {
  // runs after 2 seconds
  document.writeln('inside the function');
}, 2000);
document.writeln('after');
