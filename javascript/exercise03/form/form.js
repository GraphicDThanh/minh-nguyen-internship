const email = document.getElementById('email');
const uname = document.getElementById('username');
const pass = document.getElementById('password');
const rePass = document.getElementById('repass');

// Validate Email
function validateEmail(input) {
  const msgEmail = document.getElementById('msg-email');
  const validRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // case 1: leave the input field blank
  if (input.value === '') {
    msgEmail.innerText = 'Email is empty';
    return false;
  }

  // case 2: enter the correct email format
  if (input.value.match(validRegex)) {
    msgEmail.innerText = '';
    return true;
  }

  // case 3: enter the wrong email format
  msgEmail.innerText = 'Email address wrong format. example: username@somewhere.sth';
  return false;
}

// Validate Username
function validateUsername(input) {
  const msgName = document.getElementById('msg-username');
  const validRegex = /^[a-zA-Z0-9_-]*$/;

  // case 1: leave the input field blank
  if (input.value === '') {
    msgName.innerText = 'Username is empty';
    return false;
  }

  // case 2: input content should not exceed 40 characters
  if (input.value.length > 40) {
    msgName.innerText = 'Username is too long. Maximum is 40 character';
    return false;
  }

  // case 3: names accepted with limited characters accepted
  if (input.value.match(validRegex)) {
    msgName.innerText = '';
    return true;
  }

  // case 4: contain strange symbols or extra spaces
  msgName.innerText = 'Username is invalid. Be sure it does not contain strange symbols or extra spaces anywhere';
  return false;
}

// Validate Password
function validatePassword(input) {
  const msgPass = document.getElementById('msg-pass');
  const validRegex = /^[a-zA-Z0-9]*$/;

  // case 1: leave the input field blank
  if (input.value === '') {
    msgPass.innerText = 'Password is empty';
    return false;
  }

  // case 2: valid password with allowed characters
  if (input.value.match(validRegex)) {
    msgPass.innerText = '';
    return true;
  }

  // case 3: It lacks digits or does not lack letters
  msgPass.innerText = 'Password is invalid. It must contain letters and at least one digit';
  return false;
}

// Validate Re-Password
function validateRePassword(inputPass, inputRePass) {
  const msgrePass = document.getElementById('msg-rePass');

  // Pass and repass must match
  if (inputPass.value === inputRePass.value) {
    msgrePass.innerText = '';
    return true;
  }
  msgrePass.innerText = 'Password and Cofirmation Password do not match';
  return false;
}

// create event
const validate = (event) => {
  event.preventDefault();

  const displayInfo = document.getElementById('display-info');
  const validEmail = validateEmail(email);
  const validUname = validateUsername(uname);
  const validPass = validatePassword(pass);
  const validRePass = validateRePassword(pass, rePass);

  // print data to the screen
  if (
    validEmail === true
    && validUname === true
    && validPass === true
    && validRePass === true
  ) {
    displayInfo.innerHTML = `
      Email: ${email.value} </br>
      Username: ${uname.value} </br>
      Password: ${pass.value} </br>
      Cofirmation Password: ${rePass.value}
    `;
    displayInfo.style.color = 'purple';
  } else {
    displayInfo.innerHTML = 'Invalid Data Entered';
    displayInfo.style.color = 'red';
  }
};

// reset form
const reset = () => {
  window.location.reload();
};

document.querySelector('#signup').addEventListener('submit', validate);

document.querySelector('#signup').addEventListener('reset', reset);
