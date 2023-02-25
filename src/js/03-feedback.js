import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const savedInputData = localStorage.getItem(LOCALSTORAGE_KEY);
const parseInputData = JSON.parse(savedInputData);

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  const inputData = {
    email: formEl.email.value,
    message: formEl.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
  if (savedInputData) {
    formEl.email.value = parseInputData.email;
    formEl.message.value = parseInputData.message;
  }
}
