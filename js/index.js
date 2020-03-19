const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
let timerId;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColors() {
  timerId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(colors.length, 0)];
  }, 1000);
  btnStart.setAttribute('disabled', true);
}

function stopColors() {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled');
}

btnStart.addEventListener('click', changeColors);
btnStop.addEventListener('click', stopColors);
