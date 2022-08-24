function getAttributes() {
  // get the value of the href
  const hrefLink = document.getElementById('w3r').href;
  // get the value of the hreflang
  const hreflangLink = document.getElementById('w3r').hreflang;
  // get the value of the rel
  const relLink = document.getElementById('w3r').rel;
  // get the value of the target
  const targetLink = document.getElementById('w3r').target;
  // get the value of the type
  const typeLink = document.getElementById('w3r').type;

  document.writeln(`The value of the href attribute of the link is : ${hrefLink}`);
  document.writeln('<br>');
  document.writeln(`The value of the hreflang attribute of the link is : ${hreflangLink}`);
  document.writeln('<br>');
  document.writeln(`The value of the rel attribute of the link is : ${relLink}`);
  document.writeln('<br>');
  document.writeln(`The value of the taget attribute of the link is : ${targetLink}`);
  document.writeln('<br>');
  document.writeln(`The value of the type attribute of the link is : ${typeLink}`);
}

const button = document.querySelector('button');

button.onclick = getAttributes();
