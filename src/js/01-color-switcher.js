// Найти строку в html кнопку Start с названием data-start
const btnStartEl = document.querySelector('[data-start]');
console.log(btnStartEl);

// Найти строку в html кнопку Stop с названием data-stop
const btnStopEl = document.querySelector('[data-stop]');
console.log(btnStopEl);

// Находим общий body на странице для смены на нем цвета фона
const bodyEl = document.querySelector('body');
console.log(bodyEl);

// Вызываем слушателя события 'click' на кнапке btnStartEl (start) которая вызывавет колбэк функцию onBtnStartClick
btnStartEl.addEventListener('click', onBtnStartClick)

// Вызываем слушателя события 'click' на кнапке btnStopEl (stop) которая вызывавет колбэк функцию onBtnStopClick
btnStopEl.addEventListener('click', onBtnStopClick)





//Для генерации случайного цвета используем функцию getRandomHexColor по условию задачи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}