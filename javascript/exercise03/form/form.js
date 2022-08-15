function validateForm() {
  const name = document.myform.name.value;
  const password = document.myform.password.value;
  const rePassword = document.myform.reenter.value;

  if (name === null || name === '') {
    alert("Name can't be blank");
    return false;
  } if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  if (rePassword === null || rePassword === '') {
    alert("RePassword can't be blank");
    return false;
  } if (rePassword === password) {
    return true;
  }
  alert('rePassword must be same as password!');
  return false;
}

function resetData() {
  document.myform.reset();
}
