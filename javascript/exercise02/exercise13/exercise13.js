function getSize() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  // put the result into a h1 tag
  document.getElementById('wh').innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}
