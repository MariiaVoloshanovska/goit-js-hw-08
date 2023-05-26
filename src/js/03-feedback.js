import throttle from 'lodash.throttle';

const refs = {
  formEL: document.querySelector('.feedback-form'),
};
thisFormInput();

let allUsersInfo = {};
function forOnFormInput(e) {
  let formStor = e.target;
  allUsersInfo[formStor.name] = formStor.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(allUsersInfo));
}
function foroOFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
function thisFormInput() {
  try {
    let formElements = refs.formEL.elements;
    const savedUserInform = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    for (const field in savedUserInform) {
      formElements[field].value = savedUserInform[field] || '';
    }
  } catch (error) {
    console.log(error);
  }
}
refs.formEL.addEventListener('input', throttle(forOnFormInput, 500));
refs.formEL.addEventListener('submit', foroOFormSubmit);
