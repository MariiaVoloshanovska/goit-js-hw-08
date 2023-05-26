import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const storageFormTotal = throttle(() => {
  const feedbackForm = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}, 500);

form.addEventListener('input', storageFormTotal);
const feedbackForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

//  Збереженні значення
emailInput.value = feedbackForm.email || '';
messageInput.value = feedbackForm.message || '';

form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
  evt.preventDefault();

  const forFeedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(forFeedback);
  // Очищистити локальне сховище & поля форми
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
}
