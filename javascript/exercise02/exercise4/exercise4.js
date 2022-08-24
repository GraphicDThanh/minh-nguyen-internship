function getAttributes() {
  // get the value of the href
  const a = document.getElementById('w3r').href;
  // get the value of the hreflang
  const b = document.getElementById('w3r').hreflang;
  // get the value of the rel
  const c = document.getElementById('w3r').rel;
  // get the value of the target
  const d = document.getElementById('w3r').target;
  // get the value of the type
  const e = document.getElementById('w3r').type;

  document.writeln(`The value of the href attribute of the link is : ${a}`);
  document.writeln('<br>');
  document.writeln(`The value of the hreflang attribute of the link is : ${b}`);
  document.writeln('<br>');
  document.writeln(`The value of the rel attribute of the link is : ${c}`);
  document.writeln('<br>');
  document.writeln(`The value of the taget attribute of the link is : ${d}`);
  document.writeln('<br>');
  document.writeln(`The value of the type attribute of the link is : ${e}`);
}

const button = document.querySelector('button');

button.onclick = getAttributes();
