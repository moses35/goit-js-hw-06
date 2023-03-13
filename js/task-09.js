const btn = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const bodyColor = document.querySelector('body');

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const randomColor = getRandomHexColor();
  bodyColor.style.background = randomColor;
  spanText.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
