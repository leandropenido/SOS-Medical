const userRegister = JSON.parse(localStorage.getItem('cadastro')) || 0;

if (!userRegister?.isLogged) {
  document.body.innerHTML = '';
}

const userName = document.querySelector('.patientName');
const userId = document.querySelector('.userId');

userName.textContent = userRegister.nome;
userId.textContent = userRegister.id;
