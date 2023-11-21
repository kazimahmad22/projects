//clear error function

function clearError() {
  const errors = document.querySelectorAll('.error');

  errors.forEach((e) => {
    e.innerHTML = '';
  });
}

//default style function

function defaultStyle(id) {
  const targetedInput = document.querySelector(`#${id}`);
  targetedInput.style.backgroundColor = 'white';
}

//set error style function

function setError(id, errorMessage) {
  element = document.getElementById(id);
  document.getElementById(`${id}Error`).innerHTML = errorMessage;
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();

  let isValid = validateForm();

  const formStatus = document.querySelector('#status');
  if (isValid) {
    formStatus.style.color = 'green';
    formStatus.innerHTML = 'Success';
  } else {
    formStatus.style.color = 'red';
    formStatus.innerHTML = 'Failed';
  }
});
//   performing validation

function validateForm() {
  let returnValue = true;

  clearError();

  //   Name
  const name = document.querySelector('#fname');
  if (name.value.length < 5) {
    setError('fname', 'length of name is too short');
    name.style.backgroundColor = 'rgb(255, 168, 168)';
    returnValue = false;
  } else {
    defaultStyle(name.id);
  }

  // Date of birth

  const dob = document.querySelector('#dob');
  let age = new Date(dob.value);

  let today = new Date();
  let diff = age - today;
  let ageDate = new Date(diff);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1969);

  if (calculatedAge < 18) {
    setError('dob', 'your are under 18');
    dob.style.backgroundColor = 'rgb(255, 168, 168)';
    returnValue = false;
  } else {
    defaultStyle(dob.id);
  }

  //  Email
  const email = document.querySelector('#email');
  const domain = '@gmail.com';
  if (
    email.value.substring(
      email.value.length - domain.length,
      email.value.length,
    ) !== domain
  ) {
    returnValue = false;
    setError('email', 'enter a valid email');
    email.style.backgroundColor = 'rgb(255, 168, 168)';
  } else {
    defaultStyle(email.id);
  }

  //  phone
  const phone = document.querySelector('#phone');
  if (phone.value.length < 10 || phone.value.length > 11) {
    setError('phone', 'enter a valid phone number');
    phone.style.backgroundColor = 'rgb(255, 168, 168)';
    returnValue = false;
  } else {
    defaultStyle(phone.id);
  }

  // Password
  const password = document.querySelector('#password');
  if (password.value.length < 8) {
    returnValue = false;

    setError('password', 'must be more than 8 character');
    password.style.backgroundColor = 'rgb(255, 168, 168)';
  } else {
    defaultStyle(password.id);
  }

  //confirm password

  const confirmPassword = document.querySelector('#confirmPassword');

  if (confirmPassword.value !== password.value) {
    returnValue = false;
    setError('confirmPassword', 'password is not same');

    confirmPassword.style.backgroundColor = 'rgb(255, 168, 168)';
  } else {
    defaultStyle(confirmPassword.id);
  }

  return returnValue;
}
