function volumeSphere() {
  let volume;
  let radius = document.getElementById('radius').value;

  radius = Math.abs(radius);
  volume = (4 / 3) * Math.PI * radius ** 3;
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
}

document.getElementById('MyForm').addEventListener('submit', () => {
  const out = document.querySelector('.output');
  out.textContent = volumeSphere.volume;
});
