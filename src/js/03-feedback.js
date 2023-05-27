import throttle from 'lodash.throttle';

const refs = {
  formEL: document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedback-form-state';
formInput();
//+ inform to localStorage
let allUserInfo = {};

function onFormInput(e) {
  let form = e.target;
  allUserInfo[form.name] = form.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allUserInfo));
}

//parse our localStorage and save clients info in our input and texterea
function formInput() {
  try {
    let formElements = refs.formEL.elements;
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

//clean input and texterea after click on button Submit
function onFormButSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

refs.formEL.addEventListener('input', throttle(onFormInput, 500));
refs.formEL.addEventListener('submit', onFormButSubmit);

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
