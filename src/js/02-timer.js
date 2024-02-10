import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';

const refs = {
  btnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
const dateInput = document.querySelector('#datetime-picker');
let currentDate = null;
let timeLeft = 0;
let userDate = null;

refs.btnEl.addEventListener('click', onClickBtn);
refs.btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = new Date();
    checkSelectedDate(selectedDates);
  },
};

flatpickr(dateInput, options);

function checkSelectedDate(selectedDates) {
  userDate = selectedDates[0];
  if (currentDate - selectedDates[0] >= 0) {
    Notiflix.Notify.failure('Please choose a date in the future');
    // alert('Please choose a date in the future');
    refs.btnEl.classList.remove('is-active');
    return;
  }
  refs.btnEl.disabled = false;
  refs.btnEl.classList.add('is-active');
}

function onClickBtn() {
  currentDate = new Date();
  timeLeft = userDate - currentDate;
  dateInput.disabled = true;
  refs.btnEl.disabled = true;
  refs.btnEl.classList.remove('is-active');

  const interval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    refs.daysEl.textContent = addLeadingZero(days);
    refs.hoursEl.textContent = addLeadingZero(hours);
    refs.minutesEl.textContent = addLeadingZero(minutes);
    refs.secondsEl.textContent = addLeadingZero(seconds);
    timeLeft -= 1000;
    if (timeLeft <= 0) {
      clearInterval(interval);
      dateInput.disabled = false;
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
