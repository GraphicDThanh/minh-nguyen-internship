function removeColor() {
  const x = document.getElementById('colorSelect');

  x.remove(x.selectedIndex);
}

const button = document.getElementById('remove');

button.onclick = removeColor();
