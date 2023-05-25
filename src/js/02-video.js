// імпортувати бібліотеку vimeo/player + імпортувати бібліотеку lodash.throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// отримати посилання на iframe
const iframe = document.querySelector('iframe');

// // Ініціалізувати плеєр
const player = new Player(iframe);

// почати відстежувати подію timeupdate. Кожного разу, коли подія 'timeupdate' відбувається, код записує час відтворення у localStorage з ключем 'videoplayer-current-time'.
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);

// перевірти наявність значення в localStorage.
const currentTime = localStorage.getItem('videoplayer-current-time');
// Якщо значення є, то відтворення відео встановити на цей час за допомогою методу setCurrentTime().
if (currentTime) {
  player.setCurrentTime(currentTime);
}
