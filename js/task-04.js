const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
