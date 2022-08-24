function insertRow() {
  // insert row when click button
  const row = document.getElementById('sampleTable').insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.innerHTML = 'Cell1';
  cell2.innerHTML = 'Cell2';
}

const insertR = document.getElementById('insertRow');
insertR.onclick = insertRow();

function deleteRow() {
  // delete row when click button
  document.getElementById('sampleTable').deleteRow(0);
}

const deleteR = document.getElementById('deleteRow');

deleteR.onclick = deleteRow();
