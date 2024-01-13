// declare all variables
const email = document.getElementById('email')
const button = document.querySelector('.button')

// prevents the form from submitting
button.addEventListener('click', () => {
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDsiplay = inputControl.querySelector('#error');
  errorDsiplay.innerText = message;
  errorDsiplay.classList.add('emailError')
}

function setSuccess(element)  {
    const inputControl = element.parentElement;
    const errorDsiplay = inputControl.querySelector('#error')
    errorDsiplay.classList.remove('emailError')
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const emailValue = email.value.trim();

  if(emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }
}







// function validateEmail(){
//   if(!email.ariaValueMax.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     errorEmail.innerHTML = "Please enter a valid email";
//     return false;
//   }
// }





// const checkEmailValidity = () => {
//   errorEmail.classList.remove('showError');

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(email.value)) {
//     errorEmail.classList.add('showError');
//   }
// };

// form.addEventListener('submit', (e) => {
//   checkEmailValidity();

//   if (errorEmail.classList.contains('showError')) {
//     e.preventDefault();
//   }
// });





// if (input.value != 'bogdancazacucorneliu@gmail.com') {
//     document.getElementById(`${input.id}errorEmail`).classList.add('showError');
//   }