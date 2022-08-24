function insertRow() {
  // insert row when click button
  const x = document.getElementById('sampleTable').insertRow(0);
  const y = x.insertCell(0);
  const z = x.insertCell(1);

  y.innerHTML = 'Cell1';
  z.innerHTML = 'Cell2';
}

const insertR = document.getElementById('insertRow');
insertR.onclick = insertRow();

function deleteRow() {
  // delete row when click button
  document.getElementById('sampleTable').deleteRow(0);
}

const deleteR = document.getElementById('deleteRow');

deleteR.onclick = deleteRow();
