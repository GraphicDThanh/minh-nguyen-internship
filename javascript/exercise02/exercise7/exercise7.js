function createTable() {
  const row = document.getElementById('numberRow').value;
  const column = document.getElementById('numberColumn').value;

  for (let r = 0; r < row; r += 1) {
    const x = document.getElementById('myTable').insertRow(r);
    for (let c = 0; c < column; c += 1) {
      const y = x.insertCell(c);
      y.innerHTML = `Row-${r} Column-${c}`;
    }
  }
}

const create = document.getElementById('create');
create.onclick = createTable();
