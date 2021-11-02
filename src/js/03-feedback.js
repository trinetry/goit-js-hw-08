var throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

const savedFormDataJSON = localStorage.getItem(LOCALSTORAGE_KEY);
const savedFormData = JSON.parse(savedFormDataJSON);

if (savedFormData !== null) {
    feedbackForm['email'].value = savedFormData.email;
    feedbackForm['message'].value = savedFormData.message;
};

feedbackForm.addEventListener('input', throttle(evt => {
  const formData = { email: `${feedbackForm['email'].value}`, message: `${feedbackForm['message'].value}` };
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, formDataJSON);
}, 500));

feedbackForm.addEventListener('submit', evt => {
evt.preventDefault();
  const formData = { email: `${feedbackForm['email'].value}`, message: `${feedbackForm['message'].value}` };
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    feedbackForm['email'].value = '';
    feedbackForm['message'].value = '';

});