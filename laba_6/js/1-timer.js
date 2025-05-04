let userSelectedDate;
const defaultDate = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate,
  minuteIncrement: 1,
  onClose: function(selectedDates) {
    checkDate(selectedDates);
  }
};

const selector = document.getElementById('datetime-picker');
const button = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const fp = flatpickr(selector, options);

button.addEventListener('click', startTimer);

function startTimer() {
  button.disabled = true;
  changeInputState(true);

  setInterval(() => {
    const now = new Date();
    const diff = userSelectedDate - now;

    if (diff <= 0) {
      clearInterval(timerId);
      updateTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      changeInputState(false);
      return;
    }

    const time = convertMs(diff);
    if(time) {
      updateTime(time);
    }
  }, 1000);
}

function updateTime({ days, hours, minutes, seconds }) {
  daysEl.textContent =  addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function checkDate(selectedDates) {
  if(selectedDates[0] < defaultDate) {
    button.disabled = true;
    setTimeout(() => {
      iziToast.error({
        title: 'Hello',
        message: 'Please choose a date in the future'
    });
    }, 500);
  } else {
    userSelectedDate = selectedDates[0];
    button.disabled = false;
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function changeInputState(disable) {
  if(disable) {
    fp._input.setAttribute('disabled', 'disabled');
  } else {
    fp._input.removeAttribute('disabled');
  }
}
