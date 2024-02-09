const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let colorInterval = null;
stopBtn.disabled = true;

// Callback functions
function onStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  document.querySelector('body').style.backgroundColor = getRandomHexColor();

  colorInterval = setInterval(() => {
    document.querySelector('body').style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  clearInterval(colorInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Randon color function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
