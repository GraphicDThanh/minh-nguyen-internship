function removeColor() {
  const color = document.getElementById('colorSelect');

  color.remove(color.selectedIndex);
}

const button = document.getElementById('remove');

button.onclick = removeColor();
