// Найти строку в html кнопку Start с названием data-start
const btnStartEl = document.querySelector('[data-start]');
console.log(btnStartEl);

// Найти строку в html кнопку Stop с названием data-stop
const btnStopEl = document.querySelector('[data-stop]');
console.log(btnStopEl);

// Нахидим общий body на странице для смены на нем цвета фона
const bodyEl = document.querySelector('body');
console.log(bodyEl);







/*
Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
*/