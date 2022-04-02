// Найти строку в html кнопку Start с названием data-start
const btnStartEl = document.querySelector('[data-start]');
console.log(btnStartEl);

// Найти строку в html кнопку Stop с названием data-stop
const btnStopEl = document.querySelector('[data-stop]');
console.log(btnStopEl);

// Находим общий body на странице для смены на нем цвета фона
const bodyEl = document.querySelector('body');
console.log(bodyEl);

// Идентификатор переменной интервала таймера
let timerId; // изменяемая переменная которая буде использоваться для функции смены цветов на body

//Для генерации случайного цвета используем функцию getRandomHexColor по условию задачи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Вариант 1
// Вызываем слушателя события 'click' на кнапке btnStartEl (start) которая вызывавет колбэк функцию onBtnStartClick
//btnStartEl.addEventListener('click', onBtnStartClick)

//Вариант 2 (все в одном)
// Вызываем слушателя события 'click' на кнапке btnStartEl (start) и сразу добавляем функцию для исполнения
btnStartEl.addEventListener('click', () => {
  //bodyEl.style.backgroundColor = getRandomHexColor(), 1000; // не меняет автоматом цвет backgroundColor на body 

  //Функция setInterval() после своего выполнения возвращает timerId, остановить функцию setInterval() можно только при помощи этого timerId
  timerId = setInterval(() => { bodyEl.style.backgroundColor = getRandomHexColor(); }, 1000); // добавляет стиль backgroundColor на body с функцией генератора случайного цвета и таймером его смены на 1000мс
  
  btnStartEl.disabled = true; // включена кнопка start на нее можно нажать
  btnStopEl.disabled = false; // отключена кнопка stop не нажемается
}
)

// Вариант 1
// Вызываем слушателя события 'click' на кнапке btnStopEl (stop) которая вызывавет колбэк функцию onBtnStopClick
//btnStopEl.addEventListener('click', onBtnStopClick)


//Вариант 2 (все в одном)
// Вызываем слушателя события 'click' на кнапке btnStopEl (stop) и сразу добавляем функцию для исполнения
btnStopEl.addEventListener('click', () => {
  clearInterval(timerId); // функция которая останавливает setInterval() по идентификатору timerId на смену цветов body
  btnStartEl.disabled = false; // отключена кнопка start не нажемается
  btnStopEl.disabled = true; // включена кнопка stop на нее можно нажать
}
)





