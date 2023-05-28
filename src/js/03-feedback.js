// Імпортуємо функцію `throttle` з пакету `lodash.throttle`
import throttle from 'lodash.throttle';

// Отримуємо посилання на елементи DOM форми
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

// Ключ для зберігання даних у `localStorage`
const STORAGE_KEY = 'feedback-form-state';

// Отримуємо збережені дані форми з `localStorage`
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

// Додаємо обробник події `input` до форми, використовуючи `throttle` для обмеження частоти виклику функції `onFormInput`
form.addEventListener('input', throttle(onFormInput, 500));

// Додаємо обробник події `submit` до форми
form.addEventListener('submit', onFormSubmit);

// Функція, яка викликається при введенні даних у форму
function onFormInput() {
  // Зберігаємо значення полів форми у `localStorage`
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ email: email.value, message: message.value })
  );
}

// Функція, яка викликається при поданні форми
function onFormSubmit(evt) {
  evt.preventDefault(); // Зупиняємо стандартну поведінку форми (у цьому випадку, перезавантаження сторінки)
  evt.currentTarget.reset(); // Очищуємо форму
  localStorage.removeItem(STORAGE_KEY); // Видаляємо збережені дані з `localStorage`
}

// Функція, яка заповнює поля форми збереженими значеннями з `localStorage`
function getValueFromLocalStorage() {
  if (formData === null) {
    return; // Якщо збережених даних немає, виходимо з функції
  }
  email.value = formData.email; // Заповнюємо поле форми збереженим значенням електронної пошти
  message.value = formData.message; // Заповнюємо поле форми збереженим значенням повідомлення
}

getValueFromLocalStorage(); // Викликаємо функцію для заповнення полів форми зі збереженими значеннями з `localStorage`
