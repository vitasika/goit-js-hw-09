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

const inputEl = document.querySelector('#datetime-picker');
console.log('#datetime-picker');

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
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    }, 
};