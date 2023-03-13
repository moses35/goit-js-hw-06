const formControl = document.querySelector('.login-form');

formControl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    return alert('Fields are empty!');
  } else {
    const info = {
      email: email.value,
      password: password.value,
    };
    console.log(info);
    event.currentTarget.reset();
  }
}
