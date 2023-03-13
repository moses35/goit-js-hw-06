const formControl = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

formControl.addEventListener('input', OnInputChange);

function OnInputChange(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
