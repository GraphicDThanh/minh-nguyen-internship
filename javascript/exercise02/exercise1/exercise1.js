// font styles added by JS:
function setStyle() {
  const text = document.getElementById('text-example');

  text.style.fontSize = '14px';
  text.style.fontFamily = 'Comic Sans MS';
  text.style.color = 'green';
}

const button = document.querySelector('button');
button.onclick = setStyle;
