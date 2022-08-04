function insertRow() {
  // insert row when click button
  const x = document.getElementById('sampleTable').insertRow(0);
  const y = x.insertCell(0);
  const z = x.insertCell(1);

  y.innerHTML = 'Cell1';
  z.innerHTML = 'Cell2';
}

function deleteRow() {
  // delete row when click button
  document.getElementById('sampleTable').deleteRow(0);
}
