function getFormValue() {
  const valueForm = document.getElementById('form1');

  for (let i = 0; i < valueForm.length; i += 1) {
    if (valueForm.elements[i].value !== 'Submit') {
      document(valueForm.elements[i].value);
    }
  }

  document.writeln(valueForm);
}

const button = document.getElementById('submit');

button.onclick = getFormValue();
