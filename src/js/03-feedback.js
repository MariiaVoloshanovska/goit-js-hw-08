// Імпортуємо функцію `throttle` з пакету `lodash.throttle`
import throttle from 'lodash.throttle';

// Отримуємо посилання на елементи DOM форми
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
// Ключ для зберігання даних у `localStorage`
const STORAGE_KEY = 'feedback-form-state';
// Функція, яка викликається при введенні даних у форму
function onFormInput() {
  // Зберігаємо значення полів форми у `localStorage`
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ email: email.value, message: message.value })
  );
}
// Отримуємо збережені дані форми з `localStorage`
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// Функція, яка викликається при поданні форми click Submit
function onFormSubmit(evt) {
  evt.preventDefault(); // Зупиняємо стандартну поведінку форми (у цьому випадку, перезавантаження сторінки)
  evt.currentTarget.reset(); // Очищуємо форму
  localStorage.removeItem(STORAGE_KEY); // Видаляємо збережені дані з `localStorage`
}
// Функція, яка заповнює поля форми збереженими значеннями з `localStorage` (reset web-page)
function getValueFromLocalStorage() {
  if (formData === null) {
    return; // Якщо збережених даних немає, виходимо з функції
  }
  email.value = formData.email; // Заповнюємо поле форми збереженим значенням електронної пошти
  message.value = formData.message; // Заповнюємо поле форми збереженим значенням повідомлення
}
// Додаємо обробник події `input` до форми, використовуючи `throttle` для обмеження частоти виклику функції `onFormInput`
form.addEventListener('input', throttle(onFormInput, 500));
// Додаємо обробник події `submit` до форми
form.addEventListener('submit', onFormSubmit);
getValueFromLocalStorage(); // Викликаємо функцію для заповнення полів форми зі збереженими значеннями з `localStorage` (reset web-page)

//========FROM OUR LESSON SOMETHING LIKE AS OLEKSII===========//
// import throttle from 'lodash.throttle';

// const contactFormEl = document.querySelector('.feedback-form');
// const userInfo = {};

// // Функція, яка оновлює дані в локальному сховищі з обмеженням частоти виклику не частіше ніж раз на 500 мілісекунд
// const updateLocalStorage = throttle(() => {
//   localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
// }, 500);

// // Функція, яка заповнює поля форми даними з локального сховища, якщо вони є
// const fillFormFields = () => {
//   // Отримуємо дані з локального сховища і розбираємо рядок JSON в об'єкт
//   const formDataFromLS = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   );

//   if (formDataFromLS === null) {
//     return;
//   }

//   // Заповнюємо поля форми значеннями з об'єкта formDataFromLS та оновлюємо userInfo
//   for (const key in formDataFromLS) {
//     contactFormEl.elements[key].value = formDataFromLS[key];
//     userInfo[key] = formDataFromLS[key];
//   }
// };

// // Обробник події зміни значення в полях форми
// const onFormInputChange = event => {
//   const inputField = event.target;
//   const fieldValue = inputField.value;
//   const fieldName = inputField.name;

//   // Зберігаємо значення поля в об'єкт userInfo
//   userInfo[fieldName] = fieldValue;
//   // Оновлюємо локальне сховище з обмеженням частоти виклику
//   updateLocalStorage();
// };

// // Обробник події відправки форми
// const onFormSubmit = event => {
//   event.preventDefault();

//   // console.log('Form submitted with the following data:');
//   // console.log(userInfo);

//   // Скидаємо значення полів форми та видаляємо дані з локального сховища
//   contactFormEl.reset();
//   localStorage.removeItem('feedback-form-state');
// };

// // Додаємо обробники подій до форми
// contactFormEl.addEventListener('input', onFormInputChange);
// contactFormEl.addEventListener('submit', onFormSubmit);

// // Заповнюємо поля форми при завантаженні сторінки
// fillFormFields();
