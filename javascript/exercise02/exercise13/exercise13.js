function getSize() {
  const element = document.documentElement;
  const width = element.clientWidth;
  const height = element.clientHeight;

  // put the result into a h1 tag
  document.getElementById('wh').innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}
