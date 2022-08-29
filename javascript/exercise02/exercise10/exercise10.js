function volumeSphere() {
  // get the absolute value of the input
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);

  // use the formula to calculate the volume of the sphere
  let volume = (4 / 3) * Math.PI * radius ** 3;
  // take 4 decimal places
  volume = volume.toFixed(4);

  // print the result to the volume cell
  const result = document.getElementById('volume');
  result.value = volume;
}

const button = document.getElementById('calculate');

button.onclick = volumeSphere();
