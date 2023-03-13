const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const controls = document.querySelector('#controls input');
const box = document.querySelector('#boxes');

let amount = 0;
const elements = [];

controls.addEventListener('input', onInputChange);
createBtn.addEventListener('click', onCrateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onInputChange(event) {
  amount = event.currentTarget.value;
}

function onCrateBtnClick() {
  //додаємо елементи
  createBoxes(amount);
  box.append(...elements);
}

function onDestroyBtnClick() {
  //видаляємо елементи
  box.innerHTML = '';
  controls.value = '';
  elements.length = 0;
  amount = 0;
}

function createBoxes(amount) {
  //створюємо елементи
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomHexColor();
    const item = document.createElement('div');
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.marginTop = '10px';
    item.style.background = randomColor;
    elements.push(item);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
