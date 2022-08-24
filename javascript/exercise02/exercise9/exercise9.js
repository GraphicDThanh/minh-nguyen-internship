function getOptions() {
  const x = document.getElementById('mySelect');
  let txt = 'Number of items : ';
  let i;
  const len = document.getElementById('mySelect').length;
  txt += len;

  for (i = 0; i < x.length; i += 1) {
    txt = `${txt}\n${x.options[i].text}`;
  }

  document.writeln(txt);
}

const button = document.getElementById('get');

button.onclick = getOptions();
