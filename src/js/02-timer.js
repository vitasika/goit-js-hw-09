// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

// all modules
import Notiflix from 'notiflix';

/* Выбираем елементы 
input, 
button, 
span[data - days], 
span[data - hours],
span[data - minutes], 
span[data - seconds]
*/

const inputEl = document.querySelector('input#datetime-picker');
console.log('input#datetime-picker');

const startEl = document.querySelector('button[data-start]');
console.log('button[data-start]');

const daysEl = document.querySelector('span[data-days]');
console.log('span[data-days]');

const hoursEl = document.querySelector('span[data-hours]');
console.log('span[data-hours]');

const minutesEl = document.querySelector('span[data-minutes]');
console.log('span[data-minutes]');

const secondsEl = document.querySelector('span[data-seconds]');
console.log('span[data-seconds]');

// вешаем слушателя на кнопку start
startEl.addEventListener('click', start);

startEl.disabled = true;

// функция запуска таймера
function start() {

}

// Объект параметров (из ТЗ)
const options = {
    // Включает выбор времени
    enableTime: true,
    // Отображает средство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
    time_24hr: true,
    // Устанавливает начальную выбранную дату (даты)
    defaultDate: new Date(),
    // Регулирует шаг ввода минут (включая прокрутку)
    minuteIncrement: 1,
    // Функция(и) для запуска при каждом закрытии календаря
    /* В методе onClose() обрабатываем дату выбранную пользователем: 
  если пользователь не выбрал дату в будущем - failure, если верная дата - success*/
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const nowDate = Date.now(); // фактическое выбраное время в милисекундах
      console.log(nowDate);
      if (selectedDates[0] < nowDate) {
        return Notiflix.Report.warning('WARNING!', 'Select a date in the future.', 'next');        
      } else {
        Notiflix.Report.success('SUCCESS', 'The date is correct.', 'ok');
        startEl.disabled = false;
      }
    }, 
};

options.onClose(options);

const calendar = flatpickr('#datetime-picker', options);

//V1 всплывающие предупреждения
//Notiflix.Notify.warning('Attention!!! Select a date in the future.');
//Notiflix.Notify.success('The date is correct. Forward');



/* Выбираем время */

function updateTimer({ days, hours, minutes, seconds }) {
    dataDays.textContent = `${ days }`;
    dataHours.textContent = `${ hours }`;
    dataMinutes.textContent = `${ minutes }`;
    dataSeconds.textContent = `${ seconds }`;
}


// Принимает число, приводит к строке и добавляет 0 если число меньше 2-х знаков
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

// Для подсчета значений используй готовую функцию convertMs, где ms - разница между конечной и текущей датой в миллисекундах.
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



