const form = document.getElementById('validation-input');

form.addEventListener('blur', OnInputChange);

function OnInputChange() {
  if (form.value.length == form.dataset.length) {
    form.classList.remove('invalid');
    form.classList.add('valid');
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
  }
}
