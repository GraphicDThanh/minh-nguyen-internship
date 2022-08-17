/* eslint-disable no-alert */
function validateForm(e) {
  e.preventDefault();
  const email = document.form.email.value.trim();
  const name = document.form.name.value.trim();
  const password = document.form.password.value.trim();
  const rePassword = document.form.reenter.value.trim();
  const erorMess = document.createElement('p');
  erorMess.style.color = 'red';

  // check email conditions
  const atpos = email.indexOf('@');
  const dotpos = email.lastIndexOf('.');
  const emailGroup = document.querySelector('.email');
  // cannot be left blank
  if (email === null || email === '') {
    erorMess.textContent = 'Cannot be left blank.';
    emailGroup.parentNode.insertBefore(erorMess, emailGroup.nextSibling);
  }
  if (atpos < 1 || dotpos - atpos < 2) {
    const emailGroup = document.querySelector('.email');

    erorMess.textContent = 'Email adddress wrong format. example: username@somewhere.sth';
    emailGroup.parentNode.insertBefore(erorMess, emailGroup.nextSibling);
  }
  return true;
}

function resetData() {
  document.myform.reset();
}

const formSignup = document.querySelector('.form');

formSignup.addEventListener('submit', (e) => validateForm(e));
