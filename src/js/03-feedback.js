import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name = "email"]');
const commentEl = document.querySelector('texterea[name="message"]');

// Функція, яка зберігає стан форми в локальне сховище
const saveFormStateToLocalStorage = throttle(() => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

form.addEventListener('input', saveFormStateToLocalStorage);
