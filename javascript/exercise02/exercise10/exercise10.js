function volumeSphere() {
  let volume;
  let radius = document.getElementById('radius').value;

  radius = Math.abs(radius);
  volume = (4 / 3) * Math.PI * radius ** 3;
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
}

document.getElementById('MyForm').addEventListener('submit', () => {
  document.writeln(volumeSphere().volume);
});
