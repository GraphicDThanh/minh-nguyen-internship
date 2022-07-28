document.writeln("before");
setTimeout(() => {
  // runs after 2 seconds
  console.log("inside the function");
}, 2000);
document.writeln("after");
