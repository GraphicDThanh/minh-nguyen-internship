function getAttributes() {
  const link = document.getElementById('w3r');
  // get the value of the href
  const hrefLink = link.href;
  // get the value of the hreflang
  const hreflangLink = link.hreflang;
  // get the value of the rel
  const relLink = link.rel;
  // get the value of the target
  const targetLink = link.target;
  // get the value of the type
  const typeLink = link.type;

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
