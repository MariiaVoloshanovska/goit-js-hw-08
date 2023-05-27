import throttle from 'lodash.throttle';

const refs = {
  formELem: document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedback-form-state';

populateFormInput();

let allUserInfo = {};
function onFormInput(e) {
  let form = e.target;
  allUserInfo[form.name] = form.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function populateFormInput() {
  try {
    let formElements = refs.formELem.elements;
    const savedUserInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedUserInfo) {
      formElements.email.value = savedUserInfo.email || '';
      formElements.message.value = savedUserInfo.message || '';
    }

    // for (const field in savedUserInfo) {
    //     formElements[field].value = savedUserInfo[field] || '';
    // }
  } catch (error) {
    console.log(error);
  }
}
refs.formELem.addEventListener('input', throttle(onFormInput, 500));
refs.formELem.addEventListener('submit', onFormSubmit);

// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageInput = form.querySelector('textarea[name="message"]');
// const STORAGE_KEY = 'feedback-form-state';

// const storageFormTotal = throttle(() => {
//   const feedbackForm = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
// }, 500);

// form.addEventListener('input', storageFormTotal);
// const feedbackForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// //  Збереженні значення
// emailInput.value = feedbackForm.email || '';
// messageInput.value = feedbackForm.message || '';

// form.addEventListener('submit', formSubmit);

// function formSubmit(e) {
//   e.preventDefault();

//   const forFeedback = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   console.log(forFeedback);
//   // Очищистити локальне сховище & поля форми
//   localStorage.removeItem(STORAGE_KEY);
//   emailInput.value = '';
//   messageInput.value = '';
// }
