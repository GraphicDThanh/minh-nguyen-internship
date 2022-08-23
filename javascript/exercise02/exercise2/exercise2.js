function getFormValue() {
  const x = document.getElementById('form1');

  for (let i = 0; i < x.length; i += 1) {
    if (x.elements[i].value !== 'Submit') {
      document(x.elements[i].value);
    }
  }

  document.writeln(x);
}

const button = document.getElementById('submit');
button.onclick = getFormValue();
