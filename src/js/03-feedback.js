import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const savedInputEvent = localStorage.getItem('feedback-form-state');
const parseInputEvent = JSON.parse(savedInputEvent);

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  const inputEvent = {
    email: formEl.email.value,
    message: formEl.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputEvent));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(parseInputEvent);
}

function populateForm() {
  if (savedInputEvent) {
    formEl.email.value = parseInputEvent.email;
    formEl.message.value = parseInputEvent.message;
  }
}
